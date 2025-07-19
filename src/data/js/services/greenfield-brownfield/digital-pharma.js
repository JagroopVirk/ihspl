import serviceImage from '@/assets/greenfield-brownfield/digital-pharma.jpg';
const link = '/services/greenfield-brownfield/digital-pharma';

export default {
  slug: 'digital-pharma',
  parentSlug: 'greenfield-brownfield',
  service_id: 'DPI001',
  report_type: 'Digital Integration Assessment Report',
  title: 'Digital Pharma Integration',
  name: 'Digital Pharma Integration',
  description:
    'Advanced digital transformation services for pharma—SCADA, IoT, eBMR/eBPR, serialization, and 21 CFR Part 11 compliance.',
  full_description:
    'Indivirtus Healthcare enables pharmaceutical manufacturers to digitally transform operations through our Digital Pharma Integration services. We assist with SCADA and IoT integration for real-time monitoring, implement electronic Batch Manufacturing Records (eBMR) and eBPR systems to eliminate paper trails, and deploy end-to-end serialization and track-and-trace systems for supply chain transparency. Our experts also guide clients in achieving 21 CFR Part 11 compliance, ensuring data integrity and audit-readiness for regulated environments.',
  estimated_duration: '6–8 weeks',
  deliverables: [
    'Digital Integration Assessment Report',
    'SCADA/IoT System Architecture',
    'eBMR/eBPR Implementation Plan',
    'Serialization Compliance Framework',
    '21 CFR Part 11 Audit Checklist',
  ],
  regulatory_basis: ['21 CFR Part 11', 'EU GMP Annex 11', 'PIC/S Guidelines', 'GS1 Standards for Serialization'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'CDMO', 'API Manufacturing'],
  expertise_area: ['Automation', 'Digital Compliance', 'Pharma IT Systems'],
  is_active: true,
  pageLink: link,
  icon: '💻',
  image: {
    path: serviceImage,
    alt: 'Digital transformation and integration services for pharma',
    caption: 'SCADA, eBMR/eBPR, IoT, serialization and digital compliance for GMP pharma',
  },
  gtm: {
    eventCategory: 'Digital Pharma Integration',
    eventAction: 'View Service',
    eventLabel: 'Digital Pharma Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Digital Integration Assessment Report'],
      certification: 'NA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Digital Pharma Integration',
    description:
      'Digital transformation services for pharma including SCADA & IoT, eBMR/eBPR systems, serialization, and data integrity compliance.',
    serviceType: 'Pharma Digitalization & Compliance',
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
      name: 'Digital Pharma Integration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'SCADA & IoT Integration',
          description:
            'Deploy SCADA and IoT frameworks to enable real-time visibility, equipment connectivity, and data-driven decision-making across pharmaceutical processes.',
        },
        {
          '@type': 'Offer',
          name: 'eBMR/eBPR Systems',
          description:
            'Implement electronic Batch Manufacturing and Packaging Records to digitize production, reduce manual errors, and enhance regulatory traceability.',
        },
        {
          '@type': 'Offer',
          name: 'Track & Trace Solutions',
          description:
            'Integrate serialization, aggregation, and global traceability standards (GS1) to ensure supply chain security and regulatory compliance.',
        },
        {
          '@type': 'Offer',
          name: '21 CFR Part 11 Compliance',
          description:
            'Ensure electronic records and signatures meet FDA’s 21 CFR Part 11 compliance through validation, audit trail, and access control systems.',
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
        name: 'What is SCADA and IoT integration in a pharmaceutical setting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SCADA and IoT allow for automated, real-time monitoring and control of equipment, utilities, and production parameters, improving GMP efficiency and data availability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do eBMR/eBPR systems improve pharmaceutical manufacturing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'eBMR and eBPR systems digitize batch and packaging records, reduce errors, streamline approvals, and provide instant compliance documentation for audits and reviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are pharma track & trace systems used for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Track & trace systems ensure product serialization and supply chain transparency, protecting against counterfeiting and complying with regulations like US DSCSA and EU FMD.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does 21 CFR Part 11 compliance entail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It requires systems handling electronic records/signatures to have validated controls, secure audit trails, restricted access, and documented SOPs per FDA guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a digital integration project typically take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Digital transformation projects generally take 6–8 weeks depending on facility complexity, system maturity, and whether integrations are local or cloud-based.',
        },
      },
    ],
  },
  meta: {
    title: 'Digital Pharma Integration | SCADA, eBMR, IoT, 21 CFR Compliance',
    description:
      'Digital transformation services for pharma—implement SCADA/IoT, eBMR/eBPR, serialization, and 21 CFR Part 11 compliance with Indivirtus.',
    keywords: [
      'digital pharma integration',
      'pharma SCADA systems',
      'eBMR eBPR implementation',
      'pharma serialization',
      '21 CFR Part 11 compliance',
      'track and trace pharma',
      'IoT pharma manufacturing',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Digital Pharma Integration | SCADA, eBMR, IoT, 21 CFR Compliance',
      description:
        'Transform pharma operations with SCADA & IoT, eBMR/eBPR systems, serialization, and data compliance services by Indivirtus.',
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
    'Digital Readiness Assessment',
    '21 CFR Part 11 Gap Analysis',
    'eBMR/eBPR System Blueprint',
    'Track & Trace Implementation Plan',
  ],
};
