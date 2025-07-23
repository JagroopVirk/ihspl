import serviceImage from '@/assets/pharmacovigilance/literature-monitoring.jpg';
const link = '/services/pharmacovigilance/literature-monitoring';

export default {
  slug: 'literature-monitoring',
  parentSlug: 'pharmacovigilance',
  service_id: 'PHV009',
  report_type: 'Scientific Literature Screening & Regulatory Support',
  title: 'Literature Monitoring Services',
  name: 'Global Scientific Literature Screening for ADRs & Signals',
  description:
    'GVP-compliant scientific literature monitoring for ADR detection, signal identification, and regulatory submission support.',
  full_description:
    'Indivirtus offers comprehensive literature monitoring services designed to meet GVP Module VI requirements. Our team screens global and local literature databases such as Embase and PubMed to identify adverse drug reactions (ADRs), product safety concerns, and emerging signals. We support case intake, data abstraction, narrative drafting, and preparation of submissions for regulatory authorities. With structured workflows and qualified reviewers, we ensure compliance, traceability, and timely detection of relevant publications impacting product safety.',
  estimated_duration: 'Ongoing weekly or monthly basis',
  deliverables: [
    'Literature search log and documentation',
    'ADR case identification reports',
    'Signal detection summaries',
    'Narrative-ready case outputs',
    'Submission-ready case forms or line listings',
  ],
  regulatory_basis: ['GVP Module VI', 'ICH E2D', 'EMA Good Vigilance Practices'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Medical Devices'],
  expertise_area: ['Pharmacovigilance', 'Regulatory Affairs', 'Scientific Writing'],
  is_active: true,
  pageLink: link,
  icon: '📚',
  image: {
    path: serviceImage,
    alt: 'Literature Monitoring and ADR Screening',
    caption: 'Systematic literature screening of PubMed, Embase, and local sources for pharmacovigilance.',
  },
  pageContent: {
    hero: {
      heading: "GVP-Compliant Literature Monitoring for <span class='halfHeading'>Drug Safety</span>",
      tagline: 'Proactive ADR Detection and Regulatory Compliance',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Literature Monitoring service</strong> ensures GVP-compliant screening of global and local databases like Embase and PubMed for adverse drug reactions (ADRs), signals, and safety concerns. We deliver <strong>traceable, submission-ready outputs</strong> to support regulatory compliance and pharmacovigilance.',
    },
    overview: {
      heading: "Mastering Literature <span class='halfHeading'>Monitoring Excellence</span>",
      overviewCards: [
        {
          heading: 'What are Literature Monitoring Services?',
          detail:
            'Our services screen global and local literature databases to identify ADRs, safety concerns, and signals, providing case intake, data abstraction, and submission-ready outputs aligned with <strong>GVP Module VI requirements</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Proactive literature monitoring ensures <strong>patient safety</strong>, timely ADR detection, and regulatory compliance, supporting robust pharmacovigilance and submission readiness.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led literature monitoring</strong>, ensuring compliant, traceable, and timely detection of safety signals for regulatory submissions.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Monitoring Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Literature Monitoring services are led by qualified pharmacovigilance professionals specializing in <strong>global safety compliance</strong>. We screen databases like Embase and PubMed, perform structured data abstraction, draft narratives, and prepare submission-ready outputs.',
        'Our approach uses structured workflows and rigorous review processes, ensuring <strong>compliant and traceable documentation</strong> that aligns with GVP Module VI, ICH E2D, and EMA standards for pharmacovigilance.',
      ],
    },
    deliverables: {
      heading: "Literature Monitoring <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Literature Search Log and Documentation</strong>: Comprehensive records of screening activities.',
        '<strong>ADR Case Identification Reports</strong>: Detailed reports of identified adverse drug reactions.',
        '<strong>Signal Detection Summaries</strong>: Analysis of emerging safety signals.',
        '<strong>Narrative-Ready Case Outputs</strong>: Prepared narratives for regulatory reporting.',
        '<strong>Submission-Ready Case Forms or Line Listings</strong>: Compliant outputs for regulatory authorities.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our Literature Monitoring services align with stringent global pharmacovigilance standards, ensuring your documentation is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.',
      ],
      itemList: [
        '<strong>GVP Module VI</strong>: European standards for adverse event reporting and literature monitoring.',
        '<strong>ICH E2D</strong>: Guidelines for post-approval safety data management.',
        '<strong>EMA Good Vigilance Practices</strong>: European requirements for pharmacovigilance processes.',
        '<strong>WHO Pharmacovigilance Guidelines</strong>: Global standards for safety monitoring.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our Literature Monitoring services are essential for pharmaceutical companies and MAHs ensuring <strong>proactive safety monitoring</strong>. Ideal for ADR detection, signal identification, and regulatory submissions, our solutions support global pharmacovigilance requirements. Key use cases include monitoring literature for <strong>new drug products</strong>, supporting PSUR submissions, and identifying emerging safety signals.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led literature monitoring solutions</strong> backed by certified pharmacovigilance professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, traceable, and timely safety monitoring, driving <strong>regulatory success</strong> and patient safety.',
      ],
    },
    cta: {
      heading: "Ready to Enhance Your <span class='halfHeading'>PV Monitoring?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Literature Solutions',
      aria: 'Contact us to discuss your literature monitoring needs',
    },
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Literature Monitoring Viewed',
    eventLabel: 'Literature Monitoring',
    customDimensions: {
      serviceType: 'Scientific Literature Monitoring',
    },
    dataLayerPush: {
      reportType: ['Literature-based ICSR', 'Signal Detection'],
      certification: 'GVP Module VI Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Global Scientific Literature Screening for ADRs & Signals',
    description:
      'Indivirtus provides weekly and monthly literature monitoring using PubMed, Embase, and local journals for adverse event detection and signal monitoring in line with GVP guidelines.',
    serviceType: 'Literature Monitoring Services',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtus.com',
      logo: 'https://www.indivirtus.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/indivirtus-group-of-companies',
        'https://twitter.com/indivirtus',
        'https://www.facebook.com/Indivirtus',
        'https://www.instagram.com/indivirtus_healthcare',
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: link,
      servicePhone: '+91-9131925456',
      servicePostalAddress: {
        '@type': 'PostalAddress',
        streetAddress: '522, Taj Plaza, TDI city, Sector 118',
        addressLocality: 'Mohali',
        addressRegion: 'Punjab',
        postalCode: '160059',
        addressCountry: 'India',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Literature Monitoring Service Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'GVP Module VI Compliance',
          description:
            'Weekly or monthly screening of global and local scientific literature in accordance with EMA GVP Module VI guidelines.',
        },
        {
          '@type': 'Offer',
          name: 'Embase/PubMed Searches',
          description:
            'Database-specific Boolean queries for drug-event combinations using PubMed, Embase, and other sources.',
        },
        {
          '@type': 'Offer',
          name: 'ADR & Signal Screening',
          description:
            'Identification and documentation of adverse events and potential product safety signals from published content.',
        },
        {
          '@type': 'Offer',
          name: 'Regulatory Submissions',
          description:
            'Preparation of identified ADRs and signal cases for submission to health authorities (CIOMS, MedWatch, line listings).',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Subscription or per-report model',
      url: link,
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often is literature screened for ADRs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Screening frequency is typically weekly or monthly, depending on your regulatory obligations. We can adjust the cadence to align with your product portfolio and compliance needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you monitor both global and local literature sources?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We screen global databases like PubMed and Embase, as well as region-specific or language-specific journals, to ensure full compliance with EMA and local authority expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the identified ADRs formatted for regulatory submission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We provide narrative-ready outputs or direct case entries in formats like CIOMS or MedWatch, ready for submission or integration into your safety database.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support signal detection from literature?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we flag and analyze potential safety signals emerging from literature and prepare structured signal assessment reports based on GVP Module IX.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this service integrated with safety databases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can export outputs in formats compatible with safety databases like Argus, ArisG, or Veeva Vault Safety, and integrate with your internal workflows as needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Literature Monitoring services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include screening Embase/PubMed for ADRs, signal identification, data abstraction, narrative drafting, and submission-ready case forms, aligned with GVP Module VI.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from Literature Monitoring services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical companies and MAHs monitoring ADRs, signals, or preparing regulatory submissions benefit from our proactive, compliant solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with GVP Module VI, ICH E2D, EMA Good Vigilance Practices, and WHO Pharmacovigilance Guidelines, ensuring global compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive literature search logs, ADR case reports, signal detection summaries, narrative-ready outputs, and submission-ready case forms or line listings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the literature monitoring services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific drug products, monitoring needs, and regulatory requirements, ensuring compliant and effective solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide submission-ready case forms, line listings, and narratives to support PSURs and other regulatory submissions, ensuring timely and compliant reporting.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmacovigilance Literature Monitoring Services | Indivirtus',
    description:
      'Compliant literature monitoring using PubMed and Embase for ADRs, signals, and global safety submissions. Weekly screening aligned with GVP Module VI.',
    keywords: [
      'literature monitoring pharma',
      'PubMed screening service',
      'Embase literature ADR search',
      'GVP Module VI compliance',
      'ADR case from literature',
      'scientific literature signal detection',
      'pharmacovigilance database search',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharmacovigilance Literature Monitoring Services | Indivirtus',
      description:
        'Expert support for literature screening of ADRs and signals in compliance with GVP Module VI. Weekly monitoring with submission-ready outputs.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [],
};
