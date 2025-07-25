import serviceImage from "@/assets/regulatoryAffairs.png";
import ctdActdDossiers from "@/assets/regulatory-affairs/ctd-actd-dossiers.jpg";
import medicalDeviceFiling from "@/assets/regulatory-affairs/medical-device-filing.jpg";
import cepDmfFiling from "@/assets/regulatory-affairs/cep-dmf-filing.jpg";
import clinicalOverview from "@/assets/regulatory-affairs/clinical-overview.jpg";
import regulatoryResponses from "@/assets/regulatory-affairs/regulatory-responses.jpg";
import mahQpServices from "@/assets/regulatory-affairs/mah-qp-services.jpg";
import regulatoryStrategy from "@/assets/regulatory-affairs/regulatory-strategy.jpg";
import lifecycleManagement from "@/assets/regulatory-affairs/lifecycle-management.jpg";
import productRegistration from "@/assets/regulatory-affairs/product-registration.jpg";
const baseLink = "/services/regulatory-affairs";

export default {
  slug: "regulatory-affairs",
  service_id: "cro-regulatory-compliance-device-registration",
  report_type: "Regulatory Dossier & Device Submission",
  title: "Regulatory Compliance & Medical Device Registration",
  name: "Regulatory Dossier Preparation, Filing, and Representation Services",
  description:
    "Expert support in CTD/ACTD dossier preparation, medical device filing, CEP/DMF submissions, and regulatory representation in global markets.",
  full_description:
    "Indivirtus provides strategic and technical support to pharmaceutical and medical device companies for global regulatory submissions. Our services include preparation and submission of CTD/ACTD dossiers, DMF/CEP filings to EDQM, FDA, and Health Canada, medical device registration under MDR 2017, and handling complex responses or remediation activities. We also offer representation as Marketing Authorization Holder (MAH), Qualified Person (QP) services, and EU batch release support. These solutions ensure your products meet market-specific regulations and accelerate time-to-approval.",
  estimated_duration:
    "4–12 weeks depending on region, product class, and documentation readiness",
  deliverables: [
    "CTD/ACTD formatted dossiers (Module 1–5)",
    "Medical device applications (Class A–D)",
    "CEP/DMF filing packages",
    "Clinical/non-clinical overviews & bioequivalence waiver justifications",
    "Regulatory response packages and remediation summaries",
    "MAH/QP declarations, EU batch release certification",
  ],
  regulatory_basis: [
    "ICH M4, ICH M5",
    "EU MDR 2017/745",
    "CDSCO MDR Rules 2017",
    "EDQM, US FDA, Health Canada DMF/CEP regulations",
    "EMA and EU Qualified Person (QP) Guidance",
  ],
  requires_data_from_client: true,
  target_industry: ["Pharmaceuticals", "Biotech", "Medical Devices"],
  expertise_area: [
    "Regulatory Affairs",
    "Device Registration",
    "Dossier Management",
  ],
  is_active: true,
  pageLink: baseLink,
  icon: "📄",
  image: {
    path: serviceImage,
    alt: "Regulatory Compliance and Device Registration Services",
    caption:
      "Regulatory filing, QP services, and medical device registration support from Indivirtus",
  },
  pageContent: {
    hero: {
      heading:
        'Regulatory Compliance & <span class="halfHeading">Medical Device Registration</span>',
      tagline: "Streamlined Solutions for Global Regulatory Success",
    },
    main: {
      heading:
        'Our <span class="halfHeading">Regulatory Compliance Services</span>',
      detail:
        "Our Contract Research Organization (CRO) provides comprehensive regulatory compliance and medical device registration services to help pharmaceutical and medical device companies navigate complex global regulations. From dossier preparation (CTD/ACTD, DMF, CEP) to medical device filings under CDSCO's MDR-2017 rules, we ensure compliance with standards set by FDA, EMA, ICH, and other authorities. Our services are essential for ensuring product approvals, maintaining compliance, and accelerating market entry for pharmaceutical manufacturers, biotech firms, medical device companies, and marketing authorization holders (MAHs).",
    },
    cards: {
      heading: 'Our <span class="halfHeading">Regulatory Expertise</span>',
      services: [
        {
          icon: "📑",
          image: ctdActdDossiers,
          title: "CTD/ACTD Dossier Preparation",
          items: [
            "Modules 1–5 compilation",
            "ASEAN ACTD preparation",
            "eCTD/NeeS publishing",
            "Gap analysis & localization",
          ],
          link: baseLink + "/ctd-actd-dossiers",
        },
        {
          icon: "🩺",
          image: medicalDeviceFiling,
          title: "Medical Device Filing",
          items: [
            "Class A-D classification",
            "TDF/CSDT preparation",
            "Clinical evaluation & RMF",
            "Indian Authorized Agent",
          ],
          link: baseLink + "/medical-device-filing",
        },
        {
          icon: "📄",
          image: cepDmfFiling,
          title: "CEP/DMF Filing",
          items: [
            "DMF Type I-V preparation",
            "CEP submission to EDQM",
            "ASMF for EU filings",
            "Lifecycle management",
          ],
          link: baseLink + "/cep-dmf-filing",
        },
        {
          icon: "🔬",
          image: clinicalOverview,
          title: "Clinical/Non-Clinical Overview",
          items: [
            "Module 2.4 & 2.5 preparation",
            "Bioequivalence justification",
            "BCS Class I/III biowaivers",
            "Bridging study reports",
          ],
          link: baseLink + "/clinical-overview",
        },
        {
          icon: "🛠️",
          image: regulatoryResponses,
          title: "Regulatory Responses",
          items: [
            "FDA 483 & EU LoQ responses",
            "CAPA & remediation planning",
            "Pre-submission support",
            "Labeling updates",
          ],
          link: baseLink + "/regulatory-responses",
        },
        {
          icon: "🤝",
          image: mahQpServices,
          title: "MAH & QP Services",
          items: [
            "EU/UK MAH representation",
            "QP for batch release",
            "PV obligation management",
            "Local EU representative",
          ],
          link: baseLink + "/mah-qp-services",
        },
        {
          icon: "🧠",
          image: regulatoryStrategy,
          title: "Regulatory Strategy",
          items: [
            "Global pathway analysis",
            "Pre-submission consultations",
            "Expedited program support",
            "Regulatory gap assessment",
          ],
          link: baseLink + "/regulatory-strategy",
        },
        {
          icon: "🔄",
          image: lifecycleManagement,
          title: "Lifecycle Management",
          items: [
            "Variation filings",
            "Labeling & renewals",
            "Change control",
            "License renewals",
          ],
          link: baseLink + "/lifecycle-management",
        },
        {
          icon: "📝",
          image: productRegistration,
          title: "Product Registration",
          items: [
            "CDSCO, FDA, EMA filings",
            "ROW market submissions",
            "Local agent support",
            "License tracking",
          ],
          link: baseLink + "/product-registration",
        },
      ],
    },
    process: {
      heading:
        'Our <span class="halfHeading">Regulatory Service Process</span>',
      steps: [
        {
          title: "Regulatory Assessment",
          description:
            "We analyze your product and market goals to map out the appropriate regulatory pathway.",
        },
        {
          title: "Dossier Preparation",
          description:
            "We compile and review CTD/ACTD, DMF, CEP, or medical device dossiers for global submissions.",
        },
        {
          title: "Submission & Liaison",
          description:
            "We submit dossiers to authorities like FDA, EMA, and CDSCO, managing queries and interactions.",
        },
        {
          title: "Remediation & Compliance",
          description:
            "We address regulatory deficiencies, prepare CAPAs, and ensure audit readiness.",
        },
        {
          title: "Post-Approval Support",
          description:
            "We manage variations, renewals, and lifecycle compliance to maintain market authorization.",
        },
      ],
    },
    compliance: {
      heading: 'Compliance & <span class="halfHeading">Standards</span>',
      complianceSections: [
        {
          title: "Regulatory Bodies",
          items: [
            "FDA (U.S. Food and Drug Administration)",
            "EMA (European Medicines Agency)",
            "ICH (International Council for Harmonisation)",
            "CDSCO (Central Drugs Standard Control Organization)",
            "TGA, Health Canada, PMDA",
          ],
        },
        {
          title: "Guidelines & Certifications",
          items: [
            "ICH Q1–Q14",
            "CTD/ACTD Guidelines",
            "MDR-2017 (India)",
            "21 CFR Part 11",
            "ISO 13485 (Medical Devices)",
          ],
        },
        {
          title: "Applications & Industries",
          items: [
            "Pharmaceutical Manufacturing",
            "Biotechnology",
            "Medical Device Manufacturing",
            "Marketing Authorization Holders",
            "Generic & Biosimilar Producers",
          ],
        },
      ],
    },
    conclusion: {
      heading:
        'Why Choose Our <span class="halfHeading">Regulatory Services?</span>',
      detail:
        "Our CRO provides expert regulatory compliance and medical device registration services, ensuring seamless approvals across global markets. With comprehensive dossier preparation, strategic consulting, and post-approval support, we help you navigate complex regulations from FDA, EMA, CDSCO, and beyond. Choose us to accelerate your market entry and maintain compliance with confidence.",
    },
    cta: {
      heading:
        'Ready to Achieve Global <span class="halfHeading">Regulatory Compliance</span>?',
      tagline:
        "Let us streamline your drug and device approvals with precision.",
      aria: "Contact us for your Regulatory Compliance needs.",
    },
  },
  gtm: {
    eventCategory: "CRO Services",
    eventAction: "Regulatory_Device_Submission_Click",
    eventLabel: "Regulatory Compliance Services",
    customDimensions: {},
    dataLayerPush: {
      reportType: [
        "CTD/ACTD Dossiers",
        "Device Registration",
        "DMF/CEP Filing",
      ],
      certification: "Regulatory Compliance",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Regulatory Dossier Preparation & Device Registration",
    description:
      "CRO-backed support for global regulatory compliance, CTD/ACTD dossier preparation, DMF/CEP filings, and medical device submissions under MDR rules.",
    serviceType: "Regulatory & Compliance Consulting",
    provider: {
      "@type": "Organization",
      name: "Indivirtus",
      url: "https://www.indivirtus.com",
      logo: "https://www.indivirtus.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/indivirtus-group-of-companies",
        "https://twitter.com/indivirtus",
        "https://www.facebook.com/Indivirtus",
        "https://www.instagram.com/indivirtus_healthcare",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: baseLink,
      servicePhone: "+91-9131925456",
      servicePostalAddress: {
        "@type": "PostalAddress",
        streetAddress: "522, Taj Plaza, TDI city, Sector 118",
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        postalCode: "160059",
        addressCountry: "India",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Regulatory Submission & Device Filing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CTD/ACTD Dossier Preparation & Submission",
            description:
              "Authoring and compilation of Common/ASEAN Technical Dossiers (Modules 1–5) for global submissions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medical Device Filing to CDSCO",
            description:
              "Preparation and submission of Class A–D medical device applications in compliance with India’s MDR 2017.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CEP/DMF Filing to EDQM/FDA/Health Canada",
            description:
              "Regulatory documentation for APIs and excipients submitted for CEP certification or as DMFs to global agencies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clinical/Non-Clinical Overview & Bio Waiver",
            description:
              "Scientific justifications and summaries supporting bioequivalence waiver requests and regulatory filings.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Regulatory Response & Remediation",
            description:
              "Preparation of written responses to regulatory queries, deficiency letters, and remediation action plans.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MAH Representation, QP & EU Batch Release",
            description:
              "Qualified Person (QP) declarations, MAH representation, and batch release testing site documentation for EU submissions.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      priceCurrency: ["INR", "USD"],
      price: "Compound-based pricing",
      url: baseLink,
      availability: "https://schema.org/InStock",
      businessFunction: "https://schema.org/ProvideService",
    },
  },
  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between CTD and ACTD formats?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CTD (Common Technical Document) is used in most ICH regions, while ACTD (ASEAN CTD) is used in Southeast Asia. Both formats structure regulatory dossiers into modules but differ in layout and regional requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How do you help with CDSCO device registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare and submit device files as per MDR-17 rules, including risk classification, labeling compliance, and technical documentation for Class A to D medical devices.",
        },
      },
      {
        "@type": "Question",
        name: "What is a CEP and how is it different from a DMF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A CEP (Certificate of Suitability) certifies that an API complies with Ph. Eur. monographs. A DMF (Drug Master File) is a more detailed submission used by FDA and Health Canada. We support both formats.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are needed for bio waiver requests?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bio waiver packages include dissolution profiles, BCS classification, and clinical justification to waive in vivo bioequivalence studies—especially for BCS Class I & III drugs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle regulatory queries and responses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we prepare regulatory response packages including scientific justifications, updated documents, and remediation actions in line with agency expectations.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indivirtus act as a Qualified Person (QP) in the EU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide QP declaration services, support MAH representation, and arrange for EU-based testing sites for batch release purposes.",
        },
      },
      {
        "@type": "Question",
        name: "What is involved in CTD/ACTD dossier preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We compile Modules 1–5 for CTD or ACTD formats, including administrative, quality, non-clinical, and clinical data, with gap analysis, localization, and eCTD/NeeS publishing for global submissions.",
        },
      },
      {
        "@type": "Question",
        name: "How do you support medical device registration under MDR-2017?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We handle classification, TDF/CSDT preparation, clinical evaluation reports, risk management files, and submissions (MD-7/MD-14/MD-15) to CDSCO, ensuring compliance with MDR-2017 rules.",
        },
      },
      {
        "@type": "Question",
        name: "What is the role of an MAH or QP in regulatory submissions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our MAH services manage EU/UK regulatory obligations, while our Qualified Person (QP) ensures batch release, import testing, and compliance for clinical trials and marketing authorizations.",
        },
      },
      {
        "@type": "Question",
        name: "How do you manage regulatory responses and remediation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare responses to FDA 483s, EU LoQs, and CDSCO queries, manage CAPAs, and support audit remediation to address compliance gaps and regulatory actions.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries benefit from your regulatory services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical manufacturers, biotech firms, medical device companies, and MAHs benefit by achieving global regulatory approvals and maintaining compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What is the process for DMF/CEP filing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare and submit DMFs (Type I–V) and CEPs to EDQM, FDA, or Health Canada, including open/restricted parts, annual updates, and query response support.",
        },
      },
    ],
  },
  meta: {
    title:
      "Regulatory Compliance & Medical Device Registration Services | Indivirtus",
    description:
      "CTD/ACTD Dossier Preparation, Medical Device Registration under CDSCO MDR 2017, CEP/DMF Filing, and EU Regulatory Representation by Indivirtus CRO team.",
    keywords: [
      "CTD preparation",
      "ACTD dossier",
      "CDSCO device registration",
      "CEP submission",
      "DMF filing",
      "bio waiver",
      "regulatory remediation",
      "QP batch release",
      "MAH representation",
      "MDR 2017 compliance",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${baseLink}.jpg`,
      url: baseLink,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "Regulatory Filing & Device Registration | Indivirtus",
      description:
        "Expert CTD/ACTD filing, CEP/DMF submission, and medical device registration under global regulatory frameworks.",
      image: `https://www.indivirtus.com${baseLink}.jpg`,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${baseLink}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    "Dossier Compilation",
    "Medical Device Filing",
    "CEP/DMF Submissions",
    "Regulatory Remediation",
    "EU QP Representation",
  ],
};
