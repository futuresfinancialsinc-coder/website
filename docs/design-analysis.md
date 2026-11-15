# Origami for Good: design analysis

*Phase 0.3. Principles only. No copy, images, code or layouts are reproduced here. Measured 2026-11-15 on origamiforgood.org (home, /about, /environment) with a live browser at 1024 and 375 wide, plus text fetches.*

Platform: Squarespace 7.1 (fluid-engine sections, per-section colour themes, SVG section dividers). This matters because most of what reads as "design" is a small set of platform features used with discipline, not bespoke code. All of it is reproducible in plain CSS.

---

## 1. Text density

| Page | Visible words | Sections | Words per section |
|---|---|---|---|
| Home | 476 | 11 | 6 to 74, median ~45 |
| About | 600 | 9 | 4 to 267 (one long founder-origin block; the rest 9 to 67) |
| Environment | 622 | 11 | 3 to 161, median ~45 |

Pattern: a section carries one headline and 0 to 2 short lines, roughly 40 to 60 words. Only one section per page is allowed to run long (a founder story, a curriculum explainer). Whole pages land at 450 to 650 words including nav and footer.

**Headlines:** 1 to 4 words is the norm; 8 is the ceiling for a call to action. Two "headings" on About run 31 and 43 words, but those are quotations styled as headings, not labels.

**Supporting lines:** present on roughly half the sections, 9 to 45 words. Stat blocks and partner walls get a 2 to 3 word caption or nothing.

**Where our pages sit today** (nav/footer stripped): index 376, about-us 151, programs 168, impact 115, meet-the-team 73, media 249, our-partners 266, start-a-chapter 258, volunteer 368, success-stories 450, our-story 510, research-policy 835, team bios 155 to 424. Most content pages are already at or under Origami's density. The outliers with a reason to be long are research-policy (eight papers with summaries) and the two legal pages.

---

## 2. Colour-blocking patterns

Measured section backgrounds (Squarespace paints these on a `.section-background` layer; the section itself is transparent):

| Role | Value | Where |
|---|---|---|
| Base | `#ffffff` | most sections |
| Primary accent | `#fc8daa` (pink) | one or two blocks per page, always the footer |
| Secondary accent | `#ffe165` (yellow) | one block per page at most |
| Quiet accent | `#f6f3e6` (cream) | one block, near the end |
| Photo tint, dark | `rgb(154,50,94)` plum at 0.21, 0.42, 0.55 | over photo-backed sections |
| Photo tint, light | white at 0.15, 0.30, 0.64, 0.81 | over photo-backed sections |

Sequence on Home: tinted photo, yellow, video on white, white, light-tinted photo, dark-tinted photo, white, light-tinted photo, cream, white, pink footer.
Sequence on About: photo, white, pink, white, white, pink, white, yellow, pink footer.
Sequence on Environment: dark-tinted photo (short), then nine white sections (four of them photo-backed at 0.15 white tint), pink footer.

**Principles:**
- White is the ground. Colour arrives as an interrupt, never two coloured blocks in a row (Home's cream then white then pink footer is the one exception, and the footer is a fixed element).
- The "different colour mood per section" is mostly done with **photos under a tint**, not with solid fills. Six of eleven Home sections are photo-backed. A dark tint (0.4 to 0.55) carries white type; a light tint (0.15 to 0.3) keeps the photo legible under dark type.
- Two accent hues only, plus one neutral. The palette is small; the variety comes from tint strength and from which photo sits underneath.
- Every section boundary is a **scalloped SVG divider**, 51 to 61px tall, filled (stroke 0). It is the single most recognisable device on the site and is exactly the kind of thing we should not copy. Our equivalent should be a straight edge, a gradient seam, or our own coin-pattern band.

---

## 3. Typography scale

One display face for everything except navigation.

| Element | Desktop (1024) | Mobile (375) | Weight | Line height |
|---|---|---|---|---|
| h1 | 78.4px | 64.7px | 400 | 1.12 |
| h2 | 53.9px | | 400 | 1.23 |
| h3 | 39.1px | | 400 | 1.30 |
| h4 | 24.4px | | 400 | |
| body | 17px (Home), 15.3px (About) | 16px | 400 | **1.8** |
| nav | 15.3px, 1.5px letter-spacing, a sans face | | 400 | |
| stat labels | small caps, 2 to 3 words | | | |

The face is Playfair Display, the same face we already self-host. The difference is weight: Origami sets **every heading at 400**. Size and whitespace do the work; nothing is bold. Body copy at 1.8 line height is generous, and with 40 word sections it never forms a wall.

Ratio between steps is roughly 1.4x (24 to 39 to 54 to 78), a classic perfect-fourth-ish scale.

---

## 4. Image layout patterns

| Pattern | Where seen | What it does |
|---|---|---|
| **Hero collage** | Home | One pre-composed 1024x900 image (gradient + faint motif + about seven photos at varied sizes and slight angles) with two more small photos layered on top and the title centred over it. Reads as scattered, is actually one flat image. At 375 wide the collage becomes a tall 375x1185 image and the two layered photos stack beneath. |
| **Filmstrip** | About | Twelve 108x108 thumbnails in a row. Pure credibility: "we have done this many times." |
| **Flanking cutouts** | Home, Environment | Small photos (120 to 230px) either side of a short text block. Text stays short because the images take the width. |
| **Portrait beside prose** | About founders | One 264x396 or 346x458 photo beside the one long text block per page. |
| **Four-up stat row** | Home | Four equal illustrations, one number each, 2 to 3 word caption. |
| **Logo grid** | Home | Uniform tiles, 8 to 10 per row, almost no text. |
| **Full-bleed tinted photo** | All pages | Section background photo under a tint, 300 to 900px tall. |

Counts: Home 34 visible images (widths 77 to 1024, median 148), About 23, Environment 28. Images are small and many rather than large and few. Faces appear constantly; this is a people-first credibility strategy.

**Our constraint carries over:** audience students and children stay blurred; volunteers presenting, officers and adults do not. Origami does not blur anyone. We keep our policy regardless.

---

## 5. Section pacing

- Section heights 254 to 1465px at a 768px viewport; median about 800px. Most sections are **one screen**.
- 9 to 13 sections per page; pages run 7,000 to 9,000px tall at 1024 wide, 9,800px at 375.
- Rhythm alternates: a photo-heavy section, then a text-light coloured block, then white breathing room. No two consecutive sections share a layout.
- Environment opens with a **short** banner, 317px, not full viewport: tinted photo, four-word white headline at 54px, nothing else. The page gets to content inside one scroll. Home opens full viewport because the collage is the point. Both are "openings," one tall and one short; the choice depends on whether the opening image is the content.

---

## 6. How the slow background animations work

Measured with computed styles and the Web Animations API, not inferred.

| Motion | Mechanism | Timing | Notes |
|---|---|---|---|
| **Video background** (Home, one section) | `<video autoplay muted loop playsinline>`, `object-fit: cover`, 848px tall, no overlay | 8.47s loop at 1x | This is the "cinematic" element. It is a video file, not CSS. Still plays at 375 wide. |
| **Entrance reveals** | `.preFade` to `.fadeIn`, `transition: opacity 0.9s ease` | 0.9s, stagger ~5ms per element (effectively simultaneous within a block) | Applied to 123 elements via `data-animation-role` = image, header-element, button. Section-level `data-animation` is set to `none` everywhere, so only blocks fade; nothing slides or scales. |
| **Hover / menu** | `transition: transform 0.6s cubic-bezier(0.4,0,0.2,1)` | 0.6s | Two elements only. |
| **Hero gradient and collage** | Static image | none | Not animated. No parallax: `background-attachment: scroll`, no scroll hooks. |

**Layering:** section background (colour or photo), then an optional tint overlay, then the content layer that fades in. Video sits in the background slot with content on top.

**Reduced motion:** zero `prefers-reduced-motion` rules in any accessible stylesheet. The video and fades run for everyone. We will not copy that.

**What this means for us:** Origami's "slow animation" is one looping video and a 0.9s fade. Our current site already has more continuous motion than that (a 26s hero drift, a 44s marquee, a 6s settle on load) and already ships seven reduced-motion blocks. The gap is not quantity of motion; it is that our colour sections are static fills. The design system below proposes two CSS-only background motions that give coloured sections the same slow life a video gives Origami's, without a video asset we do not have.

---

## 7. Summary of principles to carry over

1. One headline, at most two lines, per section. Let one section per page run long if it earns it.
2. White ground, colour as interrupt, never two coloured blocks adjacent.
3. Do colour moods with photos under tints as often as with solid fills.
4. Many small images beat few large ones. Faces, repeatedly. Filmstrips and flanking cutouts.
5. One screen per section, 9 to 13 sections, alternating photo / colour / white.
6. Openings can be tall (when the image is the content) or short (when it is not).
7. Motion is slow, continuous in the background, and a plain fade on entry. Nothing bounces.
8. Where they use a scalloped divider, we use our own device, not theirs.
