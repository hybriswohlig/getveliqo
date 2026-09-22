import type { Metadata } from "next";
import { Archivo_Narrow, Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Variable, since the PR/SEO/GEO subpage uses 400 to 900
const outfit = Outfit({
  variable: "--font-outfit-family",
  subsets: ["latin"],
});

// Body font of the PR/SEO/GEO subpage
const geist = Geist({
  variable: "--font-geist-family",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  weight: "700",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const description =
  "VELYQO verbindet Webdesign, SEO/GEO und PR zu einer digitalen Präsenz, die Marken sichtbar macht und Wachstum schafft.";

export const metadata: Metadata = {
  metadataBase: new URL("https://getveliqo.com"),
  title: "VELYQO — Webdesign, SEO/GEO & PR",
  description,
  openGraph: {
    title: "VELYQO — Webdesign, SEO/GEO & PR",
    description,
    url: "/",
    siteName: "VELYQO",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VELYQO",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${outfit.variable} ${geist.variable} ${archivoNarrow.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {/* The scroll reveals in components/ui/reveal.tsx ship their hidden
            state in the server HTML, so without scripting nothing would ever
            hand the text over. Here rather than per page, so it covers every
            route. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
