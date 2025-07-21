import serviceImage from '@/assets/risk-assessment/impurity-profiling.jpg';
const link = '/services/risk-assessment/impurity-profiling';

export default {
  slug: 'impurity-profiling',
  parentSlug: 'risk-assessment',
  service_id: 'cro-impurity-profiling',
  report_type: 'Impurity Profiling and Qualification',
  title: 'Impurity Profiling',
  name: 'Impurity Profiling',
  description:
    'Comprehensive impurity identification and qualification using advanced analytical and toxicological techniques for regulatory compliance.',
  full_description:
    'Our Impurity Profiling services offer precise identification, characterization, and toxicological qualification of impurities in pharmaceutical products. Leveraging advanced instruments like LC-MS/MS, GC-MS, NMR, and HRMS, we help you detect and understand trace-level impurities. We support regulatory submissions with Threshold of Toxicological Concern (TTC) evaluations and full impurity qualification studies, aligning with ICH Q3A/B and M7 guidelines.',
  estimated_duration: '1–2 weeks (depending on number of impurities)',
  deliverables: [
    'Analytical characterization report',
    'Structure elucidation (MS/NMR data)',
    'TTC evaluation report (if needed)',
    'Impurity qualification summary',
  ],
  regulatory_basis: [
    'ICH Q3A/B',
    'ICH M7',
    'EMA Impurity Guidelines',
    'FDA Guidance for Industry – Impurities in Drug Substances',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturing', 'CDMO'],
  expertise_area: ['Analytical Chemistry', 'Regulatory Toxicology', 'Impurity Safety'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Impurity Profiling and Qualification Lab Analysis',
    caption: 'Advanced identification and toxicological evaluation of pharmaceutical impurities.',
  },
  gtm: {
    eventCategory: 'Impurity Profiling',
    eventAction: 'Impurity Profiling Page View',
    eventLabel: 'Impurity Profiling Service Detail',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Impurity Profiling'],
      certification: 'ICH Q3A/B Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Impurity Profiling',
    description:
      'Impurity Profiling and Qualification services including advanced analytical detection and TTC-based toxicological risk assessment.',
    serviceType: 'Impurity Profiling and Qualification',
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
      name: 'Impurity Profiling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Identification via LC-MS/MS, GC-MS, NMR, HRMS',
            description:
              'State-of-the-art impurity detection and structure elucidation using LC-MS/MS, GC-MS, high-field NMR, and HRMS instrumentation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Threshold of Toxicological Concern (TTC) Analysis',
            description:
              'Toxicological evaluation of unknown or unqualified impurities using TTC-based risk thresholds, in line with ICH M7 and EMA guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Impurity Qualification Studies',
            description:
              'Assessment of impurity safety based on available toxicological data, structural alerts, and regulatory thresholds for mutagenicity and carcinogenicity.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Compound/sample-based pricing',
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
        name: 'What is impurity profiling in pharmaceuticals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Impurity profiling involves detecting, identifying, and evaluating chemical impurities in drug substances or products. It ensures safety and compliance with regulatory guidelines like ICH Q3A/B and M7.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which techniques are used for impurity identification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use advanced tools such as LC-MS/MS, GC-MS, NMR, and High-Resolution Mass Spectrometry (HRMS) to accurately identify and characterize trace-level impurities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Threshold of Toxicological Concern (TTC)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TTC is a risk assessment principle that defines safe exposure levels for impurities with limited toxicological data, allowing for regulatory decision-making when full data isn’t available.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is impurity qualification required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Impurities that exceed identification or qualification thresholds as per ICH Q3A/B or M7 must be qualified to demonstrate they do not pose a toxicological risk to patients.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your impurity studies GLP or ICH compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our impurity profiling services are conducted in full alignment with ICH Q3A/B and M7 guidelines, using validated methods and regulatory-grade documentation.',
        },
      },
    ],
  },
  meta: {
    title: 'Impurity Profiling Services | Indivirtus CRO',
    description:
      'Impurity identification and toxicological qualification using LC-MS/MS, GC-MS, NMR, HRMS, and TTC analysis. ICH Q3A/B & M7-compliant reports.',
    keywords: [
      'impurity profiling',
      'impurity identification LC-MS',
      'TTC analysis',
      'impurity qualification',
      'ICH Q3A',
      'ICH M7',
      'pharmaceutical impurity testing',
      'Indivirtus CRO',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Impurity Profiling Services | Indivirtus CRO',
      description:
        'Advanced impurity detection and TTC-based toxicological qualification in full compliance with ICH Q3A/B and M7.',
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
    'Impurity Detection (LC-MS/MS, GC-MS, NMR)',
    'TTC Toxicological Evaluation',
    'Impurity Qualification Studies',
  ],
};
