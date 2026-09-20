// PR, SEO & GEO subpage copy, taken verbatim from the Figma frame
// "pr-seo-geo-subpage-separate" (108:4).
// Links marked TODO point at pages or targets that don't exist yet.

import { email, legalColumn, type FooterContent, type PackageItem } from "./subpage";

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

export const headerCta = { label: "Sichtbarkeit anfragen", href: anchors.contact };

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
  lead: "Wer heute nur klassisches Suchmaschinenmarketing betreibt, verliert bis zu 40% der potenziellen Kunden an KI-Modelle. Eine isolierte PR-Kampagne ohne strukturierte SEO-Nachbereitung verpufft. Wir verweben alle drei Kanäle zu einem unschlagbaren System für nachhaltige Marktführerschaft.",
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
        "Suchende Nutzer wollen konkrete Antworten auf drängende Fragestellungen. Durch präzise Intent-Optimierung und hochwertige, fachlich fundierte Inhalte dominieren wir die relevantesten Google-Suchergebnisse dauerhaft.",
    },
    {
      icon: "/assets/pr-seo-geo/icons/brain-circuit.svg",
      title: "3. Generative Visibility (GEO)",
      description:
        "LLMs (Large Language Models) aggregieren Antworten aus strukturierten Erwähnungen im Web. Wir optimieren Ihr digitales Profil, sodass KIs wie ChatGPT Ihre Marke bei direkten Fragen als Erstempfehlung nennen.",
    },
  ],
};

export const services = {
  eyebrow: "LEISTUNGSSPEKTRUM",
  title: "Ganzheitliche Lösungen für anspruchsvolle B2B-Marken.",
  items: [
    {
      eyebrow: "MEDIENARBEIT",
      title: "PR & Authority",
      heading: "Konzeptionelle Pressearbeit",
      description:
        "Platzierung in Leitmedien (Handelsblatt, FAZ, etc.) sowie gezielter B2B-Fachpresse zur Etablierung vertrauenswürdiger Referenzquellen für Mensch und Algorithmus.",
    },
    {
      eyebrow: "SUCHMASCHINEN",
      title: "SEO & Content",
      heading: "Intent-Driven Search",
      description:
        "Strukturierte Erfassung und Beantwortung kaufrelevanter Suchanfragen. Aufbau skalierbarer Info-Hubs und technische Optimierung auf exzellente Core Web Vitals.",
    },
    {
      eyebrow: "GENERATIVE KI",
      title: "GEO & LLM-Prep",
      heading: "Generative Engine Opt.",
      description:
        "Strukturierung digitaler Entitäten und optimierter Zitate, um nachweislich die Nennungshäufigkeit Ihrer Marke in KI-generierten Such-Ergebnissen zu maximieren.",
    },
  ] satisfies PackageItem[],
};

export const metrics = {
  eyebrow: "EVALUIERBARE ERGEBNISSE",
  title: "Wir messen Sichtbarkeit in echten, harten B2B-Metriken.",
  lead: "Keine schwammigen Prognosen oder unbestimmte Klicks. Unsere GEO- und SEO-Systeme speisen sich aus klaren Datenströmen, die wir in regelmäßigen Audits transparent aufbereiten.",
  checklist: [
    "Share of Voice (SoV) in den Top 4 KI-Sprachmodellen",
    "Sichtbarkeits-Index für high-intent B2B-Suchanfragen",
    "Referenz-Zitate und Verlinkungen von autoritativen News-Portalen",
    "Performance-Steigerung der Direct-Search Conversions",
  ],
  stats: [
    {
      value: ">32%",
      label: "GEO Brand Share",
      description: "Durchschnittlicher Anstieg der Erwähnungen in KI-Zusammenfassungen binnen 6 Monaten.",
    },
    {
      value: "Top 3",
      label: "Fachmedien-Platzierung",
      description: "Fokussierte Medienstrategie für Branchenportale und Leitmedien als Quellensignal.",
    },
  ],
  trend: {
    eyebrow: "AKTUELLER MARKTREND",
    text: "Laut jüngsten Erhebungen nutzen bereits über 45% der Fach-Entscheider im DACH-Raum direkt ChatGPT oder Perplexity zur ersten Sondierung neuer Software- und Service-Anbieter.",
  },
};

export const method = {
  eyebrow: "UNSER METHODENPROZESS",
  title: "Fahrplan zur holistischen Omnipräsenz.",
  steps: [
    { number: "01", title: "1. Audit & Index", description: "Status-Quo-Analyse aller PR-, SEO- und KI-Referenzen." },
    { number: "02", title: "2. Entity Tuning", description: "Aufbereitung der digitalen Profile Ihrer Unternehmensmarke." },
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
    { number: "05", title: "5. LLM Audit", description: "Regelmäßige Prüfung der Empfehlungshäufigkeit in KIs." },
  ],
};

export const pricing = {
  eyebrow: "MODELLE DER KOOPERATION",
  title: "Strukturierte B2B-Sichtbarkeitspakete.",
  items: [
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
        "Unser meistgefragtes Modell. Verknüpft fortlaufendes GEO-Monitoring mit gezielten PR-Platzierungen in relevanten B2B-Fachmedien sowie ganzheitlichem Search Engine Content.",
    },
    {
      eyebrow: "ENTERPRISE",
      title: "Auf Anfrage",
      heading: "360° Omnipräsenz-Lösung",
      description:
        "Maßgeschneidertes High-End-Modell für Marktführer. Beinhaltet exklusive Medienkampagnen, internationale SEO-Strukturen und direkte entity-basierte Optimierung für globale LLMs.",
    },
  ] satisfies PackageItem[],
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
        "Generative KIs speisen ihr Weltwissen aus verlässlichen Quellen im Netz. Ein Artikel im Handelsblatt oder eine Fachveröffentlichung wird von KI-Scrapern extrem hoch gewichtet. Ohne diese vertrauenswürdigen Drittsignale kann GEO langfristig nicht erfolgreich sein.",
    },
    {
      question: "Wie lässt sich der Erfolg von GEO-Kampagnen überhaupt messen?",
      answer:
        "Wir nutzen spezialisierte Crawling-Systeme und LLM-Scraper, die vordefinierte Prompt-Zyklen für Ihre Kern-B2B-Keywords simulieren. Daraus erheben wir wöchentlich Ihren exakten SoV (Share of Voice) im Vergleich zu Ihren Hauptwettbewerbern.",
    },
    {
      question: "Kooperiert VELYQO auch mit Inhouse-Marketingteams?",
      answer:
        "Ja, sehr häufig. Wir fungieren entweder als spezialisierte Full-Service-Boutique oder arbeiten nahtlos mit Ihrem bestehenden PR- oder SEO-Inhouse-Team zusammen, um das GEO-Wissen und die technischen Entity-Optimierungen einzubringen.",
    },
  ],
};

export const cta = {
  eyebrow: "BEREIT FÜR DEN DIGITALEN VORSPRUNG?",
  title: "Sichern Sie sich Ihre KI-Sichtbarkeit von morgen.",
  lead: "Lassen Sie uns in einem unverbindlichen Fachgespräch analysieren, wo Ihre Marke im Index generativer KI-Systeme aktuell steht und wie wir Sie optimal positionieren.",
  button: { label: "Sichtbarkeits-Audit buchen", href: `mailto:${email}` },
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
        { label: "Showcase", href: "/#portfolio" }, // TODO: portfolio subpage
        { label: "Karriere", href: "#" }, // TODO
        { label: "Kontakt", href: anchors.contact },
      ],
    },
    legalColumn,
  ],
  slogan: ["AUTHORITY.", "TRUST.", "DOMINANCE."],
};
