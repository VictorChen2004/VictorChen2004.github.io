# Change Log

## 2026-08-13

- Created a new academic personal website based on the public content of the
  existing Google Sites website.
- Reorganized the information into About, Research, Research Experience,
  Materials, CV, and Contact sections.
- Preserved the original warm brown identity while introducing a responsive
  editorial academic design.
- Added descriptive search metadata, name variants, `Person` structured data,
  canonical URL support, crawl rules, and an XML sitemap.
- Added a GitHub Actions workflow and a static Next.js export for automatic
  deployment to a `<username>.github.io` repository.
- Preserved links to the original Google Drive and SSRN materials.
- Added a dedicated social-sharing preview image with the final site name,
  affiliation, palette, and editorial typography.
- Corrected the home-page title composition so search results do not repeat the
  site owner's name.
- Isolated unused Cloudflare starter modules from the static GitHub build so the
  two supported deployment targets can be validated independently.
- Marked search-engine metadata routes as static so GitHub Pages can export
  `robots.txt` and `sitemap.xml` as ordinary files.
- Prepared a minimal GitHub-only release package without the unused preview,
  database, authentication, or server modules from the development workspace.
- Replaced the temporary “XC” portrait block with the supplied professional
  portrait, optimized as a separate website asset while preserving the original.
- Set the final GitHub identity and canonical site address to `VictorChen2004`
  and `https://victorchen2004.github.io`.
- Marked the portrait as a priority responsive image to improve first-screen
  loading while retaining a static GitHub Pages export.
- Created the public repository `VictorChen2004/VictorChen2004.github.io`.
- Switched the live deployment to a dedicated `gh-pages` branch because the
  initial GitHub authorization did not include workflow-management permission;
  preserved the optional workflow under `docs/` for future use.
