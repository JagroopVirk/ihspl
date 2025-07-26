const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/contact-us';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Contact Indivirtus Healthcare | Get in Touch',
    description:
      'Reach out to Indivirtus Healthcare for expert pharmaceutical services, regulatory compliance, and consulting. Contact us via phone, email, or visit our office in Mohali, India.',
    keywords: [
      'contact Indivirtus',
      'pharmaceutical consulting',
      'regulatory compliance contact',
      'Indivirtus Healthcare',
      'pharmaceutical services India',
      'Mohali contact',
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
      title: 'Contact Indivirtus Healthcare | Get in Touch',
      description:
        'Connect with Indivirtus Healthcare for expert pharmaceutical consulting, regulatory compliance, and validation services. Reach us via phone, email, or at our Mohali office.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Contact Indivirtus Healthcare | Get in Touch',
      description:
        'Get in touch with Indivirtus Healthcare for pharmaceutical consulting and regulatory services. Contact us via phone, email, or visit our office in Mohali.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Contact Us Page',
    eventAction: 'View',
    eventLabel: 'Contact Information',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Contact Inquiry', 'Customer Support'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Healthcare Contact',
    description:
      'Contact Indivirtus Healthcare for expert pharmaceutical consulting, regulatory compliance, and validation services. Reach us via phone, email, or at our office in Mohali, India.',
    serviceType: 'Pharmaceutical Consulting and Support',
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
      name: 'Contact and Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Customer Support for Pharmaceutical Services',
          description:
            'Reach out for support regarding ADE/PDE/OEL calculations, pharmacovigilance, GMP approvals, and other pharmaceutical services.',
        },
        {
          '@type': 'Offer',
          name: 'Regulatory Compliance Inquiries',
          description:
            'Contact us for assistance with regulatory compliance, dossier preparation, and global market approvals.',
        },
        {
          '@type': 'Offer',
          name: 'Consulting and Training Inquiries',
          description: 'Get in touch for pharmaceutical quality training, GxP, and QMS consulting services.',
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
        name: 'How can I contact Indivirtus Healthcare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us via our website at https://indivirtus.com/contact-us, by phone at +91-9131925456, or by visiting our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services can I inquire about through the contact page?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can inquire about our full range of services, including ADE/PDE/OEL calculations, pharmacovigilance, GMP approvals, regulatory compliance, and pharmaceutical training.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Indivirtus Healthcare located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our office is located at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, with a postal code of 160059.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Indivirtus offer global support for pharmaceutical services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indivirtus provides pharmaceutical consulting and regulatory services globally, supporting clients with compliance and validation needs worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I request a consultation with Indivirtus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To request a consultation, visit https://indivirtus.com/contact-us, call us at +91-9131925456, or email us through the contact form on our website.',
        },
      },
    ],
  },
};
