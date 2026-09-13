# Xucheng Chen — Academic Personal Website

Live website: <https://victorchen2004.github.io>

This is the complete source for Xucheng Chen's new academic personal website.
It preserves the substance and warm brown visual identity of the original
Google Sites website while introducing a cleaner editorial layout and stronger
Google Search signals.

## Included in the website

- A responsive portrait-led About introduction, followed by Research,
  Experience, Materials, CV, and Contact sections.
- A restrained Fall 2027 opportunity note at the beginning of the homepage,
  stating interest in North American PhD and predoctoral opportunities and
  welcoming advice, guidance, support, and conversation.
- A two-row mobile header that keeps the full `Victor Xucheng Chen` identity,
  all four section links, and Contact visible on narrow screens.
- A restrained academic research list with prominent dates, concise project
  highlights, expandable contribution details, and the original
  research-interest terminology.
- Research organized by maturity into Working Papers, Work in Progress, and
  Selected Writing, with RA Experience alongside them in four large
  color-coded expandable panels.
- A CV-backed Experience portfolio covering teaching, academic leadership,
  student media, debate, mentoring, campus leadership, all listed honors and
  awards, two current paper acceptances, selected coursework, and a compact
  skills record. Honors remain
  visible while the three experience areas open from large color-coded panels;
  coursework follows Honors & Awards in a static four-part academic-preparation
  module transcribed from the latest CV, with one course per line and the CV's
  original four-group logic: Economics; Programming & Research Methods; Other
  Economics; and Mathematics & Statistics. Gender Study, Study of Logics, and
  Intro to Sociology are grouped under Other Economics. The research
  toolkit and languages share a separate skills band,
  and each experience record's contributions use a matching tinted callout.
  Experience and honor headings are written to remain informative on their own,
  while institutions and programme context stay in the supporting small text;
  every Experience supporting line begins with the same color-matched bullet.
- A two-part Materials exhibition with eight locally hosted cover previews,
  full original descriptions, and direct links to each presentation or
  teaching deck; both material groups use expandable color-coded panels.
- A locally hosted 20-minute GAAC 2026 presentation of `Robust Trust with
  Multiple Advisers`, shown with its own cover preview and linked from Paper
  Presentations.
- Two Cornell University micro-theory presentations are hosted locally with
  their original PDFs: `Robust Trust` and `Friend or Foe: Delegating to an AI
  Whose Alignment is Unknown`.
- Course-specific actions in the Teaching Assistant record: visitors can jump
  to the public Econometrics decks or request Microeconomics, Financial
  Management, and Machine Learning materials by email.
- A web-optimized professional portrait derived from the supplied original;
  the original photograph remains unchanged outside the project.
- A locally hosted seven-page public CV, clearly labeled as the August 2026
  version, which omits the cumulative GPA while retaining the major GPA so
  visitors do not depend on an external Drive link.
- A locally hosted version 3.0 of `Robust Trust with Multiple Advisers`, linked
  directly from its Research record.
- Existing Google Drive paper links preserved, with the verified `Beyond
  Patents` record linked directly to its SSRN preprint page.
- Search metadata for `Xucheng Chen`, `Victor Xucheng Chen`, `Chen Xucheng`, and
  `Victor Chen`, `陈绪成`.
- Linked Schema.org `WebSite`, `ProfilePage`, and `Person` data, crawl
  permissions, canonical URL, social-preview metadata, honor data, and an
  image-aware XML sitemap.
- Mobile research and experience records presented as clearly separated cards,
  with dates shown as compact labels instead of repeated horizontal dividers.
- A desktop-specific typography scale that preserves the large editorial
  section anchors while reducing repeated disclosure headings, record titles,
  card heights, and excess visual density; the established mobile scale remains
  unchanged. Wide-screen Experience summaries stay on one clean line while
  retaining natural wrapping on narrower layouts.
- Consistent color-matched point markers on record-level supporting copy and
  expanded details across Research, Experience, Honors, Coursework, and
  Materials, while leaving section introductions as prose.
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

The material preview images under `public/materials` include five cached cover
images from the owner's public Google Drive decks and three covers rendered
from supplied presentation PDFs. The Cornell entries and the 20-minute GAAC
2026 presentation link to local, unchanged copies of their source PDFs; the
other entries continue to point to their original Drive files. If a deck is
replaced, refresh its preview, description, and locally hosted PDF where
applicable.

The only CV stored in the website's public asset directory is
`public/cv/xucheng-chen-cv-public-v2026-08-23.pdf`. It was regenerated from the
verified seven-page DOCX on 23 August 2026, removes only the cumulative-GPA
line and its adjacent rank note, and retains the major GPA. The complete source
CV remains outside the website repository in the owner's CV source folder
because this public edition intentionally removes information. The public copy
can be regenerated with `scripts/create_cgpa_hidden_cv.py` before running the
documented render checks.

The owner's CV source folder keeps exactly three current files for this release:
`CV_Xucheng_Chen_Full_v2026-08-23.docx`,
`CV_Xucheng_Chen_Full_v2026-08-23.pdf`, and
`CV_Xucheng_Chen_Public_v2026-08-23.pdf`.

CV version rule: for a content-only additive update, replace the previous
public PDF and keep only the new clearly labeled version. If an update removes
substantive information, preserve the previous complete source outside the
public website while publishing only the redacted public edition. Do not keep
legacy CV PDFs in `public/cv`; Git history already preserves deployed versions.

Google Scholar author-profile links should be added to the Contact section and
the Schema.org `sameAs` list only after the exact public profile URL is
confirmed. As of the 15 August 2026 check, web and Google Scholar searches did
not return a unique, verifiable profile for this author; a generic search URL
is intentionally not presented as a personal profile.

## Google discovery checklist

The site already exposes its canonical URL, crawl permissions, identity data,
Google verification meta tag, Google verification HTML file, and sitemap at
`https://victorchen2004.github.io/sitemap.xml`. Because `github.io` is GitHub's
domain rather than an owner-managed custom domain, a DNS TXT record cannot be
added for this subdomain. Use the URL-prefix property in Google Search Console:

1. Add the URL-prefix property `https://victorchen2004.github.io/`. The supplied
   HTML verification file is published at
   `https://victorchen2004.github.io/google358bd2b17b05f0a0.html`; the homepage
   also retains the supplied verification meta tag as a second method.
2. Submit `sitemap.xml` in the Sitemaps report.
3. Inspect the homepage URL and choose **Request indexing** once. Repeating the
   request does not accelerate crawling.
4. Link the GitHub Pages site from the public GitHub profile and the former
   Google Sites homepage so search engines can associate the same name,
   affiliation, and canonical destination across public pages.

Search Console submission can improve discovery but cannot guarantee immediate
ranking. Keep the owner name and affiliation consistent on institutional,
paper, conference, and future Google Scholar pages.

## Optional custom domain

For a domain such as `xuchengchen.com`, configure the domain in GitHub Pages and
set `NEXT_PUBLIC_SITE_URL` to its full HTTPS address when building. Then submit
that final address and `sitemap.xml` in Google Search Console.
