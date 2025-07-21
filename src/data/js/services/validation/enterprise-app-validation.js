import serviceImage from '@/assets/validation/enterprise-app-validation.jpg';
const link = '/services/validation/enterprise-app-validation';

export default {
  slug: 'enterprise-app-validation',
  parentSlug: 'validation',
  service_id: 'VAL-ENT-APP',
  report_type: 'CSV Compliance Reports, Risk Assessments, Summary Validation Reports',
  title: 'Enterprise Application Validation',
  name: 'Enterprise Application Validation',
  description:
    'Comprehensive validation of enterprise platforms like SAP, LIMS, and QMS ensuring compliance with global pharmaceutical regulations.',
  full_description:
    'Enterprise Application Validation ensures computerized systems such as SAP, LIMS, and QMS operate in a compliant, secure, and data-integrity-focused environment. Indivirtus provides CSV as per GAMP 5, supports compliance with 21 CFR Part 11, and delivers complete validation documentation including URS, FS, DS, and summary reports. We also conduct risk assessments and data integrity audits to ensure systems meet FDA, EMA, and MHRA requirements, providing clients with confidence in their digital ecosystem.',
  estimated_duration: '2–6 weeks (system-dependent)',
  deliverables: [
    'User Requirements Specification (URS)',
    'Functional & Design Specifications (FS/DS)',
    'CSV Compliance Report',
    '21 CFR Part 11 Audit Summary',
    'Risk & Data Integrity Assessment',
    'Traceability Matrix & Summary Report',
  ],
  regulatory_basis: ['21 CFR Part 11', 'EU Annex 11', 'GAMP 5', 'ICH Q9'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'Medical Devices'],
  expertise_area: ['Computerized Systems Validation', 'Enterprise Software', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '💻',
  image: {
    path: serviceImage,
    alt: 'Enterprise system validation services for SAP, LIMS, QMS',
    caption: 'Validation of enterprise applications including SAP, LIMS, and QMS under GxP guidelines.',
  },
  gtm: {
    eventCategory: 'Enterprise Application Validation',
    eventAction: 'view_service',
    eventLabel: 'Enterprise App CSV',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['CSV Compliance Reports'],
      certification: 'GAMP 5, 21 CFR Part 11',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Enterprise Application Validation',
    description:
      'Validation services for enterprise-level systems such as SAP, LIMS, and QMS with risk assessments and compliance documentation.',
    serviceType: 'Enterprise Software Validation',
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
      name: 'Enterprise Application Validation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CSV for SAP, LIMS, QMS',
            description: 'Validation of enterprise systems using risk-based approaches under GAMP 5 and CSV standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '21 CFR Part 11 Compliance',
            description:
              'Assessment and implementation of controls to meet FDA’s 21 CFR Part 11 electronic record compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Risk & Data Integrity Audits',
            description:
              'Audits focused on ensuring data reliability, security, and regulatory traceability for enterprise platforms.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'URS to Summary Reports',
            description:
              'Full lifecycle validation deliverables including URS, FS, DS, traceability matrices, and final reports.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'System & scope-dependent pricing',
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
        name: 'What types of enterprise applications do you validate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We validate systems like SAP, LIMS, QMS, and other enterprise platforms used in regulated pharmaceutical operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure compliance with 21 CFR Part 11?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assess access controls, audit trails, electronic signatures, and system architecture to ensure alignment with 21 CFR Part 11.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide documentation for CSV lifecycle stages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we prepare URS, FS, DS, testing protocols, traceability matrices, and summary reports tailored to your systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in your risk & data integrity audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review system processes, data flows, and controls to detect vulnerabilities that could compromise data quality or integrity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is GAMP 5 methodology used in your validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our approach follows the GAMP 5 V-model and categorization of software types to ensure risk-based and efficient validation.',
        },
      },
    ],
  },
  meta: {
    title: 'Enterprise Application Validation | Indivirtus Healthcare CRO',
    description:
      'Validation of enterprise systems like SAP, LIMS, and QMS for pharmaceutical industries using GAMP 5 and 21 CFR Part 11 compliance frameworks.',
    keywords: [
      'Enterprise Application Validation',
      'SAP validation',
      'LIMS CSV',
      'QMS validation',
      '21 CFR Part 11 compliance',
      'GAMP 5 validation',
      'Pharma software CSV',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Enterprise Application Validation | Indivirtus Healthcare CRO',
      description:
        'Comprehensive validation services for SAP, LIMS, and QMS platforms, ensuring compliance with GAMP 5 and 21 CFR Part 11.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['CSV', '21 CFR Part 11', 'Risk-Based Review', 'Data Integrity Audit'],
};
