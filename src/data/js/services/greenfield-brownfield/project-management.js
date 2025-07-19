import serviceImage from '@/assets/greenfield-brownfield/project-management.jpg';
const link = '/services/greenfield-brownfield/project-management';

export default {
  slug: 'project-management',
  parentSlug: 'greenfield-brownfield',
  service_id: 'PM-TRK-001',
  report_type: 'Consultation & Implementation',
  title: 'Turnkey Project Management Services',
  name: 'Turnkey Project Management',
  description: 'Comprehensive EPCM project management solutions tailored for pharmaceutical facilities.',
  full_description:
    'Our turnkey project management services at Indivirtus Healthcare ensure seamless execution of pharmaceutical projects from concept to commissioning. With deep expertise in EPCM (Engineering, Procurement, Construction Management), we streamline project delivery while ensuring compliance, safety, and operational efficiency. Our approach includes real-time project dashboards, proactive risk mitigation, and tight control over time, cost, and quality – all designed to meet stringent GMP standards.',
  estimated_duration: '4–12 months (depending on scope)',
  deliverables: [
    'Detailed Project Execution Plan (PEP)',
    'EPCM implementation strategy',
    'Risk register and mitigation plan',
    'Real-time dashboards and KPI tracking',
    'Commissioning and handover documentation',
  ],
  regulatory_basis: [
    'ICH Q9 – Quality Risk Management',
    'WHO TRS 961 Annex 6 – GMP for pharmaceutical plants',
    'ISPE Good Practice Guides',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'API Manufacturing'],
  expertise_area: ['Project Engineering', 'Regulatory Compliance', 'Operations'],
  is_active: true,
  pageLink: link,
  icon: '🏗️',
  image: {
    path: serviceImage,
    alt: 'Turnkey Project Management in pharma facilities',
    caption: 'Complete EPCM-based project management with dashboards and GMP compliance',
  },
  gtm: {
    eventCategory: 'Turnkey Project Management',
    eventAction: 'view_service',
    eventLabel: 'project-management',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Consultation', 'Implementation'],
      certification: 'GMP-compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Turnkey Project Management',
    description:
      'End-to-end EPCM services for pharmaceutical facility execution, including dashboards, risk planning, and time-cost-quality control.',
    serviceType: 'Turnkey Project Management Services',
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
      name: 'Turnkey Project Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EPCM Services',
            description: 'Engineering, Procurement & Construction Management with compliance oversight.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Time-Cost-Quality Management',
            description: 'Integrated management of project timelines, budget, and GMP quality.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Risk Mitigation Planning',
            description: 'Strategic planning for technical, regulatory, and logistical risks.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Project Dashboards',
            description: 'Real-time project progress monitoring, KPIs, and analytics.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Scope-dependent pricing',
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
        name: 'What is included in your EPCM turnkey services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our EPCM services cover full lifecycle support including design, procurement, vendor coordination, construction oversight, qualification, and handover – all within GMP boundaries.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure time and cost control in pharma projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We implement detailed scheduling with resource tracking, cost forecasting, and proactive issue resolution to maintain tight control over deadlines and budgets.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are project dashboards and how do they help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our dashboards provide real-time visibility into project KPIs, risk metrics, and progress, enabling better decision-making and quicker responses to deviations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support regulatory risk management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we integrate regulatory risk assessment based on ICH Q9 principles and GMP expectations into every phase of the project.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can your team handle multi-site project execution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We have expertise in managing and standardizing multi-site projects while ensuring regulatory harmonization and operational consistency.',
        },
      },
    ],
  },
  meta: {
    title: 'Turnkey Project Management for Pharmaceutical Facilities | Indivirtus',
    description:
      'Indivirtus offers end-to-end turnkey project management services including EPCM, cost-time-quality control, dashboards, and risk planning for pharma facilities.',
    keywords: [
      'turnkey project management pharma',
      'pharmaceutical EPCM services',
      'GMP project dashboards',
      'risk mitigation in pharma',
      'time cost quality project control',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Turnkey Project Management for Pharmaceutical Facilities | Indivirtus',
      description:
        'Explore Indivirtus’ EPCM-based project management services tailored for GMP-compliant pharmaceutical setups.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['GMP Facility Planning', 'Risk-based EPCM Review', 'KPI-driven Project Audits'],
};
