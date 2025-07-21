import serviceImage from '@/assets/regulatory-affairs/ctd-actd-dossiers.jpg';
const link = '/services/regulatory-affairs/ctd-actd-dossiers';

export default {
  slug: 'ctd-actd-dossiers',
  parentSlug: 'regulatory-affairs',
  service_id: 'REG002',
  report_type: 'CTD / ACTD Submission Pack',
  title: 'CTD & ACTD Dossier Preparation Services',
  name: 'CTD/ACTD Dossier Preparation',
  description:
    'Full-service support for CTD, eCTD, and ACTD dossier preparation, publishing, and localization for global pharmaceutical submissions.',
  full_description:
    'Indivirtus provides end-to-end support for the preparation of CTD (Common Technical Document) and ACTD (ASEAN Common Technical Document) dossiers, including Modules 1 to 5. Our team ensures format compliance, publishing in eCTD/NeeS platforms, and tailored localization for specific health authority requirements. Whether targeting ICH, ASEAN, GCC, or ROW markets, our dossier services are accurate, regulator-ready, and efficiently delivered.',
  estimated_duration: '2–6 months depending on product and target market',
  deliverables: [
    'Complete CTD or ACTD dossier (Modules 1–5)',
    'Formatted eCTD/NeeS output',
    'Gap analysis report',
    'Localized Module 1 per authority',
    'Submission-ready archive package',
  ],
  regulatory_basis: ['ICH M4', 'ASEAN ACTD Guidelines', 'US FDA eCTD', 'EMA eCTD', 'CDSCO CTD', 'TGA CTD/NeeS'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'Medical Devices'],
  expertise_area: ['Regulatory Submissions', 'Dossier Preparation', 'eCTD Publishing'],
  is_active: true,
  pageLink: link,
  icon: '📂',
  image: {
    path: serviceImage,
    alt: 'CTD ACTD eCTD Dossier Preparation',
    caption: 'ICH CTD, ASEAN ACTD, eCTD publishing & localization support',
  },
  gtm: {
    eventCategory: 'CTD ACTD Dossier Preparation',
    eventAction: 'Request Dossier Support',
    eventLabel: 'CTD/ACTD Dossier Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['CTD / ACTD Submission Pack'],
      certification: 'ICH / ASEAN / FDA Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CTD & ACTD Dossier Preparation',
    description:
      'CTD and ACTD regulatory dossier compilation including eCTD publishing, gap analysis, and localization for global submissions.',
    serviceType: 'Regulatory Dossier Compilation',
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
      name: 'CTD/ACTD Dossier Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Modules 1–5 compilation',
            description:
              'Comprehensive compilation of CTD or ACTD Modules 1–5 in accordance with ICH, ASEAN, or local guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ASEAN ACTD preparation',
            description:
              'Preparation of ACTD dossiers for ASEAN countries including formatting and alignment with specific regional expectations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'eCTD/NeeS publishing',
            description:
              'Formatting and publishing of dossiers into eCTD or NeeS using regulatory-authority-approved platforms such as Extedo or Lorenz.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gap analysis & localization',
            description:
              'Critical review of existing dossiers for completeness and conformance, including localization of Module 1 to specific authority requirements.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Custom quote depending on format and market',
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
        name: 'What is the difference between CTD and ACTD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CTD is the ICH standard used globally, while ACTD is a modified format used in ASEAN countries. Both include Modules 1–5, but differ in structure and content detail.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support eCTD publishing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide eCTD and NeeS publishing using validated software tools compatible with regulatory authority gateways like FDA ESG, EMA, and others.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required for CTD preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically need administrative data, CMC documentation, nonclinical/clinical reports, labeling, and any prior regulatory correspondence or commitments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you localize Module 1 for different regions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we customize Module 1 for each country or region to reflect national requirements such as labeling, forms, and local agent information.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does CTD or ACTD compilation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Timelines range from 2 to 6 months depending on data availability, complexity, and market. Expedited timelines are possible for streamlined products.',
        },
      },
    ],
  },
  meta: {
    title: 'CTD & ACTD Dossier Preparation | eCTD Publishing Services | Indivirtus',
    description:
      'Complete CTD, ACTD, and eCTD dossier preparation for global regulatory submissions. Includes Modules 1–5, gap analysis, and localized publishing.',
    keywords: [
      'ctd dossier preparation',
      'actd asean dossier',
      'eCTD publishing services',
      'regulatory document compilation',
      'module 1 to 5 ctd',
      'dossier localization',
      'ctd actd filing support',
      'regulatory submissions CRO',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'CTD/ACTD Dossier Services | Indivirtus',
      description: 'ICH-compliant CTD/ACTD dossier preparation and eCTD publishing support for pharma products.',
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
    'CTD Compliance Review',
    'ACTD Technical Gap Analysis',
    'Module 1 Localization Audit',
    'eCTD Readiness Evaluation',
  ],
};
