import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Tony Lombardi | Enterprise Transformation & AI Operations",
  description:
    "High-agency operator with range. 20+ years leading enterprise transformation, AI-enabled operations, and platform strategy across insurance, financial services, SaaS, and sports technology.",
  metadataBase: new URL("https://tonylombardi.ai"),
  openGraph: {
    title: "Tony Lombardi | Enterprise Transformation & AI Operations",
    description:
      "High-agency operator with range. $8.6M portfolios, $5B+ in client assets, 7× Ironman finisher.",
    url: "https://tonylombardi.ai",
    siteName: "tonylombardi.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tonylombardi.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tony Lombardi — Enterprise Transformation & AI Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Lombardi | Enterprise Transformation & AI Operations",
    description:
      "High-agency operator with range. $8.6M portfolios, $5B+ in client assets, 7× Ironman finisher.",
    images: ["https://tonylombardi.ai/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#0a0a0a" }}>
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}