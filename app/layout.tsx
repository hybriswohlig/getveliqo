import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getveliqo.com"),
  title: "Veliqo — Marketing agency for SEO, GEO & product marketing",
  description:
    "Veliqo grows brands with SEO, GEO (AI search), product marketing, and Amazon FBA services — built to grow revenue, not just traffic.",
  openGraph: {
    title: "Veliqo — Marketing agency for SEO, GEO & product marketing",
    description:
      "Veliqo grows brands with SEO, GEO (AI search), product marketing, and Amazon FBA services — built to grow revenue, not just traffic.",
    url: "https://getveliqo.com",
    siteName: "Veliqo",
    type: "website",
    images: [{ url: "/assets/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veliqo",
    description:
      "Veliqo grows brands with SEO, GEO (AI search), product marketing, and Amazon FBA services.",
    images: ["/assets/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-white">
        {children}
      </body>
    </html>
  );
}
