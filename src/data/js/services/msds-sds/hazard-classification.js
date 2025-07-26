import serviceImage from '@/assets/msds-sds/hazard-classification.jpg';
const link = '/services/msds-sds/hazard-classification';

export default {
  slug: 'hazard-classification',
  parentSlug: 'msds-sds',
  service_id: 'HC-MSDS-007',
  report_type: 'GHS Hazard & Labeling Compliance',
  title: 'Hazard Classification & Labeling',
  name: 'Hazard Classification & Labeling',
  description:
    'Comprehensive GHS-compliant hazard classification and labeling services including pictograms, statements, and barcode systems.',
  full_description:
    'Our Hazard Classification & Labeling service supports pharmaceutical and chemical manufacturers with accurate GHS hazard assessments, label generation, and container-specific compliance. From evaluating intrinsic hazards to assigning appropriate pictograms and H/P-statements, we ensure your primary and secondary packaging meets regulatory expectations across global markets. Serialization and barcoding are integrated to support traceability and safety at every step.',
  estimated_duration: '5–10 working days',
  deliverables: [
    'GHS hazard classification report',
    'Pictogram and H/P-statement matrix',
    'Label template for primary and secondary containers',
    'Serialization/barcoding strategy (if applicable)',
    'Regulatory compliance checklist',
  ],
  regulatory_basis: [
    'UN GHS (Rev. 9)',
    'OSHA Hazard Communication Standard (HCS)',
    'EU CLP Regulation (EC No 1272/2008)',
    'Canadian WHMIS 2015',
    'India IS 17803:2022',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'API Manufacturers', 'Chemical Industry', 'Contract Manufacturers'],
  expertise_area: ['GHS Compliance', 'Hazard Communication', 'Labeling and Serialization', 'Packaging Compliance'],
  is_active: true,
  pageLink: link,
  icon: '⚠️',
  image: {
    path: serviceImage,
    alt: 'GHS pictograms and hazard label on pharmaceutical containers',
    caption: 'GHS hazard labels with pictograms for regulated pharmaceutical containers.',
  },
  pageContent: {
    hero: {
      heading: "GHS-Compliant Hazard Classification & <span class='halfHeading'>Labeling</span>",
      tagline: 'Ensure Safe Packaging with Precise Hazard Communication',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Hazard Classification & Labeling service</strong> delivers accurate GHS-compliant assessments and labeling solutions for pharmaceutical and chemical manufacturers. From hazard evaluations to pictograms, H/P-statements, and serialization, we ensure <strong>regulatory-compliant packaging</strong> for global market safety and traceability.',
    },
    overview: {
      heading: "Mastering Hazard <span class='halfHeading'>Classification & Labeling</span>",
      overviewCards: [
        {
          heading: 'What are Hazard Classification & Labeling Services?',
          detail:
            'Our services provide comprehensive GHS hazard assessments, pictogram and H/P-statement assignments, label generation, and serialization/barcoding for primary and secondary containers, ensuring <strong>global regulatory compliance</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Accurate hazard classification and labeling ensure <strong>workplace safety</strong>, regulatory compliance, and effective hazard communication, supporting safe handling and global market approvals.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led labeling solutions</strong>, providing precise, compliant documentation and packaging designs to streamline regulatory compliance and ensure safety.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Labeling Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Hazard Classification & Labeling services are led by certified regulatory experts specializing in <strong>GHS compliance</strong>. We evaluate intrinsic hazards, assign appropriate pictograms and H/P-statements, design compliant label templates, and integrate serialization/barcoding for traceability.',
        'Our tailored approach ensures <strong>accurate and compliant labeling</strong>, aligning with UN GHS, OSHA HCS, EU CLP, WHMIS, and India IS 17803:2022, supporting safe packaging and regulatory acceptance across global markets.',
      ],
    },
    deliverables: {
      heading: "Hazard Classification & Labeling <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>GHS Hazard Classification Report</strong>: Detailed assessment of compound hazards.',
        '<strong>Pictogram and H/P-Statement Matrix</strong>: Precise hazard and precautionary statements.',
        '<strong>Label Template for Primary and Secondary Containers</strong>: Compliant designs for packaging.',
        '<strong>Serialization/Barcoding Strategy (if applicable)</strong>: Tools for traceability and compliance.',
        '<strong>Regulatory Compliance Checklist</strong>: Guide to ensure adherence to global standards.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our Hazard Classification & Labeling services align with stringent global and regional standards, ensuring your packaging is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.',
      ],
      itemList: [
        '<strong>UN GHS (Rev. 9)</strong>: Global standard for chemical hazard classification and labeling.',
        '<strong>OSHA Hazard Communication Standard (29 CFR 1910.1200)</strong>: U.S. regulations for workplace safety labeling.',
        '<strong>EU CLP Regulation (EC No 1272/2008)</strong>: European standards for classification, labeling, and packaging.',
        '<strong>Canadian WHMIS 2015</strong>: Canadian standards for hazardous materials labeling.',
        '<strong>India IS 17803:2022</strong>: Indian guidelines for chemical safety and labeling compliance.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our Hazard Classification & Labeling services are essential for pharmaceutical and chemical manufacturers requiring <strong>compliant packaging</strong> for global markets. Ideal for hazard communication, regulatory submissions, and supply chain traceability, our solutions support safe handling and compliance. Key use cases include labeling <strong>APIs and drug products</strong>, ensuring compliance for EU/US/Canada/India markets, and integrating serialization for global distribution.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical and chemical manufacturers, delivering <strong>expert-led hazard classification and labeling solutions</strong> backed by certified regulatory experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, accurate, and traceable labeling, driving <strong>regulatory success</strong> and workplace safety.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>GHS-Compliant Labeling?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Hazard Solutions',
      aria: 'Contact us to discuss your hazard classification and labeling needs',
    },
  },
  gtm: {
    eventCategory: 'MSDS-SDS',
    eventAction: 'Hazard Classification & Labeling Viewed',
    eventLabel: 'Hazard Classification & Labeling Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Hazard Labeling', 'GHS Assessment'],
      certification: 'GHS/CLP/OSHA/WHMIS Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Hazard Classification & Labeling',
    description: 'Labeling and classification of chemical/pharmaceutical products per GHS and international standards.',
    serviceType: 'Pharmaceutical Regulatory Documentation Service',
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
      serviceUrl: `https://www.indivirtus.com${link}`,
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
      name: 'Hazard Classification & Labeling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GHS Hazard Assessment',
            description: 'Scientific classification of substances per global GHS guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pictograms & H/P-statements',
            description: 'Assignment of appropriate hazard pictograms and precautionary statements.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Primary/Secondary Container Labeling',
            description: 'Design and validation of compliant labels for all packaging types.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Serialization & Barcoding',
            description: 'Barcode generation and traceability support for labeled containers.',
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
        name: 'What is GHS hazard classification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GHS hazard classification categorizes substances based on physical, health, and environmental hazards. It helps define appropriate labels and safety documentation for international compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide label formats for different container types?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide label templates and formats tailored to both primary and secondary pharmaceutical or chemical containers, ensuring compliance with region-specific regulations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What regulations do your labeling services cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We ensure compliance with UN GHS, OSHA HCS, EU CLP, WHMIS 2015, and Indian IS 17803:2022 standards for labeling and hazard communication.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate serialization or barcoding into the labels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we integrate serialization and barcode generation to support product traceability and packaging compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data do I need to provide for hazard classification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need to provide chemical composition, toxicological data, and relevant SDS/MSDS or test reports. Our team can guide you through data submission.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Hazard Classification & Labeling services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include GHS hazard assessments, pictogram and H/P-statement assignments, label template design, serialization/barcoding strategies, and regulatory compliance checklists.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from Hazard Classification & Labeling services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical and chemical manufacturers requiring compliant hazard communication and labeling for global markets benefit from our tailored solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with UN GHS (Rev. 9), OSHA HCS (29 CFR 1910.1200), EU CLP (EC No 1272/2008), WHMIS 2015, and IS 17803:2022, ensuring global and regional compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive a GHS hazard classification report, pictogram/H-P statement matrix, label templates, serialization/barcoding strategies, and a regulatory compliance checklist.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the labeling services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your product’s specific hazards, packaging, and regulatory requirements, ensuring accurate and compliant labeling solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support serialization and traceability?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We integrate serialization and barcoding strategies to ensure traceability and compliance, supporting safe handling and regulatory requirements across global supply chains.',
        },
      },
    ],
  },
  meta: {
    title: 'Hazard Classification & Labeling | GHS Compliance Services – Indivirtus',
    description:
      'Indivirtus offers GHS-compliant hazard classification and labeling services, including pictograms, H/P-statements, and serialization for pharma and chemical firms.',
    keywords: [
      'GHS hazard classification',
      'Pharmaceutical labeling compliance',
      'Hazard pictograms',
      'SDS label preparation',
      'Container labeling pharma',
      'Serialization GHS labels',
      'WHMIS HCS hazard labels',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Hazard Classification & Labeling | GHS Compliance Services – Indivirtus',
      description:
        'GHS-compliant hazard labeling and classification services for the pharmaceutical and chemical industry.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    'GHS Classification',
    'Labeling Compliance',
    'Hazard Pictogram Assignment',
    'Serialization and Traceability',
  ],
};
