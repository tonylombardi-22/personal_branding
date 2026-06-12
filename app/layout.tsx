import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Tony Lombardi — Builder. Designer. Advisor.",
  description:
    "When the path isn't obvious, I build the system that gets people moving again. 18+ years enterprise transformation, AI systems, and independent consulting.",
  metadataBase: new URL("https://tonylombardi.ai"),
  openGraph: {
    title: "Tony Lombardi — Builder. Designer. Advisor.",
    description:
      "When the path isn't obvious, I build the system that gets people moving again.",
    url: "https://tonylombardi.ai",
    siteName: "tonylombardi.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tonylombardi.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tony Lombardi — Builder. Designer. Advisor.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Lombardi — Builder. Designer. Advisor.",
    description:
      "When the path isn't obvious, I build the system that gets people moving again.",
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
      <body style={{ margin: 0, padding: 0, background: "#0d0d0d" }}>
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}