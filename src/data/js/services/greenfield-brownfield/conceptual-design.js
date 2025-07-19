import serviceImage from '@/assets/greenfield-brownfield/conceptual-design.jpg';
const link = '/services/greenfield-brownfield/conceptual-design';

export default {
  slug: 'conceptual-design',
  parentSlug: 'greenfield-brownfield',
  service_id: 'CD001',
  report_type: 'Facility Concept Report',
  title: 'Pharmaceutical Facility Conceptualization & Design',
  name: 'Conceptualization & Design',
  description:
    'Optimize your pharmaceutical facility layout with modular, cleanroom-centric, and BIM-integrated designs.',
  full_description:
    'Our Conceptualization & Design service offers intelligent layout planning and advanced design integration for pharmaceutical manufacturing units. From facility layout optimization to modular and prefabricated cleanroom designs, we ensure compliance, efficiency, and future scalability. With 3D modeling and BIM, we visualize workflows, HVAC zoning, and critical utility paths for optimized material and personnel movement. Our cleanroom zoning approach supports ISO/GMP classifications, supporting sterile and non-sterile environments.',
  estimated_duration: '2–6 weeks',
  deliverables: [
    'Facility layout drawings',
    '3D BIM models',
    'Zoning and classification maps',
    'Utility & material flow diagrams',
    'Design basis document (DBD)',
  ],
  regulatory_basis: ['GMP', 'ISO 14644', 'EU Annex 1', 'WHO TRS', 'Schedule M'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Vaccines', 'APIs', 'Medical Devices'],
  expertise_area: ['Facility Engineering', 'Cleanroom Design', 'GMP Compliance'],
  is_active: true,
  pageLink: link,
  icon: '📐',
  image: {
    path: serviceImage,
    alt: 'Conceptual facility design and layout for pharmaceutical plant',
    caption: 'Modular & GMP-Compliant Pharmaceutical Facility Design',
  },
  gtm: {
    eventCategory: 'Conceptual Design Services',
    eventAction: 'Service View',
    eventLabel: 'Facility Conceptualization & Design',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Facility Concept Report'],
      certification: 'GMP Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Conceptualization & Design',
    description: 'Modular, GMP-compliant facility layout and cleanroom design for pharmaceutical manufacturing.',
    serviceType: 'Pharmaceutical Facility Design Consulting',
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
      name: 'Conceptualization & Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Facility Layout Optimization',
          description: 'Design of optimal plant layouts that improve space utilization and GMP flow.',
        },
        {
          '@type': 'Offer',
          name: 'Modular & Prefab Design',
          description: 'Implementation of modular cleanroom panels and prefab concepts to reduce construction time.',
        },
        {
          '@type': 'Offer',
          name: '3D Modeling & BIM Integration',
          description: 'BIM-based digital twin modeling for clash detection and cross-functional visibility.',
        },
        {
          '@type': 'Offer',
          name: 'Cleanroom Zoning',
          description: 'Design of HVAC and pressure zoning layouts for sterile and non-sterile environments.',
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
        name: 'What is the purpose of facility layout optimization in pharma plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Facility layout optimization ensures material and personnel flow is compliant with GMP, reduces cross-contamination risks, and improves operational efficiency.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of using modular and prefab design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Modular and prefab designs significantly reduce on-site construction time and support scalable cleanroom installations with minimal disruption.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does BIM support pharmaceutical facility design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Building Information Modeling (BIM) provides a digital representation of the facility to detect design clashes, simulate HVAC flow, and support efficient construction planning.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is cleanroom zoning important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cleanroom zoning ensures controlled environments by segmenting areas based on cleanliness class, pressure differential, and HVAC design to comply with GMP and ISO 14644 standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support regulatory-compliant conceptual designs globally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our designs comply with global GMP regulations including EU Annex 1, WHO TRS, Schedule M, and ISO 14644, ensuring inspection readiness worldwide.',
        },
      },
    ],
  },
  meta: {
    title: 'Conceptual Facility Design | Pharmaceutical Plant Layout & Cleanroom Zoning',
    description:
      'Indivirtus offers expert conceptual design services for pharmaceutical facilities, including modular layouts, 3D BIM modeling, and GMP-compliant cleanroom zoning.',
    keywords: [
      'pharmaceutical facility design',
      'modular pharma plant layout',
      'BIM cleanroom design',
      'GMP compliant design',
      'conceptualization and design in pharma',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Conceptual Design Services for Pharma Facilities',
      description: 'Optimize your pharma facility with BIM, cleanroom zoning & GMP-aligned conceptual layouts.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Facility Layout Review', 'BIM Model Audit', 'GMP Design Gap Assessment'],
};
