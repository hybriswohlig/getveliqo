// E-Commerce subpage copy, taken verbatim from the Figma frame
// "ecommerce-service-subpage" (119:4).
// Links marked TODO point at pages or targets that don't exist yet.

import {
  inquiryHref,
  legalColumn,
  withLink,
  withOfferLinks,
  type CtaContent,
  type FaqContent,
  type FooterContent,
  type HeroCopy,
  type IntroContent,
  type Link,
  type MetricsContent,
  type ProcessContent,
} from "./subpage";

export const anchors = {
  top: "#ecommerce",
  services: "#leistungen",
  metrics: "#performance",
  process: "#fahrplan",
  pricing: "#pakete",
  contact: "#kontakt",
} as const;

export const nav = [
  { label: "E-Commerce", href: anchors.top, current: true },
  { label: "Shop-Systeme", href: anchors.services },
  { label: "Performance", href: anchors.metrics },
  { label: "Fahrplan", href: anchors.process },
];

export const headerCta: Link = {
  label: "Shop-Audit anfragen",
  href: anchors.contact,
};

export const hero: HeroCopy = {
  eyebrow: "ALLES AUS EINER HAND",
  title: ["SETUP. DESIGNS. ", "SCALING. MATTER."],
  lead: "Ein erfolgreicher Onlineshop ist kein Zufall, sondern das Zusammenspiel aus perfekter UX, nahtlosen Prozessen und präzisem Performance-Marketing. Wir konzipieren, bauen und skalieren Ihre digitale Verkaufsplattform – ob Shopify, maßgeschneiderte Headless-Systeme oder Amazon FBA Integration.",
  primary: { label: "E-Commerce-Check buchen", href: anchors.contact },
  secondary: { label: "Fahrplan ansehen", href: anchors.process },
  slogan: "ULTIMATE CONVERSION ARCHITECTURE",
};

export const intro: IntroContent = {
  eyebrow: "INTEGRIERTES ÖKOSYSTEM",
  title: "Das Fundament für nachhaltigen Digital-Handel.",
  lead: "Halbherzige Shop-Setups scheitern an komplexen Schnittstellen, schlechtem Tracking oder mangelhafter User Experience. Wir glauben an einen ganzheitlichen Trichter: Von der passenden Plattformwahl und psychologischem Design über optimierten Content bis hin zur messerscharf ausgesteuerten Kampagne.",
  benefits: [
    {
      icon: "/assets/ecommerce/icons/strategy.svg",
      title: "1. Strategie & UX-Design",
      description:
        "Jeder Klick zählt. Wir entwerfen mobile-first Storefronts mit psychologischer Nutzerführung und optimalen Informationsarchitekturen, die Besucher überzeugen.",
    },
    {
      icon: "/assets/ecommerce/icons/launch.svg",
      title: "2. Tech-Setup & Checkout",
      description:
        "Frictionless Commerce. Wir integrieren robuste Bezahlmethoden, Versanddienstleister und ERP-Systeme, um einen möglichst fehlerfreien und automatisierten Workflow aufzubauen.",
    },
    {
      icon: "/assets/ecommerce/icons/scaling.svg",
      title: "3. Paid Media & CRO",
      description:
        "Gezielte Skalierung. Mit Omnichannel Performance-Marketing (Meta, Google, TikTok) und datengetriebenem A/B-Testing arbeiten wir gezielt daran, Ihren Customer Lifetime Value nachhaltig zu steigern.",
    },
  ],
};

export const services = {
  eyebrow: "UNSER LEISTUNGSSPEKTRUM",
  title: "Ganzheitliche E-Commerce-Moderne.",
  items: withLink(
    [
      {
        eyebrow: "STORE-FRONT & CODE",
        title: "Shopdesign & Build",
        heading: "Plattformunabhängige Builds",
        description:
          "Wir konzipieren und entwickeln performante Storefronts auf Shopify, WooCommerce oder maßgeschneiderten Headless Frameworks. Perfekt auf Ihre Markenidentität angepasst.",
      },
      {
        eyebrow: "OPERATIONS & FLOW",
        title: "Checkout & Logistik",
        heading: "Frictionless Fulfillment",
        description:
          "Integration von globalen Bezahlungs-Gateways (Stripe, Klarna) und vollautomatisierte Anbindung an 3PL Logistik-Partner zur fehlerfreien Bestellabwicklung.",
      },
      {
        eyebrow: "TRAFFIC & ROAS",
        title: "Ads & Skalierung",
        heading: "Data-Driven Growth",
        description:
          "Ausspielung hocheffizienter Performance-Marketing-Kampagnen zur Neukundengewinnung, gekoppelt mit kontinuierlichem Conversion-Optimierungs-Testing (CRO).",
      },
    ],
    anchors.pricing,
    "Zu den Kooperationsmodellen",
  ),
};

export const metrics: MetricsContent = {
  eyebrow: "MESSBARKEIT",
  title: "Shop-Metriken, die das Unternehmenswachstum treiben.",
  lead: "Wir versprechen keine oberflächlichen kosmetischen Anpassungen. Unsere Optimierung setzt an messbaren Hebeln wie Conversion-Rate, Abbruchrate im Warenkorb und Kundenwert an.",
  checklist: [
    "Fokus auf den durchschnittlichen Bestellwert (AOV)",
    "Server-Side Tracking für saubere Attribution",
    "Automatisierte Bestands- und Logistik-Synchronisierung",
    "Schnelle Ladezeiten und gute Core Web Vitals",
  ],
  stats: [
    {
      value: "3",
      label: "Werbekanäle",
      description: "Meta, Google und TikTok: Performance-Marketing aus einer Hand.",
    },
    {
      value: "5",
      label: "Phasen zum Shop",
      description: "Vom System-Audit bis zum laufenden Scaling, transparent geplant.",
    },
  ],
  trend: {
    eyebrow: "AKTUELLER E-COMMERCE TREND",
    text: "Ein Großteil des Traffics im Konsumentenbereich kommt inzwischen von Mobilgeräten. Ein nicht konsequent mobil-optimierter Checkout verschenkt daher einen erheblichen Teil seiner potenziellen Umsätze.",
  },
};

export const method: ProcessContent = {
  eyebrow: "UNSER ROADMAP-PROZESS",
  title: "In 5 Phasen zum omnipräsenten Onlineshop.",
  steps: [
    {
      number: "01",
      title: "1. System-Audit",
      description: "Strategische Plattformwahl, ERP-Check und Bedarfsplanung.",
    },
    {
      number: "02",
      title: "2. Design & UX",
      description: "Ausarbeitung moderner, psychologisch optimierter Screen-Entwürfe.",
    },
    {
      number: "03",
      title: "3. Shop-Entwicklung",
      description: "Performanter Build des Backends & Integration aller Schnittstellen.",
    },
    {
      number: "04",
      title: "4. Go-Live & Tracking",
      description: "Systemischer Launch inklusive Server-Side-Tracking und Gateways.",
    },
    {
      number: "05",
      title: "5. Scaling & Ads",
      description: "Fortlaufendes CRO-Testing und Omnichannel Ad-Skalierung.",
    },
  ],
};

export const retention = {
  eyebrow: "NACHHALTIGE VERKAUFSDYNAMIK",
  title: "Vom einmaligen Setup zur laufenden Verkaufssteigerung.",
  cards: withOfferLinks("E-Commerce", [
    {
      eyebrow: "EINMALIG",
      // Figma has the entity "&amp;" typed literally here; it is a plain ampersand
      title: "Setup & Launch",
      unit: "Einmalig",
      heading: "Technische Grundlage",
      description:
        "Wir bauen Ihr E-Commerce-System auf, verbinden Zahlungs- und Versanddienstleister, implementieren sauberes Tracking und liefern einen stabilen Storefront für den Marktstart.",
    },
    {
      eyebrow: "LAUFEND",
      title: "Verkaufssteigerung",
      unit: "Monatlich",
      heading: "Fokus auf Conversion & Growth",
      description:
        "Nach dem Launch übernehmen wir die laufende Betreuung: kontinuierliche Optimierung der Produktseiten, gezielte Werbekampagnen, Conversion-Testing und Performance-Monitoring, um Ihre Verkäufe nachhaltig zu steigern.",
    },
  ]),
  features: [
    {
      eyebrow: "PRODUKTSEITEN",
      title: "Mehr Umsatz pro Produkt",
      description:
        "Wir optimieren Produktbilder, Inhalte und CTA-Platzierungen, damit Besucher schneller zum Kauf anregt werden.",
    },
    {
      eyebrow: "WERBUNG",
      title: "Effiziente Kampagnen",
      description:
        "Wir betreiben Meta-, Google- und TikTok-Kampagnen, um neue Kunden zu gewinnen und Bestandskunden wiederzubinden.",
    },
    {
      eyebrow: "OPTIMIERUNG",
      title: "Kontinuierliches Testing",
      description:
        "Wir testen Varianten, analysieren Kaufverhaltensdaten und passen Checkout, Inhalte und Kampagnen kontinuierlich an.",
    },
  ],
};

export const pricing = {
  eyebrow: "KOOPERATIONSMODELLE",
  title: "Skalierbare E-Commerce-Pakete.",
  items: withOfferLinks("E-Commerce", [
    {
      eyebrow: "LAUNCH",
      title: "ab 4.500 €",
      unit: "Einmalig",
      heading: "Shopify / Plattform Setup",
      description:
        "Ideal für ambitionierte Marken vor dem Marktstart. Kompletter Storefront-Aufbau auf Shopify, Anbindung der Gateways, Produktstruktur und sauberes Tracking-Grundgerüst.",
    },
    {
      eyebrow: "SCALING",
      title: "4.800 €",
      unit: "/ mtl.",
      heading: "Omnichannel Growth-System",
      description:
        "Fortlaufende Optimierung für wachsende Marken. Beinhaltet kontinuierliche A/B-Tests, Usability-Audits sowie Performance-Marketing-Management über Google- & Meta-Ads.",
    },
    {
      eyebrow: "ENTERPRISE",
      title: "Auf Anfrage",
      heading: "Headless & Custom ERP",
      description:
        "Maßgeschneiderte High-End-Architektur. Komplexe Anbindungen an Warenwirtschaftssysteme (SAPs/Dynamics), multi-nationale Shop-Setups und eigene Headless-Storefronts für maximale Ladezeiten.",
    },
  ]),
};

export const faq: FaqContent = {
  eyebrow: "HÄUFIGE FRAGEN",
  title: "Wissenswertes über E-Commerce.",
  lead: "Haben Sie Fragen zur idealen Wahl des Shopsystems, zur Implementierung von Zahlungsschnittstellen oder zur Performance-Skalierung? Hier finden Sie fundierte Antworten für E-Commerce-Entscheider.",
  items: [
    {
      question: "Warum empfehlen Sie Shopify für den Start und die Skalierung?",
      answer:
        "Shopify bietet eine sehr stabile Cloud-Infrastruktur mit starker Checkout-Performance. Die native Integration führender Zahlungs-Gateways, automatische Updates sowie die einfache Pflege für Ihr Inhouse-Team machen es im B2C- und D2C-Bereich zu einer bewährten Wahl für den Start und das Wachstum.",
    },
    {
      question: "Bieten Sie auch komplett maßgeschneiderte Headless-Systeme an?",
      answer:
        "Ja, absolut. Für sehr große Sortimente oder extreme Design-Ansprüche entwickeln wir Headless-Architekturen. Hierbei trennen wir die visuelle Storefront (z. B. auf Next.js) komplett von dem dahinterliegenden E-Commerce-Kern, um sehr gute Ladezeiten und große Gestaltungsfreiheit zu erreichen.",
    },
    {
      question: "Wie stellen Sie sicher, dass unser Marketing-Tracking korrekt ist?",
      answer:
        "Wir implementieren standardmäßig ein Server-Side Tracking. Die Kauf- und Verhaltensdaten werden hierbei nicht im Webbrowser des Kunden (wo sie durch Ad-Blocker manipuliert werden), sondern direkt von unserem sicheren Cloud-Server an Werbe-Netzwerke wie Meta oder Google übertragen. Das sorgt für eine fehlerfreie Attribution.",
    },
    {
      question: "Arbeiten Sie mit unseren internen Lager- und Logistik-Teams zusammen?",
      answer:
        "Ja. Als ganzheitliche Agentur verknüpfen wir die Bestands- und Logistikprozesse direkt mit den Onlineshops. Ob es die Übergabe an ein eigenes ERP oder die Einbindung spezialisierter 3PL-Fulfillment-Dienstleister ist – wir integrieren die Schnittstellen komplett schlüsselfertig.",
    },
  ],
};

export const cta: CtaContent = {
  eyebrow: "BEREIT FÜR DEN DIGITALEN DURCHBRUCH?",
  title: "Bauen Sie die E-Commerce-Plattform Ihrer Zukunft.",
  lead: "Lassen Sie uns in einem unverbindlichen Fachgespräch analysieren, wo die conversion-stärksten Hebel in Ihrem aktuellen Onlineshop-Modell liegen und wie wir diese freisetzen.",
  button: {
    label: "Shop-Audit anfragen",
    href: inquiryHref(
      "Anfrage E-Commerce: Shop-Audit",
      "ich möchte gerne ein unverbindliches Erstgespräch zu meinem Onlineshop (Shop-Audit) vereinbaren.",
    ),
  },
  note: "100% unverbindliches Erstgespräch",
};

// The frame's first footer column is the PR/SEO/GEO one, unchanged
export const footer: FooterContent = {
  columns: [
    {
      title: "Sichtbarkeit",
      links: [
        { label: "Corporate PR", href: "/pr-seo-geo" },
        { label: "Intent SEO", href: "/pr-seo-geo" },
        { label: "Generative GEO", href: "/pr-seo-geo" },
        { label: "Entity Optimierung", href: "/pr-seo-geo" },
        { label: "LLM-Empfehlungen", href: "/pr-seo-geo" },
      ],
    },
    {
      title: "Unternehmen",
      links: [
        { label: "Über uns", href: "/#ueber-uns" },
        { label: "Prozess", href: anchors.process },
        { label: "Kontakt", href: anchors.contact },
      ],
    },
    legalColumn,
  ],
  slogan: ["STRATEGY.", "CONVERSION.", "GROWTH."],
};
