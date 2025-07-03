import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/ade-pde-calculation';

export default {
  service_id: 'ade_pde_calc_001',
  report_type: 'Toxicological Assessment',
  title: 'ADE/PDE Calculation Services',
  name: 'ADE/PDE Calculation',
  description:
    'EMA-compliant toxicological assessments for setting Health-Based Exposure Limits (HBELs), including ADE and PDE determination.',
  full_description:
    'Our ADE/PDE Calculation service provides comprehensive toxicological risk assessments to establish scientifically justified exposure limits. We offer NOAEL/LOAEL-based analysis, align with EMA/ICH Q3D guidelines, and ensure expert toxicologist sign-off for compliance and safety assurance.',
  estimated_duration: '5-7 working days',
  deliverables: [
    'Full toxicological assessment report',
    'PDE calculation as per EMA/ICH Q3D',
    'NOAEL/LOAEL derivation rationale',
    'Toxicologist-signed final report',
  ],
  regulatory_basis: [
    'EMA Guidelines on Setting Health-Based Exposure Limits',
    'ICH Q3D: Guideline for Elemental Impurities',
    'PIC/S Guide to GMP',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'CDMO', 'API Manufacturing'],
  expertise_area: ['Toxicology', 'Risk Assessment', 'Quality Assurance'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Toxicological ADE PDE calculation services',
    caption: 'Expert-reviewed PDE calculations for pharmaceutical manufacturing safety and compliance.',
  },
  gtm: {
    eventCategory: 'Toxicology',
    eventAction: 'View Service',
    eventLabel: 'ADE PDE Calculation',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Toxicological Assessment'],
      certification: 'EMA/ICH Q3D',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ADE/PDE Calculation',
    description: 'Toxicological assessment for setting ADE and PDE limits with expert review.',
    serviceType: 'Toxicology Assessment',
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
      name: 'ADE/PDE Calculation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Full Toxicological Assessment',
          description: 'Comprehensive evaluation of compound safety for establishing exposure limits.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'EMA-Compliant PDE Calculation',
          description: 'PDE calculations aligned with EMA/ICH Q3D guidelines.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'NOAEL/LOAEL-Based Limits',
          description: 'Determination of exposure thresholds using NOAEL and LOAEL data.',
          url: link,
        },
        {
          '@type': 'Offer',
          name: 'Expert Toxicologist Sign-Off',
          description: 'Final toxicology report reviewed and signed by certified toxicologists.',
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
        name: 'What is a toxicological assessment in the context of ADE/PDE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A toxicological assessment evaluates the safety profile of a pharmaceutical compound to determine safe exposure levels such as ADE or PDE.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are PDE limits calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDE (Permitted Daily Exposure) is calculated using data such as NOAEL, applying uncertainty factors and considering EMA/ICH Q3D guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is expert sign-off required for ADE/PDE reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Expert toxicologist sign-off ensures that the assessment meets scientific and regulatory expectations, adding credibility and compliance value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between NOAEL and LOAEL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NOAEL is the highest dose at which no adverse effects are observed, while LOAEL is the lowest dose at which adverse effects first appear.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who needs ADE/PDE calculations in the pharmaceutical industry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharma manufacturers, CMOs, and API producers need ADE/PDE assessments to meet GMP compliance and ensure safe cleaning validation and cross-contamination control.',
        },
      },
    ],
  },
  meta: {
    title: 'ADE/PDE Calculation Services | Expert Toxicological Assessment - Indivirtus',
    description:
      'Get reliable ADE/PDE toxicological assessments for pharmaceutical manufacturing. EMA-compliant PDE reports, NOAEL/LOAEL analysis, and expert-reviewed safety limits.',
    keywords: [
      'ADE calculation',
      'PDE calculation',
      'Toxicological assessment',
      'NOAEL LOAEL limit',
      'EMA compliant risk assessment',
      'Pharma exposure limits',
      'Health-based exposure limits',
      'ICH Q3D PDE report',
      'Pharmaceutical safety threshold',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'ADE/PDE Calculation Services | Indivirtus',
      description:
        'Pharmaceutical toxicological assessments for ADE/PDE limits. Aligned with EMA, signed by certified toxicologists.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Toxicology Assessment', 'PDE Report', 'Exposure Risk Analysis', 'Cleaning Validation Support'],
};
