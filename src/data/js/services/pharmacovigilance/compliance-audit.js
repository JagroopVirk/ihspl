import serviceImage from '@/assets/pharmacovigilance/compliance-audit.jpg';
const link = '/services/pharmacovigilance/compliance-audit';

export default {
  slug: 'compliance-audit',
  parentSlug: 'pharmacovigilance',
  service_id: 'PHV-COMP-AUD-001',
  report_type: 'Audit Readiness, CAPA Plans, Training Completion Reports',
  title: 'Compliance & Audit Support',
  name: 'Compliance & Audit Support',
  description: 'Ensure continuous pharmacovigilance compliance and be audit-ready with our expert support.',
  full_description:
    'At Indivirtus, we understand the evolving regulatory expectations around pharmacovigilance systems. Our Compliance & Audit Support service ensures your PV system is aligned with global standards through robust monitoring, inspection readiness, CAPA planning, and team training on GVP and ICH E2E guidelines. Whether preparing for a health authority audit or conducting internal reviews, our solutions are tailored to strengthen compliance and build confidence across all functions.',
  estimated_duration: '2–4 weeks depending on scope',
  deliverables: [
    'PV compliance assessment reports',
    'Audit readiness checklist',
    'CAPA plans & tracker',
    'Training session reports',
    'Mock inspection summaries',
  ],
  regulatory_basis: ['GVP Modules I-XVI', 'ICH E2E', 'EMA/FDA PV Guidance'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Clinical Research', 'Generic Drug Manufacturers'],
  expertise_area: ['Pharmacovigilance Compliance', 'Audit & Inspection Support', 'Regulatory Training'],
  is_active: true,
  pageLink: link,
  icon: '🕵️‍♂️',
  image: {
    path: serviceImage,
    alt: 'Pharmacovigilance Compliance & Audit Support Services',
    caption: 'PV audit readiness and compliance assurance by Indivirtus',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Compliance Audit Support Accessed',
    eventLabel: 'PV Compliance & Audit Support',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Audit Readiness Report', 'CAPA Action Plan'],
      certification: 'GVP / ICH Compliance',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Compliance & Audit Support',
    description:
      'Indivirtus provides expert pharmacovigilance compliance monitoring, audit preparation, CAPA management, and regulatory training for global readiness.',
    serviceType: 'Pharmacovigilance Compliance and Audit Support',
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
      name: 'Compliance & Audit Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'PV Compliance Monitoring',
          description:
            'Ongoing monitoring of PV operations against GVP and ICH standards, including periodic review and risk-based assessments.',
        },
        {
          '@type': 'Offer',
          name: 'Audit/Inspection Preparation',
          description:
            'Mock audits, gap analysis, document review, and inspection training to ensure readiness for regulatory audits.',
        },
        {
          '@type': 'Offer',
          name: 'CAPA Management',
          description:
            'Design, implementation, and follow-up of corrective and preventive actions post-inspection or deviation events.',
        },
        {
          '@type': 'Offer',
          name: 'GVP & ICH E2E Training',
          description:
            'Customized training programs on Good Pharmacovigilance Practices and ICH E2E life-cycle safety management.',
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
        name: 'What does PV compliance monitoring include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes ongoing checks of your pharmacovigilance system to ensure it aligns with regulatory requirements, focusing on SOPs, case processing, risk management, and periodic safety update reports (PSURs).',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I prepare for a pharmacovigilance inspection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support clients with mock inspections, gap assessments, document reviews, training, and strategic advice to ensure full preparedness for EMA, FDA, or local authority audits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s included in CAPA management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our CAPA services include root cause analysis, CAPA plan drafting, implementation monitoring, effectiveness checks, and tracking systems to prevent recurrence of compliance issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is GVP training mandatory for all staff?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, staff involved in pharmacovigilance activities must be trained on GVP modules relevant to their roles. We provide role-based training covering modules I to XVI.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Indivirtus help with post-audit remediation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We assist with CAPA execution, documentation corrections, retraining, and responding to inspection findings to ensure compliance restoration.',
        },
      },
    ],
  },
  meta: {
    title: 'Compliance & Audit Support for Pharmacovigilance | Indivirtus',
    description:
      'Be audit-ready and compliant with Indivirtus PV compliance monitoring, mock inspections, CAPA management, and GVP training. Trusted CRO support for global pharmacovigilance.',
    keywords: [
      'pharmacovigilance compliance',
      'pv audit support',
      'mock inspection PV',
      'GVP training',
      'CAPA management PV',
      'pharma audit readiness',
      'PV inspection support',
      'ICH E2E pharmacovigilance',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Compliance & Audit Support | Indivirtus CRO',
      description:
        'Audit preparedness and PV compliance made seamless. Get GVP-trained support for inspections and CAPA.',
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
    'PV Compliance Gap Assessment',
    'Audit Readiness Mock Inspection',
    'CAPA Effectiveness Audit',
    'Training Effectiveness Evaluation',
  ],
};
