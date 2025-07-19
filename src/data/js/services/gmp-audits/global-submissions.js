import serviceImage from '@/assets/gmp-audits/global-submissions.jpg';
const link = '/services/gmp-audits/global-submissions';

export default {
  slug: 'global-submissions',
  parentSlug: 'regulatory-affairs',
  service_id: 'RS-GSS-009',
  report_type: 'Regulatory Filing Support',
  title: 'Global Submission Support',
  name: 'Global Submission Support',
  description: 'Expert regulatory support for FDA, EMA, PMDA, WHO PQ submissions, and lifecycle document handling.',
  full_description:
    'Indivirtus offers comprehensive Global Submission Support for pharmaceutical and biopharmaceutical organizations aiming for regulatory approvals in multiple regions. Our team assists in compiling, reviewing, and submitting dossiers for agencies like the FDA, EMA, PMDA, and WHO. Services include managing DMF/CEP lifecycles, preparing query responses, and aligning regulatory strategies with country-specific requirements. Whether your need is initial submission, lifecycle management, or post-approval changes, we streamline the regulatory journey to ensure timely approvals and global market access.',
  estimated_duration: '4–12 weeks depending on region and submission type',
  deliverables: [
    'Agency-specific submission dossier',
    'Query response documentation',
    'CEP/DMF lifecycle reports',
    'Submission timelines & status dashboards',
  ],
  regulatory_basis: ['FDA', 'EMA', 'PMDA', 'WHO', 'ICH CTD', 'eCTD'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biopharmaceuticals', 'Generics'],
  expertise_area: ['Regulatory Affairs', 'CMC', 'Global Compliance'],
  is_active: true,
  pageLink: link,
  icon: '🌍',
  image: {
    path: serviceImage,
    alt: 'Regulatory Submission Services by Indivirtus',
    caption: 'Global regulatory filings & compliance support',
  },
  gtm: {
    eventCategory: 'Regulatory Affairs',
    eventAction: 'Submission Support Viewed',
    eventLabel: 'Global Submission Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Regulatory Filing Support'],
      certification: 'Agency-compliant Dossier',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Global Submission Support',
    description:
      'Global regulatory submission support services including FDA, EMA, PMDA filings, WHO PQ, and lifecycle management for DMF and CEP.',
    serviceType: 'Regulatory Submission Consulting',
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
      name: 'Global Submission Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FDA, EMA, PMDA Filings',
            description: 'Regulatory dossier preparation and submission for global authorities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Query Response Compilation',
            description: 'Compilation and strategic drafting of regulatory query responses.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DMF/CEP Lifecycle Management',
            description: 'Lifecycle and variation handling for Drug Master Files and CEPs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WHO PQ Submissions',
            description: 'End-to-end support for WHO Prequalification submissions and audits.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Region-based pricing',
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
        name: 'What global agencies do you support submissions for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support submissions to FDA, EMA, PMDA, WHO, and various country-specific regulatory authorities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help respond to regulatory authority queries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide strategic support in drafting and submitting responses to agency queries post-filing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle lifecycle management of DMF and CEP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We manage the entire lifecycle including variations, renewals, and compliance updates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WHO PQ submission support included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer full support for WHO Prequalification submissions, including dossier preparation and audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is required from clients to begin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically require the product dossier, manufacturing process details, prior correspondence, and supporting documents as per regional requirements.',
        },
      },
    ],
  },
  meta: {
    title: 'Global Submission Support | FDA, EMA, PMDA & WHO Filing Experts',
    description:
      'Expert regulatory submission support for FDA, EMA, PMDA, WHO PQ, DMF/CEP lifecycle management, and global regulatory strategy by Indivirtus.',
    keywords: [
      'Global Submission Support',
      'Regulatory Filings',
      'FDA submission',
      'EMA dossier',
      'PMDA regulatory',
      'WHO PQ submission',
      'CEP lifecycle',
      'DMF submission',
      'Regulatory Affairs CRO',
      'Indivirtus regulatory support',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Global Submission Support | FDA, EMA, WHO Experts',
      description: 'Seamless regulatory submissions and global dossier handling support by Indivirtus Healthcare.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Global Filing Review', 'Dossier Compilation', 'Regulatory Gap Analysis', 'Lifecycle Management'],
};
