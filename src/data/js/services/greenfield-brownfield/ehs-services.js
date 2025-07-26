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
  pageContent: {
    hero: {
      heading: "EHS Services for <span class='halfHeading'>Pharma Safety & Compliance</span>",
      tagline: 'Foster Safe, Sustainable Operations with Expert Guidance',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>EHS (Environment, Health & Safety) services</strong> ensure pharmaceutical facilities achieve worker safety, regulatory compliance, and sustainability. From HAZOP and HIRA assessments to fire safety, waste management, and occupational health programs, we deliver <strong>integrated safety solutions</strong> for GMP-compliant operations.',
    },
    overview: {
      heading: "Mastering EHS <span class='halfHeading'>Excellence</span>",
      overviewCards: [
        {
          heading: 'What are EHS Services?',
          detail:
            'Our services provide comprehensive support for pharmaceutical facilities, including HAZOP and HIRA risk assessments, fire and emergency planning, waste management systems, and occupational health programs, ensuring <strong>regulatory compliance</strong> and safety.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Robust EHS practices ensure <strong>worker safety</strong>, environmental sustainability, and regulatory compliance, reducing risks, avoiding penalties, and fostering a culture of safety in pharmaceutical operations.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led EHS solutions</strong>, integrating safety and compliance into your facility’s lifecycle to achieve sustainable, audit-ready operations.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>EHS Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our EHS services are led by certified safety and regulatory experts with <strong>global expertise</strong>. We conduct thorough HAZOP and HIRA risk assessments, develop fire safety and evacuation plans, implement waste management systems, and design occupational health programs tailored to pharmaceutical operations.',
        'Our approach integrates EHS practices early in the project lifecycle, delivering <strong>proactive and sustainable solutions</strong> that align with global standards, ensuring worker safety, environmental compliance, and audit readiness.',
      ],
    },
    deliverables: {
      heading: "EHS Services <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>EHS Compliance Report</strong>: Detailed assessment of safety and regulatory compliance.',
        '<strong>HAZOP & HIRA Risk Registers</strong>: Comprehensive risk identification and mitigation plans.',
        '<strong>Fire Safety & Evacuation Plan</strong>: Tailored strategies for emergency preparedness.',
        '<strong>Waste Management Protocol</strong>: Systems for compliant waste handling and disposal.',
        '<strong>Occupational Health Program Blueprint</strong>: Framework for worker health and safety.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our EHS services align with stringent global and local standards, ensuring your facility is <strong>audit-ready</strong> and compliant with international and regional regulations. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.',
      ],
      itemList: [
        '<strong>OSHA Guidelines</strong>: U.S. standards for occupational health and safety.',
        '<strong>GMP Annexes (EU, WHO)</strong>: Global good manufacturing practice guidelines for safety.',
        '<strong>Environment Protection Rules, CPCB (India)</strong>: Indian regulations for environmental compliance.',
        '<strong>NFPA Codes for Fire Safety</strong>: Standards for fire prevention and emergency planning.',
        '<strong>ICH Q9</strong>: Quality Risk Management framework for risk-based EHS practices.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our EHS services are essential for pharmaceutical facilities aiming to ensure <strong>worker safety</strong>, environmental compliance, and regulatory adherence. Ideal for new facilities or operational upgrades, our solutions support risk management, waste handling, and emergency preparedness. Key use cases include implementing <strong>HAZOP-compliant systems</strong>, ensuring fire safety for multi-product facilities, and aligning with CPCB regulations for waste management.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical manufacturers, delivering <strong>expert-led EHS solutions</strong> backed by certified safety and regulatory experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your facility with safe, compliant, and sustainable operations, driving <strong>regulatory success</strong> and operational excellence.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>EHS Compliance?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Safety Solutions',
      aria: 'Contact us to discuss your EHS needs',
    },
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
      serviceUrl: `https://www.indivirtus.com${link}`,
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
      {
        '@type': 'Question',
        name: 'What do EHS services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include HAZOP and HIRA risk assessments, fire safety and evacuation planning, waste management systems, and occupational health programs, tailored for pharmaceutical facilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from EHS services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers establishing new facilities or upgrading operations, particularly those prioritizing worker safety, environmental compliance, and regulatory adherence, benefit from our EHS solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with OSHA Guidelines, GMP Annexes (EU, WHO), CPCB Environment Protection Rules, NFPA Codes, and ICH Q9, ensuring compliance with global and local safety standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the EHS services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive an EHS compliance report, HAZOP & HIRA risk registers, fire safety and evacuation plans, waste management protocols, and an occupational health program blueprint.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can EHS services be customized for our facility’s needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your facility’s specific operational and regulatory requirements, ensuring practical and compliant EHS solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support waste management and fire safety?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide waste management protocols for compliant disposal and fire safety plans with evacuation strategies, ensuring environmental and operational safety aligned with regulatory standards.',
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
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'EHS Services for Pharma | HAZOP, Fire Safety, Waste & Health Programs',
      description:
        'HAZOP, HIRA, emergency response, waste handling, and occupational health programs tailored for GMP-compliant pharmaceutical environments.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
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
