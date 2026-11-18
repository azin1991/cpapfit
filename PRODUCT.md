# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Newly diagnosed patients:** have a sleep study result or CPAP prescription and are choosing where to start therapy. Often unsure about CPAP.
- **Existing CPAP users:** already on CPAP, possibly with another provider. Need masks, supplies, education or a pressure check.
- **Family members:** researching for a partner or parent.

## Product Purpose

Website of CPAP Fit, a CPAP clinic in Ontario with two locations: Downtown Toronto (123 Edward St, Unit 924) and Richmond Hill (Golden Plaza, 330 Hwy 7 E, Unit 105). It explains obstructive sleep apnea and CPAP, and gets visitors to **call a clinic**. Phone is the main conversion; a contact form comes later.

## Positioning

- ADP-registered vendor in Ontario: can fill CPAP prescriptions; patients may choose any ADP-registered vendor.
- CPAP educators are registered sleep technologists (RPSGT) and respiratory therapists (RT).
- Rental trials let new patients try CPAP before buying, with no pressure to buy.
- Education for anyone on CPAP, even if they bought it elsewhere.

## Operating Context

- A patient needs a CPAP prescription from a sleep physician before starting. Masks and accessories need no prescription.
- Rental trial: contact a clinic → get fitted by an educator → decide. ADP does not fund rentals.
- Trying masks free of charge is offered when purchasing a mask.

## Capabilities and Constraints

- Static HTML site, built from `src/` with Tailwind (`npm run build`). Hosted on Webnames shared hosting (Plesk), uploaded manually. Preview on GitHub Pages.
- No PHP except one future hardened contact form handler.
- Pages: Home, Rental Trials (`trial.html`), About OSA, Already Using CPAP?, FAQ, Contact, Privacy, 404.
- Each page is approved by the clinic manager before the next is built.
- Project rules: `CLAUDE.md`. Approval status and flagged copy: `REVIEW.md`.

## Brand Commitments

- Name: CPAP Fit (logo "CPAP FIT / SLEEP THERAPY"). Logo colours green #8DC436 and blue #0070C0.
- Copy comes from the old site, with agreed changes: "rental trials" (never "loaner" or "free"), no office hours anywhere, few icons (functional only).
- Hero uses the three licensed stock photos with the baked-in slogan "Get more out of your sleep".

## Evidence on Hand

- Nine written patient testimonials and three YouTube testimonial videos from the old site (on `trial.html`).
- Product and brand images in `src/img/`.
- No patient counts, ratings, accreditations or statistics exist. Do not invent any.

## Product Principles

1. Make calling easy: both clinic numbers are always one tap away.
2. Plain, calm, factual: patients are often anxious or tired; no sales pressure and no unverifiable claims.
3. Clinic-approved copy only: anything new is flagged for the manager before it ships.
4. Educate first: help people understand OSA and CPAP, including people who bought elsewhere.

## Accessibility & Inclusion

- A Chinese version is planned and important for the clinic's Chinese-speaking patients. Text must be real text (not baked into images) so it can be translated; the Chinese site reuses the same hero photos.
- Standard WCAG AA otherwise.
