import serviceImage from '@/assets/greenfield-brownfield/ehs-services.jpg';
const link = '/services/greenfield-brownfield/ehs-services';

export default {
  slug: 'ehs-services',
  parentSlug: 'greenfield-brownfield',
  service_id: 'EHS001',
  report_type: 'EHS Compliance Report',
  title: 'EHS Services for Pharmaceutical Facilities',
  name: 'EHS Services',
  description:
    'Comprehensive Environment, Health & Safety (EHS) services including HAZOP, fire safety, waste handling, and occupational health for pharma operations.',
  full_description:
    'Indivirtus Healthcare offers a comprehensive suite of EHS (Environment, Health & Safety) services designed specifically for pharmaceutical facilities. We support clients with HAZOP and HIRA risk assessments, fire and emergency planning, waste management systems, and occupational health programs. These services are essential to ensure worker safety, regulatory compliance, and sustainable operations. Our team integrates EHS practices early into project lifecycles to reduce risks, avoid penalties, and foster a culture of safety across the organization.',
  estimated_duration: '3–6 weeks',
  deliverables: [
    'EHS Compliance Report',
    'HAZOP & HIRA Risk Registers',
    'Fire Safety & Evacuation Plan',
    'Waste Management Protocol',
    'Occupational Health Program Blueprint',
  ],
  regulatory_basis: [
    'OSHA Guidelines',
    'GMP Annexes (EU, WHO)',
    'Environment Protection Rules, CPCB (India)',
    'NFPA Codes for Fire Safety',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturing'],
  expertise_area: ['EHS Compliance', 'Risk Assessment', 'Fire & Waste Management'],
  is_active: true,
  pageLink: link,
  icon: '🛡️',
  image: {
    path: serviceImage,
    alt: 'EHS Compliance and Safety Services for Pharma Facilities',
    caption: 'HAZOP, emergency response, waste, and health programs for pharma',
  },
  gtm: {
    eventCategory: 'EHS Services',
    eventAction: 'View Service',
    eventLabel: 'EHS Services for Pharma',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['EHS Compliance Report'],
      certification: 'NA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'EHS Services',
    description:
      'EHS services for pharmaceutical industry including risk assessments, fire safety planning, waste management, and health programs.',
    serviceType: 'Environment, Health & Safety Services',
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
      name: 'EHS Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'HAZOP & HIRA Studies',
          description:
            'Perform Hazard and Operability (HAZOP) and Hazard Identification and Risk Assessment (HIRA) studies to identify and mitigate process risks.',
        },
        {
          '@type': 'Offer',
          name: 'Fire Safety & Emergency Plans',
          description:
            'Develop detailed fire prevention strategies, emergency response plans, and evacuation procedures tailored to GMP and containment environments.',
        },
        {
          '@type': 'Offer',
          name: 'Waste Management',
          description:
            'Design compliant hazardous and non-hazardous waste segregation, disposal, and recycling systems for pharmaceutical facilities.',
        },
        {
          '@type': 'Offer',
          name: 'Occupational Health Programs',
          description:
            'Create proactive occupational health monitoring and safety training programs to promote employee well-being and regulatory adherence.',
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
        name: 'What is the role of HAZOP and HIRA in pharmaceutical safety?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HAZOP identifies deviations in process design while HIRA evaluates operational risks. Together, they help in proactively managing hazards in pharmaceutical environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you develop fire safety and emergency response plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our fire safety planning includes hazard mapping, fire load calculation, evacuation routes, emergency roles/responsibilities, and mock drill protocols aligned with NFPA and local norms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does waste management include for pharma units?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We classify and segregate waste streams (solid, liquid, hazardous), define collection and storage protocols, and recommend compliant disposal/recycling vendors per CPCB and GMP.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are occupational health programs structured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Programs include health risk assessments, exposure monitoring, training on PPE, health checkups, and ergonomic workplace improvements to safeguard employees in high-risk areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are EHS services mandatory for GMP-compliant pharma units?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, EHS practices are critical to meet local environmental laws, occupational safety guidelines, and GMP requirements to avoid non-compliance, accidents, or production downtime.',
        },
      },
    ],
  },
  meta: {
    title: 'EHS Services for Pharma | HAZOP, Fire Safety, Waste & Health Programs',
    description:
      'End-to-end EHS services for pharmaceutical plants, including HAZOP, HIRA, fire safety plans, waste management, and occupational health initiatives by Indivirtus.',
    keywords: [
      'EHS services pharma',
      'HAZOP study pharmaceutical',
      'fire safety GMP',
      'waste management pharmaceutical',
      'occupational health GMP',
      'pharma safety risk assessment',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'EHS Services for Pharma | HAZOP, Fire Safety, Waste & Health Programs',
      description:
        'HAZOP, HIRA, emergency response, waste handling, and occupational health programs tailored for GMP-compliant pharmaceutical environments.',
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
    'HAZOP & HIRA Reports',
    'Fire Safety & Emergency Plan',
    'Waste Management Assessment',
    'Occupational Health Review',
  ],
};
