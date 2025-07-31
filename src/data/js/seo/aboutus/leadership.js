const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/about-us/leadership';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Leadership Team | Indivirtus Healthcare',
    description:
      'Meet the leadership team at Indivirtus Healthcare, driving innovation and excellence in healthcare services with expertise and dedication.',
    keywords: [
      'Indivirtus leadership',
      'healthcare leadership team',
      'Indivirtus Healthcare executives',
      'medical coding leadership',
      'healthcare management team',
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
      url: `${siteUrl}${link}`,
      site_name: 'Indivirtus Healthcare Services Pvt Ltd',
      image: siteLogo,
      title: 'Leadership Team | Indivirtus Healthcare',
      description:
        'Discover the visionary leaders at Indivirtus Healthcare, guiding our mission to deliver exceptional healthcare solutions globally.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Leadership Team | Indivirtus Healthcare',
      description:
        'Discover the visionary leaders at Indivirtus Healthcare, guiding our mission to deliver exceptional healthcare solutions globally.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Leadership Page',
    eventAction: 'Page View',
    eventLabel: 'Leadership Team Page',
    customDimensions: {
      pageType: 'Leadership',
      section: 'About Us',
    },
    dataLayerPush: {
      reportType: ['Leadership Profile View'],
      certification: 'None',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Healthcare Leadership',
    description:
      'The leadership team at Indivirtus Healthcare Services, dedicated to advancing healthcare through expertise and innovation.',
    serviceType: 'Healthcare Leadership and Management',
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
      name: 'Healthcare Leadership Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Strategic Healthcare Management',
          description:
            'Our leadership team drives strategic initiatives to enhance healthcare delivery and operational excellence.',
        },
        {
          '@type': 'Offer',
          name: 'Medical Coding and Compliance Leadership',
          description:
            'Expert guidance in medical coding, compliance, and regulatory standards to ensure quality and accuracy.',
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
        name: 'Who are the leaders of Indivirtus Healthcare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our leadership team consists of experienced professionals with expertise in healthcare management, medical coding, and strategic innovation, dedicated to advancing Indivirtus Healthcare’s mission.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the role of the leadership team at Indivirtus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The leadership team at Indivirtus Healthcare oversees strategic planning, operational excellence, and innovation in healthcare services, ensuring high-quality outcomes for clients globally.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact the Indivirtus leadership team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach out to our leadership team through our contact page at indivirtus.com/contact or by calling +91-9131925456.',
        },
      },
    ],
  },
};
