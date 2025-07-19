import serviceImage from '@/assets/greenfield-brownfield/gmp-compliance.jpg';
const link = '/services/greenfield-brownfield/gmp-compliance';

export default {
  slug: 'gmp-compliance',
  parentSlug: 'greenfield-brownfield',
  service_id: 'GMPCC-009',
  report_type: 'Compliance Consulting',
  title: 'GMP Compliance Consulting',
  name: 'GMP Compliance Consulting for Pharma Facilities',
  description:
    'End-to-end consulting support to help pharmaceutical facilities meet global GMP standards including USFDA, EMA, WHO, and Schedule M.',
  full_description:
    'Our GMP Compliance Consulting service ensures that pharmaceutical facilities meet stringent regulatory expectations across global markets. From preparing User Requirement Specifications (URS) to guiding clients through design qualification (DQ), installation qualification (IQ), operational qualification (OQ), and performance qualification (PQ), we support facilities with full GMP lifecycle management. We also assist with Schedule M implementation and provide mock inspections to prepare teams for successful regulatory audits.',
  estimated_duration: '4–12 weeks depending on facility scope',
  deliverables: [
    'GMP gap assessment report',
    'URS, DQ, IQ, OQ, PQ documentation',
    'Schedule M implementation roadmap',
    'Mock inspection checklist & findings report',
  ],
  regulatory_basis: ['USFDA', 'EMA', 'WHO TRS', 'Schedule M'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Contract Manufacturing'],
  expertise_area: ['GMP Compliance', 'Facility Qualification', 'Regulatory Readiness'],
  is_active: true,
  pageLink: link,
  icon: '📋',
  image: {
    path: serviceImage,
    alt: 'GMP Compliance Consulting',
    caption: 'Ensure compliance with USFDA, EMA, WHO, and other global GMP standards',
  },
  gtm: {
    eventCategory: 'GMP Compliance',
    eventAction: 'View Service',
    eventLabel: 'GMP Compliance Consulting',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Compliance'],
      certification: 'GMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GMP Compliance Consulting',
    description:
      'Expert consulting services to help pharmaceutical manufacturing facilities achieve and maintain GMP compliance.',
    serviceType: 'GMP Compliance Consulting',
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
      name: 'GMP Compliance Consulting Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'USFDA, EMA, WHO Compliance Support',
            description:
              'Gap assessments, regulatory interpretation, and implementation strategy for global GMP compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'URS, DQ, IQ, OQ, PQ Support',
            description: 'End-to-end support for GMP qualification lifecycle documentation and execution.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Schedule M Implementation',
            description: 'Guidance and documentation support for full Schedule M compliance and facility alignment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mock Regulatory Inspections',
            description: 'Audit simulations to prepare teams for USFDA, EMA, WHO, and other inspections.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Custom quote based on scope',
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
        name: 'What is GMP compliance and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "GMP (Good Manufacturing Practices) compliance ensures pharmaceutical products are consistently produced and controlled according to quality standards. It's essential to meet global regulatory expectations and patient safety requirements.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are URS, DQ, IQ, OQ, and PQ documents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These are qualification stages under GMP. URS defines user needs; DQ confirms design; IQ verifies installation; OQ checks operational function; PQ ensures consistent performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus help with Schedule M compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help identify gaps, create documentation, and support implementation aligned with the revised Schedule M for Indian GMP compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens during a mock inspection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A mock inspection simulates a real regulatory audit. We review documentation, procedures, and compliance readiness to identify weaknesses and guide improvements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support multi-country GMP audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have experience supporting facilities through USFDA, EMA, WHO, and other regional GMP inspections and compliance programs.',
        },
      },
    ],
  },
  meta: {
    title: 'GMP Compliance Consulting Services | Indivirtus CRO',
    description:
      'Achieve regulatory readiness with our GMP Compliance Consulting services including USFDA, EMA, WHO, and Schedule M support. URS to PQ documentation, mock audits & more.',
    keywords: [
      'GMP compliance consulting',
      'USFDA audit preparation',
      'Schedule M implementation',
      'URS DQ IQ OQ PQ services',
      'mock regulatory inspection',
      'pharma GMP qualification',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'GMP Compliance Consulting Services | Indivirtus',
      description:
        'Get expert support in GMP compliance, Schedule M implementation, and regulatory readiness for pharma facilities.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['GMP Audit Readiness', 'Qualification Documentation Review'],
};
