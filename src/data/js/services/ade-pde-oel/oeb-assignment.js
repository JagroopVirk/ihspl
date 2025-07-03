import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/oeb-assignment';

export default {
  service_id: 'oeb_assign_001',
  report_type: 'Occupational Exposure Banding',
  title: 'Occupational Exposure Band (OEB) Assignment Services',
  name: 'OEB Assignment',
  description:
    'OEB classification based on toxicological criteria using ISPE/SafeBridge frameworks to ensure safe handling of potent compounds.',
  full_description:
    'Indivirtus provides expert Occupational Exposure Band (OEB) assignment services for pharmaceutical manufacturers, CDMOs, and research organizations. Our OEB classification is based on validated toxicological data, following ISPE and SafeBridge methodologies. We support facility segregation planning and define containment requirements across bands 1–5 for potent compounds and APIs.',
  estimated_duration: '5–8 working days',
  deliverables: [
    'OEB assignment report',
    'Toxicological evaluation summary',
    'Exposure control banding chart',
    'Facility segregation and containment recommendations',
  ],
  regulatory_basis: [
    'ISPE Good Practice Guide: Risk-Based Manufacture of Pharmaceutical Products (Risk-MaPP)',
    'SafeBridge Occupational Exposure Banding Guidelines',
    'NIOSH Occupational Exposure Banding (2019)',
    'OSHA/ACGIH toxicology criteria',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'CDMO', 'API/FDF Manufacturing', 'Research Labs'],
  expertise_area: ['Occupational Toxicology', 'Risk Assessment', 'Containment Strategy'],
  is_active: true,
  pageLink: link,
  icon: '🏷️',
  image: {
    path: serviceImage,
    alt: 'OEB Assignment services for pharmaceutical manufacturers',
    caption: 'Assign accurate OEB levels based on toxicological criteria using ISPE and SafeBridge methodologies.',
  },
  gtm: {
    eventCategory: 'OEB Assignment',
    eventAction: 'View Service',
    eventLabel: 'OEB Assignment Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Toxicological Assessment', 'Exposure Banding'],
      certification: 'ISPE/SafeBridge',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'OEB Assignment',
    description:
      'OEB banding based on ISPE/SafeBridge methodology with toxicological criteria and facility containment guidance.',
    serviceType: 'Occupational Exposure Banding',
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
      name: 'OEB Assignment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Multi-tiered Banding (1–5)',
          description:
            'Classification of compounds into OEB 1 to 5 based on hazard potential and occupational exposure risk.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'ISPE/SafeBridge Methodologies',
          description: 'Exposure banding frameworks aligned with global best practices including ISPE and SafeBridge.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Toxicological Criteria Review',
          description: 'In-depth evaluation of toxicological data including NOAEL, LD50, and pharmacological effects.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Facility Segregation and Containment Support',
          description: 'Design and operational recommendations for segregating areas based on assigned OEB levels.',
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
        name: 'What is OEB in the pharmaceutical industry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OEB stands for Occupational Exposure Band. It categorizes compounds based on their toxicity and potential health effects to guide safe handling and containment strategies.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many levels are there in OEB banding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OEB systems typically use a five-tier banding model (OEB 1 to OEB 5), with OEB 5 being the most hazardous and requiring the highest level of containment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the SafeBridge methodology for OEB assignment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SafeBridge methodology uses toxicological and pharmacological criteria to assign OEBs, widely accepted for assessing occupational safety in handling potent APIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is toxicological data critical for OEB classification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Toxicological data like NOAEL, LD50, and irritancy are key inputs for accurately determining the appropriate exposure band and ensuring worker safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does OEB assignment support facility design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By knowing the OEB level of a compound, manufacturers can design appropriate containment systems, room classifications, and workflow to minimize cross-contamination risks.',
        },
      },
    ],
  },
  meta: {
    title: 'OEB Assignment Services | SafeBridge, ISPE Banding - Indivirtus',
    description:
      'Accurate OEB classification using toxicology-based banding systems like ISPE and SafeBridge. Get expert guidance on facility design and occupational exposure safety.',
    keywords: [
      'OEB assignment',
      'Occupational Exposure Band',
      'SafeBridge banding',
      'ISPE OEB classification',
      'toxicology based OEB',
      'OEB level 1 to 5',
      'pharma exposure banding',
      'containment facility design',
      'high potency compound safety',
      'CRO exposure risk assessment',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'OEB Classification Services | Indivirtus CRO',
      description:
        'Classify potent compounds using ISPE and SafeBridge OEB banding. Ensure safe operations and compliant containment.',
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
    'OEB Band Assignment',
    'Toxicological Risk Review',
    'Containment System Recommendation',
    'Exposure Risk Classification',
  ],
};
