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
  title: "Veliqo — The intelligence layer for modern commerce",
  description:
    "Veliqo turns scattered customer data into clear, real-time decisions. One workspace for signals, insights, and action.",
  openGraph: {
    title: "Veliqo — The intelligence layer for modern commerce",
    description:
      "Veliqo turns scattered customer data into clear, real-time decisions. One workspace for signals, insights, and action.",
    url: "https://getveliqo.com",
    siteName: "Veliqo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veliqo",
    description:
      "Veliqo turns scattered customer data into clear, real-time decisions.",
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
