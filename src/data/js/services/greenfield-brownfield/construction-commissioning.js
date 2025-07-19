import serviceImage from '@/assets/greenfield-brownfield/construction-commissioning.jpg';
const link = '/services/greenfield-brownfield/construction-commissioning';

export default {
  slug: 'construction-commissioning',
  parentSlug: 'greenfield-brownfield',
  service_id: 'CRO-CM-017',
  report_type: 'Turnkey Project Execution',
  title: 'Construction & Commissioning Services',
  name: 'Construction & Commissioning',
  description:
    'Comprehensive construction management and commissioning support for pharmaceutical manufacturing facilities.',
  full_description:
    'Our Construction & Commissioning services ensure the successful execution of pharmaceutical manufacturing facilities through meticulous project management, on-site supervision, utility commissioning, and robust documentation. From concept to final handover, we ensure timelines, quality, and regulatory compliance are seamlessly integrated. Our experts work closely with engineering, procurement, and qualification teams to ensure that every element—from structural execution to critical utilities—is aligned with GMP requirements and global standards.',
  estimated_duration: '3–12 months depending on project scope',
  deliverables: [
    'Construction timelines & site execution plans',
    'Utility commissioning protocols',
    'Daily & weekly progress reports',
    'As-built documentation and project handover file',
    'Deviation and change control records',
  ],
  regulatory_basis: ['GMP', 'Schedule M', 'USFDA', 'EMA'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'API Manufacturing'],
  expertise_area: ['Project Execution', 'Commissioning', 'Construction Management'],
  is_active: true,
  pageLink: link,
  icon: '🏗️',
  image: {
    path: serviceImage,
    alt: 'Construction & Commissioning of Pharmaceutical Facilities',
    caption: 'End-to-end construction and utility commissioning for GMP-compliant setups.',
  },
  gtm: {
    eventCategory: 'Construction & Commissioning',
    eventAction: 'View Service',
    eventLabel: 'construction-commissioning',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Construction Timeline', 'Commissioning Protocol'],
      certification: 'GMP Compliance',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Construction & Commissioning',
    description:
      'Turnkey execution of pharmaceutical facility construction with full utility commissioning and GMP-compliant documentation.',
    serviceType: 'Construction and Commissioning Services',
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
      name: 'Construction & Commissioning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Project Management',
            description: 'End-to-end project execution and milestone-based coordination for facility construction.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site Supervision',
            description:
              'Full-time on-site supervision and coordination with contractors and vendors for quality execution.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Utility Commissioning',
            description:
              'Start-up, testing, and qualification of utilities including HVAC, WFI, PW, and clean steam systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'As-built Documentation',
            description:
              'Compilation and validation of final project documents including layouts, schematics, and SOPs.',
          },
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
        name: 'What does your construction project management cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our project management covers end-to-end execution, including schedule tracking, resource allocation, contractor coordination, and risk management aligned with pharmaceutical GMP requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer on-site supervision during construction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we deploy experienced site engineers and supervisors to oversee daily activities, ensure safety compliance, and track deviations in real-time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What utilities do you commission as part of your services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We handle commissioning of HVAC systems, water systems (PW, WFI), clean steam, compressed air, nitrogen, and other critical process utilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the as-built documentation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As-built documentation includes final drawings, piping & instrumentation diagrams (P&IDs), equipment layouts, and SOPs validated for GMP compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you align construction and commissioning with regulatory inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. All execution and documentation are aligned to ensure readiness for regulatory inspections including USFDA, EMA, and WHO audits.',
        },
      },
    ],
  },
  meta: {
    title: 'Construction & Commissioning for Pharma Facilities | Indivirtus',
    description:
      'End-to-end construction and commissioning services for pharmaceutical facilities including site supervision, utility validation, and documentation support.',
    keywords: [
      'pharma construction management',
      'GMP facility commissioning',
      'utility qualification',
      'as-built documentation',
      'site supervision pharma',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Construction & Commissioning for Pharma Facilities | Indivirtus',
      description:
        'Complete execution and validation of pharmaceutical manufacturing setups with utility commissioning and documentation.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Commissioning Protocols', 'Utility Testing Records'],
};
