import serviceImage from '@/assets/greenfield-brownfield/qms-setup.jpg';
const link = '/services/greenfield-brownfield/qms-setup';

export default {
  slug: 'qms-setup',
  parentSlug: 'quality-systems',
  service_id: 'QMS-SETUP-006',
  report_type: 'QMS Implementation Pack',
  title: 'QMS Setup Services for Pharmaceutical Companies',
  name: 'QMS Development, Documentation & Training Systems Setup',
  description:
    'End-to-end Quality Management System (QMS) setup for pharma manufacturers, including ICH Q10 implementation, SOPs, document control, and training.',
  full_description:
    'Our QMS Setup service enables pharmaceutical companies to establish a robust, regulatory-aligned quality management system from scratch or modernize their existing framework. We provide comprehensive support in implementing ICH Q10 principles, drafting and reviewing SOPs, BMRs/BPRs, deploying electronic documentation systems, and building scalable training management programs. Whether it’s for a new facility or for enhancing compliance readiness, our QMS experts deliver structured, audit-proof quality systems.',
  estimated_duration: '4–6 weeks',
  deliverables: [
    'ICH Q10-based QMS Design Blueprint',
    'SOPs, BMRs, and BPR Templates',
    'Document Control System Architecture',
    'Training Matrix & Record Management Tools',
    'Audit Readiness & CAPA Support',
  ],
  regulatory_basis: ['ICH Q10', 'WHO TRS 1019', 'US FDA 21 CFR Part 211', 'EU GMP'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'API Manufacturing', 'Biotech', 'Medical Devices'],
  expertise_area: ['Quality Systems', 'GMP Compliance', 'Document Control'],
  is_active: true,
  pageLink: link,
  icon: '📋',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical QMS setup with SOPs and training systems',
    caption: 'Full QMS setup including SOPs, document control, and training for pharma companies',
  },
  gtm: {
    eventCategory: 'QMS Setup',
    eventAction: 'view_service',
    eventLabel: 'qms-setup',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['QMS Implementation'],
      certification: 'GMP-Compliant QMS Systems',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical QMS Setup Services',
    description:
      'Design and implementation of ICH Q10-compliant QMS including SOPs, batch records, document control systems, and training programs.',
    serviceType: 'QMS Implementation & Consulting',
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
      name: 'QMS Setup & Implementation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICH Q10 QMS Development',
            description:
              'Design and implementation of a pharmaceutical QMS aligned with ICH Q10, including quality policy, objectives, risk management, and lifecycle approach.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SOP & Batch Documentation (BMR/BPR)',
            description:
              'Drafting, reviewing, and structuring SOPs, Batch Manufacturing Records (BMR), and Batch Packaging Records (BPR) for compliant manufacturing processes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electronic Document Management System (EDMS)',
            description:
              'Implementation-ready design for electronic documentation control systems with version tracking, approvals, audit trails, and metadata tagging.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Training Management System',
            description:
              'Design of role-based training programs, training calendars, effectiveness evaluation, and record tracking aligned with GMP training mandates.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Scope-based pricing',
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
        name: 'What does ICH Q10 QMS development include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes setting up a structured quality management framework aligned with ICH Q10, covering documentation, roles, management responsibilities, and product lifecycle approaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do SOPs and BMR/BPR contribute to GMP compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SOPs standardize operations while BMRs and BPRs ensure traceable, batch-level documentation — both are essential for maintaining GMP compliance and audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of implementing an EDMS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An EDMS improves document control by enabling electronic versioning, controlled access, approvals, metadata tagging, and audit trails, all while supporting data integrity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a training management system typically include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes training matrices by role, training content plans, effectiveness evaluations, and digital tracking of training records for GMP-relevant personnel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the QMS setup service be customized for different facility types?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we customize QMS setup based on the facility type — whether it’s for oral dosage forms, injectables, APIs, or biotech — and align documentation accordingly.',
        },
      },
    ],
  },
  meta: {
    title: 'QMS Setup Services | ICH Q10, SOPs, EDMS, Training | Indivirtus',
    description:
      'Build a compliant pharmaceutical QMS from the ground up. ICH Q10 development, SOPs, batch records, document control, and GMP training systems by Indivirtus.',
    keywords: [
      'pharma QMS setup',
      'ICH Q10 QMS development',
      'SOPs BMR BPR pharma',
      'electronic document management pharma',
      'pharma training management system',
      'quality system implementation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'QMS Setup | SOPs, EDMS, Training | Indivirtus',
      description:
        'End-to-end QMS setup including ICH Q10 development, SOP documentation, electronic systems, and GMP training programs. Delivered by Indivirtus.',
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
    'QMS Gap Assessment',
    'Document Control Review',
    'Training Program Audit',
    'ICH Q10 Implementation Readiness',
  ],
};
