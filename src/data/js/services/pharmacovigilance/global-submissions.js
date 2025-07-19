import serviceImage from '@/assets/pharmacovigilance/global-submissions.jpg';
const link = '/services/pharmacovigilance/global-submissions';

export default {
  slug: 'global-submissions',
  parentSlug: 'pharmacovigilance',
  service_id: 'PV07',
  report_type: 'Regulatory Submissions',
  title: 'Global Submissions',
  name: 'Global Submissions for Pharmacovigilance',
  description:
    'End-to-end support for compliant E2B submissions across global regulatory bodies including FDA, EMA, PMDA, PvPI, and WHO.',
  full_description:
    'Our Global Submissions service ensures seamless, compliant pharmacovigilance data reporting to worldwide regulatory authorities. We handle E2B R2/R3 submissions, gateway configuration, and region-specific filings such as FDA, EMA, PMDA, PvPI, and WHO. With a proven understanding of submission nuances across jurisdictions, we help clients maintain safety compliance and meet stringent pharmacovigilance timelines.',
  estimated_duration: 'Ongoing support based on regulatory timelines',
  deliverables: [
    'E2B R2/R3-compliant submission files',
    'Acknowledgment reports from global authorities',
    'Submission tracking logs',
    'Configured PV gateway (where applicable)',
  ],
  regulatory_basis: [
    'ICH E2B (R2/R3)',
    'FDA Adverse Event Reporting System (FAERS)',
    'EMA EudraVigilance requirements',
    'PMDA reporting formats',
    'PvPI and WHO Program standards',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Vaccines', 'Medical Devices'],
  expertise_area: ['Pharmacovigilance', 'Regulatory Affairs'],
  is_active: true,
  pageLink: link,
  icon: '🌍',
  image: {
    path: serviceImage,
    alt: 'Global PV submission services illustration',
    caption: 'Streamlined pharmacovigilance submissions across global authorities',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance',
    eventAction: 'Accessed Global Submissions',
    eventLabel: 'Global Submissions Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Regulatory Submissions'],
      certification: 'ICH E2B, GVP Module VI',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Global Submissions for Pharmacovigilance',
    description:
      'Comprehensive pharmacovigilance submission support including E2B R2/R3, EMA, FDA, PMDA, PvPI, WHO filings, and PV gateway setup.',
    serviceType: 'Pharmacovigilance Regulatory Submission',
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
      serviceUrl: link,
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
      name: 'Global Submission Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E2B-Compliant Submissions',
            description: 'Structured safety data submission to global regulators using E2B R2/R3 format.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EMA, FDA, PMDA Filings',
            description: 'Country-specific electronic and manual safety submissions to meet compliance standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PvPI & WHO Submissions',
            description: 'Support for local authority reporting including India PvPI and WHO Programme.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PV Gateway Configuration',
            description: 'Setup and testing of gateway configurations for automated submission transmission.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Compound-based pricing',
      url: link,
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are E2B R2 and R3 submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'E2B R2 and R3 are international formats defined by ICH for electronic transmission of Individual Case Safety Reports (ICSRs) to health authorities. R3 is the latest version with expanded data fields and stricter validation rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which regulatory authorities do you support submissions for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support submissions to major regulatory bodies including the US FDA (FAERS), EMA (EudraVigilance), Japan PMDA, India PvPI, and the WHO global database.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with PV gateway setup and validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we assist with configuration, testing, and validation of pharmacovigilance gateways for seamless electronic submissions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide support for post-submission follow-up or queries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our team tracks submission acknowledgments and provides follow-up support in case of validation errors or authority queries.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure submission compliance with different country formats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our team stays updated with evolving regulatory requirements and utilizes validated tools to ensure format-specific compliance across jurisdictions.',
        },
      },
    ],
  },
  meta: {
    title: 'Global Pharmacovigilance Submissions | EMA, FDA, PMDA, WHO',
    description:
      'Indivirtus offers end-to-end global PV submission support including E2B R2/R3 formatting, FDA/EMA/PMDA filings, WHO & PvPI submissions, and gateway setup.',
    keywords: [
      'global pharmacovigilance submissions',
      'E2B R3 submission support',
      'FDA EMA PMDA WHO PvPI submissions',
      'pharmacovigilance gateway configuration',
      'EudraVigilance and FAERS submissions',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Global Pharmacovigilance Submission Services | Indivirtus',
      description:
        'Regulatory submission support for E2B-compliant reporting to FDA, EMA, PMDA, PvPI, and WHO. Stay compliant with Indivirtus.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Regulatory Filing', 'PV Gateway Setup', 'ICSR Submission Review'],
};
