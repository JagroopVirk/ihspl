import serviceImage from "@/assets/pharmacovigilance/pv-training.jpg";
const link = "/services/pharmacovigilance/pv-training";

export default {
  slug: "pv-training",
  parentSlug: "pharmacovigilance",
  service_id: "PVTR-003",
  report_type: "Pharmacovigilance Training",
  title: "Pharmacovigilance (PV) Training Services",
  name: "PV Training",
  description:
    "Regulatory-compliant pharmacovigilance training programs including GVP, ICH E2E, MAH systems, and custom workflows.",
  full_description:
    "Indivirtus provides specialized pharmacovigilance (PV) training programs tailored to the needs of pharmaceutical companies, marketing authorization holders (MAHs), and regulatory professionals. From foundational GVP and ICH E2E guideline sessions to advanced PV system setup and train-the-trainer workshops, our programs enhance compliance, team competence, and operational efficiency. Custom PV process design is also available to align your internal systems with global best practices.",
  estimated_duration: "1–4 weeks depending on module selection",
  deliverables: [
    "GVP & ICH E2E training modules",
    "PV system setup templates for MAHs",
    "Trainer kits and facilitator guides",
    "Custom PV process SOPs and workflows",
  ],
  regulatory_basis: ["ICH E2E", "EMA GVP Modules I–XV", "21 CFR Part 314"],
  requires_data_from_client: true,
  target_industry: [
    "Pharmaceuticals",
    "Biotech",
    "MAHs",
    "Training Organizations",
  ],
  expertise_area: ["Pharmacovigilance", "Training", "Regulatory Compliance"],
  is_active: true,
  pageLink: link,
  icon: "🎓",
  image: {
    path: serviceImage,
    alt: "Pharmacovigilance training and system design",
    caption: "Upskill your PV team with regulatory-driven training programs.",
  },
  pageContent: {
    hero: {
      heading:
        "Pharmacovigilance Training for <span class='halfHeading'>Global Compliance</span>",
      tagline: "Empower Your Team with Tailored PV Expertise",
      detail:
        "At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Pharmacovigilance (PV) Training services</strong> deliver specialized programs for pharmaceutical companies and MAHs. From GVP and ICH E2E training to custom PV process design, we ensure <strong>regulatory compliance</strong> and operational efficiency through expert-led, tailored solutions.",
    },
    overview: {
      heading:
        "Mastering Pharmacovigilance <span class='halfHeading'>Training</span>",
      overviewCards: [
        {
          heading: "What are Pharmacovigilance Training Services?",
          detail:
            "Our services provide tailored training on GVP, ICH E2E, MAH PV systems, and custom workflows, enhancing team competence and ensuring <strong>global regulatory compliance</strong> for pharmacovigilance operations.",
        },
        {
          heading: "Why is it Critical?",
          detail:
            "Comprehensive PV training ensures <strong>team readiness</strong>, regulatory compliance, and efficient safety monitoring, supporting audit readiness and robust pharmacovigilance systems.",
        },
        {
          heading: "Our Role in Your Success",
          detail:
            "As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led PV training</strong>, empowering teams with the knowledge and tools to maintain compliance and operational excellence.",
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Training Approach</span>",
      detail: [
        "At Indivirtus Healthcare Services, our Pharmacovigilance Training services are led by certified PV experts specializing in <strong>global regulatory standards</strong>. We offer foundational and advanced training modules on GVP and ICH E2E, PV system setup for MAHs, and train-the-trainer workshops, alongside custom SOPs and workflows tailored to your organization.",
        "Our approach combines regulatory expertise with practical applications, delivering <strong>comprehensive and compliant training solutions</strong> that align with global best practices and enhance team competence.",
      ],
    },
    deliverables: {
      heading:
        "Pharmacovigilance Training <span class='halfHeading'>Deliverables</span>",
      itemList: [
        "<strong>GVP & ICH E2E Training Modules</strong>: Comprehensive sessions on global PV standards.",
        "<strong>PV System Setup Templates for MAHs</strong>: Tools for establishing compliant PV systems.",
        "<strong>Trainer Kits and Facilitator Guides</strong>: Resources for internal training scalability.",
        "<strong>Custom PV Process SOPs and Workflows</strong>: Tailored procedures for operational efficiency.",
      ],
    },
    compliance: {
      heading:
        "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        "Our Pharmacovigilance Training services align with stringent global standards, ensuring your team is equipped for <strong>audit-ready compliance</strong> across international markets. By adhering to industry-leading guidelines, we deliver training that enhances regulatory confidence and safety.",
      ],
      itemList: [
        "<strong>ICH E2E</strong>: Guidelines for pharmacovigilance planning and safety management.",
        "<strong>EMA GVP Modules I–XV</strong>: European standards for pharmacovigilance operations.",
        "<strong>21 CFR Part 314</strong>: U.S. regulations for post-marketing drug safety reporting.",
        "<strong>WHO Pharmacovigilance Guidelines</strong>: Global standards for adverse event monitoring.",
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        "Our Pharmacovigilance Training services are essential for pharmaceutical companies and MAHs seeking to ensure <strong>team compliance and efficiency</strong>. Ideal for onboarding, system setup, or process optimization, our solutions support global pharmacovigilance requirements. Key use cases include training teams for <strong>new drug launches</strong>, aligning MAH systems with GVP, and designing custom PV workflows.",
      ],
    },
    conclusion: {
      heading:
        "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        "Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies and MAHs, delivering <strong>expert-led PV training solutions</strong> backed by certified pharmacovigilance experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.",
        "With a commitment to industry best practices, we empower your team with compliant, effective, and tailored training, driving <strong>regulatory success</strong> and pharmacovigilance excellence.",
      ],
    },
    cta: {
      heading:
        "Ready to Enhance Your <span class='halfHeading'>PV Compliance?</span>",
      tagline:
        "Partner with Indivirtus Healthcare Services for Expert Training Solutions",
      aria: "Contact us to discuss your pharmacovigilance training needs",
    },
  },
  gtm: {
    eventCategory: "Pharmacovigilance Services",
    eventAction: "PV Training Inquiry",
    eventLabel: "PV Training Programs",
    customDimensions: {},
    dataLayerPush: {
      reportType: ["PV Training Certificate"],
      certification: "ICH/GVP Compliant",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "PV Training",
    description:
      "Hands-on training in pharmacovigilance including GVP, ICH guidelines, PV system setup, and custom workflow design.",
    serviceType: "Pharmacovigilance Training",
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
      name: "Pharmacovigilance Training Services Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GVP & ICH E2E Training",
            description:
              "Instructor-led or virtual training on EMA GVP Modules and ICH E2E pharmacovigilance guidelines.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PV System Setup for MAHs",
            description:
              "Guidance and SOPs to implement compliant PV systems for Marketing Authorization Holders.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Train-the-Trainer Workshops",
            description:
              "Empowering internal leads with facilitation skills and technical content to roll out PV training internally.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom PV Process Design",
            description:
              "Tailored SOPs, workflows, and document templates for organization-specific PV process integration.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      priceCurrency: ["INR", "USD"],
      price: "Modular-based pricing",
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
        name: "What is covered under GVP and ICH E2E training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The training covers EMA's Good Pharmacovigilance Practices (GVP Modules I–XV) and ICH E2E guidelines, including signal detection, PSURs, and QPPV responsibilities.",
        },
      },
      {
        "@type": "Question",
        name: "Is this training suitable for MAHs setting up their first PV system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide system-level implementation guidance, SOPs, and compliance checklists specifically tailored for Marketing Authorization Holders (MAHs).",
        },
      },
      {
        "@type": "Question",
        name: "What is included in train-the-trainer workshops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These workshops include facilitator handbooks, slide decks, learner assessments, and group activities to enable your internal team to deliver PV training independently.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design PV training specific to our company's processes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer custom PV process design including SOPs, flowcharts, and templates that align with your organization’s specific risk profile and regulatory needs.",
        },
      },
      {
        "@type": "Question",
        name: "Are training sessions available virtually?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our training modules are available in virtual, on-site, and hybrid formats based on your preference and team location.",
        },
      },
      {
        "@type": "Question",
        name: "What do Pharmacovigilance Training services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include GVP and ICH E2E training modules, PV system setup templates, trainer kits, and custom SOPs/workflows tailored for pharmaceutical companies and MAHs.",
        },
      },
      {
        "@type": "Question",
        name: "Who benefits from Pharmacovigilance Training services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical companies, MAHs, and regulatory professionals seeking compliant PV training or custom process design benefit from our tailored solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do these services ensure regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services align with ICH E2E, EMA GVP Modules I–XV, 21 CFR Part 314, and WHO Pharmacovigilance Guidelines, ensuring global regulatory compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What deliverables are provided with the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive GVP/ICH E2E training modules, PV system setup templates, trainer kits, and custom PV process SOPs and workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Can the training services be customized for our needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are tailored to your organization’s specific PV needs, regulatory requirements, and operational goals, ensuring effective and compliant training.",
        },
      },
      {
        "@type": "Question",
        name: "How do the services support MAH PV system setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide templates, SOPs, and training to establish compliant MAH PV systems, aligning with GVP and global pharmacovigilance standards.",
        },
      },
    ],
  },
  meta: {
    title:
      "Pharmacovigilance Training (PV) Services | GVP, ICH, MAH | Indivirtus",
    description:
      "Regulatory-compliant PV training services by Indivirtus, including GVP & ICH training, MAH system setup, train-the-trainer workshops, and custom PV workflow design.",
    keywords: [
      "PV Training",
      "Pharmacovigilance Training",
      "GVP Training",
      "ICH E2E Guidelines",
      "MAH PV Setup",
      "Train-the-Trainer Pharmacovigilance",
      "PV SOP Design",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "PV Training Services | Indivirtus",
      description:
        "Tailored pharmacovigilance training programs for GVP, ICH, MAH system design, and internal rollout.",
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ["PV Knowledge Assessment", "System Readiness Check"],
};
