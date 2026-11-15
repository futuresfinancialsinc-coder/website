# Futures Financials design system

*Phase 0.4. Maps our existing brand onto the principles in `design-analysis.md`. Every page in Phase 1 uses this document. Nothing here invents a colour or a face: all values are the tokens already declared in `:root` of `css/styles.css`.*

---

## 1. Tokens (as they exist)

```
Greens   --green-950 #122d19  --green-900 #193e20  --green-800 #22592d
         --green-700 #1e7b42  (primary)            --green-600 #218f47 (large text only)
         --green-400 #37ae4f  --green-300 #48c251  --green-200 #5ed555 (backgrounds only)
         --green-100 #dff1e3  --green-50  #f2f8f3
Gold     --gold #f8a31c   --gold-light #fee051   --gold-dark #b8890f (only gold safe as text on white)
Neutral  --cream #faf3df   --white   --ink #101612   --muted #56675d   --line #e3ebe6
Gradient --brand-gradient  90deg #5ed555 -> #3eb452 -> #30a34c -> #229145
Type     --font-display / --font-body = "Playfair Display" (variable, self-hosted)
Space    --section-sm clamp(3rem,6vw,5rem)  --section-md clamp(4rem,9vw,7rem)  --section-lg clamp(5rem,12vw,9rem)
Radius   --radius-lg 24px  --radius-md 16px  --radius-pill
```

Rule: no hex values in page CSS. If a colour is needed that is not a token, stop and ask.

---

## 2. Section colour pairings

Origami: white ground, pink and yellow interrupts, plum tints over photos. Ours maps as follows. Contrast ratios are measured; "large" means 3:1, allowed only at 24px+ or 18.66px+ bold.

| Section mood | Background | Headline | Body | Accent | Origami equivalent |
|---|---|---|---|---|---|
| **Ground** | `--white` | `--green-900` 12.0 | `--ink` 18.3 or `--muted` 6.0 | `--green-700` 5.3, `--gold-dark` 3.2 large only | white |
| **Soft ground** | `--green-50` | `--green-900` 11.1 | `--ink` 17.0 or `--muted` 5.6 | `--green-700` 4.9 | white |
| **Warm ground** | `--cream` | `--green-900` 10.8 | `--ink` 16.5 | `--green-700` 4.8. **No gold text** (2.9, fails) | cream `#f6f3e6` |
| **Deep** | `--green-900` | `--white` 12.0 | `--green-100` 10.2 | `--gold-light` 9.1, `--gold` 5.9 | pink block |
| **Deepest** | `--green-950` | `--white` 14.8 | `--green-100` 12.6 | `--gold` 7.2, `--gold-dark` 4.7 | footer |
| **Mid** | `--green-800` | `--white` 8.3 | `--green-100` 7.0 | `--gold-light` 6.3; `--gold` 4.0 large only | pink block |
| **Brand** | `--green-700` or `--brand-gradient` | `--white` 5.3 | `--white` only | `--gold-light` 4.0 large only | yellow block (by role) |
| **Gold band** | `--gold` | `--ink` 8.9 or `--green-900` 5.9 | `--ink` | none. **White text fails** (2.0) | yellow block (by colour) |
| **Photo, dark tint** | photo + `--green-900` at 0.50 to 0.62 | `--white` | `--white` | `--gold-light` | plum overlay 0.42 to 0.55 |
| **Photo, light tint** | photo + `--white` or `--green-50` at 0.15 to 0.35 | `--green-900` | `--ink` | | white overlay 0.15 to 0.30 |

Sequencing rules (from the analysis):
- Never two coloured blocks in a row. Ground or soft ground between them.
- At most one gold band per page. It is the loudest thing we have.
- At most two deep blocks per page, plus the footer.
- Photo-tint sections count as colour. Aim for roughly a third of sections photo-backed.
- `--green-100` is a pill/tint colour, not a section background: `--green-700` on it is only 4.5 and `--gold-dark` fails.

---

## 3. Type scale

Playfair Display throughout, as now. Origami runs everything at weight 400; our brand runs headings at 700 and that stays, because the bold Playfair is the brand voice in the hero wordmark. The compromise is weight by level.

| Level | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Display | `clamp(2.6rem, 6vw, 4.9rem)` (~78px at 1440) | 700, letter-spacing -0.01em | 1.08 | page openings only |
| H2 | `clamp(2rem, 3.6vw, 3.4rem)` (~54px) | 700 | 1.15 | section titles |
| H3 | `clamp(1.5rem, 2.4vw, 2.4rem)` (~39px) | 600 | 1.25 | sub-sections, card titles |
| H4 | `clamp(1.15rem, 1.6vw, 1.5rem)` (~24px) | 500 | 1.3 | item titles |
| Body | 18px | 400 | 1.65 | paragraphs (ours is 18/1.6 today; 1.65 is the nudge toward Origami's 1.8 without losing density) |
| Lead | 20 to 22px | 400 | 1.55 | the one supporting line under a heading |
| Eyebrow | 0.78rem, uppercase, 0.14em tracking | 500 | | labels, dates, venues (exists as `.tl-stamp`, `.by-venue`) |
| Pull quote | H3 size | 400 italic | 1.35 | the only place italic appears |

Ratio ~1.4x between levels. Headline length rule: 1 to 4 words, 8 maximum. One supporting line of 9 to 25 words. That is the whole budget for a section.

---

## 4. Spacing and pacing

- Standard section: `padding-block: var(--section-md)`; feature sections `min-height: 70svh`; openings `100svh` (tall) or `clamp(280px, 40vh, 420px)` (short, Environment-style).
- Container: existing `.container` max width; text measure capped at 54ch for body, 22ch for display.
- 9 to 13 sections per content page, each roughly one screen. Alternate photo / colour / ground. No two consecutive sections with the same layout (already a standing rule on this site).
- **Dividers:** straight edges by default. Where a seam is wanted, use one of ours, never a scallop:
  - a 1px `--line` rule;
  - a 120px fade from the section colour into `--white` (`linear-gradient`);
  - the coin-pattern band (`images/pattern-coins.svg` at 10 to 15% opacity) as a 60 to 90px strip, which is the device the hero already uses.

---

## 5. Image treatments

All photos: `loading="lazy"` except the first screen; explicit `width`/`height`; `object-fit: cover` only inside an `aspect-ratio` box; never a fixed-height box. Alt text on every image. Face policy unchanged: blur audience students and children, leave volunteers presenting, officers and adults.

| Treatment | Existing class | Origami pattern it answers |
|---|---|---|
| Photo wall, columns, nothing cropped | `.cluster` (1/2/3 cols) | filmstrip and collage credibility |
| Filmstrip row of small squares | new: `.strip` = 8 to 12 tiles, `aspect-ratio: 1`, 96 to 120px, horizontal scroll under 620px | twelve 108px thumbnails |
| Flanking cutouts | `.sticky-split` with two small images | small photos either side of text |
| Single contained photo | `.page-photo` (4:3 / 16:9 / 2:1 by width) | portrait beside prose |
| Full-bleed tinted photo | `.photo-band` + overlay token from section 2 | tinted background sections |
| Stat row | `.stat-line` (defined, currently unused) | four-up number row |
| Logo grid | `.partner-wall`, `.marquee` (home only) | partner wall |
| Opening collage | `.hero-mosaic` (home only, 7 tiles) | hero collage |

Sizing: deliver at 2x the largest rendered width, cap 1600px, JPEG q80 to q85, so a 380px wall tile ships at 760 to 900px. Hero tiles 700 to 900px. Keep the library's current average of ~130KB per photo.

---

## 6. Slow animation patterns (reusable)

Constraints from the brief: slow, subtle, CSS-first, GPU-friendly (transform and opacity only), and every one respects `prefers-reduced-motion`. Origami's continuous motion is a looping video we do not have; these give coloured and photo sections the same slow life without one.

### 6.1 `drift`: background photo breathes
Already exists as `hero-drift`. Generalise it.

```css
.drift > .drift__media {
  will-change: transform;
  animation: drift 28s ease-in-out infinite alternate;
}
@keyframes drift {
  from { transform: scale(1) translate3d(0,0,0); }
  to   { transform: scale(1.06) translate3d(-1.5%, -1%, 0); }
}
```
Use on `.photo-band` and tinted-photo sections. Media is 106% so edges never show. 28s means a viewer sees about one quarter of the cycle per section; it reads as alive, not as moving.

### 6.2 `pattern-pan`: the coin motif slides under a colour block
For deep, brand and gold sections. A pseudo-element twice the section width carries the pattern and translates by half its width, so the loop is seamless.

```css
.pattern-pan { position: relative; overflow: clip; }
.pattern-pan::before {
  content: ""; position: absolute; inset: 0 auto 0 0; width: 200%;
  background: url("/images/pattern-coins.svg") repeat; background-size: 320px;
  opacity: 0.12; pointer-events: none;
  will-change: transform;
  animation: pattern-pan 64s linear infinite;
}
@keyframes pattern-pan { to { transform: translate3d(-50%, 0, 0); } }
```
64s for one tile-period of travel is slower than Origami's video loop and far below anything that reads as scrolling. Opacity 0.12 on green, 0.08 on gold.

### 6.3 `rise`: entrance reveal
Already exists as `.reveal` on an IntersectionObserver. Tune to Origami's measured 0.9s and add a capped stagger.

```css
.reveal { opacity: 0; transform: translate3d(0, 12px, 0);
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1); }
.reveal.is-visible { opacity: 1; transform: none; }
.reveal:nth-child(2) { transition-delay: 80ms; }
.reveal:nth-child(3) { transition-delay: 160ms; }
.reveal:nth-child(n+4) { transition-delay: 240ms; }
```
Fades once; never replays on scroll-up. Stagger stops at the fourth child so a long grid does not take seconds to appear.

### Reduced motion, applied to all three

```css
@media (prefers-reduced-motion: reduce) {
  .drift > .drift__media, .pattern-pan::before { animation: none; }
  .reveal { opacity: 1; transform: none; transition: none; }
  .hero-anim, .hm-tile, .marquee__track { animation: none; }
}
```
Origami ships none of this. We ship all of it.

Budget: no more than one continuous background motion visible at a time, so `drift` and `pattern-pan` never sit in adjacent sections.

---

## 7. Copy rules (restated for Phase 1)

- Headline 1 to 4 words, 8 max. One supporting line, 9 to 25 words. That is the section.
- Verified numbers only: 15,000+ students, 70+ schools and libraries, 18+ chapters, 7 countries, 450+ volunteers. Nothing else without a source from Aren.
- Our Story narrative and the five officer bios are Aren's text. Layout can change; words cannot.
- No em dashes in site prose. No stock phrases ("the magic of young people" and its relatives are already banned).
- `--gold-dark` is the only gold that may be used as text on a light background, and only at 24px or larger.

---

## 8. What already matches, what Phase 1 changes

| Brief principle | Current site | Phase 1 |
|---|---|---|
| Minimal text | Most pages at or under Origami's density | Tighten the 3 or 4 that are not; keep the long ones that earn it |
| Colour blocking per section | `.section--tint`, `.section--dark`, `.cta-band`, cream exists; sequencing is loose | Apply the pairing and sequencing rules in section 2 page by page |
| Slow background animation | hero drift on 1 page, marquee on 1, static fills elsewhere | `drift` on photo bands, `pattern-pan` on coloured blocks, per the budget |
| Credibility through images | 118 photos, clusters on 4 pages, page-photo on 12 | Filmstrips, more flanking cutouts, more photo-tint sections |
| Engaging page openings | 19 of 20 pages open on a full-viewport brand gradient with name + page title | Decide per page: keep the tall opening where the image is the content; try the short tinted-photo opening where it is not |
| Reduced motion | 7 blocks already | Extend to every new pattern |
