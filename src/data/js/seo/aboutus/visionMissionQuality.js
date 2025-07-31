const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/about-us/vision-mission-qualityPolicy';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Vision, Mission & Quality Policy | Indivirtus Healthcare',
    description:
      'Discover Indivirtus Healthcare’s vision to be a global leader in pharmaceutical consulting, our mission to deliver quality solutions, and our commitment to integrity and customer satisfaction.',
    keywords: [
      'Indivirtus vision',
      'Indivirtus mission',
      'pharmaceutical consulting',
      'quality policy',
      'regulatory compliance',
      'customer satisfaction',
      'pharmaceutical innovation',
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
      title: 'Vision, Mission & Quality Policy | Indivirtus Healthcare',
      description:
        'Learn about Indivirtus Healthcare’s vision to be among the top global consultants, our mission to deliver innovative solutions, and our quality policy focused on integrity and excellence.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Vision, Mission & Quality Policy | Indivirtus Healthcare',
      description:
        'Indivirtus Healthcare is dedicated to global leadership in pharmaceutical consulting with a focus on quality, integrity, and customer satisfaction.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Vision Mission Quality Page',
    eventAction: 'View',
    eventLabel: 'Vision Mission Quality Policy',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Vision Statement', 'Mission Statement', 'Quality Policy'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Vision, Mission & Quality Policy',
    description:
      'Indivirtus Healthcare’s vision is to be a top global pharmaceutical consultant, with a mission to deliver innovative, high-quality solutions and a quality policy emphasizing integrity and customer satisfaction.',
    serviceType: 'Pharmaceutical Consulting and Compliance',
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
      name: 'Vision, Mission & Quality Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Global Pharmaceutical Consulting',
          description:
            'Delivering innovative and high-quality consulting services to achieve global leadership in the pharmaceutical industry.',
        },
        {
          '@type': 'Offer',
          name: 'Customer-Centric Solutions',
          description:
            'Providing tailored solutions with a focus on quality outcomes, financial prudence, and customer satisfaction.',
        },
        {
          '@type': 'Offer',
          name: 'Integrity and Excellence',
          description:
            'Operating with integrity and a commitment to world-class quality through constant innovation and an effective quality management system.',
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
        name: 'What is Indivirtus Healthcare’s vision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus Healthcare’s vision is to be among the top ten globally competent pharmaceutical consultants, providing timely and accurate solutions with the highest integrity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the mission of Indivirtus Healthcare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mission is to facilitate customers with quality outcomes and financial prudence by leveraging a team of highly competent professionals and state-of-the-art technology.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Indivirtus Healthcare’s quality policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus is committed to integrity, world-class quality, and excellent customer service, achieved through constant innovation, up-gradation, and an effective quality management system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure customer satisfaction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We ensure customer satisfaction by delivering precise, high-quality solutions, fostering innovation, and maintaining a customer-centric approach supported by our quality management system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I learn more about Indivirtus Healthcare’s services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit our website at https://indivirtus.com, contact us at +91-9131925456, or reach out via our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
    ],
  },
};
