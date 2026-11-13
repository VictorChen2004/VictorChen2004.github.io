import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Analytics",
  description: "How this academic website handles optional visitor analytics.",
  alternates: { canonical: "/privacy/" },
};

const analyticsEnabled = /^G-[A-Z0-9]+$/.test(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "",
);

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <Link className="privacy-back" href="/">
        ← Back to the website
      </Link>
      <p className="eyebrow">Website information</p>
      <h1>Privacy & Analytics</h1>
      <p>
        This website is hosted on GitHub Pages. GitHub may process technical
        request data, including IP addresses, to operate and protect its service.
        See the{" "}
        <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
          GitHub Privacy Statement
        </a>
        .
      </p>
      {analyticsEnabled ? (
        <>
          <p>
            With your permission, this site loads Google Analytics 4 to measure
            page views, approximate country or city, browser and device type,
            referral sources, sections viewed, and clicks on documents, code,
            external links, and the email contact link. The site does not send
            names, email addresses, full query strings, or exact location as
            custom analytics events. Google may process technical information
            needed to provide its analytics service; see the{" "}
            <a href="https://support.google.com/analytics/answer/6004245">
              Google Analytics data information
            </a>
            .
          </p>
          <p>
            Analytics is off until you select “Allow analytics.” You can change
            your choice at any time using “Analytics preferences” at the bottom
            of the page. If you decline, this site does not load the Google
            Analytics script.
          </p>
        </>
      ) : (
        <p>
          Visitor analytics has not been activated. This site currently does
          not load a Google Analytics script.
        </p>
      )}
      <p>
        For questions about this website or its analytics, contact{" "}
        <a href="mailto:xuchengchen@link.cuhk.edu.cn">
          xuchengchen@link.cuhk.edu.cn
        </a>
        .
      </p>
    </main>
  );
}
