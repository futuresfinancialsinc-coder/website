# Hidden Team Members

Hans Patel and Jacob Brynczka were taken off the live site on 2026-11-13 at Aren's
request, until he says to put them back. **Nothing was deleted** — the pages, photos
and copy are all still in the repo and in git history.

Jacob and Justin were hidden once before, on 2026-11-04, and both were restored on
2026-11-11. This note replaces that one.

## Currently hidden

| On disk | Deployed? |
|---|---|
| `team-hans.html`, `team-jacob.html` | no |
| `images/team/hans.jpg`, `hans-color.jpg` | no |
| `images/team/jacob.jpg`, `jacob-color.jpg` | no |

They are excluded by the block at the end of `.vercelignore`. The files are
untouched; Vercel simply never uploads them, so `/team-hans` and `/team-jacob`
return 404 while this is in place.

Still on the site and deliberately left alone:
- Hans's four bylines on Research & Policy — he is credited as an author, which is
  separate from having a bio page.
- The Our Story photo caption naming him.
- Both officers' photos inside the Meet the Team group shots.

## To restore

1. Delete the trailing block from `.vercelignore` (everything under the
   `# Hidden from the live site 2026-11-13` comment).
2. Put the cards below back into the `.team-wall` in `meet-the-team.html`.
   Original order: **Danny, Hans, Justin, Aren, Jacob**.
3. Put the entries below back into `sitemap.xml` and `llms.txt`.
4. In `llms.txt`, change "Its executive officers are" back to
   "Its five executive officers are", and "The founding officers and" back to
   "The five founding officers and".
5. Re-request indexing for both URLs in Search Console, since they will have been
   404ing.

## Hans Patel

`meet-the-team.html`:

```html
        <article class="team-card">
          <a class="team-photo-link" href="/team-hans">
            <img class="team-photo" src="images/team/hans.jpg" alt="Hans Patel, Co-Chief Executive Officer of Futures Financials"  loading="lazy" />
          </a>
          <div class="t-name">Hans Patel</div>
          <div class="t-cofounder">Founding Officer</div>
          <div class="t-role">Co-Chief Executive Officer</div>
          <a class="arrow-link" href="/team-hans">Read bio <span class="arrow">→</span></a>
        </article>
```

`sitemap.xml`:

```xml
  <url>
    <loc>https://futuresfinancials.org/team-hans</loc>
    <priority>0.8</priority>
  </url>
```

`llms.txt`:

```
- [Hans Patel](https://futuresfinancials.org/team-hans): Founding officer.
```

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
