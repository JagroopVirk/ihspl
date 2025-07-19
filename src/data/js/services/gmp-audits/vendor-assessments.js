import serviceImage from '@/assets/gmp-audits/vendor-assessments.jpg';
const link = '/services/gmp-audits/vendor-assessments';

export default {
  slug: 'vendor-assessments',
  parentSlug: 'gmp-audits',
  service_id: 'CRO-GMP-VAA-001',
  report_type: 'Vendor Assessment Audit Report',
  title: 'Vendor Assessment & GMP Audits',
  name: 'Vendor Assessment Audits',
  description:
    'Thorough vendor audits ensuring GMP compliance through facility layout review, equipment evaluation, CAPA verification, and GAP analysis.',
  full_description:
    'Indivirtus Healthcare Services offers comprehensive Vendor Assessment Audits to ensure that third-party manufacturing and raw material suppliers meet GMP and regulatory requirements. Our audits cover evaluation of plant layout and process flow, assessment of equipment and infrastructure, CAPA and risk management system checks, and GAP analysis as per Schedule M guidelines. We help pharmaceutical companies mitigate risks, ensure product quality, and build a compliant vendor ecosystem.',
  estimated_duration: '5–7 working days',
  deliverables: [
    'Vendor Audit Report',
    'Risk Assessment Summary',
    'CAPA Recommendations',
    'Schedule M Compliance Gap Report',
  ],
  regulatory_basis: ['Schedule M', 'GMP Guidelines', 'ICH Q9'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'APIs', 'Contract Manufacturing'],
  expertise_area: ['GMP Compliance', 'Quality Audits', 'Regulatory Auditing'],
  is_active: true,
  pageLink: link,
  icon: '🧾',
  image: {
    path: serviceImage,
    alt: 'Vendor assessment audit for pharmaceutical GMP compliance',
    caption: 'Comprehensive vendor audits aligned with Schedule M and GMP standards',
  },
  gtm: {
    eventCategory: 'GMP Audit Services',
    eventAction: 'Vendor Assessment Audit',
    eventLabel: 'Vendor Assessment Audit Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Audit Report'],
      certification: 'GMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Vendor Assessment Audits',
    description:
      'Vendor audits including GMP compliance checks, infrastructure review, CAPA systems, and Schedule M-based GAP analysis.',
    serviceType: 'GMP Vendor Audit',
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
      name: 'Vendor Assessment Audit Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plant Layout & Process Flow Evaluation',
            description:
              'Review of manufacturing plant layout and material flow to identify contamination risks and inefficiencies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Equipment & Infrastructure Assessment',
            description:
              'Evaluation of installed equipment, utilities, and premises for GMP readiness and regulatory suitability.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CAPA and Risk Management Audit',
            description:
              'Audit of Corrective and Preventive Action systems and risk management procedures for non-conformances.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GAP Analysis as per Schedule M',
            description: 'Detailed gap identification and action plan mapping to align with Schedule M GMP guidelines.',
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
        name: 'What is a Vendor Assessment Audit in the pharmaceutical industry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A Vendor Assessment Audit evaluates a supplier's compliance with GMP standards, covering facility, equipment, quality systems, and regulatory readiness.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why is plant layout and process flow review important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reviewing plant layout ensures that materials and personnel flow minimize cross-contamination risks and support efficient, GMP-compliant operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What aspects are covered in equipment and infrastructure assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It covers machinery condition, utility availability, maintenance records, and infrastructure adequacy for pharmaceutical production under GMP.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus approach CAPA and risk management audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assess CAPA documentation, root cause analysis accuracy, and risk control measures to ensure a preventive quality culture.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the purpose of a Schedule M GAP analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It identifies non-compliance areas with Indian GMP guidelines (Schedule M) and suggests corrective actions to meet regulatory standards.',
        },
      },
    ],
  },
  meta: {
    title: 'Vendor Assessment Audits | GMP Compliance Services | Indivirtus',
    description:
      'Ensure GMP compliance across your supply chain with our detailed Vendor Assessment Audits, including plant layout reviews, CAPA audits, and Schedule M GAP analysis.',
    keywords: [
      'Vendor assessment audits',
      'GMP audits',
      'Pharma vendor audit',
      'CAPA audit',
      'Schedule M GAP analysis',
      'Plant layout evaluation',
      'Pharma vendor compliance',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Vendor Assessment Audits | GMP Compliance Services | Indivirtus',
      description:
        'GMP audit services including plant layout evaluation, infrastructure review, CAPA assessment, and GAP analysis for vendor qualification.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['GMP Compliance', 'Schedule M Gap Analysis', 'Vendor Qualification'],
};
