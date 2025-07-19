import serviceImage from '@/assets/msds-sds/region-specific-sds.jpg';
const link = '/services/msds-sds/region-specific-sds';

export default {
  slug: 'region-specific-sds',
  parentSlug: 'msds-sds',
  service_id: 'region_specific_sds_001',
  report_type: 'Localized SDS/MSDS Document',
  title: 'Region-Specific SDS Customization',
  name: 'Region-Specific SDS Customization',
  description:
    'Customization of Safety Data Sheets (SDS) for regulatory and language requirements of specific regions including EU, US, Canada, India, and more.',
  full_description:
    'Our Region-Specific SDS Customization service ensures your SDS/MSDS complies with regulatory, linguistic, and formatting requirements of target markets. From EU REACH Annex II adaptations to OSHA HCS and WHMIS compliance in North America, and IS 17803:2022 standards in India, we tailor every SDS to meet local guidelines. We also provide accurate multilingual translations that meet official terminology standards, supporting global distribution and regulatory acceptance of your pharmaceutical products.',
  estimated_duration: '4–7 working days',
  deliverables: [
    'Country-specific SDS formatting and section adaptation',
    'Compliance with EU Annex II, OSHA HCS, WHMIS, IS 17803:2022',
    'Professional translations for multilingual SDS (EU, APAC, GCC)',
    'Hazard labeling aligned with local rules',
    'Bilingual versions for dual-market submissions (e.g., English + French)',
  ],
  regulatory_basis: [
    'EU REACH Regulation – Annex II',
    'OSHA Hazard Communication Standard (29 CFR 1910.1200)',
    'WHMIS 2015 (Canada)',
    'Indian Standard IS 17803:2022',
    'UN GHS (Purple Book)',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Fine Chemicals', 'Agrochemicals', 'Cosmeceuticals'],
  expertise_area: ['SDS Localization', 'Multilingual Translation', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '🌍',
  image: {
    path: serviceImage,
    alt: 'Customized region-specific SDS in multiple languages and formats',
    caption: 'Fully compliant, multilingual SDS tailored to regulatory needs of each country.',
  },
  gtm: {
    eventCategory: 'Region-Specific SDS',
    eventAction: 'Submit Request',
    eventLabel: 'Region-Specific SDS Customization Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['SDS Localization'],
      certification: 'REACH Annex II, OSHA, IS 17803:2022',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Region-Specific SDS Customization',
    description:
      'Custom-tailored SDS/MSDS services for REACH Annex II, OSHA HCS, WHMIS, IS 17803:2022 with certified translations.',
    serviceType: 'Region-Specific SDS Service',
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
      name: 'Region-Specific SDS Customization Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'EU REACH Annex II SDS Customization',
          description: 'Adaptation of SDS to align with formatting and content rules under REACH Annex II.',
        },
        {
          '@type': 'Offer',
          name: 'OSHA HCS & WHMIS Compliance',
          description: 'Formatting and labeling SDS for compliance with OSHA HazCom and WHMIS 2015 in North America.',
        },
        {
          '@type': 'Offer',
          name: 'IS 17803:2022 SDS for India',
          description: 'SDS preparation as per the Bureau of Indian Standards guidelines (IS 17803:2022).',
        },
        {
          '@type': 'Offer',
          name: 'Multilingual Translation of SDS',
          description:
            'Professional translation of SDS into multiple languages (French, German, Spanish, Mandarin, etc.) with technical accuracy.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Customization-based pricing',
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
        name: 'What is the need for region-specific SDS customization?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Different countries have specific formatting, language, and hazard communication rules. Customizing SDS ensures regulatory compliance and avoids product rejections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you provide SDSs in regional languages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer SDS translations in major regional languages including French, Spanish, Chinese, Arabic, and Indian vernaculars to meet local market requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Indian SDS formatting under IS 17803:2022 different?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IS 17803:2022 mandates country-specific elements like emergency contact details, local classification alignment, and language preferences, which we incorporate during customization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WHMIS compliance needed for Canada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. WHMIS 2015 requires SDSs to follow Canadian GHS implementation with specific content, symbols, and bilingual (English/French) presentation for hazardous substances.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data do I need to share for region-specific SDS preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need to share the base SDS, product composition, regulatory target countries, and any existing compliance data or translations you may have.',
        },
      },
    ],
  },
  meta: {
    title: 'Region-Specific SDS Customization | REACH, OSHA, IS 17803:2022 | Indivirtus',
    description:
      'Customized SDS preparation for REACH Annex II, OSHA HCS, WHMIS, and India’s IS 17803:2022 with multilingual support. Ensure full regional compliance with Indivirtus.',
    keywords: [
      'region-specific SDS',
      'REACH Annex II customization',
      'OSHA HCS compliance',
      'WHMIS SDS Canada',
      'IS 17803:2022 India SDS',
      'multilingual SDS translation',
      'localized SDS service',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Region-Specific SDS Customization | Indivirtus',
      description:
        'Tailored SDS solutions for global regulatory standards including REACH, OSHA, WHMIS, and India IS 17803:2022.',
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
    'Localized SDS Documentation',
    'Regulatory SDS Customization',
    'Multilingual Safety Sheets',
    'Country-Specific SDS Services',
  ],
};
