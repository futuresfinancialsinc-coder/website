# Futures Financials — Brand Context

Drop-in context file. Everything an AI tool, designer, or new volunteer needs to make something
on-brand without asking. Companion to the visual version at
`NEW BRANDING/[C] Brand Guidelines.html`.

*Version 1 · 1 November 2026*

---

## 1. The organization

| | |
|---|---|
| **Legal name** | Futures Financials Inc. |
| **EIN** | 33-1515809 |
| **Status** | 501(c)(3) nonprofit |
| **Founded** | 2022 |
| **Site** | https://futuresfinancials.org |
| **What it does** | Student-led financial literacy education — hands-on sessions run by high schoolers for other students |

**Verified numbers.** Use these exactly; don't round up or invent new ones.

- 15,000+ students reached
- 70+ schools and libraries
- 18+ chapters
- 7 countries
- 450+ volunteers

**Leadership titles** (as they appear on the site): Founder / Executive Director, Co-Chief Executive
Officer (×2), Chief Financial Officer, Chief Operating Officer.

> ⚠️ **Open inconsistency:** the founder's title appears as both "Founder" and "Executive Director"
> in different places on the site, and `llms.txt` says "Founder and Chief Executive Officer." Pick one
> and make it consistent before this file is treated as authoritative on titles.

---

## 2. Voice and vibe

**Youth-led, but never amateur.** Run by high school students, reaching 15,000+ of them. The brand
has to earn trust with principals, funders and reporters while still looking like something a
teenager would actually follow.

**The one-line test:** if a superintendent and a sixteen-year-old would *both* take it seriously,
it's on brand. If only one of them would, it isn't.

### We are
- **Credible first.** Finance is the subject. Nothing can look improvised.
- **Warm, not corporate.** Growth, not banks. The mark is a plant, not a vault.
- **Plain-spoken.** Short sentences, real numbers, no jargon.
- **Evidence-led.** 15,000 students. 70+ schools. 7 countries. Say the number.

### We are not
- **A startup.** No neon gradients, no 3D blobs, no "disrupting."
- **A bank.** No navy-and-grey, no stock handshakes, no skylines.
- **A school club.** No clip art, no emoji in body copy, no rainbow palettes.
- **Vague.** "Empowering the next generation" says nothing. Cut it.

### Writing rules
- No em dashes in site prose (Aren's standing preference). Use commas, colons or a full stop.
- Page titles use a pipe: `Futures Financials | About Us`.
- Never invent bios, quotes, program copy or statistics. Placeholders stay placeholders until a
  human fills them.
- AI-generated imagery must be clearly stylized and labelled "Illustration." Media-coverage cards
  only ever get real photos.

---

## 3. Color

Two families only — a green spine and a gold accent — over near-black and off-white neutrals.
Every hex below was sampled from the logo artwork by sorting its pixels by hue and taking the
median of each group. These are the colors the mark actually contains.

### Green

| Hex | Token | Role |
|---|---|---|
| `#122d19` | green-950 | Deepest. Footers, photo overlays. |
| `#193e20` | green-900 | Hero overlays, dark sections. |
| `#22592d` | green-800 | Deep section backgrounds. |
| `#1e7b42` | green-700 | **Primary brand green.** Buttons, links. |
| `#218f47` | green-600 | Sampled from the logo leaves. |
| `#37ae4f` | green-400 | Hover states, gradient midpoint. |
| `#48c251` | green-300 | Logo leaf highlight. Backgrounds only. |
| `#5ed555` | green-200 | Brightest. Gradient start only. |
| `#dff1e3` | green-100 | Pills and tints on white. |
| `#f2f8f3` | green-50 | Alternating page sections. |

### Gold

| Hex | Token | Role |
|---|---|---|
| `#fee051` | gold-300 | Logo coin highlight. Type on deep green. |
| `#f8a31c` | gold-500 | **True brand gold**, sampled from the coins. |
| `#d9a728` | gold-700 | Current site token. Rules and icons. |
| `#b8890f` | gold-900 | The only gold safe as text on white. |
| `#faf3df` | gold-50 | Warm tint for callouts. |

### Neutral

| Hex | Token | Role |
|---|---|---|
| `#101612` | ink | All body text on light. |
| `#0b1612` | outline | Logo stroke color. Illustration only. |
| `#56675d` | muted | Captions, secondary text. |
| `#e3ebe6` | line | Borders and dividers. |
| `#ffffff` | white | Default page background. |

### Known gap
The logo's gold is `#f8a31c`. The site has been using `#d9a728`, which is duller and browner.
The logo's greens are also brighter than `#2a843c`. **Keep both ranges** — bright values for
artwork and gradients, deep values for interface and text — but stop treating them as the same color.

### The gradient
One recipe, used on every branded asset. Always horizontal. No vertical component, no diagonal.

```css
background: linear-gradient(90deg, #5ed555 0%, #3eb452 34%, #30a34c 72%, #229145 100%);
```

### Contrast — measured, not guessed

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| White | `#193e20` | 11.99 | AAA — anything |
| White | `#22592d` | 8.28 | AAA — anything |
| White | `#1e7b42` | 5.29 | AA — body text OK |
| White | `#218f47` | 4.13 | Large text only (18pt+) |
| White | `#37ae4f` | 2.87 | ❌ Never put text here |
| White | `#48c251` | 2.30 | ❌ Never put text here |
| `#fee051` | `#193e20` | 9.13 | AAA — best gold pairing |
| `#f8a31c` | `#193e20` | 5.85 | AA — body text OK |
| `#d9a728` | White | 2.21 | ❌ Gold is not a text color on white |
| `#b8890f` | White | 3.17 | Large text only |
| `#101612` | White | 18.33 | AAA |
| `#56675d` | White | 6.01 | AA |

**The rule that falls out of this:** bright greens are for backgrounds and artwork. The moment
someone needs to read a sentence, you are on `#1e7b42` or darker.

---

## 4. Typography

**Display: Playfair Display.** Chosen 1 November 2026. Google Fonts, free, 400–900 plus italics.
High-contrast transitional serif.

*Why:* verified by reading the live `font-family` on the peer sites Aren referenced — Origami For
Good and FLY to the World both run Playfair Display, and it is the closest free web equivalent to
the Bodoni used in the first round of LinkedIn artwork.

**Body: Open Sauce One.** Already self-hosted at 400 / 500 / 700 / 800 in `/fonts`. Clean geometric
humanist sans that stays out of a serif headline's way. Also what Cancer Kids First runs.

**Retire Baloo 2.** It conflicts with a serif display face. Drop it, or demote it to big impact
numerals only (the "15,000+" treatment) and nothing else.

### Type rules
- **Headlines:** Playfair Display, sentence case. Never all-caps for a full sentence.
- **Wordmark lockups:** all-caps, letterspaced 0.12–0.18em, hairline rule beneath.
- **Small labels:** all-caps, letterspaced 0.2em, 11–13px. For "NONPROFIT", section eyebrows,
  stat captions.
- **Body:** Open Sauce One 400, 16–18px, line-height 1.6, max 70 characters per line.

> ⚠️ **Licensing trap.** The first LinkedIn banner and experience card were rendered in **Bodoni 72**
> and **Big Caslon**, which ship with macOS. Fine for images exported locally; they **cannot** be
> embedded on the website or opened by a designer on Windows. Anything new goes in Playfair Display.

---

## 5. Logo

A dollar coin sprouting from a stack of gold bars — growth, not storage. Keep it full color.

**Do**
- Clear space: at least the height of the top coin, empty, on all four sides.
- Minimum size: 48px tall on screen, 0.6in in print. Below that the sparkles fill in.
- Backgrounds: white, `#f2f8f3`, or any green from the palette. It reads on all of them.
- Use the transparent PNG for cut-outs.

**Never**
- Flatten it to one color. The detail is defined by color, not outline, so a white or gold
  silhouette collapses into a blob. This was tested; it does not work.
- Recolor the coins. Gold is doing the work.
- Add a drop shadow, outer glow or stroke.
- Stretch, rotate or crop it.
- Place the square green version on a different green — the two fields will not match.
- Set it on a photo without a disc or panel behind it.

---

## 6. Pattern and motif

Background texture on branded assets is built from the logo's own vocabulary: coins marked `$`,
two-leaf sprouts, coin stacks, sparkle bursts. Outlines only.

- **Color:** white outline, **14–17% opacity**, never higher. Benchmarked against Origami For
  Good's crane pattern, whose outlines sit only 20–40 levels above their background. The restraint
  is the whole effect.
- **Stroke:** ~1.9px at 1× resolution.
- **Scale:** 9–16% of canvas height, rotated freely, allowed to run off the edges.
- **Density:** scattered, never tiled on a visible grid.

---

## 7. Asset specs

| Use | Size | Notes |
|---|---|---|
| LinkedIn company banner | 1128 × 191 | Photo panel 35% left, brand panel 65% right. No text on the left — LinkedIn's logo tile sits there. |
| LinkedIn experience media | 1920 × 1080 | 16:9. 960 × 540 also accepted. Badge centred, radius 154px at 960 wide; key bands inset 42px top and bottom. |
| Open Graph / link preview | 1200 × 627 | Keep text inside the middle 80%. |
| Instagram square | 1080 × 1080 | Badge layout works unchanged. |
| Favicon | 32 / 192 / 512 | Coin only. The full mark is unreadable this small. |

**Banner photo treatment:** duotone every photo onto a single green luminance ramp
(`#091e0d` → `#b0daB8`) so multiple classrooms read as one field rather than a contact sheet.

**Badge rule:** the disc must stay the brightest element on the card. If it matches the field,
only the ring shows.

---

## 8. CSS tokens

```css
:root{
  /* green — spine */
  --green-950:#122d19;  --green-900:#193e20;  --green-800:#22592d;
  --green-700:#1e7b42;  /* primary brand green */
  --green-600:#218f47;  --green-400:#37ae4f;  --green-300:#48c251;
  --green-200:#5ed555;  --green-100:#dff1e3;  --green-50:#f2f8f3;

  /* gold — accent */
  --gold-300:#fee051;   --gold-500:#f8a31c;   /* true brand gold */
  --gold-700:#d9a728;   --gold-900:#b8890f;   --gold-50:#faf3df;

  /* neutral */
  --ink:#101612;  --outline:#0b1612;  --muted:#56675d;
  --line:#e3ebe6; --white:#ffffff;

  /* brand gradient — horizontal only */
  --brand-gradient:linear-gradient(90deg,#5ed555 0%,#3eb452 34%,#30a34c 72%,#229145 100%);

  /* type */
  --font-display:"Playfair Display",Georgia,serif;
  --font-body:"Open Sauce One",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
}
```

---

## 9. Open items

- [ ] Re-render the LinkedIn banner and experience card in Playfair Display (currently Bodoni 72 /
      Big Caslon, macOS-only).
- [ ] Swap `--font-display` in `css/styles.css` from Baloo 2 to Playfair Display, self-host the
      woff2 into `/fonts`, and decide whether Baloo 2 survives for impact numerals.
- [ ] Reconcile the founder's title across the site, team page and `llms.txt`.
- [ ] Decide whether `--gold` moves from `#d9a728` toward the logo's `#f8a31c`.
- [ ] `NEW BRANDING/` is **not** in `.vercelignore`, so these internal files would publish to the
      live domain on the next push. Add an exclusion before deploying.
- [ ] Replace the two placeholder `sameAs` URLs in the homepage JSON-LD (GuideStar/Candid, Facebook).

---

*Colors sampled from the logo artwork by hue-bucketing its pixels and taking the median of each
group. Contrast ratios computed to WCAG 2.1. Peer typefaces read from the live `font-family` on
each organization's own site, 1 November 2026.*
