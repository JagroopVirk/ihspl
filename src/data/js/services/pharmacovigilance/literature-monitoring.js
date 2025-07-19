import serviceImage from '@/assets/pharmacovigilance/literature-monitoring.jpg';
const link = '/services/pharmacovigilance/literature-monitoring';

export default {
  slug: 'literature-monitoring',
  parentSlug: 'pharmacovigilance',
  service_id: 'PHV009',
  report_type: 'Scientific Literature Screening & Regulatory Support',
  title: 'Literature Monitoring Services',
  name: 'Global Scientific Literature Screening for ADRs & Signals',
  description:
    'GVP-compliant scientific literature monitoring for ADR detection, signal identification, and regulatory submission support.',
  full_description:
    'Indivirtus offers comprehensive literature monitoring services designed to meet GVP Module VI requirements. Our team screens global and local literature databases such as Embase and PubMed to identify adverse drug reactions (ADRs), product safety concerns, and emerging signals. We support case intake, data abstraction, narrative drafting, and preparation of submissions for regulatory authorities. With structured workflows and qualified reviewers, we ensure compliance, traceability, and timely detection of relevant publications impacting product safety.',
  estimated_duration: 'Ongoing weekly or monthly basis',
  deliverables: [
    'Literature search log and documentation',
    'ADR case identification reports',
    'Signal detection summaries',
    'Narrative-ready case outputs',
    'Submission-ready case forms or line listings',
  ],
  regulatory_basis: ['GVP Module VI', 'ICH E2D', 'EMA Good Vigilance Practices'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Medical Devices'],
  expertise_area: ['Pharmacovigilance', 'Regulatory Affairs', 'Scientific Writing'],
  is_active: true,
  pageLink: link,
  icon: '📚',
  image: {
    path: serviceImage,
    alt: 'Literature Monitoring and ADR Screening',
    caption: 'Systematic literature screening of PubMed, Embase, and local sources for pharmacovigilance.',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Literature Monitoring Viewed',
    eventLabel: 'Literature Monitoring',
    customDimensions: {
      serviceType: 'Scientific Literature Monitoring',
    },
    dataLayerPush: {
      reportType: ['Literature-based ICSR', 'Signal Detection'],
      certification: 'GVP Module VI Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Global Scientific Literature Screening for ADRs & Signals',
    description:
      'Indivirtus provides weekly and monthly literature monitoring using PubMed, Embase, and local journals for adverse event detection and signal monitoring in line with GVP guidelines.',
    serviceType: 'Literature Monitoring Services',
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
      name: 'Literature Monitoring Service Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'GVP Module VI Compliance',
          description:
            'Weekly or monthly screening of global and local scientific literature in accordance with EMA GVP Module VI guidelines.',
        },
        {
          '@type': 'Offer',
          name: 'Embase/PubMed Searches',
          description:
            'Database-specific Boolean queries for drug-event combinations using PubMed, Embase, and other sources.',
        },
        {
          '@type': 'Offer',
          name: 'ADR & Signal Screening',
          description:
            'Identification and documentation of adverse events and potential product safety signals from published content.',
        },
        {
          '@type': 'Offer',
          name: 'Regulatory Submissions',
          description:
            'Preparation of identified ADRs and signal cases for submission to health authorities (CIOMS, MedWatch, line listings).',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Subscription or per-report model',
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
        name: 'How often is literature screened for ADRs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Screening frequency is typically weekly or monthly, depending on your regulatory obligations. We can adjust the cadence to align with your product portfolio and compliance needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you monitor both global and local literature sources?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We screen global databases like PubMed and Embase, as well as region-specific or language-specific journals, to ensure full compliance with EMA and local authority expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the identified ADRs formatted for regulatory submission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We provide narrative-ready outputs or direct case entries in formats like CIOMS or MedWatch, ready for submission or integration into your safety database.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support signal detection from literature?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we flag and analyze potential safety signals emerging from literature and prepare structured signal assessment reports based on GVP Module IX.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this service integrated with safety databases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can export outputs in formats compatible with safety databases like Argus, ArisG, or Veeva Vault Safety, and integrate with your internal workflows as needed.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmacovigilance Literature Monitoring Services | Indivirtus',
    description:
      'Compliant literature monitoring using PubMed and Embase for ADRs, signals, and global safety submissions. Weekly screening aligned with GVP Module VI.',
    keywords: [
      'literature monitoring pharma',
      'PubMed screening service',
      'Embase literature ADR search',
      'GVP Module VI compliance',
      'ADR case from literature',
      'scientific literature signal detection',
      'pharmacovigilance database search',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharmacovigilance Literature Monitoring Services | Indivirtus',
      description:
        'Expert support for literature screening of ADRs and signals in compliance with GVP Module VI. Weekly monitoring with submission-ready outputs.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [],
};
