import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Nonces would force every page to render dynamically, so this static site keeps
// 'unsafe-inline' for Next's inline bootstrap scripts and blocks everything external.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        // Filenames aren't hashed, so browsers revalidate by ETag. A re-render always
        // lands, and an unchanged file costs a 304, not a fresh download.
        source: "/videos/:file*",
        headers: [{ key: "Cache-Control", value: "public, no-cache" }],
      },
    ];
  },
};

export default nextConfig;
