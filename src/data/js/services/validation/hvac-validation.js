import serviceImage from '@/assets/validation/hvac-validation.jpg';
const link = '/services/validation/hvac-validation';

export default {
  slug: 'hvac-validation',
  parentSlug: 'validation',
  service_id: 'VAL-HVAC-001',
  report_type: 'Validation Report',
  title: 'HVAC Validation for Pharmaceutical Cleanrooms',
  name: 'HVAC Validation',
  description:
    'Ensure compliance, sterility, and environmental control with expert HVAC validation for cleanroom systems.',
  full_description:
    'HVAC Validation is a cornerstone of cleanroom compliance and pharmaceutical facility qualification. At Indivirtus, we conduct comprehensive HVAC validation activities including DOP/PAO filter integrity testing, airflow velocity and differential pressure analysis, non-viable particulate testing as per ISO 14644, and cleanroom classification studies. These services ensure environmental control in production and packaging zones for sterile and non-sterile products. Our approach aligns with global cGMP and regulatory standards to ensure your HVAC systems perform reliably, consistently, and compliantly.',
  estimated_duration: '5–10 business days',
  deliverables: [
    'HEPA filter integrity test reports (DOP/PAO)',
    'Airflow pattern visualization reports',
    'ISO 14644 cleanroom classification certificates',
    'Temperature, humidity, and particle count logs',
  ],
  regulatory_basis: ['ISO 14644-1:2015', 'EU GMP Annex 1', 'US FDA cGMP', 'ISPE Guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'Sterile Manufacturing'],
  expertise_area: ['HVAC Qualification', 'Cleanroom Validation', 'Environmental Monitoring'],
  is_active: true,
  pageLink: link,
  icon: '🌬️',
  image: {
    path: serviceImage,
    alt: 'Cleanroom HVAC Validation',
    caption: 'HEPA filter testing, particle count & airflow validation services',
  },
  gtm: {
    eventCategory: 'Validation Services',
    eventAction: 'HVAC Validation',
    eventLabel: 'Cleanroom HVAC Validation Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Validation Report'],
      certification: 'ISO 14644, cGMP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HVAC Validation',
    description: 'HVAC validation services for cleanroom compliance as per ISO 14644, GMP, and regulatory standards.',
    serviceType: 'Cleanroom HVAC Validation',
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
      name: 'HVAC Validation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DOP/PAO Filter Integrity Testing',
            description: 'Integrity testing of HEPA filters using DOP/PAO challenge method for leak detection.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Airflow & Differential Pressure Testing',
            description: 'Airflow volume, velocity, and pressure measurements to verify HVAC balancing and zoning.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ISO 14644 Cleanroom Classification',
            description: 'Non-viable particle count analysis to classify cleanroom zones per ISO standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Environmental Monitoring & Cleanroom Certification',
            description:
              'Full assessment of airborne particulate, temperature, and humidity to issue compliance certificates.',
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
        name: 'What is HVAC validation in pharmaceutical cleanrooms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HVAC validation ensures that heating, ventilation, and air conditioning systems perform within defined environmental parameters, maintaining cleanroom integrity and regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is DOP/PAO filter testing important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DOP/PAO filter testing verifies the integrity of HEPA filters, which are critical in trapping contaminants and ensuring sterile manufacturing conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which guidelines are followed during HVAC validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow ISO 14644, EU GMP Annex 1, US FDA cGMP, and ISPE guidelines to ensure global compliance in HVAC validation services.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should HVAC systems be revalidated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HVAC systems should be validated annually or whenever there are major changes, repairs, or deviations affecting cleanroom performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you assist with HVAC qualification for new facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indivirtus provides end-to-end HVAC qualification support during facility commissioning, including testing, documentation, and regulatory alignment.',
        },
      },
    ],
  },
  meta: {
    title: 'HVAC Validation Services | Cleanroom Compliance – Indivirtus',
    description:
      'ISO 14644-compliant HVAC validation for cleanrooms, including DOP/PAO filter testing, airflow analysis, particle count, and environmental monitoring.',
    keywords: [
      'HVAC validation',
      'cleanroom testing',
      'ISO 14644 validation',
      'DOP filter testing',
      'cleanroom certification',
      'pharmaceutical HVAC qualification',
      'GMP cleanroom validation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'HVAC Validation Services | Cleanroom Compliance – Indivirtus',
      description:
        'Expert HVAC validation and cleanroom compliance services including ISO 14644 testing, DOP/PAO filter integrity checks, and airflow analysis.',
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
    'HEPA Filter Testing',
    'Cleanroom Classification',
    'Environmental Monitoring',
    'Airflow & Pressure Validation',
  ],
};
