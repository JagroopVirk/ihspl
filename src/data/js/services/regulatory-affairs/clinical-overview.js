import serviceImage from "@/assets/regulatory-affairs/clinical-overview.jpg";
const link = "/services/regulatory-affairs/clinical-overview";

export default {
  slug: "clinical-overview",
  parentSlug: "regulatory-affairs",
  service_id: "REG003",
  report_type: "Clinical / Non-Clinical Overview Reports",
  title: "Clinical & Non-Clinical Overview Services",
  name: "Clinical/Non-Clinical Overview",
  description:
    "Expert preparation of clinical and non-clinical overviews for regulatory submissions including bioequivalence justifications and BCS biowaivers.",
  full_description:
    "Indivirtus provides strategic support in compiling high-quality clinical and non-clinical overview documents for Modules 2.4 (Nonclinical Overview) and 2.5 (Clinical Overview) as per ICH guidelines. Our services include scientific justification for bioequivalence, BCS-based biowaivers (Class I/III), and development of bridging study reports for global submissions. These overviews form the scientific narrative supporting Modules 3–5 and are critical for successful dossier acceptance.",
  estimated_duration: "3–5 weeks depending on data availability and indication",
  deliverables: [
    "Module 2.4 (Nonclinical Overview)",
    "Module 2.5 (Clinical Overview)",
    "Bioequivalence Justification Document",
    "BCS-based Biowaiver Support",
    "Bridging Study Summary Report",
  ],
  regulatory_basis: [
    "ICH M4S",
    "US FDA Guidance on Clinical/Non-Clinical Summaries",
    "EMA and ASEAN guidelines on biowaivers",
    "CDSCO Bioavailability/Bioequivalence norms",
  ],
  requires_data_from_client: true,
  target_industry: ["Pharmaceutical", "Biotech", "Generics"],
  expertise_area: [
    "Regulatory Writing",
    "Clinical Justification",
    "Biowaivers",
  ],
  is_active: true,
  pageLink: link,
  icon: "🧪",
  image: {
    path: serviceImage,
    alt: "Clinical and Non-Clinical Overviews",
    caption:
      "Module 2.4 & 2.5 summaries, bioequivalence justification & BCS biowaiver support",
  },
  pageContent: {
    hero: {
      heading:
        "Clinical & Nonclinical Overviews for <span class='halfHeading'>Regulatory Success</span>",
      tagline: "High-Quality Scientific Narratives for Global Submissions",
      detail:
        "At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Clinical and Nonclinical Overview services</strong> deliver expertly crafted Module 2.4 (Nonclinical Overview) and Module 2.5 (Clinical Overview) documents, along with bioequivalence justifications and BCS biowaiver support. We ensure <strong>ICH-compliant, submission-ready narratives</strong> for global regulatory approvals.",
    },
    overview: {
      heading:
        "Mastering Clinical & Nonclinical <span class='halfHeading'>Narratives</span>",
      overviewCards: [
        {
          heading: "What are Clinical & Nonclinical Overview Services?",
          detail:
            "Our services include preparation of ICH-compliant Module 2.4 and 2.5 documents, bioequivalence justifications, BCS biowaiver support, and bridging study reports, ensuring <strong>robust scientific narratives</strong> for global submissions.",
        },
        {
          heading: "Why is it Critical?",
          detail:
            "High-quality overviews provide the scientific foundation for Modules 3–5, ensuring <strong>regulatory acceptance</strong>, compliance, and streamlined approval processes for pharmaceuticals.",
        },
        {
          heading: "Our Role in Your Success",
          detail:
            "As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led overview solutions</strong>, providing scientifically sound and compliant narratives to support successful dossier submissions.",
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Overview Approach</span>",
      detail: [
        "At Indivirtus Healthcare Services, our Clinical and Nonclinical Overview services are led by certified regulatory and scientific experts with <strong>global submission expertise</strong>. We compile Module 2.4 (Nonclinical Overview) and Module 2.5 (Clinical Overview), develop bioequivalence justifications, and provide BCS biowaiver support for Class I/III drugs.",
        "Our structured approach ensures <strong>submission-ready documents</strong>, aligning with ICH M4S, US FDA, EMA, ASEAN, and CDSCO guidelines, delivering robust narratives and bridging study reports for global regulatory approvals.",
      ],
    },
    deliverables: {
      heading:
        "Clinical & Nonclinical Overview <span class='halfHeading'>Deliverables</span>",
      itemList: [
        "<strong>Module 2.4 (Nonclinical Overview)</strong>: Comprehensive nonclinical summary for regulatory dossiers.",
        "<strong>Module 2.5 (Clinical Overview)</strong>: Detailed clinical summary supporting safety and efficacy.",
        "<strong>Bioequivalence Justification Document</strong>: Scientific rationale for bioequivalence claims.",
        "<strong>BCS-Based Biowaiver Support</strong>: Documentation for Class I/III biowaiver applications.",
        "<strong>Bridging Study Summary Report</strong>: Reports to support global submission requirements.",
      ],
    },
    compliance: {
      heading:
        "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        "Our Clinical and Nonclinical Overview services align with stringent global standards, ensuring your documents are <strong>submission-ready</strong> and compliant with international regulatory expectations. By adhering to industry-leading guidelines, we deliver solutions that enhance approval success.",
      ],
      itemList: [
        "<strong>ICH M4S</strong>: Guidelines for nonclinical and clinical overviews in CTD dossiers.",
        "<strong>US FDA Guidance on Clinical/Non-Clinical Summaries</strong>: U.S. standards for summary documents.",
        "<strong>EMA and ASEAN Guidelines on Biowaivers</strong>: Standards for bioequivalence and biowaiver applications.",
        "<strong>CDSCO Bioavailability/Bioequivalence Norms</strong>: Indian regulations for BA/BE studies.",
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        "Our Clinical and Nonclinical Overview services are essential for pharmaceutical companies preparing <strong>global regulatory submissions</strong>. Ideal for new drugs, generics, and biosimilars, our solutions support dossier acceptance and approval. Key use cases include compiling overviews for <strong>FDA/EMA submissions</strong>, justifying bioequivalence for generics, and securing BCS biowaivers for Class I/III drugs.",
      ],
    },
    conclusion: {
      heading:
        "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        "Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led overview solutions</strong> backed by certified regulatory and scientific professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.",
        "With a commitment to industry best practices, we empower your organization with compliant, high-quality narratives, driving <strong>regulatory success</strong> and market authorization.",
      ],
    },
    cta: {
      heading:
        "Ready to Enhance Your <span class='halfHeading'>Regulatory Dossiers?</span>",
      tagline:
        "Partner with Indivirtus Healthcare Services for Expert Overview Solutions",
      aria: "Contact us to discuss your clinical and nonclinical overview needs",
    },
  },
  gtm: {
    eventCategory: "Clinical Overview Services",
    eventAction: "Submit Request",
    eventLabel: "Clinical/Non-Clinical Module Services",
    dataLayerPush: {
      reportType: ["Clinical / Non-Clinical Overview Reports"],
      modulesPrepared: ["Module 2.4", "Module 2.5"],
      includesBiowaiver: true,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Clinical and Non-Clinical Overview Writing",
    description:
      "Preparation of clinical (Module 2.5) and non-clinical (Module 2.4) overviews including bioequivalence rationale, biowaivers, and bridging study documentation.",
    serviceType: "Regulatory Medical Writing",
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
      name: "Clinical & Non-Clinical Writing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Module 2.4 Preparation",
            description:
              "Preparation of the Nonclinical Overview (Module 2.4) summarizing pharmacology, toxicology, and pharmacokinetics studies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Module 2.5 Preparation",
            description:
              "Preparation of the Clinical Overview (Module 2.5) summarizing efficacy, safety, and risk-benefit analysis.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bioequivalence Justification",
            description:
              "Scientific justification for waiver of in vivo bioequivalence studies for certain formulations or line extensions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BCS Class I/III Biowaivers",
            description:
              "Preparation of BCS-based biowaiver dossiers compliant with ICH, FDA, and EMA guidance for eligible products.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridging Study Reports",
            description:
              "Summarized bridging data across different studies or populations to justify extrapolation of safety and efficacy.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      priceCurrency: ["INR", "USD"],
      price: "Custom quotation based on indication and data availability",
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
        name: "What is included in Module 2.4 and 2.5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Module 2.4 includes the nonclinical overview summarizing pharmacology and toxicology, while Module 2.5 includes the clinical overview with efficacy and safety conclusions.",
        },
      },
      {
        "@type": "Question",
        name: "What are BCS-based biowaivers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BCS-based biowaivers are regulatory provisions that allow waiving in vivo bioequivalence studies for highly soluble, highly permeable (Class I) or rapidly dissolving (Class III) drugs.",
        },
      },
      {
        "@type": "Question",
        name: "Can you justify biowaivers for fixed-dose combinations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we evaluate fixed-dose combination products for eligibility under biowaiver guidance and prepare appropriate justification based on regulatory expectations.",
        },
      },
      {
        "@type": "Question",
        name: "What is a bridging study report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bridging study reports are summaries that link nonclinical or clinical data from different sources to justify product approval in a new population or region.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide literature references and citations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all overviews include updated literature references, citations from global guidance documents, and rationale to support conclusions.",
        },
      },
      {
        "@type": "Question",
        name: "What do Clinical & Nonclinical Overview services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include preparation of Module 2.4 and 2.5 documents, bioequivalence justifications, BCS biowaiver support, and bridging study reports for global submissions.",
        },
      },
      {
        "@type": "Question",
        name: "Who benefits from Clinical & Nonclinical Overview services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pharmaceutical companies preparing regulatory dossiers for new drugs, generics, or biosimilars benefit from our tailored overview solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do these services ensure regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services align with ICH M4S, US FDA, EMA, ASEAN biowaiver guidelines, and CDSCO BA/BE norms, ensuring global regulatory compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What deliverables are provided with the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive Module 2.4 and 2.5 documents, bioequivalence justifications, BCS biowaiver support, and bridging study reports.",
        },
      },
      {
        "@type": "Question",
        name: "Can the overview services be customized for our needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are tailored to your specific product, regulatory requirements, and submission goals, ensuring compliant solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do the services support bioequivalence and biowaiver applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide scientific justifications for bioequivalence and BCS-based biowaiver support for Class I/III drugs, ensuring robust regulatory submissions.",
        },
      },
    ],
  },
  meta: {
    title:
      "Clinical & Non-Clinical Overview | Module 2.4 & 2.5 Writing Services",
    description:
      "Expert preparation of clinical (Module 2.5) and non-clinical (Module 2.4) overviews, including BCS biowaivers and bioequivalence justifications.",
    keywords: [
      "module 2.4 writing",
      "module 2.5 preparation",
      "clinical overview services",
      "non-clinical overview writing",
      "BCS biowaiver support",
      "bioequivalence justification",
      "bridging study report",
      "regulatory overview module preparation",
    ],
    ogTags: {
      type: "service",
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: "Indivirtus",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "Clinical/Non-Clinical Overview Services | Indivirtus",
      description:
        "Strategic Module 2.4 and 2.5 support with biowaiver justification and bridging studies.",
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
    "Clinical/Nonclinical Summary Review",
    "BCS Biowaiver Eligibility Check",
    "Bridging Study Strategy",
    "Regulatory Justification Audit",
  ],
};
