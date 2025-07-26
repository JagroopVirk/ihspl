const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/group-of-companies';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Group of Companies | Indivirtus Healthcare',
    description:
      'Explore the Indivirtus Group of Companies, offering pharmaceutical CRO services, calibration, pharmacovigilance, medical scribing, and strategic solutions globally.',
    keywords: [
      'Indivirtus group of companies',
      'pharmaceutical CRO',
      'pharmacovigilance',
      'medical scribing',
      'calibration services',
      'strategic solutions',
      'clinical trials',
      'BPO services',
    ],
    twitterHandle: '@indivirtus',
    url: siteUrl,
    logo: siteLogo,
    type: 'website',
    canonicalUrl: `${siteUrl}${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    ogTags: {
      type: 'website',
      url: siteUrl,
      site_name: 'Indivirtus Healthcare Services Pvt Ltd',
      image: siteLogo,
      title: 'Group of Companies | Indivirtus Healthcare',
      description:
        'Indivirtus Group of Companies provides comprehensive services including pharmaceutical CRO, pharmacovigilance, medical scribing, calibration, and strategic solutions.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Group of Companies | Indivirtus Healthcare',
      description:
        'Discover the diverse services of the Indivirtus Group, from pharmaceutical CRO and calibration to medical scribing and global strategic solutions.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Group of Companies Page',
    eventAction: 'View',
    eventLabel: 'Group of Companies Overview',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['CRO Services', 'Pharmacovigilance', 'Medical Scribing', 'Strategic Solutions'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Group of Companies',
    description:
      'The Indivirtus Group of Companies offers a wide range of services including pharmaceutical CRO, pharmacovigilance, medical scribing, calibration, and strategic solutions for global markets.',
    serviceType: 'Pharmaceutical and Business Process Outsourcing Services',
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
      serviceUrl: `${siteUrl}${link}`,
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
      name: 'Indivirtus Group Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Pharmaceutical CRO Services',
          description:
            'Comprehensive CRO services including bioavailability/bioequivalence studies, clinical trials, bio-analytical services, and medical writing.',
        },
        {
          '@type': 'Offer',
          name: 'Pharmacovigilance and Toxicological Services',
          description:
            'Expert pharmacovigilance and toxicological services to ensure drug safety and compliance with global standards.',
        },
        {
          '@type': 'Offer',
          name: 'Medical Scribing and RCM',
          description:
            'Medical scribing, revenue cycle management, and transcription services to support healthcare providers.',
        },
        {
          '@type': 'Offer',
          name: 'Strategic Solutions',
          description:
            'Export/import of finished formulations and assistance in finding suitable Marketing Authorization Holders (MAH) globally.',
        },
        {
          '@type': 'Offer',
          name: 'Business Process Outsourcing',
          description: 'Insurance, accounting, and data management services through our international BPO offerings.',
        },
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does the Indivirtus Group of Companies offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Indivirtus Group offers pharmaceutical CRO services, pharmacovigilance, medical scribing, revenue cycle management, calibration, strategic solutions, and international BPO services.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Indivirtus’s pharmaceutical CRO services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our CRO services include bioavailability and bioequivalence (BA/BE) studies, clinical trials, bio-analytical services, and medical writing for global compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Indivirtus provide medical scribing services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, through Indivirtus AB7, we offer medical scribing, revenue cycle management, and medical transcription services to support healthcare providers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Indivirtus Strategic Solutions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus Strategic Solutions include export/import of finished formulations and assistance in finding suitable Marketing Authorization Holders (MAH) across regions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for more information about the group’s services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us via our website at https://indivirtus.com/group-of-companies, by phone at +91-9131925456, or at our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
    ],
  },
};
