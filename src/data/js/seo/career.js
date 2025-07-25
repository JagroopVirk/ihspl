const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/career';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Career Opportunities | Indivirtus Healthcare',
    description:
      'Join Indivirtus Healthcare Services Pvt Ltd and contribute to innovative healthcare solutions. Explore exciting career opportunities in a dynamic and inclusive work environment.',
    keywords: [
      'healthcare jobs',
      'Indivirtus careers',
      'medical coding jobs',
      'pharmacovigilance careers',
      'healthcare employment',
      'Mohali jobs',
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
      title: 'Career Opportunities | Indivirtus Healthcare',
      description:
        'Explore rewarding career opportunities at Indivirtus Healthcare. Join our team to make a difference in healthcare services globally.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Career Opportunities | Indivirtus Healthcare',
      description:
        'Join Indivirtus Healthcare to work on cutting-edge healthcare solutions. Discover job openings and grow with us.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Career Page',
    eventAction: 'View',
    eventLabel: 'Career Page Visit',
    customDimensions: {
      pageType: 'Career',
      location: 'Mohali',
    },
    dataLayerPush: {
      reportType: ['Career Page Engagement'],
      certification: 'Healthcare Services',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Healthcare Careers',
    description:
      'Indivirtus Healthcare Services Pvt Ltd offers career opportunities in medical coding, pharmacovigilance, and healthcare IT, fostering innovation and professional growth.',
    serviceType: 'Healthcare Employment Services',
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
      name: 'Career Opportunities at Indivirtus',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Medical Coding and Pharmacovigilance Jobs',
          description:
            'Join our team in roles such as medical coding, pharmacovigilance, and healthcare IT, contributing to global healthcare solutions.',
        },
        {
          '@type': 'Offer',
          name: 'Healthcare IT and Data Analytics',
          description:
            'Opportunities in healthcare IT, data analytics, and software development to support innovative healthcare services.',
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
        name: 'What types of job opportunities are available at Indivirtus Healthcare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus offers roles in medical coding, pharmacovigilance, healthcare IT, data analytics, and administrative support, catering to various skill sets in the healthcare industry.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I apply for a job at Indivirtus Healthcare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit our career page at indivirtus.com/career, browse open positions, and submit your application through the online portal with your resume and cover letter.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Indivirtus provide training for new employees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer comprehensive onboarding and training programs to equip new hires with the skills and knowledge needed for their roles.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the work culture like at Indivirtus Healthcare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our work culture is collaborative, inclusive, and innovation-driven, encouraging employees to grow professionally while contributing to healthcare advancements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there remote or hybrid work options available at Indivirtus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depending on the role, we offer flexible work arrangements, including remote and hybrid options. Check specific job listings for details.',
        },
      },
    ],
  },
};
