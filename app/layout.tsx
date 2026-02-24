import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonicture — The Computational Manifestation of Musical DNA",
  description:
    "A unique visual fingerprint for every song. Sonicture renders the latent geometry of music through computational analysis and the OKLCH color space.",
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
