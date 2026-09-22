import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Tomisin Akinfemiwa · Software Engineer";
const description =
  "Algorithmic problem-solving, systems architecture, and shipped products.";

// Set NEXT_PUBLIC_SITE_URL once the site has a real domain, so OG/Twitter
// image URLs resolve correctly. Falls back to the host's own env vars
// (Netlify's URL, then Vercel's VERCEL_URL), then localhost, so the build
// never has to guess a production domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Ak_Tomisin",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E10",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
