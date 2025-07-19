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
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Hazard Classification & Labeling | GHS Compliance Services – Indivirtus',
      description:
        'GHS-compliant hazard labeling and classification services for the pharmaceutical and chemical industry.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
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
