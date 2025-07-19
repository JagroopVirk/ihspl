import serviceImage from '@/assets/gmp-compliance-trainings/cleaning-validation-training.jpg';
const link = '/services/gmp-compliance-trainings/cleaning-validation-training';

export default {
  slug: 'cleaning-validation-training',
  parentSlug: 'gmp-compliance-trainings',
  service_id: 'CLN-TNG-007',
  report_type: 'Training Session',
  title: 'Cleaning Validation Training',
  name: 'Cleaning Validation Training for GMP Facilities',
  description:
    'Comprehensive training on cleaning validation including MACO, PDE limits, sampling methods, and protocol development tailored for regulated pharma environments.',
  full_description:
    'This training is designed to equip pharmaceutical professionals with a detailed understanding of cleaning validation principles aligned with GMP and regulatory expectations. Topics include worst-case product selection, MACO and PDE limit calculation, swab and rinse sampling methodologies, and protocol/report development. Ideal for manufacturing, QA, and validation teams.',
  estimated_duration: '1–2 Days',
  deliverables: [
    'Training material (PDF/PPT)',
    'Certificate of participation',
    'Template SOPs and protocols',
    'Case studies and hands-on examples',
  ],
  regulatory_basis: ['ICH Q7', 'PIC/S PI 006', 'WHO TRS 1019', 'FDA Cleaning Validation Guidelines'],
  requires_data_from_client: false,
  target_industry: ['Pharmaceuticals', 'Biologics', 'APIs', 'CDMOs'],
  expertise_area: ['Cleaning Validation', 'GMP Compliance', 'QA/QC Training'],
  is_active: true,
  pageLink: link,
  icon: '🧼',
  image: {
    path: serviceImage,
    alt: 'Cleaning Validation Training for pharma manufacturing',
    caption: 'Hands-on GMP Cleaning Validation Training by Indivirtus',
  },
  gtm: {
    eventCategory: 'Training',
    eventAction: 'View Cleaning Validation Training',
    eventLabel: 'Cleaning Validation Training | Indivirtus',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Training Session'],
      certification: 'Certificate of Participation',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cleaning Validation Training',
    description:
      'GMP-compliant training on cleaning validation including worst-case product selection, MACO/PDE limits, swab and rinse sampling, and protocol/report development.',
    serviceType: 'Pharmaceutical Compliance Training',
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
      name: 'Cleaning Validation Training Modules',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Worst-case Product Selection Workshop',
            description: 'Techniques for identifying worst-case products for validation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MACO & PDE Residue Limit Training',
            description: 'Calculation and justification of cleaning limits using MACO and PDE.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Swab and Rinse Sampling Techniques',
            description: 'GMP-compliant methods for residue recovery and validation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cleaning Validation Protocol Development',
            description: 'Training on drafting and executing validation protocols and reports.',
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
        name: 'What is covered in Cleaning Validation Training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The training includes worst-case product selection, MACO/PDE limit setting, swab/rinse sampling techniques, and guidance on developing cleaning validation protocols.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this training aligned with regulatory expectations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the training aligns with ICH, WHO TRS, PIC/S, and FDA guidelines on cleaning validation for GMP environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do participants receive any templates or documentation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide SOP and protocol templates, example reports, and regulatory references for practical use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can this training be delivered virtually?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We offer on-site, virtual, and hybrid modes to suit your team’s needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should attend this training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'QA/QC personnel, validation engineers, manufacturing supervisors, and compliance managers are ideal participants.',
        },
      },
    ],
  },
  meta: {
    title: 'Cleaning Validation Training | GMP Training for Pharma QA & QC',
    description:
      'Learn cleaning validation with expert-led training covering MACO/PDE calculations, sampling methods, and protocol creation. On-site and virtual modes available.',
    keywords: [
      'Cleaning validation training',
      'MACO calculation',
      'PDE limit training',
      'swab sampling GMP',
      'GMP cleaning protocol',
      'cleaning validation workshop',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Cleaning Validation Training',
      description: 'Master GMP cleaning validation concepts with expert-led, interactive sessions.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [],
};
