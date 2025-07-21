import serviceImage from '@/assets/risk-assessment/e-and-l-studies.jpg';
const link = '/services/risk-assessment/e-and-l-studies';

export default {
  slug: 'e-and-l-studies',
  parentSlug: 'risk-assessment',
  service_id: 'cro-e-and-l',
  report_type: 'Extractables and Leachables Report',
  title: 'Extractables and Leachables (E&L) Studies',
  name: 'Extractables and Leachables Studies',
  description:
    'Comprehensive E&L testing using ISO 10993-18 guidelines with advanced analytical detection to assess patient exposure risks from packaging and delivery systems.',
  full_description:
    'Our Extractables and Leachables (E&L) studies identify and quantify potentially harmful substances that may migrate from packaging, medical devices, or drug delivery systems into pharmaceutical products. Using ISO 10993-18 as a foundation, we apply simulated-use conditions and advanced techniques like GC-MS and LC-MS/MS to detect extractables and leachables in line with ICH and USP expectations. The goal is to ensure safety, regulatory compliance, and compatibility with drug formulations.',
  estimated_duration: '2–4 weeks depending on system complexity',
  deliverables: [
    'E&L study protocol (customized)',
    'Extractables profile (GC-MS/LC-MS/MS)',
    'Leachables report under simulated-use conditions',
    'Toxicological risk assessment (if required)',
  ],
  regulatory_basis: [
    'ISO 10993-18',
    'USP <1663> / <1664>',
    'ICH Q3D (for elemental leachables)',
    'FDA Container Closure Guidelines',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Medical Devices', 'Injectables', 'Biopharma'],
  expertise_area: ['E&L Testing', 'Analytical Chemistry', 'Container Closure Evaluation'],
  is_active: true,
  pageLink: link,
  icon: '🧴',
  image: {
    path: serviceImage,
    alt: 'Extractables and Leachables Analysis Report',
    caption: 'Identify and quantify leachables from packaging and devices into pharmaceuticals.',
  },
  gtm: {
    eventCategory: 'E&L Studies',
    eventAction: 'E&L Service View',
    eventLabel: 'Extractables and Leachables Testing Page',
    dataLayerPush: {
      reportType: ['E&L Report'],
      certification: 'ISO 10993-18 / USP <1663> / <1664>',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Extractables and Leachables (E&L) Studies',
    description:
      'Comprehensive chemical characterization and analysis of extractables and leachables using ISO 10993-18 and USP <1663>/<1664> standards.',
    serviceType: 'E&L Testing Service',
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
      name: 'E&L Testing Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ISO 10993-18 Chemical Characterization',
            description:
              'Chemical profiling of materials using ISO 10993-18 to support biocompatibility evaluation and extractables identification.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Simulated-Use Extraction Studies',
            description:
              'Real-world simulation using relevant solvents, time, and temperature conditions to assess potential leachables under product-use scenarios.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Advanced GC-MS and LC-MS/MS Detection',
            description:
              'High-resolution analytical techniques used to detect organic extractables and leachables at trace levels in compliance with regulatory expectations.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Based on material complexity and product category',
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
        name: 'What are extractables and leachables?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Extractables are compounds released from packaging or devices under controlled conditions, while leachables are compounds that actually migrate into the drug product during real-world use. Both must be assessed to ensure patient safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which guidelines govern E&L studies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key guidelines include ISO 10993-18, USP <1663> and <1664>, and ICH Q3D. These provide methodologies for E&L characterization, toxicological risk assessment, and acceptable exposure limits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What techniques are used for E&L analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use a combination of GC-MS, LC-MS/MS, ICP-MS, and FTIR depending on the expected chemical nature of the extractables and leachables in the test matrix.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is toxicological evaluation included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we can provide a toxicological risk assessment (TRA) for identified leachables to determine potential patient risks and whether levels exceed permitted thresholds.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer simulated-use studies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We design simulated-use protocols with relevant solvents, temperature, and time conditions based on intended drug product usage to assess real-world leachables.',
        },
      },
    ],
  },
  meta: {
    title: 'Extractables and Leachables (E&L) Studies | Indivirtus CRO',
    description:
      'Comprehensive E&L studies for packaging and device safety. ISO 10993-18 chemical characterization, simulated-use extraction, and GC-MS/LC-MS/MS analysis.',
    keywords: [
      'extractables and leachables testing',
      'E&L studies',
      'ISO 10993-18',
      'USP <1663> <1664>',
      'GC-MS E&L',
      'LC-MS/MS leachables',
      'container closure system evaluation',
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
      title: 'Extractables and Leachables (E&L) Studies | Indivirtus CRO',
      description:
        'Protect patient safety with extractables and leachables testing per ISO 10993-18 and USP <1663>/<1664> using advanced GC-MS and LC-MS/MS.',
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
    'Extractables Study (GC-MS, LC-MS/MS)',
    'Leachables Study under Simulated Use',
    'Toxicological Risk Assessment (TRA)',
  ],
};
