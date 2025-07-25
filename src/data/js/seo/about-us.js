const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/aboutus';

export default {
  pageLink: link,
  meta: {
    title: 'About Us | Indivirtus Healthcare',
    description:
      'Learn about Indivirtus Healthcare Services Pvt Ltd, a leading provider of medical coding, billing, and pharmacovigilance services, dedicated to delivering innovative healthcare solutions globally.',
    keywords: [
      'Indivirtus',
      'Healthcare Services',
      'Medical Coding',
      'Medical Billing',
      'Pharmacovigilance',
      'Healthcare Solutions',
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
      url: siteUrl + '/aboutus',
      site_name: 'Indivirtus Healthcare Services Pvt Ltd',
      image: siteLogo,
      title: 'About Us | Indivirtus Healthcare',
      description:
        'Discover Indivirtus Healthcare Services Pvt Ltd, offering expert medical coding, billing, and pharmacovigilance services to optimize healthcare operations worldwide.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'About Us | Indivirtus Healthcare',
      description:
        'Discover Indivirtus Healthcare Services Pvt Ltd, offering expert medical coding, billing, and pharmacovigilance services to optimize healthcare operations worldwide.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'About Page',
    eventAction: 'Page View',
    eventLabel: 'Indivirtus About Us',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['About Page Visit'],
      certification: 'Healthcare Services',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Healthcare Services Pvt Ltd',
    description:
      'Indivirtus Healthcare Services Pvt Ltd provides comprehensive medical coding, billing, and pharmacovigilance services, empowering healthcare providers with accurate and efficient solutions worldwide.',
    serviceType: 'Medical Coding, Billing, and Pharmacovigilance Services',
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
      serviceUrl: siteUrl + link,
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
      name: 'Healthcare Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Medical Coding and Billing',
          description:
            'Accurate and efficient medical coding and billing services to streamline healthcare operations and ensure compliance.',
        },
        {
          '@type': 'Offer',
          name: 'Pharmacovigilance Services',
          description:
            'Comprehensive pharmacovigilance solutions to monitor drug safety and ensure regulatory compliance.',
        },
        {
          '@type': 'Offer',
          name: 'Healthcare Consulting',
          description:
            'Expert consulting services to optimize healthcare processes and improve operational efficiency.',
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
        name: 'What services does Indivirtus Healthcare provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus Healthcare offers medical coding, medical billing, pharmacovigilance, and healthcare consulting services to support healthcare providers globally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Indivirtus Healthcare located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus Healthcare is headquartered at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, 160059, India, with services offered globally.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus Healthcare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Indivirtus Healthcare via phone at +91-9131925456 or visit our website at https://www.indivirtus.com for more details.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries does Indivirtus Healthcare serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus Healthcare serves healthcare providers, hospitals, clinics, and pharmaceutical companies worldwide, offering tailored solutions for their needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Indivirtus Healthcare offer consulting services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indivirtus Healthcare provides expert consulting services to optimize healthcare processes and enhance operational efficiency.',
        },
      },
    ],
  },
};
