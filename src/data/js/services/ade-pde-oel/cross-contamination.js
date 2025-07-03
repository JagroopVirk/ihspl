import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/cross-contamination';

export default {
  service_id: 'cross_contam_001',
  report_type: 'Cross-Contamination Risk Assessment',
  title: 'Cross-Contamination Risk Assessments',
  name: 'Cross-Contamination Assessments',
  description:
    'Comprehensive assessment services to mitigate cross-contamination in pharma manufacturing using HBEL, PDE, and Risk-MaPP approaches.',
  full_description:
    'Indivirtus offers specialized cross-contamination assessment services to help pharmaceutical manufacturers identify and mitigate contamination risks. Our approach integrates HBEL-based evaluations, PDE applications, Risk-MaPP methodology, and expert facility and equipment design support, ensuring regulatory compliance and patient safety.',
  estimated_duration: '7-12 working days',
  deliverables: [
    'HBEL-based cross-contamination risk report',
    'PDE justification document',
    'Risk-MaPP-aligned risk mitigation plan',
    'Facility and equipment design recommendations',
  ],
  regulatory_basis: [
    'EMA Guideline on Shared Facilities (2014)',
    'ICH Q9: Quality Risk Management',
    'ISPE Risk-MaPP Guidelines',
    'WHO TRS 961 Annex 7',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'CDMO', 'API/FDF Manufacturers'],
  expertise_area: ['Contamination Control', 'Risk Assessment', 'Facility Design'],
  is_active: true,
  pageLink: link,
  icon: '⚠️',
  image: {
    path: serviceImage,
    alt: 'Cross-contamination assessment and mitigation services',
    caption: 'Ensure safe manufacturing practices with HBEL-based risk analysis and Risk-MaPP implementation.',
  },
  gtm: {
    eventCategory: 'Cross-Contamination',
    eventAction: 'View Service',
    eventLabel: 'Cross-Contamination Assessments',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Contamination Risk Assessment'],
      certification: 'EMA/Risk-MaPP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cross-Contamination Assessments',
    description:
      'Pharmaceutical cross-contamination assessments including HBEL, PDE applications, Risk-MaPP, and design advisory.',
    serviceType: 'Contamination Risk Assessment',
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
      name: 'Cross-Contamination Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'HBEL-Based Assessments',
          description:
            'Scientific evaluation of Health-Based Exposure Limits for establishing acceptable residual risks.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Risk-MaPP Implementation',
          description:
            'Applying ISPE’s Risk-MaPP methodology to identify, assess, and control cross-contamination risks.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Facility and Equipment Design Review',
          description:
            'Design recommendations to minimize contamination pathways through structural and process controls.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'PDE Application Support',
          description: 'Utilizing Permitted Daily Exposure values to set cleaning and containment limits.',
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
        name: 'What is cross-contamination in pharmaceutical manufacturing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cross-contamination refers to the unintended transfer of a substance from one product or process to another, potentially compromising product safety. Assessments help prevent this risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does HBEL support cross-contamination control?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HBEL (Health-Based Exposure Limit) provides a scientifically justified threshold for safe exposure, helping manufacturers define safe levels of cross-contamination.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Risk-MaPP and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Risk-MaPP (Risk-Based Manufacture of Pharmaceutical Products) is an ISPE framework used to evaluate, control, and communicate cross-contamination risks in multiproduct facilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is facility and equipment design important in cross-contamination control?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proper design helps isolate processes, ensure effective cleaning, and reduce shared pathways—crucial for minimizing contamination risks in manufacturing environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is PDE used in cross-contamination assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDE (Permitted Daily Exposure) values are used to establish acceptable carryover limits for cleaning and facility qualification, based on toxicological evaluations.',
        },
      },
    ],
  },
  meta: {
    title: 'Cross-Contamination Assessment Services | HBEL, Risk-MaPP, PDE - Indivirtus',
    description:
      'Protect your pharmaceutical facility from contamination risks with expert assessments using HBEL, PDE, Risk-MaPP, and facility design optimization.',
    keywords: [
      'cross contamination assessment',
      'Risk-MaPP implementation',
      'HBEL report',
      'PDE application',
      'pharmaceutical facility design',
      'contamination control',
      'multiproduct manufacturing',
      'ICH Q9 risk assessment',
      'ISPE Risk-MaPP',
      'EMA shared facility guideline',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Cross-Contamination Risk Assessment Services | Indivirtus',
      description:
        'Ensure clean, compliant pharma operations with HBEL-based cross-contamination control and Risk-MaPP-aligned mitigation plans.',
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
    'HBEL Assessment',
    'Risk-MaPP Risk Control Plan',
    'Contamination Risk Review',
    'PDE-Based Facility Evaluation',
  ],
};
