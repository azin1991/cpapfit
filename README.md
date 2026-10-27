# cpapfit.ca

Source for the redesigned [cpapfit.ca](https://cpapfit.ca) website of CPAP Fit (Downtown Toronto and Richmond Hill).

## Build

```sh
npm install
npm run build          # production build into ../../cpapfit.ca/ (upload-only folder; adds NOT-READY-TO-UPLOAD.txt until every page exists)
PREVIEW=1 npm run build # preview build: noindex, placeholders for unbuilt pages
npm run zip            # production build zipped to ../cpapfit-upload-DATE.zip (refuses while pages are missing)
```

- `src/pages/`: one file per page (front-matter comment with title, description, nav).
- `src/partials/`: shared layout, header and footer.
- `src/css/input.css`, `tailwind.config.js`: styles (Tailwind, compiled at build time).
- `src/img/`, `src/static/`: images, favicons.

## Preview

Every push to `main` publishes the preview to GitHub Pages. Add `#review` to any page address to outline text that still needs clinic approval; `#noreview` turns it off. Approval status: [`REVIEW.md`](REVIEW.md).

## Production

The live site is hosted on Webnames (Plesk). After all pages are approved, run the production build and upload the contents of `cpapfit.ca/` to `httpdocs`.
