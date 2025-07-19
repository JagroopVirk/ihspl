import serviceImage from '@/assets/gmp-compliance-trainings/schedule-m-training.jpg';
const link = '/services/gmp-compliance-trainings/schedule-m-training';

export default {
  slug: 'schedule-m-training',
  parentSlug: 'gmp-compliance-trainings',
  service_id: 'SCHM-TRN-006',
  report_type: 'Training Modules',
  title: 'Revised Schedule M Training',
  name: 'Revised Schedule M Compliance Training',
  description:
    'Comprehensive training on Revised Schedule M for pharmaceutical manufacturers, covering key changes, documentation, implementation strategies, and audit preparedness.',
  full_description:
    'Our Revised Schedule M Training program equips pharmaceutical teams with a deep understanding of the 2024 amendments to Schedule M. The course includes a focused overview of the updated provisions, implementation strategies, enhanced documentation and quality control requirements, and a practical mock audit simulation to ensure preparedness. This training helps ensure GMP alignment with India’s updated regulatory expectations and reduces the risk of non-compliance during inspections.',
  estimated_duration: '1–2 Days',
  deliverables: [
    'Training Certificate',
    'Change Impact Matrix',
    'Implementation Toolkit',
    'Mock Audit Feedback Report',
  ],
  regulatory_basis: ['Revised Schedule M (2024)', 'Drugs and Cosmetics Act & Rules, India'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical Manufacturing', 'Formulations', 'APIs', 'Contract Manufacturing'],
  expertise_area: ['GMP Compliance', 'Audit Preparedness', 'Regulatory Training'],
  is_active: true,
  pageLink: link,
  icon: '📑',
  image: {
    path: serviceImage,
    alt: 'Revised Schedule M training program by Indivirtus',
    caption: 'Training on Revised Schedule M for Indian pharmaceutical GMP compliance',
  },
  gtm: {
    eventCategory: 'Training',
    eventAction: 'Schedule M Training View',
    eventLabel: 'Schedule M Training Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Training Modules'],
      certification: 'Yes',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Revised Schedule M Training for Pharmaceutical Compliance',
    description:
      'Training program to understand and implement the Revised Schedule M in pharmaceutical operations, with audit simulations and QMS alignment.',
    serviceType: 'Regulatory Compliance Training',
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
      name: 'Revised Schedule M Training Modules',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Key Changes Overview',
          description:
            'Training on major amendments in Revised Schedule M including new GMP expectations and terminology.',
        },
        {
          '@type': 'Offer',
          name: 'Implementation Roadmap',
          description:
            'Guided steps to translate Schedule M changes into operational SOPs, systems, and documentation practices.',
        },
        {
          '@type': 'Offer',
          name: 'Quality Control & Documentation',
          description:
            'Hands-on sessions on updated documentation control, quality metrics, and risk-based QMS requirements.',
        },
        {
          '@type': 'Offer',
          name: 'Mock Audit Simulation',
          description:
            'Practical audit simulation based on revised Schedule M to test compliance readiness and CAPA planning.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Project-based pricing',
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
        name: 'What is the focus of the Revised Schedule M training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The training focuses on key changes in the 2024 Revised Schedule M, including updated GMP requirements, documentation practices, and audit expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should attend this Schedule M training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'QA/QC heads, manufacturing supervisors, regulatory affairs professionals, and senior management responsible for GMP compliance should attend.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the training include audit simulation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the training includes a realistic mock audit to evaluate your team’s preparedness and identify improvement areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will we receive implementation tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide an implementation roadmap and a change impact matrix to support adoption of Revised Schedule M in your facility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the training certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, participants receive a certificate upon successful completion of the Revised Schedule M training module.',
        },
      },
    ],
  },
  meta: {
    title: 'Revised Schedule M Training for Pharma GMP | Indivirtus',
    description:
      'Master Revised Schedule M with our pharma GMP training. Covers key changes, implementation planning, QC, and mock audits for Indian facilities.',
    keywords: [
      'Revised Schedule M training',
      'Schedule M 2024 compliance',
      'Indian GMP training',
      'mock audit training pharma',
      'quality documentation pharma',
      'Schedule M amendments training',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Revised Schedule M Training for Pharma GMP | Indivirtus',
      description:
        'Comprehensive GMP training on Revised Schedule M, including implementation strategy, quality control, and mock audits.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Mock Audit Checklist', 'Post-training Assessment'],
};
