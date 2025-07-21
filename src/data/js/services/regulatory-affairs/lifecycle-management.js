import serviceImage from '@/assets/regulatory-affairs/lifecycle-management.jpg';
const link = '/services/regulatory-affairs/lifecycle-management';

export default {
  slug: 'lifecycle-management',
  parentSlug: 'regulatory-affairs',
  service_id: 'LCM001',
  report_type: 'Lifecycle Management Filing Pack',
  title: 'Regulatory Lifecycle Management Services',
  name: 'Lifecycle Management',
  description:
    'Comprehensive support for pharmaceutical product lifecycle including variations, renewals, labeling updates, and change control.',
  full_description:
    'Indivirtus offers full-spectrum regulatory lifecycle management services to ensure continuous compliance and market maintenance of pharmaceutical products. From filing post-approval variations and managing labeling updates, to handling change control and license renewals across global regulatory bodies, our team ensures your product remains market-ready throughout its life. We tailor our solutions for each region’s regulatory expectations including EMA, FDA, CDSCO, and other national authorities.',
  estimated_duration: 'Timeline depends on change type and regulatory region',
  deliverables: [
    'Variation application dossier',
    'Updated product labels and SmPC',
    'Change control impact assessment',
    'License renewal filing documents',
  ],
  regulatory_basis: ['ICH Q12', 'EU Regulation (EC) No 1234/2008', 'US FDA Post-Approval Changes', 'CDSCO Guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology'],
  expertise_area: ['Regulatory Affairs', 'CMC', 'Labeling & Compliance'],
  is_active: true,
  pageLink: link,
  icon: '♻️',
  image: {
    path: serviceImage,
    alt: 'Lifecycle Management Service',
    caption: 'Variation Filing, Labeling, and License Renewals for Pharma',
  },
  gtm: {
    eventCategory: 'Lifecycle Management',
    eventAction: 'Variation Filing Request',
    eventLabel: 'Lifecycle Regulatory Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Lifecycle Management Filing Pack'],
      certification: 'FDA / EMA / CDSCO Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lifecycle Management',
    description:
      'Post-approval regulatory lifecycle management for pharma products including variation filings, labeling, renewals, and change control.',
    serviceType: 'Regulatory Lifecycle Support',
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
      name: 'Regulatory Lifecycle Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Variation filings',
            description:
              'Support for filing quality, clinical, and administrative variations across markets to reflect approved post-approval changes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Labeling & renewals',
            description:
              'Preparation and submission of updated labeling (e.g. SmPC, PIL) and coordination of license renewals to maintain market authorization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Change control',
            description:
              'Evaluation and documentation of change control processes to assess regulatory impact and ensure timely variation submissions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'License renewals',
            description:
              'End-to-end license renewal management for various jurisdictions including dossier updates, health authority coordination, and approval follow-up.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Change-type based pricing',
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
        name: 'What are variation filings in pharmaceutical lifecycle management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Variation filings are submitted to regulatory authorities to update a marketing authorization following changes in manufacturing, packaging, labeling, or clinical data.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should labeling updates be filed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Labeling updates should be filed whenever there are changes in product safety, dosage, indications, or regulatory guidance. These must be reflected in the SmPC and PIL.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is regulatory change control managed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assess the regulatory impact of each internal change and determine whether a variation filing is needed, ensuring proper documentation and compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the timeline for license renewals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Timelines vary by region but license renewals generally need to be initiated 6–12 months before expiry to ensure uninterrupted market authorization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you manage lifecycle filings globally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide full lifecycle management support across global regulatory jurisdictions including EMA, FDA, CDSCO, MHRA, and more.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmaceutical Lifecycle Management | Variations, Renewals & Labeling | Indivirtus',
    description:
      'Regulatory lifecycle management services for pharma products including variation filings, labeling updates, license renewals, and change control. Maintain compliance and market access.',
    keywords: [
      'regulatory lifecycle management',
      'variation filing services',
      'labeling updates pharma',
      'pharmaceutical license renewal',
      'change control regulatory',
      'SmPC PIL updates',
      'pharma compliance services',
      'CRO lifecycle support',
      'regulatory post-approval changes',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Lifecycle Management Services | Indivirtus',
      description: 'Post-approval lifecycle services: regulatory variations, renewals, labeling, and change control.',
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
    'Variation Type Assessment',
    'Labeling Review',
    'Change Control Regulatory Impact',
    'Renewal Dossier Evaluation',
  ],
};
