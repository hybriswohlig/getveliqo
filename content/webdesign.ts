// Webdesign subpage copy, taken verbatim from the Figma frame
// "VELYQO - Webdesign Subpage Exact" (77:307).
// Links marked TODO point at pages or targets that don't exist yet.

import {
  email,
  legalColumn,
  type CtaContent,
  type FooterContent,
  type HeroCopy,
  type IntroContent,
  type Link,
  type PackageItem,
  type ProcessContent,
} from "./subpage";

export const anchors = {
  top: "#showcase",
  services: "#leistungen",
  pricing: "#pakete",
  process: "#prozess",
  contact: "#kontakt",
} as const;

export const nav = [
  { label: "Showcase", href: anchors.top, current: true },
  { label: "Leistungen", href: anchors.services },
  { label: "Pakete", href: anchors.pricing },
  { label: "Prozess", href: anchors.process },
];

export const headerCta: Link = { label: "Projekt anfragen", href: anchors.contact };

export const hero: HeroCopy = {
  eyebrow: "DIGITAL ATELIER",
  title: ["IHR DIGITALER", "AUFTRITT."],
  lead: "Wir konzipieren und entwickeln erstklassige Webauftritte, die Ihre Markenidentität perfekt transportieren, Besucher fesseln und messbare Ergebnisse erzielen.",
  primary: { label: "Pakete ansehen", href: anchors.pricing },
  secondary: { label: "Kostenloses Erstgespräch", href: anchors.contact },
  slogan: "WEBSITES THAT MOVE BRANDS",
};

export const intro: IntroContent = {
  eyebrow: "PHILOSOPHIE",
  title: "Mehr als nur eine standardisierte Website.",
  lead: "Ein gelungener digitaler Auftritt verbindet strategische Markenberatung, erstklassiges UX-Design und modernste technische Umsetzung. Wir bauen maßgeschneiderte Systeme, die exakt zu Ihren Prozessen passen, Ihre Marke perfekt repräsentieren und langfristig skalierbar sind.",
  benefits: [
    {
      icon: "/assets/webdesign/icons/target.svg",
      title: "Strategiegetrieben",
      description:
        "Jeder Pixel hat eine Aufgabe. Wir analysieren Ihren Markt, schärfen Ihre Botschaft und konzipieren ein System, das aktiv Ihre Unternehmensziele unterstützt.",
    },
    {
      icon: "/assets/webdesign/icons/wand-2.svg",
      title: "Individuelles Premium-Design",
      description:
        "Keine gekauften Vorlagen oder lieblosen Standard-Templates. Wir entwickeln ein maßgeschneidertes Designsystem, das Ihre Identität fühlbar macht.",
    },
    {
      icon: "/assets/webdesign/icons/zap.svg",
      title: "Optimierte Performance",
      description:
        "Schnelle Ladezeiten, exzellente mobile Usability und saubere technische Optimierung garantieren beste Conversion-Rates und SEO-Rankings.",
    },
  ],
};

export const pricing = {
  eyebrow: "PREISGESTALTUNG",
  title: "Unsere Webdesign-Pakete im Überblick.",
  items: [
    {
      eyebrow: "CHECK",
      title: "890 €",
      heading: "Website- und Markencheck",
      description:
        "Bewertung von Webauftritt, Positionierung und Botschaft – mit konkreten Handlungsempfehlungen für Ihr Unternehmen.",
    },
    {
      eyebrow: "PAKET",
      title: "2.400 €",
      heading: "Eine Landingpage, die auf ein Ziel einzahlt",
      description:
        "Konversionsstarke Landingpage optimiert für Kampagnen, Launches oder ein konkretes Produktangebot inklusive Copywriting.",
    },
    {
      eyebrow: "PAKET",
      title: "5.900 €",
      heading: "Der einheitliche Markenauftritt",
      description:
        "Kernbotschaft, Tonalität, Farb- und Schriftsystem sowie 3 Kern-Seiten. Ideal für ein konsistentes digitales Fundament.",
    },
  ] satisfies PackageItem[],
};

export const flagship = {
  eyebrow: "FLAGSHIP-PAKET",
  // The full stop is set in the accent colour
  title: "Ihre neue Website - von Strategie bis Launch",
  lead: "Ein professioneller Webauftritt, der Ihre Marke klar positioniert, Ihre Ziele aktiv unterstützt und mit Ihren Kunden mitwächst.",
  checklist: [
    "Umfassende Strategie & Konzeption",
    "Vollkommen individuelles Design (Keine Vorlagen)",
    "Technische Umsetzung (z. B. Webflow, Shopify, WordPress)",
    "Integrierte SEO- und GEO-Optimierung",
    "Bis zu 8 Seiten, professionell betextet",
    "6 Wochen garantierte Projektlaufzeit",
  ],
  button: { label: "Jetzt anfragen", href: anchors.contact } satisfies Link,
  price: "6.900 €",
  priceNote: "Website Komplettpreis (zzgl. MwSt.)",
  image: "/assets/webdesign/laptop-mockup.jpg",
  slogan: "WEBSITES THAT MOVE BRANDS.",
};

export const solutions = [
  {
    title: "Individuelle Lösungen",
    lead: "Sie haben ganz eigene Anforderungen, die über unsere Standardpakete hinausgehen? Wir entwickeln maßgeschneiderte Systeme für Ihren exakten Workflow.",
    bullets: ["Schnittstellen- & API-Anbindungen", "Eigene Datenbanken & Filtersysteme", "E-Commerce & Shopsysteme"],
  },
  {
    title: "Post-Launch Betreuung",
    lead: "Nach dem Livegang lassen wir Sie nicht alleine. Mit unseren kontinuierlichen Service-Paketen bleibt Ihre Website sicher, schnell und up-to-date.",
    bullets: [
      "Hosting, Backups & Sicherheits-Updates",
      "Kontinuierliche Inhalts-Pflege",
      "Conversion-Optimierung & Tracking",
    ],
    offer: {
      button: { label: "Mehr erfahren", href: anchors.contact } satisfies Link,
      price: "890 €/Monat",
      note: "Service-Paket (zzgl. MwSt.)",
    },
  },
];

// The dark band right under the solutions
export const method: ProcessContent = {
  eyebrow: "UNSER PROZESS",
  title: "Klar. Strukturiert. Effizient.",
  steps: [
    { number: "01", title: "Analyse", description: "Ziele, Marke, Potenzial" },
    { number: "02", title: "Konzept", description: "Struktur, Inhalt" },
    { number: "03", title: "Design", description: "UI/UX, Prototyp" },
    { number: "04", title: "Entwicklung", description: "Technische Umsetzung" },
    { number: "05", title: "Launch", description: "Go-live & Betreuung" },
  ],
};

// The white five-column block after it
export const stages = {
  eyebrow: "PROZESS",
  title: "In 5 klaren Schritten zu Ihrem Premium-Webauftritt.",
  steps: [
    {
      number: "01",
      title: "Analyse & Strategie",
      description:
        "Wir durchleuchten Ihr Geschäftsmodell, analysieren Wettbewerber und definieren die strategische Ausrichtung Ihrer Website.",
    },
    {
      number: "02",
      title: "Konzeption & UX",
      description:
        "Aufbauend auf der Strategie entwickeln wir ein logisches Strukturkonzept und intuitive Nutzerführung (Wireframes).",
    },
    {
      number: "03",
      title: "Premium Design",
      description:
        "Wir erschaffen ein maßgeschneidertes, modernes Interface-Design, das Ihre Marke digital perfekt inszeniert.",
      // The third step's rule is pink in the frame, the others are grey
      accent: true,
    },
    {
      number: "04",
      title: "Entwicklung & SEO",
      description:
        "Saubere technische Umsetzung mit performantem Code, responsiver Optimierung und integrierten SEO-Schnittstellen.",
    },
    {
      number: "05",
      title: "Launch & Support",
      description:
        "Nach intensiven Tests geht Ihre Website live. Wir begleiten Sie beim Go-Live und sichern den Post-Launch-Erfolg.",
    },
  ] as { number: string; title: string; description: string; accent?: boolean }[],
};

export const cta: CtaContent = {
  eyebrow: "STARTEN WIR IHR PROJEKT",
  title: "Bereit für den nächsten digitalen Meilenstein?",
  lead: "Lassen Sie uns in einem unverbindlichen Erstgespräch über Ihre Anforderungen sprechen und das passende Konzept für Sie entwickeln.",
  button: { label: "Projekt anfragen", href: `mailto:${email}` },
  note: "100% unverbindlich · Antwort in 24h",
};

export const footer: FooterContent = {
  columns: [
    {
      title: "Leistungen",
      links: [
        { label: "Corporate Website", href: anchors.services },
        { label: "Landingpage", href: anchors.pricing },
        { label: "E-Commerce", href: "/ecommerce" },
        { label: "Design System", href: anchors.services },
        { label: "Conversion-Optimierung", href: anchors.services },
      ],
    },
    {
      title: "Unternehmen",
      links: [
        { label: "Showcase", href: "/#portfolio" }, // TODO: portfolio subpage
        { label: "Über uns", href: "/#ueber-uns" },
        { label: "Prozess", href: anchors.process },
        { label: "Karriere", href: "#" }, // TODO
        { label: "Kontakt", href: anchors.contact },
      ],
    },
    legalColumn,
  ],
  slogan: ["BUILD.", "GROW.", "MATTER."],
};
