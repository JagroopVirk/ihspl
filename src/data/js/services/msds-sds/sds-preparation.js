import serviceImage from '@/assets/msds-sds/sds-preparation.jpg';
const link = '/services/msds-sds/sds-preparation';

export default {
  slug: 'sds-preparation',
  parentSlug: 'msds-sds',
  service_id: 'sds_preparation_001',
  report_type: 'SDS/MSDS Document',
  title: 'SDS/MSDS Preparation Services',
  name: 'SDS/MSDS Preparation',
  description:
    'Preparation of globally compliant Safety Data Sheets (SDS/MSDS) for pharmaceutical compounds in accordance with GHS, OSHA, and REACH standards.',
  full_description:
    'Our SDS/MSDS Preparation service provides comprehensive and regulatory-compliant documentation that meets global chemical safety standards. We follow the internationally accepted 16-section format under the GHS system and ensure compliance with OSHA (USA), REACH (EU), WHMIS (Canada), and local regulations for India, China, and Japan. Each Safety Data Sheet is tailored to the compound’s chemical properties, toxicity profile, and intended industrial use, ensuring that hazard communication is both accurate and up to date for regulatory submissions and workplace safety.',
  estimated_duration: '3–7 working days',
  deliverables: [
    'GHS-compliant 16-section SDS/MSDS',
    'Region-specific compliance versions (US, EU, India, China, Japan)',
    'Classification of hazards and precautionary statements',
    'Toxicological and ecological summaries',
    'Handling, storage, transport, and disposal guidance',
  ],
  regulatory_basis: [
    'GHS (Globally Harmonized System)',
    'OSHA Hazard Communication Standard (29 CFR 1910.1200)',
    'REACH Regulation (EC) No 1907/2006',
    'WHMIS 2015 (Canada)',
    'Japan ISHL, China GB Standards',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'APIs & Intermediates', 'Fine Chemicals', 'Biotech'],
  expertise_area: ['Chemical Safety', 'Toxicology', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'SDS/MSDS preparation document showing GHS-compliant hazard sections',
    caption: 'Professionally prepared SDS/MSDS for pharmaceutical regulatory and safety compliance.',
  },
  gtm: {
    eventCategory: 'SDS Preparation',
    eventAction: 'Submit Request',
    eventLabel: 'SDS/MSDS Preparation Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['SDS/MSDS'],
      certification: 'GHS, REACH, OSHA, WHMIS',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SDS/MSDS Preparation',
    description:
      'Expert preparation of GHS-compliant Safety Data Sheets for pharmaceuticals as per OSHA, REACH, and WHMIS standards.',
    serviceType: 'SDS/MSDS Preparation Service',
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
      name: 'SDS/MSDS Preparation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'GHS-Compliant SDS Creation',
          description: 'Preparation of SDS/MSDS in the 16-section GHS format for global use.',
        },
        {
          '@type': 'Offer',
          name: 'Region-Specific SDS Compliance',
          description:
            'Customized SDS versions for OSHA (USA), REACH (EU), WHMIS (Canada), and Asia-Pacific standards.',
        },
        {
          '@type': 'Offer',
          name: 'Hazard Classification & Labeling',
          description: 'Accurate hazard classification and precautionary statements as per CLP/GHS.',
        },
        {
          '@type': 'Offer',
          name: 'SDS for India, China, Japan',
          description: 'Preparation of SDS in line with country-specific templates and regulatory formats.',
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
        name: 'What is the format of an SDS/MSDS under GHS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GHS-compliant SDS follows a standardized 16-section format, covering identification, hazards, composition, handling, toxicology, transport, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is one SDS format acceptable for all countries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While the GHS format is globally recognized, country-specific regulations (like OSHA, REACH, or China GB standards) require localized adaptations of the SDS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you prepare SDS in compliance with India, China, and Japan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide SDSs tailored for India (per MSIHC Rules), China (GB/T 16483), and Japan (ISHL and JIS Z 7253).',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is required from the client to prepare an SDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We need the compound name, CAS number, toxicological data, intended use, and physical/chemical properties such as pH, boiling point, solubility, etc.',
        },
      },
      {
        '@type': 'Question',
        name: 'What regulations are considered while preparing SDS/MSDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We incorporate GHS, OSHA HazCom 2012, EU REACH & CLP, WHMIS, and local environmental health and safety rules applicable in the target market.',
        },
      },
    ],
  },
  meta: {
    title: 'SDS/MSDS Preparation Services | GHS, OSHA, REACH Compliant | Indivirtus',
    description:
      'Get professional SDS/MSDS preparation services for pharmaceutical chemicals. Fully compliant with GHS 16-section format, OSHA, REACH, WHMIS, and Asia-Pacific standards.',
    keywords: [
      'SDS preparation',
      'MSDS documentation',
      'GHS 16-section format',
      'OSHA SDS service',
      'REACH compliant MSDS',
      'WHMIS SDS preparation',
      'India China Japan SDS',
      'pharmaceutical safety data sheet',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'SDS/MSDS Preparation Services | Indivirtus',
      description: 'Pharma-grade SDS/MSDS documentation service for GHS, OSHA, EU REACH, and local compliance.',
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
    'GHS Safety Data Sheet',
    'REACH & OSHA Hazard Communication',
    'WHMIS & Asia-Pacific SDS',
    'Pharmaceutical Hazard Documentation',
  ],
};
