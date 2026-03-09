import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import "./globals.css";

const siteUrl = "https://sonicture.com";

export const metadata: Metadata = {
  title: "Sonicture | See Music",
  description:
    "A unique visual fingerprint for every song. Sonicture transforms music into visual structure through computational analysis and the OKLCH color space.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sonicture | See Music",
    description:
      "A unique visual fingerprint for every song. Sonicture transforms music into visual structure through computational analysis.",
    url: siteUrl,
    siteName: "Sonicture",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonicture: concentric colored rings visualizing the structure of a song",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonicture | See Music",
    description:
      "A unique visual fingerprint for every song. Sonicture transforms music into visual structure through computational analysis.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
