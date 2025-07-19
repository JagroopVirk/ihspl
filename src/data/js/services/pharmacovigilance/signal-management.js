import serviceImage from '@/assets/pharmacovigilance/signal-management.jpg';
const link = '/services/pharmacovigilance/signal-management';

export default {
  slug: 'signal-management',
  parentSlug: 'pharmacovigilance',
  service_id: 'SM-PV-001',
  report_type: 'Signal Detection & Analysis',
  title: 'Signal Management Services',
  name: 'Signal Management',
  description:
    'Comprehensive signal detection, validation, and regulatory support using tools like Empirica and VigiLyze.',
  full_description:
    'Indivirtus offers end-to-end signal management solutions for pharmaceutical and biotech companies, ensuring early detection, validation, and regulatory handling of adverse drug reactions. From advanced disproportionality analysis using cutting-edge tools like Empirica and VigiLyze to structured signal validation and authority communication, our team ensures safety signal integrity and compliance with global pharmacovigilance standards.',
  estimated_duration: '2–6 weeks depending on complexity and data volume',
  deliverables: [
    'Signal detection report',
    'Validated signal assessment dossier',
    'Tool-based analysis (Empirica, VigiLyze)',
    'Regulatory communication drafts/responses',
  ],
  regulatory_basis: ['ICH E2E', 'EMA GVP Module IX', 'FDA Guidance on Pharmacovigilance'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Regulatory Affairs'],
  expertise_area: ['Pharmacovigilance', 'Signal Management', 'Regulatory Safety'],
  is_active: true,
  pageLink: link,
  icon: '📊',
  image: {
    path: serviceImage,
    alt: 'Signal detection and analysis tools in pharmacovigilance',
    caption: 'Empowering safety signal decisions with advanced analytics.',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Signal Management Inquiry',
    eventLabel: 'Signal Detection & Tools',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Signal Analysis Report'],
      certification: 'GVP Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Signal Management',
    description: 'Signal detection, validation, and regulatory communication for pharmacovigilance.',
    serviceType: 'Pharmacovigilance Signal Management',
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
      name: 'Signal Management Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Disproportionality Analysis',
            description: 'Quantitative methods to detect potential safety signals in large safety databases.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Signal Validation & Assessment',
            description: 'Structured analysis and expert review of detected signals for validity and causality.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Empirica/VigiLyze Tools',
            description:
              'Signal detection and management using validated tools like Oracle Empirica Signal and WHO VigiLyze.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Communication',
            description: 'Preparation of authority-facing safety reports, including responses to queries and updates.',
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
        name: 'What is signal management in pharmacovigilance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signal management involves identifying, validating, and assessing potential safety signals from pharmacovigilance data to ensure timely regulatory actions and patient safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does disproportionality analysis support signal detection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Disproportionality analysis uses statistical algorithms to detect unusual reporting patterns, helping identify potential safety concerns earlier than traditional methods.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which tools do you use for signal analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use industry-standard tools like Oracle Empirica Signal and WHO VigiLyze to detect, monitor, and track safety signals from global safety databases.',
        },
      },
      {
        '@type': 'Question',
        name: 'What support do you offer for regulatory communication?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assist in preparing and submitting regulatory documentation related to validated safety signals, including PSUR addendums, DSUR updates, and direct responses to agency inquiries.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer signal management as a standalone service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, signal management services can be availed independently or as part of a full pharmacovigilance suite, based on your organization’s needs.',
        },
      },
    ],
  },
  meta: {
    title: 'Signal Management Services | Pharmacovigilance | Indivirtus',
    description:
      'Indivirtus offers expert-led signal management services including disproportionality analysis, signal validation, Empirica/VigiLyze tool usage, and regulatory communication support.',
    keywords: [
      'Signal Management',
      'Disproportionality Analysis',
      'Empirica Signal',
      'VigiLyze',
      'Pharmacovigilance CRO',
      'Safety Signal Detection',
      'Regulatory PV support',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Signal Management Services | Pharmacovigilance',
      description: 'Expert signal detection, validation, and regulatory handling using advanced tools.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Signal Assessment', 'PV Risk Evaluation'],
};
