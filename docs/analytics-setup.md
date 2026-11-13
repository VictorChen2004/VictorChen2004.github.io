# Visitor analytics setup

The site contains an optional Google Analytics 4 integration. It is inactive
unless `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set to a valid `G-...` web-stream ID
when the static site is built. The owner must create and control the Analytics
account and accept any account terms. A Search Console verification token is
not a GA4 measurement ID.

## Activate

1. In Google Analytics, create an account and GA4 property controlled by Victor.
2. Add a web data stream for `https://victorchen2004.github.io/` and copy its
   Measurement ID (`G-...`). Do not send a Measurement Protocol API secret,
   account password, or personal visitor data to this repository.
3. Build the static site with `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-... npm run build`
   and deploy `out/` to `gh-pages` using the existing publication workflow.
   The ID is public in the browser; it is a routing identifier, not a secret.
4. Check the live site in a fresh browser profile: before consent, no
   `googletagmanager.com/gtag/js` request; after “Allow analytics,” the tag
   loads and a page view reaches GA4 Realtime. “No thanks” must leave the tag
   unloaded. After accepting, changing to “No thanks” must disable further
   measurement. Check desktop and mobile layouts and the privacy page.
5. In GA4, review data retention, access permissions, enhanced-measurement
   settings, and advertising features. Avoid enabling an automatic event that
   duplicates a custom event. Keep Google Signals and ad personalization off
   unless separately reviewed.

## Measurement scope

- GA4's standard reports can show aggregate traffic, approximate geography,
  browser/device information, acquisition sources, and pages.
- Custom events: `page_view` (path only), `section_view` (scroll into view),
  `section_navigation`, `document_open` (public path and CV-vs-other group),
  `code_open` (public filename), `contact_click` (email action, not address),
  and `external_link_click` (destination host and site section only). Register
  any custom parameters needed in GA4 reports as custom dimensions.
- The tag is not loaded before a visitor chooses “Allow analytics.” The choice
  is stored in that browser's local storage. Visitors can reopen preferences
  from the fixed button and revoke consent. No names, visitor email addresses,
  precise coordinates, raw IPs, or full query strings are custom event fields.

Analytics will not identify named people or count every visitor: browser
blocking, consent decisions, VPNs, and geography estimation affect coverage
and accuracy. The GitHub repository's Traffic page measures repository views,
not all visits to the hosted site. Search Console measures Google Search
visibility and clicks, not total site traffic.
