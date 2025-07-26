const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/about/security-confidentiality';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Security & Confidentiality | Indivirtus Healthcare',
    description:
      'Learn about Indivirtus Healthcare’s robust security and confidentiality measures, ensuring data protection and compliance with HIPAA and advanced technology standards.',
    keywords: [
      'Indivirtus security',
      'data confidentiality',
      'HIPAA compliance',
      'pharmaceutical data security',
      'network security',
      'client data protection',
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
      title: 'Security & Confidentiality | Indivirtus Healthcare',
      description:
        'Indivirtus Healthcare ensures client data security with locked terminals, restricted access, and HIPAA-compliant measures, backed by advanced technology and physical security.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Security & Confidentiality | Indivirtus Healthcare',
      description:
        'Discover how Indivirtus Healthcare protects sensitive client data with HIPAA compliance, secure technology, and dedicated IT monitoring.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Security Confidentiality Page',
    eventAction: 'View',
    eventLabel: 'Security and Confidentiality',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Security Policy', 'Confidentiality Measures', 'HIPAA Compliance'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Security & Confidentiality',
    description:
      'Indivirtus Healthcare ensures the highest standards of security and confidentiality for client data, with HIPAA compliance, advanced technology, and dedicated IT monitoring.',
    serviceType: 'Data Security and Confidentiality Services',
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
      name: 'Security and Confidentiality Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'HIPAA-Compliant Data Protection',
          description:
            'Ensuring 100% compliance with the Health Insurance Portability and Accountability Act (HIPAA) for secure handling of sensitive client data.',
        },
        {
          '@type': 'Offer',
          name: 'Advanced Technology Security',
          description:
            'Utilizing locked terminals, disabled USB ports, and restricted remote access to safeguard client data.',
        },
        {
          '@type': 'Offer',
          name: 'Physical and Network Security',
          description:
            'Dedicated IT team and physical security measures to monitor and prevent unauthorized access or data breaches.',
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
        name: 'How does Indivirtus Healthcare ensure data security?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus uses locked terminals without floppy/CD/DVD drives or USB ports, advanced technology, and restricted remote access to ensure data security.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Indivirtus compliant with HIPAA regulations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indivirtus ensures 100% compliance with the Health Insurance Portability and Accountability Act (HIPAA) of 1996 for secure data handling.',
        },
      },
      {
        '@type': 'Question',
        name: 'What measures are in place to protect against online threats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our dedicated IT team proactively monitors online threats, ensuring both physical and network security to protect client data.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus maintain confidentiality of client data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We maintain confidentiality through restricted access to client software, logging all modifications, and employing physical security to prevent unauthorized access.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for more information on security policies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us via our website at https://indivirtus.com/about/security-confidentiality, by phone at +91-9131925456, or at our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
    ],
  },
};
