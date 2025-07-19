import serviceImage from '@/assets/pharmacovigilance/pv-database.jpg';
const link = '/services/pharmacovigilance/pv-database';

export default {
  slug: 'pv-database',
  parentSlug: 'pharmacovigilance',
  service_id: 'PVDB-004',
  report_type: 'PV Database & Infrastructure',
  title: 'Pharmacovigilance Database Setup',
  name: 'PV Database Setup',
  description:
    'End-to-end setup of compliant PV databases including Argus, Veeva Vault, coding integration, and regulatory data exchange.',
  full_description:
    'Indivirtus offers end-to-end setup of pharmacovigilance databases tailored for Marketing Authorization Holders (MAHs) and clinical sponsors. We implement industry-standard systems like Argus Safety and Veeva Vault Safety, support coding dictionary integration using MedDRA and WHO-DD, enable E2B R3 gateway configurations for regulatory exchange, and ensure full 21 CFR Part 11 compliance. Our experts also support validation and migration activities, ensuring seamless PV operations from day one.',
  estimated_duration: '4–8 weeks depending on system complexity and scope',
  deliverables: [
    'Configured Argus or Veeva Vault environment',
    'MedDRA/WHO-DD coding dictionary integration',
    'E2B R3 gateway setup and testing',
    'Part 11 compliance validation documentation',
  ],
  regulatory_basis: ['ICH E2B(R3)', '21 CFR Part 11', 'EMA & FDA PV Requirements'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'MAHs', 'CROs'],
  expertise_area: ['Pharmacovigilance', 'PV IT Systems', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '💾',
  image: {
    path: serviceImage,
    alt: 'Pharmacovigilance database system setup',
    caption: 'Fully validated PV databases with regulatory-ready configurations.',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'PV Database Setup Inquiry',
    eventLabel: 'Argus / Veeva / Coding / E2B',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['PV Database Implementation'],
      certification: '21 CFR Part 11 / E2B Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'PV Database Setup',
    description:
      'Setup and configuration of validated pharmacovigilance databases including coding integration and compliance support.',
    serviceType: 'Pharmacovigilance Database Implementation',
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
      name: 'Pharmacovigilance Database Setup Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Argus & Veeva Vault Implementation',
            description:
              'Implementation and configuration of Argus Safety and Veeva Vault Safety platforms for compliant PV data management.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MedDRA/WHO-DD Coding Integration',
            description:
              'Integration of global standard dictionaries for automated coding of adverse events and drug terms.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E2B R3 Data Exchange',
            description:
              'Setup of E2B R3 gateways and secure exchange protocols for submissions to FDA, EMA, and global agencies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '21 CFR Part 11 Compliance',
            description:
              'Validation and documentation to ensure system compliance with electronic records and signature requirements.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'System-based pricing',
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
        name: 'Which PV systems do you support for implementation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support Oracle Argus Safety and Veeva Vault Safety for full pharmacovigilance system setup, validation, and configuration.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is E2B R3 and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'E2B R3 is the latest ICH standard for structured electronic transmission of Individual Case Safety Reports (ICSRs) to global regulatory authorities like FDA and EMA. We configure your system to comply with these requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide coding dictionary integration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we integrate MedDRA and WHO Drug Dictionary (WHO-DD) into your PV system for automated, standardized coding of adverse events and medicinal products.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure 21 CFR Part 11 compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We conduct full validation, access control setup, audit trail enablement, and provide documentation to ensure compliance with 21 CFR Part 11 electronic records and signatures.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help migrate data from a legacy PV system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer migration planning and execution support to move safety data from legacy platforms into Argus or Veeva environments, ensuring continuity and compliance.',
        },
      },
    ],
  },
  meta: {
    title: 'PV Database Setup | Argus, Veeva, MedDRA, E2B R3 | Indivirtus',
    description:
      'Indivirtus sets up validated PV databases including Argus and Veeva Vault, with E2B R3 integration, MedDRA coding, and 21 CFR Part 11 compliance for global pharmacovigilance.',
    keywords: [
      'PV database setup',
      'Argus implementation',
      'Veeva Vault Safety',
      'E2B R3',
      '21 CFR Part 11',
      'MedDRA coding',
      'WHO-DD',
      'pharmacovigilance systems',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'PV Database Setup | Indivirtus',
      description: 'Validated PV database setup with Argus, Veeva, E2B, and Part 11 compliance.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['PV IT Readiness Audit', 'Database Validation & Configuration'],
};
