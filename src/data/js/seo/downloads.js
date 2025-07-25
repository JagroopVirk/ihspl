const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/downloads';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Downloads | Indivirtus Healthcare',
    description:
      'Access downloadable resources from Indivirtus Healthcare, including medical reports, brochures, certifications, and guides to support your healthcare needs.',
    keywords: [
      'Indivirtus downloads',
      'healthcare resources',
      'medical reports',
      'healthcare brochures',
      'Indivirtus certifications',
      'healthcare guides',
      'downloadable healthcare content',
    ],
    twitterHandle: '@indivirtus',
    url: `${siteUrl}${link}`,
    logo: siteLogo,
    type: 'website',
    canonicalUrl: `${siteUrl}${link}`, //
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    ogTags: {
      type: 'website',
      url: `${siteUrl}/downloads`,
      site_name: 'Indivirtus Healthcare Services Pvt Ltd',
      image: siteLogo,
      title: 'Downloads | Indivirtus Healthcare',
      description:
        'Download medical reports, brochures, certifications, and other healthcare resources from Indivirtus Healthcare to stay informed and supported.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Downloads | Indivirtus Healthcare',
      description:
        'Download medical reports, brochures, certifications, and other healthcare resources from Indivirtus Healthcare to stay informed and supported.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Downloads',
    eventAction: 'PageView',
    eventLabel: 'Downloads Page',
    customDimensions: {
      pageType: 'Downloads',
      section: 'Resources',
    },
    dataLayerPush: {
      reportType: ['Medical Reports', 'Brochures', 'Certifications', 'Guides'],
      certification: 'ISO 9001:2015',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Healthcare Downloads',
    description:
      'Indivirtus Healthcare provides downloadable resources such as medical reports, brochures, certifications, and guides to support healthcare needs globally.',
    serviceType: 'Healthcare Resource Downloads',
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
      serviceUrl: `${siteUrl}/downloads`,
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
      name: 'Downloadable Healthcare Resources',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Medical Reports',
          description: 'Download detailed medical reports and case studies from Indivirtus Healthcare.',
        },
        {
          '@type': 'Offer',
          name: 'Healthcare Brochures',
          description: 'Access brochures detailing our healthcare services and offerings.',
        },
        {
          '@type': 'Offer',
          name: 'Certifications',
          description: 'Download certifications such as ISO 9001:2015 to verify our quality standards.',
        },
        {
          '@type': 'Offer',
          name: 'Healthcare Guides',
          description: 'Free guides on healthcare topics to educate and inform patients and professionals.',
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
        name: 'What types of resources are available for download on the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our downloads page offers a variety of resources, including medical reports, healthcare brochures, certifications like ISO 9001:2015, and educational guides on healthcare topics.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to create an account to download resources from Indivirtus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, most resources on our downloads page are available without requiring an account. However, some premium content may require registration or a subscription.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the downloadable resources free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, many of our resources, such as brochures and guides, are free to download. Certain specialized reports or premium content may have associated costs, which will be clearly indicated.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I ensure the downloaded files are secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All downloadable files on the Indivirtus website are scanned for viruses and hosted securely. We recommend using up-to-date antivirus software on your device for added security.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I share the downloaded resources with others?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You may share our free resources for non-commercial purposes, provided you credit Indivirtus Healthcare. For commercial use or redistribution, please contact us at +91-9131925456 or via our contact page.',
        },
      },
    ],
  },
};
