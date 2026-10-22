---
target: homepage
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
target_identity: "file:/home/user/mywebsite/src/pages/index.astro"
target_fingerprint: "sha256:45ac07b68dcfa5f2235ebe951507a5682a0cbab49753b46044fe723b8eccf59f"
target_path: /home/user/mywebsite/src/pages/index.astro
timestamp: 2026-10-22T19-02-11Z
slug: src-pages-index-astro
closed: true
---
# Homepage critique (Impeccable), 22 Oct 2026

Method: dual-agent (A: design review · B: detector + browser evidence), run in isolation and then combined.
Target: `src/pages/index.astro`. Mode: Persuade. Context: `PRODUCT.md` (PR #16).
Caveat: the sandbox blocked the Unsplash hero photos, so the hero was judged in its no-image state.

## Design health score: 24/32 (75%, Good)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Slideshow and FAQ states are clear; nothing tells you the form goes to a thank-you page |
| 2 | Match with the real world | 3 | "Map Pack", "LSA", "ROAS", "Foundation Sprint" are never explained |
| 3 | User control and freedom | 3 | "Book call" in the mobile bar goes to /contact, not a booking |
| 4 | Consistency and standards | 3 | Four labels for the audit CTA; hero goes to #growth-audit, header and mobile bar to /free-audit |
| 5 | Error prevention | 2 | Country field defaults to Philippines for a global-first audience, so leads get mis-tagged |
| 6 | Recognition rather than recall | 2 | WhatsApp and email links become unlabeled icons (no accessible name at ≤1440px header, ≤420px top bar) |
| 7 | Flexibility and efficiency | n/a | Marketing page, no repeated expert task |
| 8 | Aesthetic and minimalist design | 2 | Ten equal-weight sections; trust row duplicates the why-us grid; clip-art wallpaper |
| 9 | Error recovery | 3 | Native validation only, fine for a short form |
| 10 | Help and documentation | n/a | Marketing page; FAQ and 12 guides exist, but the compliance and contract FAQs are cut from the homepage five
| **Total** | | **24/32** | **Good** (75%; heuristics 7 and 10 n/a) |


## Design specificity verdict

**Design review:** mostly generic. About 80% of the page could belong to any healthcare-marketing agency: an abstract H1 ("Helping more patients find the care they need"), a stock slideshow ("Growth, gently" seedling), a tiled medical clip-art wallpaper, and ten sections that all run eyebrow → H2 → card row. What only Web Frontier can claim (fixed-price 30-day sprints with a written scope, and the confirmed sprint promise) is buried in section 6, and the promise does not appear on the homepage at all.

**Detector:** the source scan returned nothing, but only because `.astro` files get regex-only scanning, so that is an undercount, not a clean result. The rendered-page scan (1280px and 390px) found 11 issues:
- `icon-tile-stack` ×3: 44px icon tile above "Hard to find", "Unclear marketing", "A site that doesn't book" (`index.astro:67-68`). It agrees with the review's "template cards" read.
- `low-contrast` ×1: white slide caption on the fallback gradient, 1.1:1 (`HeroSlideshow.astro:64,70`). Real when photos fail or are loading; probably fine with a photo and scrim.
- `low-contrast` advisory ×7: teal text `#0e7c7b` on `#e6f2ef` tint is 4.4:1 (needs 4.5), from one token pair (`global.css:22-23`): case-study tags, sprint week labels, guide categories.
- False positives dropped: a footer hover-contrast hit and 6 cramped-padding hits from the static HTML scan only.

**Browser check (headless):** detector overlay injected fine; console reported 4 anti-patterns (the caption and 3 icon tiles). The detector also caught what the review only half-saw: unnamed icon links and 52 of 73 mobile controls under 44px (slideshow dots 9px, top-bar icons 14px, pause 32px).

## Overall impression

The voice is right and the conversion path works, but the page doesn't argue for *this* agency. The one thing a burned buyer most wants to hear, "fixed price, written scope, and we keep working free if we miss it", is missing from the homepage. The biggest opportunity is to put that promise above the fold.

## What's working

1. **The voice fits the buyer.** "You pay every month and still can't tell what was done" and "a report you can actually read" speak straight to someone burned by an agency. The "don't include patient data" note on the form is a nice healthcare touch.
2. **A solid conversion path.** One clear orange CTA, an inline audit form, a WhatsApp fallback, and a thumb-zone sticky bar on mobile. The slideshow has pause, `aria-current` and reduced-motion support.
3. **Honest about missing proof.** Samples are labeled and empty stats stay hidden, in line with the product principles.

## Priority issues

1. **[P1] The differentiator is buried and the sprint promise is missing.**
   Why: sprints plus the promise are what generalist agencies can't claim; today they sit in section 6 under a muddled "Foundation Sprint / from $650" line, and the promise lives only on /pricing.
   Fix: put a hero sub-line or proof block right under the H1: "Fixed-price 30-day sprints. If anything in the written scope isn't delivered, we keep working at no extra cost." Make the sprint section the visually dominant one, and show the `promises` (month-to-month, you own your accounts) there.
   Command: `/impeccable clarify` (hero message), then `/impeccable layout`.

2. **[P1] The sample case studies read like real results.**
   Why: "+182%", "5.8× ROAS", "Sydney med spa +71% bookings" with a small "Sample" pill is exactly what makes a sceptical buyer doubt everything else. The pill's tooltip, "replace with a real client", leaks author notes to the public.
   Fix: retitle it "What a sprint looks like (illustrative)", lead with deliverables per sprint instead of % outcomes, use a clear full-width sample label, and remove the tooltip. Or replace it with a redacted sample sprint scope and report.
   Command: `/impeccable clarify` on `CaseStudies.astro`.

3. **[P1] The Philippines leads, though the buyer is global-first.**
   Why: the form's Country defaults to Philippines, and the eyebrow, page title, why-us copy and FAQ order all put the Philippines first. To a US, UK or Australian clinic this reads "offshore" before it reads "value", and leads are mis-tagged.
   Fix: use a "Select your country" placeholder or a time-zone guess (the site already guesses currency this way). Reorder copy so international markets lead and the Philippines is served but not headlined.
   Command: `/impeccable harden` (form), `/impeccable clarify` (copy).

4. **[P1] Contact links lose their names, and many tap targets are small.**
   Why: the header WhatsApp link (`Header.astro:41`) has no accessible name at ≤1440px, and the top-bar WhatsApp and email links (`TopBar.astro:10`) have none at ≤420px, where they are also 14×14px. Slideshow dots are 9px and the pause button is 32px. Older owners on phones and screen-reader users are both in the audience.
   Fix: add `aria-label`s to the icon-only links; bring controls to at least 44px tap areas (padding, not bigger icons); raise `--brand-text` on `--brand-tint` to at least 4.5:1.
   Command: `/impeccable audit`, then `/impeccable adapt`.

5. **[P2] The hero is generic stock and clip-art, and the page is long.**
   Why: Persuade mode asks the hero to show something only this product can prove. A four-photo hotlinked Unsplash crossfade plus a medical icon wallpaper says "any clinic agency", adds third-party JS and image weight, and pushes content down on mobile. Below it, ten equal-weight sections and four outline "see more" buttons make a phone visitor scroll about 12,000px; price first appears around 5,500px.
   Fix: replace the slideshow with a sample sprint scope or report card (items, price, 30-day timeline, delivered checks), or put the audit form in the hero. Drop the wallpaper. Merge the empathy and why-us sections and move the compliance and contract FAQs into the top five.
   Command: `/impeccable bolder` (hero), `/impeccable distill` (section count).

## Persona red flags

- **Jordan (first-timer):** "Map Pack", "LSA", "ROAS", "Foundation Sprint" go unexplained. "How we help" is both a button to /services and a same-page section. Can't tell whether the results are real.
- **Riley (stress tester):** "Book call" doesn't book anything. Six social icons point to profiles that aren't live yet. The same CTA has two destinations. A blocked image host leaves a broken-image glyph in the hero.
- **Casey (mobile, between patients):** top bar, header and trust row take about 700px before the hero; three audit CTAs share the first screen; sticky-bar labels are 0.75rem; first price around 5,500px down.
- **Dr. Priya (owner of a two-location allied-health clinic in Sydney, burned by a retainer, cares about Ahpra rules):** sees "Philippines" twice above the fold and as her form default. Compliance is only an icon tagline; the Ahpra and HIPAA FAQ answer is cut from the homepage. Can't find the guarantee. The "Sydney med spa" sample may look like invented local proof aimed at her.

## Minor observations

- At 1440px the header WhatsApp item becomes a lone icon beside the theme toggle.
- Case-study "THE PROBLEM" small caps and 0.8rem stat labels are hard to read for older owners.
- The founder block shows a "KL" initials tile (photo TODO), which weakens the "real people" claim beside it.
- The "Built for" strip lists 8 specialties as muted text that looks clickable but isn't.
- The 12 real guides by the founder are good evidence of expertise but sit near the bottom like filler.
- "Calm" appears in two section headings and is turning into a tic.

## Questions to consider
## Questions to consider

1. If the sprint promise is the one claim no generalist can match, why does the homepage spend three sections on things every healthcare agency says?
2. With no real proof yet, would a redacted, real sample sprint scope and report convince a sceptical buyer more than three illustrative case studies with percentages?
3. Should the hero *be* the audit, with country and website fields up top, instead of a slideshow pointing to a form 6,000px down?
