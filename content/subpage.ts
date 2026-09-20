// Copy and assets shared by the light service subpages (PR/SEO/GEO, Webdesign,
// E-Commerce): the footer address, legal links and the logo.

import { office as siteOffice } from "./home";

export type Link = { label: string; href: string };

// One address for the whole site: the same contact data as the homepage
// footer, so a change there reaches every subpage.
export const email = siteOffice.email;

export const office = {
  title: siteOffice.title,
  lines: [siteOffice.company, siteOffice.street, siteOffice.city],
};

// A ready-to-send enquiry: subject and body are filled in for the offer that
// was clicked, the contact details are left blank for the sender.
export function inquiryHref(subject: string, topic: string) {
  const body = [
    "Guten Tag,",
    "",
    topic,
    "",
    "Unternehmen:",
    "Ansprechpartner:in:",
    "Website:",
    "Telefon (optional):",
    "",
    "Was ist Ihnen wichtig? (Ziele, Zeitrahmen, Budget)",
    "",
    "",
    "Viele Grüße",
  ].join("\r\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// The enquiry for one package card: names the offer and its price so the
// reply can start from there.
export function offerHref(area: string, item: PackageCopy) {
  const price =
    item.title.includes("€") || item.title === "Auf Anfrage"
      ? `, ${item.title}${item.unit ? ` ${item.unit}` : ""}`
      : "";
  return inquiryHref(
    `Anfrage ${area}: ${item.heading}`,
    `ich interessiere mich für das Angebot „${item.heading}“ (${item.eyebrow}${price}) im Bereich ${area}. Bitte melden Sie sich bei mir.`,
  );
}

// Card copy without its link; the page adds the link per card.
export type PackageCopy = Omit<PackageItem, "href" | "linkLabel">;

// Offers (packages with a price or a booking): the arrow opens an enquiry
// email that names the clicked offer.
export function withOfferLinks(area: string, items: PackageCopy[]): PackageItem[] {
  return items.map((item) => ({
    ...item,
    href: offerHref(area, item),
    linkLabel: "Angebot per E-Mail anfragen",
  }));
}

// Services: the arrow leads on to a section of the same page.
export function withLink(items: PackageCopy[], href: string, linkLabel: string): PackageItem[] {
  return items.map((item) => ({ ...item, href, linkLabel }));
}

export const legalColumn = {
  title: "Rechtliches",
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export const copyright = "© 2026 VELYQO. Alle Rechte vorbehalten.";

export type FooterContent = {
  columns: { title: string; links: Link[] }[];
  slogan: string[];
};

export type PackageItem = {
  eyebrow: string;
  title: string;
  // Only the priced cards; rendered small and muted after the title
  unit?: string;
  heading: string;
  description: string;
  // Where the card's arrow leads: an enquiry email for offers, the pricing
  // section for services
  href: string;
  linkLabel: string;
};

export type HeroCopy = {
  eyebrow: string;
  title: string[];
  lead: string;
  primary: Link;
  secondary: Link;
  slogan: string;
};

export type IntroContent = {
  eyebrow: string;
  title: string;
  lead: string;
  benefits: { icon: string; title: string; description: string }[];
};

export type MetricsContent = {
  eyebrow: string;
  title: string;
  lead: string;
  checklist: string[];
  stats: { value: string; label: string; description: string }[];
  trend: { eyebrow: string; text: string };
};

export type ProcessContent = {
  eyebrow: string;
  title: string;
  steps: { number: string; title: string; description: string }[];
};

export type FaqContent = {
  eyebrow: string;
  title: string;
  lead: string;
  items: { question: string; answer: string }[];
};

export type CtaContent = {
  eyebrow: string;
  title: string;
  lead: string;
  button: Link;
  note: string;
};
