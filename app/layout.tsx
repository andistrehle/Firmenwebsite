import type { Metadata } from "next";
import { Instrument_Serif, Inter, Inter_Tight } from "next/font/google";
import { SITE } from "@/lib/site-config";
import "./globals.css";

// Wird von next/font zur Build-Zeit heruntergeladen und lokal ausgeliefert —
// zur Laufzeit erfolgt keine Verbindung zu Google.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});
// Nur kursiv: für das eine hervorgehobene Wort im Hero
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: { default: SITE.seo.title, template: `%s | ${SITE.brandName}` },
  description: SITE.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: SITE.seo.siteName,
    title: SITE.seo.title,
    description: SITE.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} font-sans`}>{children}</body>
    </html>
  );
}
