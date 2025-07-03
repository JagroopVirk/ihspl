import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/oel-determination';

export default {
  service_id: 'oel_determination_001',
  report_type: 'Occupational Exposure Limit (OEL) Assessment',
  title: 'Occupational Exposure Limit (OEL) Determination',
  name: 'OEL Determination',
  description:
    'Scientific OEL setting services including airborne exposure modeling, route-specific limits, and containment recommendations.',
  full_description:
    'Indivirtus delivers scientifically robust Occupational Exposure Limit (OEL) determination services tailored to pharmaceutical compounds. Our evaluations involve airborne exposure modeling, route-specific considerations, NIOSH/ACGIH benchmarking, and containment system design support to maintain workplace safety and regulatory compliance.',
  estimated_duration: '6–10 working days',
  deliverables: [
    'OEL justification report',
    'Airborne exposure modeling data',
    'NIOSH/ACGIH benchmark comparison',
    'Containment design and control strategy',
  ],
  regulatory_basis: [
    'NIOSH Occupational Exposure Banding Guidelines',
    'ACGIH Threshold Limit Values (TLVs)',
    'OSHA Standards (29 CFR 1910)',
    'ISPE Risk-MaPP Guidelines',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturers', 'CDMOs', 'R&D Laboratories'],
  expertise_area: ['Toxicology', 'Exposure Modeling', 'Worker Safety'],
  is_active: true,
  pageLink: link,
  icon: '🌬️',
  image: {
    path: serviceImage,
    alt: 'OEL Determination and airborne exposure modeling services',
    caption: 'Protect worker safety with scientifically derived OELs supported by NIOSH and ACGIH comparisons.',
  },
  gtm: {
    eventCategory: 'OEL Determination',
    eventAction: 'View Service',
    eventLabel: 'OEL Determination Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['OEL Risk Assessment', 'Containment Planning'],
      certification: 'NIOSH/ACGIH/OSHA Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'OEL Determination',
    description:
      'OEL assessment services based on route-specific toxicology, exposure modeling, and industry-standard references like NIOSH/ACGIH.',
    serviceType: 'Occupational Exposure Limit Assessment',
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
      name: 'OEL Determination Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Airborne Exposure Modeling',
          description:
            'Evaluate real-world airborne concentrations of pharmaceutical compounds using simulation and environmental modeling.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Route-Specific OELs',
          description:
            'OEL derivation considering inhalation, dermal, and ingestion routes based on toxicokinetic data.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'NIOSH/ACGIH Benchmarking',
          description:
            'Compare OEL values against globally recognized standards from NIOSH and ACGIH for alignment and justification.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Containment System Design Support',
          description:
            'Guidance on designing engineering and administrative controls to maintain airborne exposure within OEL thresholds.',
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
        name: 'What is an OEL in the context of pharmaceutical manufacturing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An Occupational Exposure Limit (OEL) is the maximum acceptable concentration of a chemical substance in workplace air for a particular substance, used to protect worker health.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is airborne exposure modeled?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Airborne exposure modeling involves simulating the dispersion of active pharmaceutical ingredients (APIs) in air to predict worker exposure under realistic operating conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are route-specific OELs and why are they important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Route-specific OELs take into account how a substance enters the body—via inhalation, skin, or ingestion—to establish safe limits based on each exposure route’s unique risks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is benchmarking against NIOSH and ACGIH necessary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Benchmarking ensures that your internal OEL values align with internationally accepted occupational safety standards, providing defensibility and regulatory confidence.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do containment systems help meet OEL targets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Containment systems like isolators, downflow booths, and closed transfer equipment help ensure airborne concentrations stay within defined OELs to protect worker health.',
        },
      },
    ],
  },
  meta: {
    title: 'OEL Determination Services | Exposure Modeling & Containment - Indivirtus',
    description:
      'Expert OEL assessments including airborne exposure modeling, route-specific toxicology, and NIOSH/ACGIH alignment for safe pharma manufacturing.',
    keywords: [
      'OEL determination',
      'airborne exposure modeling',
      'NIOSH ACGIH comparison',
      'route-specific exposure limits',
      'pharmaceutical OEL services',
      'containment system design',
      'occupational exposure limits',
      'OEL calculation',
      'worker safety assessment',
      'CRO toxicology services',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'OEL Assessment Services | Indivirtus CRO',
      description:
        'Maintain occupational health and regulatory compliance with tailored OEL determination, modeling, and control planning.',
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
    'Occupational Exposure Limit Justification',
    'Airborne Exposure Simulation',
    'Containment System Design Review',
    'Toxicological Benchmark Comparison',
  ],
};
