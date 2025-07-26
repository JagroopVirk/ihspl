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
  pageContent: {
    hero: {
      heading: "Extractables & Leachables Testing for <span class='halfHeading'>Patient Safety</span>",
      tagline: 'Comprehensive E&L Studies for Regulatory Compliance',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Extractables and Leachables (E&L) Testing services</strong> identify and quantify substances migrating from packaging or delivery systems into pharmaceuticals. Using ISO 10993-18 and advanced techniques like GC-MS and LC-MS/MS, we ensure <strong>safety and regulatory compliance</strong> for global submissions.',
    },
    overview: {
      heading: "Mastering E&L <span class='halfHeading'>Testing Excellence</span>",
      overviewCards: [
        {
          heading: 'What are E&L Testing Services?',
          detail:
            'Our services include customized E&L study protocols, extractables profiling, leachables testing under simulated-use conditions, and toxicological risk assessments, ensuring <strong>compliance with global standards</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'E&L testing ensures <strong>patient safety</strong>, confirms compatibility with drug formulations, and supports regulatory compliance by identifying potentially harmful substances from packaging or delivery systems.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led E&L solutions</strong>, providing accurate, regulator-ready data to support safe product development and global market authorization.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>E&L Testing Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Extractables and Leachables Testing services are led by certified analytical and toxicology experts with <strong>global regulatory expertise</strong>. We design customized study protocols and use advanced techniques like GC-MS and LC-MS/MS to detect and quantify extractables and leachables under simulated-use conditions.',
        'Our approach ensures <strong>regulator-ready reports</strong>, aligning with ISO 10993-18, USP <1663>/<1664>, ICH Q3D, and FDA Container Closure Guidelines to support pharmaceutical safety and compliance.',
      ],
    },
    deliverables: {
      heading: "E&L Testing <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>E&L Study Protocol (Customized)</strong>: Tailored plan for extractables and leachables testing.',
        '<strong>Extractables Profile (GC-MS/LC-MS/MS)</strong>: Detailed analysis of potential extractable compounds.',
        '<strong>Leachables Report Under Simulated-Use Conditions</strong>: Comprehensive leachables data for regulatory submissions.',
        '<strong>Toxicological Risk Assessment (if required)</strong>: Safety evaluation of identified substances.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our E&L Testing services align with stringent global standards, ensuring your data is <strong>regulator-ready</strong> and compliant with international expectations. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence and product safety.',
      ],
      itemList: [
        '<strong>ISO 10993-18</strong>: Standard for chemical characterization of medical device materials.',
        '<strong>USP <1663> / <1664></strong>: Guidelines for extractables and leachables in pharmaceutical packaging.',
        '<strong>ICH Q3D</strong>: Standards for elemental impurities, including leachables.',
        '<strong>FDA Container Closure Guidelines</strong>: U.S. regulations for packaging system safety.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our E&L Testing services are essential for pharmaceutical and medical device companies ensuring <strong>product safety</strong> and regulatory compliance. Ideal for packaging, drug delivery systems, and medical devices, our solutions support global submissions. Key use cases include assessing <strong>packaging compatibility</strong>, evaluating leachables for regulatory filings, and ensuring safety for drug-device combinations.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical and medical device companies, delivering <strong>expert-led E&L testing solutions</strong> backed by certified analytical and toxicology professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, robust E&L data, driving <strong>regulatory success</strong> and patient safety.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>Packaging Safety?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert E&L Solutions',
      aria: 'Contact us to discuss your extractables and leachables testing needs',
    },
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
      serviceUrl: `https://www.indivirtus.com${link}`,
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
      {
        '@type': 'Question',
        name: 'What do Extractables & Leachables Testing services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include customized E&L study protocols, extractables profiling, leachables testing under simulated-use conditions, and toxicological risk assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from E&L Testing services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical and medical device companies developing packaging or delivery systems benefit from our tailored E&L solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with ISO 10993-18, USP <1663>/<1664>, ICH Q3D, and FDA Container Closure Guidelines, ensuring global compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive customized E&L protocols, extractables profiles, leachables reports, and toxicological risk assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the E&L testing services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific packaging, delivery systems, and regulatory requirements, ensuring compliant solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide regulator-ready E&L reports and risk assessments to support safety data for pharmaceutical and medical device submissions.',
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
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Extractables and Leachables (E&L) Studies | Indivirtus CRO',
      description:
        'Protect patient safety with extractables and leachables testing per ISO 10993-18 and USP <1663>/<1664> using advanced GC-MS and LC-MS/MS.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
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
