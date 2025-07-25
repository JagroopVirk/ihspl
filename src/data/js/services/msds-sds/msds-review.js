import serviceImage from "@/assets/msds-sds/msds-review.jpg";
const link = "/services/msds-sds/msds-review";

export default {
  slug: "msds-review",
  parentSlug: "msds-sds",
  service_id: "MSDS_Review_Update_001",
  report_type: "Safety Documentation",
  title: "MSDS Review & Updating",
  name: "MSDS Review & Updating Services",
  description:
    "Ensure your Material Safety Data Sheets remain compliant and up-to-date with evolving global regulatory standards.",
  full_description:
    "Indivirtus provides expert MSDS review and updating services tailored for pharmaceutical and chemical industries. Our team specializes in converting outdated legacy MSDS formats to the latest GHS-compliant SDS, including periodic updates to meet REACH, OSHA, and country-specific changes. We incorporate version control systems, maintain historical tracking, and integrate REACH UFI (Unique Formula Identifier) codes where applicable, ensuring your documentation stays accurate, traceable, and audit-ready.",
  estimated_duration: "3–7 business days per document",
  deliverables: [
    "Updated GHS-compliant SDS in 16-section format",
    "Version-controlled documentation",
    "REACH UFI inclusion (if applicable)",
    "Audit trail of changes and rationale",
  ],
  regulatory_basis: [
    "GHS – Globally Harmonized System",
    "REACH – Registration, Evaluation, Authorisation and Restriction of Chemicals (EU)",
    "OSHA HCS – Hazard Communication Standard (USA)",
    "IS 17803:2022 – Indian SDS guidelines",
  ],
  requires_data_from_client: true,
  target_industry: ["Pharmaceutical", "Chemical", "Cosmetics", "Biotech"],
  expertise_area: ["Regulatory Documentation", "Chemical Safety", "Toxicology"],
  is_active: true,
  pageLink: link,
  icon: "🧾",
  image: {
    path: serviceImage,
    alt: "MSDS review and updating services for regulatory compliance",
    caption: "Modernize and maintain your safety documentation with Indivirtus",
  },
  pageContent: {
    hero: {
      heading:
        "MSDS Review & Updating for <span class='halfHeading'>Global Compliance</span>",
      tagline: "Keep Your Safety Data Sheets Current and Audit-Ready",
      detail:
        "At Indivirtus Healthcare Services Pvt. Ltd., our <strong>MSDS Review and Updating service</strong> ensures your Material Safety Data Sheets remain compliant with evolving global standards. We convert legacy MSDS to GHS-compliant SDS, incorporate REACH UFI codes, and maintain version control for <strong>accurate, traceable, and audit-ready documentation</strong> tailored to pharmaceutical and chemical industries.",
    },
    overview: {
      heading:
        "Mastering MSDS <span class='halfHeading'>Compliance Updates</span>",
      overviewCards: [
        {
          heading: "What are MSDS Review & Updating Services?",
          detail:
            "Our services provide expert review and updates of MSDS, converting outdated formats to GHS-compliant 16-section SDS, integrating REACH UFI codes, and ensuring compliance with OSHA, REACH, and regional standards like IS 17803:2022.",
        },
        {
          heading: "Why is it Critical?",
          detail:
            "Regular MSDS updates ensure <strong>regulatory compliance</strong>, workplace safety, and audit readiness, adapting to evolving global standards and maintaining accurate hazard communication.",
        },
        {
          heading: "Our Role in Your Success",
          detail:
            "As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led MSDS solutions</strong>, providing accurate, version-controlled documentation to support regulatory compliance and safe operations.",
        },
      ],
    },
    approach: {
      heading:
        "Our Expert <span class='halfHeading'>Review & Updating Approach</span>",
      detail: [
        "At Indivirtus Healthcare Services, our MSDS Review and Updating services are led by certified regulatory experts specializing in <strong>global chemical safety</strong>. We review and convert legacy MSDS to the latest GHS-compliant 16-section SDS, incorporate REACH UFI codes where applicable, and implement version control systems to track changes.",
        "Our rigorous approach includes periodic updates to align with evolving OSHA, REACH, and country-specific regulations like IS 17803:2022, ensuring <strong>audit-ready and compliant documentation</strong> for pharmaceutical and chemical industries.",
      ],
    },
    deliverables: {
      heading:
        "MSDS Review & Updating <span class='halfHeading'>Deliverables</span>",
      itemList: [
        "<strong>Updated GHS-Compliant SDS in 16-Section Format</strong>: Modernized documentation meeting global standards.",
        "<strong>Version-Controlled Documentation</strong>: Traceable records with historical tracking.",
        "<strong>REACH UFI Inclusion (if applicable)</strong>: Integration of Unique Formula Identifier codes for EU compliance.",
        "<strong>Audit Trail of Changes and Rationale</strong>: Detailed documentation of updates for regulatory transparency.",
      ],
    },
    compliance: {
      heading:
        "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        "Our MSDS Review and Updating services align with stringent global and regional standards, ensuring your documentation is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence and safety.",
      ],
      itemList: [
        "<strong>GHS – Globally Harmonized System</strong>: International standard for chemical hazard classification and labeling.",
        "<strong>REACH – Registration, Evaluation, Authorisation and Restriction of Chemicals (EU)</strong>: European regulations for chemical safety and SDS compliance.",
        "<strong>OSHA HCS – Hazard Communication Standard (29 CFR 1910.1200)</strong>: U.S. regulations for workplace safety documentation.",
        "<strong>IS 17803:2022</strong>: Indian guidelines for Safety Data Sheet compliance.",
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        "Our MSDS Review and Updating services are essential for pharmaceutical and chemical manufacturers ensuring <strong>ongoing regulatory compliance</strong>. Ideal for updating legacy documentation, integrating UFI codes, or aligning with new regulations, our solutions support workplace safety and global market requirements. Key use cases include modernizing SDS for <strong>APIs and drug products</strong>, ensuring compliance for EU/US/India markets, and maintaining audit-ready documentation.",
      ],
    },
    conclusion: {
      heading:
        "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        "Indivirtus Healthcare Services is a trusted partner for pharmaceutical and chemical manufacturers, delivering <strong>expert-led MSDS review and updating solutions</strong> backed by certified regulatory experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.",
        "With a commitment to industry best practices, we empower your organization with compliant, up-to-date, and traceable Safety Data Sheets, driving <strong>regulatory success</strong> and workplace safety.",
      ],
    },
    cta: {
      heading:
        "Ready to Update Your <span class='halfHeading'>SDS for Compliance?</span>",
      tagline:
        "Partner with Indivirtus Healthcare Services for Expert Documentation Solutions",
      aria: "Contact us to discuss your MSDS review and updating needs",
    },
  },
  gtm: {
    eventCategory: "MSDS Services",
    eventAction: "MSDS Review & Updating",
    eventLabel: "msds-review",
    customDimensions: {},
    dataLayerPush: {
      reportType: ["MSDS Review", "SDS Update"],
      certification: "GHS, REACH, OSHA",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MSDS Review & Updating Services",
    description:
      "Legacy MSDS to SDS conversion, periodic compliance updates, version tracking, and REACH UFI integration.",
    serviceType: "MSDS Review & Updating",
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
      name: "MSDS Review & Updating Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Legacy MSDS Conversion",
            description:
              "Transform outdated MSDS into modern GHS-compliant SDS.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Periodic MSDS Updates",
            description:
              "Regularly review and update SDS to reflect latest regulatory changes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Version Control & Change Tracking",
            description:
              "Maintain robust change logs and ensure document traceability.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "REACH UFI Integration",
            description:
              "Include Unique Formula Identifier for EU-specific SDS.",
          },
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
        name: "Why is it important to update legacy MSDS documents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Legacy MSDS may not meet current global regulatory standards. Updating ensures compliance with GHS, REACH, OSHA, and national laws, avoiding legal and safety risks.",
        },
      },
      {
        "@type": "Question",
        name: "How often should MSDS be reviewed and updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MSDS should be reviewed at least every 3 years or whenever there are significant formulation or regulatory changes.",
        },
      },
      {
        "@type": "Question",
        name: "Can you convert old MSDS formats into GHS-compliant SDS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in converting outdated MSDS formats into the 16-section GHS-aligned SDS structure in accordance with global norms.",
        },
      },
      {
        "@type": "Question",
        name: "What is REACH UFI and why is it needed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Unique Formula Identifier (UFI) is a European requirement to identify mixtures placed on the market. It enhances poison center response capabilities and is mandatory under CLP Regulation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide version control and change logs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Each updated SDS is version-controlled with detailed change history, ensuring full traceability for audits and regulatory reviews.",
        },
      },
      {
        "@type": "Question",
        name: "What do MSDS Review and Updating services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include converting legacy MSDS to GHS-compliant 16-section SDS, integrating REACH UFI codes, implementing version control, and ensuring compliance with OSHA, REACH, and IS 17803:2022.",
        },
      },
      {
        "@type": "Question",
        name: "Who benefits from MSDS Review and Updating services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical and chemical manufacturers needing to modernize legacy MSDS, ensure ongoing compliance, or support global market requirements benefit from our tailored solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do these services ensure regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services align with GHS, REACH, OSHA HCS (29 CFR 1910.1200), and IS 17803:2022, ensuring compliance with global and regional regulatory standards.",
        },
      },
      {
        "@type": "Question",
        name: "What deliverables are provided with the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive updated GHS-compliant SDS, version-controlled documentation, REACH UFI inclusion (if applicable), and an audit trail of changes and rationale.",
        },
      },
      {
        "@type": "Question",
        name: "Can the MSDS updating services be customized for our needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are tailored to your specific compounds, regulatory requirements, and market needs, ensuring accurate and compliant SDS updates.",
        },
      },
      {
        "@type": "Question",
        name: "How do the services support version control and audit readiness?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement version control systems and provide detailed audit trails of changes, ensuring traceability and compliance for regulatory audits.",
        },
      },
    ],
  },
  meta: {
    title: "MSDS Review & Updating | GHS, REACH, OSHA-Compliant SDS",
    description:
      "Professional services for MSDS review, legacy document conversion, periodic updates, REACH UFI addition, and compliance with GHS/OSHA/REACH.",
    keywords: [
      "MSDS review",
      "SDS update",
      "legacy MSDS conversion",
      "REACH UFI",
      "GHS compliance",
      "OSHA HCS",
      "pharmaceutical safety sheets",
      "chemical regulatory documentation",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "MSDS Review & Updating | GHS, REACH, OSHA-Compliant SDS",
      description:
        "Ensure your safety documentation is compliant and up to date with Indivirtus’s MSDS review and updating services.",
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ["MSDS Conversion", "REACH UFI Integration", "SDS Updates"],
};
