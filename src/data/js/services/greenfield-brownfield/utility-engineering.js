import serviceImage from '@/assets/greenfield-brownfield/utility-engineering.jpg';
const link = '/services/greenfield-brownfield/utility-engineering';

export default {
  slug: 'utility-engineering',
  parentSlug: 'greenfield-brownfield',
  service_id: 'UTIL-ENG-005',
  report_type: 'Engineering Design Package',
  title: 'Process & Utility Engineering Services for Pharmaceutical Plants',
  name: 'HVAC, Water, Automation & ETP Design Consulting',
  description:
    'Integrated process and utility engineering services for pharmaceutical facilities including HVAC, water systems, P&ID, automation, and effluent treatment.',
  full_description:
    'Our Process & Utility Engineering services offer holistic design and consulting support for pharmaceutical manufacturing and cleanroom environments. From HVAC and purified water loop design to PFD & P&ID creation, automation with SCADA/BMS integration, and effluent treatment systems – we deliver end-to-end solutions to ensure operational efficiency and regulatory compliance. Whether setting up a new site or upgrading existing utilities, our multidisciplinary team brings engineering excellence to every project.',
  estimated_duration: '6–10 weeks',
  deliverables: [
    'HVAC System Design Layouts',
    'Water System (WFI, RO, PW) Design',
    'Process Flow Diagram (PFD)',
    'Piping & Instrumentation Diagram (P&ID)',
    'Automation Architecture (SCADA/BMS)',
    'Effluent Treatment System Design & Flowcharts',
  ],
  regulatory_basis: ['EU GMP Annex 1', 'ISPE Baseline Guides', 'US FDA 21 CFR', 'WHO TRS 1025'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'API Manufacturing', 'Sterile Manufacturing'],
  expertise_area: ['Utility Design', 'Process Engineering', 'Automation & SCADA'],
  is_active: true,
  pageLink: link,
  icon: '⚙️',
  image: {
    path: serviceImage,
    alt: 'Utility and process engineering for pharma',
    caption: 'HVAC, water, and automation utility engineering for pharma facilities',
  },
  gtm: {
    eventCategory: 'Utility Engineering',
    eventAction: 'view_service',
    eventLabel: 'utility-engineering',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Utility & Process Design'],
      certification: 'GMP Utility Engineering',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Process & Utility Engineering Services',
    description:
      'Utility and process engineering for pharmaceutical plants, covering HVAC, WFI/PW water systems, P&ID drawings, SCADA integration, and effluent system design.',
    serviceType: 'Pharmaceutical Utility Design Consulting',
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
      name: 'Process & Utility Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC & Water System Design',
            description:
              'Custom HVAC design with cleanroom zoning, temperature and humidity control, along with generation and distribution of PW, WFI, RO, and loop systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PFD & P&ID Preparation',
            description:
              'Engineering diagrams including Process Flow Diagrams (PFD) and Piping & Instrumentation Diagrams (P&ID) for equipment and utility integration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automation & SCADA Integration',
            description:
              'Design and integration of control systems like SCADA, BMS, and PLCs for real-time monitoring, data logging, and alarm management.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Effluent Treatment System Design',
            description:
              'Engineering of Zero Liquid Discharge (ZLD), biological/chemical treatment plants, neutralization systems, and ETP layouts with flow and control strategies.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Design-scope based pricing',
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
        name: 'What is included in pharmaceutical HVAC and water system design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes air handling unit (AHU) selection, duct routing, temperature/humidity control, and water system design like PW, WFI, RO, and loop system integration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are PFD and P&ID important in pharmaceutical engineering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They provide a visual representation of process flows and instrumentation, enabling accurate planning, construction, and troubleshooting of process and utility systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does SCADA integration support GMP operations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SCADA systems enable real-time monitoring, data integrity, and automated control over utilities and equipment, ensuring traceability and regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of effluent treatment systems are used in pharma plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We design biological, chemical, and ZLD effluent treatment plants tailored to the waste profile, ensuring compliance with local pollution control norms and GMP standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can these engineering designs be used for both Greenfield and Brownfield projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our process and utility engineering services are applicable to both new constructions and upgrades of existing pharmaceutical manufacturing facilities.',
        },
      },
    ],
  },
  meta: {
    title: 'Process & Utility Engineering | HVAC, Water, SCADA, ETP Design | Indivirtus',
    description:
      'Pharma-focused utility engineering services including HVAC design, water system loops, PFD/P&ID diagrams, SCADA integration, and effluent treatment systems. Delivered by Indivirtus experts.',
    keywords: [
      'pharma utility design',
      'HVAC and water system design',
      'PFD P&ID pharma',
      'SCADA integration',
      'effluent treatment system design',
      'pharmaceutical process engineering',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Process & Utility Engineering | HVAC & SCADA | Indivirtus',
      description:
        'Design pharma utility systems including HVAC, water systems, automation (SCADA), PFD/P&ID, and ETPs with Indivirtus CRO engineering experts.',
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
    'Utility Load Assessment',
    'Water & HVAC System Design Review',
    'Automation Audit',
    'ETP Capacity & Compliance Study',
  ],
};
