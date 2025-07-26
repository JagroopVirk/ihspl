const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/404';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: '404 Page Not Found | Indivirtus Healthcare',
    description:
      'Oops! The page you’re looking for doesn’t exist. Explore Indivirtus Healthcare’s pharmaceutical services or contact us for assistance.',
    keywords: [
      '404 page not found',
      'Indivirtus Healthcare',
      'pharmaceutical services',
      'error page',
      'contact Indivirtus',
    ],
    twitterHandle: '@indivirtus',
    url: siteUrl,
    logo: siteLogo,
    type: 'website',
    canonicalUrl: `${siteUrl}${link}`,
    robotsMeta: {
      index: false,
      follow: true,
      nocache: true,
      googlebot: 'noindex, follow',
    },
    ogTags: {
      type: 'website',
      url: siteUrl,
      site_name: 'Indivirtus Healthcare Services Pvt Ltd',
      image: siteLogo,
      title: '404 Page Not Found | Indivirtus Healthcare',
      description:
        'The page you’re trying to access is not available. Discover our pharmaceutical consulting services or reach out for help at Indivirtus Healthcare.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: '404 Page Not Found | Indivirtus Healthcare',
      description:
        'Page not found. Visit Indivirtus Healthcare to explore our pharmaceutical CRO, pharmacovigilance, and calibration services, or contact us for support.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: '404 Error Page',
    eventAction: 'View',
    eventLabel: 'Page Not Found',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Error Page', '404'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '404 Page Not Found',
    description:
      'This page could not be found on the Indivirtus Healthcare website. Explore our pharmaceutical services or contact us for assistance.',
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
      serviceUrl: `${siteUrl}/contact-us`,
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
      name: 'Indivirtus Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Customer Support',
          description:
            'Contact Indivirtus Healthcare for assistance with navigating our website or accessing our pharmaceutical services.',
        },
        {
          '@type': 'Offer',
          name: 'Pharmaceutical Consulting Services',
          description:
            'Explore our range of services including CRO, pharmacovigilance, calibration, and regulatory compliance support.',
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
        name: 'Why am I seeing a 404 error on the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 404 error means the page you’re trying to access doesn’t exist or has been moved. Please check the URL or explore other sections of our website.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I find the page I’m looking for on the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can use the navigation menu to explore our services, blog, or group of companies, or visit our homepage at https://indivirtus.com.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for help with a 404 error?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us via our contact page at https://indivirtus.com/contact-us, by phone at +91-9131925456, or at our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does Indivirtus Healthcare offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus offers pharmaceutical CRO services, pharmacovigilance, calibration, medical scribing, and strategic solutions. Visit https://indivirtus.com/services for details.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I report a broken link on the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, please report any broken links via our contact page at https://indivirtus.com/contact-us or by calling +91-9131925456, and we’ll address the issue promptly.',
        },
      },
    ],
  },
};
