import serviceImage from '@/assets/gmp-audits/facility-qualification.jpg';
const link = '/services/gmp-audits/facility-qualification';

export default {
  slug: 'facility-qualification',
  parentSlug: 'validation-services',
  service_id: 'VH-FACQ',
  report_type: 'Qualification Report',
  title: 'Facility Qualification Services',
  name: 'Facility Qualification',
  description:
    'Comprehensive facility qualification including DQ, IQ, OQ, PQ, validation of HVAC, water, and cleaning systems.',
  full_description:
    'Indivirtus provides end-to-end Facility Qualification services for pharmaceutical manufacturing sites. From Document Qualification (DQ) to Performance Qualification (PQ), our services cover the full validation lifecycle. We specialize in HVAC and water system validations and offer support with Validation Master Plans (VMPs) aligned with global cGMP expectations. Our approach ensures your facility is inspection-ready and meets the highest regulatory standards.',
  estimated_duration: '4-6 weeks (based on facility size)',
  deliverables: [
    'DQ, IQ, OQ, PQ protocols and reports',
    'Validated HVAC and water systems',
    'Cleaning validation summary',
    'Validation Master Plan (VMP)',
  ],
  regulatory_basis: ['EU GMP Annex 15', 'ICH Q8/Q9/Q10', 'US FDA Guidance'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biologics', 'CDMO'],
  expertise_area: ['Facility Validation', 'GMP Compliance'],
  is_active: true,
  pageLink: link,
  icon: '🏗️',
  image: {
    path: serviceImage,
    alt: 'Facility Qualification Validation Services',
    caption: 'DQ, IQ, OQ, PQ, HVAC & Water System Validation',
  },
  gtm: {
    eventCategory: 'Facility Qualification',
    eventAction: 'View Service',
    eventLabel: 'Facility Qualification Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Qualification Report'],
      certification: 'GMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Facility Qualification',
    description: 'DQ, IQ, OQ, PQ services and validation of pharmaceutical utilities.',
    serviceType: 'Facility Validation Services',
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
      name: 'Facility Qualification Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DQ, IQ, OQ, PQ',
            description: 'Design, Installation, Operational, and Performance Qualifications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cleaning & HVAC Validation',
            description: 'Validation of HVAC systems and cleaning procedures under controlled conditions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Water System Validation',
            description: 'End-to-end validation of purified and WFI water systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Validation Master Plan (VMP)',
            description: 'Preparation and review of comprehensive VMP documents.',
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
        name: 'What is facility qualification in pharma?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Facility qualification ensures pharmaceutical manufacturing environments meet regulatory and operational standards through DQ, IQ, OQ, and PQ phases.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is HVAC validation important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HVAC systems control contamination and air quality in cleanrooms. Validating them confirms their effectiveness and compliance with GMP.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Validation Master Plan (VMP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A VMP outlines the approach, responsibilities, and schedules for validation activities across the facility and its utilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does facility qualification take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline varies by facility complexity but typically ranges from 4 to 6 weeks for end-to-end qualification.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide protocol and report templates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide validated templates and also customize them as per your facility design and compliance framework.',
        },
      },
    ],
  },
  meta: {
    title: 'Facility Qualification | DQ, IQ, OQ, PQ, HVAC & Water Validation - Indivirtus',
    description:
      'Get comprehensive facility qualification services including DQ, IQ, OQ, PQ, HVAC & water validation, and VMP support. Ensure regulatory compliance with Indivirtus.',
    keywords: [
      'Facility Qualification',
      'DQ IQ OQ PQ',
      'Validation Master Plan',
      'HVAC validation',
      'Water system validation',
      'GMP facility validation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Facility Qualification | DQ, IQ, OQ, PQ, HVAC & Water Validation',
      description: 'End-to-end validation services for GMP compliance with Indivirtus.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['DQ', 'IQ', 'OQ', 'PQ', 'VMP Review'],
};
