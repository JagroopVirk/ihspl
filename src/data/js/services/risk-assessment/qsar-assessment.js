import serviceImage from "@/assets/risk-assessment/qsar-assessment.jpg";
const link = "/services/risk-assessment/qsar-assessment";

export default {
  slug: "qsar-assessment",
  parentSlug: "risk-assessment",
  service_id: "cro-qsar-assessment",
  report_type: "In Silico (Q)SAR Assessment",
  title: "In Silico (Q)SAR Assessment",
  name: "In Silico (Q)SAR Assessment",
  description:
    "Predict mutagenicity and toxicity using ICH M7-compliant (Q)SAR assessments powered by Derek Nexus and Leadscope.",
  full_description:
    "Our In Silico (Q)SAR Assessment service leverages cutting-edge software tools like Derek Nexus and Leadscope to predict the toxicological properties of pharmaceutical impurities and active substances. This dual-model strategy—combining rule-based and statistical approaches—ensures scientifically sound, ICH M7-compliant outcomes. These assessments reduce reliance on animal testing and help accelerate development timelines while meeting global regulatory expectations.",
  estimated_duration: "3–5 working days",
  deliverables: [
    "ICH M7-compliant (Q)SAR report",
    "Dual-model assessment summary (rule-based + statistical)",
    "Mutagenicity prediction results",
    "Supporting scientific rationale and conclusions",
  ],
  regulatory_basis: [
    "ICH M7 (R1)",
    "OECD QSAR Principles",
    "FDA Guidance on Genotoxic Impurities",
  ],
  requires_data_from_client: true,
  target_industry: ["Pharmaceutical", "API Manufacturing", "Biotech", "CDMOs"],
  expertise_area: [
    "Computational Toxicology",
    "Regulatory Toxicology",
    "Genotoxicity",
  ],
  is_active: true,
  pageLink: link,
  icon: "🧬",
  image: {
    path: serviceImage,
    alt: "QSAR Toxicity Prediction Report",
    caption:
      "Regulatory-compliant in silico assessments using advanced toxicology software.",
  },
  pageContent: {
    hero: {
      heading:
        "In Silico (Q)SAR Assessments for <span class='halfHeading'>Toxicological Safety</span>",
      tagline: "ICH M7-Compliant Predictions with Derek Nexus & Leadscope",
      detail:
        "At Indivirtus Healthcare Services Pvt. Ltd., our <strong>In Silico (Q)SAR Assessment services</strong> utilize Derek Nexus and Leadscope to predict mutagenicity and toxicity of pharmaceutical impurities and active substances. Our dual-model approach ensures <strong>ICH M7-compliant outcomes</strong>, reducing animal testing and accelerating development timelines.",
    },
    overview: {
      heading:
        "Mastering In Silico <span class='halfHeading'>Toxicity Predictions</span>",
      overviewCards: [
        {
          heading: "What are In Silico (Q)SAR Assessment Services?",
          detail:
            "Our services leverage Derek Nexus (rule-based) and Leadscope (statistical) to predict mutagenicity and toxicity, delivering <strong>ICH M7-compliant reports</strong> for pharmaceutical impurities and active substances.",
        },
        {
          heading: "Why is it Critical?",
          detail:
            "(Q)SAR assessments ensure <strong>regulatory compliance</strong>, minimize animal testing, and accelerate development by providing scientifically sound toxicity predictions.",
        },
        {
          heading: "Our Role in Your Success",
          detail:
            "As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led (Q)SAR solutions</strong>, providing robust, compliant predictions to support global regulatory submissions.",
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>(Q)SAR Approach</span>",
      detail: [
        "At Indivirtus Healthcare Services, our In Silico (Q)SAR Assessment services are led by certified toxicology experts with <strong>global regulatory expertise</strong>. We employ a dual-model strategy, combining Derek Nexus (rule-based) and Leadscope (statistical) to predict mutagenicity and toxicity of impurities and active substances.",
        "Our approach ensures <strong>regulator-ready assessments</strong>, aligning with ICH M7 (R1), OECD QSAR Principles, and FDA Guidance on Genotoxic Impurities, delivering reliable outcomes for pharmaceutical development.",
      ],
    },
    deliverables: {
      heading: "In Silico (Q)SAR <span class='halfHeading'>Deliverables</span>",
      itemList: [
        "<strong>ICH M7-Compliant (Q)SAR Report</strong>: Comprehensive toxicity and mutagenicity assessment.",
        "<strong>Dual-Model Assessment Summary</strong>: Combined rule-based and statistical prediction results.",
        "<strong>Mutagenicity Prediction Results</strong>: Detailed outcomes from Derek Nexus and Leadscope.",
        "<strong>Supporting Scientific Rationale and Conclusions</strong>: Robust justification for regulatory submissions.",
      ],
    },
    compliance: {
      heading:
        "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        "Our In Silico (Q)SAR Assessment services align with stringent global standards, ensuring your assessments are <strong>regulator-ready</strong> and compliant with international expectations. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence.",
      ],
      itemList: [
        "<strong>ICH M7 (R1)</strong>: Guidelines for assessment and control of mutagenic impurities.",
        "<strong>OECD QSAR Principles</strong>: Standards for quantitative structure-activity relationship models.",
        "<strong>FDA Guidance on Genotoxic Impurities</strong>: U.S. regulations for impurity safety assessments.",
        "<strong>EMA Guidelines on Genotoxic Impurities</strong>: European standards for toxicity evaluations.",
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        "Our In Silico (Q)SAR Assessment services are essential for pharmaceutical companies ensuring <strong>product safety</strong> and regulatory compliance. Ideal for impurity assessments, active substance profiling, and regulatory submissions, our solutions support global markets. Key use cases include predicting mutagenicity for <strong>new drug impurities</strong>, supporting ICH M7 submissions, and reducing reliance on animal testing.",
      ],
    },
    conclusion: {
      heading:
        "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        "Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led (Q)SAR solutions</strong> backed by certified toxicology professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.",
        "With a commitment to industry best practices, we empower your organization with compliant, robust toxicity predictions, driving <strong>regulatory success</strong> and patient safety.",
      ],
    },
    cta: {
      heading:
        "Ready to Enhance Your <span class='halfHeading'>Toxicity Assessments?</span>",
      tagline:
        "Partner with Indivirtus Healthcare Services for Expert (Q)SAR Solutions",
      aria: "Contact us to discuss your (Q)SAR assessment needs",
    },
  },
  gtm: {
    eventCategory: "In Silico QSAR Assessment",
    eventAction: "QSAR Page View",
    eventLabel: "QSAR Service Detail",
    customDimensions: {},
    dataLayerPush: {
      reportType: ["QSAR Assessment"],
      certification: "ICH M7 (R1) compliant",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "In Silico (Q)SAR Assessment",
    description:
      "In Silico (Q)SAR Assessment services using Derek Nexus and Leadscope for ICH M7-compliant mutagenicity prediction.",
    serviceType: "QSAR Mutagenicity Assessment",
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
      name: "In Silico (Q)SAR Assessment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Advanced Toxicity Predictions with Derek Nexus and Leadscope",
            description:
              "Predictive modeling of potential mutagenicity using licensed expert systems and AI-driven algorithms.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dual-Model Approach (Rule-based & Statistical)",
            description:
              "Combines expert-curated rule sets with machine learning-based models for reliable and reproducible results.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ICH M7-Compliant Mutagenicity Reports",
            description:
              "Regulatory-ready reports designed for submission under ICH M7 guidelines for pharmaceutical impurities.",
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
        name: "What is (Q)SAR in toxicology?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "(Q)SAR—Quantitative Structure-Activity Relationship—is a computational technique that predicts a chemical’s toxicity based on its molecular structure. It's widely used in regulatory risk assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Which tools are used in your QSAR assessments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use validated industry-standard platforms: Derek Nexus for rule-based assessments and Leadscope for statistical model predictions. This dual approach improves confidence in predictions.",
        },
      },
      {
        "@type": "Question",
        name: "Are your QSAR reports compliant with ICH M7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our reports fully adhere to ICH M7 (R1) guidelines and include justification for both software tools used, alongside applicability domain and confidence levels.",
        },
      },
      {
        "@type": "Question",
        name: "How does the dual-model approach improve reliability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By combining rule-based reasoning (from expert knowledge) with statistical analysis (from large datasets), we achieve broader coverage and more scientifically sound results.",
        },
      },
      {
        "@type": "Question",
        name: "Is this service accepted by global regulatory agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our QSAR reports are used in submissions to FDA, EMA, and other global regulatory bodies. They help avoid unnecessary testing and speed up approval processes.",
        },
      },
      {
        "@type": "Question",
        name: "What do In Silico (Q)SAR Assessment services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include ICH M7-compliant (Q)SAR reports, dual-model assessments with Derek Nexus and Leadscope, mutagenicity predictions, and supporting scientific rationales.",
        },
      },
      {
        "@type": "Question",
        name: "Who benefits from In Silico (Q)SAR Assessment services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical companies assessing impurities or active substances for regulatory submissions benefit from our tailored (Q)SAR solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do these services ensure regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services align with ICH M7 (R1), OECD QSAR Principles, FDA, and EMA Genotoxic Impurities guidelines, ensuring global compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What deliverables are provided with the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive ICH M7-compliant reports, dual-model assessment summaries, mutagenicity prediction results, and scientific rationales.",
        },
      },
      {
        "@type": "Question",
        name: "Can the (Q)SAR services be customized for our needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are tailored to your specific impurities, active substances, and regulatory requirements, ensuring compliant assessments.",
        },
      },
      {
        "@type": "Question",
        name: "How do the services support regulatory submissions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide ICH M7-compliant (Q)SAR reports and rationales to support impurity assessments and regulatory submissions, reducing reliance on animal testing.",
        },
      },
    ],
  },
  meta: {
    title: "In Silico QSAR Assessment Services | Indivirtus CRO",
    description:
      "ICH M7-compliant in silico (Q)SAR mutagenicity prediction using Derek Nexus and Leadscope. Regulatory-ready reports for pharmaceutical impurities.",
    keywords: [
      "QSAR assessment",
      "In silico mutagenicity",
      "Derek Nexus Leadscope",
      "ICH M7 report",
      "Computational toxicology",
      "Indivirtus CRO",
      "Regulatory QSAR services",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "In Silico QSAR Assessment Services | Indivirtus CRO",
      description:
        "Regulatory-grade in silico toxicological assessment using Derek Nexus and Leadscope. Fast, reliable, and ICH M7-compliant.",
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
    "QSAR Mutagenicity Prediction",
    "Dual-model Toxicity Assessment",
    "Regulatory In Silico Analysis",
  ],
};
