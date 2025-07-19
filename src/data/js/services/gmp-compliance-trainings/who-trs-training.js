import serviceImage from '@/assets/gmp-compliance-trainings/who-trs-training.jpg';
const link = '/services/gmp-compliance-trainings/who-trs-training';

export default {
  slug: 'who-trs-training',
  parentSlug: 'gmp-compliance-trainings',
  service_id: 'TRS-GMP-004',
  report_type: 'Training Modules',
  title: 'WHO TRS Training for GMP Compliance',
  name: 'WHO Technical Report Series (TRS) Training',
  description:
    'Comprehensive GMP training based on WHO Technical Report Series (Annex 1–9), including sterile and API GMP, vaccine standards, and global regulatory comparisons.',
  full_description:
    'Our WHO TRS Training is tailored for pharmaceutical professionals seeking deep insights into GMP expectations outlined in WHO Technical Report Series Annexes 1 to 9. This program helps teams understand global best practices, sterile and API manufacturing guidelines, vaccine and biologic compliance requirements, and critical comparisons with FDA and EMA regulations. Delivered by experienced auditors and regulators, the training ensures operational alignment with international quality standards and regulatory preparedness.',
  estimated_duration: '2-3 Days (customizable)',
  deliverables: [
    'Training certificate',
    'Module-wise PPTs',
    'Case studies and Q&A material',
    'Regulatory crosswalk guides',
  ],
  regulatory_basis: ['WHO TRS Annex 1-9', 'WHO GMP Guidelines', 'FDA CFR 21', 'EU GMP Volume 4'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biologics', 'Vaccines', 'APIs', 'Sterile Manufacturing'],
  expertise_area: ['GMP Compliance', 'Global Regulatory Standards', 'Training & Development'],
  is_active: true,
  pageLink: link,
  icon: '📘',
  image: {
    path: serviceImage,
    alt: 'WHO TRS Training by Indivirtus for GMP compliance',
    caption: 'WHO Technical Report Series (TRS) training for pharmaceutical GMP compliance',
  },
  gtm: {
    eventCategory: 'Training',
    eventAction: 'WHO TRS Training View',
    eventLabel: 'WHO TRS Training Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Training Modules'],
      certification: 'Yes',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'WHO Technical Report Series (TRS) Training',
    description:
      'Expert training on WHO GMP guidelines including Annex 1–9, sterile API practices, and global regulatory insights for the pharmaceutical industry.',
    serviceType: 'Pharmaceutical GMP Training',
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
      name: 'WHO TRS Training Modules',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Annex 1–9 Guidelines Overview',
          description:
            'In-depth training on WHO TRS Annex 1 to 9 covering GMP principles, responsibilities, and expectations.',
        },
        {
          '@type': 'Offer',
          name: 'Sterile & API GMP Training',
          description:
            'Focused guidance on GMP for sterile manufacturing and active pharmaceutical ingredients as per WHO and global standards.',
        },
        {
          '@type': 'Offer',
          name: 'Vaccine & Biologics Standards',
          description: 'Training on WHO and international GMP standards for vaccines and biologics production.',
        },
        {
          '@type': 'Offer',
          name: 'FDA/EMA Regulatory Comparison',
          description:
            'Comparative session highlighting key differences and similarities in GMP expectations by FDA, EMA, and WHO.',
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
        name: 'What is covered under WHO TRS Annex 1–9 training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The training includes GMP expectations from WHO TRS Annexes 1–9, covering quality management, premises, production, documentation, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this training help with FDA/EMA compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comparative analysis between WHO TRS, FDA, and EMA requirements, helping your team align practices globally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this training relevant for sterile manufacturers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the training includes specific modules on sterile manufacturing, including cleanroom design, aseptic process validation, and Annex 1 compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should attend this WHO TRS training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'QA/QC professionals, production heads, regulatory affairs managers, and anyone involved in GMP implementation should attend.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do participants receive certificates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all participants receive a training certificate upon successful completion of the modules.',
        },
      },
    ],
  },
  meta: {
    title: 'WHO TRS Training for GMP Compliance | Indivirtus',
    description:
      'Master WHO GMP standards with our TRS Annex 1–9 training. Includes sterile/API GMP, vaccine & biologics guidance, and FDA/EMA comparisons.',
    keywords: [
      'WHO TRS training',
      'Annex 1–9 GMP training',
      'Sterile GMP training',
      'API manufacturing compliance',
      'vaccine GMP standards',
      'FDA EMA WHO GMP comparison',
      'GMP training for pharma',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'WHO TRS Training for GMP Compliance | Indivirtus',
      description:
        'Learn WHO TRS GMP Annex 1–9, sterile and API GMP, vaccine standards, and FDA/EMA regulatory comparisons.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['GMP Knowledge Assessment', 'Post-training quiz'],
};
