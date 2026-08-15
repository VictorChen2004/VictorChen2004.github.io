# Xucheng Chen — Academic Personal Website

Live website: <https://victorchen2004.github.io>

This is the complete source for Xucheng Chen's new academic personal website.
It preserves the substance and warm brown visual identity of the original
Google Sites website while introducing a cleaner editorial layout and stronger
Google Search signals.

## Included in the website

- A responsive portrait-led About introduction, followed by Research,
  Experience, Materials, CV, and Contact sections.
- A restrained academic research list with prominent dates, concise project
  highlights, expandable contribution details, and the original
  research-interest terminology.
- Research organized by maturity into Working Papers, Work in Progress, and
  Selected Writing, with RA Experience alongside them in four large
  color-coded expandable panels.
- A CV-backed Experience portfolio covering teaching, academic leadership,
  student media, debate, mentoring, campus leadership, all listed honors and
  awards, and a compact skills record.
- A two-part Materials exhibition with five locally hosted cover previews,
  full original descriptions, and direct links to each presentation or
  teaching deck.
- A web-optimized professional portrait derived from the supplied original;
  the original photograph remains unchanged outside the project.
- A locally hosted six-page CV, clearly labeled as the July 2026 version, so
  visitors do not depend on an external Drive link.
- Existing Google Drive paper links preserved, with the verified `Beyond
  Patents` record linked directly to its SSRN preprint page.
- Search metadata for `Xucheng Chen`, `Victor Xucheng Chen`, `Chen Xucheng`, and
  `陈绪成`.
- Schema.org `Person` data, crawl permissions, canonical URL, social-preview
  metadata, honor data, and an image-aware XML sitemap.
- GitHub Pages publication from a dedicated static `gh-pages` branch.

The content was reconstructed from the public website at
`https://sites.google.com/view/xuchengchen/` and updated against the owner's
2026 CV materials and supplied research notes. Project highlights were lightly
edited for clarity and brevity without intentionally changing their meaning.
Before publication, please confirm future-dated work, current paper versions,
collaborator names, and conference or publication statuses.

## Preview on a computer

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

The terminal will print a local preview address, normally
`http://localhost:3000`.

## Publish on GitHub Pages

1. Create a public GitHub repository named exactly `<username>.github.io`.
2. Upload the editable source in this project to its `main` branch.
3. Run `npm run build` and publish the generated `out` directory to a
   `gh-pages` branch.
4. Open **Settings → Pages** and select the `gh-pages` branch and `/ (root)`.

The website will appear at `https://<username>.github.io`. This release already
uses the final GitHub account address in its canonical URL, sitemap, social
preview, and structured data.

An optional GitHub Actions version is preserved at
`docs/optional-deploy-pages-workflow.yml`. It can be moved to
`.github/workflows/deploy-pages.yml` later if the GitHub authorization is
expanded to include workflow management.

This release is configured for the repository `VictorChen2004.github.io` and
the public address `https://victorchen2004.github.io`.

## Updating information

- Main text and project records: `app/page.tsx`
- Colors and layout: `app/globals.css`
- Search and sharing metadata: `app/layout.tsx`
- Chronological project record: `CHANGELOG.md`

Whenever biography, dates, paper status, or links change, update both the page
and `CHANGELOG.md` so future collaborators can understand what changed.

The material preview images under `public/materials` are cached cover images
from the owner's public Google Drive decks. Their links continue to point to
the original Drive files; if a deck is replaced, refresh both its preview and
its description.

The current downloadable CV is `public/cv/xucheng-chen-cv-july-2026.pdf`. Its
version label follows the PDF file's embedded creation and modification date
(11 July 2026), rather than the website deployment date.

Google Scholar author-profile links should be added to the Contact section and
the Schema.org `sameAs` list only after the exact public profile URL is
confirmed. As of the 15 August 2026 check, web and Google Scholar searches did
not return a unique, verifiable profile for this author; a generic search URL
is intentionally not presented as a personal profile.

## Optional custom domain

For a domain such as `xuchengchen.com`, configure the domain in GitHub Pages and
set `NEXT_PUBLIC_SITE_URL` to its full HTTPS address when building. Then submit
that final address and `sitemap.xml` in Google Search Console.
