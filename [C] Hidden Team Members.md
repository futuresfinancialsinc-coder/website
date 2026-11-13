# Hidden Team Members

**Nobody is hidden right now.** All five officers are live, in this order:
Danny, Hans, Justin, Aren, Jacob.

This note stays because hiding an officer has come up repeatedly, and there is a
right way and a wrong way to do it. Nothing is ever deleted.

## History

| Date | Change |
|---|---|
| 2026-11-04 | Jacob and Justin hidden |
| 2026-11-11 | Jacob and Justin restored |
| 2026-11-13 | Hans and Jacob hidden; Hans restored same day |
| 2026-11-13 | Jacob restored — all five live |

## How to hide an officer

1. Add to `.vercelignore`, under a dated comment: `team-<name>.html` and
   `images/team/<name>.jpg`, `<name>-color.jpg`. The files stay on disk; Vercel
   just never uploads them, so the URL 404s.
2. Cut their `<article class="team-card">` block out of the `.team-wall` in
   `meet-the-team.html`. **Paste the exact block into this file first** — restoring
   from a copy beats rebuilding it by hand.
3. Cut their `<url>` block from `sitemap.xml` and their `- [Name](...)` line from
   `llms.txt`.
4. Fix the count in `llms.txt`. It reads "Its **five** executive officers are" and
   "The **five** founding officers and". With anyone hidden, drop the word "five"
   from both, or the file contradicts the page for exactly the AI crawlers it
   exists to serve. Put "five" back only when all five are live.

## What to leave alone

- Research & Policy bylines. Authorship is not the same as having a bio page.
- Photo captions and alt text elsewhere on the site.
- Faces in group photos.

## On the way back

The URL will have been 404ing, so re-request indexing for it in Search Console
rather than waiting for a recrawl.
