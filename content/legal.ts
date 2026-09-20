// Legal page copy, taken verbatim from the Figma frames "VELYQO Impressum - DE
// Desktop" and "VELYQO AGB — DE Desktop". A body entry is a paragraph, or an
// array of lines that stay together as one block (addresses).

export type LegalSection = {
  number: string;
  title: string;
  body: (string | string[])[];
};

export type LegalDocument = {
  slug: string;
  title: string[];
  lead?: string;
  metaDescription: string;
  sections: LegalSection[];
};

export const impressum: LegalDocument = {
  slug: "impressum",
  title: ["Impressum"],
  metaDescription: "Impressum und Anbieterkennzeichnung der VELYQO LLC.",
  sections: [
    {
      number: "01",
      title: "VELYQO LLC",
      body: [
        [
          "Limited Liability Company nach dem Recht des US-Bundesstaates Wyoming",
          "Registrierter Sitz",
          "30 N Gould St, Ste N",
          "Sheridan, WY 82801",
          "Vereinigte Staaten von Amerika",
          "Vertretungsberechtigt",
          "Karl Dämmer",
          "Kontakt",
          "E-Mail: business@getvelyqo.com",
          "Unternehmensregistrierung",
          "State of Wyoming, Vereinigte Staaten von Amerika",
          "Filing ID: 2026-002070176",
          "Website",
          "getvelyqo.com",
        ],
      ],
    },
    {
      number: "02",
      title: "Haftung für Inhalte",
      body: [
        "Die Inhalte dieser Website wurden mit angemessener Sorgfalt erstellt. VELYQO LLC übernimmt jedoch keine Gewähr für die Vollständigkeit, Richtigkeit oder Aktualität der bereitgestellten Informationen.",
      ],
    },
    {
      number: "03",
      title: "Haftung für externe Links",
      body: [
        "Diese Website kann Links zu Websites Dritter enthalten. Auf deren Inhalte und Betrieb hat VELYQO LLC keinen Einfluss. Für die Inhalte verlinkter Seiten ist der jeweilige Anbieter oder Betreiber verantwortlich.",
      ],
    },
    {
      number: "04",
      title: "Urheberrecht",
      body: [
        [
          "Die von VELYQO LLC erstellten Inhalte, Gestaltungen und sonstigen Materialien dieser Website unterliegen, soweit anwendbar, dem Schutz des geltenden Rechts des geistigen Eigentums.",
          "Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung über die gesetzlich zulässige Nutzung hinaus bedarf der vorherigen Zustimmung von VELYQO LLC.",
          "Stand: September 2026",
        ],
      ],
    },
  ],
};

export const agb: LegalDocument = {
  slug: "agb",
  title: ["Allgemeine", "Geschäftsbedingungen"],
  lead: "VELYQO LLC | B2B | Effective / Stand: September 2026",
  metaDescription: "Allgemeine Geschäftsbedingungen (B2B) der VELYQO LLC.",
  sections: [
    {
      number: "01",
      title: "Geltungsbereich",
      body: [
        "Diese Allgemeinen Geschäftsbedingungen (\"AGB\") gelten für sämtliche Angebote, Leistungsbeschreibungen, Aufträge und Verträge zwischen VELYQO LLC (\"VELYQO\", \"wir\", \"uns\") und ihren Geschäftskunden (\"Kunde\"), soweit nicht schriftlich etwas Abweichendes vereinbart wurde.",
        "VELYQO erbringt seine Leistungen ausschließlich gegenüber Unternehmen, Unternehmern, juristischen Personen und sonstigen Personen oder Organisationen, die zu gewerblichen oder beruflichen Zwecken handeln. Verträge mit Verbrauchern werden auf Grundlage dieser AGB nicht geschlossen.",
        "Entgegenstehende oder abweichende Geschäftsbedingungen des Kunden gelten nur, wenn VELYQO ihrer Geltung ausdrücklich schriftlich zugestimmt hat.",
        "Der konkrete Leistungsumfang, die Vergütung, der Projektzeitraum sowie etwaige projektspezifische Bedingungen ergeben sich aus dem jeweiligen Angebot, Statement of Work (\"SOW\") oder einer anderen schriftlichen Vereinbarung.",
        "Bei Widersprüchen zwischen diesen AGB und einem individuell vereinbarten Angebot oder SOW gehen die individuell vereinbarten Regelungen vor.",
      ],
    },
    {
      number: "02",
      title: "Vertragsschluss",
      body: [
        "Angebote von VELYQO sind unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden.",
        "Der Kunde kann ein Angebot durch Unterzeichnung oder anderweitige Annahme in Schrift- oder Textform annehmen.",
        "Nach Annahme des Angebots durch den Kunden bestätigt VELYQO den Auftrag und stellt die vereinbarte Erst- bzw. Vorauszahlung in Rechnung. Der Vertrag wird erst mit vollständigem Eingang der vereinbarten Erst- bzw. Vorauszahlung bei VELYQO wirksam. Vor Zahlungseingang besteht keine Verpflichtung von VELYQO, Leistungen zu erbringen oder Kapazitäten verbindlich zu reservieren.",
        "Sofern nicht ausdrücklich ein späteres Datum vereinbart wurde, beginnt der vereinbarte Leistungs- und Vertragszeitraum mit Eingang der vollständigen Erst- bzw. Vorauszahlung. Eine verspätete Zahlung kann zu einer entsprechenden Verschiebung vereinbarter Projekttermine und Leistungszeiträume führen.",
        "Mündliche Vereinbarungen, Änderungen oder Zusicherungen sind nur verbindlich, wenn sie von VELYQO schriftlich oder in Textform bestätigt werden.",
      ],
    },
    {
      number: "03",
      title: "Leistungen",
      body: [
        "VELYQO erbringt Dienstleistungen in den Bereichen digitales Marketing, Kommunikation, Technologie und Beratung. Die Leistungen können insbesondere umfassen:",
        "• E-Commerce-Beratung, -Strategie, -Design und -Umsetzung;",
        "• Webdesign und Webentwicklung;",
        "• Suchmaschinenoptimierung (\"SEO\");",
        "• Generative Engine Optimization (\"GEO\") und verwandte Optimierungsmaßnahmen für KI-gestützte Such- und Informationssysteme;",
        "• Public Relations und Kommunikation;",
        "• Content-Erstellung und User Generated Content (\"UGC\");",
        "• Werbe- und Kampagnenstrategie;",
        "• Performance- und Digital-Marketing;",
        "• Analytics, Tracking und Reporting;",
        "• strategische Beratung sowie damit zusammenhängende digitale Dienstleistungen.",
        "In der vereinbarten Vergütung sind ausschließlich die im jeweiligen Angebot oder SOW ausdrücklich aufgeführten Leistungen enthalten.",
        "Soweit nicht anders vereinbart, liegt die Wahl der zur Leistungserbringung eingesetzten Methoden, Prozesse, Technologien und Werkzeuge im angemessenen Ermessen von VELYQO.",
        "VELYQO ist berechtigt, Mitarbeiter, selbstständige Auftragnehmer, Freelancer, Subunternehmer und externe Dienstleister zur Erbringung der Leistungen einzusetzen.",
      ],
    },
    {
      number: "04",
      title: "Keine Erfolgsgarantie",
      body: [
        "Soweit im jeweiligen SOW nicht ausdrücklich ein bestimmtes Ergebnis garantiert wird, schuldet VELYQO die Erbringung der vereinbarten Leistungen, nicht jedoch einen bestimmten wirtschaftlichen, technischen, marketingbezogenen oder medialen Erfolg.",
        "VELYQO garantiert insbesondere keine bestimmten Suchmaschinen-Rankings oder Indexierung, bestimmte Sichtbarkeit in Suchergebnissen, Erwähnungen, Zitate, Empfehlungen oder Rankings in KI- oder generativen Suchsystemen, bestimmte Website-Besucherzahlen, Leads oder Anfragen, Conversion Rates, Umsätze oder Gewinne, ROI oder ROAS, Presseveröffentlichungen oder Medienberichterstattung, bestimmte Reichweite oder Engagement, bestimmte Werbekosten oder sonstige konkrete Performance-Kennzahlen.",
        "Ergebnisse können von Umständen abhängen, die außerhalb des Einflussbereichs von VELYQO liegen, insbesondere von Wettbewerb, Marktbedingungen, Entscheidungen des Kunden, Nutzerverhalten sowie Änderungen von Drittplattformen.",
      ],
    },
    {
      number: "05",
      title: "Drittplattformen und externe Dienste",
      body: [
        "Die Leistungen von VELYQO können von Drittplattformen und externen Diensten abhängen, insbesondere von Suchmaschinen, sozialen Netzwerken, E-Commerce-Plattformen, Hosting-Anbietern, Werbeplattformen, KI-Systemen, Analyseanbietern und Content-Management-Systemen.",
        "VELYQO hat keinen Einfluss auf Änderungen von Algorithmen, Ranking-Systemen, APIs, Funktionen, Preisen, Richtlinien oder Nutzungsbedingungen solcher Drittanbieter.",
        "Soweit gesetzlich zulässig, haftet VELYQO nicht für Ausfälle, Einschränkungen, Account-Sperrungen, Algorithmusänderungen, Plattformentscheidungen oder sonstige Handlungen Dritter, sofern diese nicht unmittelbar durch eine Pflichtverletzung von VELYQO verursacht wurden.",
        "Zu relevanten Drittanbietern können beispielsweise Google, Microsoft, Meta, Shopify, OpenAI, Anthropic, Perplexity und vergleichbare Plattformen gehören. Die konkret eingesetzten Anbieter können sich im Laufe der Zeit ändern.",
      ],
    },
    {
      number: "06",
      title: "Mitwirkungspflichten des Kunden",
      body: [
        "Der Kunde stellt sämtliche Informationen, Materialien, Zugangsdaten, Freigaben und Entscheidungen rechtzeitig zur Verfügung, die VELYQO vernünftigerweise zur Erbringung der vereinbarten Leistungen benötigt.",
        "Hierzu können insbesondere Zugänge zu Websites, CMS-Systemen, Hosting, Domains, Analytics-Systemen, Suchmaschinen-Tools, E-Commerce-Systemen, Werbekonten und Social-Media-Accounts sowie Brand Assets, Produktinformationen, Texte, Bilder und Videos gehören.",
        "Verzögert der Kunde die erforderliche Mitwirkung, verlängern sich vereinbarte Fristen um einen angemessenen Zeitraum, der die entstandene Verzögerung und gegebenenfalls erforderliche Neuplanung berücksichtigt.",
        "VELYQO haftet nicht für Verzögerungen oder nachteilige Folgen, die dadurch entstehen, dass der Kunde erforderliche Mitwirkung nicht rechtzeitig, vollständig oder korrekt erbringt.",
      ],
    },
    {
      number: "07",
      title: "Kundenmaterialien und rechtliche Verantwortung",
      body: [
        "Der Kunde versichert, dass er über sämtliche erforderlichen Rechte an den Materialien verfügt, die er VELYQO zur Verfügung stellt, und räumt VELYQO die zur Durchführung des Vertrags vernünftigerweise erforderlichen Nutzungs-, Vervielfältigungs-, Bearbeitungs- und Verarbeitungsrechte ein.",
        "Soweit nicht ausdrücklich anders vereinbart, bleibt der Kunde für die Rechtmäßigkeit und Richtigkeit seiner Produkte, Dienstleistungen, Angebote, Preise, Produktinformationen, Geschäftspraktiken und der von ihm bereitgestellten Inhalte verantwortlich.",
        "VELYQO erbringt keine Rechts-, Steuer- oder sonstige regulierte professionelle Beratung. Eine rechtliche Prüfung von Websites, Online-Shops, Kampagnen, Marken, Werbeaussagen, Datenschutzhinweisen oder sonstigen Arbeitsergebnissen ist nicht enthalten, sofern dies nicht ausdrücklich vereinbart wurde.",
      ],
    },
    {
      number: "08",
      title: "Feedback und Korrekturschleifen",
      body: [
        "Soweit im jeweiligen Angebot oder SOW nichts anderes festgelegt ist, sind bis zu zwei angemessene Korrekturschleifen je abgrenzbarem finalen Arbeitsergebnis enthalten.",
        "Eine Korrekturschleife umfasst Änderungen innerhalb des ursprünglichen Briefings, Konzepts und vereinbarten Leistungsumfangs. Wesentliche Änderungen des Briefings, neue Konzepte, zusätzliche Funktionen oder sonstige Erweiterungen des Leistungsumfangs können als zusätzliche Leistungen behandelt werden.",
        "Der Kunde prüft Arbeitsergebnisse innerhalb eines angemessenen Zeitraums und übermittelt sein Feedback möglichst gebündelt.",
      ],
    },
    {
      number: "09",
      title: "Änderungen und Zusatzleistungen",
      body: [
        "Leistungen außerhalb des vereinbarten Leistungsumfangs sind nicht in der vereinbarten Vergütung enthalten. VELYQO wird grundsätzlich die Zustimmung des Kunden einholen, bevor wesentliche zusätzliche Arbeiten durchgeführt werden.",
        "Umfang, Vergütung und etwaige Auswirkungen auf vereinbarte Fristen können für solche zusätzlichen Leistungen gesondert vereinbart werden.",
      ],
    },
    {
      number: "10",
      title: "Vergütung und Zahlungsbedingungen",
      body: [
        "Die Vergütung ergibt sich aus dem jeweiligen Angebot oder SOW.",
        "Soweit im jeweiligen Angebot nichts anderes ausdrücklich vereinbart wurde, sind sämtliche Rechnungen unmittelbar nach Erhalt und ohne Abzug zur Zahlung fällig. Ein darüber hinausgehendes Zahlungsziel gilt nur, wenn dieses ausdrücklich im jeweiligen Angebot oder auf der Rechnung angegeben ist.",
        "Laufende monatliche Leistungen werden im Voraus für den jeweiligen Leistungszeitraum abgerechnet. Die Zahlung muss vor Beginn des jeweiligen Leistungszeitraums bei VELYQO eingegangen sein.",
        "Soweit im Angebot nichts anderes bestimmt ist, werden einmalige Projekte zu 50 % unmittelbar nach Auftragsbestätigung und vor Beginn der Arbeiten sowie zu 50 % bei Fertigstellung der vereinbarten Leistungen und vor Übergabe bzw. Übertragung der finalen Arbeitsergebnisse und Nutzungsrechte abgerechnet.",
        "VELYQO beginnt mit der Leistungserbringung erst nach vollständigem Eingang der jeweils erforderlichen Erst- bzw. Vorauszahlung. Soweit nicht anders vereinbart, beginnen vereinbarte Projektzeitpläne und Fristen ebenfalls erst mit diesem Zahlungseingang.",
        "Bei laufenden Leistungen ist VELYQO nicht verpflichtet, Leistungen für einen neuen Leistungszeitraum zu erbringen, bevor die hierfür geschuldete Vorauszahlung vollständig eingegangen ist.",
        "Ist ein fälliger Betrag nicht vollständig bezahlt, kann VELYQO die Leistungserbringung bis zum vollständigen Zahlungseingang aussetzen. VELYQO haftet nicht für hierdurch entstehende Verzögerungen.",
        "Soweit gesetzlich zulässig, gehen Rechte an finalen Arbeitsergebnissen erst nach vollständiger Zahlung sämtlicher hierfür geschuldeter Beträge auf den Kunden über.",
      ],
    },
    {
      number: "11",
      title: "Software, Tools und externe Kosten",
      body: [
        "VELYQO trägt grundsätzlich die Kosten der üblichen internen Software und Tools, die zur Erbringung der vereinbarten Leistungen eingesetzt werden, soweit im jeweiligen Angebot nichts anderes bestimmt ist.",
        "Verlangt der Kunde bestimmte zusätzliche Software, Premium-Funktionen, Lizenzen, Assets oder externe Dienstleistungen, die über den für den vereinbarten Standardumfang vernünftigerweise erforderlichen Umfang hinausgehen, können die hierdurch entstehenden Mehrkosten nach vorheriger Abstimmung zusätzlich dem Kunden berechnet werden.",
        "Werbebudgets, Media Spend und sonstige unmittelbar für den Kunden eingesetzte externe Budgets sind von der Vergütung von VELYQO getrennt, sofern sie nicht ausdrücklich im Angebot enthalten sind.",
      ],
    },
    {
      number: "12",
      title: "Laufzeit und Kündigung laufender Leistungen",
      body: [
        "Soweit im jeweiligen Angebot nichts anderes bestimmt ist, haben laufende Leistungen eine anfängliche Mindestlaufzeit von drei (3) Monaten.",
        "Nach Ablauf der Mindestlaufzeit wird der Vertrag auf monatlicher Basis fortgeführt.",
        "Nach Ablauf der Mindestlaufzeit kann jede Partei die laufenden Leistungen mit einer Frist von dreißig (30) Tagen zum Ende des jeweiligen monatlichen Leistungszeitraums in Textform kündigen.",
        "Bei einer wesentlichen Vertragsverletzung kann eine Partei den Vertrag kündigen, wenn die andere Partei die Vertragsverletzung trotz schriftlicher Aufforderung nicht innerhalb einer angemessenen Frist behebt, soweit eine Behebung vernünftigerweise möglich ist. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund nach anwendbarem Recht bleibt unberührt.",
      ],
    },
    {
      number: "13",
      title: "Projektstornierung",
      body: [
        "Nach Vertragsschluss kann VELYQO personelle und technische Kapazitäten sowie Projektzeit reservieren und bereits mit Planung, Recherche, Vorbereitung und sonstigen Vorarbeiten beginnen.",
        "Storniert der Kunde ein beauftragtes einmaliges Projekt aus Gründen, die VELYQO nicht zu vertreten hat, kann VELYQO auf Grundlage des Werts der noch nicht erbrachten Leistungen folgende Stornierungsvergütung verlangen: 40 % bei Stornierung bis vierzehn (14) Kalendertage vor dem vereinbarten Projekt- oder Produktionsbeginn; 50 % bei Stornierung weniger als vierzehn (14) Kalendertage vor dem vereinbarten Beginn; und 60 % bei Stornierung am oder nach dem vereinbarten Beginn.",
        "Bereits erbrachte Leistungen sowie bereits entstandene oder unwiderruflich eingegangene Fremdkosten sind zusätzlich zu zahlen, soweit sie nicht bereits in der jeweiligen Stornierungsvergütung berücksichtigt sind.",
        "Der Kunde kann nachweisen, dass VELYQO kein oder ein wesentlich geringerer Schaden entstanden ist. VELYQO kann einen höheren tatsächlich entstandenen Schaden nachweisen, soweit dies nach dem anwendbaren Recht zulässig ist.",
      ],
    },
    {
      number: "14",
      title: "Geistiges Eigentum",
      body: [
        "Sämtliche Methoden, Frameworks, Templates, Softwarebestandteile, Prompts, Workflows, Automatisierungssysteme, Analysemodelle, Prozesse, Know-how und sonstiges geistiges Eigentum, das vor Beginn des Kundenprojekts entwickelt wurde oder unabhängig vom konkreten Kundenprojekt besteht (\"VELYQO Background IP\"), verbleibt im Eigentum von VELYQO bzw. des jeweiligen Rechteinhabers.",
        "Nach vollständiger Zahlung sämtlicher auf das jeweilige Arbeitsergebnis entfallender Vergütungen erhält der Kunde die Rechte, die vernünftigerweise erforderlich sind, um die speziell für ihn erstellten finalen Arbeitsergebnisse für den vorgesehenen Zweck zu nutzen.",
        "Enthalten finale Arbeitsergebnisse VELYQO Background IP, erhält der Kunde daran lediglich eine nicht ausschließliche Lizenz in dem Umfang, der zur Nutzung des jeweiligen Arbeitsergebnisses erforderlich ist. Das Eigentum bzw. die zugrunde liegenden Rechte am Background IP werden nicht übertragen.",
        "Rechte an Software, Schriftarten, Stock Assets, Bildern, Musik, Plugins und ähnlichen Materialien Dritter richten sich nach den jeweils geltenden Lizenzbedingungen der Drittanbieter.",
        "Soweit gesetzlich zulässig, gehen Rechte an finalen Arbeitsergebnissen erst über, nachdem sämtliche dafür geschuldeten Beträge vollständig bezahlt wurden.",
      ],
    },
    {
      number: "15",
      title: "Portfolio- und Referenznutzung",
      body: [
        "Soweit nicht schriftlich etwas anderes vereinbart wurde, ist VELYQO berechtigt, den Kunden als Kunden von VELYQO zu benennen und dessen Namen, Unternehmensnamen und Logo in angemessenem Umfang für Portfolio-, Referenz- und Geschäftsentwicklungszwecke zu verwenden.",
        "VELYQO darf außerdem öffentlich veröffentlichte, für den Kunden erstellte Arbeiten auf der eigenen Website, in Social-Media-Kanälen, Präsentationen, Pitches und Portfolio-Unterlagen darstellen.",
        "Diese Berechtigung umfasst nicht die Offenlegung vertraulicher Informationen, nicht öffentlicher Geschäftsdaten oder unveröffentlichter Arbeitsergebnisse.",
      ],
    },
    {
      number: "16",
      title: "Vertraulichkeit",
      body: [
        "Beide Parteien behandeln sämtliche nicht öffentlichen geschäftlichen, strategischen, technischen und sonstigen vertraulichen Informationen der jeweils anderen Partei vertraulich.",
        "Vertrauliche Informationen dürfen ausschließlich für Zwecke des Vertrags verwendet und nur Personen zugänglich gemacht werden, die für diesen Zweck vernünftigerweise Zugang benötigen und angemessenen Vertraulichkeitsverpflichtungen unterliegen.",
        "Diese Verpflichtungen gelten nicht für Informationen, die ohne Verletzung dieser Vereinbarung öffentlich zugänglich sind, der empfangenden Partei bereits rechtmäßig bekannt waren, rechtmäßig von einem Dritten erhalten wurden oder aufgrund gesetzlicher Verpflichtung bzw. verbindlicher behördlicher Anordnung offengelegt werden müssen.",
        "Die Vertraulichkeitsverpflichtungen bestehen auch nach Beendigung des Vertrags fort.",
      ],
    },
    {
      number: "17",
      title: "Einsatz künstlicher Intelligenz",
      body: [
        "VELYQO ist berechtigt, bei der Erbringung der Leistungen künstliche Intelligenz, Machine-Learning-Systeme und Automatisierungstechnologien einzusetzen, insbesondere für Recherche, Analyse, Ideenentwicklung, Content-Unterstützung, Strukturierung, Datenverarbeitung und Prozessautomatisierung.",
        "VELYQO bleibt im Rahmen der jeweiligen Vereinbarung für die von VELYQO bereitgestellten finalen Arbeitsergebnisse verantwortlich.",
        "Hat der Kunde besondere interne Richtlinien oder Einschränkungen hinsichtlich der Nutzung von KI-Systemen, hat er VELYQO vor Beginn der betreffenden Leistungen darüber zu informieren.",
        "Führen solche Anforderungen zu einem wesentlichen zusätzlichen Arbeits-, Kosten- oder Zeitaufwand, können die Parteien entsprechende Anpassungen von Leistungsumfang, Vergütung oder Fristen vereinbaren.",
      ],
    },
    {
      number: "18",
      title: "Website- und E-Commerce-Leistungen",
      body: [
        "Website-, Entwicklungs- und E-Commerce-Leistungen beschränken sich auf die im jeweiligen Angebot oder SOW bezeichneten Seiten, Funktionen, Integrationen und Systeme.",
        "Zusätzliche Funktionen oder wesentliche Änderungen, die nach Vereinbarung des Leistungsumfangs verlangt werden, können als zusätzliche Leistungen behandelt werden.",
        "VELYQO garantiert keine ununterbrochene Verfügbarkeit einer Website, eines Online-Shops oder eines externen Dienstes.",
        "Hosting, Wartung, fortlaufender Support, Sicherheitsupdates und zukünftige technische Änderungen sind nach Abschluss eines Projekts nicht enthalten, sofern dies nicht ausdrücklich im jeweiligen Angebot vereinbart wurde.",
        "Soweit nicht ausdrücklich Teil der vereinbarten Leistungen, ist der Kunde für die rechtliche Konformität seiner Website, seines Online-Shops und seiner Geschäftstätigkeit verantwortlich. Dies umfasst insbesondere Produktinformationen, Preise, Steuern, Versandinformationen, Verbraucherinformationen und sonstige gesetzlich erforderliche Angaben.",
      ],
    },
    {
      number: "19",
      title: "SEO und GEO",
      body: [
        "SEO- und GEO-Leistungen dienen dazu, technische, strukturelle und/oder inhaltliche Voraussetzungen zu verbessern, die für die Sichtbarkeit in Suchmaschinen sowie KI-gestützten Such- oder Informationssystemen relevant sein können.",
        "VELYQO hat keinen Einfluss darauf, ob oder wie Inhalte von Suchmaschinen oder KI-Systemen gecrawlt, indexiert, gerankt, dargestellt, zitiert, zusammengefasst oder empfohlen werden.",
        "Änderungen von Suchmaschinen, generativen KI-Systemen, Algorithmen, Ranking-Kriterien oder Plattformrichtlinien können bestehende Ergebnisse positiv oder negativ beeinflussen und stellen für sich genommen keine mangelhafte Leistung von VELYQO dar.",
      ],
    },
    {
      number: "20",
      title: "Public Relations und Medienarbeit",
      body: [
        "Im Rahmen von PR- und Kommunikationsprojekten erbringt VELYQO die vereinbarten Strategie-, Recherche-, Content-, Outreach- oder Kommunikationsleistungen, garantiert jedoch keine Veröffentlichung durch ein bestimmtes Medium.",
        "Redaktionelle Entscheidungen liegen bei Journalisten, Publishern, Plattformen und sonstigen Medienorganisationen.",
        "VELYQO garantiert daher weder Veröffentlichung noch Reichweite, Tonalität, Platzierung, Dauer oder sonstige Eigenschaften einer daraus resultierenden Medienberichterstattung.",
      ],
    },
    {
      number: "21",
      title: "Werbung, Kampagnen und UGC",
      body: [
        "VELYQO garantiert keine bestimmten Reichweiten, Impressionen, Klicks, Klickpreise, Leads, Conversion Rates, Umsätze, ROI, ROAS oder sonstigen Kampagnenkennzahlen.",
        "Werbebudgets und Media Spend sind von der Vergütung von VELYQO getrennt, sofern nicht ausdrücklich etwas anderes vereinbart wurde.",
        "Bei UGC- und Creator-Projekten bestimmen sich Umfang, Dauer, Gebiet, Medien und zulässige Nutzungsarten der Creator-Inhalte nach der jeweiligen Projektvereinbarung und gegebenenfalls den Lizenzbedingungen des jeweiligen Creators oder sonstiger Dritter.",
      ],
    },
    {
      number: "22",
      title: "Haftung",
      body: [
        "Diese AGB schließen keine Haftung aus und beschränken keine Haftung, soweit ein solcher Ausschluss oder eine solche Beschränkung nach dem anwendbaren Recht unzulässig ist.",
        "Soweit nach dem anwendbaren Recht zulässig, haftet VELYQO nicht für indirekte, beiläufig entstandene, besondere oder mittelbare Schäden, Folgeschäden oder Strafschadensersatz sowie insbesondere nicht für entgangene Gewinne, Umsätze, Geschäftsmöglichkeiten, Reputation oder erwartete Einsparungen, die aus oder im Zusammenhang mit dem Vertrag entstehen.",
        "VELYQO haftet nicht für Verluste, die aus unrichtigen oder unvollständigen Angaben des Kunden, Handlungen von Drittplattformen oder Umständen außerhalb des angemessenen Einflussbereichs von VELYQO entstehen, soweit diese nicht unmittelbar durch eine Pflichtverletzung von VELYQO verursacht wurden.",
        "Soweit nach dem anwendbaren Recht zulässig, ist die Gesamthaftung von VELYQO aus oder im Zusammenhang mit einem Vertrag auf die Gesamtvergütung begrenzt, die der Kunde in den zwölf (12) Monaten unmittelbar vor dem haftungsbegründenden Ereignis tatsächlich unter dem betreffenden Vertrag an VELYQO gezahlt hat.",
        "Die in diesem Abschnitt enthaltenen Beschränkungen gelten unabhängig von der rechtlichen Grundlage eines Anspruchs, soweit dies nach dem anwendbaren Recht zulässig ist.",
      ],
    },
    {
      number: "23",
      title: "Höhere Gewalt",
      body: [
        "Keine Partei haftet für Verzögerungen oder Nichterfüllung, soweit diese durch Umstände außerhalb ihrer angemessenen Kontrolle verursacht werden.",
        "Hierzu können insbesondere Naturkatastrophen, Krieg, Terrorismus, behördliche Maßnahmen, erhebliche Internet- oder Infrastrukturausfälle, großflächige Ausfälle wesentlicher Drittanbieter und vergleichbare Ereignisse gehören.",
        "Die betroffene Partei wird wirtschaftlich angemessene Maßnahmen ergreifen, um die Auswirkungen zu begrenzen, und die andere Partei über wesentliche Auswirkungen auf die Vertragserfüllung informieren.",
      ],
    },
    {
      number: "24",
      title: "Anwendbares Recht und Gerichtsstand",
      body: [
        "Diese AGB und sämtliche von ihnen erfassten Verträge unterliegen, soweit gesetzlich zulässig, dem Recht des US-Bundesstaates Wyoming, Vereinigte Staaten von Amerika, unter Ausschluss seiner Kollisionsnormen.",
        "Soweit gesetzlich zulässig, sind für Streitigkeiten aus oder im Zusammenhang mit diesen AGB oder dem jeweiligen Vertrag ausschließlich die zuständigen Staats- und Bundesgerichte im Bundesstaat Wyoming zuständig. Beide Parteien stimmen dieser Gerichtsbarkeit zu.",
        "Zwingende gesetzliche Vorschriften und Zuständigkeitsregelungen, die vertraglich nicht wirksam ausgeschlossen werden können, bleiben unberührt.",
      ],
    },
    {
      number: "25",
      title: "Allgemeine Bestimmungen",
      body: [
        "VELYQO kann Mitarbeiter, Freelancer, Auftragnehmer, Subunternehmer und sonstige Dienstleister zur Erfüllung seiner Verpflichtungen einsetzen.",
        "Keine Partei darf den gesamten Vertrag ohne Zustimmung der anderen Partei auf einen Dritten übertragen, soweit eine solche Zustimmung nach dem anwendbaren Recht erforderlich ist.",
        "Verzichtet eine Partei darauf, eine Bestimmung dieser AGB in einem bestimmten Fall durchzusetzen, stellt dies keinen Verzicht auf diese Bestimmung oder andere Rechte für zukünftige Fälle dar.",
        "Sollte eine Bestimmung dieser AGB unwirksam, rechtswidrig oder nicht durchsetzbar sein, bleiben die übrigen Bestimmungen im größtmöglichen gesetzlich zulässigen Umfang wirksam.",
        "Diese AGB können in deutscher und englischer Sprache bereitgestellt werden. Bei Widersprüchen, Abweichungen oder unterschiedlichen Auslegungen zwischen den Sprachfassungen ist die englischsprachige Fassung maßgeblich.",
        ["VELYQO LLC", "30 N Gould St, Ste N, Sheridan, WY 82801, Wyoming, United States", "business@getvelyqo.com", "getvelyqo.com"],
      ],
    },
  ],
};
