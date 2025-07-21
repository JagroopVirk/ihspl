import serviceImage from '@/assets/regulatory-affairs/product-registration.jpg';
const link = '/services/regulatory-affairs/product-registration';

export default {
  slug: 'product-registration',
  parentSlug: 'regulatory-affairs',
  service_id: 'REG001',
  report_type: 'Dossier Registration Pack',
  title: 'Pharmaceutical Product Registration Services',
  name: 'Product Registration',
  description:
    'Dossier compilation and regulatory submission services across CDSCO, FDA, EMA, and Rest-of-World markets.',
  full_description:
    'Indivirtus supports global product registration with expert preparation and submission of regulatory dossiers across major agencies including CDSCO (India), FDA (US), EMA (Europe), and ROW (Rest of World) markets. Our team ensures region-specific CTD/eCTD formats, manages communication with local agents, and tracks licenses through every milestone. Whether for new drugs, biologics, or generics, our services ensure a clear, compliant path to market authorization.',
  estimated_duration: '3–12 months depending on region and product type',
  deliverables: [
    'Dossier in CTD or eCTD format',
    'Regulatory submission forms',
    'Authorization letters and power of attorney',
    'Local agent coordination',
    'License tracking reports',
  ],
  regulatory_basis: ['CDSCO', 'US FDA 21 CFR', 'EMA Guidelines', 'ICH M4', 'ASEAN CTD', 'GCC Guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'Medical Devices'],
  expertise_area: ['Regulatory Affairs', 'Dossier Filing', 'Global Compliance'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'Global Product Registration Services',
    caption: 'Dossier Compilation, Regulatory Submissions, Local Agent Support',
  },
  gtm: {
    eventCategory: 'Product Registration',
    eventAction: 'Dossier Submission Request',
    eventLabel: 'Product Registration Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Dossier Registration Pack'],
      certification: 'FDA / EMA / CDSCO Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Product Registration',
    description:
      'Comprehensive dossier preparation, agency submission, and license tracking for global pharmaceutical registration.',
    serviceType: 'Regulatory Product Registration',
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
      name: 'Product Registration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CDSCO, FDA, EMA filings',
            description:
              'Regulatory submission of pharmaceutical dossiers to CDSCO (India), US FDA, EMA, and other major authorities in CTD/eCTD format.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ROW market submissions',
            description:
              'Preparation of country-specific dossiers for Rest-of-World markets including GCC, ASEAN, LATAM, and CIS regions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local agent support',
            description:
              'Coordination with qualified local agents or authorized representatives for dossier submissions, query responses, and compliance follow-up.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'License tracking',
            description:
              'Real-time tracking and status monitoring of license applications and approvals with proactive follow-up on regulatory milestones.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Custom quote based on region and format',
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
        name: 'What is included in a product registration dossier?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A product registration dossier typically includes administrative forms, quality/CMC data, nonclinical and clinical data, and labeling. It must follow the CTD or eCTD structure per region-specific guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does regulatory product registration take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Timelines vary depending on the region and product type. It can range from 3 to 12 months. Accelerated or priority review may reduce this time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Indivirtus support registrations in ROW markets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have experience submitting to multiple Rest-of-World markets including LATAM, ASEAN, MENA, and CIS using region-specific formats like ASEAN CTD.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the requirements for local agent representation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most countries require a local authorized representative or agent to submit and communicate with regulatory authorities. We offer agent coordination and can act on your behalf where needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus track licenses post-submission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer proactive license tracking with regular updates on status, authority queries, and deadlines to ensure nothing is missed during the review process.',
        },
      },
    ],
  },
  meta: {
    title: 'Product Registration Services | Global Regulatory Submissions | Indivirtus',
    description:
      'Expert support for pharmaceutical product registration across CDSCO, FDA, EMA, and ROW markets. CTD/eCTD dossier filing, local agent management, and license tracking.',
    keywords: [
      'pharmaceutical product registration',
      'CDSCO FDA EMA dossier filing',
      'eCTD regulatory submission',
      'local agent pharma',
      'license tracking services',
      'CRO product registration',
      'ROW market submissions',
      'global drug registration support',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Product Registration Services | Indivirtus',
      description: 'CTD/eCTD dossier submission to global regulatory bodies with full license tracking support.',
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
    'CTD Format Assessment',
    'Market Access Planning',
    'Regulatory Risk Review',
    'ROW Compliance Gap Analysis',
  ],
};
