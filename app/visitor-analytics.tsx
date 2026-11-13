"use client";

import { useEffect, useState } from "react";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const ENABLED = /^G-[A-Z0-9]+$/.test(MEASUREMENT_ID ?? "");
const CONSENT_KEY = "victor-site-analytics-consent-v1";
const SITE_SECTIONS = new Set([
  "top",
  "about",
  "research",
  "experience",
  "materials",
  "contact",
]);

type ConsentChoice = "accepted" | "declined" | null;
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    victorAnalyticsReady?: boolean;
  }
}

function track(name: string, parameters: Record<string, string>) {
  window.gtag?.("event", name, parameters);
}

function startAnalytics() {
  if (!ENABLED || !MEASUREMENT_ID || window.victorAnalyticsReady) return;

  window.victorAnalyticsReady = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  track("page_view", {
    page_title: document.title,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_path: window.location.pathname,
  });
}

function trackLinkClick(event: MouseEvent) {
  const element = event.target instanceof Element ? event.target : null;
  const link = element?.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;

  const href = link.getAttribute("href") ?? "";
  if (href.startsWith("mailto:")) {
    track("contact_click", { contact_method: "email" });
    return;
  }

  if (href.startsWith("#")) {
    const section = href.slice(1);
    if (SITE_SECTIONS.has(section)) {
      track("section_navigation", { section_name: section });
    }
    return;
  }

  const url = new URL(link.href, window.location.href);
  const enclosingSection = link.closest<HTMLElement>("section[id]")?.id;
  const sectionName =
    enclosingSection && SITE_SECTIONS.has(enclosingSection)
      ? enclosingSection
      : "other";
  if (url.pathname.toLowerCase().endsWith(".pdf")) {
    track("document_open", {
      document_group: url.pathname.startsWith("/cv/") ? "cv" : "research_or_materials",
      document_path: url.pathname,
      section_name: sectionName,
    });
  } else if (url.pathname.includes("/public/code/")) {
    track("code_open", { file_name: url.pathname.split("/").pop() ?? "unknown" });
  } else if (url.origin !== window.location.origin) {
    track("external_link_click", {
      destination_host: url.hostname,
      section_name: sectionName,
    });
  }
}

export default function VisitorAnalytics() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ENABLED) return;
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(CONSENT_KEY);
      setChoice(saved === "accepted" || saved === "declined" ? saved : null);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ENABLED || choice !== "accepted") return;
    startAnalytics();
    document.addEventListener("click", trackLinkClick, true);
    const seenSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionName = entry.target.id;
          if (entry.isIntersecting && !seenSections.has(sectionName)) {
            seenSections.add(sectionName);
            track("section_view", { section_name: sectionName });
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => {
      if (SITE_SECTIONS.has(section.id)) observer.observe(section);
    });
    return () => {
      document.removeEventListener("click", trackLinkClick, true);
      observer.disconnect();
    };
  }, [choice]);

  if (!ENABLED || !ready) return null;

  const choose = (value: Exclude<ConsentChoice, null>) => {
    if (MEASUREMENT_ID) {
      const browser = window as unknown as Record<string, boolean>;
      browser[`ga-disable-${MEASUREMENT_ID}`] = value === "declined";
      if (value === "declined") {
        window.gtag?.("consent", "update", { analytics_storage: "denied" });
      } else if (window.victorAnalyticsReady) {
        window.gtag?.("consent", "update", { analytics_storage: "granted" });
      }
    }
    window.localStorage.setItem(CONSENT_KEY, value);
    setChoice(value);
  };

  return (
    <>
      <button
        className="analytics-preferences"
        type="button"
        onClick={() => setChoice(null)}
      >
        Analytics preferences
      </button>
      {choice === null && (
        <div className="analytics-consent" role="dialog" aria-label="Analytics choice">
          <p>
            May I use Google Analytics to understand approximate visitor location,
            device type, pages visited, and link clicks? It starts only if you
            agree. This site does not ask for names or precise locations. Read the{" "}
            <a href="/privacy/">privacy note</a>.
          </p>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => choose("declined")}>
              No thanks
            </button>
            <button type="button" onClick={() => choose("accepted")}>
              Allow analytics
            </button>
          </div>
        </div>
      )}
    </>
  );
}
