import serviceImage from '@/assets/risk-assessment/in-vivo-testing.jpg';
const link = '/services/risk-assessment/in-vivo-testing';

export default {
  slug: 'in-vivo-testing',
  parentSlug: 'risk-assessment',
  service_id: 'cro-in-vivo-genotox',
  report_type: 'In Vivo Genotoxicity Testing',
  title: 'In Vivo Genotoxicity Testing',
  name: 'In Vivo Genotoxicity Testing',
  description:
    'Regulatory-compliant in vivo genotoxicity testing services including Micronucleus Test, Comet Assay, and Transgenic Rodent Mutation Assays.',
  full_description:
    'Indivirtus offers comprehensive in vivo genotoxicity testing to evaluate the potential of compounds to cause genetic damage in living organisms. Following OECD guidelines, our services include the Micronucleus Test (OECD 474), Comet Assay (OECD 489), and Transgenic Rodent Mutation Assays. These tests provide critical safety data required for IND, NDA, and other global submissions, ensuring both regulatory compliance and scientific reliability.',
  estimated_duration: '2–4 weeks',
  deliverables: [
    'GLP-compliant study protocol',
    'Raw data & statistical analysis',
    'OECD-compliant full study report',
    'Interpretation and regulatory conclusion',
  ],
  regulatory_basis: ['OECD 474', 'OECD 489', 'OECD 488', 'ICH S2(R1)', 'FDA Genotoxicity Guidance'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturing', 'Regulatory Submissions'],
  expertise_area: ['Genotoxicology', 'In Vivo Studies', 'Preclinical Safety'],
  is_active: true,
  pageLink: link,
  icon: '🐁',
  image: {
    path: serviceImage,
    alt: 'In Vivo Genotoxicity Testing Lab',
    caption: 'Animal-based genotoxicity assays for DNA damage and mutagenicity detection.',
  },
  gtm: {
    eventCategory: 'In Vivo Genotoxicity Testing',
    eventAction: 'In Vivo Genotoxicity Page View',
    eventLabel: 'Genotoxicity Service Detail',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['In Vivo Genotoxicity Testing'],
      certification: 'GLP-compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'In Vivo Genotoxicity Testing',
    description:
      'In vivo genotoxicity testing services including OECD 474, OECD 489, and transgenic rodent assays to detect chromosomal and DNA damage in live models.',
    serviceType: 'In Vivo Genotoxicity Testing',
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
      name: 'In Vivo Genotoxicity Testing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'In Vivo Micronucleus Test (OECD 474)',
            description:
              'Detects chromosomal damage in bone marrow or peripheral blood cells in rodents after compound exposure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Comet Assay (OECD 489)',
            description:
              'Single-cell gel electrophoresis test that detects DNA strand breaks in specific target organs after in vivo exposure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transgenic Rodent Mutation Assays',
            description:
              'Evaluates mutation frequencies in transgenic reporter genes, providing mechanistic insight into genotoxic potential.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Study design and species-based pricing',
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
        name: 'What is in vivo genotoxicity testing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In vivo genotoxicity testing involves administering a compound to live animals to detect chromosomal and DNA damage, helping determine its mutagenic potential in whole organisms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Micronucleus Test (OECD 474)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Micronucleus Test detects structural or numerical chromosomal damage by measuring micronuclei formation in dividing cells of rodents, typically bone marrow or blood cells.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the Comet Assay preferred?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Comet Assay (OECD 489) is ideal when evaluating DNA strand breaks in specific tissues like liver or stomach after systemic exposure, especially for short-lived or reactive compounds.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Transgenic Rodent Mutation Assays?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These assays use genetically engineered rodents carrying reporter genes to directly detect gene mutations after compound exposure, offering insights into mutagenic mechanisms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your studies GLP-compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All our in vivo genotoxicity studies are conducted in accordance with OECD and GLP guidelines, ensuring quality, reproducibility, and regulatory acceptance.',
        },
      },
    ],
  },
  meta: {
    title: 'In Vivo Genotoxicity Testing | Indivirtus CRO Services',
    description:
      'OECD-compliant in vivo genotoxicity studies including Micronucleus Test, Comet Assay, and Transgenic Rodent Assays for regulatory submissions.',
    keywords: [
      'in vivo genotoxicity',
      'OECD 474',
      'OECD 489',
      'Transgenic Rodent Assay',
      'Comet Assay',
      'Micronucleus test',
      'GLP genotoxicity testing',
      'Regulatory safety studies',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'In Vivo Genotoxicity Testing | Indivirtus CRO Services',
      description:
        'OECD 474, 489, and transgenic rodent studies conducted under GLP for pharma safety testing and global regulatory filings.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Micronucleus Test (OECD 474)', 'Comet Assay (OECD 489)', 'Transgenic Rodent Assay'],
};
