import serviceImage from '@/assets/gmp-audits/regulatory-strategy.jpg';
const link = '/services/gmp-audits/regulatory-strategy';

export default {
  slug: 'regulatory-strategy',
  parentSlug: 'gmp-audits',
  service_id: 'CRO-GMP-RS-005',
  report_type: 'Regulatory Strategy Report',
  title: 'Regulatory Strategy & Global Submission Consulting',
  name: 'Regulatory Strategy',
  description:
    'Strategic regulatory consultation services including pathway planning, submission harmonization, gap analysis, and authority engagement.',
  full_description:
    'Indivirtus Healthcare Services provides expert Regulatory Strategy consulting to streamline the global market entry of pharmaceutical products. Our services include identifying optimal regulatory pathways, aligning global submission formats (ICH CTD/eCTD), performing country-specific regulatory gap analysis, and developing proactive strategies for engaging with health authorities (FDA, EMA, CDSCO, etc.). These services are critical for organizations preparing for product registration, lifecycle management, or regulatory inspections.',
  estimated_duration: 'Depends on product type & region – typically 7–15 working days',
  deliverables: [
    'Regulatory Pathway Report',
    'Submission Dossier Alignment Map',
    'Gap Analysis Matrix (per target country)',
    'Authority Communication Strategy Document',
  ],
  regulatory_basis: ['ICH CTD/eCTD', 'FDA Guidance', 'EMA Guidelines', 'CDSCO Regulations', 'WHO TRS'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Medical Devices', 'Regulatory Affairs'],
  expertise_area: ['Regulatory Strategy', 'Global Submissions', 'GMP Readiness'],
  is_active: true,
  pageLink: link,
  icon: '🌐',
  image: {
    path: serviceImage,
    alt: 'Regulatory strategy consulting for pharmaceutical submissions and compliance',
    caption: 'Global regulatory strategy services including submission planning and authority engagement',
  },
  gtm: {
    eventCategory: 'GMP Audit Services',
    eventAction: 'Regulatory Strategy Services',
    eventLabel: 'Regulatory Strategy Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Strategy Report'],
      certification: 'Regulatory Consulting',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Regulatory Strategy Consulting',
    description:
      'Global pharmaceutical regulatory strategy consulting including submission planning, gap analysis, and regulatory authority engagement.',
    serviceType: 'Regulatory Consulting',
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
      name: 'Regulatory Strategy Service Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Pathway Consultation',
            description:
              'Evaluation of product type and target markets to recommend the most efficient regulatory submission routes and classifications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Global Submission Harmonization',
            description:
              'Alignment of submission formats (CTD/eCTD) to meet multi-country regulatory requirements efficiently.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Country-specific Gap Analysis',
            description:
              'Identification of missing documentation, format issues, or local regulatory misalignments per target country.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Authority Engagement Strategy',
            description:
              'Development of communication plans and briefing documents to engage with regulators such as CDSCO, EMA, or FDA.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Project-based pricing',
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
        name: 'What is a regulatory strategy consultation in pharma?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It involves evaluating a product's regulatory requirements, identifying the best submission pathways, and ensuring alignment with local and global compliance standards.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why is global submission harmonization important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Harmonization streamlines the submission process, avoids redundant work, and helps launch products in multiple countries simultaneously.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does country-specific gap analysis work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We compare your current documentation against each country's requirements to identify gaps and provide remediation plans for successful submissions.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is an authority engagement strategy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It’s a structured plan for effectively communicating with regulatory agencies, including briefing packages, meeting requests, and Q&A preparation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which regions does Indivirtus support for regulatory strategy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We support global markets including the US, EU, India, GCC, LATAM, and Southeast Asia, tailoring strategy to each region's regulatory framework.",
        },
      },
    ],
  },
  meta: {
    title: 'Regulatory Strategy Consulting | Pharma Submissions | Indivirtus',
    description:
      'Expert consulting on global pharmaceutical regulatory strategy including submission planning, CTD harmonization, country-specific gap analysis, and agency engagement.',
    keywords: [
      'Regulatory strategy consulting',
      'pharma submission strategy',
      'ICH CTD gap analysis',
      'FDA regulatory consulting',
      'regulatory pathway planning',
      'authority engagement strategy',
      'regulatory compliance pharma',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Regulatory Strategy Consulting | Pharma Submissions | Indivirtus',
      description:
        'Navigate global regulations confidently with Indivirtus’ consulting on regulatory pathways, gap analysis, and health authority engagement.',
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
    'Regulatory Pathway',
    'CTD/eCTD Submission Planning',
    'Gap Analysis',
    'Agency Interaction Planning',
  ],
};
