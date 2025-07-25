import serviceImage from '@/assets/pharmacovigilance/risk-management.jpg';
const link = '/services/pharmacovigilance/risk-management';

export default {
  slug: 'risk-management',
  parentSlug: 'pharmacovigilance',
  service_id: 'RMP-PV-002',
  report_type: 'Risk Management Plan (RMP)',
  title: 'Risk Management Plan Services',
  name: 'Risk Management Plan',
  description: 'Expert preparation of EU-RMPs, REMS, and lifecycle management of safety risk strategies.',
  full_description:
    'Indivirtus delivers comprehensive Risk Management Plan (RMP) services, supporting pharmaceutical sponsors across the EU-RMP and US REMS regulatory landscapes. From drafting safety specifications and identifying risks, to designing and implementing risk minimization measures, we manage the entire lifecycle of RMPs to ensure regulatory compliance and patient safety. Our cross-functional expertise ensures seamless integration with your pharmacovigilance system and submission timelines.',
  estimated_duration: '3-5 weeks depending on product complexity',
  deliverables: [
    'EU-RMP and REMS documents (Module VI)',
    'Safety specification & pharmacovigilance plan',
    'Risk minimization measures (RMM)',
    'RMP update tracking & lifecycle support',
  ],
  regulatory_basis: ['ICH E2E', 'EMA GVP Module V', 'FDA REMS Guidance'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Regulatory Affairs'],
  expertise_area: ['Pharmacovigilance', 'Risk Management Plans', 'REMS'],
  is_active: true,
  pageLink: link,
  icon: '📋',
  image: {
    path: serviceImage,
    alt: 'Risk Management Plan document preparation and lifecycle support',
    caption: 'Ensuring patient safety with robust risk mitigation strategies.',
  },
  pageContent: {
    hero: {
      heading: "Risk Management Plans for <span class='halfHeading'>Global Safety</span>",
      tagline: 'Expert RMP and REMS for Compliance and Patient Safety',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Risk Management Plan (RMP) services</strong> provide comprehensive support for pharmaceutical sponsors, crafting EU-RMPs and US REMS to ensure regulatory compliance and patient safety. From risk identification to lifecycle management, we deliver <strong>seamless pharmacovigilance integration</strong> for global submissions.',
    },
    overview: {
      heading: "Mastering Risk <span class='halfHeading'>Management Excellence</span>",
      overviewCards: [
        {
          heading: 'What are RMP Services?',
          detail:
            'Our services include drafting EU-RMPs and US REMS, safety specifications, risk minimization measures, and lifecycle management, ensuring <strong>global pharmacovigilance compliance</strong> and patient safety.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Effective RMPs ensure <strong>patient safety</strong>, regulatory compliance, and risk mitigation, supporting successful submissions and ongoing safety monitoring for global market approvals.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led RMP solutions</strong>, integrating seamlessly with pharmacovigilance systems to ensure compliance and safety across submission timelines.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>RMP Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Risk Management Plan services are led by certified pharmacovigilance experts specializing in <strong>global safety compliance</strong>. We draft EU-RMPs and US REMS, develop safety specifications, design risk minimization measures, and manage RMP updates throughout the product lifecycle.',
        'Our cross-functional approach ensures <strong>audit-ready documentation</strong>, aligning with ICH E2E, EMA GVP Module V, and FDA REMS Guidance, supporting seamless integration with your pharmacovigilance system and regulatory submissions.',
      ],
    },
    deliverables: {
      heading: "Risk Management Plan <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>EU-RMP and REMS Documents (Module VI)</strong>: Comprehensive risk management plans for EU and US compliance.',
        '<strong>Safety Specification & Pharmacovigilance Plan</strong>: Detailed risk identification and monitoring strategies.',
        '<strong>Risk Minimization Measures (RMM)</strong>: Tailored strategies to mitigate identified risks.',
        '<strong>RMP Update Tracking & Lifecycle Support</strong>: Ongoing management for regulatory compliance.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our Risk Management Plan services align with stringent global pharmacovigilance standards, ensuring your documentation is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.',
      ],
      itemList: [
        '<strong>ICH E2E</strong>: Guidelines for pharmacovigilance planning and risk management.',
        '<strong>EMA GVP Module V</strong>: European standards for risk management systems.',
        '<strong>FDA REMS Guidance</strong>: U.S. regulations for risk evaluation and mitigation strategies.',
        '<strong>WHO Pharmacovigilance Guidelines</strong>: Global standards for drug safety monitoring.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our Risk Management Plan services are essential for pharmaceutical sponsors ensuring <strong>drug safety and compliance</strong>. Ideal for EU-RMP and REMS submissions, risk monitoring, and lifecycle management, our solutions support regulatory approvals and patient safety. Key use cases include developing RMPs for <strong>new drug applications</strong>, managing post-market safety updates, and ensuring compliance for global markets.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical sponsors, delivering <strong>expert-led RMP solutions</strong> backed by certified pharmacovigilance experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, robust risk management plans, driving <strong>regulatory success</strong> and patient safety.',
      ],
    },
    cta: {
      heading: "Ready to Enhance Your <span class='halfHeading'>Risk Management?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert RMP Solutions',
      aria: 'Contact us to discuss your RMP and REMS needs',
    },
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Risk Management Plan Inquiry',
    eventLabel: 'RMP & REMS Preparation',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['EU-RMP', 'REMS'],
      certification: 'GVP Module V Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Risk Management Plan',
    description: 'Preparation and lifecycle management of EU-RMPs and REMS for regulatory compliance.',
    serviceType: 'Pharmacovigilance Risk Management',
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
      name: 'Risk Management Plan Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EU-RMP & REMS Preparation',
            description: 'Drafting of EU Risk Management Plans and FDA-compliant REMS strategies for product approval.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Safety Specification',
            description: 'Identification and documentation of known and potential risks as part of RMP Module SVIII.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Risk Minimization Measures',
            description:
              'Development of targeted RMM strategies, including educational materials and controlled distribution plans.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RMP Lifecycle Management',
            description: 'Ongoing updates, revision tracking, and global regulatory coordination for existing RMPs.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Compound-based pricing',
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
        name: 'What is an EU-RMP and when is it required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An EU-RMP (Risk Management Plan) is a mandatory document for all new drug applications in the EU, detailing identified and potential risks, along with plans to minimize them throughout a product’s lifecycle.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does a REMS differ from an EU-RMP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While both aim to manage drug safety risks, REMS (Risk Evaluation and Mitigation Strategy) is required by the FDA for US marketing, whereas EU-RMP follows EMA guidelines. The structure, scope, and enforcement mechanisms differ significantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are risk minimization measures (RMMs)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Risk minimization measures are actions like educational materials, restricted access programs, or communication plans that aim to reduce the likelihood or severity of adverse drug reactions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support updates to existing RMPs post-approval?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide full RMP lifecycle management, including annual revisions, updates based on signal detection, and adaptations to new regulatory requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you help with RMP integration into CTD modules?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We ensure seamless integration of RMPs into CTD Module 1.8.2 for EU submissions and provide corresponding documentation support for US REMS filings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Risk Management Plan services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include drafting EU-RMPs and US REMS, safety specifications, risk minimization measures, and lifecycle management, ensuring pharmacovigilance compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from Risk Management Plan services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical sponsors submitting EU-RMPs or REMS, ensuring drug safety, or managing post-market safety updates benefit from our tailored solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with ICH E2E, EMA GVP Module V, FDA REMS Guidance, and WHO Pharmacovigilance Guidelines, ensuring compliance with global standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive EU-RMP and REMS documents, safety specifications, pharmacovigilance plans, risk minimization measures, and RMP update tracking support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the RMP services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific drug products, safety requirements, and regulatory timelines, ensuring compliant and effective RMP solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support lifecycle management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide ongoing RMP update tracking and lifecycle support, ensuring continuous compliance and integration with your pharmacovigilance system.',
        },
      },
    ],
  },
  meta: {
    title: 'Risk Management Plan (RMP) Services | Pharmacovigilance | Indivirtus',
    description:
      'Indivirtus offers regulatory-compliant RMP and REMS preparation services, including safety specification, risk minimization measures, and complete lifecycle support for global pharmaceutical companies.',
    keywords: [
      'Risk Management Plan',
      'EU-RMP',
      'REMS',
      'Safety Specification',
      'Pharmacovigilance',
      'RMM',
      'RMP lifecycle',
      'Pharma risk mitigation',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Risk Management Plan (RMP) Services | Indivirtus',
      description: 'Global RMP and REMS development and regulatory compliance for safer pharmaceutical products.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Risk Identification & RMM Planning', 'Regulatory RMP/REMS Submission'],
};
