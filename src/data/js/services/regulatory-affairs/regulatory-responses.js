import serviceImage from '@/assets/regulatory-affairs/regulatory-responses.jpg';
const link = '/services/regulatory-affairs/regulatory-responses';

export default {
  slug: 'regulatory-responses',
  parentSlug: 'regulatory-affairs',
  service_id: 'RR001',
  report_type: 'Regulatory Response Dossier',
  title: 'Regulatory Response Management for Pharma & Biotech',
  name: 'Regulatory Responses',
  description:
    'Expert assistance in drafting, managing, and executing effective responses to regulatory observations and queries from agencies such as FDA and EMA.',
  full_description:
    'Our Regulatory Responses service supports pharma and biotech companies in navigating complex regulatory feedback, including FDA 483s, EU List of Questions (LoQ), and post-submission requests. We provide structured, scientifically sound responses, CAPA planning, labeling updates, and remediation strategies that ensure compliance and protect your development timelines. Whether it’s an inspectional finding or a labeling inconsistency, our team helps you close gaps quickly and convincingly.',
  estimated_duration: '1–4 weeks depending on agency and issue complexity',
  deliverables: [
    'Complete response package to FDA 483 or EU LoQ',
    'Corrective and Preventive Action (CAPA) plan',
    'Regulatory justification and scientific rationale',
    'Updated labels and submission-ready documents',
  ],
  regulatory_basis: ['FDA 21 CFR Part 11', 'ICH Q9/Q10', 'EMA GVP Modules'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology'],
  expertise_area: ['Regulatory Affairs', 'Quality Assurance'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'Regulatory Response Service',
    caption: 'Responding to FDA and EMA regulatory feedback effectively',
  },
  gtm: {
    eventCategory: 'Regulatory Responses',
    eventAction: 'Inquiry Submitted',
    eventLabel: 'Regulatory Response Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Regulatory Response Dossier'],
      certification: 'FDA/EMA/GMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Regulatory Responses',
    description:
      'End-to-end support for responding to FDA 483s, EU LoQs, labeling requests, and regulatory CAPA planning for pharma and biotech companies.',
    serviceType: 'Regulatory Response Consulting',
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
      name: 'Regulatory Response Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FDA 483 & EU LoQ responses',
            description:
              'Drafting and submitting comprehensive responses to inspectional findings and regulatory queries from FDA and EMA.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CAPA & remediation planning',
            description:
              'Developing Corrective and Preventive Action plans to address regulatory deficiencies and ensure sustainable compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pre-submission support',
            description:
              'Proactive planning and document readiness for anticipated agency questions to minimize delays and improve acceptance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Labeling updates',
            description:
              'Assistance in aligning your product labeling with evolving regulatory requirements, including SmPC and PIL updates.',
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
        name: 'How do you help with FDA 483 or EU LoQ responses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We analyze the observation, consult your internal team, and prepare structured, scientifically-backed responses ready for submission to the agency.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is CAPA and why is it important in regulatory responses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CAPA stands for Corrective and Preventive Action. It is essential for demonstrating that your organization is committed to resolving and preventing compliance issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you assist with labeling compliance during product changes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we review and update labels to align with new regulatory requirements or product changes, ensuring accuracy and compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of support is offered for pre-submission readiness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help anticipate likely agency queries, compile support documents, and ensure your team is fully prepared for timely and effective communication.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can you turn around a regulatory response package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnaround can range from 1 to 4 weeks depending on complexity and documentation quality. We offer expedited support for urgent cases.',
        },
      },
    ],
  },
  meta: {
    title: 'Regulatory Responses & CAPA Planning | FDA 483 & EU LoQ Consulting | Indivirtus',
    description:
      'Respond effectively to FDA 483s, EU LoQs, and regulatory observations with Indivirtus. We provide CAPA planning, labeling updates, and expert response preparation.',
    keywords: [
      'regulatory response',
      'FDA 483 response',
      'EU LoQ remediation',
      'CAPA plan',
      'regulatory labeling support',
      'regulatory consulting',
      'CRO regulatory responses',
      'regulatory documentation services',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Regulatory Responses & CAPA | Indivirtus',
      description: 'Expert support for regulatory responses, FDA 483s, CAPA planning, and labeling updates.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['FDA 483 Response', 'LoQ Remediation Plan', 'Labeling Review', 'CAPA Audit'],
};
