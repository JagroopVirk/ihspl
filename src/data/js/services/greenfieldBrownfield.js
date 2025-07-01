import serviceImage from '../../../assets/greenfieldBrownfieldProjects.png';
const link = '/services/greenfield-brownfield';

export default {
  service_id: 'cro-greenfield-brownfield',
  report_type: 'Pharma Turnkey Project Setup',
  title: 'Turnkey Greenfield & Brownfield Projects',
  name: 'Greenfield and Brownfield Turnkey Pharmaceutical Projects',
  description:
    'End-to-end project execution for new (Greenfield) and upgrade (Brownfield) pharmaceutical manufacturing facilities.',
  full_description:
    'Indivirtus offers turnkey consulting and implementation services for Greenfield and Brownfield pharmaceutical projects. Our CRO services include conceptual planning, design, execution, compliance, and technology transfer for Finished Dosage Forms (FDFs), Active Pharmaceutical Ingredients (APIs), and Intermediates. We ensure regulatory-ready facilities through a single-window approach—from layout to validation—meeting all global GMP requirements.',
  estimated_duration: '6–18 months depending on scope and regulatory jurisdiction',
  deliverables: [
    'Concept-to-commissioning project plan',
    'Facility layout and cleanroom design',
    'Process flow diagrams (material, personnel, utility)',
    'Equipment & utility qualification',
    'Validation master plan (VMP)',
    'Regulatory submission documentation (as needed)',
  ],
  regulatory_basis: ['WHO-GMP', 'EU-GMP', 'USFDA cGMP', 'PIC/S Guidelines', 'Schedule M (India)'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'APIs', 'Biotech', 'CDMO'],
  expertise_area: ['Turnkey Projects', 'GMP Facility Design', 'Regulatory Engineering'],
  is_active: true,
  pageLink: link, // page link through variable
  icon: '🏗️',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical facility construction and design',
    caption: 'Complete Greenfield and Brownfield execution for pharma plants',
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'Greenfield_Project_Click',
    eventLabel: 'Turnkey Facility Setup',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Greenfield', 'Brownfield'],
      certification: 'Regulatory-Ready Turnkey Facility',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Turnkey Greenfield and Brownfield Projects',
    description:
      'Complete project execution for FDF, API, and Intermediate manufacturing units under global GMP regulations.',
    serviceType: 'Turnkey Pharmaceutical Facility Projects',
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
      name: 'Turnkey Facility Setup Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Greenfield Project Execution for Finished Dosage Forms',
            description: 'From concept to commissioning of new FDF plants including layout, utilities, and validation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Greenfield Project Execution for APIs',
            description: 'Complete setup of new API facilities with compliance to cGMP and ICH Q7 standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Greenfield Setup for Intermediates Manufacturing',
            description:
              'Design and establish facilities for intermediates with integrated safety and environmental controls.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brownfield Expansion for FDF Manufacturing',
            description:
              'Upgrading and expanding existing FDF units for capacity enhancement and regulatory compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brownfield Upgrade for API Units',
            description: 'Retrofitting legacy API plants to meet current GMP expectations and regulatory requirements.',
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
        name: 'What is the difference between Greenfield and Brownfield pharmaceutical projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Greenfield projects are entirely new facilities built from the ground up, while Brownfield projects involve upgrading or expanding existing facilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services are included in a turnkey Greenfield FDF project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cover complete design, engineering, equipment selection, utility integration, validation, and regulatory compliance for finished dosage form manufacturing plants.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help retrofit our existing API facility for regulatory audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our Brownfield services include facility revamp, process requalification, documentation alignment, and CAPA support to meet global GMP expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete a Greenfield project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical timelines range from 12 to 18 months depending on the size and regulatory scope of the facility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer end-to-end compliance support with turnkey execution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide design, engineering, execution, and documentation aligned with WHO-GMP, EU-GMP, and other standards to ensure inspection readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the scope of your turnkey pharmaceutical project services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our turnkey services cover feasibility studies, facility design, equipment procurement, validation, regulatory compliance, construction, commissioning, and post-handover support for greenfield and brownfield pharmaceutical projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure GMP compliance in facility design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We align facility designs with USFDA, EMA, WHO, PIC/S, and Revised Schedule M guidelines, incorporating GMP-compliant cleanroom zoning, HVAC systems, and validation protocols like DQ, IQ, OQ, and PQ.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical timeline for a greenfield pharmaceutical project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Timelines vary, but a greenfield project typically takes 12–24 months, depending on facility size, complexity, and regulatory requirements. Brownfield upgrades may take 6–12 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you support brownfield facility upgrades?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We conduct gap assessments, retrofit designs for GMP compliance, enhance capacity, support tech transfers, and minimize downtime to ensure seamless upgrades.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries benefit from your project services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers, biotech firms, API producers, and CROs benefit from our services, ensuring compliant facilities for finished dosage forms, APIs, and intermediates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you integrate Industry 4.0 into pharmaceutical projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We incorporate SCADA, BMS, IoT sensors, eBMR/eBPR systems, and 21 CFR Part 11-compliant solutions to enable real-time monitoring, automation, and data integrity.',
        },
      },
    ],
  },
  meta: {
    title: 'Turnkey Greenfield & Brownfield Pharma Projects | Indivirtus CRO',
    description:
      'Indivirtus provides complete turnkey project services for pharmaceutical manufacturing facilities – Greenfield and Brownfield – covering FDF, API, and intermediates.',
    keywords: [
      'greenfield pharma projects',
      'brownfield pharma projects',
      'turnkey API facility',
      'turnkey dosage form setup',
      'pharma facility construction',
      'regulatory ready pharma plant',
      'GMP compliant design',
      'FDF plant turnkey',
      'intermediate manufacturing',
      'pharma engineering CRO',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Greenfield & Brownfield Turnkey Pharma Projects | Indivirtus',
      description:
        'Turnkey execution of FDF, API, and Intermediate pharmaceutical facilities from concept to GMP readiness.',
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
    'Facility Engineering Assessment',
    'Regulatory Compliance Mapping',
    'Cleanroom Design Review',
    'Utility Qualification',
    'FDF/API Manufacturing Layout Audit',
  ],
};
