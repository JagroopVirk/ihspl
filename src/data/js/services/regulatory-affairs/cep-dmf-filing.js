import serviceImage from '@/assets/regulatory-affairs/cep-dmf-filing.jpg';
const link = '/services/regulatory-affairs/cep-dmf-filing';

export default {
  slug: 'cep-dmf-filing',
  parentSlug: 'regulatory-affairs',
  service_id: 'reg-cep-dmf',
  report_type: 'Regulatory Filing',
  title: 'CEP & DMF Filing Services',
  name: 'CEP/DMF Filing',
  description: 'Expert support in CEP, DMF (Type I-V), and ASMF filings for global pharmaceutical compliance.',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. provides comprehensive CEP and DMF filing services tailored for pharmaceutical manufacturers seeking market access across global territories. From Type I-V DMF dossier preparation to CEP submissions to EDQM and ASMF filings for EU markets, our regulatory experts manage the entire lifecycle including updates, gap closures, and post-approval variations. Our support ensures data integrity, regulatory compliance, and smooth submissions aligned with evolving global expectations.',
  estimated_duration: '4-12 weeks depending on data readiness',
  deliverables: [
    'DMF (Type I-V) dossier',
    'CEP application with supporting modules',
    'ASMF for EU compliance',
    'Lifecycle management documentation',
  ],
  regulatory_basis: [
    'ICH M4 guidelines',
    'EU EMA ASMF guidance',
    'EDQM certification procedures',
    'US FDA DMF filing requirements',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'API Manufacturers'],
  expertise_area: ['Regulatory Affairs', 'CMC Dossier Development'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'CEP/DMF Filing Services - Indivirtus Healthcare',
    caption: 'Global regulatory documentation and CEP/DMF submissions',
  },
  gtm: {
    eventCategory: 'Regulatory Services',
    eventAction: 'CEP/DMF Filing Accessed',
    eventLabel: 'CEP DMF Submission Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['DMF', 'CEP', 'ASMF'],
      certification: 'EDQM/EMA/FDA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CEP/DMF Filing',
    description:
      'End-to-end support for Drug Master File (DMF), Certificate of Suitability (CEP), and ASMF filings with global regulatory bodies.',
    serviceType: 'Pharmaceutical Regulatory Filing',
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
      name: 'CEP & DMF Filing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'DMF Type I-V Preparation',
          description:
            'Comprehensive support in preparing Drug Master Files (DMFs) Types I to V in CTD/eCTD format as per global regulatory norms.',
        },
        {
          '@type': 'Offer',
          name: 'CEP Submission to EDQM',
          description:
            'Preparation and submission of Certificate of Suitability (CEP) dossiers to EDQM, including QOS and compliance management.',
        },
        {
          '@type': 'Offer',
          name: 'ASMF for EU Filings',
          description:
            'Development of Active Substance Master Files (ASMFs) for EU submissions ensuring full alignment with EMA requirements.',
        },
        {
          '@type': 'Offer',
          name: 'Lifecycle Management',
          description:
            'Post-submission regulatory lifecycle support including variations, updates, deficiency responses, and renewals.',
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
        name: 'What is a DMF and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Drug Master File (DMF) is a regulatory document submitted to agencies like the US FDA to provide confidential detailed information about facilities, processes, or articles used in the manufacturing, processing, packaging, and storing of drugs. It supports the approval of generic and branded drugs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a DMF and CEP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A DMF is submitted to individual regulatory authorities like the US FDA, while a CEP (Certificate of Suitability) is issued by the EDQM in Europe and certifies that the quality of a substance complies with European Pharmacopoeia standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a CEP submission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A CEP submission includes detailed quality documentation (including modules 2 and 3), manufacturing process, analytical methods, impurity profile, stability data, and GMP compliance information for assessment by the EDQM.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with ASMF preparation for Europe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, we provide complete ASMF development including Applicant's Part and Restricted Part, ensuring alignment with EMA guidance for EU filings and centralized or decentralized submissions.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer lifecycle support after submission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our team provides post-submission lifecycle support such as variation filing, renewal management, and addressing queries raised by regulatory agencies for CEP/DMF/ASMF documentation.',
        },
      },
    ],
  },
  meta: {
    title: 'CEP & DMF Filing Services | Indivirtus Healthcare',
    description:
      'Specialized regulatory support for CEP, DMF (Type I-V), and ASMF filings. Ensure compliance with EDQM, EMA, and US FDA requirements. Global regulatory lifecycle management for pharmaceutical manufacturers.',
    keywords: [
      'CEP filing',
      'DMF preparation',
      'ASMF services',
      'EDQM submissions',
      'Regulatory Affairs CRO',
      'Drug Master File',
      'Lifecycle management',
      'CEP submission Europe',
      'Pharmaceutical documentation',
      'Regulatory dossier support',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'CEP & DMF Filing Services | Indivirtus Healthcare',
      description:
        'Expert support for global CEP, DMF, and ASMF submissions. Align with EDQM, EMA, and FDA regulatory expectations with Indivirtus.',
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
