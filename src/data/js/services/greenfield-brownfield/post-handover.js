import serviceImage from '@/assets/greenfield-brownfield/post-handover.jpg';
const link = '/services/greenfield-brownfield/post-handover';

export default {
  slug: 'post-handover',
  parentSlug: 'greenfield-brownfield',
  service_id: 'POST-HANDOVER-001',
  report_type: 'Technical Assistance',
  title: 'Post-Handover Support',
  name: 'Post-Handover Support',
  description:
    'Comprehensive post-handover support services ensuring operational excellence and regulatory compliance in pharmaceutical manufacturing.',
  full_description:
    'Our Post-Handover Support services are tailored to assist pharmaceutical facilities in seamlessly transitioning into compliant and efficient operations after project handover. We provide hands-on SOP training, ensure readiness for regulatory inspections, and help set up preventive maintenance plans and APR/PQR systems. With Indivirtus, clients receive strategic guidance and ongoing support to establish a sustainable GMP-compliant environment.',
  estimated_duration: '1-3 Months',
  deliverables: [
    'Customized SOP training sessions',
    'Regulatory inspection readiness audits',
    'Preventive maintenance calendar',
    'Annual/Periodic Product Quality Review (APR/PQR) frameworks',
  ],
  regulatory_basis: ['ICH Q10', 'GMP', '21 CFR Part 211'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'Medical Devices'],
  expertise_area: ['GMP Compliance', 'Training & Readiness', 'Maintenance Systems'],
  is_active: true,
  pageLink: link,
  icon: '📦',
  image: {
    path: serviceImage,
    alt: 'Post-Handover support for pharma facility',
    caption: 'End-to-end post-handover compliance & training support',
  },
  gtm: {
    eventCategory: 'Post-Handover Support',
    eventAction: 'Submit',
    eventLabel: 'post-handover',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Technical Assistance'],
      certification: 'GMP Compliance',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Post-Handover Support',
    description:
      'Post-handover support for pharma projects, including SOP training, inspection readiness, and maintenance systems.',
    serviceType: 'Post-Handover Operational Support',
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
      name: 'Post-Handover Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SOP Training & Handholding',
            description:
              'On-site and virtual SOP training with expert-led handholding sessions to ensure proper implementation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Inspection Support',
            description:
              'Preparation and assistance for regulatory audits including gap assessments and documentation reviews.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance Planning',
            description:
              'Setup of preventive and corrective maintenance schedules aligned with equipment validation data.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'APR/PQR Setup',
            description: 'Implementation of Annual/Periodic Product Quality Review system per GMP guidelines.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Requirement-based pricing',
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
        name: 'What does post-handover support include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Post-handover support includes SOP training, audit readiness, maintenance setup, and APR/PQR implementation to ensure your facility operates smoothly and compliantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you support regulatory inspection readiness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We conduct mock audits, prepare documentation, and train personnel to ensure your site is fully compliant and confident during inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with setting up maintenance systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we develop preventive and corrective maintenance plans tailored to your equipment and facility type to reduce downtime and ensure compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in APR/PQR setup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our team helps define product review criteria, documentation templates, and reporting systems aligned with GMP to ensure robust annual quality reviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is on-site support available after project handover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our experts provide on-site assistance during the initial operational phase to help your team transition seamlessly and address real-time issues.',
        },
      },
    ],
  },
  meta: {
    title: 'Post-Handover Support Services | SOP Training, Audit Readiness, Maintenance Planning – Indivirtus',
    description:
      'Ensure smooth operations post project completion with Indivirtus’ Post-Handover Support services – covering SOP training, audit support, maintenance plans, and APR/PQR setup.',
    keywords: [
      'Post-handover support pharma',
      'SOP training services',
      'Regulatory audit support',
      'Pharma maintenance planning',
      'APR setup',
      'PQR implementation',
      'Pharmaceutical project handholding',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Post-Handover Support Services | Indivirtus',
      description: 'Get expert SOP training, audit readiness support, and APR/PQR setup post facility handover.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['SOP Audit', 'Regulatory Readiness', 'Operational Qualification'],
};
