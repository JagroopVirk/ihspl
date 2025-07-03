import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/cleaning-validation';

export default {
  service_id: 'clean_val_support_001',
  report_type: 'Cleaning Validation',
  title: 'Cleaning Validation Support Services',
  name: 'Cleaning Validation Support',
  description:
    'Comprehensive CRO cleaning validation support including MACO calculation, PDE-based protocols, swab/rinse limits, and HBEL reporting.',
  full_description:
    'Indivirtus offers expert Cleaning Validation Support services to ensure effective contamination control in pharmaceutical manufacturing. Our team delivers MACO calculations, PDE-based cleaning protocols, scientifically justified rinse/swab limits, and full HBEL reporting in line with global GMP guidelines.',
  estimated_duration: '5-10 working days',
  deliverables: [
    'MACO calculation report',
    'PDE-based cleaning validation protocol',
    'Swab and rinse acceptance criteria',
    'Health-Based Exposure Limit (HBEL) report',
  ],
  regulatory_basis: [
    'EMA Guidelines on Cleaning Validation',
    'ICH Q3D: Elemental Impurities',
    'WHO TRS 1019 Annex 3',
    'US FDA Guidance for Cleaning Validation',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'CDMO', 'API Manufacturers', 'FDF Plants'],
  expertise_area: ['Cleaning Validation', 'Risk-Based Approach', 'Toxicological Limits'],
  is_active: true,
  pageLink: link,
  icon: '🧼',
  image: {
    path: serviceImage,
    alt: 'Cleaning validation support for pharmaceutical manufacturing',
    caption: 'Rinse and swab limit setting, HBEL reports, MACO calculations and more by Indivirtus experts.',
  },
  gtm: {
    eventCategory: 'Cleaning Validation',
    eventAction: 'View Service',
    eventLabel: 'Cleaning Validation Support',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Cleaning Validation'],
      certification: 'EMA/FDA/GMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cleaning Validation Support',
    description:
      'PDE-based cleaning validation protocols and swab/rinse acceptance criteria with MACO and HBEL reports.',
    serviceType: 'Cleaning Validation',
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
      name: 'Cleaning Validation Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'MACO Calculation',
          description: 'Maximum Allowable Carryover (MACO) based on PDE or therapeutic dose to ensure cleaning limits.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'PDE-Based Protocols',
          description:
            'Cleaning validation protocols derived from toxicological PDE data for scientifically justified acceptance limits.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Swab and Rinse Limit Setting',
          description:
            'Definition of acceptance criteria for residue limits using validated swab and rinse techniques.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'HBEL Report Preparation',
          description:
            'Health-Based Exposure Limit reports to support cross-contamination control and cleaning validation.',
          url: link,
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
        name: 'What is MACO in cleaning validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MACO stands for Maximum Allowable Carryover. It defines the highest amount of residue from one product that can remain without affecting product safety, often based on PDE or therapeutic dose.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are PDE-based cleaning protocols developed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDE-based protocols are designed using toxicological risk assessment data to determine safe exposure limits and validate cleaning procedures accordingly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are swab and rinse limits important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Swab and rinse limits ensure that residual active substances are within safe, acceptable levels after cleaning, thereby preventing cross-contamination between products.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in an HBEL report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An HBEL (Health-Based Exposure Limit) report includes toxicological justification for allowable exposure limits used in cleaning validation and cross-contamination control strategies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is cleaning validation required for every pharmaceutical product?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, cleaning validation is a GMP requirement for any facility manufacturing multiple products, to prevent cross-contamination and ensure product safety.',
        },
      },
    ],
  },
  meta: {
    title: 'Cleaning Validation Support Services | MACO, PDE, Swab Limit - Indivirtus',
    description:
      'End-to-end Cleaning Validation Support for pharmaceutical manufacturers. Services include MACO calculations, HBEL reports, PDE-based cleaning protocols, and swab/rinse limits.',
    keywords: [
      'Cleaning validation',
      'MACO calculation',
      'PDE based protocol',
      'HBEL report',
      'Pharma cleaning support',
      'Residue acceptance criteria',
      'Swab rinse limit',
      'Cross contamination control',
      'ICH Q3D',
      'EMA cleaning validation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Cleaning Validation Services | Indivirtus CRO',
      description: 'Ensure cleaning compliance with PDE-based protocols, MACO calculations, and HBEL reporting.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Cleaning Validation Protocols', 'MACO Report', 'HBEL Report', 'Swab/Rinse Limit Justification'],
};
