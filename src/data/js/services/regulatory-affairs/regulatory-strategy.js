import serviceImage from '@/assets/regulatory-affairs/regulatory-strategy.jpg';
const link = '/services/regulatory-affairs/regulatory-strategy';

export default {
  slug: 'regulatory-strategy',
  parentSlug: 'regulatory-affairs',
  service_id: 'RS001',
  report_type: 'Regulatory Strategy Report',
  title: 'Regulatory Strategy Consulting for Pharma & Biotech',
  name: 'Regulatory Strategy',
  description:
    'End-to-end regulatory strategy planning including global pathway analysis, agency consultations, and expedited approval programs.',
  full_description:
    'Our Regulatory Strategy services help pharmaceutical and biotech companies navigate complex global regulatory landscapes. We provide tailored guidance from early-stage planning through post-marketing, ensuring your product meets all compliance requirements while accelerating market entry. Services include regulatory gap assessments, strategic support for expedited programs, global submission planning, and consultation management with key regulatory bodies like the US FDA, EMA, and other international agencies.',
  estimated_duration: '2–6 weeks depending on scope',
  deliverables: [
    'Global regulatory pathway roadmap',
    'Agency meeting briefing documents',
    'Gap analysis report with recommendations',
    'Expedited program eligibility strategy',
  ],
  regulatory_basis: ['ICH', 'FDA Guidelines', 'EMA Scientific Advice Procedures'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'Biopharma'],
  expertise_area: ['Regulatory Affairs', 'Clinical Development'],
  is_active: true,
  pageLink: link,
  icon: '📊',
  image: {
    path: serviceImage,
    alt: 'Regulatory Strategy Service',
    caption: 'Pharmaceutical Regulatory Strategy Consultation',
  },
  gtm: {
    eventCategory: 'Regulatory Strategy',
    eventAction: 'Consultation Request',
    eventLabel: 'Regulatory Strategy Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Regulatory Strategy Report'],
      certification: 'ICH/FDA/EMA Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Regulatory Strategy',
    description:
      'Expert regulatory strategy consulting including global submission planning, regulatory gap assessments, expedited program support, and agency consultation management.',
    serviceType: 'Regulatory Strategy Consulting',
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
      name: 'Regulatory Strategy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Global pathway analysis',
            description:
              'Mapping optimal global submission pathways tailored to product classification, region, and development stage.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pre-submission consultations',
            description:
              'Support in preparing and managing meetings with regulatory bodies like FDA, EMA, and CDSCO to align on development strategy.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Expedited program support',
            description:
              'Assistance in identifying and applying for accelerated regulatory programs such as Fast Track, Breakthrough Therapy, or PRIME.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory gap assessment',
            description:
              'Comprehensive review of existing documentation and processes to identify compliance gaps and remediation strategies.',
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
        name: 'What is a global regulatory pathway analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a strategic assessment to determine the best global submission routes for a product, considering regional requirements, classification, and target markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are pre-submission consultations important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They help align your development plans with regulatory expectations early on, reducing future delays or rejections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What expedited programs can your team support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support programs like FDA Fast Track, Breakthrough Therapy Designation, Accelerated Approval, and EMA’s PRIME, tailored to your product’s eligibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is a regulatory gap assessment conducted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review your current regulatory documentation and identify gaps against international standards, providing a roadmap for compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this service suitable for early-stage biotech startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our regulatory strategy services are customized for all stages, including startups needing foundational guidance.',
        },
      },
    ],
  },
  meta: {
    title: 'Regulatory Strategy Services | Global Regulatory Consulting | Indivirtus',
    description:
      'Indivirtus offers expert regulatory strategy services for pharmaceutical and biotech companies. From global submission planning to regulatory gap analysis and agency consultation support, we accelerate your regulatory success.',
    keywords: [
      'regulatory strategy',
      'pharmaceutical regulatory consulting',
      'global regulatory pathway',
      'regulatory gap assessment',
      'expedited approval support',
      'FDA EMA consultation',
      'CRO regulatory services',
      'drug development strategy',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Regulatory Strategy Services | Indivirtus',
      description: 'End-to-end global regulatory strategy services for pharma and biotech companies.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Gap Analysis', 'Regulatory Roadmap Review', 'Submission Planning Support'],
};
