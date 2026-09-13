export type Locale = "en" | "de";

export type ProgramContent = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export type Translation = {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    en: string;
    de: string;
  };
  nav: {
    weightLoss: string;
    womensHealth: string;
    mensHealth: string;
    nutrition: string;
    supplements: string;
    peptides: string;
    hair: string;
    skincare: string;
    signIn: string;
    getStarted: string;
    toggleMenu: string;
    openMenu: string;
  };
  hero: {
    eyebrow: string;
    headlineStart: string;
    headlineEm: string;
    headlineEnd: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statPatientsLabel: string;
    statPatientsValue: string;
    statRatingLabel: string;
    statRatingValue: string;
    statStatesLabel: string;
    statStatesValue: string;
    cardHeading: string;
    cardSub: string;
    badgeConsultLabel: string;
    badgeConsultValue: string;
    badgeShipsLabel: string;
    badgeShipsValue: string;
  };
  trustStrip: {
    featuredIn: string;
    outlets: string[];
  };
  programCommon: {
    ctaLabel: string;
    consult: string;
    consultValue: string;
    shipping: string;
    shippingValue: string;
    support: string;
    supportValue: string;
  };
  programs: {
    weightLoss: ProgramContent;
    womensHealth: ProgramContent;
    nutrition: ProgramContent;
    supplements: ProgramContent;
    mensHealth: ProgramContent;
    peptides: ProgramContent;
    hair: ProgramContent;
    skincare: ProgramContent;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: { n: string; title: string; body: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    reviews: { name: string; program: string; quote: string; stars: number }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    quiz: string;
    talk: string;
  };
  footer: {
    description: string;
    partnersLabel: string;
    partnersValue: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    disclaimer: string;
    copyright: (year: number) => string;
    legal: { label: string; href: string }[];
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    htmlLang: "en",
    meta: {
      title: "MEDVi — Healthcare, redefined for real life",
      description:
        "Doctor-guided telehealth for weight loss, hormones, longevity, skincare, and more. Personalized care delivered to your door.",
      ogTitle: "MEDVi — Healthcare, redefined for real life",
      ogDescription:
        "Doctor-guided telehealth for weight loss, hormones, longevity, skincare, and more.",
    },
    languageSwitcher: {
      ariaLabel: "Select language",
      en: "EN",
      de: "DE",
    },
    nav: {
      weightLoss: "Weight Loss",
      womensHealth: "Women's Health",
      mensHealth: "Men's Health",
      nutrition: "Nutrition",
      supplements: "Supplements",
      peptides: "Peptides",
      hair: "Hair",
      skincare: "Skincare",
      signIn: "Sign in",
      getStarted: "Get Started",
      toggleMenu: "Toggle menu",
      openMenu: "Open menu",
    },
    hero: {
      eyebrow: "Telehealth · Doctor-guided care",
      headlineStart: "Healthcare, ",
      headlineEm: "redefined",
      headlineEnd: " for real life.",
      description:
        "Personalized weight loss, hormone therapy, longevity peptides, supplements, and skincare — delivered discreetly to your door, guided by licensed clinicians.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Explore treatments",
      statPatientsLabel: "Patients served",
      statPatientsValue: "250,000+",
      statRatingLabel: "Avg. rating",
      statRatingValue: "4.9★",
      statStatesLabel: "States served",
      statStatesValue: "50",
      cardHeading: "Your care team, on call.",
      cardSub: "Board-certified providers in every state.",
      badgeConsultLabel: "Free consultation",
      badgeConsultValue: "$0",
      badgeShipsLabel: "Ships in",
      badgeShipsValue: "2–3 days",
    },
    trustStrip: {
      featuredIn: "Featured In",
      outlets: [
        "The Wall Street Journal",
        "Forbes",
        "TechCrunch",
        "Women's Health",
        "Men's Journal",
        "Bloomberg",
      ],
    },
    programCommon: {
      ctaLabel: "Get Started",
      consult: "Consult",
      consultValue: "Free",
      shipping: "Shipping",
      shippingValue: "Fast",
      support: "Support",
      supportValue: "24/7",
    },
    programs: {
      weightLoss: {
        eyebrow: "Weight Loss",
        title: "GLP-1 care with a clinician in your corner.",
        description:
          "Doctor-guided programs using semaglutide, tirzepatide, and metabolic protocols — matched to your labs, goals, and lifestyle. No cookie-cutter plans.",
        bullets: [
          "Personalized dosing plan reviewed monthly",
          "Compounded from licensed U.S. pharmacies",
          "Nutrition + habit coaching included",
          "Free shipping on every refill",
        ],
      },
      womensHealth: {
        eyebrow: "Women's Health",
        title: "Hormones, hair, and skin — balanced.",
        description:
          "Bioidentical hormone therapy, perimenopause and menopause protocols, cycle support, and prescription skincare — all in one care plan.",
        bullets: [
          "Estrogen, progesterone, and testosterone options",
          "Perimenopause & menopause specialists",
          "Skin, hair, and libido optimization",
          "Care that evolves with your life stage",
        ],
      },
      nutrition: {
        eyebrow: "Metabolic Nutrition",
        title: "MEDVi Meals — real food, engineered for results.",
        description:
          "Chef-prepared meals designed by our metabolic team to complement your protocol. Delivered fresh, ready in three minutes, portioned to your goals.",
        bullets: [
          "Weekly rotating menu, dietitian-approved",
          "Macro-targeted for GLP-1 and weight loss",
          "No prep, no cleanup — just real food",
          "Skip, swap, or pause any week",
        ],
      },
      supplements: {
        eyebrow: "Supplements",
        title: "Doctor-formulated, evidence-based.",
        description:
          "A focused shelf — not 200 SKUs. Every supplement is third-party tested, dosed to research, and formulated by our clinical team.",
        bullets: [
          "NSF and USP-verified sourcing",
          "Clinical dosing — no fairy dust",
          "Bundles designed for your protocol",
          "Auto-refill with pause anytime",
        ],
      },
      mensHealth: {
        eyebrow: "Men's Health",
        title: "Energy, hormones, performance.",
        description:
          "Testosterone optimization, ED, hair, and metabolic care — with real bloodwork and a clinician who actually returns messages.",
        bullets: [
          "TRT with cypionate, enanthate, and cream options",
          "ED treatment (sildenafil, tadalafil, troches)",
          "HCG and ancillary support",
          "Quarterly labs and dose adjustments",
        ],
      },
      peptides: {
        eyebrow: "Peptides & Longevity",
        title: "Recovery, performance, sleep.",
        description:
          "A clinician-supervised peptide program for recovery, lean mass, cognition, and sleep quality — sourced only from licensed compounding pharmacies.",
        bullets: [
          "BPC-157, TB-500, CJC-1295 / Ipamorelin",
          "NAD+ and longevity protocols",
          "Sleep and cognitive stacks",
          "Injection training and support included",
        ],
      },
      hair: {
        eyebrow: "Hair Restoration",
        title: "Regrow. Reset. Retain.",
        description:
          "Prescription-strength topical and oral protocols — finasteride, minoxidil, and our regrowth serum — customized to your pattern of loss.",
        bullets: [
          "Custom topical formulas with tretinoin & minoxidil",
          "Oral finasteride or dutasteride options",
          "Photo-based progress tracking",
          "Results typically visible in 90–120 days",
        ],
      },
      skincare: {
        eyebrow: "Skincare",
        title: "Prescription-strength, personalized.",
        description:
          "Tretinoin, azelaic acid, hydroquinone, and custom Rx blends compounded to your skin's needs — for texture, tone, acne, and aging.",
        bullets: [
          "Custom Rx formulas for your concerns",
          "Anti-aging, acne, melasma, rosacea protocols",
          "Dermatology-trained providers",
          "Refills adjust as your skin evolves",
        ],
      },
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "From intake to first shipment in under a week.",
      steps: [
        {
          n: "01",
          title: "Complete your intake",
          body: "A 5-minute questionnaire captures your health history, goals, and current medications.",
        },
        {
          n: "02",
          title: "Meet your clinician",
          body: "A licensed provider in your state reviews your file and designs a personalized plan.",
        },
        {
          n: "03",
          title: "Delivered to your door",
          body: "Medications ship discreetly from our licensed U.S. pharmacy partners with free shipping.",
        },
        {
          n: "04",
          title: "Ongoing care",
          body: "Message your care team anytime and adjust your plan as your body responds.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Real patients · Real outcomes",
      title: "250,000+ people trust MEDVi with their care.",
      description: "Verified reviews from patients across all 50 states.",
      reviews: [
        {
          name: "Sarah K.",
          program: "GLP-1 Weight Loss",
          stars: 5,
          quote:
            "Down 32 lbs in five months. My provider actually listens — this isn't a pill mill, it's real care.",
        },
        {
          name: "James M.",
          program: "Men's Hormone Health",
          stars: 5,
          quote:
            "Energy is back, sleep is deeper. The onboarding labs made me realize how off my baseline was.",
        },
        {
          name: "Ashley R.",
          program: "Skincare Rx",
          stars: 5,
          quote:
            "Prescription tretinoin plus their custom serum cleared years of texture in weeks. Worth every penny.",
        },
        {
          name: "Priya S.",
          program: "MEDVi Meals",
          stars: 5,
          quote:
            "The meals are surprisingly delicious and portioned exactly to my macros. Zero decision fatigue.",
        },
        {
          name: "David T.",
          program: "Peptides & Longevity",
          stars: 5,
          quote:
            "Recovery from workouts is night and day. Feels like I'm training with a decade less mileage on my body.",
        },
        {
          name: "Monica L.",
          program: "Women's Hormones",
          stars: 5,
          quote:
            "My perimenopause symptoms went from unbearable to invisible. I feel like myself again.",
        },
      ],
    },
    cta: {
      eyebrow: "Start today",
      title: "Ready to feel like yourself again?",
      description:
        "Take the 5-minute intake. If you're not a fit, you don't pay — ever.",
      quiz: "Take the free quiz",
      talk: "Talk to our team",
    },
    footer: {
      description:
        "MEDVi is a telehealth platform that connects patients with U.S.-licensed clinicians and partner pharmacies. Healthcare, redefined for real life.",
      partnersLabel: "Pharmacy partners",
      partnersValue:
        "Licensed 503A & 503B compounding facilities · FDA-registered",
      columns: [
        {
          title: "Treatments",
          links: [
            { label: "Weight Loss", href: "#weight-loss" },
            { label: "Women's Health", href: "#womens-health" },
            { label: "Men's Health", href: "#mens-health" },
            { label: "Peptides", href: "#peptides" },
            { label: "Hair Restoration", href: "#hair" },
            { label: "Skincare", href: "#skincare" },
          ],
        },
        {
          title: "Nutrition",
          links: [
            { label: "MEDVi Meals", href: "#nutrition" },
            { label: "Supplements", href: "#supplements" },
            { label: "Meal Plans", href: "#nutrition" },
            { label: "Metabolic Coaching", href: "#nutrition" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "#about" },
            { label: "Clinicians", href: "#clinicians" },
            { label: "Careers", href: "#careers" },
            { label: "Press", href: "#press" },
            { label: "Blog", href: "#blog" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Contact", href: "#contact" },
            { label: "FAQ", href: "#faq" },
            { label: "Shipping", href: "#shipping" },
            { label: "Insurance", href: "#insurance" },
          ],
        },
      ],
      disclaimer:
        "The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Compounded medications are not FDA-approved and are not evaluated for safety or efficacy by the FDA. GLP-1 medications are prescription only and may not be appropriate for all patients. Individual results vary.",
      copyright: (year: number) =>
        `© ${year} MEDVi Health, Inc. All rights reserved.`,
      legal: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Telehealth Consent", href: "#telehealth-consent" },
        { label: "HIPAA Notice", href: "#hipaa" },
        { label: "Do Not Sell My Info", href: "#dns" },
      ],
    },
  },
  de: {
    htmlLang: "de",
    meta: {
      title: "MEDVi — Gesundheitsversorgung, neu gedacht für den Alltag",
      description:
        "Ärztlich geführte Telemedizin für Gewichtsverlust, Hormone, Langlebigkeit, Hautpflege und mehr. Persönliche Betreuung direkt bis vor Ihre Tür.",
      ogTitle: "MEDVi — Gesundheitsversorgung, neu gedacht für den Alltag",
      ogDescription:
        "Ärztlich geführte Telemedizin für Gewichtsverlust, Hormone, Langlebigkeit, Hautpflege und mehr.",
    },
    languageSwitcher: {
      ariaLabel: "Sprache auswählen",
      en: "EN",
      de: "DE",
    },
    nav: {
      weightLoss: "Gewichtsverlust",
      womensHealth: "Frauengesundheit",
      mensHealth: "Männergesundheit",
      nutrition: "Ernährung",
      supplements: "Nahrungsergänzung",
      peptides: "Peptide",
      hair: "Haare",
      skincare: "Hautpflege",
      signIn: "Anmelden",
      getStarted: "Jetzt starten",
      toggleMenu: "Menü umschalten",
      openMenu: "Menü öffnen",
    },
    hero: {
      eyebrow: "Telemedizin · Ärztlich geführte Betreuung",
      headlineStart: "Gesundheit, ",
      headlineEm: "neu gedacht",
      headlineEnd: " für den Alltag.",
      description:
        "Individueller Gewichtsverlust, Hormontherapie, Langlebigkeits-Peptide, Nahrungsergänzung und Hautpflege — diskret zu Ihnen nach Hause geliefert, begleitet von approbierten Ärztinnen und Ärzten.",
      ctaPrimary: "Jetzt starten",
      ctaSecondary: "Behandlungen entdecken",
      statPatientsLabel: "Betreute Patienten",
      statPatientsValue: "250.000+",
      statRatingLabel: "Durchschnitt",
      statRatingValue: "4,9★",
      statStatesLabel: "Bundesstaaten",
      statStatesValue: "50",
      cardHeading: "Ihr Behandlungsteam, jederzeit erreichbar.",
      cardSub: "Zertifizierte Fachärzte in jedem Bundesstaat.",
      badgeConsultLabel: "Erstberatung",
      badgeConsultValue: "0 €",
      badgeShipsLabel: "Versand in",
      badgeShipsValue: "2–3 Tagen",
    },
    trustStrip: {
      featuredIn: "Bekannt aus",
      outlets: [
        "The Wall Street Journal",
        "Forbes",
        "TechCrunch",
        "Women's Health",
        "Men's Journal",
        "Bloomberg",
      ],
    },
    programCommon: {
      ctaLabel: "Jetzt starten",
      consult: "Beratung",
      consultValue: "Gratis",
      shipping: "Versand",
      shippingValue: "Schnell",
      support: "Support",
      supportValue: "24/7",
    },
    programs: {
      weightLoss: {
        eyebrow: "Gewichtsverlust",
        title: "GLP-1-Betreuung mit einer Ärztin an Ihrer Seite.",
        description:
          "Ärztlich geführte Programme mit Semaglutid, Tirzepatid und Stoffwechselprotokollen — abgestimmt auf Ihre Laborwerte, Ziele und Ihren Alltag. Keine Programme von der Stange.",
        bullets: [
          "Individueller Dosierungsplan, monatlich überprüft",
          "Aus zugelassenen US-Apotheken hergestellt",
          "Ernährungs- und Gewohnheits-Coaching inklusive",
          "Kostenloser Versand bei jeder Nachbestellung",
        ],
      },
      womensHealth: {
        eyebrow: "Frauengesundheit",
        title: "Hormone, Haare und Haut — im Gleichgewicht.",
        description:
          "Bioidentische Hormontherapie, Protokolle für Perimenopause und Menopause, Zyklusunterstützung und verschreibungspflichtige Hautpflege — alles in einem Behandlungsplan.",
        bullets: [
          "Östrogen, Progesteron und Testosteron als Optionen",
          "Fachpersonal für Perimenopause & Menopause",
          "Optimierung von Haut, Haaren und Libido",
          "Betreuung, die sich mit Ihrer Lebensphase entwickelt",
        ],
      },
      nutrition: {
        eyebrow: "Stoffwechselernährung",
        title: "MEDVi Meals — echte Lebensmittel, entwickelt für Ergebnisse.",
        description:
          "Von Köchen zubereitete Mahlzeiten, entwickelt von unserem Stoffwechsel-Team als Ergänzung zu Ihrem Protokoll. Frisch geliefert, in drei Minuten fertig, passend zu Ihren Zielen portioniert.",
        bullets: [
          "Wöchentlich wechselndes, von Diätologen freigegebenes Menü",
          "Makro-optimiert für GLP-1 und Gewichtsverlust",
          "Keine Vorbereitung, kein Aufräumen — nur echtes Essen",
          "Wöchentlich überspringen, tauschen oder pausieren",
        ],
      },
      supplements: {
        eyebrow: "Nahrungsergänzung",
        title: "Ärztlich formuliert, evidenzbasiert.",
        description:
          "Ein fokussiertes Sortiment — keine 200 Artikelnummern. Jedes Präparat ist unabhängig geprüft, evidenzbasiert dosiert und von unserem klinischen Team formuliert.",
        bullets: [
          "NSF- und USP-verifizierte Rohstoffe",
          "Klinische Dosierungen — kein Zauberstaub",
          "Bundles passend zu Ihrem Protokoll",
          "Automatische Nachlieferung, jederzeit pausierbar",
        ],
      },
      mensHealth: {
        eyebrow: "Männergesundheit",
        title: "Energie, Hormone, Leistungsfähigkeit.",
        description:
          "Testosteron-Optimierung, ED, Haare und Stoffwechselversorgung — mit echten Blutwerten und einer Ärztin, die auf Nachrichten antwortet.",
        bullets: [
          "TRT mit Cypionat, Enantat oder als Creme",
          "ED-Behandlung (Sildenafil, Tadalafil, Lutschtabletten)",
          "HCG und ergänzende Unterstützung",
          "Vierteljährliche Laborkontrollen und Dosisanpassungen",
        ],
      },
      peptides: {
        eyebrow: "Peptide & Langlebigkeit",
        title: "Regeneration, Leistung, Schlaf.",
        description:
          "Ein ärztlich betreutes Peptidprogramm für Regeneration, Muskelmasse, Kognition und Schlafqualität — ausschließlich aus zugelassenen Rezeptur-Apotheken.",
        bullets: [
          "BPC-157, TB-500, CJC-1295 / Ipamorelin",
          "NAD+ und Langlebigkeitsprotokolle",
          "Schlaf- und Kognitions-Stacks",
          "Injektionsschulung und Support inklusive",
        ],
      },
      hair: {
        eyebrow: "Haarwiederherstellung",
        title: "Nachwachsen. Neustart. Erhalten.",
        description:
          "Verschreibungspflichtige topische und orale Protokolle — Finasterid, Minoxidil und unser Wachstumsserum — individuell auf Ihr Haarverlustmuster abgestimmt.",
        bullets: [
          "Individuelle Topika mit Tretinoin & Minoxidil",
          "Orales Finasterid oder Dutasterid als Optionen",
          "Fotobasierte Fortschrittskontrolle",
          "Ergebnisse meist nach 90–120 Tagen sichtbar",
        ],
      },
      skincare: {
        eyebrow: "Hautpflege",
        title: "Verschreibungsstark, individuell abgestimmt.",
        description:
          "Tretinoin, Azelainsäure, Hydrochinon und individuelle Rezepturen, die auf die Bedürfnisse Ihrer Haut abgestimmt sind — für Textur, Teint, Akne und Anti-Aging.",
        bullets: [
          "Individuelle Rezepturen für Ihre Anliegen",
          "Protokolle für Anti-Aging, Akne, Melasma und Rosazea",
          "Dermatologisch geschulte Behandler",
          "Nachlieferungen passen sich Ihrer Haut an",
        ],
      },
    },
    howItWorks: {
      eyebrow: "So funktioniert es",
      title: "Vom Erstgespräch bis zur ersten Lieferung in unter einer Woche.",
      steps: [
        {
          n: "01",
          title: "Anamnese ausfüllen",
          body: "Ein 5-minütiger Fragebogen erfasst Ihre Krankengeschichte, Ihre Ziele und Ihre aktuellen Medikamente.",
        },
        {
          n: "02",
          title: "Ärztin kennenlernen",
          body: "Eine in Ihrem Bundesstaat zugelassene Ärztin prüft Ihre Unterlagen und erstellt einen persönlichen Plan.",
        },
        {
          n: "03",
          title: "Lieferung nach Hause",
          body: "Medikamente werden diskret von unseren zugelassenen US-Partner-Apotheken versendet — Versand kostenlos.",
        },
        {
          n: "04",
          title: "Laufende Betreuung",
          body: "Schreiben Sie Ihrem Team jederzeit und passen Sie Ihren Plan an, wenn Ihr Körper reagiert.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Echte Patienten · Echte Ergebnisse",
      title: "Über 250.000 Menschen vertrauen MEDVi ihre Betreuung an.",
      description:
        "Verifizierte Bewertungen von Patienten aus allen 50 Bundesstaaten.",
      reviews: [
        {
          name: "Sarah K.",
          program: "GLP-1 Gewichtsverlust",
          stars: 5,
          quote:
            "In fünf Monaten 14 kg weniger. Meine Ärztin hört wirklich zu — das ist keine Pillen-Fabrik, sondern echte Betreuung.",
        },
        {
          name: "James M.",
          program: "Männer-Hormongesundheit",
          stars: 5,
          quote:
            "Meine Energie ist zurück, mein Schlaf tiefer. Die ersten Laborwerte haben mir gezeigt, wie weit ich vom Optimum entfernt war.",
        },
        {
          name: "Ashley R.",
          program: "Rezeptur-Hautpflege",
          stars: 5,
          quote:
            "Verschreibungspflichtiges Tretinoin plus individuelles Serum haben in Wochen jahrelange Hautprobleme geklärt. Jeden Cent wert.",
        },
        {
          name: "Priya S.",
          program: "MEDVi Meals",
          stars: 5,
          quote:
            "Die Mahlzeiten sind überraschend lecker und exakt auf meine Makros portioniert. Keine Entscheidungen mehr treffen zu müssen.",
        },
        {
          name: "David T.",
          program: "Peptide & Langlebigkeit",
          stars: 5,
          quote:
            "Die Regeneration nach dem Training ist wie Tag und Nacht. Es fühlt sich an, als wäre ich zehn Jahre jünger.",
        },
        {
          name: "Monica L.",
          program: "Frauen-Hormone",
          stars: 5,
          quote:
            "Meine Perimenopause-Beschwerden waren unerträglich und sind nun unsichtbar. Ich fühle mich wieder wie ich selbst.",
        },
      ],
    },
    cta: {
      eyebrow: "Heute starten",
      title: "Bereit, sich wieder wie Sie selbst zu fühlen?",
      description:
        "Machen Sie die 5-minütige Anamnese. Wenn Sie nicht in Frage kommen, zahlen Sie nichts — nie.",
      quiz: "Kostenlosen Fragebogen starten",
      talk: "Mit unserem Team sprechen",
    },
    footer: {
      description:
        "MEDVi ist eine Telemedizin-Plattform, die Patienten mit in den USA zugelassenen Ärzten und Partner-Apotheken verbindet. Gesundheit, neu gedacht für den Alltag.",
      partnersLabel: "Apotheken-Partner",
      partnersValue:
        "Zugelassene 503A- & 503B-Rezepturbetriebe · FDA-registriert",
      columns: [
        {
          title: "Behandlungen",
          links: [
            { label: "Gewichtsverlust", href: "#weight-loss" },
            { label: "Frauengesundheit", href: "#womens-health" },
            { label: "Männergesundheit", href: "#mens-health" },
            { label: "Peptide", href: "#peptides" },
            { label: "Haarwiederherstellung", href: "#hair" },
            { label: "Hautpflege", href: "#skincare" },
          ],
        },
        {
          title: "Ernährung",
          links: [
            { label: "MEDVi Meals", href: "#nutrition" },
            { label: "Nahrungsergänzung", href: "#supplements" },
            { label: "Ernährungspläne", href: "#nutrition" },
            { label: "Stoffwechsel-Coaching", href: "#nutrition" },
          ],
        },
        {
          title: "Unternehmen",
          links: [
            { label: "Über uns", href: "#about" },
            { label: "Ärzteteam", href: "#clinicians" },
            { label: "Karriere", href: "#careers" },
            { label: "Presse", href: "#press" },
            { label: "Blog", href: "#blog" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Kontakt", href: "#contact" },
            { label: "FAQ", href: "#faq" },
            { label: "Versand", href: "#shipping" },
            { label: "Versicherung", href: "#insurance" },
          ],
        },
      ],
      disclaimer:
        "Die Informationen auf dieser Seite dienen ausschließlich Bildungszwecken und ersetzen keine professionelle medizinische Beratung, Diagnose oder Behandlung. Rezeptur-Medikamente sind nicht von der FDA zugelassen und werden von der FDA nicht auf Sicherheit oder Wirksamkeit geprüft. GLP-1-Medikamente sind verschreibungspflichtig und möglicherweise nicht für alle Patienten geeignet. Individuelle Ergebnisse können abweichen.",
      copyright: (year: number) =>
        `© ${year} MEDVi Health, Inc. Alle Rechte vorbehalten.`,
      legal: [
        { label: "Datenschutz", href: "#privacy" },
        { label: "Nutzungsbedingungen", href: "#terms" },
        { label: "Einwilligung Telemedizin", href: "#telehealth-consent" },
        { label: "HIPAA-Hinweis", href: "#hipaa" },
        { label: "Daten nicht verkaufen", href: "#dns" },
      ],
    },
  },
};

export const defaultLocale: Locale = "en";
