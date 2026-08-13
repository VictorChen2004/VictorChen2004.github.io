# Xucheng Chen — Academic Personal Website

Live website: <https://victorchen2004.github.io>

This is the complete source for Xucheng Chen's new academic personal website.
It preserves the substance and warm brown visual identity of the original
Google Sites website while introducing a cleaner editorial layout and stronger
Google Search signals.

## Included in the website

- A responsive portrait-led About introduction, followed by Research, Research
  Experience, Materials, CV, and Contact sections.
- A web-optimized professional portrait derived from the supplied original;
  the original photograph remains unchanged outside the project.
- Existing Google Drive and SSRN links preserved from the original website.
- Search metadata for `Xucheng Chen`, `Victor Xucheng Chen`, `Chen Xucheng`, and
  `陈绪成`.
- Schema.org `Person` data, crawl permissions, canonical URL, social-preview
  metadata, and an XML sitemap.
- GitHub Pages publication from a dedicated static `gh-pages` branch.

The content was reconstructed from the public website at
`https://sites.google.com/view/xuchengchen/`. Project descriptions were lightly
edited for clarity and brevity without intentionally changing their meaning.
Before publication, please confirm the current education status, paper versions,
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

## Optional custom domain

For a domain such as `xuchengchen.com`, configure the domain in GitHub Pages and
set `NEXT_PUBLIC_SITE_URL` to its full HTTPS address when building. Then submit
that final address and `sitemap.xml` in Google Search Console.
