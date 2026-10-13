import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { SITE } from "@/lib/site-config";
import "./globals.css";

// Wird von next/font zur Build-Zeit heruntergeladen und lokal ausgeliefert —
// zur Laufzeit erfolgt keine Verbindung zu Google.
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
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
      <body className={`${instrument.variable} font-sans`}>{children}</body>
    </html>
  );
}
