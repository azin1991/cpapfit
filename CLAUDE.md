# cpapfit.ca: project rules

Redesign of the CPAP Fit clinic website. Source in `src/`, built into `site/` by `npm run build`.

## Page-by-page workflow (mandatory)
1. Build **one page at a time**, in this order: Home (`index`) → Rental Trials (`freetrial`) → About OSA (`osa`) → Already Using CPAP? (`already_using`) → FAQ (`faq`) → Contact (`contact`) → Privacy (`privacy`) → 404 (`404`).
2. For each page: write `src/pages/<page>.html` → `npm run build` → screenshots at 1280px and 390px compared with the Stitch screen → update `REVIEW.md` → commit and push → share the preview link.
3. **Stop after each page.** Do not start the next page until the user relays the manager's approval. Changes requested → new draft version of the same page.
4. Shared header/footer/layout changes are allowed at any time but must be noted in `REVIEW.md`, since they affect pages already approved.

## Content rules
- Source of truth for copy: the original site text in `../cpapfit website planning/stitch-prompts.md` plus agreed changes: **rental trials** (not loaner/free trials), **no office hours anywhere**, **embedded Google Maps** (not map images), **few icons** (functional only: menu, accordion, media), Chinese version later.
- Stitch design: `../cpapfit website planning/stitch_cpap_fit_website_refresh/<page>/screen.png` (layout reference only; its code is not reused).
- Remove Stitch's unverifiable claims (percentages, patient counts, star ratings, "verified", "accredited", "hospital-grade", "whisper-quiet", eligibility badges, invented pages/links).
- Useful extras that are not original copy stay, marked `data-review="why it needs approval"` and listed in `REVIEW.md`. Open any page with `#review` to see them outlined.

## Technical rules
- Static HTML only. The single exception is the future contact form handler `contact-submit.php`; no other PHP.
- Relative links only (the preview runs under a GitHub Pages sub-path).
- Images: WebP in `src/img/`, with `width`/`height` and meaningful `alt`. Non-hero images `loading="lazy"`.
- No external CDNs except Google Maps embeds, YouTube (`youtube-nocookie.com`) and, later, the form CAPTCHA.
- Preview builds (`PREVIEW=1`) are noindex and fill unbuilt pages with placeholders; production builds fail if any page is missing.

## Never commit (public repo)
The planning folder, the server backup, `server-audit.md`, `contact-config.php` or any secret.

## Commits
Messages end with:
Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
