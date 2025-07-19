import serviceImage from '@/assets/gmp-audits/gmp-audits.jpg';
const link = '/services/gmp-audits/gmp-audits';

export default {
  slug: 'gmp-audits',
  parentSlug: 'gmp-audits',
  service_id: 'CRO-GMP-GCA-002',
  report_type: 'GMP Compliance Audit Report',
  title: 'GMP Compliance Audits & GxP Inspections',
  name: 'GMP Compliance Audits',
  description:
    'Ensure regulatory preparedness with internal GMP audits, mock inspections, and GxP compliance checks for pharmaceutical operations.',
  full_description:
    'Indivirtus Healthcare Services provides detailed GMP Compliance Audits tailored for pharmaceutical companies seeking to enhance their quality systems. Our services include internal GMP audits, mock inspections to prepare for regulatory bodies (FDA, EMA, CDSCO), audits of suppliers and contract manufacturers, and GxP audits covering GMP, GLP, GCP, and GDP. Each audit is conducted by seasoned professionals to help identify risks, non-conformities, and continuous improvement opportunities in line with global standards.',
  estimated_duration: '5–10 working days depending on site complexity',
  deliverables: [
    'Comprehensive GMP Audit Report',
    'Audit Non-Conformance Matrix',
    'Regulatory Readiness Checklist',
    'Corrective & Preventive Action (CAPA) Plan',
  ],
  regulatory_basis: ['WHO TRS', 'ICH Q10', 'Schedule M', '21 CFR Parts 210/211', 'EU GMP Annexes'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Clinical Research', 'Contract Manufacturing'],
  expertise_area: ['GMP Compliance', 'GxP Auditing', 'Regulatory Inspections'],
  is_active: true,
  pageLink: link,
  icon: '📋',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical GMP compliance audit and inspection services',
    caption: 'GMP compliance and GxP audit services for regulatory readiness and quality assurance',
  },
  gtm: {
    eventCategory: 'GMP Audit Services',
    eventAction: 'GMP Compliance Audits',
    eventLabel: 'GMP Compliance Audit Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Audit Report'],
      certification: 'GMP / GxP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GMP Compliance Audits',
    description:
      'GMP and GxP audit services including internal audits, mock inspections, supplier evaluations, and regulatory compliance readiness checks.',
    serviceType: 'GMP Compliance Audit',
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
      name: 'GMP Compliance Audit Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Internal GMP Audits',
            description:
              'Periodic internal assessments to verify GMP adherence, SOP compliance, and readiness for inspections.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mock Regulatory Inspections',
            description:
              'Simulated inspections that mimic actual regulatory audits to prepare your facility for FDA, EMA, or CDSCO visits.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Supplier & Contract Manufacturer Audits',
            description: 'Audit of external partners for GMP compliance and supply chain risk mitigation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GxP Audits (GMP, GLP, GCP, GDP)',
            description: 'Comprehensive audits covering all Good Practice areas including GMP, GLP, GCP, and GDP.',
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
        name: 'What is included in a GMP Compliance Audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes a detailed evaluation of manufacturing practices, quality systems, facility standards, and documentation to assess GMP conformity.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are mock inspections beneficial for regulatory audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mock inspections simulate real-world regulatory inspections and help identify gaps or weak areas that can be corrected before the actual audit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you audit contract manufacturers and raw material suppliers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we audit suppliers and contract manufacturers to ensure they meet GMP requirements and your internal quality standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between GMP and GxP audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GMP audits focus on manufacturing practices, while GxP audits also cover Good Laboratory Practices (GLP), Clinical (GCP), and Distribution (GDP).',
        },
      },
      {
        '@type': 'Question',
        name: 'How frequently should internal GMP audits be conducted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It's recommended to perform internal GMP audits annually or bi-annually based on risk assessment, product type, and past compliance performance.",
        },
      },
    ],
  },
  meta: {
    title: 'GMP Compliance Audits | Internal & GxP Audits | Indivirtus',
    description:
      'GMP and GxP audits by Indivirtus include internal GMP inspections, supplier audits, and regulatory mock inspections to ensure global compliance.',
    keywords: [
      'GMP compliance audits',
      'Internal GMP audit',
      'GxP audits',
      'Mock inspections',
      'Supplier audits',
      'Contract manufacturer audit',
      'GLP GCP GDP audit',
      'Regulatory audit support',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'GMP Compliance Audits | Internal & GxP Audits | Indivirtus',
      description:
        'Internal GMP audits, GxP inspections, and supplier evaluations to ensure your facility is audit-ready and compliant with global regulatory norms.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Internal GMP Audit', 'GxP Compliance', 'Mock Regulatory Inspection', 'Supplier Qualification'],
};
