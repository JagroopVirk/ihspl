import serviceImage from "@/assets/pharmacovigilance/compliance-audit.jpg";
const link = "/services/pharmacovigilance/compliance-audit";

export default {
  slug: "compliance-audit",
  parentSlug: "pharmacovigilance",
  service_id: "PHV-COMP-AUD-001",
  report_type: "Audit Readiness, CAPA Plans, Training Completion Reports",
  title: "Compliance & Audit Support",
  name: "Compliance & Audit Support",
  description:
    "Ensure continuous pharmacovigilance compliance and be audit-ready with our expert support.",
  full_description:
    "At Indivirtus, we understand the evolving regulatory expectations around pharmacovigilance systems. Our Compliance & Audit Support service ensures your PV system is aligned with global standards through robust monitoring, inspection readiness, CAPA planning, and team training on GVP and ICH E2E guidelines. Whether preparing for a health authority audit or conducting internal reviews, our solutions are tailored to strengthen compliance and build confidence across all functions.",
  estimated_duration: "2–4 weeks depending on scope",
  deliverables: [
    "PV compliance assessment reports",
    "Audit readiness checklist",
    "CAPA plans & tracker",
    "Training session reports",
    "Mock inspection summaries",
  ],
  regulatory_basis: ["GVP Modules I-XVI", "ICH E2E", "EMA/FDA PV Guidance"],
  requires_data_from_client: true,
  target_industry: [
    "Pharmaceutical",
    "Biotech",
    "Clinical Research",
    "Generic Drug Manufacturers",
  ],
  expertise_area: [
    "Pharmacovigilance Compliance",
    "Audit & Inspection Support",
    "Regulatory Training",
  ],
  is_active: true,
  pageLink: link,
  icon: "🕵️‍♂️",
  image: {
    path: serviceImage,
    alt: "Pharmacovigilance Compliance & Audit Support Services",
    caption: "PV audit readiness and compliance assurance by Indivirtus",
  },
  pageContent: {
    hero: {
      heading:
        "Pharmacovigilance Compliance & <span class='halfHeading'>Audit Readiness</span>",
      tagline: "Stay Compliant with Expert PV Support",
      detail:
        "At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Compliance & Audit Support service</strong> ensures your pharmacovigilance system meets global regulatory expectations. Through robust monitoring, inspection readiness, CAPA planning, and tailored training, we deliver <strong>audit-ready solutions</strong> aligned with GVP and ICH E2E guidelines.",
    },
    overview: {
      heading:
        "Mastering PV <span class='halfHeading'>Compliance & Audits</span>",
      overviewCards: [
        {
          heading: "What are Compliance & Audit Support Services?",
          detail:
            "Our services provide PV system monitoring, compliance assessments, audit readiness preparation, CAPA planning, and training on GVP and ICH E2E, ensuring <strong>global pharmacovigilance compliance</strong>.",
        },
        {
          heading: "Why is it Critical?",
          detail:
            "Continuous compliance and audit readiness ensure <strong>regulatory adherence</strong>, patient safety, and operational confidence, minimizing risks during health authority or internal audits.",
        },
        {
          heading: "Our Role in Your Success",
          detail:
            "As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led compliance solutions</strong>, strengthening your PV system for regulatory inspections and operational excellence.",
        },
      ],
    },
    approach: {
      heading:
        "Our Expert <span class='halfHeading'>Compliance Approach</span>",
      detail: [
        "At Indivirtus Healthcare Services, our Compliance & Audit Support services are led by certified pharmacovigilance experts with <strong>global regulatory expertise</strong>. We conduct thorough compliance assessments, prepare audit readiness checklists, develop CAPA plans, and provide tailored training on GVP and ICH E2E guidelines.",
        "Our structured approach ensures <strong>inspection-ready PV systems</strong>, integrating with your operations to align with EMA, FDA, and global standards, supporting both internal reviews and health authority audits.",
      ],
    },
    deliverables: {
      heading:
        "Compliance & Audit Support <span class='halfHeading'>Deliverables</span>",
      itemList: [
        "<strong>PV Compliance Assessment Reports</strong>: Detailed evaluations of your PV system.",
        "<strong>Audit Readiness Checklist</strong>: Comprehensive guide for inspection preparation.",
        "<strong>CAPA Plans & Tracker</strong>: Action plans to address compliance gaps.",
        "<strong>Training Session Reports</strong>: Documentation of GVP/ICH E2E training outcomes.",
        "<strong>Mock Inspection Summaries</strong>: Simulated audit results to ensure readiness.",
      ],
    },
    compliance: {
      heading:
        "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        "Our Compliance & Audit Support services align with stringent global pharmacovigilance standards, ensuring your PV system is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence.",
      ],
      itemList: [
        "<strong>GVP Modules I-XVI</strong>: European standards for pharmacovigilance systems and processes.",
        "<strong>ICH E2E</strong>: Guidelines for pharmacovigilance planning and safety management.",
        "<strong>EMA/FDA PV Guidance</strong>: European and U.S. regulations for pharmacovigilance compliance.",
        "<strong>WHO Pharmacovigilance Guidelines</strong>: Global standards for safety monitoring.",
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        "Our Compliance & Audit Support services are essential for pharmaceutical companies and MAHs ensuring <strong>continuous PV compliance</strong>. Ideal for audit preparation, internal reviews, and CAPA implementation, our solutions support global pharmacovigilance requirements. Key use cases include preparing for <strong>EMA/FDA inspections</strong>, aligning PV systems with GVP, and training teams for compliance.",
      ],
    },
    conclusion: {
      heading:
        "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        "Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led compliance and audit solutions</strong> backed by certified pharmacovigilance professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.",
        "With a commitment to industry best practices, we empower your organization with compliant, robust, and inspection-ready PV systems, driving <strong>regulatory success</strong> and patient safety.",
      ],
    },
    cta: {
      heading:
        "Ready to Ensure <span class='halfHeading'>PV Audit Readiness?</span>",
      tagline:
        "Partner with Indivirtus Healthcare Services for Expert Compliance Solutions",
      aria: "Contact us to discuss your compliance and audit support needs",
    },
  },
  gtm: {
    eventCategory: "Pharmacovigilance Services",
    eventAction: "Compliance Audit Support Accessed",
    eventLabel: "PV Compliance & Audit Support",
    customDimensions: {},
    dataLayerPush: {
      reportType: ["Audit Readiness Report", "CAPA Action Plan"],
      certification: "GVP / ICH Compliance",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Compliance & Audit Support",
    description:
      "Indivirtus provides expert pharmacovigilance compliance monitoring, audit preparation, CAPA management, and regulatory training for global readiness.",
    serviceType: "Pharmacovigilance Compliance and Audit Support",
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
      name: "Compliance & Audit Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "PV Compliance Monitoring",
          description:
            "Ongoing monitoring of PV operations against GVP and ICH standards, including periodic review and risk-based assessments.",
        },
        {
          "@type": "Offer",
          name: "Audit/Inspection Preparation",
          description:
            "Mock audits, gap analysis, document review, and inspection training to ensure readiness for regulatory audits.",
        },
        {
          "@type": "Offer",
          name: "CAPA Management",
          description:
            "Design, implementation, and follow-up of corrective and preventive actions post-inspection or deviation events.",
        },
        {
          "@type": "Offer",
          name: "GVP & ICH E2E Training",
          description:
            "Customized training programs on Good Pharmacovigilance Practices and ICH E2E life-cycle safety management.",
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
        name: "What does PV compliance monitoring include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It includes ongoing checks of your pharmacovigilance system to ensure it aligns with regulatory requirements, focusing on SOPs, case processing, risk management, and periodic safety update reports (PSURs).",
        },
      },
      {
        "@type": "Question",
        name: "How can I prepare for a pharmacovigilance inspection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support clients with mock inspections, gap assessments, document reviews, training, and strategic advice to ensure full preparedness for EMA, FDA, or local authority audits.",
        },
      },
      {
        "@type": "Question",
        name: "What’s included in CAPA management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our CAPA services include root cause analysis, CAPA plan drafting, implementation monitoring, effectiveness checks, and tracking systems to prevent recurrence of compliance issues.",
        },
      },
      {
        "@type": "Question",
        name: "Is GVP training mandatory for all staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, staff involved in pharmacovigilance activities must be trained on GVP modules relevant to their roles. We provide role-based training covering modules I to XVI.",
        },
      },
      {
        "@type": "Question",
        name: "Can Indivirtus help with post-audit remediation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We assist with CAPA execution, documentation corrections, retraining, and responding to inspection findings to ensure compliance restoration.",
        },
      },
      {
        "@type": "Question",
        name: "What do Compliance & Audit Support services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include PV compliance assessments, audit readiness checklists, CAPA planning, GVP/ICH E2E training, and mock inspection summaries.",
        },
      },
      {
        "@type": "Question",
        name: "Who benefits from Compliance & Audit Support services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical companies and MAHs preparing for health authority audits or conducting internal PV reviews benefit from our tailored solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do these services ensure regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services align with GVP Modules I-XVI, ICH E2E, EMA/FDA PV Guidance, and WHO Pharmacovigilance Guidelines, ensuring global compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What deliverables are provided with the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive compliance assessment reports, audit readiness checklists, CAPA plans, training session reports, and mock inspection summaries.",
        },
      },
      {
        "@type": "Question",
        name: "Can the compliance services be customized for our needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are tailored to your specific PV system, regulatory requirements, and audit goals, ensuring compliant and effective solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do the services support audit readiness?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide checklists, CAPA plans, mock inspections, and training to ensure your PV system is prepared for health authority or internal audits.",
        },
      },
    ],
  },
  meta: {
    title: "Compliance & Audit Support for Pharmacovigilance | Indivirtus",
    description:
      "Be audit-ready and compliant with Indivirtus PV compliance monitoring, mock inspections, CAPA management, and GVP training. Trusted CRO support for global pharmacovigilance.",
    keywords: [
      "pharmacovigilance compliance",
      "pv audit support",
      "mock inspection PV",
      "GVP training",
      "CAPA management PV",
      "pharma audit readiness",
      "PV inspection support",
      "ICH E2E pharmacovigilance",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "Compliance & Audit Support | Indivirtus CRO",
      description:
        "Audit preparedness and PV compliance made seamless. Get GVP-trained support for inspections and CAPA.",
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
    "PV Compliance Gap Assessment",
    "Audit Readiness Mock Inspection",
    "CAPA Effectiveness Audit",
    "Training Effectiveness Evaluation",
  ],
};
