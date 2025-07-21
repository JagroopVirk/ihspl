import serviceImage from '@/assets/regulatory-affairs/mah-qp-services.jpg';
const link = '/services/regulatory-affairs/mah-qp-services';

export default {
  slug: 'mah-qp-services',
  parentSlug: 'regulatory-affairs',
  service_id: 'MQS001',
  report_type: 'MAH/QP Compliance Package',
  title: 'MAH & QP Services for EU/UK Regulatory Compliance',
  name: 'MAH & QP Services',
  description:
    'Marketing Authorization Holder (MAH) representation, Qualified Person (QP) support for batch release, EU pharmacovigilance and compliance management.',
  full_description:
    'Indivirtus offers full-service MAH and QP solutions for EU and UK pharmaceutical compliance. Our experts provide end-to-end support for manufacturers requiring EU/UK representation, QP batch certification, pharmacovigilance oversight, and local regulatory alignment. Whether you need a formal MAH setup or ad-hoc QP engagement, we ensure GMP compliance and seamless product release across regulated markets.',
  estimated_duration: 'Ongoing or per-batch depending on engagement',
  deliverables: [
    'MAH contract & regulatory interface documentation',
    'QP declaration & batch release reports',
    'Pharmacovigilance (PV) system management plan',
    'Local representative letters & compliance proof',
  ],
  regulatory_basis: ['EU GMP Annex 16', 'EU/UK MAH Guidelines', 'EMA QP Requirements'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology'],
  expertise_area: ['Regulatory Affairs', 'Pharmacovigilance', 'Quality Assurance'],
  is_active: true,
  pageLink: link,
  icon: '🏷️',
  image: {
    path: serviceImage,
    alt: 'MAH & QP Services in EU/UK',
    caption: 'MAH Representation, QP Batch Release, and Local EU Compliance',
  },
  gtm: {
    eventCategory: 'MAH & QP Services',
    eventAction: 'MAH/QP Service Inquiry',
    eventLabel: 'MAH QP Support',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['MAH/QP Compliance Package'],
      certification: 'EU GMP / UK MHRA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MAH & QP Services',
    description:
      'EU/UK Marketing Authorization Holder (MAH) representation, Qualified Person (QP) for batch release, and pharmacovigilance compliance services.',
    serviceType: 'EU QP & MAH Representation',
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
      name: 'MAH & QP Representation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EU/UK MAH representation',
            description:
              'Legal representation and regulatory interface as Marketing Authorization Holder in the EU/UK for compliant product release and oversight.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'QP for batch release',
            description:
              'Qualified Person (QP) services for GMP-compliant batch certification and product release in the EU market.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PV obligation management',
            description:
              'Oversight of EU pharmacovigilance (PV) responsibilities including QPPV coordination, PSMF maintenance, and safety reporting.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local EU representative',
            description:
              'Provision of local EU representative services for compliance with EU/EEA regulatory and post-marketing obligations.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Engagement-based pricing',
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
        name: 'What is the role of a Marketing Authorization Holder (MAH)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A MAH is legally responsible for the product in the EU/UK market, including regulatory compliance, pharmacovigilance, and quality oversight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a QP do for batch release?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Qualified Person (QP) certifies that each batch has been manufactured and tested in accordance with GMP and marketing authorization conditions before release.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a local representative in the EU?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if you are a non-EU company, a local representative is required to interface with EU regulatory authorities and fulfill post-marketing obligations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you manage EU pharmacovigilance responsibilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We offer QPPV services, PSMF management, and continuous PV oversight to ensure compliance with EMA and national authority requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are QP and MAH services priced?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing depends on engagement type—per batch, annual MAH retainer, or full-service PV and compliance support. Contact us for tailored quotes.',
        },
      },
    ],
  },
  meta: {
    title: 'MAH & QP Services | EU/UK Pharma Representation | Indivirtus',
    description:
      'EU/UK Marketing Authorization Holder (MAH) services, Qualified Person (QP) support, pharmacovigilance management, and local EU representative solutions for regulatory compliance.',
    keywords: [
      'MAH services',
      'Qualified Person QP',
      'EU batch release',
      'pharmacovigilance compliance',
      'local EU representative',
      'QP certification',
      'QPPV service',
      'EU/UK pharma regulations',
      'MAH QP regulatory services',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'MAH & QP Services | EU Regulatory Partner',
      description: 'Expert MAH, QP, and pharmacovigilance services for EU/UK pharma compliance.',
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
    'QP Batch Certification Review',
    'MAH Contract Assessment',
    'PV System Audit',
    'Regulatory Readiness Check',
  ],
};
