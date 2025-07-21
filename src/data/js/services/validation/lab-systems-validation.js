import serviceImage from '@/assets/validation/lab-systems-validation.jpg';
const link = '/services/validation/lab-systems-validation';

export default {
  slug: 'lab-systems-validation',
  parentSlug: 'validation',
  service_id: 'LSV-CRO-006',
  report_type: 'Lab System Qualification & Validation Reports',
  title: 'Laboratory Systems Validation Services',
  name: 'Laboratory Systems Validation',
  description:
    'End-to-end qualification and validation of analytical instruments and software including HPLC, GC, and CDS systems like Empower, aligned with 21 CFR Part 11 and ICH Q2.',
  full_description:
    'Our Laboratory Systems Validation services encompass the entire lifecycle qualification of analytical equipment and associated software used in QC and R&D laboratories. We validate HPLC, GC, UV-Vis, and other critical instruments through risk-based DQ/IQ/OQ/PQ protocols. Method validation is conducted per ICH Q2 for accuracy, precision, linearity, and robustness. We also ensure 21 CFR Part 11 compliance for electronic records and signatures, including comprehensive validation of Chromatography Data Systems (CDS) such as Empower. Our lab validation approach ensures data integrity, audit readiness, and consistent performance of analytical systems.',
  estimated_duration: '2–4 weeks depending on system complexity',
  deliverables: [
    'User Requirements Specification (URS)',
    'Risk-based validation plan',
    'DQ/IQ/OQ/PQ protocols and reports',
    'Instrument method validation (ICH Q2)',
    '21 CFR Part 11 assessment',
    'Software validation for CDS like Empower',
    'Final validation summary and certificate',
  ],
  regulatory_basis: [
    'ICH Q2(R2) – Validation of Analytical Procedures',
    '21 CFR Part 11 – Electronic Records & Signatures',
    'EU GMP Annex 11 – Computerized Systems',
    'USP <1058> – Analytical Instrument Qualification',
    'GAMP 5 – Risk-Based Approach to Software Validation',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Analytical Labs'],
  expertise_area: ['Laboratory Validation', 'Data Integrity', 'CSV'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Lab System Validation for Pharma Instruments like HPLC & CDS',
    caption: 'Ensure accuracy and compliance of your analytical instruments with robust lab system validation',
  },
  gtm: {
    eventCategory: 'Lab Systems Validation',
    eventAction: 'view_service',
    eventLabel: 'Laboratory Validation – HPLC, GC, Empower Software, 21 CFR Compliance',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Lab System Qualification & Validation Reports'],
      certification: 'Yes',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Laboratory Systems Validation',
    description:
      'Qualification of analytical instruments like HPLC and GC, ICH Q2 method validation, and 21 CFR Part 11 compliance verification for lab software like Empower.',
    serviceType: 'Analytical Instrument & Software Validation Service',
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
      name: 'Laboratory Instrument & Software Validation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'DQ/IQ/OQ/PQ for HPLC, GC',
          description:
            'Lifecycle qualification of analytical instruments using risk-based protocols aligned with USP <1058>.',
        },
        {
          '@type': 'Offer',
          name: 'ICH Q2 Analytical Method Validation',
          description:
            'Validation of analytical methods for accuracy, precision, specificity, and robustness per ICH Q2(R2).',
        },
        {
          '@type': 'Offer',
          name: '21 CFR Part 11 Compliance',
          description:
            'Assessment and documentation to ensure lab software meets electronic record and signature regulations.',
        },
        {
          '@type': 'Offer',
          name: 'Software Validation – Empower',
          description:
            'Full software validation of CDS systems like Empower including user access control, audit trails, and electronic record compliance.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'System-based pricing',
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
        name: 'Which instruments are covered under lab system validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cover a wide range of instruments including HPLC, GC, UV-Vis, FTIR, and associated computerized systems like Empower CDS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you validate analytical methods as well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we perform full ICH Q2 method validation including parameters like accuracy, precision, specificity, linearity, and robustness.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure 21 CFR Part 11 compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate software features such as audit trails, electronic signatures, and data integrity controls to ensure compliance with 21 CFR Part 11.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Empower software validation included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer detailed validation services for Empower CDS including FS/DS, IQ/OQ testing, and access/audit controls.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your protocols aligned with USP and EU GMP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We align all protocols with USP <1058>, EU GMP Annex 11, GAMP 5, and relevant global regulatory expectations.',
        },
      },
    ],
  },
  meta: {
    title: 'Laboratory Systems Validation | Analytical & CDS Qualification | Indivirtus',
    description:
      'Comprehensive lab systems validation for HPLC, GC, and CDS platforms like Empower. Ensure data integrity and regulatory compliance with ICH Q2 and 21 CFR Part 11.',
    keywords: [
      'lab systems validation',
      'HPLC validation',
      'GC qualification',
      'ICH Q2 method validation',
      '21 CFR Part 11 compliance',
      'Empower software validation',
      'CSV laboratory instruments',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Laboratory Systems Validation | Analytical & CDS Qualification | Indivirtus',
      description:
        'Ensure your lab equipment and software meet global compliance standards with our expert validation services.',
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
    'Instrument Qualification Report',
    'Method Validation Protocol (ICH Q2)',
    'CSV Audit Checklist for Empower',
  ],
};
