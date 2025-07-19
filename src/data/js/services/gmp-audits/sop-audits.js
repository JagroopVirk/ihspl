import serviceImage from '@/assets/gmp-audits/sop-audits.jpg';
const link = '/services/gmp-audits/sop-audits';

export default {
  slug: 'sop-audits',
  parentSlug: 'gmp-audits',
  service_id: 'CRO-GMP-SOP-003',
  report_type: 'SOP & Documentation Audit Report',
  title: 'SOP & Documentation Audits',
  name: 'SOP & Documentation Audits',
  description:
    'Audit and optimize pharmaceutical documentation systems including SOPs, batch records, training logs, and equipment logs.',
  full_description:
    'Indivirtus Healthcare Services offers SOP & Documentation Audits designed to ensure the integrity, accuracy, and compliance of critical GMP documentation. Our team performs detailed audits of SOPs (Standard Operating Procedures), batch manufacturing records, training and logbooks, and equipment usage logs. These audits help identify documentation gaps, procedural inconsistencies, and non-compliance with regulatory requirements such as Schedule M, WHO TRS, and 21 CFR Part 211.',
  estimated_duration: '3–5 working days per site',
  deliverables: [
    'Documentation Gap Analysis Report',
    'SOP Compliance Summary',
    'Corrective Action Recommendations',
    'Logbook & Record Review Checklist',
  ],
  regulatory_basis: ['Schedule M', 'WHO TRS', '21 CFR Part 211', 'ICH Q10'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Contract Manufacturing'],
  expertise_area: ['Documentation Control', 'GMP Compliance', 'Data Integrity'],
  is_active: true,
  pageLink: link,
  icon: '📑',
  image: {
    path: serviceImage,
    alt: 'Audit of pharmaceutical SOPs, batch records, and logbooks',
    caption: 'Comprehensive documentation audits including SOPs, batch records, and equipment logs',
  },
  gtm: {
    eventCategory: 'GMP Audit Services',
    eventAction: 'SOP & Documentation Audits',
    eventLabel: 'SOP & Documentation Audit Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Audit Report'],
      certification: 'GMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SOP & Documentation Audits',
    description:
      'Thorough review of SOPs, batch records, training logs, and equipment documentation for pharmaceutical GMP compliance.',
    serviceType: 'Documentation Audit',
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
      name: 'SOP & Documentation Audit Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SOP Preparation & Review',
            description:
              'Audit and revision of SOPs for clarity, compliance, version control, and alignment with current practices.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Batch Record Audits',
            description:
              'Review of batch manufacturing records for completeness, accuracy, traceability, and data integrity.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Training & Logbook Audits',
            description:
              'Verification of staff training records, attendance logs, and compliance with job-specific documentation protocols.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Equipment Log Reviews',
            description:
              'Assessment of equipment usage, calibration, and cleaning logs to ensure compliance with SOPs and audit trails.',
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
        name: 'What does an SOP & documentation audit include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes a comprehensive review of SOPs, batch manufacturing records, training documentation, and equipment logbooks for GMP compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are SOP audits important for pharmaceutical facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SOP audits ensure that procedures are current, clearly written, and effectively implemented to prevent errors and ensure compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are batch record audits and what do they evaluate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Batch record audits evaluate the completeness, accuracy, and regulatory compliance of production documentation and traceability records.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are training logbooks evaluated in these audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assess whether all required personnel have received documented training aligned with their roles and GMP responsibilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What issues are commonly found in equipment log reviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical issues include missing entries, lack of calibration/cleaning logs, or inconsistencies between recorded and actual usage.',
        },
      },
    ],
  },
  meta: {
    title: 'SOP & Documentation Audits | Pharmaceutical GMP Review | Indivirtus',
    description:
      'Audit services for SOPs, batch records, training documentation, and equipment logs to ensure pharmaceutical GMP compliance and data integrity.',
    keywords: [
      'SOP audits',
      'documentation audits',
      'batch record audit',
      'training log review',
      'equipment log audit',
      'GMP documentation review',
      'pharma SOP audit',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'SOP & Documentation Audits | Pharmaceutical GMP Review | Indivirtus',
      description:
        'Ensure your documentation systems are compliant with GMP through SOP, batch record, and logbook audits.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['SOP Audit', 'Batch Record Audit', 'Training Log Review', 'Equipment Documentation Audit'],
};
