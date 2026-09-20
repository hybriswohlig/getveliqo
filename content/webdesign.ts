// Copy and link targets for /webdesign, taken verbatim from the Figma frame
// "VELYQO - Webdesign Subpage Exact" (77:307).
// Links marked TODO point at pages or profiles that don't exist yet.

export const anchors = {
  showcase: "#showcase",
  services: "#leistungen",
  packages: "#pakete",
  process: "#prozess",
  contact: "#kontakt",
} as const;

// The frame's footer reads "Leopoldstraße 184, 80804 München". That is a third
// address next to the two the file already held, so it was replaced with the
// one the homepage uses (user decision, 2026-09-20) — keep both in sync.
// TODO: the mail address is still Figma's; the homepage says
// business@getvelyqo.com. Every CTA on this page points at it.
export const office = {
  title: "München Office",
  lines: ["Nymphenburger Str. 54", "80335 München", "Deutschland"],
  email: "hello@velyqo.com",
};

// TODO: no contact form or /kontakt route exists yet.
const enquiry = `mailto:${office.email}`;

export const nav = {
  links: [
    { label: "Showcase", href: anchors.showcase, active: true },
    { label: "Leistungen", href: anchors.services, active: false },
    { label: "Pakete", href: anchors.packages, active: false },
    { label: "Prozess", href: anchors.process, active: false },
  ],
  cta: { label: "Projekt anfragen", href: anchors.contact },
};

export const hero = {
  eyebrow: "DIGITAL ATELIER",
  // Figma breaks after "DIGITALER"; at 520px "IHR DIGITALER" wraps to two lines.
  title: "IHR DIGITALER AUFTRITT.",
  lead: "Wir konzipieren und entwickeln erstklassige Webauftritte, die Ihre Markenidentität perfekt transportieren, Besucher fesseln und messbare Ergebnisse erzielen.",
  primary: { label: "Pakete ansehen", href: anchors.packages },
  secondary: { label: "Kostenloses Erstgespräch", href: enquiry },
  slogan: "WEBSITES THAT MOVE BRANDS",
  image: "/assets/webdesign/hero-mockup.jpg",
};

export const philosophy = {
  eyebrow: "PHILOSOPHIE",
  title: "Mehr als nur eine standardisierte Website.",
  lead: "Ein gelungener digitaler Auftritt verbindet strategische Markenberatung, erstklassiges UX-Design und modernste technische Umsetzung. Wir bauen maßgeschneiderte Systeme, die exakt zu Ihren Prozessen passen, Ihre Marke perfekt repräsentieren und langfristig skalierbar sind.",
  benefits: [
    {
      icon: "target",
      title: "Strategiegetrieben",
      body: "Jeder Pixel hat eine Aufgabe. Wir analysieren Ihren Markt, schärfen Ihre Botschaft und konzipieren ein System, das aktiv Ihre Unternehmensziele unterstützt.",
    },
    {
      icon: "wand",
      title: "Individuelles Premium-Design",
      body: "Keine gekauften Vorlagen oder lieblosen Standard-Templates. Wir entwickeln ein maßgeschneidertes Designsystem, das Ihre Identität fühlbar macht.",
    },
    {
      icon: "zap",
      title: "Optimierte Performance",
      body: "Schnelle Ladezeiten, exzellente mobile Usability und saubere technische Optimierung garantieren beste Conversion-Rates und SEO-Rankings.",
    },
  ] as const,
};

export const pricing = {
  eyebrow: "PREISGESTALTUNG",
  title: "Unsere Webdesign-Pakete im Überblick.",
  cards: [
    {
      kind: "CHECK",
      price: "890 €",
      title: "Website- und Markencheck",
      body: "Bewertung von Webauftritt, Positionierung und Botschaft – mit konkreten Handlungsempfehlungen für Ihr Unternehmen.",
      href: anchors.contact,
    },
    {
      kind: "PAKET",
      price: "2.400 €",
      title: "Eine Landingpage, die auf ein Ziel einzahlt",
      body: "Konversionsstarke Landingpage optimiert für Kampagnen, Launches oder ein konkretes Produktangebot inklusive Copywriting.",
      href: anchors.contact,
    },
    {
      kind: "PAKET",
      price: "5.900 €",
      title: "Der einheitliche Markenauftritt",
      body: "Kernbotschaft, Tonalität, Farb- und Schriftsystem sowie 3 Kern-Seiten. Ideal für ein konsistentes digitales Fundament.",
      href: anchors.contact,
    },
  ],
};

export const flagship = {
  eyebrow: "FLAGSHIP-PAKET",
  // The closing full stop is set in lime in Figma.
  title: "Ihre neue Website - von Strategie bis Launch",
  lead: "Ein professioneller Webauftritt, der Ihre Marke klar positioniert, Ihre Ziele aktiv unterstützt und mit Ihren Kunden mitwächst.",
  benefits: [
    "Umfassende Strategie & Konzeption",
    "Vollkommen individuelles Design (Keine Vorlagen)",
    "Technische Umsetzung (z. B. Webflow, Shopify, WordPress)",
    "Integrierte SEO- und GEO-Optimierung",
    "Bis zu 8 Seiten, professionell betextet",
    "6 Wochen garantierte Projektlaufzeit",
  ],
  cta: { label: "Jetzt anfragen", href: enquiry },
  price: "6.900 €",
  priceNote: "Website Komplettpreis (zzgl. MwSt.)",
  slogan: "WEBSITES THAT MOVE BRANDS.",
  image: "/assets/webdesign/flagship-mockup.jpg",
};

export const solutions = [
  {
    title: "Individuelle Lösungen",
    body: "Sie haben ganz eigene Anforderungen, die über unsere Standardpakete hinausgehen? Wir entwickeln maßgeschneiderte Systeme für Ihren exakten Workflow.",
    items: [
      "Schnittstellen- & API-Anbindungen",
      "Eigene Datenbanken & Filtersysteme",
      "E-Commerce & Shopsysteme",
    ],
  },
  {
    title: "Post-Launch Betreuung",
    body: "Nach dem Livegang lassen wir Sie nicht alleine. Mit unseren kontinuierlichen Service-Paketen bleibt Ihre Website sicher, schnell und up-to-date.",
    items: [
      "Hosting, Backups & Sicherheits-Updates",
      "Kontinuierliche Inhalts-Pflege",
      "Conversion-Optimierung & Tracking",
    ],
    cta: { label: "Mehr erfahren", href: enquiry },
    price: "890 €/Monat",
    priceNote: "Service-Paket (zzgl. MwSt.)",
  },
];

// The compact dark strip (86:98) — the same five steps as the section below it.
export const processStrip = {
  eyebrow: "UNSER PROZESS",
  title: "Klar. Strukturiert. Effizient.",
  steps: [
    { number: "01", title: "Analyse", body: "Ziele, Marke, Potenzial" },
    { number: "02", title: "Konzept", body: "Struktur, Inhalt" },
    { number: "03", title: "Design", body: "UI/UX, Prototyp" },
    { number: "04", title: "Entwicklung", body: "Technische Umsetzung" },
    { number: "05", title: "Launch", body: "Go-live & Betreuung" },
  ],
};

export const process = {
  eyebrow: "PROZESS",
  title: "In 5 klaren Schritten zu Ihrem Premium-Webauftritt.",
  // Figma marks step 03 with a rose accent line, the rest stay grey.
  steps: [
    {
      number: "01",
      title: "Analyse & Strategie",
      body: "Wir durchleuchten Ihr Geschäftsmodell, analysieren Wettbewerber und definieren die strategische Ausrichtung Ihrer Website.",
      accent: false,
    },
    {
      number: "02",
      title: "Konzeption & UX",
      body: "Aufbauend auf der Strategie entwickeln wir ein logisches Strukturkonzept und intuitive Nutzerführung (Wireframes).",
      accent: false,
    },
    {
      number: "03",
      title: "Premium Design",
      body: "Wir erschaffen ein maßgeschneidertes, modernes Interface-Design, das Ihre Marke digital perfekt inszeniert.",
      accent: true,
    },
    {
      number: "04",
      title: "Entwicklung & SEO",
      body: "Saubere technische Umsetzung mit performantem Code, responsiver Optimierung und integrierten SEO-Schnittstellen.",
      accent: false,
    },
    {
      number: "05",
      title: "Launch & Support",
      body: "Nach intensiven Tests geht Ihre Website live. Wir begleiten Sie beim Go-Live und sichern den Post-Launch-Erfolg.",
      accent: false,
    },
  ],
};

export const cta = {
  eyebrow: "STARTEN WIR IHR PROJEKT",
  title: "Bereit für den nächsten digitalen Meilenstein?",
  body: "Lassen Sie uns in einem unverbindlichen Erstgespräch über Ihre Anforderungen sprechen und das passende Konzept für Sie entwickeln.",
  button: { label: "Projekt anfragen", href: enquiry },
  note: "100% unverbindlich · Antwort in 24h",
  backdrop: "/assets/webdesign/cta-backdrop.jpg",
  preview: "/assets/webdesign/cta-preview.jpg",
};

export const footerColumns = [
  {
    title: "Leistungen",
    // TODO: one page per service; they all point at the package overview.
    links: [
      { label: "Corporate Website", href: anchors.packages },
      { label: "Landingpage", href: anchors.packages },
      { label: "E-Commerce", href: anchors.packages },
      { label: "Design System", href: anchors.packages },
      { label: "Conversion-Optimierung", href: anchors.packages },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Showcase", href: anchors.showcase },
      { label: "Über uns", href: "/#ueber-uns" },
      { label: "Prozess", href: anchors.process },
      { label: "Karriere", href: "#" }, // TODO
      { label: "Kontakt", href: anchors.contact },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Cookie-Einstellungen", href: "#" }, // TODO
      { label: "AGB", href: "/agb" },
    ],
  },
];

// TODO: profile URLs
export const socials = [
  { label: "Instagram", icon: "/assets/icons/social/instagram.svg", href: "#" },
  { label: "LinkedIn", icon: "/assets/icons/social/linkedin.svg", href: "#" },
  { label: "Twitter", icon: "/assets/icons/social/twitter.svg", href: "#" },
  { label: "Dribbble", icon: "/assets/icons/social/dribbble.svg", href: "#" },
];

export const footer = {
  copyright: "© 2026 VELYQO. Alle Rechte vorbehalten.",
  slogan: ["BUILD.", "GROW.", "MATTER."],
};
