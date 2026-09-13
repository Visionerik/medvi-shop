export type Locale = "en" | "de";

export type ProgramContent = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export type FaqItem = { q: string; a: string };

export type LegalSection = { heading: string; body: string[] };

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
    about: string;
    faq: string;
    contact: string;
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
  programsOverview: {
    eyebrow: string;
    title: string;
    description: string;
    exploreLabel: string;
    programs: {
      key:
        | "weightLoss"
        | "womensHealth"
        | "nutrition"
        | "supplements"
        | "mensHealth"
        | "peptides"
        | "hair"
        | "skincare";
      href: string;
      title: string;
      blurb: string;
    }[];
  };
  whyPepvi: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
    pillars: { title: string; body: string }[];
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
  pages: {
    about: {
      eyebrow: string;
      title: string;
      lead: string;
      mission: { heading: string; body: string };
      story: { heading: string; body: string };
      values: { title: string; body: string }[];
      team: {
        eyebrow: string;
        title: string;
        description: string;
        members: { name: string; role: string; bio: string }[];
      };
    };
    faq: {
      eyebrow: string;
      title: string;
      description: string;
      items: FaqItem[];
      supportCta: {
        title: string;
        description: string;
        button: string;
      };
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      form: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        subject: string;
        subjectPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
        success: string;
        privacyNote: string;
      };
      hours: {
        title: string;
        rows: { label: string; value: string }[];
      };
      channels: { label: string; value: string; href?: string }[];
    };
    privacy: {
      eyebrow: string;
      title: string;
      updated: string;
      lead: string;
      sections: LegalSection[];
    };
    terms: {
      eyebrow: string;
      title: string;
      updated: string;
      lead: string;
      sections: LegalSection[];
    };
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    htmlLang: "en",
    meta: {
      title: "Pepvi — Healthcare, redefined for real life",
      description:
        "Doctor-guided telehealth for weight loss, hormones, longevity, skincare, and more. Personalized care delivered to your door.",
      ogTitle: "Pepvi — Healthcare, redefined for real life",
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
      about: "About",
      faq: "FAQ",
      contact: "Contact",
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
    programsOverview: {
      eyebrow: "Programs",
      title: "Eight ways we help you feel like yourself again.",
      description:
        "Every program is designed by clinicians, tailored to your labs and goals, and shipped to your door — with a real care team in your corner.",
      exploreLabel: "Explore",
      programs: [
        {
          key: "weightLoss",
          href: "/#weight-loss",
          title: "Weight Loss",
          blurb: "GLP-1 medications with monthly clinical reviews.",
        },
        {
          key: "womensHealth",
          href: "/#womens-health",
          title: "Women's Health",
          blurb: "Bioidentical hormones and perimenopause care.",
        },
        {
          key: "nutrition",
          href: "/#nutrition",
          title: "Metabolic Nutrition",
          blurb: "Pepvi Meals — chef-prepared, macro-targeted.",
        },
        {
          key: "supplements",
          href: "/#supplements",
          title: "Supplements",
          blurb: "Third-party-tested, clinically-dosed formulas.",
        },
        {
          key: "mensHealth",
          href: "/#mens-health",
          title: "Men's Health",
          blurb: "Testosterone optimization, ED, and metabolic care.",
        },
        {
          key: "peptides",
          href: "/#peptides",
          title: "Peptides & Longevity",
          blurb: "Recovery, cognition, and sleep protocols.",
        },
        {
          key: "hair",
          href: "/#hair",
          title: "Hair Restoration",
          blurb: "Prescription topical and oral regrowth protocols.",
        },
        {
          key: "skincare",
          href: "/#skincare",
          title: "Skincare",
          blurb: "Custom Rx formulas for texture, tone, and aging.",
        },
      ],
    },
    whyPepvi: {
      eyebrow: "Why Pepvi",
      title: "Real care, delivered the way it should be.",
      description:
        "A modern care experience built on licensed U.S. clinicians, clear pricing, fast shipping, and real accountability — not chatbots and refill upsells.",
      stats: [
        { value: "250K+", label: "Patients served" },
        { value: "4.9★", label: "Average patient rating" },
        { value: "50", label: "States we serve" },
        { value: "2–3d", label: "Typical shipping window" },
      ],
      pillars: [
        {
          title: "Licensed U.S. providers",
          body: "Board-certified clinicians in every state — real MDs, NPs, and PAs who review your file and follow up personally.",
        },
        {
          title: "100% online",
          body: "Intake, labs, follow-ups, and refills — no waiting rooms, no phone tag. Message your care team from your phone.",
        },
        {
          title: "Clear, upfront pricing",
          body: "No insurance games, no surprise bills. One transparent monthly price includes medication, shipping, and unlimited support.",
        },
        {
          title: "Delivered to your door",
          body: "Discreet packaging from licensed U.S. compounding pharmacies. Free shipping, temperature-controlled where required.",
        },
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
        title: "Pepvi Meals — real food, engineered for results.",
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
      title: "250,000+ people trust Pepvi with their care.",
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
          program: "Pepvi Meals",
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
        "Pepvi is a telehealth platform that connects patients with U.S.-licensed clinicians and partner pharmacies. Healthcare, redefined for real life.",
      partnersLabel: "Pharmacy partners",
      partnersValue:
        "Licensed 503A & 503B compounding facilities · FDA-registered",
      columns: [
        {
          title: "Treatments",
          links: [
            { label: "Weight Loss", href: "/#weight-loss" },
            { label: "Women's Health", href: "/#womens-health" },
            { label: "Men's Health", href: "/#mens-health" },
            { label: "Peptides", href: "/#peptides" },
            { label: "Hair Restoration", href: "/#hair" },
            { label: "Skincare", href: "/#skincare" },
          ],
        },
        {
          title: "Nutrition",
          links: [
            { label: "Pepvi Meals", href: "/#nutrition" },
            { label: "Supplements", href: "/#supplements" },
            { label: "Meal Plans", href: "/#nutrition" },
            { label: "Metabolic Coaching", href: "/#nutrition" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/about" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact", href: "/contact" },
            { label: "Careers", href: "/about" },
            { label: "Press", href: "/about" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Contact", href: "/contact" },
            { label: "FAQ", href: "/faq" },
            { label: "Shipping", href: "/faq" },
            { label: "Insurance", href: "/faq" },
          ],
        },
      ],
      disclaimer:
        "The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Compounded medications are not FDA-approved and are not evaluated for safety or efficacy by the FDA. GLP-1 medications are prescription only and may not be appropriate for all patients. Individual results vary.",
      copyright: (year: number) =>
        `© ${year} Pepvi Health, Inc. All rights reserved.`,
      legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Telehealth Consent", href: "/terms" },
        { label: "HIPAA Notice", href: "/privacy" },
        { label: "Do Not Sell My Info", href: "/privacy" },
      ],
    },
    pages: {
      about: {
        eyebrow: "About Pepvi",
        title: "Healthcare that actually meets you where you live.",
        lead: "Pepvi was built to close the gap between what modern medicine can do and what most patients actually experience. We combine licensed clinicians, evidence-based protocols, and radically better logistics — so care fits into your life, not the other way around.",
        mission: {
          heading: "Our mission",
          body: "To make personalized, doctor-guided care the default — not a luxury. Every treatment we ship is reviewed by a licensed clinician, sourced from vetted U.S. pharmacies, and matched to real data from your labs and history.",
        },
        story: {
          heading: "How we started",
          body: "Pepvi began after our founders spent years watching family members bounce between rushed appointments, generic prescriptions, and unanswered messages. We built the practice we wished existed: transparent pricing, clinicians who actually respond, and treatments that arrive at your door — not stuck behind a portal.",
        },
        values: [
          {
            title: "Clinician-led, always",
            body: "Every plan is designed and reviewed by licensed U.S. providers. No algorithms writing prescriptions, no rubber-stamp visits.",
          },
          {
            title: "Evidence over hype",
            body: "We only offer protocols backed by real research and real outcomes. If a treatment doesn't clear the bar, it doesn't ship.",
          },
          {
            title: "Honest pricing",
            body: "One clear monthly price. No hidden fees, no surprise bills, no insurance runaround.",
          },
          {
            title: "Care that continues",
            body: "Message your team anytime. Adjust dosing, ask questions, share progress — real people, real replies.",
          },
        ],
        team: {
          eyebrow: "Our leadership",
          title: "Clinicians and operators, aligned around one thing.",
          description:
            "A small, focused team spanning primary care, endocrinology, pharmacy, and product — obsessed with turning good care into an everyday experience.",
          members: [
            {
              name: "Dr. Alina Reyes, MD",
              role: "Chief Medical Officer",
              bio: "Board-certified in internal medicine with a fellowship in metabolic health. Leads Pepvi's clinical protocols and provider training.",
            },
            {
              name: "Marcus Chen, PharmD",
              role: "Head of Pharmacy Operations",
              bio: "20+ years in 503A and 503B compounding. Oversees pharmacy partnerships, quality, and cold-chain logistics.",
            },
            {
              name: "Priya Nair",
              role: "Chief Experience Officer",
              bio: "Ex-product leader from consumer health. Designs the patient journey from intake to renewal.",
            },
            {
              name: "Dr. Jonah Weiss, DO",
              role: "Medical Director, Men's Health",
              bio: "Focus on hormone optimization and preventative medicine. Reviews complex TRT and metabolic cases.",
            },
          ],
        },
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions patients ask us most.",
        description:
          "If you don't see your question below, our care team responds within one business day.",
        items: [
          {
            q: "How does telehealth with Pepvi actually work?",
            a: "You complete a 5-minute intake with your health history and goals. A licensed clinician in your state reviews it (and any labs you upload), then designs a personalized plan. If prescribed, medications ship discreetly from a partner U.S. pharmacy. You message your care team anytime for adjustments or questions.",
          },
          {
            q: "Do I need to have labs done before starting?",
            a: "For many programs — especially hormone therapy, TRT, and peptides — recent lab work is required. If you don't have current results, we can order labs through our partner network in most states. GLP-1 weight-loss programs may require a metabolic panel depending on your history.",
          },
          {
            q: "Are GLP-1 medications like semaglutide and tirzepatide safe?",
            a: "GLP-1 receptor agonists have been used clinically for over a decade. Like all prescriptions, they carry potential side effects (most commonly nausea, especially at higher doses) and are not appropriate for every patient. Your clinician screens for contraindications and adjusts dosing to minimize side effects.",
          },
          {
            q: "How much does Pepvi cost?",
            a: "Programs start at $99/month and include medication, unlimited clinician messaging, and free shipping. Exact pricing depends on the treatment and dosing. There are no hidden fees, and you can pause or cancel anytime.",
          },
          {
            q: "Do you accept insurance?",
            a: "Pepvi operates as a direct-pay telehealth platform, which lets us keep pricing transparent and skip prior-authorization delays. We provide itemized receipts you can submit to an HSA/FSA or your insurer for possible reimbursement.",
          },
          {
            q: "How fast will my medication ship?",
            a: "Once your clinician approves your plan and payment is confirmed, orders typically ship within 2–3 business days. Refills are automated on a schedule you approve, and you'll get tracking as soon as the package leaves the pharmacy.",
          },
          {
            q: "Is my data private?",
            a: "Yes. Pepvi is HIPAA-compliant. Your health data is encrypted in transit and at rest, and it is never sold. See our Privacy Policy for full details on how we collect, store, and share information.",
          },
          {
            q: "Which states does Pepvi serve?",
            a: "Pepvi is available in all 50 U.S. states. Available treatments may vary by state based on local telehealth and prescribing rules.",
          },
          {
            q: "Can I switch or pause my plan?",
            a: "Yes. You can pause, swap medications, or cancel anytime from your patient dashboard. If your clinician recommends a change (for example, adjusting GLP-1 dosing), you'll be notified before your next shipment.",
          },
          {
            q: "What if the medication doesn't work for me?",
            a: "Your clinician will adjust your protocol based on how you respond — that's the whole point. If a treatment is unsafe or clinically inappropriate, we'll pause it and offer alternatives. If you're not clinically eligible during intake, you don't pay.",
          },
          {
            q: "Are the medications FDA-approved?",
            a: "Some medications we ship are FDA-approved commercial products. Others are compounded formulations prepared by licensed 503A or 503B pharmacies. Compounded medications are not evaluated by the FDA for safety or efficacy; your clinician will discuss when a compound is appropriate.",
          },
          {
            q: "Can I use Pepvi if I'm outside the U.S.?",
            a: "Currently Pepvi serves U.S.-based patients only, because our clinicians and pharmacies operate under U.S. licensing. Please check back — we plan to expand.",
          },
        ],
        supportCta: {
          title: "Still have questions?",
          description:
            "Our care team responds within one business day — usually much sooner.",
          button: "Contact us",
        },
      },
      contact: {
        eyebrow: "Contact us",
        title: "We're here to help.",
        description:
          "Reach out with questions about programs, existing prescriptions, billing, or anything else. Our team responds within one business day.",
        form: {
          name: "Your name",
          namePlaceholder: "Jane Doe",
          email: "Email address",
          emailPlaceholder: "you@example.com",
          subject: "Subject",
          subjectPlaceholder: "How can we help?",
          message: "Message",
          messagePlaceholder:
            "Share as much detail as you'd like. Please do not include sensitive health information in this form.",
          submit: "Send message",
          success:
            "Thanks — we received your message and will reply within one business day.",
          privacyNote:
            "By submitting this form you agree to our Privacy Policy. Do not include sensitive medical details here — use your patient portal for clinical questions.",
        },
        hours: {
          title: "Support hours",
          rows: [
            { label: "Monday – Friday", value: "7am – 9pm ET" },
            { label: "Saturday", value: "9am – 6pm ET" },
            { label: "Sunday", value: "10am – 4pm ET" },
            { label: "Clinical messages", value: "Answered 24/7" },
          ],
        },
        channels: [
          { label: "Email", value: "support@medvi.org", href: "mailto:support@medvi.org" },
          { label: "Phone", value: "1-800-MEDVI-RX" },
          { label: "Patient portal", value: "Sign in to message your care team" },
        ],
      },
      privacy: {
        eyebrow: "Privacy Policy",
        title: "How we handle your data.",
        updated: "Last updated: September 13, 2026",
        lead: "Pepvi is a HIPAA-covered telehealth platform. This policy explains what personal and health information we collect, how we use it, when we share it, and the rights you have over it.",
        sections: [
          {
            heading: "1. Information we collect",
            body: [
              "Account details you provide — name, email, phone, date of birth, shipping address, and payment method.",
              "Health information you share during intake, messaging with your clinician, or through uploaded lab results.",
              "Technical data — IP address, device information, and usage analytics collected via cookies and similar technologies.",
            ],
          },
          {
            heading: "2. How we use your information",
            body: [
              "To provide clinical care: matching you with a licensed clinician, generating treatment plans, and fulfilling prescriptions through our partner pharmacies.",
              "To operate the service: account management, billing, shipping, customer support, and security.",
              "To improve our platform: analytics on aggregated, de-identified usage patterns. We do not use your protected health information for advertising.",
            ],
          },
          {
            heading: "3. When we share information",
            body: [
              "With clinicians and partner pharmacies, strictly to deliver your care.",
              "With trusted service providers (payment processors, shipping carriers, cloud infrastructure) under written data-protection agreements.",
              "When required by law, valid legal process, or to protect the safety of patients and the public.",
              "We do not sell your personal or health information.",
            ],
          },
          {
            heading: "4. Data security",
            body: [
              "All data is encrypted in transit (TLS 1.2+) and at rest. Access to protected health information is limited to authorized personnel and audited.",
              "You can enable two-factor authentication for your account at any time.",
            ],
          },
          {
            heading: "5. Your rights",
            body: [
              "You can access, correct, or delete your account information from your patient dashboard or by contacting support.",
              "Residents of California, Colorado, Virginia, and other states with applicable privacy laws have additional rights, including the right to know, delete, and opt out of certain data uses.",
              "For HIPAA-specific rights, see our HIPAA Notice of Privacy Practices.",
            ],
          },
          {
            heading: "6. Cookies",
            body: [
              "We use essential cookies to keep you signed in and secure. Analytics cookies are optional and can be managed via your browser settings.",
            ],
          },
          {
            heading: "7. Contact",
            body: [
              "Privacy questions or requests: privacy@medvi.org. We respond to verified requests within 30 days.",
            ],
          },
        ],
      },
      terms: {
        eyebrow: "Terms & Conditions",
        title: "The terms that govern using Pepvi.",
        updated: "Last updated: September 13, 2026",
        lead: "Please read these Terms of Service carefully. By creating an account or using Pepvi, you agree to be bound by them.",
        sections: [
          {
            heading: "1. Nature of service",
            body: [
              "Pepvi is a telehealth technology platform. Clinical services are provided by independently licensed clinicians. Prescription medications, where clinically appropriate, are dispensed by independently licensed U.S. pharmacies.",
              "Pepvi does not practice medicine. The platform facilitates connections between patients, clinicians, and pharmacies.",
            ],
          },
          {
            heading: "2. Eligibility",
            body: [
              "You must be at least 18 years old and located in a state where our services are available.",
              "You agree to provide accurate and complete health information. Withholding relevant medical information may result in refusal of service or termination of your plan.",
            ],
          },
          {
            heading: "3. No guarantee of treatment",
            body: [
              "Submitting an intake does not guarantee a prescription. Clinicians may decline to prescribe if a treatment is not clinically appropriate for you. If you are not clinically eligible, you will not be charged.",
            ],
          },
          {
            heading: "4. Payments and cancellations",
            body: [
              "Program fees are billed as described at checkout. You may pause or cancel any recurring plan through your patient dashboard at any time before the next scheduled charge.",
              "Once a prescription has been filled and shipped, it cannot be refunded, consistent with pharmacy regulations.",
            ],
          },
          {
            heading: "5. Compounded medications",
            body: [
              "Certain medications provided through Pepvi are compounded by licensed 503A or 503B pharmacies. Compounded drugs are not FDA-approved products and are not evaluated by the FDA for safety, efficacy, or quality.",
            ],
          },
          {
            heading: "6. Emergency use",
            body: [
              "Pepvi is not designed for medical emergencies. If you have a medical emergency, call 911 or go to the nearest emergency room.",
            ],
          },
          {
            heading: "7. Intellectual property",
            body: [
              "All Pepvi content, branding, and software are the property of Pepvi Health, Inc. or its licensors. You may not copy, redistribute, or reverse-engineer any part of the platform.",
            ],
          },
          {
            heading: "8. Limitation of liability",
            body: [
              "To the fullest extent permitted by law, Pepvi is not liable for indirect, incidental, or consequential damages arising from use of the platform. Clinical liability rests with the treating clinician and dispensing pharmacy, as applicable.",
            ],
          },
          {
            heading: "9. Changes to these terms",
            body: [
              "We may update these Terms from time to time. Material changes will be communicated by email or in-product notice at least 14 days before taking effect.",
            ],
          },
          {
            heading: "10. Contact",
            body: [
              "Questions about these Terms: legal@medvi.org.",
            ],
          },
        ],
      },
    },
  },
  de: {
    htmlLang: "de",
    meta: {
      title: "Pepvi — Gesundheitsversorgung, neu gedacht für den Alltag",
      description:
        "Ärztlich geführte Telemedizin für Gewichtsverlust, Hormone, Langlebigkeit, Hautpflege und mehr. Persönliche Betreuung direkt bis vor Ihre Tür.",
      ogTitle: "Pepvi — Gesundheitsversorgung, neu gedacht für den Alltag",
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
      about: "Über uns",
      faq: "FAQ",
      contact: "Kontakt",
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
    programsOverview: {
      eyebrow: "Programme",
      title: "Acht Wege, sich wieder wie Sie selbst zu fühlen.",
      description:
        "Jedes Programm wird von Ärztinnen und Ärzten entwickelt, auf Ihre Laborwerte und Ziele abgestimmt und direkt zu Ihnen nach Hause geliefert — mit einem echten Behandlungsteam an Ihrer Seite.",
      exploreLabel: "Entdecken",
      programs: [
        {
          key: "weightLoss",
          href: "/#weight-loss",
          title: "Gewichtsverlust",
          blurb: "GLP-1-Medikamente mit monatlicher ärztlicher Kontrolle.",
        },
        {
          key: "womensHealth",
          href: "/#womens-health",
          title: "Frauengesundheit",
          blurb: "Bioidentische Hormone und Perimenopause-Betreuung.",
        },
        {
          key: "nutrition",
          href: "/#nutrition",
          title: "Stoffwechselernährung",
          blurb: "Pepvi Meals — von Köchen zubereitet, makro-optimiert.",
        },
        {
          key: "supplements",
          href: "/#supplements",
          title: "Nahrungsergänzung",
          blurb: "Unabhängig geprüfte, klinisch dosierte Formulierungen.",
        },
        {
          key: "mensHealth",
          href: "/#mens-health",
          title: "Männergesundheit",
          blurb: "Testosteron-Optimierung, ED und Stoffwechsel-Betreuung.",
        },
        {
          key: "peptides",
          href: "/#peptides",
          title: "Peptide & Langlebigkeit",
          blurb: "Protokolle für Regeneration, Kognition und Schlaf.",
        },
        {
          key: "hair",
          href: "/#hair",
          title: "Haarwiederherstellung",
          blurb: "Verschreibungspflichtige topische und orale Protokolle.",
        },
        {
          key: "skincare",
          href: "/#skincare",
          title: "Hautpflege",
          blurb: "Individuelle Rezepturen für Textur, Teint und Anti-Aging.",
        },
      ],
    },
    whyPepvi: {
      eyebrow: "Warum Pepvi",
      title: "Echte Betreuung, so wie sie sein sollte.",
      description:
        "Ein modernes Behandlungserlebnis mit approbierten US-Ärztinnen und -Ärzten, klaren Preisen, schnellem Versand und echter Verantwortung — keine Chatbots, kein Nachbestellungs-Marketing.",
      stats: [
        { value: "250.000+", label: "Betreute Patienten" },
        { value: "4,9★", label: "Durchschnittliche Bewertung" },
        { value: "50", label: "Bundesstaaten" },
        { value: "2–3 T.", label: "Typischer Versand" },
      ],
      pillars: [
        {
          title: "Approbierte US-Ärzte",
          body: "Zertifizierte Fachärzte in jedem Bundesstaat — echte Ärztinnen, Nurse Practitioners und Physician Assistants, die Ihre Unterlagen prüfen und persönlich nachfassen.",
        },
        {
          title: "100 % online",
          body: "Anamnese, Labore, Folgetermine und Nachbestellungen — keine Wartezimmer, keine Telefonschleifen. Sie schreiben Ihrem Team direkt aus der App.",
        },
        {
          title: "Klare, transparente Preise",
          body: "Keine Versicherungsspielchen, keine überraschenden Rechnungen. Ein monatlicher Preis umfasst Medikament, Versand und unbegrenzten Support.",
        },
        {
          title: "Lieferung nach Hause",
          body: "Diskrete Verpackung aus zugelassenen US-Rezeptur-Apotheken. Kostenloser Versand, wo nötig temperaturgeführt.",
        },
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
        title: "Pepvi Meals — echte Lebensmittel, entwickelt für Ergebnisse.",
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
      title: "Über 250.000 Menschen vertrauen Pepvi ihre Betreuung an.",
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
          program: "Pepvi Meals",
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
        "Pepvi ist eine Telemedizin-Plattform, die Patienten mit in den USA zugelassenen Ärzten und Partner-Apotheken verbindet. Gesundheit, neu gedacht für den Alltag.",
      partnersLabel: "Apotheken-Partner",
      partnersValue:
        "Zugelassene 503A- & 503B-Rezepturbetriebe · FDA-registriert",
      columns: [
        {
          title: "Behandlungen",
          links: [
            { label: "Gewichtsverlust", href: "/#weight-loss" },
            { label: "Frauengesundheit", href: "/#womens-health" },
            { label: "Männergesundheit", href: "/#mens-health" },
            { label: "Peptide", href: "/#peptides" },
            { label: "Haarwiederherstellung", href: "/#hair" },
            { label: "Hautpflege", href: "/#skincare" },
          ],
        },
        {
          title: "Ernährung",
          links: [
            { label: "Pepvi Meals", href: "/#nutrition" },
            { label: "Nahrungsergänzung", href: "/#supplements" },
            { label: "Ernährungspläne", href: "/#nutrition" },
            { label: "Stoffwechsel-Coaching", href: "/#nutrition" },
          ],
        },
        {
          title: "Unternehmen",
          links: [
            { label: "Über uns", href: "/about" },
            { label: "FAQ", href: "/faq" },
            { label: "Kontakt", href: "/contact" },
            { label: "Karriere", href: "/about" },
            { label: "Presse", href: "/about" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Kontakt", href: "/contact" },
            { label: "FAQ", href: "/faq" },
            { label: "Versand", href: "/faq" },
            { label: "Versicherung", href: "/faq" },
          ],
        },
      ],
      disclaimer:
        "Die Informationen auf dieser Seite dienen ausschließlich Bildungszwecken und ersetzen keine professionelle medizinische Beratung, Diagnose oder Behandlung. Rezeptur-Medikamente sind nicht von der FDA zugelassen und werden von der FDA nicht auf Sicherheit oder Wirksamkeit geprüft. GLP-1-Medikamente sind verschreibungspflichtig und möglicherweise nicht für alle Patienten geeignet. Individuelle Ergebnisse können abweichen.",
      copyright: (year: number) =>
        `© ${year} Pepvi Health, Inc. Alle Rechte vorbehalten.`,
      legal: [
        { label: "Datenschutzerklärung", href: "/privacy" },
        { label: "AGB", href: "/terms" },
        { label: "Einwilligung Telemedizin", href: "/terms" },
        { label: "HIPAA-Hinweis", href: "/privacy" },
        { label: "Daten nicht verkaufen", href: "/privacy" },
      ],
    },
    pages: {
      about: {
        eyebrow: "Über Pepvi",
        title: "Gesundheitsversorgung, die tatsächlich zu Ihrem Leben passt.",
        lead: "Pepvi wurde gegründet, um die Lücke zwischen dem, was moderne Medizin leisten kann, und dem, was Patientinnen und Patienten wirklich erleben, zu schließen. Wir verbinden approbierte Ärzte, evidenzbasierte Protokolle und deutlich bessere Logistik — damit sich Behandlung in Ihren Alltag einfügt, nicht umgekehrt.",
        mission: {
          heading: "Unsere Mission",
          body: "Persönliche, ärztlich geführte Betreuung soll der Standard werden — kein Luxus. Jede Behandlung, die wir versenden, wird von einer approbierten Ärztin oder einem Arzt geprüft, aus geprüften US-Apotheken bezogen und mit Ihren Laborwerten und Ihrer Krankengeschichte abgeglichen.",
        },
        story: {
          heading: "Wie wir angefangen haben",
          body: "Pepvi entstand, nachdem unsere Gründer jahrelang miterlebt haben, wie Angehörige zwischen hastigen Terminen, generischen Rezepten und unbeantworteten Nachrichten hin- und hergeschickt wurden. Wir haben die Praxis aufgebaut, die wir uns selbst gewünscht hätten: transparente Preise, Ärzte, die tatsächlich antworten, und Medikamente, die direkt an die Haustür geliefert werden — nicht hinter einem Portal versteckt.",
        },
        values: [
          {
            title: "Immer ärztlich geführt",
            body: "Jeder Plan wird von approbierten US-Ärzten erstellt und geprüft. Keine Algorithmen, die Rezepte ausstellen, keine Alibi-Termine.",
          },
          {
            title: "Evidenz statt Hype",
            body: "Wir bieten nur Protokolle an, die durch echte Forschung und echte Ergebnisse belegt sind. Was diese Latte nicht schafft, versenden wir nicht.",
          },
          {
            title: "Ehrliche Preise",
            body: "Ein klarer monatlicher Preis. Keine versteckten Gebühren, keine Überraschungsrechnungen, kein Versicherungs-Hickhack.",
          },
          {
            title: "Betreuung, die weitergeht",
            body: "Schreiben Sie Ihrem Team jederzeit. Dosierung anpassen, Fragen stellen, Fortschritte teilen — echte Menschen, echte Antworten.",
          },
        ],
        team: {
          eyebrow: "Unsere Führung",
          title: "Ärzte und Operatoren, ausgerichtet auf ein Ziel.",
          description:
            "Ein kleines, fokussiertes Team aus Hausarztmedizin, Endokrinologie, Apotheke und Produkt — mit dem Anspruch, gute Betreuung zum Alltag zu machen.",
          members: [
            {
              name: "Dr. Alina Reyes, MD",
              role: "Chief Medical Officer",
              bio: "Fachärztin für Innere Medizin mit Fellowship in metabolischer Gesundheit. Leitet die klinischen Protokolle und die Schulung der Ärzte bei Pepvi.",
            },
            {
              name: "Marcus Chen, PharmD",
              role: "Head of Pharmacy Operations",
              bio: "Über 20 Jahre Erfahrung in 503A- und 503B-Rezeptur. Verantwortet Apothekenpartnerschaften, Qualität und Kühlkette.",
            },
            {
              name: "Priya Nair",
              role: "Chief Experience Officer",
              bio: "Zuvor Product Lead im Consumer-Health-Bereich. Gestaltet die Patient-Journey von der Anamnese bis zur Verlängerung.",
            },
            {
              name: "Dr. Jonah Weiss, DO",
              role: "Medical Director, Männergesundheit",
              bio: "Schwerpunkt Hormonoptimierung und Präventivmedizin. Prüft komplexe TRT- und Stoffwechselfälle.",
            },
          ],
        },
      },
      faq: {
        eyebrow: "FAQ",
        title: "Häufig gestellte Fragen.",
        description:
          "Wenn Ihre Frage unten nicht dabei ist, antwortet unser Betreuungsteam innerhalb eines Werktages.",
        items: [
          {
            q: "Wie funktioniert Telemedizin mit Pepvi?",
            a: "Sie füllen einen 5-minütigen Fragebogen zu Krankengeschichte und Zielen aus. Eine in Ihrem Bundesstaat approbierte Ärztin prüft ihn (und ggf. hochgeladene Laborwerte) und erstellt einen persönlichen Plan. Bei einer Verordnung wird das Medikament diskret aus einer Partner-Apotheke in den USA versendet. Ihr Team ist per Nachricht jederzeit erreichbar.",
          },
          {
            q: "Muss ich vor dem Start Laborwerte machen lassen?",
            a: "Für viele Programme — vor allem Hormontherapie, TRT und Peptide — sind aktuelle Laborwerte erforderlich. Wenn Sie keine haben, können wir sie in den meisten Bundesstaaten über unser Partnernetzwerk anordnen. GLP-1-Programme können je nach Vorgeschichte ein Stoffwechsel-Panel voraussetzen.",
          },
          {
            q: "Sind GLP-1-Medikamente wie Semaglutid und Tirzepatid sicher?",
            a: "GLP-1-Rezeptoragonisten werden seit über zehn Jahren klinisch eingesetzt. Wie alle verschreibungspflichtigen Medikamente können sie Nebenwirkungen haben (am häufigsten Übelkeit, besonders bei höheren Dosen) und sind nicht für jede Person geeignet. Ihre Ärztin prüft Kontraindikationen und passt die Dosierung an.",
          },
          {
            q: "Was kostet Pepvi?",
            a: "Programme starten bei 99 USD/Monat und beinhalten Medikament, unbegrenzte ärztliche Nachrichten und kostenlosen Versand. Der genaue Preis hängt von Behandlung und Dosierung ab. Keine versteckten Gebühren; jederzeit pausier- oder kündbar.",
          },
          {
            q: "Nehmen Sie Versicherungen an?",
            a: "Pepvi ist eine Direktzahler-Plattform, damit die Preise transparent bleiben und keine Vorabgenehmigungen die Behandlung verzögern. Wir stellen detaillierte Belege aus, die Sie bei HSA/FSA oder Ihrer Versicherung zur Erstattung einreichen können.",
          },
          {
            q: "Wie schnell wird mein Medikament versendet?",
            a: "Sobald Ihre Ärztin den Plan freigegeben und die Zahlung eingegangen ist, wird die Bestellung in der Regel innerhalb von 2–3 Werktagen versendet. Nachlieferungen erfolgen nach einem von Ihnen freigegebenen Plan, inklusive Sendungsverfolgung.",
          },
          {
            q: "Sind meine Daten geschützt?",
            a: "Ja. Pepvi arbeitet HIPAA-konform. Ihre Gesundheitsdaten werden verschlüsselt übertragen und gespeichert und niemals verkauft. Details finden Sie in unserer Datenschutzerklärung.",
          },
          {
            q: "In welchen Bundesstaaten ist Pepvi verfügbar?",
            a: "Pepvi ist in allen 50 US-Bundesstaaten verfügbar. Die verfügbaren Behandlungen können je nach lokalen Telemedizin- und Verordnungsregeln variieren.",
          },
          {
            q: "Kann ich meinen Plan wechseln oder pausieren?",
            a: "Ja. Sie können Ihren Plan jederzeit über das Patientenportal pausieren, wechseln oder kündigen. Wenn Ihre Ärztin eine Änderung empfiehlt (z. B. Anpassung der GLP-1-Dosis), werden Sie vor der nächsten Lieferung informiert.",
          },
          {
            q: "Was passiert, wenn das Medikament nicht wirkt?",
            a: "Ihre Ärztin passt das Protokoll an — genau dafür sind die Verlaufskontrollen da. Ist eine Behandlung unsicher oder klinisch ungeeignet, wird sie pausiert und Alternativen werden angeboten. Sind Sie im Screening nicht geeignet, entstehen keine Kosten.",
          },
          {
            q: "Sind die Medikamente FDA-zugelassen?",
            a: "Ein Teil der versendeten Medikamente ist FDA-zugelassenes Fertigarzneimittel, ein Teil sind Rezepturen aus zugelassenen 503A- oder 503B-Apotheken. Rezeptur-Medikamente werden von der FDA nicht auf Sicherheit oder Wirksamkeit geprüft; Ihre Ärztin bespricht, wann eine Rezeptur sinnvoll ist.",
          },
          {
            q: "Kann ich Pepvi außerhalb der USA nutzen?",
            a: "Derzeit betreut Pepvi ausschließlich Patientinnen und Patienten in den USA, da unsere Ärzte und Apotheken US-Lizenzen führen. Wir planen eine Expansion — schauen Sie gerne wieder vorbei.",
          },
        ],
        supportCta: {
          title: "Noch Fragen offen?",
          description:
            "Unser Team antwortet innerhalb eines Werktages — meist deutlich schneller.",
          button: "Kontakt aufnehmen",
        },
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Wir helfen Ihnen gerne.",
        description:
          "Schreiben Sie uns bei Fragen zu Programmen, bestehenden Verordnungen, Abrechnung oder allem anderen. Unser Team antwortet innerhalb eines Werktages.",
        form: {
          name: "Ihr Name",
          namePlaceholder: "Max Mustermann",
          email: "E-Mail-Adresse",
          emailPlaceholder: "sie@example.com",
          subject: "Betreff",
          subjectPlaceholder: "Wie können wir helfen?",
          message: "Nachricht",
          messagePlaceholder:
            "Gerne so viele Details wie möglich. Bitte keine sensiblen Gesundheitsdaten in dieses Formular eintragen.",
          submit: "Nachricht senden",
          success:
            "Danke — wir haben Ihre Nachricht erhalten und melden uns innerhalb eines Werktages.",
          privacyNote:
            "Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung. Bitte keine medizinischen Details eintragen — nutzen Sie für klinische Fragen das Patientenportal.",
        },
        hours: {
          title: "Support-Zeiten",
          rows: [
            { label: "Montag – Freitag", value: "7:00 – 21:00 ET" },
            { label: "Samstag", value: "9:00 – 18:00 ET" },
            { label: "Sonntag", value: "10:00 – 16:00 ET" },
            { label: "Klinische Nachrichten", value: "Rund um die Uhr" },
          ],
        },
        channels: [
          { label: "E-Mail", value: "support@medvi.org", href: "mailto:support@medvi.org" },
          { label: "Telefon", value: "1-800-MEDVI-RX" },
          { label: "Patientenportal", value: "Anmelden und Team schreiben" },
        ],
      },
      privacy: {
        eyebrow: "Datenschutzerklärung",
        title: "So gehen wir mit Ihren Daten um.",
        updated: "Zuletzt aktualisiert: 13. September 2026",
        lead: "Pepvi ist eine HIPAA-konforme Telemedizin-Plattform. Diese Erklärung beschreibt, welche personenbezogenen und gesundheitsbezogenen Daten wir erfassen, wie wir sie nutzen, wann wir sie weitergeben und welche Rechte Sie haben.",
        sections: [
          {
            heading: "1. Welche Daten wir erfassen",
            body: [
              "Kontodaten: Name, E-Mail, Telefon, Geburtsdatum, Lieferadresse und Zahlungsmittel.",
              "Gesundheitsdaten aus Anamnese, Nachrichten mit Ihrer Ärztin und hochgeladenen Laborwerten.",
              "Technische Daten: IP-Adresse, Geräteinformationen und Nutzungsdaten über Cookies und ähnliche Technologien.",
            ],
          },
          {
            heading: "2. Wie wir Ihre Daten nutzen",
            body: [
              "Für die klinische Betreuung: Zuweisung zu approbierten Ärzten, Erstellung von Behandlungsplänen und Belieferung durch Partner-Apotheken.",
              "Für den Betrieb: Kontoverwaltung, Abrechnung, Versand, Kundenservice und Sicherheit.",
              "Zur Verbesserung der Plattform: aggregierte, anonymisierte Auswertungen. Wir nutzen keine geschützten Gesundheitsdaten für Werbezwecke.",
            ],
          },
          {
            heading: "3. Wann wir Daten weitergeben",
            body: [
              "An Ärzte und Partner-Apotheken — ausschließlich zur Erbringung Ihrer Behandlung.",
              "An vertrauenswürdige Dienstleister (Zahlungsabwicklung, Versand, Cloud-Infrastruktur) unter schriftlichen Datenschutzverträgen.",
              "Wenn gesetzlich vorgeschrieben, bei rechtmäßigem Verfahren oder zum Schutz von Patienten und Öffentlichkeit.",
              "Wir verkaufen Ihre personenbezogenen oder gesundheitsbezogenen Daten nicht.",
            ],
          },
          {
            heading: "4. Datensicherheit",
            body: [
              "Alle Daten werden bei der Übertragung (TLS 1.2+) und im Speicher verschlüsselt. Der Zugriff auf geschützte Gesundheitsdaten ist auf berechtigtes Personal beschränkt und wird protokolliert.",
              "Sie können jederzeit Zwei-Faktor-Authentifizierung für Ihr Konto aktivieren.",
            ],
          },
          {
            heading: "5. Ihre Rechte",
            body: [
              "Sie können Ihre Kontodaten im Patientenportal einsehen, korrigieren oder löschen — oder unseren Support kontaktieren.",
              "Bewohner Kaliforniens, Colorados, Virginias und weiterer Bundesstaaten mit einschlägigen Datenschutzgesetzen haben zusätzliche Rechte, darunter Auskunft, Löschung und Widerspruch gegen bestimmte Verwendungen.",
              "Zu HIPAA-spezifischen Rechten siehe unseren HIPAA-Datenschutzhinweis.",
            ],
          },
          {
            heading: "6. Cookies",
            body: [
              "Wir setzen essenzielle Cookies ein, um Sie sicher angemeldet zu halten. Analyse-Cookies sind optional und lassen sich in Ihren Browser-Einstellungen verwalten.",
            ],
          },
          {
            heading: "7. Kontakt",
            body: [
              "Datenschutzanfragen: privacy@medvi.org. Wir bearbeiten verifizierte Anfragen innerhalb von 30 Tagen.",
            ],
          },
        ],
      },
      terms: {
        eyebrow: "AGB",
        title: "Nutzungsbedingungen für Pepvi.",
        updated: "Zuletzt aktualisiert: 13. September 2026",
        lead: "Bitte lesen Sie diese Nutzungsbedingungen sorgfältig. Mit der Erstellung eines Kontos oder der Nutzung von Pepvi erklären Sie sich mit ihnen einverstanden.",
        sections: [
          {
            heading: "1. Art der Leistung",
            body: [
              "Pepvi ist eine Telemedizin-Technologieplattform. Klinische Leistungen werden von unabhängig zugelassenen Ärzten erbracht. Verschreibungspflichtige Medikamente werden — sofern klinisch angezeigt — von unabhängig zugelassenen US-Apotheken abgegeben.",
              "Pepvi selbst praktiziert keine Medizin. Die Plattform vermittelt zwischen Patienten, Ärzten und Apotheken.",
            ],
          },
          {
            heading: "2. Voraussetzungen",
            body: [
              "Sie müssen mindestens 18 Jahre alt sein und sich in einem Bundesstaat aufhalten, in dem unsere Leistungen verfügbar sind.",
              "Sie sind verpflichtet, wahrheitsgemäße und vollständige Gesundheitsangaben zu machen. Das Zurückhalten relevanter Informationen kann zur Ablehnung oder Beendigung des Plans führen.",
            ],
          },
          {
            heading: "3. Keine Garantie für Behandlung",
            body: [
              "Die Abgabe einer Anamnese begründet keinen Anspruch auf ein Rezept. Ärzte können eine Verordnung ablehnen, wenn sie klinisch nicht angezeigt ist. Sind Sie nicht geeignet, entstehen keine Kosten.",
            ],
          },
          {
            heading: "4. Zahlungen und Kündigung",
            body: [
              "Programmgebühren werden wie beim Checkout beschrieben abgerechnet. Wiederkehrende Pläne können jederzeit vor der nächsten Buchung im Patientenportal pausiert oder gekündigt werden.",
              "Bereits abgefüllte und versendete Rezepte sind gemäß den Apothekenvorschriften nicht erstattungsfähig.",
            ],
          },
          {
            heading: "5. Rezeptur-Medikamente",
            body: [
              "Bestimmte über Pepvi bereitgestellte Medikamente sind Rezepturen aus zugelassenen 503A- oder 503B-Apotheken. Rezepturen sind keine FDA-zugelassenen Produkte und werden von der FDA nicht auf Sicherheit, Wirksamkeit oder Qualität geprüft.",
            ],
          },
          {
            heading: "6. Notfälle",
            body: [
              "Pepvi ist nicht für medizinische Notfälle vorgesehen. Im Notfall wählen Sie 911 oder suchen die nächstgelegene Notaufnahme auf.",
            ],
          },
          {
            heading: "7. Geistiges Eigentum",
            body: [
              "Alle Inhalte, Marken und Software von Pepvi sind Eigentum von Pepvi Health, Inc. oder ihrer Lizenzgeber. Kopieren, Weiterverbreiten oder Reverse Engineering sind untersagt.",
            ],
          },
          {
            heading: "8. Haftungsbeschränkung",
            body: [
              "Soweit gesetzlich zulässig, haftet Pepvi nicht für indirekte, zufällige oder Folgeschäden aus der Nutzung der Plattform. Die klinische Verantwortung liegt bei der behandelnden Ärztin und der abgebenden Apotheke.",
            ],
          },
          {
            heading: "9. Änderungen dieser Bedingungen",
            body: [
              "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wesentliche Änderungen kündigen wir per E-Mail oder Hinweis in der Anwendung mindestens 14 Tage im Voraus an.",
            ],
          },
          {
            heading: "10. Kontakt",
            body: [
              "Fragen zu diesen Bedingungen: legal@medvi.org.",
            ],
          },
        ],
      },
    },
  },
};

export const defaultLocale: Locale = "en";
