# Hidden Team Members

Jacob Brynczka is currently off the live site, at Aren's request, until he says to
put him back. **Nothing was deleted** — the page, photos and copy are all still in
the repo and in git history.

History: Jacob and Justin were hidden 2026-11-04 and both restored 2026-11-11. Hans
and Jacob were hidden 2026-11-13; Hans was restored the same day.

## Currently hidden

| On disk | Deployed? |
|---|---|
| `team-jacob.html` | no |
| `images/team/jacob.jpg`, `jacob-color.jpg` | no |

Excluded by the block at the end of `.vercelignore`. The files are untouched;
Vercel simply never uploads them, so `/team-jacob` returns 404 while this is in
place.

## On the site now

Meet the Team shows four cards, in this order: **Danny, Hans, Justin, Aren**.
Jacob belongs last when he goes back.

`llms.txt` deliberately says "Its executive officers are" and "The founding
officers and" with no number, so the text cannot contradict however many cards are
showing. Only put "five" back when all five are live.

## To restore Jacob

1. Delete the trailing block from `.vercelignore` (everything under the
   `# Hidden from the live site` comment).
2. Put the card below back into the `.team-wall` in `meet-the-team.html`, last.
3. Put the entries below back into `sitemap.xml` and `llms.txt`.
4. If that makes all five live again, change "Its executive officers are" to
   "Its five executive officers are" and "The founding officers and" to
   "The five founding officers and" in `llms.txt`.
5. Re-request indexing for `/team-jacob` in Search Console, since it will have
   been 404ing.

## Jacob Brynczka

`meet-the-team.html`:

```html
        <article class="team-card">
          <a class="team-photo-link" href="/team-jacob">
            <img class="team-photo" src="images/team/jacob.jpg" alt="Jacob Brynczka, Chief Operating Officer of Futures Financials"  loading="lazy" />
          </a>
          <div class="t-name">Jacob Brynczka</div>
          <div class="t-cofounder">Founding Officer</div>
          <div class="t-role">Chief Operating Officer</div>
          <a class="arrow-link" href="/team-jacob">Read bio <span class="arrow">→</span></a>
        </article>
```

`sitemap.xml`:

```xml
  <url>
    <loc>https://futuresfinancials.org/team-jacob</loc>
    <priority>0.8</priority>
  </url>
```

`llms.txt`:

```
- [Jacob Brynczka](https://futuresfinancials.org/team-jacob): Chief Operating Officer and founding officer.
```
