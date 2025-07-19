import serviceImage from '@/assets/pharmacovigilance/risk-management.jpg';
const link = '/services/pharmacovigilance/risk-management';

export default {
  slug: 'risk-management',
  parentSlug: 'pharmacovigilance',
  service_id: 'RMP-PV-002',
  report_type: 'Risk Management Plan (RMP)',
  title: 'Risk Management Plan Services',
  name: 'Risk Management Plan',
  description: 'Expert preparation of EU-RMPs, REMS, and lifecycle management of safety risk strategies.',
  full_description:
    'Indivirtus delivers comprehensive Risk Management Plan (RMP) services, supporting pharmaceutical sponsors across the EU-RMP and US REMS regulatory landscapes. From drafting safety specifications and identifying risks, to designing and implementing risk minimization measures, we manage the entire lifecycle of RMPs to ensure regulatory compliance and patient safety. Our cross-functional expertise ensures seamless integration with your pharmacovigilance system and submission timelines.',
  estimated_duration: '3–5 weeks depending on product complexity',
  deliverables: [
    'EU-RMP and REMS documents (Module VI)',
    'Safety specification & pharmacovigilance plan',
    'Risk minimization measures (RMM)',
    'RMP update tracking & lifecycle support',
  ],
  regulatory_basis: ['ICH E2E', 'EMA GVP Module V', 'FDA REMS Guidance'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Regulatory Affairs'],
  expertise_area: ['Pharmacovigilance', 'Risk Management Plans', 'REMS'],
  is_active: true,
  pageLink: link,
  icon: '📋',
  image: {
    path: serviceImage,
    alt: 'Risk Management Plan document preparation and lifecycle support',
    caption: 'Ensuring patient safety with robust risk mitigation strategies.',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Risk Management Plan Inquiry',
    eventLabel: 'RMP & REMS Preparation',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['EU-RMP', 'REMS'],
      certification: 'GVP Module V Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Risk Management Plan',
    description: 'Preparation and lifecycle management of EU-RMPs and REMS for regulatory compliance.',
    serviceType: 'Pharmacovigilance Risk Management',
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
      name: 'Risk Management Plan Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EU-RMP & REMS Preparation',
            description: 'Drafting of EU Risk Management Plans and FDA-compliant REMS strategies for product approval.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Safety Specification',
            description: 'Identification and documentation of known and potential risks as part of RMP Module SVIII.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Risk Minimization Measures',
            description:
              'Development of targeted RMM strategies, including educational materials and controlled distribution plans.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RMP Lifecycle Management',
            description: 'Ongoing updates, revision tracking, and global regulatory coordination for existing RMPs.',
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
        name: 'What is an EU-RMP and when is it required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An EU-RMP (Risk Management Plan) is a mandatory document for all new drug applications in the EU, detailing identified and potential risks, along with plans to minimize them throughout a product’s lifecycle.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does a REMS differ from an EU-RMP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While both aim to manage drug safety risks, REMS (Risk Evaluation and Mitigation Strategy) is required by the FDA for US marketing, whereas EU-RMP follows EMA guidelines. The structure, scope, and enforcement mechanisms differ significantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are risk minimization measures (RMMs)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Risk minimization measures are actions like educational materials, restricted access programs, or communication plans that aim to reduce the likelihood or severity of adverse drug reactions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support updates to existing RMPs post-approval?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide full RMP lifecycle management, including annual revisions, updates based on signal detection, and adaptations to new regulatory requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you help with RMP integration into CTD modules?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We ensure seamless integration of RMPs into CTD Module 1.8.2 for EU submissions and provide corresponding documentation support for US REMS filings.',
        },
      },
    ],
  },
  meta: {
    title: 'Risk Management Plan (RMP) Services | Pharmacovigilance | Indivirtus',
    description:
      'Indivirtus offers regulatory-compliant RMP and REMS preparation services, including safety specification, risk minimization measures, and complete lifecycle support for global pharmaceutical companies.',
    keywords: [
      'Risk Management Plan',
      'EU-RMP',
      'REMS',
      'Safety Specification',
      'Pharmacovigilance',
      'RMM',
      'RMP lifecycle',
      'Pharma risk mitigation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Risk Management Plan (RMP) Services | Indivirtus',
      description: 'Global RMP and REMS development and regulatory compliance for safer pharmaceutical products.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Risk Identification & RMM Planning', 'Regulatory RMP/REMS Submission'],
};
