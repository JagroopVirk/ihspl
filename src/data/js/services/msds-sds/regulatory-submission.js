import serviceImage from '@/assets/msds-sds/regulatory-submission.jpg';
const link = '/services/msds-sds/regulatory-submission';

export default {
  slug: 'regulatory-submission',
  parentSlug: 'msds-sds',
  service_id: 'regulatory_submission_001',
  report_type: 'Regulatory Dossier / Submission',
  title: 'Regulatory Submission Services',
  name: 'Regulatory Submission',
  description:
    'Expert regulatory submission support for EU Poison Centers, Indian BIS/CIB, ECHA REACH, and integration with DMF or CTD modules.',
  full_description:
    'Our Regulatory Submission service ensures seamless and compliant documentation support across multiple regulatory bodies. Whether it’s notifying substances to EU Poison Centers under CLP Annex VIII, filing product dossiers with Indian authorities like BIS or CIB&RC, or preparing REACH dossiers for ECHA, we help pharmaceutical manufacturers and suppliers meet complex submission requirements. Our team also integrates relevant data into global regulatory formats like DMF (Drug Master File) and CTD (Common Technical Document) to support product approvals and market entry.',
  estimated_duration: '5–15 working days (varies by submission type)',
  deliverables: [
    'EU CLP Annex VIII submission for Poison Centers',
    'Indian BIS or CIB&RC submission documentation',
    'REACH IUCLID dossier creation and registration support',
    'DMF/CTD integration of safety, efficacy, and quality data',
    'Regulatory gap analysis and pre-submission review',
  ],
  regulatory_basis: [
    'CLP Regulation (EC) No 1272/2008 – Annex VIII',
    'REACH Regulation (EC) No 1907/2006',
    'Indian Bureau of Indian Standards (BIS)',
    'Central Insecticides Board (CIB&RC)',
    'ICH M4 CTD guidelines',
    'US FDA DMF format',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'APIs & Excipients', 'Cosmeceuticals'],
  expertise_area: ['Regulatory Affairs', 'Toxicology', 'Safety Documentation'],
  is_active: true,
  pageLink: link,
  icon: '📤',
  image: {
    path: serviceImage,
    alt: 'Submission portal and regulatory document preparation',
    caption: 'Comprehensive support for global regulatory filings and technical dossier integration.',
  },
  gtm: {
    eventCategory: 'Regulatory Submission',
    eventAction: 'Submit Request',
    eventLabel: 'Regulatory Submission Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Regulatory Dossier'],
      certification: 'REACH, BIS, CLP, CIB&RC',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Regulatory Submission',
    description:
      'Pharmaceutical regulatory submission services for EU, India, ECHA REACH, DMF, and CTD with technical dossier integration.',
    serviceType: 'Regulatory Submission Service',
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
      name: 'Regulatory Submission Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'EU Poison Center Notifications (Annex VIII)',
          description:
            'Preparation and submission of UFI-compliant notifications to ECHA for EU-wide hazard communication.',
        },
        {
          '@type': 'Offer',
          name: 'Indian BIS & CIB Regulatory Filings',
          description: 'Support for BIS standard certification and CIB&RC agrochemical registrations in India.',
        },
        {
          '@type': 'Offer',
          name: 'ECHA REACH Registration',
          description: 'Complete IUCLID dossier creation, data gap filling, and REACH joint submission support.',
        },
        {
          '@type': 'Offer',
          name: 'DMF/CTD Module Integration',
          description:
            'Technical writing and integration of safety, efficacy, and quality modules into global DMF/CTD formats.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Submission-based pricing',
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
        name: 'What is Annex VIII and how does it relate to EU Poison Center submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Annex VIII to the CLP Regulation mandates the submission of product information to EU Poison Centers, including the UFI code, for accurate hazard communication in emergency situations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with BIS or CIB&RC filings in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We assist with compiling and submitting dossiers for product certification under BIS and pesticide registrations with CIB&RC as per Indian regulations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in REACH registration support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our REACH services include IUCLID dossier creation, data gathering, SIEF coordination, classification, and submission to ECHA.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you support DMF or CTD integration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We format and integrate toxicological and safety data into Module 2 (Quality Overall Summary) and Module 3 (Quality) for CTD, or into DMF sections for FDA or EU filings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is needed from the client to start the submission process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We require substance identifiers (CAS, EC numbers), use pattern, formulation details, available safety data, and any prior regulatory communications or dossiers.',
        },
      },
    ],
  },
  meta: {
    title: 'Regulatory Submission Services | EU, REACH, BIS, DMF Filing | Indivirtus',
    description:
      'Get expert support for regulatory submissions to EU Poison Centers, Indian BIS/CIB, ECHA REACH, and global CTD/DMF integration. Accurate, timely, and compliant.',
    keywords: [
      'regulatory submission service',
      'EU Poison Center Annex VIII',
      'ECHA REACH support',
      'BIS certification India',
      'CIB&RC pesticide registration',
      'DMF preparation',
      'CTD module integration',
      'pharmaceutical regulatory filing',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Regulatory Submission Services | Indivirtus',
      description: 'Complete regulatory dossier preparation and submission service for EU, India, and global filings.',
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
    'EU Poison Center Notification',
    'REACH Registration',
    'Indian BIS/CIB&RC Filing',
    'CTD/DMF Integration',
  ],
};
