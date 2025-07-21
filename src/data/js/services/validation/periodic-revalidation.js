import serviceImage from '@/assets/validation/periodic-revalidation.jpg';
const link = '/services/validation/periodic-revalidation';

export default {
  slug: 'periodic-revalidation',
  parentSlug: 'validation',
  service_id: 'PRV-CRO-005',
  report_type: 'Review & Revalidation Reports',
  title: 'Periodic Review & Revalidation Services',
  name: 'Periodic Review & Revalidation',
  description:
    'Lifecycle-based periodic review and revalidation of pharmaceutical systems including trigger-based requalification, decommissioning support, and change control alignment.',
  full_description:
    'Our Periodic Review & Revalidation services ensure continued compliance of qualified systems and equipment throughout their lifecycle. We perform scheduled reviews, analyze system performance trends, and determine if revalidation is warranted based on deviations, upgrades, or regulatory changes. Our experts integrate change control records, manage retirement of legacy systems, and provide documented justification aligned with GMP expectations. This proactive approach strengthens audit readiness and minimizes regulatory risk.',
  estimated_duration: '1–3 weeks depending on asset and change history',
  deliverables: [
    'System periodic review checklist',
    'Trigger event evaluation reports',
    'Revalidation strategy & protocol',
    'Change control record integration',
    'System decommissioning documentation',
    'Final review summary & compliance status',
  ],
  regulatory_basis: [
    'EU GMP Annex 15 – Qualification & Validation',
    'US FDA Guidance on Process Validation (Stage 3)',
    'WHO TRS 1019',
    'ISPE Lifecycle Management Model',
    'ICH Q9 – Quality Risk Management',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Medical Devices'],
  expertise_area: ['Validation', 'Quality Systems', 'Lifecycle Management'],
  is_active: true,
  pageLink: link,
  icon: '♻️',
  image: {
    path: serviceImage,
    alt: 'Periodic Review and Revalidation Service for Pharma',
    caption: 'Ensure ongoing system compliance with lifecycle-based review and revalidation strategies',
  },
  gtm: {
    eventCategory: 'Periodic Review and Revalidation',
    eventAction: 'view_service',
    eventLabel: 'Periodic Review & Revalidation - Pharma Systems & Equipment',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Review & Revalidation Reports'],
      certification: 'Yes',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Periodic Review & Revalidation',
    description:
      'Compliance-driven periodic system reviews and revalidation planning for pharmaceutical systems including change control and decommissioning support.',
    serviceType: 'Revalidation & Lifecycle Management Service',
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
      name: 'Lifecycle Validation & Revalidation Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Periodic System Reviews',
          description:
            'Routine assessment of validated systems to confirm continued performance and regulatory alignment.',
        },
        {
          '@type': 'Offer',
          name: 'Trigger-Based Revalidation',
          description:
            'Evaluation and execution of revalidation activities based on deviations, upgrades, or regulatory changes.',
        },
        {
          '@type': 'Offer',
          name: 'System Decommissioning',
          description:
            'Controlled retirement of obsolete systems with documentation to maintain compliance and traceability.',
        },
        {
          '@type': 'Offer',
          name: 'Change Control Integration',
          description:
            'Linking validation reviews with change control processes to ensure traceable and justifiable decisions.',
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
        name: 'Why are periodic reviews important for validated systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Periodic reviews help ensure that validated systems continue to meet their intended purpose and regulatory expectations over time, reducing compliance risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a trigger-based revalidation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Revalidation triggered by events such as system upgrades, deviations, audit findings, or changes in process that may impact product quality or data integrity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support system decommissioning documentation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide full documentation for system decommissioning, including data migration plans and validation record archiving to support traceability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is change control linked with revalidation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review change control logs to identify potential impacts on validated state and determine whether revalidation is necessary as part of the change lifecycle.',
        },
      },
      {
        '@type': 'Question',
        name: 'What guidelines govern periodic review & revalidation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our approach is based on EU GMP Annex 15, FDA Process Validation Stage 3, WHO guidelines, ISPE best practices, and ICH Q9 risk management principles.',
        },
      },
    ],
  },
  meta: {
    title: 'Periodic Review & Revalidation | Pharma Lifecycle Compliance | Indivirtus',
    description:
      'Ensure GMP compliance through lifecycle-based periodic reviews, revalidation strategies, change control integration, and system decommissioning documentation.',
    keywords: [
      'periodic review pharma',
      'revalidation service',
      'change control integration',
      'GMP requalification',
      'system lifecycle compliance',
      'pharma equipment review',
      'decommissioning validation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Periodic Review & Revalidation | Pharma Lifecycle Compliance | Indivirtus',
      description:
        'Maintain your validated state with expert reviews, change tracking, and requalification strategies.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['System Lifecycle Review', 'Change Impact Evaluation', 'Revalidation Justification Report'],
};
