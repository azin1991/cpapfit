---
name: CPAP Fit
description: Calm, educational website for a two-location CPAP clinic in Toronto and Richmond Hill.
colors:
  harbour-navy: "#004069"
  clinic-blue: "#0b588b"
  clinic-blue-deep: "#08446c"
  sky-tint: "#cfe5ff"
  mist: "#e6f2f8"
  logo-green: "#8dc436"
  logo-blue: "#0070c0"
  fern-ink: "#33691e"
  paper: "#f9f9f6"
  white: "#ffffff"
  linen: "#f4f4f1"
  stone: "#eeeeeb"
  ink: "#1a1c1b"
  slate: "#41474f"
  pewter: "#717880"
  fog-line: "#c1c7d0"
  amber-wash: "#fdf1dc"
  amber-ink: "#7a4a00"
  alert-red: "#b42318"
  alert-wash: "#fef3f2"
  alert-ink: "#912018"
typography:
  display:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "52px"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "44px"
    letterSpacing: "-0.015em"
  headline-mobile:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "36px"
    letterSpacing: "-0.01em"
  headline-md:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "34px"
  title-lg:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "28px"
  title-md:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "26px"
  body-lg:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "18px"
    lineHeight: "28px"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "17px"
    lineHeight: "26px"
  body-sm:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: "22px"
  label-lg:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "22px"
  label:
    fontFamily: "Plus Jakarta Sans Variable, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  card: "14px"
  full: "9999px"
spacing:
  space-xs: "6px"
  space-sm: "12px"
  space-md: "20px"
  gutter: "24px"
  space-lg: "32px"
  margin: "40px"
  space-xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.clinic-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.clinic-blue-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.clinic-blue}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.mist}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.harbour-navy}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "20px"
  chip-green:
    backgroundColor: "#8dc43626"
    textColor: "{colors.fern-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  chip-mist:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.clinic-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: CPAP Fit

## Overview

**Creative North Star: "The Trusted Educator"**

The site teaches before it sells. Visitors are tired, often anxious, newly diagnosed or helping someone who is. The design gets out of the way of understanding: readable text at comfortable widths, numbered steps, plain callouts, and the two clinic phone numbers never more than a tap away.

Surfaces are soft and quiet. White cards with a faint blue-tinted shadow and gently rounded corners sit on a warm off-white page. Deep navy carries headings and the main actions; the logo green appears only in small accents. Nothing flashes, nothing pressures.

Copy is real text, never baked into images (the three licensed hero photos are the one exception), so every page can be translated for the planned Chinese version.

**Key Characteristics:**
- Warm off-white page, white cards, faint blue shadow
- Deep navy headings, clinic-blue actions, green used sparingly
- Plus Jakarta Sans headings, Inter body text
- Reading width capped at 720px; content at 1240px
- Functional icons only (menu, phone, location, warning, accordion)

## Colors

A calm clinical palette: navy and blue on warm paper, with the logo's green as a small accent.

### Primary
- **Harbour Navy** (harbour-navy): all headings, the top information bar, and the dark closing call-to-action bands.
- **Clinic Blue** (clinic-blue): primary buttons, links, step numbers, list markers, focus ring and accent stripes.
- **Clinic Blue Deep** (clinic-blue-deep): hover state of primary buttons.
- **Mist** (mist): light blue tint for callout backgrounds, chips and hover fills on secondary buttons and phone tiles.
- **Sky Tint** (sky-tint): text on the navy top bar.

### Secondary
- **Logo Green** (logo-green): quote marks, the FAQ toggle bars, the ADP chip border and the featured-quote stripe. Small accents only.
- **Fern Ink** (fern-ink): text on green-tinted chips, and the green words in the About OSA banner.
- **Logo Blue** (logo-blue): appears only inside the logo, favicon and illustrations. Not a UI colour.

### Neutral
- **Paper** (paper): page background.
- **White** (white): cards, quote cards, form fields.
- **Linen** (linen): alternating section bands, page headers and phone tiles.
- **Stone** (stone): placeholder and video backgrounds.
- **Ink** (ink): body text.
- **Slate** (slate): secondary text, captions and small uppercase labels.
- **Pewter** (pewter): decorative only. Too light for text on Linen; never use it for small text.
- **Fog Line** (fog-line): thin borders around maps, the "On this page" box and diagrams.

### Status
- **Amber Wash / Amber Ink**: the preview banner and review highlights.
- **Alert Red / Alert Wash / Alert Ink**: serious safety warnings only (the FAQ pressure warning).

### Named Rules
**The Quiet Green Rule.** Logo Green is an accent, never a fill for large areas, buttons or text. If green is on more than a few small marks per screen, it is too much.

**The Readable Label Rule.** Small text (under 18px) uses Slate or darker. Pewter fails contrast on Linen.

## Typography

**Display Font:** Plus Jakarta Sans Variable (with system-ui)
**Body Font:** Inter Variable (with system-ui)

**Character:** A friendly, rounded geometric sans for headings paired with a neutral, highly legible body face. Both are self-hosted.

### Hierarchy
- **Display** (700, 44px / 32px on mobile, 52px line height): reserved for the largest hero statements.
- **Headline** (600, 36px / 28px on mobile): page titles and main section headings.
- **Headline Medium** (600, 26px): article section headings (About OSA, How it works).
- **Title** (600, 20px and 18px): card headings, FAQ questions, step titles, testimonial names.
- **Body** (17px, 26px line height; 18px for leads): all reading text, capped at 720px (about 70 characters).
- **Body Small** (15px): captions, step descriptions, footer text.
- **Label** (600, 12px, uppercase, wide tracking): small labels above values, such as "PHONE" and "DOWNTOWN TORONTO".

### Named Rules
**The Real Text Rule.** Headlines and slogans are HTML text, not images, so they can be read aloud and translated.

## Layout

Content sits in a centred 1240px container with 20px side margins on phones and 40px from tablet up. Reading pages (About OSA, FAQ) cap text at 720px. About OSA adds a sticky "On this page" menu on desktop; Rental Trials keeps its "Start your rental trial" box sticky beside the text.

Sections are separated by 56px of vertical padding and alternate between Paper and Linen bands. Grids collapse to one column on phones; cards use a 24px gutter. The header is sticky; anchor links offset by about 120px so headings land below it.

## Elevation & Depth

Soft and quiet. Depth comes from white cards on a warm page plus a very faint blue-tinted shadow, not from strong drop shadows.

### Shadow Vocabulary
- **Card** (`0 2px 8px -2px rgba(11,88,139,0.05), 0 1px 4px -1px rgba(0,0,0,0.03)`): every card at rest.
- **Lift** (`0 12px 28px -6px rgba(11,88,139,0.10), 0 4px 12px -2px rgba(0,0,0,0.04)`): available for raised or hovered cards; use sparingly.

### Named Rules
**The Faint Shadow Rule.** Shadows only hint at a surface. If a shadow is the first thing you notice, it is too strong.

## Shapes

Gently rounded throughout: 14px corners on cards, images and callouts; 8px on buttons, fields and phone tiles; fully round chips, step numbers and the FAQ toggle area. Borders are thin (1px) and low-contrast. A 4px left stripe in Clinic Blue (or Logo Green for the featured testimonial) marks a callout.

## Components

### Buttons
- **Shape:** gently rounded (8px), 14px × 24px padding, label text 16px semibold.
- **Primary:** Clinic Blue fill, white text; hover Clinic Blue Deep.
- **Secondary:** 1.5px Clinic Blue outline, Clinic Blue text; hover Mist fill.
- **Light:** white fill, navy text, for use on navy bands.
- **Focus:** 3px Clinic Blue outline, 2px offset, on every interactive element.
- **Icons:** call buttons carry a phone icon; directions buttons a location pin.

### Chips
- **Green:** green tint with Fern Ink text and a green border, for the ADP vendor badge.
- **Mist:** Mist fill with Clinic Blue text, for neutral facts.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** White on Paper or Linen.
- **Shadow Strategy:** Card shadow (see Elevation).
- **Border:** 1px Clinic Blue at 10% opacity.
- **Internal Padding:** 20px, 32px on large featured cards.

### Inputs / Fields
- **Style:** white, 1px light grey-blue border, 8px corners, at least 48px tall.
- **Focus:** Clinic Blue border with a soft 3px Clinic Blue ring at 15% opacity.

### Navigation
- **Desktop (1280px and up):** logo left, text links in Plus Jakarta Sans 14px; the current page has a Mist pill. The EN | 中文 switch sits right.
- **Mobile:** a menu button opens a full-width list with large tap targets and two call buttons, one per clinic.
- **Top bar:** navy strip with "ADP-registered vendor in Ontario · Downtown Toronto & Richmond Hill".

### Phone Tile (signature)
Linen tile with a phone icon, a small uppercase clinic label and the number in 20px Clinic Blue. The whole tile is a tap-to-call link; hover turns it Mist. Used on Rental Trials and FAQ; the Home location cards show the number at 28px.

### FAQ Accordion (signature)
White card per question. Three green bars animate into an X when the answer opens; only one answer is open at a time; answers slide open and the question scrolls to just below the header.

### Quote Card (signature)
White card with a large green opening quote mark, the quote in body text and the name in navy below. Long quotes show four lines with a "Read more" link.

### Callouts
- **Lead / note:** Mist background with a 4px Clinic Blue left stripe.
- **Safety warning:** Alert Wash background, 2px Alert Red border, a filled warning triangle and bold Alert Ink text.

## Do's and Don'ts

### Do:
- **Do** keep both clinic phone numbers one tap away on every page.
- **Do** cap reading text at 720px and use numbered steps for processes.
- **Do** use Slate or darker for any text under 18px.
- **Do** keep every heading and slogan as real text so it can be translated.
- **Do** honour reduced-motion settings; animations become instant.

### Don't:
- **Don't** show office hours anywhere.
- **Don't** add patient counts, star ratings, "verified" badges, statistics or other claims the clinic has not confirmed.
- **Don't** add decorative icons; icons must do a job (menu, phone, location, warning, accordion).
- **Don't** use Logo Green for buttons, large fills or body text.
- **Don't** use the red alert style for anything except genuine safety warnings.
