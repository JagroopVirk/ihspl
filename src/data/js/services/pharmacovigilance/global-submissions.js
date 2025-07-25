import serviceImage from "@/assets/pharmacovigilance/global-submissions.jpg";
const link = "/services/pharmacovigilance/global-submissions";

export default {
  slug: "global-submissions",
  parentSlug: "pharmacovigilance",
  service_id: "PV07",
  report_type: "Regulatory Submissions",
  title: "Global Submissions",
  name: "Global Submissions for Pharmacovigilance",
  description:
    "End-to-end support for compliant E2B submissions across global regulatory bodies including FDA, EMA, PMDA, PvPI, and WHO.",
  full_description:
    "Our Global Submissions service ensures seamless, compliant pharmacovigilance data reporting to worldwide regulatory authorities. We handle E2B R2/R3 submissions, gateway configuration, and region-specific filings such as FDA, EMA, PMDA, PvPI, and WHO. With a proven understanding of submission nuances across jurisdictions, we help clients maintain safety compliance and meet stringent pharmacovigilance timelines.",
  estimated_duration: "Ongoing support based on regulatory timelines",
  deliverables: [
    "E2B R2/R3-compliant submission files",
    "Acknowledgment reports from global authorities",
    "Submission tracking logs",
    "Configured PV gateway (where applicable)",
  ],
  regulatory_basis: [
    "ICH E2B (R2/R3)",
    "FDA Adverse Event Reporting System (FAERS)",
    "EMA EudraVigilance requirements",
    "PMDA reporting formats",
    "PvPI and WHO Program standards",
  ],
  requires_data_from_client: true,
  target_industry: ["Pharmaceutical", "Biotech", "Vaccines", "Medical Devices"],
  expertise_area: ["Pharmacovigilance", "Regulatory Affairs"],
  is_active: true,
  pageLink: link,
  icon: "🌍",
  image: {
    path: serviceImage,
    alt: "Global PV submission services illustration",
    caption:
      "Streamlined pharmacovigilance submissions across global authorities",
  },
  pageContent: {
    hero: {
      heading:
        "Global E2B Submissions for <span class='halfHeading'>Pharmacovigilance Compliance</span>",
      tagline: "Seamless Reporting to Worldwide Authorities",
      detail:
        "At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Global Submissions service</strong> ensures compliant E2B R2/R3 pharmacovigilance data reporting to regulatory authorities like FDA, EMA, PMDA, PvPI, and WHO. We manage submissions, gateway configurations, and region-specific requirements, delivering <strong>timely and compliant safety reporting</strong>.",
    },
    overview: {
      heading:
        "Mastering Global <span class='halfHeading'>Submission Excellence</span>",
      overviewCards: [
        {
          heading: "What are Global Submissions Services?",
          detail:
            "Our services handle E2B R2/R3 submissions, gateway configuration, and region-specific filings for FDA, EMA, PMDA, PvPI, and WHO, ensuring <strong>global pharmacovigilance compliance</strong>.",
        },
        {
          heading: "Why is it Critical?",
          detail:
            "Compliant E2B submissions ensure <strong>patient safety</strong>, regulatory adherence, and timely reporting, supporting audit readiness and global pharmacovigilance obligations.",
        },
        {
          heading: "Our Role in Your Success",
          detail:
            "As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led submission solutions</strong>, ensuring seamless, compliant reporting to global regulatory authorities.",
        },
      ],
    },
    approach: {
      heading:
        "Our Expert <span class='halfHeading'>Submissions Approach</span>",
      detail: [
        "At Indivirtus Healthcare Services, our Global Submissions services are led by certified pharmacovigilance specialists with <strong>expertise in global regulatory nuances</strong>. We manage E2B R2/R3 submissions, configure PV gateways, and ensure compliance with region-specific requirements for FDA, EMA, PMDA, PvPI, and WHO.",
        "Our structured approach includes submission tracking and acknowledgment management, delivering <strong>audit-ready reporting solutions</strong> that align with ICH E2B, FAERS, EudraVigilance, and other global standards.",
      ],
    },
    deliverables: {
      heading:
        "Global Submissions <span class='halfHeading'>Deliverables</span>",
      itemList: [
        "<strong>E2B R2/R3-Compliant Submission Files</strong>: Formatted data for global authorities.",
        "<strong>Acknowledgment Reports from Global Authorities</strong>: Confirmation of submission receipt.",
        "<strong>Submission Tracking Logs</strong>: Traceable records of submission activities.",
        "<strong>Configured PV Gateway (where applicable)</strong>: Setup for seamless data exchange.",
      ],
    },
    compliance: {
      heading:
        "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        "Our Global Submissions services align with stringent global pharmacovigilance standards, ensuring your reporting is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.",
      ],
      itemList: [
        "<strong>ICH E2B (R2/R3)</strong>: Guidelines for electronic safety data submission.",
        "<strong>FDA Adverse Event Reporting System (FAERS)</strong>: U.S. standards for adverse event reporting.",
        "<strong>EMA EudraVigilance Requirements</strong>: European standards for PV data submission.",
        "<strong>PMDA Reporting Formats</strong>: Japanese standards for pharmacovigilance reporting.",
        "<strong>PvPI and WHO Program Standards</strong>: Indian and global standards for safety reporting.",
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        "Our Global Submissions services are essential for pharmaceutical companies and MAHs ensuring <strong>compliant safety reporting</strong>. Ideal for E2B submissions, regulatory reporting, and gateway management, our solutions support global pharmacovigilance requirements. Key use cases include submitting ICSRs for <strong>new drug products</strong>, managing post-market surveillance, and ensuring compliance across multiple jurisdictions.",
      ],
    },
    conclusion: {
      heading:
        "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        "Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led submission solutions</strong> backed by certified pharmacovigilance specialists with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.",
        "With a commitment to industry best practices, we empower your organization with compliant, efficient, and traceable submission processes, driving <strong>regulatory success</strong> and patient safety.",
      ],
    },
    cta: {
      heading:
        "Ready to Streamline Your <span class='halfHeading'>Global Submissions?</span>",
      tagline:
        "Partner with Indivirtus Healthcare Services for Expert PV Reporting Solutions",
      aria: "Contact us to discuss your global submission needs",
    },
  },
  gtm: {
    eventCategory: "Pharmacovigilance",
    eventAction: "Accessed Global Submissions",
    eventLabel: "Global Submissions Service",
    customDimensions: {},
    dataLayerPush: {
      reportType: ["Regulatory Submissions"],
      certification: "ICH E2B, GVP Module VI",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Global Submissions for Pharmacovigilance",
    description:
      "Comprehensive pharmacovigilance submission support including E2B R2/R3, EMA, FDA, PMDA, PvPI, WHO filings, and PV gateway setup.",
    serviceType: "Pharmacovigilance Regulatory Submission",
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
      name: "Global Submission Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E2B-Compliant Submissions",
            description:
              "Structured safety data submission to global regulators using E2B R2/R3 format.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "EMA, FDA, PMDA Filings",
            description:
              "Country-specific electronic and manual safety submissions to meet compliance standards.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PvPI & WHO Submissions",
            description:
              "Support for local authority reporting including India PvPI and WHO Programme.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PV Gateway Configuration",
            description:
              "Setup and testing of gateway configurations for automated submission transmission.",
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
        name: "What are E2B R2 and R3 submissions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "E2B R2 and R3 are international formats defined by ICH for electronic transmission of Individual Case Safety Reports (ICSRs) to health authorities. R3 is the latest version with expanded data fields and stricter validation rules.",
        },
      },
      {
        "@type": "Question",
        name: "Which regulatory authorities do you support submissions for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support submissions to major regulatory bodies including the US FDA (FAERS), EMA (EudraVigilance), Japan PMDA, India PvPI, and the WHO global database.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with PV gateway setup and validation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we assist with configuration, testing, and validation of pharmacovigilance gateways for seamless electronic submissions.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide support for post-submission follow-up or queries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our team tracks submission acknowledgments and provides follow-up support in case of validation errors or authority queries.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure submission compliance with different country formats?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team stays updated with evolving regulatory requirements and utilizes validated tools to ensure format-specific compliance across jurisdictions.",
        },
      },
      {
        "@type": "Question",
        name: "What do Global Submissions services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include E2B R2/R3 submissions, PV gateway configuration, region-specific filings for FDA, EMA, PMDA, PvPI, WHO, and submission tracking.",
        },
      },
      {
        "@type": "Question",
        name: "Who benefits from Global Submissions services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical companies and MAHs managing global PV reporting or regulatory submissions benefit from our tailored, compliant solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do these services ensure regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services align with ICH E2B (R2/R3), FAERS, EudraVigilance, PMDA, PvPI, and WHO standards, ensuring global pharmacovigilance compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What deliverables are provided with the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive E2B-compliant submission files, acknowledgment reports, submission tracking logs, and configured PV gateways.",
        },
      },
      {
        "@type": "Question",
        name: "Can the submission services be customized for our needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are tailored to your specific drug products, regulatory jurisdictions, and submission requirements, ensuring compliant solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do the services support global regulatory reporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We manage region-specific filings, configure E2B gateways, and provide tracking logs to ensure timely and compliant reporting to global authorities.",
        },
      },
    ],
  },
  meta: {
    title: "Global Pharmacovigilance Submissions | EMA, FDA, PMDA, WHO",
    description:
      "Indivirtus offers end-to-end global PV submission support including E2B R2/R3 formatting, FDA/EMA/PMDA filings, WHO & PvPI submissions, and gateway setup.",
    keywords: [
      "global pharmacovigilance submissions",
      "E2B R3 submission support",
      "FDA EMA PMDA WHO PvPI submissions",
      "pharmacovigilance gateway configuration",
      "EudraVigilance and FAERS submissions",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "Global Pharmacovigilance Submission Services | Indivirtus",
      description:
        "Regulatory submission support for E2B-compliant reporting to FDA, EMA, PMDA, PvPI, and WHO. Stay compliant with Indivirtus.",
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
    "Regulatory Filing",
    "PV Gateway Setup",
    "ICSR Submission Review",
  ],
};
