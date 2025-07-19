import serviceImage from '@/assets/gmp-audits/risk-management.jpg';
const link = '/services/gmp-audits/risk-management';

export default {
  slug: 'risk-management',
  parentSlug: 'gmp-audits',
  service_id: 'CRO-GMP-RM-004',
  report_type: 'Risk Management Audit Report',
  title: 'Risk Management Audits & ICH Q9 Compliance',
  name: 'Risk Management',
  description:
    'Comprehensive risk assessment services including ICH Q9 compliance, FMEA, HACCP audits, and risk control documentation for pharma facilities.',
  full_description:
    'Indivirtus Healthcare Services provides strategic Risk Management audits tailored for pharmaceutical operations. These audits are aligned with ICH Q9 principles and assess risk at every stage of product lifecycle—from development through distribution. Services include risk identification, FMEA (Failure Modes and Effects Analysis), HACCP (Hazard Analysis and Critical Control Points), process risk reviews, and development of risk control documentation. Our team ensures that risk is proactively identified, documented, and mitigated in accordance with GMP and regulatory standards.',
  estimated_duration: '4–6 working days depending on process complexity',
  deliverables: [
    'ICH Q9 Risk Assessment Report',
    'FMEA / HACCP Audit Summary',
    'Risk Control Plan',
    'Process Risk Evaluation Matrix',
  ],
  regulatory_basis: ['ICH Q9', 'WHO TRS', 'Schedule M', '21 CFR Part 211'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'API Manufacturers', 'Contract Manufacturing'],
  expertise_area: ['Quality Risk Management', 'Process Validation', 'Regulatory Risk Assessment'],
  is_active: true,
  pageLink: link,
  icon: '⚠️',
  image: {
    path: serviceImage,
    alt: 'Risk management audit and ICH Q9 compliance services for pharmaceutical operations',
    caption: 'Risk management services including FMEA, HACCP, and ICH Q9 risk control strategies',
  },
  gtm: {
    eventCategory: 'GMP Audit Services',
    eventAction: 'Risk Management Audits',
    eventLabel: 'Risk Management Audit Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Audit Report'],
      certification: 'ICH Q9 / GMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Risk Management Audits',
    description:
      'Risk-based GMP audits covering ICH Q9, FMEA, HACCP, and process risk control documentation for pharmaceutical facilities.',
    serviceType: 'Risk Management Assessment',
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
      name: 'Risk Management Audit Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICH Q9 Compliance Audits',
            description: 'Comprehensive audit and risk review aligned with ICH Q9 Quality Risk Management guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FMEA & HACCP Audits',
            description:
              'Failure Mode and Effects Analysis and HACCP methodology applied to pharmaceutical manufacturing and quality processes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Risk Control Documentation',
            description:
              'Preparation and audit of risk control documentation including risk registers, mitigation strategies, and acceptance criteria.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Risk Reviews',
            description:
              'Evaluation of manufacturing processes and quality systems for inherent and residual risks with appropriate mitigation planning.',
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
        name: 'What is the objective of a pharmaceutical risk management audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The goal is to identify, assess, and control risks throughout the product lifecycle, ensuring compliance with ICH Q9 and other GMP standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is FMEA applied in pharma audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FMEA identifies failure points in processes, evaluates their impact, and prioritizes them for corrective action to prevent quality deviations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in HACCP-based pharmaceutical risk assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HACCP audits focus on identifying critical control points, monitoring procedures, and corrective actions in production and packaging processes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is ICH Q9 important in pharmaceutical audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ICH Q9 provides a structured approach to risk management, helping companies make science-based, risk-based decisions in compliance environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are common outputs of a risk management audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Outputs include risk assessment matrices, mitigation plans, updated SOPs, and documentation of acceptance criteria and residual risk levels.',
        },
      },
    ],
  },
  meta: {
    title: 'Risk Management Audits | ICH Q9, FMEA, HACCP | Indivirtus',
    description:
      'Risk assessment services for pharmaceutical facilities, including ICH Q9 audits, FMEA, HACCP, and process-level risk control evaluations.',
    keywords: [
      'Risk management audits',
      'ICH Q9 compliance',
      'FMEA in pharma',
      'HACCP pharmaceutical audits',
      'Process risk review',
      'GMP risk assessment',
      'Risk control documentation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Risk Management Audits | ICH Q9, FMEA, HACCP | Indivirtus',
      description:
        'We help pharma companies comply with ICH Q9 and control risks using FMEA, HACCP, and process-based risk audits.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['ICH Q9 Audit', 'FMEA Assessment', 'HACCP Review', 'Risk Control Planning'],
};
