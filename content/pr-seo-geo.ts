// PR, SEO & GEO subpage copy, taken verbatim from the Figma frame
// "pr-seo-geo-subpage-separate" (108:4).
// Links marked TODO point at pages or targets that don't exist yet.

import { inquiryHref, legalColumn, withLink, withOfferLinks, type FooterContent } from "./subpage";

export const anchors = {
  top: "#sichtbarkeit",
  services: "#leistungen",
  pricing: "#modelle",
  process: "#prozess",
  contact: "#kontakt",
} as const;

export const nav = [
  { label: "Sichtbarkeit", href: anchors.top, current: true },
  { label: "PR & SEO & GEO", href: anchors.services },
  { label: "Modelle", href: anchors.pricing },
  { label: "Prozess", href: anchors.process },
];

export const headerCta = {
  label: "Sichtbarkeit anfragen",
  href: anchors.contact,
};

export const hero = {
  eyebrow: "DIE ZUKUNFT DER SICHTBARKEIT",
  title: ["MEDIEN, GOOGLE ", "UND KI-SYSTEME."],
  lead: "Unternehmen von heute benötigen Sichtbarkeit an allen Touchpoints der Entscheidungsfindung. Wir positionieren Ihre B2B-Marke zukunftssicher in klassischen Wirtschaftsmedien, führenden Suchmaschinen und den generativen Such-Antworten von AI-Engines wie ChatGPT und Perplexity.",
  primary: { label: "Sicherheits-Check anfordern", href: anchors.contact },
  secondary: { label: "Methode kennenlernen", href: anchors.process },
  slogan: "OMNIPRESENT BRAND AUTHORITY",
};

export const intro = {
  eyebrow: "INTEGRIERTE STRATEGIE",
  title: "Der dreidimensionale Trichter Ihrer Omnipräsenz.",
  lead: "Wer heute nur klassisches Suchmaschinenmarketing betreibt, riskiert, potenzielle Kunden an KI-Assistenten zu verlieren. Eine isolierte PR-Kampagne ohne strukturierte SEO-Nachbereitung verpufft. Wir verweben alle drei Kanäle zu einem System, das Ihre Sichtbarkeit nachhaltig aufbaut.",
  benefits: [
    {
      icon: "/assets/pr-seo-geo/icons/newspaper.svg",
      title: "1. Brand Authority (PR)",
      description:
        "Wirtschaftsmedien und Fachpresse schaffen das fundamentale Vertrauen und das nötige Quellensignal für generative Systeme. Wir platzieren Ihre Botschaft strategisch dort, wo Ihre Zielgruppe Meinungen bildet.",
    },
    {
      icon: "/assets/pr-seo-geo/icons/search.svg",
      title: "2. Capture Intent (SEO)",
      description:
        "Suchende Nutzer wollen konkrete Antworten auf drängende Fragestellungen. Durch präzise Intent-Optimierung und hochwertige, fachlich fundierte Inhalte bauen wir Ihre Sichtbarkeit in den relevantesten Google-Suchergebnissen Schritt für Schritt aus.",
    },
    {
      icon: "/assets/pr-seo-geo/icons/brain-circuit.svg",
      title: "3. Generative Visibility (GEO)",
      description:
        "LLMs (Large Language Models) aggregieren Antworten aus strukturierten Erwähnungen im Web. Wir optimieren Ihr digitales Profil, damit KIs wie ChatGPT Ihre Marke bei passenden Fragen besser finden und nennen können.",
    },
  ],
};

export const services = {
  eyebrow: "LEISTUNGSSPEKTRUM",
  title: "Ganzheitliche Lösungen für anspruchsvolle B2B-Marken.",
  items: withLink(
    [
      {
        eyebrow: "MEDIENARBEIT",
        title: "PR & Authority",
        heading: "Konzeptionelle Pressearbeit",
        description:
          "Ansprache von Wirtschaftsmedien und gezielter B2B-Fachpresse mit dem Ziel, vertrauenswürdige Referenzquellen für Mensch und Algorithmus aufzubauen.",
      },
      {
        eyebrow: "SUCHMASCHINEN",
        title: "SEO & Content",
        heading: "Intent-Driven Search",
        description:
          "Strukturierte Erfassung und Beantwortung kaufrelevanter Suchanfragen. Aufbau skalierbarer Info-Hubs und technische Optimierung für gute Core Web Vitals.",
      },
      {
        eyebrow: "GENERATIVE KI",
        title: "GEO & LLM-Prep",
        heading: "Generative Engine Opt.",
        description:
          "Strukturierung digitaler Entitäten und optimierter Zitate, mit dem Ziel, die Nennungshäufigkeit Ihrer Marke in KI-generierten Such-Ergebnissen zu erhöhen.",
      },
    ],
    anchors.pricing,
    "Zu den Kooperationsmodellen",
  ),
};

export const metrics = {
  eyebrow: "MESSBARKEIT",
  title: "Wir machen Sichtbarkeit messbar.",
  lead: "Wir arbeiten mit klaren Kennzahlen statt vagen Prognosen und bereiten sie in regelmäßigen Audits transparent auf.",
  checklist: [
    "Share of Voice (SoV) in führenden KI-Sprachmodellen",
    "Sichtbarkeits-Index für high-intent B2B-Suchanfragen",
    "Referenz-Zitate und Verlinkungen von News-Portalen",
    "Entwicklung der Direct-Search Conversions",
  ],
  stats: [
    {
      value: "3",
      label: "Kanäle. Ein System.",
      description: "Wirtschaftsmedien, Suchmaschinen und KI-Antworten, aufeinander abgestimmt.",
    },
    {
      value: "5",
      label: "Schritte im Fahrplan",
      description: "Vom Audit bis zur regelmäßigen LLM-Prüfung, transparent und nachvollziehbar.",
    },
  ],
  trend: {
    eyebrow: "AKTUELLER MARKTREND",
    text: "Immer mehr Fach-Entscheider beginnen die Suche nach neuen Software- und Service-Anbietern nicht mehr nur bei Google, sondern fragen direkt KI-Assistenten wie ChatGPT oder Perplexity.",
  },
};

export const method = {
  eyebrow: "UNSER METHODENPROZESS",
  title: "Fahrplan zur holistischen Omnipräsenz.",
  steps: [
    {
      number: "01",
      title: "1. Audit & Index",
      description: "Status-Quo-Analyse aller PR-, SEO- und KI-Referenzen.",
    },
    {
      number: "02",
      title: "2. Entity Tuning",
      description: "Aufbereitung der digitalen Profile Ihrer Unternehmensmarke.",
    },
    {
      number: "03",
      title: "3. PR Placement",
      description: "Platzierung qualifizierter Quellensignale in Wirtschaftsmedien.",
    },
    {
      number: "04",
      title: "4. Semantic SEO",
      description: "Erstellung exzellenter Fachinhalte für exakte Suchanfragen.",
    },
    {
      number: "05",
      title: "5. LLM Audit",
      description: "Regelmäßige Prüfung der Empfehlungshäufigkeit in KIs.",
    },
  ],
};

export const pricing = {
  eyebrow: "MODELLE DER KOOPERATION",
  title: "Strukturierte B2B-Sichtbarkeitspakete.",
  items: withOfferLinks("PR, SEO & GEO", [
    {
      eyebrow: "START",
      title: "3.800 €",
      unit: "/ mtl.",
      heading: "GEO & SEO Essentials",
      description:
        "Ideal für etablierte B2B-Spezialisten, die ihre generative KI-Sichtbarkeit sichern und wichtige Search-Begriffe besetzen wollen. Inklusive Entity-Tuning und SEO-Grundstruktur.",
    },
    {
      eyebrow: "FOKUS",
      title: "6.500 €",
      unit: "/ mtl.",
      heading: "Authority & Search System",
      description:
        "Verknüpft fortlaufendes GEO-Monitoring mit gezielten PR-Platzierungen in relevanten B2B-Fachmedien sowie ganzheitlichem Search Engine Content.",
    },
    {
      eyebrow: "ENTERPRISE",
      title: "Auf Anfrage",
      heading: "360° Omnipräsenz-Lösung",
      description:
        "Maßgeschneidertes High-End-Modell für Marktführer. Beinhaltet exklusive Medienkampagnen, internationale SEO-Strukturen und direkte entity-basierte Optimierung für globale LLMs.",
    },
  ]),
};

export const faq = {
  eyebrow: "HÄUFIGE FRAGEN",
  title: "Wissenswertes über PR, SEO & GEO.",
  lead: "Haben Sie Fragen zur neuen Disziplin der KI-Sichtbarkeit oder zum Zusammenspiel mit klassischer Pressearbeit? Hier finden Sie erste fundierte Antworten für Entscheider.",
  items: [
    {
      question: "Was ist Generative Engine Optimization (GEO)?",
      answer:
        "GEO bezeichnet die gezielte technische und inhaltliche Optimierung digitaler Inhalte, um die Wahrscheinlichkeit zu erhöhen, von KI-basierten Systemen (wie ChatGPT, Perplexity, Claude oder Google SGE) als verlässliche Referenzquelle herangezogen und in generierten Antworten namentlich empfohlen zu werden.",
    },
    {
      question: "Warum ist klassische PR ein wichtiger Rankingfaktor für KIs?",
      answer:
        "Generative KIs speisen ihr Weltwissen aus verlässlichen Quellen im Netz. Beiträge in etablierten Wirtschaftsmedien und Fachveröffentlichungen gelten als vertrauenswürdige Drittsignale. Ohne solche Signale wird GEO auf Dauer schwer.",
    },
    {
      question: "Wie lässt sich der Erfolg von GEO-Kampagnen überhaupt messen?",
      answer:
        "Wir simulieren mit vordefinierten Prompt-Zyklen für Ihre Kern-B2B-Keywords, wie KI-Systeme Ihre Marke nennen, und erheben daraus regelmäßig Ihren Share of Voice (SoV) im Vergleich zu Ihren Hauptwettbewerbern.",
    },
    {
      question: "Kooperiert VELYQO auch mit Inhouse-Marketingteams?",
      answer:
        "Ja. Wir fungieren entweder als spezialisierte Full-Service-Boutique oder arbeiten nahtlos mit Ihrem bestehenden PR- oder SEO-Inhouse-Team zusammen, um das GEO-Wissen und die technischen Entity-Optimierungen einzubringen.",
    },
  ],
};

export const cta = {
  eyebrow: "BEREIT FÜR DEN DIGITALEN VORSPRUNG?",
  title: "Sichern Sie sich Ihre KI-Sichtbarkeit von morgen.",
  lead: "Lassen Sie uns in einem unverbindlichen Fachgespräch analysieren, wo Ihre Marke im Index generativer KI-Systeme aktuell steht und wie wir Sie optimal positionieren.",
  button: {
    label: "Sichtbarkeits-Audit buchen",
    href: inquiryHref(
      "Anfrage PR, SEO & GEO: Sichtbarkeits-Audit",
      "ich möchte gerne ein unverbindliches Erstgespräch zum Thema PR, SEO & GEO (Sichtbarkeits-Audit) vereinbaren.",
    ),
  },
  note: "100% unverbindliches Erstgespräch",
};

export const footer: FooterContent = {
  columns: [
    {
      title: "Sichtbarkeit",
      links: [
        { label: "Corporate PR", href: anchors.services },
        { label: "Intent SEO", href: anchors.services },
        { label: "Generative GEO", href: anchors.services },
        { label: "Entity Optimierung", href: anchors.process },
        { label: "LLM-Empfehlungen", href: anchors.process },
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
  slogan: ["AUTHORITY.", "TRUST.", "DOMINANCE."],
};
