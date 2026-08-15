import type { Metadata } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://victorchen2004.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Xucheng Chen | Economics Researcher",
    template: "%s | Xucheng Chen",
  },
  description:
    "Academic website of Xucheng Chen (Victor Chen), an economics student and researcher at CUHK-Shenzhen.",
  keywords: [
    "Xucheng Chen",
    "Victor Xucheng Chen",
    "Chen Xucheng",
    "陈绪成",
    "CUHK-Shenzhen",
    "Economics",
    "Applied Microeconomics",
    "Labor Economics",
    "Development Economics",
    "Education Economics",
    "Financial Economics",
  ],
  authors: [{ name: "Xucheng Chen", url: SITE_URL }],
  creator: "Xucheng Chen",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "pWbocmuCzNZ6qYcjKEQcoQVmYTShwNPsn_9eIOeWc_s",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: "Xucheng Chen | Economics Researcher at CUHK-Shenzhen",
    description:
      "Research in applied microeconomics, education, labor, development, gender, finance, and macroeconomics.",
    siteName: "Xucheng Chen",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Xucheng Chen — Economics at CUHK-Shenzhen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xucheng Chen | Economics Researcher",
    description:
      "Research in applied microeconomics, education, labor, development, gender, finance, and macroeconomics.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
