import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/oel-determination';
import { FaCheck } from 'react-icons/fa6';

export default {
  service_id: 'oel_determination_001',
  report_type: 'Comprehensive Occupational Exposure Assessment',
  title: 'Occupational Exposure Limit (OEL) Determination Services',
  name: 'OEL Assessment & Control Strategy',
  description:
    'Scientifically validated OEL determination with exposure modeling, containment recommendations, and global regulatory alignment for pharmaceutical compounds.',
  full_description:
    'Our OEL Determination service provides pharmaceutical manufacturers with comprehensive occupational safety solutions. We conduct rigorous toxicological evaluations, develop compound-specific exposure limits, perform advanced airborne dispersion modeling, and design tailored containment strategies. Our assessments integrate NIOSH, ACGIH, and EU-REACH methodologies while considering route-specific risks (inhalation, dermal, ocular) to ensure complete worker protection and regulatory compliance.',
  estimated_duration: '6-10 business days (expedited options available)',
  deliverables: [
    'Comprehensive OEL justification report',
    'Route-specific exposure limit analysis',
    'Airborne dispersion modeling results',
    'NIOSH/ACGIH/EU-REACH benchmark comparison',
    'Containment control strategy',
    'Engineering control recommendations',
    'PPE requirement guidelines',
    'Exposure monitoring plan',
    'Regulatory compliance assessment',
    'Training package for EHS teams',
  ],
  regulatory_basis: [
    'NIOSH Occupational Exposure Banding e-Tool (2019)',
    'ACGIH Threshold Limit Values (TLVs) and Biological Exposure Indices (BEIs)',
    'EU REACH Regulation (EC) No 1907/2006',
    'OSHA Permissible Exposure Limits (29 CFR 1910)',
    'ISPE Risk-Based Manufacture of Pharmaceutical Products (Risk-MaPP 2.0)',
    'EMA Guideline on Hazardous Medicines (EMA/CHMP/608186/2009)',
    'ISO 28862: Workplace Atmospheres Guidance',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Pharmaceutical Manufacturing',
    'Biologics & HPAPI Production',
    'Contract Development & Manufacturing (CDMO)',
    'API & Formulation Facilities',
    'Oncology Drug Manufacturers',
    'Research & Development Organizations',
    'Veterinary Pharmaceutical Producers',
  ],
  expertise_area: [
    'Occupational Toxicology',
    'Exposure Risk Modeling',
    'Containment Engineering',
    'Industrial Hygiene',
    'Regulatory Compliance',
    'Occupational Medicine',
  ],
  is_active: true,
  pageLink: link,
  icon: '🌬️',
  image: {
    path: serviceImage,
    alt: 'Occupational Exposure Limit (OEL) determination and containment strategy services',
    caption: 'Science-based OELs with comprehensive exposure control strategies for worker safety.',
  },
  pageContent: {
    hero: {
      heading: 'Comprehensive OEL Assessment & Control Strategies',
      tagline: 'Ensuring Worker Safety with Tailored Exposure Solutions',
      detail:
        'At Indivirtus Healthcare Services, we deliver rigorous Occupational Exposure Limit (OEL) assessments and containment strategies to protect workers and ensure compliance in pharmaceutical manufacturing.',
    },
    overview: {
      heading: 'Overview',
      overviewCards: [
        {
          heading: 'What We Do',
          detail:
            'We provide comprehensive OEL assessments, integrating toxicological evaluations, route-specific risk analysis, and advanced modeling to develop safe exposure limits and containment strategies.',
        },
        {
          heading: 'Why It Matters',
          detail:
            'Accurate OELs protect workers from hazardous compounds, ensure regulatory compliance, and minimize occupational health risks in pharmaceutical manufacturing.',
        },
        {
          heading: 'Our Role',
          detail:
            'As a trusted CRO, we deliver scientifically robust OEL solutions and actionable control strategies to enhance workplace safety and meet global regulatory standards.',
        },
      ],
    },
    approach: {
      heading: 'Our Expert Approach',
      detail: [
        'At Indivirtus, we combine rigorous toxicological evaluations with advanced airborne dispersion modeling and route-specific risk analysis. Our assessments integrate NIOSH, ACGIH, and EU REACH methodologies to deliver precise OELs and tailored containment strategies. Our certified toxicologists ensure every solution is scientifically defensible, operationally practical, and compliant with global standards.',
      ],
    },
    deliverables: {
      heading: 'Service Deliverables',
      icon: FaCheck,
      itemList: [
        'Comprehensive OEL justification report',
        'Route-specific exposure limit analysis',
        'Airborne dispersion modeling results',
        'NIOSH/ACGIH/EU-REACH benchmark comparison',
        'Containment control strategy',
        'Engineering control recommendations',
        'PPE requirement guidelines',
        'Exposure monitoring plan',
        'Regulatory compliance assessment',
        'Training package for EHS teams',
      ],
    },
    compliance: {
      heading: 'Regulatory Compliance & Guidelines',
      detail: [
        'Our OEL determination services adhere to stringent global regulatory standards, ensuring worker safety and compliance in pharmaceutical manufacturing. By aligning with leading guidelines, we deliver robust, audit-ready solutions that support safe operations and market compliance.',
      ],
      itemList: [
        'NIOSH Occupational Exposure Banding e-Tool (2019)',
        'ACGIH Threshold Limit Values (TLVs) and Biological Exposure Indices (BEIs)',
        'EU REACH Regulation (EC) No 1907/2006',
        'OSHA Permissible Exposure Limits (29 CFR 1910)',
        'ISPE Risk-Based Manufacture of Pharmaceutical Products (Risk-MaPP 2.0)',
        'EMA Guideline on Hazardous Medicines (EMA/CHMP/608186/2009)',
        'ISO 28862: Workplace Atmospheres Guidance',
      ],
    },
    applications: {
      heading: 'Applications & Use Cases',
      detail: [
        'Our OEL determination and control strategy services are critical for manufacturers handling potent or hazardous compounds, developing new drugs, or operating shared facilities. These solutions are applied during process design, facility upgrades, and occupational safety planning to protect workers and ensure compliance.',
        'From small-scale operations to large manufacturing plants, our tailored strategies ensure safe handling and regulatory adherence, enhancing workplace safety.',
      ],
    },
    conclusion: {
      heading: 'Why Choose Indivirtus',
      detail: [
        'Indivirtus Healthcare Services is a trusted leader in OEL determination and containment strategy development. Our certified toxicologists and regulatory experts deliver scientifically robust solutions, ensuring rapid turnaround, strict confidentiality, and adherence to industry best practices. We empower your facility with safe, compliant, and practical safety measures.',
        'Choose Indivirtus for reliable, actionable strategies that protect your workforce and streamline compliance.',
      ],
    },
    cta: {
      heading: 'Ready to Protect Your Workforce?',
      tagline: 'Partner with Indivirtus for expert OEL assessments and containment solutions.',
      aria: 'Contact Indivirtus for OEL Assessment Services',
    },
  },
  gtm: {
    eventCategory: 'Occupational Safety',
    eventAction: 'Service Inquiry',
    eventLabel: 'OEL Determination',
    customDimensions: {
      serviceTier: 'Expert',
      regulatoryLevel: 'Global Standards',
    },
    dataLayerPush: {
      reportType: ['Exposure Assessment', 'Safety Strategy'],
      methodology: ['NIOSH', 'ACGIH', 'REACH'],
      compoundType: ['API', 'HPAPI', 'Oncology'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Occupational Exposure Limit (OEL) Services',
    description: 'Comprehensive OEL determination with exposure modeling and containment strategy development.',
    serviceType: ['Risk Assessment', 'Occupational Safety', 'Regulatory Compliance'],
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
      availableLanguage: ['English', 'German', 'French', 'Japanese'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'OEL Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Comprehensive OEL Determination',
            description: 'Route-specific exposure limits with toxicological justification.',
            serviceOutput: 'OEL Assessment Report',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Advanced Exposure Modeling',
            description: 'Airborne dispersion simulations for real-world scenarios.',
            serviceOutput: 'Exposure Simulation Package',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Containment Strategy Development',
            description: 'Engineering and administrative control recommendations.',
            serviceOutput: 'Containment Implementation Plan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Global Regulatory Alignment',
            description: 'NIOSH/ACGIH/REACH comparative analysis.',
            serviceOutput: 'Regulatory Compliance Report',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹40,000 per compound (volume discounts available)',
      url: link,
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
      eligibleCustomerType: 'https://schema.org/Business',
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What toxicological data do you use to derive OELs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate comprehensive data including: 1) Acute and chronic toxicity studies, 2) Genotoxicity/carcinogenicity data, 3) Reproductive/developmental findings, 4) Human clinical experience, 5) Pharmacological properties, and 6) Physicochemical characteristics. For novel compounds, we apply read-across from structurally similar substances and QSAR modeling where appropriate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you address route-specific exposure risks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our assessments consider: 1) Inhalation bioavailability, 2) Dermal absorption rates, 3) Ocular irritation potential, and 4) Accidental ingestion risks. We develop separate limits for critical exposure routes and provide compound-specific PPE recommendations based on penetration characteristics.',
        },
      },
      {
        '@type': 'Question',
        name: 'What modeling approaches do you use for airborne exposure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We employ: 1) Computational fluid dynamics (CFD) for facility-scale modeling, 2) Near-field/far-field dispersion models, 3) Task-based exposure assessment, and 4) Monte Carlo simulations for probabilistic analysis. Our models account for compound-specific properties like vapor pressure and particle size distribution.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you determine appropriate containment levels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Containment recommendations are based on: 1) OEL potency category, 2) Process dustiness, 3) Material handling requirements, 4) Facility layout, and 5) Operational workflows. We specify appropriate solutions ranging from local exhaust ventilation to full isolator systems for HPAPIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help implement OEL-based controls in existing facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer: 1) Facility gap assessments, 2) Retrofit containment solutions, 3) Workflow optimization, 4) Staff training programs, and 5) Performance verification. Our engineers specialize in practical implementations that balance safety requirements with operational feasibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should OELs be reviewed and updated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend: 1) Annual review of all compounds, 2) Immediate reassessment when new toxicological data emerges, 3) Systematic review every 3 years, and 4) Re-evaluation after significant process changes. Our service includes optional monitoring for toxicology updates on your compounds.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is an Occupational Exposure Limit (OEL) assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An OEL assessment establishes safe exposure limits for workers handling pharmaceutical compounds, based on toxicological evaluations and route-specific risks (inhalation, dermal, ocular). It ensures worker safety and regulatory compliance through tailored containment strategies.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure compliance with OEL regulations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our OEL assessments integrate NIOSH, ACGIH, EU REACH, OSHA, ISPE, and EMA guidelines. We provide comprehensive, scientifically justified reports and containment strategies to ensure audit-ready compliance and worker safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are included in the OEL determination service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deliverables include a comprehensive OEL justification report, route-specific exposure limit analysis, airborne dispersion modeling results, NIOSH/ACGIH/EU-REACH benchmark comparison, containment control strategy, engineering control recommendations, PPE guidelines, exposure monitoring plan, regulatory compliance assessment, and training package for EHS teams.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete an OEL assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline varies based on compound complexity and facility requirements, but we typically deliver OEL assessments within 7-14 business days. Expedited options are available for urgent projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is route-specific exposure analysis important in OEL assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Route-specific analysis (inhalation, dermal, ocular) ensures that all potential exposure pathways are evaluated, providing a comprehensive safety profile. This approach enhances worker protection and aligns with regulatory expectations.',
        },
      },
    ],
  },
  meta: {
    title: 'Expert OEL Determination Services | Exposure Modeling & Containment - Indivirtus',
    description:
      'Comprehensive occupational exposure limit assessments with route-specific toxicology, advanced airborne modeling, and global regulatory alignment for pharmaceutical worker safety.',
    keywords: [
      'OEL determination service',
      'occupational exposure limits',
      'NIOSH ACGIH REACH alignment',
      'airborne exposure modeling',
      'pharmaceutical containment strategy',
      'HPAPI safety assessment',
      'route-specific toxicology',
      'worker protection planning',
      'industrial hygiene services',
      'regulatory compliant OELs',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: `https://www.indivirtus.com${link}`,
      site_name: 'Indivirtus Occupational Safety',
      published_time: '2023-06-15T00:00:00+05:30',
      modified_time: '2023-09-20T00:00:00+05:30',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Professional OEL Determination Services | Indivirtus',
      description: 'Science-based OELs with comprehensive exposure control strategies for worker safety.',
      image: serviceImage.src,
      site: '@indivirtus',
      creator: '@indivirtus_safety',
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    additionalMeta: {
      viewport: 'width=device-width, initial-scale=1.0',
      themeColor: '#0066cc',
      author: 'Indivirtus Occupational Health Team',
    },
  },
  assessmentTypes: [
    'Standard OEL Determination',
    'HPAPI Exposure Assessment',
    'Advanced Airborne Modeling',
    'Containment System Design',
    'Regulatory Compliance Review',
    'Occupational Safety Program',
  ],
  serviceTiers: [
    {
      name: 'Basic OEL Assessment',
      features: [
        'Single compound evaluation',
        'Toxicological limit derivation',
        'Basic exposure consideration',
        'Regulatory compliance check',
      ],
      deliveryTime: '6-8 business days',
    },
    {
      name: 'Comprehensive OEL Package',
      features: [
        'Route-specific exposure analysis',
        'Airborne dispersion modeling',
        'Containment recommendations',
        'Global benchmark comparison',
        'PPE guidance',
      ],
      deliveryTime: '8-10 business days',
    },
    {
      name: 'Enterprise Solution',
      features: [
        'Facility-wide assessment',
        'Custom exposure control system',
        'Staff training program',
        'Annual review service',
        'Inspection support package',
      ],
      deliveryTime: 'Custom timeline',
    },
  ],
};
