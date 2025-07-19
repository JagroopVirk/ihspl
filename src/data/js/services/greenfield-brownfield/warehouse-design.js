import serviceImage from '@/assets/greenfield-brownfield/warehouse-design.jpg';
const link = '/services/greenfield-brownfield/warehouse-design';

export default {
  slug: 'warehouse-design',
  parentSlug: 'greenfield-brownfield',
  service_id: 'WH-DSGN-003',
  report_type: 'Design & Compliance Report',
  title: 'Warehouse Design for Pharmaceutical Facilities',
  name: 'GMP Warehouse Layout, Storage & Material Flow Consulting',
  description:
    'Design GMP-compliant pharmaceutical warehouses with expert focus on storage types, personnel flow, and material traceability.',
  full_description:
    'Our Warehouse Design consulting service ensures pharmaceutical storage areas meet stringent GMP requirements. We specialize in optimal layout planning, personnel and material flow segregation, hazardous and cold storage accommodation, and full traceability systems. Whether you are constructing a new facility or upgrading an existing one, our design experts help create safe, compliant, and highly functional warehousing spaces for raw materials, APIs, intermediates, and finished products.',
  estimated_duration: '3–5 weeks',
  deliverables: [
    'GMP-Compliant Warehouse Layout Drawings',
    'Storage Zone Classification & Specifications',
    'Personnel and Material Flow Maps',
    'Traceability & Barcode Integration Plan',
    'Cold & Hazardous Material Storage Design',
  ],
  regulatory_basis: ['EU GMP', 'US FDA 21 CFR', 'WHO TRS 1019', 'ISPE Baseline Guide Vol 6'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'Contract Manufacturing'],
  expertise_area: ['Facility Engineering', 'GMP Compliance', 'Pharma Operations'],
  is_active: true,
  pageLink: link,
  icon: '🏗️',
  image: {
    path: serviceImage,
    alt: 'GMP pharmaceutical warehouse layout design',
    caption: 'GMP-compliant warehouse design for pharmaceutical manufacturing',
  },
  gtm: {
    eventCategory: 'Warehouse Design',
    eventAction: 'view_service',
    eventLabel: 'warehouse-design',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Design & Compliance Report'],
      certification: 'GMP-Compliant Facility Support',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GMP Warehouse Design & Consulting',
    description:
      'Expert facility design consulting for pharmaceutical warehouses including cold storage, hazardous material storage, traceability, and personnel/material flow optimization.',
    serviceType: 'Pharmaceutical Warehouse Design Service',
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
      name: 'Warehouse Design Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GMP-Compliant Warehouse Layout',
            description:
              'Designing efficient, regulatory-compliant layouts for pharma warehouses to ensure safety, space optimization, and compliance with cGMP.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cold & Hazardous Material Storage Design',
            description:
              'Specialized storage planning for temperature-sensitive and hazardous materials, including insulation, zoning, and monitoring systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Material Traceability System Design',
            description:
              'Integration-ready design for barcode/RFID-based traceability systems for inbound, storage, and outbound material tracking.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personnel Flow Design',
            description:
              'Zoning and layout design for controlled personnel movement to avoid cross-contamination and ensure hygiene control.',
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
        name: 'Why is a GMP-compliant warehouse layout important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GMP-compliant warehouse layout ensures materials are stored and handled according to pharmaceutical standards, reducing contamination risk and ensuring regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is hazardous material storage handled in pharma warehouses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We design dedicated zones with appropriate insulation, ventilation, and safety protocols for storing flammable, corrosive, or toxic materials in compliance with global safety standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What systems are used for material traceability in warehouses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traceability is achieved through barcode or RFID systems integrated with warehouse management systems (WMS) to track materials from receipt to dispatch.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure proper personnel flow in a GMP warehouse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Personnel movement is managed by segregated entry/exit zones, gowning areas, and unidirectional flow pathways to prevent cross-contamination and ensure hygiene.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can this service support both Greenfield and Brownfield pharma projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our warehouse design service is tailored for both Greenfield and Brownfield pharmaceutical projects, including facility upgrades and new constructions.',
        },
      },
    ],
  },
  meta: {
    title: 'GMP Warehouse Design & Layout | Cold Storage & Material Flow | Indivirtus',
    description:
      'Optimize your pharmaceutical warehouse with GMP-compliant layout, traceability, cold & hazardous storage, and personnel flow planning. Delivered by Indivirtus CRO experts.',
    keywords: [
      'pharma warehouse design',
      'GMP layout consulting',
      'hazardous material storage pharma',
      'cold chain warehouse design',
      'material traceability pharma',
      'warehouse facility design pharmaceutical',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'GMP Warehouse Design | Pharma Storage Layout | Indivirtus',
      description:
        'Design efficient GMP pharmaceutical warehouses with cold storage, hazardous zones, and full traceability. Powered by Indivirtus.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['GMP Warehouse Layout Assessment', 'Material Flow Audit', 'Storage Compliance Check'],
};
