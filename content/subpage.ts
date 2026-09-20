// Copy and assets shared by the light service subpages (PR/SEO/GEO, Webdesign,
// E-Commerce): the footer address, legal links, socials and the logo.

export type Link = { label: string; href: string };

export const email = "hello@velyqo.com";

export const logoMark = "/assets/shared/logo-mark.png";

export const office = {
  title: "München Office",
  lines: ["Leopoldstraße 184", "80804 München", "Deutschland"],
};

export const legalColumn = {
  title: "Rechtliches",
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Cookie-Einstellungen", href: "#" }, // TODO
    { label: "AGB", href: "/agb" },
  ],
};

export const copyright = "© 2026 VELYQO. Alle Rechte vorbehalten.";

// TODO: profile URLs
export const socials = [
  { label: "Instagram", icon: "/assets/shared/icons/instagram.svg", href: "#" },
  { label: "LinkedIn", icon: "/assets/shared/icons/linkedin.svg", href: "#" },
  { label: "Twitter", icon: "/assets/shared/icons/twitter.svg", href: "#" },
  { label: "Dribbble", icon: "/assets/shared/icons/dribbble.svg", href: "#" },
];

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
