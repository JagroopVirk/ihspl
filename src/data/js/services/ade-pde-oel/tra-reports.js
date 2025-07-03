import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/tra-reports';

export default {
  service_id: 'tra_prep_001',
  report_type: 'Toxicological Risk Assessment (TRA)',
  title: 'TRA Report Preparation',
  name: 'TRA Report Preparation',
  description:
    'Expertly crafted Toxicological Risk Assessment (TRA) reports for cleaning validation, PQR, and regulatory needs.',
  full_description:
    'Indivirtus specializes in preparing detailed Toxicological Risk Assessment (TRA) reports that support pharmaceutical manufacturing and compliance. Our services include toxicology monograph development, scientifically justified cleaning limits, support for PQR submissions, and cross-contamination control strategies. Our reports meet global regulatory expectations including EMA, USFDA, WHO, and PIC/S.',
  estimated_duration: '5–7 working days',
  deliverables: [
    'Comprehensive TRA report',
    'Compound-specific toxicological monograph',
    'Cleaning limit calculation and justification',
    'Cross-contamination control rationale',
    'PQR and audit-ready documentation',
  ],
  regulatory_basis: [
    'EMA Guideline on Setting HBELs (2014)',
    'ICH Q3D (Elemental Impurities)',
    'PIC/S PI 046-1',
    'WHO TRS 1019',
    'US FDA cleaning validation guidelines',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API/FDF Manufacturing', 'CDMOs', 'Cosmetic'],
  expertise_area: ['Toxicology', 'Cleaning Validation', 'Risk Assessment', 'GMP Compliance'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'TRA report preparation services for pharmaceutical companies',
    caption:
      'Scientific and regulatory-compliant TRA reports for toxicology, cleaning validation, and product quality review.',
  },
  gtm: {
    eventCategory: 'TRA Report Preparation',
    eventAction: 'View Service',
    eventLabel: 'TRA Report Preparation Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['TRA Report', 'Toxicological Assessment'],
      certification: 'EMA/USFDA/PIC-S Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'TRA Report Preparation',
    description:
      'TRA reports with monographs, cleaning limit justification, and PQR support to meet global regulatory requirements.',
    serviceType: 'Toxicological Risk Assessment',
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
      name: 'TRA Report Preparation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Toxicology Monographs',
          description:
            'Development of compound-specific toxicological profiles including NOAEL, LD50, LOAEL, and mechanistic data.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Cleaning Limit Justification',
          description:
            'Scientific and regulatory-backed calculations of cleaning limits based on health-based exposure thresholds.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'PQR & Regulatory Support',
          description:
            'Preparation of supporting toxicology documentation for Product Quality Reviews and regulatory filings.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Cross-Contamination Control',
          description:
            'TRA documentation to support control measures, risk identification, and HBEL applications in multi-product facilities.',
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
        name: 'What is a TRA report and why is it required in pharma?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Toxicological Risk Assessment (TRA) report is a scientific evaluation used to assess health risks from residual APIs. It’s crucial for justifying cleaning limits, supporting PQRs, and demonstrating cross-contamination control.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a toxicology monograph include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A toxicology monograph includes compound-specific safety data such as NOAEL, LOAEL, LD50, pharmacological effects, and classification to support exposure assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are cleaning limits scientifically justified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cleaning limits are justified using HBELs like PDE or ADE derived from toxicological data, applying factors for uncertainty and exposure routes in line with EMA and ICH Q3D.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the TRA support PQR and audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TRA reports provide documented rationale for cleaning validation and exposure control, which are essential for defending Product Quality Reviews and during regulatory audits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What role does TRA play in cross-contamination control?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TRA helps identify acceptable residual levels and supports facility design and operational controls to reduce the risk of cross-contamination in shared equipment or areas.',
        },
      },
    ],
  },
  meta: {
    title: 'TRA Report Preparation Services | Cleaning Limit & PQR Support - Indivirtus',
    description:
      'Regulatory-compliant TRA report preparation services including toxicology monographs, cleaning limit justification, PQR documentation, and cross-contamination control.',
    keywords: [
      'TRA report preparation',
      'Toxicological Risk Assessment',
      'cleaning validation',
      'cleaning limit justification',
      'PQR support',
      'toxicology monograph',
      'cross-contamination control',
      'HBEL assessment',
      'pharma TRA services',
      'regulatory toxicology',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Toxicological Risk Assessment (TRA) Services | Indivirtus',
      description:
        'Comprehensive TRA reports with cleaning limit justifications and audit-ready toxicology data for pharma and biotech clients.',
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
    'Toxicological Risk Assessment',
    'Cleaning Validation Justification',
    'Toxicology Profile Generation',
    'Contamination Control Strategy',
  ],
};
