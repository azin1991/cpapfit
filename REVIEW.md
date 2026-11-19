# Page approval

Pages are built one at a time. The next page starts only after the current one is approved.
On the preview, add `#review` to a page address to outline the flagged text below (`#noreview` turns it off).

| # | Page | File | Status | Version |
|---|---|---|---|---|
| 1 | Home | `index.html` | Approved (2026-11-02) | v1 |
| 2 | Rental Trials + Testimonials | `trial.html` | Approved (2026-11-18) | v1 |
| 3 | About OSA | `osa.html` | Approved (2026-11-18) | v2 |
| 4 | Already Using CPAP? | `already_using.html` | Sent for review | v1 |
| 5 | FAQ | `faq.html` | Approved (2026-11-18) | v1 |
| 6 | Contact | `contact.html` | Sent for review | v1 |
| 7 | Privacy | `privacy.html` | Sent for review | v1 |
| 8 | Page not found | `404.html` | Sent for review | v1 |
| 9 | Chinese version (all 8 pages) | `zh/*.html` | Sent for review | v1 |

Status values: Not started · Sent for review · Changes requested · Approved.

## Shared parts (on every page)

| Item | Status |
|---|---|
| Header language toggle "EN \| 中文" | Approved 2026-11-02: keep the placeholder while the Chinese version is in progress. |
| Footer fax numbers (416) 901-0688 and (905) 597-8827 | Approved 2026-11-02. |

Changes to shared parts after a page is approved are listed here with the date.

- 2026-11-19: Chinese (Traditional) version added under `zh/`, built from the approved translation file. "EN | 中文" in the header now links to the same page in the other language and shows on phones too.
- 2026-11-19: FAQ red warning now starts "DO NOT" (was "Don't").
- 2026-11-02: review mode (`#review`) now only outlines flagged items; it no longer tints their background.
- 2026-11-17: small uppercase labels (e.g. "DOWNTOWN TORONTO", "PHONE") are a darker grey so they meet the WCAG AA contrast minimum.
- 2026-11-19: clinic phone numbers on Home and Contact made smaller (28px to 24px).
- 2026-11-18: removed the brown "Review mode" bar from the top of the page. `#review` still outlines any flagged text on future pages.
- 2026-11-17: Rental Trials page renamed from `freetrial.html` to `trial.html`; menu, footer and page links updated. The live site will redirect the old address with a 301 in `.htaccess` at launch.
- 2026-11-03: removed the "Call (416) 901-0348" button from the desktop header; the two clinic call buttons in the phone menu stay.
- 2026-11-02: browser-tab icon (favicon) redrawn to match the old site: logo mark on a transparent background, no white frame.

## 1. Home: flagged items (v1), all approved 2026-11-02

| Section | Item | Was flagged because |
|---|---|---|
| Hero | "Rental trials, mask fitting and CPAP education from registered sleep technologists…" | New summary sentence, built from facts on the old About Us page. |
| Locations | Fax labels on both clinic cards | Same as footer: confirm the second numbers are fax lines. |
| About Us | "…visit our CPAP clinic during our business hours…" | Office hours are no longer shown. Keep the phrase or shorten to "visit our CPAP clinic"? |
| Professional Services | One-line description under each service | New; the old site listed only the service names. |
| Products | AirFit P10 and DreamWear; type labels on all six | AirSense 11, AirFit F40, AirFit N30i and F&P Solo were updated on 2026-10-27. P10 and DreamWear are still from the old list. Confirm they are still carried, and the type labels. |
| Brands we carry | DeVilbiss, HDM, Philips logos | Confirm the clinic still carries these brands; official high-resolution logos should replace the small images. |

What changed from the old Home page, for context: "Loaner Trials" is now "Rental Trials"; office hours removed; map images replaced by live Google Maps; the hero uses the original three photos (white side bars trimmed) with their built-in slogan "Get more out of your sleep"; the Chinese version will use the same photos; Stitch's invented claims ("Zero-obligation", "Whisper-quiet", "ADP eligible", "hospital-grade") were left out.

## 3. About OSA: flagged items

| Section | Item | Status |
|---|---|---|
| Intro | Airway diagram | v2: replaced with two images chosen on 2026-11-02, "Normal breathing" and "Obstructed breathing" (180 px each, shown at up to 220 px). The redrawn vector diagram was not used. |
| How is OSA diagnosed? | 3-step summary: Family doctor → Sleep study → Treatment | Approved v1 (2026-11-02). |
| Bottom | Closing call to action with "Start a rental trial" and "Contact us" | Approved v1 with change: keep the dark blue background readable. In v1 the review highlight tinted it pale yellow behind white text; fixed in v2. |

What changed from the old page, for context: all text is the original copy, word for word. The "Do you SNORE? TIRED during the day?" banner was an image of text; it is now real text in the same colours, so it can be read by screen readers and translated for the Chinese version. Added an "On this page" menu on desktop. The Rental Trials page is not built yet, so "Start a rental trial" opens a placeholder for now.

## 5. FAQ: flagged items (v1)

| Section | Item | Needs approval because |
|---|---|---|
| Why can't I just buy a CPAP mask online? | "advised that you rely" | Typo fixed; the old site said "advised that you to rely". **Approved 2026-11-18.** |
| Why can't I make pressure changes…? | "meet with your sleep physician" | Typo fixed; the old site said "meet with you sleep physician". **Approved 2026-11-18.** |
| Bottom | "Still have questions? Our CPAP educators are happy to help." box with both phone numbers and "Contact us" | New closing box, not on the old page. **Approved 2026-11-18.** |

What changed from the old page, for context: all five questions and answers are the original text, word for word apart from the two typo fixes. The first answer is open; the others open with a tap, one at a time (opening one closes the others). Answers slide open and closed, and the opened question scrolls smoothly to the top of the screen. Each question has a green three-bar button that turns into an X when open (design from Uiverse.io, chosen 2026-11-02). The pressure warning ("Don't try to change the pressure on your own…") is shown as a red warning box with a warning sign (wording unchanged; restyled 2026-11-02). Stitch's invented subtitle and badges ("Accredited Mask Fitting" etc.) were left out. The Contact page is not built yet, so "Contact us" opens a placeholder for now.

## 2. Rental Trials: flagged items (v1)

| Section | Item | Needs approval because |
|---|---|---|
| Natalie H.'s quote | Sentence about a payment plan removed, marked with "…" | No payment plan is offered any more. **Approved 2026-11-18.** |
| Natalie H.'s quote | "you're getting" | Typo fixed; the old site said "your getting". **Approved 2026-11-18.** |
| Sophia B.'s quote | "equipment" | Typo fixed; the old site said "equicpment". **Approved 2026-11-18.** |

What changed from the old page, for context: built from the approved content plan. "Loaner" is now "rental"; no trial length, fee or ADP mention. New "How it works" steps. All 9 quotes kept; long quotes show 4 lines with a "Read more" button. The 3 YouTube videos use YouTube's privacy-enhanced mode. The Contact page is not built yet, so "Contact us" opens a placeholder for now.

## 6. Contact: flagged items (v1)

| Section | Item | Needs approval because |
|---|---|---|
| Send us a message | The whole contact form (Name, Email, Phone, Preferred location, Message) | New; the old site had no form. Put back 2026-11-19. Messages will be emailed to the clinic once `contact-submit.php` is written. On the preview the form does not send. **Approved 2026-11-19.** |
| Under the Send button | "Please don't include medical details or health card numbers in this form. We'll contact you to discuss your care." | New text, so patients don't send private health information by email. **Approved 2026-11-19.** |

What changed from the old page, for context: the header line "We accept walk in consultations, but appointments are always appreciated." is the original text. Both location cards are the same as on the approved Home page. Name, Email and Message are required; Phone is optional. Stitch's invented lines were left out.

## 4. Already Using CPAP?: flagged items (v1)

| Section | Item | Needs approval because |
|---|---|---|
| Under the photo | "We offer PROFESSIONAL consultations to help you succeed." | This line was text inside the old picture; it is now real text under the photo (wording unchanged), so it can be translated. The photo was cropped to remove the text and the pink circle. **Approved 2026-11-18.** |
| Below the intro | Three highlights: "Use & care for your mask and machine" · "Discover your machine's features" · "Access your compliance data" | New short phrases taken from the intro text. **Approved 2026-11-18.** |

What changed from the old page, for context: the intro and "Struggling with your CPAP therapy?" text are the original copy, word for word. Added a "Book a consultation" box with both phone numbers and a "Contact us" button. Stitch's invented sections were left out ("What to bring to your consultation" checklist, "ADP Registered Specialists" and "Custom Mask Adjustments" badges, extra descriptions under the highlights).

## 8. Page not found (404): flagged items (v1)

| Section | Item | Needs approval because |
|---|---|---|
| Whole page | "Page not found", "Sorry, we couldn't find that page. It may have moved, or the link may be out of date.", Go to Home and Contact us buttons, both phone numbers | New page; the old site had none. It shows when someone opens an address that doesn't exist, for example an old link. Not listed in search results. **Approved 2026-11-18.** |

To see it on the preview, open any made-up address, e.g. https://azin1991.github.io/cpapfit/old-page.html

## 7. Privacy: flagged items (v1)

| Section | Item | Needs approval because |
|---|---|---|
| Whole page | All text (What this website collects · Maps and videos · Email and phone · Questions) | New page; the old site had none. Written from what the new site actually does: no cookies, analytics or forms of its own; Google Maps on Home and Contact; YouTube (privacy-enhanced mode) on Rental Trials. Please have the clinic check it before launch, and update it if a contact form or analytics is added later. **Approved 2026-11-18.** |
| Contact form, email and phone | First sentence about the contact form; heading now "Contact form, email and phone"; "through the form or by email" | Added 2026-11-19 because the form is back. **Approved 2026-11-19.** |
