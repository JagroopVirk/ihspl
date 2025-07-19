import serviceImage from '@/assets/gmp-audits/data-integrity.jpg';
const link = '/services/gmp-audits/data-integrity';

export default {
  slug: 'data-integrity',
  parentSlug: 'validation-services',
  service_id: 'data-integrity-csv-support',
  report_type: 'Compliance Audit & Validation',
  title: 'Data Integrity & Computer System Validation (CSV)',
  name: 'Data Integrity & CSV',
  description:
    'Ensure data integrity, system validation, and compliance with 21 CFR Part 11 through expert audits and technical support.',
  full_description:
    'Indivirtus Healthcare provides specialized Data Integrity and Computer System Validation (CSV) services to ensure pharmaceutical and life science companies comply with 21 CFR Part 11, ALCOA+ principles, and global data governance standards. Our team conducts thorough assessments including audit trail verification, data backup and archival evaluations, and computerized system qualification to support regulatory expectations across GxP environments.',
  estimated_duration: '2–4 weeks (depending on system complexity)',
  deliverables: [
    'Data Integrity Audit Report',
    'CSV Master Plan',
    'Audit Trail & Backup Validation Summary',
    '21 CFR Part 11 Compliance Checklist',
  ],
  regulatory_basis: ['21 CFR Part 11', 'MHRA Data Integrity Guidance', 'EU Annex 11', 'WHO Guidance on Data Integrity'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices'],
  expertise_area: ['CSV', 'GMP Compliance', 'Digital Validation'],
  is_active: true,
  pageLink: link,
  icon: '🧮',
  image: {
    path: serviceImage,
    alt: 'CSV and Data Integrity audit for pharma',
    caption: 'Computer System Validation and data governance for GxP compliance.',
  },
  gtm: {
    eventCategory: 'Data Integrity & CSV',
    eventAction: 'view_data_integrity_csv_service',
    eventLabel: 'Data Integrity & CSV Service View',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Compliance Audit'],
      certification: '21 CFR Part 11 / EU Annex 11',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Data Integrity & Computer System Validation (CSV)',
    description:
      'CSV and data integrity audits for GxP compliance, including audit trail verification, backup strategies, and 21 CFR Part 11 validation.',
    serviceType: 'Data Integrity Audit & CSV Support',
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
      name: 'Data Integrity & CSV Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Computer System Validation',
            description: 'Full lifecycle validation of computerized systems per GAMP 5 & GxP standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '21 CFR Part 11 Compliance',
            description: 'Assessment and remediation support for electronic records and signatures compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit Trail Verification',
            description: 'Technical and procedural checks for audit trail availability, traceability, and security.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Backup Strategies',
            description: 'Assessment of data backup processes including periodicity, validation, and recovery.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Custom-based on systems and scope',
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
        name: 'What is Computer System Validation (CSV)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CSV ensures that computerized systems used in regulated processes consistently produce reliable and accurate results in line with regulatory expectations like GAMP 5 and 21 CFR Part 11.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are ALCOA+ principles in data integrity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ALCOA+ principles ensure that data is Attributable, Legible, Contemporaneous, Original, Accurate, and also Complete, Consistent, Enduring, and Available throughout its lifecycle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is audit trail verification important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Audit trail verification confirms that changes to data are tracked and traceable, which is critical for regulatory inspections and maintaining data credibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus help with 21 CFR Part 11 compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus assesses and validates electronic records and signature systems, ensuring they meet all requirements of 21 CFR Part 11 through gap analysis and validation documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a CSV Master Plan include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The CSV Master Plan outlines the validation strategy, roles, documentation structure, and risk-based approach for all computerized systems used in GxP environments.',
        },
      },
    ],
  },
  meta: {
    title: 'Data Integrity & Computer System Validation | Indivirtus CRO Services',
    description:
      'CSV, audit trail verification, 21 CFR Part 11 compliance, and data integrity audits for pharmaceutical companies. GxP-ready CSV support from Indivirtus Healthcare.',
    keywords: [
      'Computer System Validation',
      'CSV pharma',
      'Data Integrity Audit',
      '21 CFR Part 11 compliance',
      'Audit trail review',
      'GAMP 5 validation',
      'ALCOA+ principles',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Data Integrity & CSV | 21 CFR Part 11 Validation',
      description:
        'Get expert support for CSV and data integrity audits, 21 CFR Part 11 compliance, and audit trail verification from Indivirtus.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['CSV Audit', 'Data Integrity Assessment'],
};
