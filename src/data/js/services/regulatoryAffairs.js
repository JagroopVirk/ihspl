import serviceImage from '@/assets/regulatoryAffairs.png';
const link = '/services/regulatory-affairs';

export default {
  service_id: 'cro-regulatory-compliance-device-registration',
  report_type: 'Regulatory Dossier & Device Submission',
  title: 'Regulatory Compliance & Medical Device Registration',
  name: 'Regulatory Dossier Preparation, Filing, and Representation Services',
  description:
    'Expert support in CTD/ACTD dossier preparation, medical device filing, CEP/DMF submissions, and regulatory representation in global markets.',
  full_description:
    'Indivirtus provides strategic and technical support to pharmaceutical and medical device companies for global regulatory submissions. Our services include preparation and submission of CTD/ACTD dossiers, DMF/CEP filings to EDQM, FDA, and Health Canada, medical device registration under MDR 2017, and handling complex responses or remediation activities. We also offer representation as Marketing Authorization Holder (MAH), Qualified Person (QP) services, and EU batch release support. These solutions ensure your products meet market-specific regulations and accelerate time-to-approval.',
  estimated_duration: '4–12 weeks depending on region, product class, and documentation readiness',
  deliverables: [
    'CTD/ACTD formatted dossiers (Module 1–5)',
    'Medical device applications (Class A–D)',
    'CEP/DMF filing packages',
    'Clinical/non-clinical overviews & bioequivalence waiver justifications',
    'Regulatory response packages and remediation summaries',
    'MAH/QP declarations, EU batch release certification',
  ],
  regulatory_basis: [
    'ICH M4, ICH M5',
    'EU MDR 2017/745',
    'CDSCO MDR Rules 2017',
    'EDQM, US FDA, Health Canada DMF/CEP regulations',
    'EMA and EU Qualified Person (QP) Guidance',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Medical Devices'],
  expertise_area: ['Regulatory Affairs', 'Device Registration', 'Dossier Management'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'Regulatory Compliance and Device Registration Services',
    caption: 'Regulatory filing, QP services, and medical device registration support from Indivirtus',
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'Regulatory_Device_Submission_Click',
    eventLabel: 'Regulatory Compliance Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['CTD/ACTD Dossiers', 'Device Registration', 'DMF/CEP Filing'],
      certification: 'Regulatory Compliance',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Regulatory Dossier Preparation & Device Registration',
    description:
      'CRO-backed support for global regulatory compliance, CTD/ACTD dossier preparation, DMF/CEP filings, and medical device submissions under MDR rules.',
    serviceType: 'Regulatory & Compliance Consulting',
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
      name: 'Regulatory Submission & Device Filing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CTD/ACTD Dossier Preparation & Submission',
            description:
              'Authoring and compilation of Common/ASEAN Technical Dossiers (Modules 1–5) for global submissions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical Device Filing to CDSCO',
            description:
              'Preparation and submission of Class A–D medical device applications in compliance with India’s MDR 2017.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CEP/DMF Filing to EDQM/FDA/Health Canada',
            description:
              'Regulatory documentation for APIs and excipients submitted for CEP certification or as DMFs to global agencies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clinical/Non-Clinical Overview & Bio Waiver',
            description:
              'Scientific justifications and summaries supporting bioequivalence waiver requests and regulatory filings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Response & Remediation',
            description:
              'Preparation of written responses to regulatory queries, deficiency letters, and remediation action plans.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MAH Representation, QP & EU Batch Release',
            description:
              'Qualified Person (QP) declarations, MAH representation, and batch release testing site documentation for EU submissions.',
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
        name: 'What is the difference between CTD and ACTD formats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CTD (Common Technical Document) is used in most ICH regions, while ACTD (ASEAN CTD) is used in Southeast Asia. Both formats structure regulatory dossiers into modules but differ in layout and regional requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you help with CDSCO device registration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We prepare and submit device files as per MDR-17 rules, including risk classification, labeling compliance, and technical documentation for Class A to D medical devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a CEP and how is it different from a DMF?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A CEP (Certificate of Suitability) certifies that an API complies with Ph. Eur. monographs. A DMF (Drug Master File) is a more detailed submission used by FDA and Health Canada. We support both formats.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are needed for bio waiver requests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bio waiver packages include dissolution profiles, BCS classification, and clinical justification to waive in vivo bioequivalence studies—especially for BCS Class I & III drugs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle regulatory queries and responses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we prepare regulatory response packages including scientific justifications, updated documents, and remediation actions in line with agency expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Indivirtus act as a Qualified Person (QP) in the EU?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide QP declaration services, support MAH representation, and arrange for EU-based testing sites for batch release purposes.',
        },
      },
    ],
  },
  meta: {
    title: 'Regulatory Compliance & Medical Device Registration Services | Indivirtus',
    description:
      'CTD/ACTD Dossier Preparation, Medical Device Registration under CDSCO MDR 2017, CEP/DMF Filing, and EU Regulatory Representation by Indivirtus CRO team.',
    keywords: [
      'CTD preparation',
      'ACTD dossier',
      'CDSCO device registration',
      'CEP submission',
      'DMF filing',
      'bio waiver',
      'regulatory remediation',
      'QP batch release',
      'MAH representation',
      'MDR 2017 compliance',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Regulatory Filing & Device Registration | Indivirtus',
      description:
        'Expert CTD/ACTD filing, CEP/DMF submission, and medical device registration under global regulatory frameworks.',
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
    'Dossier Compilation',
    'Medical Device Filing',
    'CEP/DMF Submissions',
    'Regulatory Remediation',
    'EU QP Representation',
  ],
};
