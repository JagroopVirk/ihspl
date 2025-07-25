import serviceImage from "@/assets/pharmacovigilance/aggregate-reports.jpg";
const link = "/services/pharmacovigilance/aggregate-reports";

export default {
  slug: "aggregate-reports",
  parentSlug: "pharmacovigilance",
  service_id: "PHV-AGGR-REP-001",
  report_type: "PSUR, PBRER, DSUR, ASR, PADER",
  title: "Aggregate Safety Reports",
  name: "Aggregate Reports",
  description:
    "Expert preparation of PSUR, DSUR, and PADER reports as per global PV guidelines.",
  full_description:
    "Aggregate safety reporting is a critical component of pharmacovigilance, helping evaluate a drug’s benefit-risk profile over time. At Indivirtus, we specialize in the preparation, medical review, and quality assurance of all major aggregate reports — including PSURs, PBRERs, PADERs, DSURs, and Annual Safety Reports (ASRs) — in line with ICH E2C(R2) and region-specific requirements. Our scientific and regulatory experts ensure timely submissions, high-quality narratives, and full compliance with global authority expectations.",
  estimated_duration: "4–6 weeks depending on report type",
  deliverables: [
    "Draft & final PSUR/PBRER reports",
    "DSUR or ASR (as applicable)",
    "Region-specific PADERs",
    "Integrated summary tables",
    "Submission-ready XML or eCTD output",
    "Medical review and quality control",
  ],
  regulatory_basis: [
    "ICH E2C(R2)",
    "ICH E2F",
    "FDA, EMA, PMDA Safety Guidelines",
  ],
  requires_data_from_client: true,
  target_industry: ["Pharmaceutical", "Biotech", "Clinical Research", "MAHs"],
  expertise_area: [
    "Pharmacovigilance Writing",
    "Medical Review",
    "Regulatory Submissions",
  ],
  is_active: true,
  pageLink: link,
  icon: "📄",
  image: {
    path: serviceImage,
    alt: "PSUR, PBRER, DSUR Pharmacovigilance Report Services",
    caption: "Aggregate report writing and compliance support by Indivirtus",
  },
  pageContent: {
    hero: {
      heading:
        "Aggregate Safety Reporting for <span class='halfHeading'>Global Compliance</span>",
      tagline: "Expert PSUR, DSUR, and PADER for Drug Safety",
      detail:
        "At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Aggregate Safety Reporting service</strong> delivers expertly crafted PSURs, PBRERs, PADERs, DSURs, and ASRs, ensuring compliance with ICH E2C(R2) and region-specific guidelines. Our scientific and regulatory experts provide <strong>timely, high-quality, submission-ready reports</strong> to support global pharmacovigilance.",
    },
    overview: {
      heading:
        "Mastering Aggregate <span class='halfHeading'>Safety Reporting</span>",
      overviewCards: [
        {
          heading: "What are Aggregate Safety Reporting Services?",
          detail:
            "Our services include preparation, medical review, and quality assurance of PSURs, PBRERs, PADERs, DSURs, and ASRs, ensuring compliance with <strong>global pharmacovigilance standards</strong>.",
        },
        {
          heading: "Why is it Critical?",
          detail:
            "Aggregate safety reports evaluate a drug’s benefit-risk profile, ensuring <strong>patient safety</strong>, regulatory compliance, and timely submissions to global authorities.",
        },
        {
          heading: "Our Role in Your Success",
          detail:
            "As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led reporting solutions</strong>, providing high-quality, compliant reports to support safety surveillance and regulatory submissions.",
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Reporting Approach</span>",
      detail: [
        "At Indivirtus Healthcare Services, our Aggregate Safety Reporting services are led by certified pharmacovigilance and scientific experts with <strong>global regulatory expertise</strong>. We prepare PSURs, PBRERs, PADERs, DSURs, and ASRs with rigorous medical review and quality assurance, ensuring compliance with ICH E2C(R2), ICH E2F, and region-specific requirements.",
        "Our structured approach delivers <strong>submission-ready reports</strong>, integrating high-quality narratives, summary tables, and XML/eCTD outputs, tailored to meet FDA, EMA, PMDA, and other global authority expectations.",
      ],
    },
    deliverables: {
      heading:
        "Aggregate Safety Reporting <span class='halfHeading'>Deliverables</span>",
      itemList: [
        "<strong>Draft & Final PSUR/PBRER Reports</strong>: Comprehensive periodic safety updates.",
        "<strong>DSUR or ASR (as applicable)</strong>: Development or annual safety reports.",
        "<strong>Region-Specific PADERs</strong>: Tailored periodic adverse drug experience reports.",
        "<strong>Integrated Summary Tables</strong>: Consolidated data for benefit-risk analysis.",
        "<strong>Submission-Ready XML or eCTD Output</strong>: Compliant formats for global submissions.",
        "<strong>Medical Review and Quality Control</strong>: Ensured accuracy and compliance.",
      ],
    },
    compliance: {
      heading:
        "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        "Our Aggregate Safety Reporting services align with stringent global pharmacovigilance standards, ensuring your reports are <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.",
      ],
      itemList: [
        "<strong>ICH E2C(R2)</strong>: Guidelines for periodic benefit-risk evaluation reporting.",
        "<strong>ICH E2F</strong>: Standards for development safety update reports.",
        "<strong>FDA, EMA, PMDA Safety Guidelines</strong>: Region-specific requirements for safety reporting.",
        "<strong>WHO Pharmacovigilance Guidelines</strong>: Global standards for safety monitoring.",
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        "Our Aggregate Safety Reporting services are essential for pharmaceutical companies and MAHs ensuring <strong>comprehensive safety monitoring</strong>. Ideal for periodic reporting, development safety updates, and regulatory submissions, our solutions support global pharmacovigilance. Key use cases include preparing PSURs for <strong>marketed drugs</strong>, DSURs for clinical trials, and PADERs for FDA compliance.",
      ],
    },
    conclusion: {
      heading:
        "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        "Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led aggregate reporting solutions</strong> backed by certified pharmacovigilance and scientific experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.",
        "With a commitment to industry best practices, we empower your organization with compliant, high-quality safety reports, driving <strong>regulatory success</strong> and patient safety.",
      ],
    },
    cta: {
      heading:
        "Ready to Streamline Your <span class='halfHeading'>Safety Reporting?</span>",
      tagline:
        "Partner with Indivirtus Healthcare Services for Expert PV Solutions",
      aria: "Contact us to discuss your aggregate safety reporting needs",
    },
  },
  gtm: {
    eventCategory: "Pharmacovigilance Services",
    eventAction: "Aggregate Reports Viewed",
    eventLabel: "Aggregate Reports",
    customDimensions: {},
    dataLayerPush: {
      reportType: ["PSUR", "PBRER", "PADER", "DSUR", "ASR"],
      certification: "ICH E2C(R2), ICH E2F",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aggregate Reports",
    description:
      "Indivirtus offers PSUR, DSUR, PADER, ASR, and PBRER report preparation in compliance with ICH and regulatory authority guidelines.",
    serviceType: "Pharmacovigilance Aggregate Reporting",
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
      serviceUrl: link,
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
      name: "Aggregate Report Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "PSUR, PBRER, PADER",
          description:
            "Preparation of periodic safety reports including PSUR (Periodic Safety Update Reports), PBRER (Periodic Benefit-Risk Evaluation Reports), and US-specific PADERs with end-to-end compliance and submission support.",
        },
        {
          "@type": "Offer",
          name: "DSUR & Annual Safety Reports",
          description:
            "Preparation of Development Safety Update Reports (DSURs) and Annual Safety Reports (ASRs) during clinical development phases.",
        },
        {
          "@type": "Offer",
          name: "ICH E2C(R2) Compliance",
          description:
            "Ensuring all aggregate reports comply with the current ICH E2C(R2) and E2F regulatory standards with proper format, structure, and submission tracking.",
        },
        {
          "@type": "Offer",
          name: "Medical & Quality Review",
          description:
            "Thorough internal quality and medical review of all reports, ensuring scientific accuracy, compliance, and alignment with risk-benefit evaluation.",
        },
      ],
    },
    offers: {
      "@type": "Offer",
      priceCurrency: ["INR", "USD"],
      price: "Compound-based pricing",
      url: link,
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
        name: "What is the difference between PSUR and PBRER?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PBRER is an updated version of PSUR as per ICH E2C(R2) guidelines. While PSURs focused on adverse event reporting, PBRERs include a comprehensive benefit-risk evaluation and cumulative data review.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide PADERs for the US market?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Indivirtus prepares PADERs in compliance with FDA requirements including submission timelines, adverse event summaries, and narrative formatting.",
        },
      },
      {
        "@type": "Question",
        name: "Who is responsible for DSUR preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DSURs are typically prepared by the sponsor during clinical development. Indivirtus supports sponsors by drafting, medically reviewing, and formatting DSURs according to ICH E2F guidelines.",
        },
      },
      {
        "@type": "Question",
        name: "How does Indivirtus ensure quality in aggregate reports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each report undergoes detailed medical and QC review, version tracking, and a two-tier editorial review process to ensure scientific integrity and compliance.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle submission of aggregate reports to regulatory portals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide submission-ready documents in eCTD format and support gateway submission processes such as EVWeb (EMA), ESG (FDA), and others.",
        },
      },
      {
        "@type": "Question",
        name: "What do Aggregate Safety Reporting services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include preparation, medical review, and quality assurance of PSURs, PBRERs, PADERs, DSURs, ASRs, with submission-ready XML/eCTD outputs.",
        },
      },
      {
        "@type": "Question",
        name: "Who benefits from Aggregate Safety Reporting services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical companies and MAHs managing periodic safety reporting, clinical trials, or regulatory submissions benefit from our tailored solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do these services ensure regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services align with ICH E2C(R2), ICH E2F, FDA/EMA/PMDA guidelines, and WHO standards, ensuring global pharmacovigilance compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What deliverables are provided with the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive draft/final PSURs/PBRERs, DSURs/ASRs, region-specific PADERs, summary tables, XML/eCTD outputs, and medical review documentation.",
        },
      },
      {
        "@type": "Question",
        name: "Can the reporting services be customized for our needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are tailored to your specific drug products, regulatory requirements, and submission timelines, ensuring compliant solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do the services support benefit-risk evaluation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide integrated summary tables and high-quality narratives to support comprehensive benefit-risk analysis in PSURs, PBRERs, and DSURs.",
        },
      },
    ],
  },
  meta: {
    title:
      "Aggregate Reports (PSUR, PBRER, DSUR) | Indivirtus Pharmacovigilance Services",
    description:
      "Get compliant PSUR, PBRER, DSUR, and PADER reports with medical review and global regulatory alignment. Reliable aggregate reporting services by Indivirtus.",
    keywords: [
      "PSUR preparation",
      "PBRER writing services",
      "DSUR report service",
      "PADER for FDA",
      "Aggregate reports pharmacovigilance",
      "ICH E2C(R2) compliance",
      "ASR writing support",
      "Medical review of PV reports",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "PSUR & Aggregate Reports | Indivirtus",
      description:
        "High-quality aggregate PV reports — PSUR, PBRER, DSUR — prepared by medical experts, compliant with global guidelines.",
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    "Aggregate Report Gap Analysis",
    "ICH E2C(R2) Compliance Check",
    "Medical Review & Narrative Accuracy",
    "Submission Readiness Assessment",
  ],
};
