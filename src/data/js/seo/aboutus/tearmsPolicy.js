const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/about/terms-policy';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Terms, Policy, Payments & Refunds | Indivirtus Healthcare',
    description:
      'Review Indivirtus Healthcare’s terms and conditions, privacy policy, payment methods, and refund policy for our pharmaceutical consulting and compliance services.',
    keywords: [
      'Indivirtus terms and conditions',
      'privacy policy',
      'payment policy',
      'refund policy',
      'pharmaceutical consulting terms',
      'Indivirtus Healthcare policies',
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
      title: 'Terms, Policy, Payments & Refunds | Indivirtus Healthcare',
      description:
        'Learn about Indivirtus Healthcare’s terms of service, privacy policy, payment options, and refund policy for our pharmaceutical consulting services.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Terms, Policy, Payments & Refunds | Indivirtus Healthcare',
      description:
        'Understand the terms, privacy policy, payment methods, and refund policy for Indivirtus Healthcare’s pharmaceutical consulting and compliance services.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Terms Policy Page',
    eventAction: 'View',
    eventLabel: 'Terms and Policies',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Terms and Conditions', 'Privacy Policy', 'Payment Policy'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Terms, Policy, Payments & Refunds',
    description:
      'Indivirtus Healthcare’s terms and conditions, privacy policy, payment methods, and refund policy for our pharmaceutical consulting and compliance services.',
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
      name: 'Terms and Policy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Transparent Project Process',
          description:
            'A structured process including analysis, pilot projects, pricing, contracting, and project reporting to ensure transparency and client satisfaction.',
        },
        {
          '@type': 'Offer',
          name: 'Secure Payment Options',
          description:
            'Digital payment methods including credit cards, debit cards, UPI, and net banking for domestic and international clients.',
        },
        {
          '@type': 'Offer',
          name: 'Privacy and Cookie Policy',
          description:
            'A commitment to user privacy through cookie usage and compliance with applicable data protection laws.',
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
        name: 'What are the terms and conditions for using the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By accessing the Indivirtus website, you agree to our terms and conditions, which outline rules for usage, content liability, and compliance with applicable laws in India.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods does Indivirtus accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept digital payments including credit cards, debit cards, UPI, and net banking for domestic clients, and credit cards for international clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Indivirtus’s refund policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As a service provider, refunds are not applicable once the client approves the scope of work and activities begin, following our transparent process with draft sample reports and demonstrations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Indivirtus use cookies on its website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we use cookies to enhance functionality and user experience, in accordance with our privacy policy, which you consent to by using our website.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for questions about terms or policies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us via our website at https://indivirtus.com/about/terms-policy, by phone at +91-9131925456, or at our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
    ],
  },
};
