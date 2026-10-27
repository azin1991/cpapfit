// Production build: writes the upload-ready site into ../../cpapfit.ca (the hosting folder).
// Pages in src/pages are wrapped in src/partials/layout.html with the shared header and footer.
// PREVIEW=1 builds the GitHub Pages preview: noindex, a preview banner, and placeholders for unbuilt pages.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const SITE_URL = 'https://cpapfit.ca';
const PREVIEW = process.env.PREVIEW === '1';
// Cloudflare Turnstile site key for the contact form. Leave empty until the form handler is live.
const TURNSTILE_SITE_KEY = '';
// Every page of the site, in build order.
const PAGES = [
  { file: 'index.html', title: 'Home', nav: 'home' },
  { file: 'freetrial.html', title: 'Rental Trials', nav: 'rental' },
  { file: 'osa.html', title: 'About Obstructive Sleep Apnea', nav: 'osa' },
  { file: 'already_using.html', title: 'Already Using CPAP?', nav: 'already' },
  { file: 'faq.html', title: 'Frequently Asked Questions', nav: 'faq' },
  { file: 'contact.html', title: 'Contact', nav: 'contact' },
  { file: 'privacy.html', title: 'Privacy', nav: '' },
  { file: '404.html', title: 'Page not found', nav: '' },
];

// Preview goes to site/ inside this repo (published by GitHub Actions); production goes to the hosting folder.
const OUT = PREVIEW ? 'site' : resolve('../../cpapfit.ca');
const read = (p) => readFileSync(p, 'utf8');

const missing = PAGES.filter((p) => !existsSync(`src/pages/${p.file}`));
// Clear the output folder's contents (never anything outside it).
if (!PREVIEW && basename(OUT) !== 'cpapfit.ca') throw new Error(`Refusing to clear unexpected folder ${OUT}`);
mkdirSync(OUT, { recursive: true });
for (const entry of readdirSync(OUT)) rmSync(`${OUT}/${entry}`, { recursive: true, force: true });
mkdirSync(`${OUT}/css`, { recursive: true });
mkdirSync(`${OUT}/fonts`, { recursive: true });

// CSS
execFileSync('node_modules/.bin/tailwindcss', ['-i', 'src/css/input.css', '-o', `${OUT}/css/site.css`, '--minify'], { stdio: 'inherit' });
const css = read(`${OUT}/css/site.css`);
const version = createHash('sha256').update(css + read('src/js/site.js')).digest('hex').slice(0, 8);

// Static assets
cpSync('src/img', `${OUT}/img`, { recursive: true });
cpSync('src/js', `${OUT}/js`, { recursive: true });
cpSync('src/static', OUT, { recursive: true });
for (const [pkg, file] of [
  ['inter', 'inter-latin-wght-normal.woff2'],
  ['plus-jakarta-sans', 'plus-jakarta-sans-latin-wght-normal.woff2'],
]) cpSync(`node_modules/@fontsource-variable/${pkg}/files/${file}`, `${OUT}/fonts/${file}`);

// Pages
const layout = read('src/partials/layout.html');
const header = read('src/partials/header.html');
const footer = read('src/partials/footer.html');
const previewBanner = PREVIEW
  ? '<div class="bg-warn-bg px-4 py-2 text-center font-heading text-label-md text-warn-ink">Preview of the new cpapfit.ca for internal review. This is not the live website.</div>'
  : '';
const placeholder = (page) => `<!--
title: ${page.title} | CPAP Fit (preview placeholder)
description: This page is being redesigned.
nav: ${page.nav}
sitemap: no
-->
<section class="section">
  <div class="container-site max-w-prose text-center">
    <p class="eyebrow">Coming next</p>
    <h1 class="mt-2 text-display-mobile md:text-display">${page.title}</h1>
    <p class="mt-4 text-body-lg text-on-surface-variant">This page is being redesigned and will appear here once the previous page is approved.</p>
    <p class="mt-6"><a class="btn-primary" href="index.html">Back to Home</a></p>
  </div>
</section>`;

const sitemap = [];
for (const page of PAGES) {
  const isPlaceholder = !existsSync(`src/pages/${page.file}`);
  // Production never contains placeholders: unbuilt pages are skipped and the folder is marked not ready.
  if (isPlaceholder && !PREVIEW) continue;
  const src = isPlaceholder ? placeholder(page) : read(`src/pages/${page.file}`);
  const meta = {};
  const front = src.match(/^<!--([\s\S]*?)-->/);
  for (const line of (front?.[1] ?? '').split('\n')) {
    const m = line.match(/^\s*(\w+):\s*(.+?)\s*$/);
    if (m) meta[m[1]] = m[2];
  }
  const content = src.slice(front ? front[0].length : 0).trim();
  const path = page.file === 'index.html' ? '/' : `/${page.file}`;
  const nav = meta.nav ?? '';
  const pageHeader = nav ? header.replaceAll(`data-nav="${nav}"`, `data-nav="${nav}" aria-current="page"`) : header;
  const turnstile = TURNSTILE_SITE_KEY ? `<div class="cf-turnstile mb-4" data-sitekey="${TURNSTILE_SITE_KEY}"></div>` : '';
  const formNote = PREVIEW
    ? '<p class="mb-4 rounded-lg bg-warn-bg p-3 text-body-sm text-warn-ink">The form is disabled on the preview. It will send messages once the site is live.</p>'
    : '';

  const html = layout
    .replace('{{preview_banner}}', previewBanner)
    .replace('{{header}}', pageHeader)
    .replace('{{footer}}', footer)
    .replace('{{content}}', content)
    .replaceAll('{{title}}', meta.title ?? 'CPAP Fit')
    .replaceAll('{{description}}', meta.description ?? '')
    .replaceAll('{{canonical}}', SITE_URL + path)
    .replaceAll('{{robots}}', PREVIEW ? 'noindex, nofollow' : (meta.robots ?? 'index, follow'))
    .replaceAll('{{v}}', version)
    .replace('{{turnstile_script}}', TURNSTILE_SITE_KEY && content.includes('{{turnstile}}')
      ? '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>' : '')
    .replace('{{turnstile}}', turnstile)
    .replace('{{form_note}}', formNote);

  writeFileSync(`${OUT}/${page.file}`, html);
  if (meta.sitemap !== 'no' && meta.robots !== 'noindex') sitemap.push(SITE_URL + path);
}

writeFileSync(`${OUT}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemap.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') + '\n</urlset>\n');
writeFileSync(`${OUT}/robots.txt`, PREVIEW
  ? 'User-agent: *\nDisallow: /\n'
  : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
if (PREVIEW) writeFileSync(`${OUT}/.nojekyll`, '');
if (!PREVIEW && missing.length) {
  writeFileSync(`${OUT}/NOT-READY-TO-UPLOAD.txt`,
    `Do not upload yet. These pages are not built: ${missing.map((p) => p.file).join(', ')}\n` +
    'This file disappears once every page exists.\n');
}

const built = PAGES.length - missing.length;
console.log(`Built ${built} page(s)${missing.length ? (PREVIEW ? ` + ${missing.length} placeholder(s)` : `, ${missing.length} not built yet (NOT READY TO UPLOAD)`) : ''} into ${OUT} (${PREVIEW ? 'preview' : 'production'}, assets v=${version})`);
