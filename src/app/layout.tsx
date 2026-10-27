import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import SkipToContent from "@/components/SkipToContent";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsHead from "@/components/AnalyticsHead";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});
const body = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zentristraining.com";

export const metadata: Metadata = {
  title: {
    default: "ZENTRIS Management Training | Corporate & Safety Training in Dubai, UAE",
    template: "%s | ZENTRIS Management Training",
  },
  description:
    "KHDA-approved management training and accredited occupational safety training in Dubai, UAE. Empowering individuals and elevating organizations.",
  icons: { icon: "/brand/icon.svg" },
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "ZENTRIS Management Training",
    title: "ZENTRIS Management Training | Corporate & Safety Training in Dubai, UAE",
    description:
      "KHDA-approved management training and accredited occupational safety training in Dubai, UAE.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENTRIS Management Training",
    description:
      "Corporate & Safety Training in Dubai, UAE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <head>
        <AnalyticsHead />
      </head>
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        <PageLoader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
