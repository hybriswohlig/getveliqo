// Homepage copy and link targets, taken verbatim from the Figma frames.
// Links marked TODO point at pages or profiles that don't exist yet.

// Rooted at "/" so the header and footer links also work from subpages.
export const anchors = {
  services: "/#services",
  about: "/#ueber-uns",
  approach: "/#one-voice",
  contact: "/#kontakt",
} as const;

export const mainNav = [
  { label: "SERVICES", href: anchors.services },
  { label: "ÜBER UNS", href: anchors.about },
  { label: "PORTFOLIO", href: "/#portfolio" }, // TODO: portfolio subpage
  { label: "KONTAKT", href: anchors.contact },
];

export const hero = {
  title: ["BUILD", "PRESENCE"],
  lead: "VELYQO VERBINDET WEBDESIGN, SEO/GEO UND PR ZU EINER DIGITALEN PRÄSENZ, DIE MARKEN SICHTBAR MACHT UND WACHSTUM SCHAFFT.",
  cta: { label: "UNSERE SERVICES", href: anchors.services },
  stamp: "ONE VOICE 1.0",
};

export const communication = {
  headline: {
    top: "WIE SIE MIT UNS DEN DURCHBRUCH",
    before: "EINER",
    accent: "EFFEKTIVEN",
    bottom: "UNTERNEHMENSKOMMUNIKATION SCHAFFEN.",
  },
  paragraphs: [
    "Unternehmen stehen vor den Herausforderungen, Kosten zu sparen, gleichzeitig die Effizienz zu steigern und dabei möglichst bestehende Silos zwischen Marketing, Sales, PR & Recruiting aufzulösen.",
    "Wir halten für Sie drei Programme bereit, durch die Sie Ihre Unternehmenskommunikation effektiv neu ausrichten können. Im Fokus stehen Agilität, Kostenersparnis, Transparenz & Skalierbarkeit.",
    'Mithilfe unseres "One-Voice-Communications"-Ansatzes wandeln Sie Ihre Unternehmenskommunikation in ein agiles System und machen sich bereit für die Zukunft.',
  ],
  tag: "ONE VOICE 1.0",
};

export const intro = {
  headline: { top: "MARKETING BUILT", before: "FOR", after: "YOU." },
  indicators: ["FULL SERVICE AGENCY", "DIGITAL TRANSFORMATION"],
  lead: "Willkommen bei Velyqo. Sie suchen eine Agentur, die Marketing & Unternehmenskommunikation vollständig abdeckt, von der Leadgenerierung, Brand Neuaufstellung & Durchführung von Einzelprojekten bis zur digitalen Transformation? Genau dafür sind wir da. Full Service, aus einer Hand.",
  body: "Wir arbeiten zielorientiert, mit klaren Strukturen und einem Team, das Strategie und Umsetzung gleichermaßen beherrscht. Wenn Sie Ihr Wachstum beschleunigen wollen, sind wir Ihr Partner.",
  primary: { label: "Lösungen entdecken", href: anchors.services },
  secondary: { label: "Mehr über uns", href: anchors.approach },
  tag: "VELYQO COMMUNICATIONS 1.0",
};

export const services = {
  eyebrow: "EFFIZIENT. ZIELORIENTIERT. AGIL.",
  title: "UNSERE SERVICES.",
  note: "Von Beratung bis Agentur-Services, wir bieten alles aus einer Hand.",
  items: [
    {
      number: "01",
      title: "PR, SEO & GEO",
      image: "/assets/services/card-01-pr-seo-geo.jpg",
    },
    {
      number: "02",
      title: "Webdesign",
      image: "/assets/services/card-02-webdesign.jpg",
      description:
        "Wir entwickeln digitale Markenwelten, die auffallen, verbinden und konvertieren - von der Strategie bis zur responsiven Website.",
      link: { label: "mehr erfahren", href: anchors.contact }, // TODO: webdesign subpage
    },
    {
      number: "03",
      // Figma reads "ECommerce Make"; the hero labels the same service "E-Commerce".
      title: "E-Commerce",
      image: "/assets/services/card-03-ecommerce.jpg",
    },
  ],
};

export const office = {
  title: "Munich Office",
  company: "Velyqo LLC",
  street: "Nymphenburger Str. 54",
  city: "80335 München",
  email: "business@getvelyqo.com",
};

export const footerColumns = [
  {
    title: "Services",
    links: services.items.map((item) => ({ label: item.title, href: anchors.services })),
  },
  {
    title: "Links",
    links: [
      { label: "KONTAKT", href: `mailto:${office.email}` },
      { label: "DOWNLOADS", href: "#" }, // TODO
      { label: "KARRIERE", href: "#" }, // TODO
      { label: "PRESSE", href: "#" }, // TODO
      { label: "NEWSLETTER", href: "#" }, // TODO
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "IMPRESSUM", href: "/impressum" },
      { label: "DATENSCHUTZ", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
  },
];

// TODO: profile URLs
export const socials = [
  { label: "LinkedIn", icon: "/assets/icons/linkedin.svg", href: "#" },
  { label: "Facebook", icon: "/assets/icons/facebook.svg", href: "#" },
  { label: "Instagram", icon: "/assets/icons/instagram.svg", href: "#" },
  // Figma's SVG export of this icon drops the play triangle, so it's a 4x PNG
  // render on the lime button colour.
  { label: "YouTube", icon: "/assets/icons/youtube.png", href: "#" },
];

export const footer = {
  copyright: "© 2026 VELYQO LLC. Alle Rechte vorbehalten.",
  slogan: "BUILD. GROW. MATTER.",
};
