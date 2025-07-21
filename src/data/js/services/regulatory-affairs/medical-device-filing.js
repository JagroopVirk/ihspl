import serviceImage from '@/assets/regulatory-affairs/medical-device-filing.jpg';
const link = '/services/regulatory-affairs/medical-device-filing';

export default {
  slug: 'medical-device-filing',
  parentSlug: 'regulatory-affairs',
  service_id: 'MDF001',
  report_type: 'Device Registration Dossier',
  title: 'Medical Device Filing & Regulatory Support',
  name: 'Medical Device Filing',
  description:
    'Regulatory support for medical device classification, dossier preparation, clinical evaluation, and India-specific agent services.',
  full_description:
    'Indivirtus provides complete regulatory support for medical device filings across global markets including India, US, and EU. From determining the correct device classification (Class A–D) to compiling and submitting comprehensive regulatory dossiers like TDF and CSDT, we ensure your device is fully compliant and submission-ready. Our team also manages clinical evaluation reports (CER), Risk Management Files (RMF), and offers Indian Authorized Agent services for foreign manufacturers targeting CDSCO registration.',
  estimated_duration: '2-8 weeks depending on classification and region',
  deliverables: [
    'Device classification assessment report',
    'TDF/CSDT dossier preparation',
    'Clinical Evaluation Report (CER)',
    'Risk Management File (RMF)',
    'Authorized Agent representation documents',
  ],
  regulatory_basis: ['CDSCO MDR 2017', 'EU MDR 2017/745', 'US FDA 21 CFR Part 807'],
  requires_data_from_client: true,
  target_industry: ['Medical Devices', 'Diagnostics', 'Healthcare Technology'],
  expertise_area: ['Regulatory Affairs', 'Medical Devices'],
  is_active: true,
  pageLink: link,
  icon: '🩺',
  image: {
    path: serviceImage,
    alt: 'Medical Device Regulatory Filing Services',
    caption: 'Device classification, CERs, and regulatory dossier filing for global markets',
  },
  gtm: {
    eventCategory: 'Medical Device Filing',
    eventAction: 'Filing Request Submitted',
    eventLabel: 'Medical Device Regulatory Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Device Registration Dossier'],
      certification: 'CDSCO/EU MDR/FDA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Medical Device Filing',
    description:
      'Regulatory submission services for medical devices including classification, dossier preparation, clinical evaluation, and India agent representation.',
    serviceType: 'Medical Device Regulatory Support',
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
      name: 'Medical Device Filing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Class A–D classification',
            description:
              'Assessment and documentation for determining the correct classification of medical devices according to CDSCO, EU MDR, or FDA frameworks.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TDF/CSDT preparation',
            description:
              'Compilation of Technical Documentation Format (TDF) and Common Submission Dossier Template (CSDT) required for medical device approvals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clinical evaluation & RMF',
            description:
              'Preparation of Clinical Evaluation Reports (CERs) and Risk Management Files (RMFs) in line with ISO 14971 and EU MDR.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Indian Authorized Agent',
            description:
              'Representation services for foreign manufacturers seeking CDSCO registration in India, including document handling and liaison.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Device complexity-based pricing',
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
        name: 'How do I know which class my medical device belongs to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Our regulatory team assesses your device's intended use, risk level, and design specifications to determine the appropriate class under CDSCO, EU MDR, or FDA guidelines.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between TDF and CSDT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TDF (Technical Documentation Format) is used for India-specific filings (CDSCO), while CSDT is a global template especially used in ASEAN regions. Both formats include safety, performance, and risk data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is a Clinical Evaluation Report (CER) important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A CER provides evidence that your medical device is safe and performs as intended, based on clinical data. It is mandatory under EU MDR and often expected by other regulators.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a Risk Management File (RMF)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The RMF is a key part of your device dossier that outlines identified risks, control measures, and benefit-risk analyses, usually developed according to ISO 14971.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does an Indian Authorized Agent do for foreign manufacturers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The agent acts as your local representative in India for communication with CDSCO, submission of documents, and handling of regulatory obligations on your behalf.',
        },
      },
    ],
  },
  meta: {
    title: 'Medical Device Filing Services | CDSCO, EU MDR, FDA Support | Indivirtus',
    description:
      'Get expert assistance for medical device classification, regulatory dossier preparation, clinical evaluation reports (CER), and Indian Authorized Agent services. Global compliance, local support.',
    keywords: [
      'medical device filing',
      'CDSCO registration',
      'TDF preparation',
      'CSDT documentation',
      'clinical evaluation report',
      'risk management file',
      'Indian authorized agent',
      'EU MDR compliance',
      'medical device CRO',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Medical Device Regulatory Filing | Indivirtus',
      description:
        'Complete support for medical device classification, CERs, RMFs, and regulatory submission globally.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Device Classification Report', 'TDF/CSDT Gap Analysis', 'CER Review', 'RMF Evaluation'],
};
