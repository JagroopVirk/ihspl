const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Indivirtus Healthcare | Contract Research Organization',
    description:
      'Indivirtus Healthcare offers a perfect blend of quality and economy in pharmaceutical CRO services, including cleaning validation, pharmacovigilance, GMP approvals, and more.',
    keywords: [
      'pharmaceutical CRO',
      'cleaning validation',
      'pharmacovigilance',
      'GMP approvals',
      'NABL calibration',
      'regulatory compliance',
      'medical device registration',
      'quality and economy',
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
      title: 'Indivirtus Healthcare | Perfect Blend of Quality and Economy',
      description:
        'Discover Indivirtus Healthcare’s expert pharmaceutical services, delivering quality and economy in CRO, pharmacovigilance, GMP compliance, and calibration.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Indivirtus Healthcare | Perfect Blend of Quality and Economy',
      description:
        'Indivirtus Healthcare combines quality and economy in pharmaceutical CRO, cleaning validation, pharmacovigilance, and regulatory compliance services.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Home Page',
    eventAction: 'View',
    eventLabel: 'Home Overview',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['CRO Services', 'Pharmacovigilance', 'GMP Compliance', 'Calibration'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Healthcare Services',
    description:
      'Indivirtus Healthcare delivers a perfect blend of quality and economy in pharmaceutical CRO services, including cleaning validation, pharmacovigilance, GMP approvals, and NABL-accredited calibration.',
    serviceType: 'Pharmaceutical Consulting and CRO Services',
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
      name: 'Pharmaceutical and Compliance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'ADE/PDE/OEL Calculation for Cleaning Validation',
          description:
            'Specialized calculations to ensure safe exposure levels during pharmaceutical cleaning validation, delivering quality and economy in compliance.',
        },
        {
          '@type': 'Offer',
          name: 'Pharmacovigilance & Drug Safety Monitoring',
          description:
            'Full-suite pharmacovigilance solutions, combining quality and economy with safety database setup and risk management plans.',
        },
        {
          '@type': 'Offer',
          name: 'NABL-Accredited Calibration Services',
          description:
            'Precise calibration for pharmaceutical instruments, backed by NABL accreditation, ensuring quality and cost-effective compliance.',
        },
        {
          '@type': 'Offer',
          name: 'GMP Approvals & Regulatory Readiness',
          description:
            'Comprehensive support for GMP approvals from global authorities, delivering quality and economy in regulatory compliance.',
        },
        {
          '@type': 'Offer',
          name: 'Genotoxic Impurity & Medical Device Assessment',
          description:
            'Expert toxicological assessments for genotoxic impurities and medical devices, aligning quality with economic solutions.',
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
        name: 'What is included in Indivirtus’s cleaning validation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our cleaning validation services include ADE/PDE/OEL calculation reports, scientific justifications, toxicological monographs, risk assessments, and compliance documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure quality in cleaning validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We combine rigorous scientific methodologies with cost-effective strategies to deliver precise and compliant cleaning validation solutions, ensuring product safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'What pharmacovigilance services does Indivirtus provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our pharmacovigilance services include PSMF preparation, SOPs, safety database setup, ICSR processing, PSUR/PBRER/PADER submissions, and risk management plans.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure cost-effective pharmacovigilance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We streamline processes and leverage expertise to provide high-quality pharmacovigilance solutions at economical rates, aligning with our motto of quality and economy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Indivirtus’s calibration services accredited?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our calibration services are NABL-accredited, providing traceable calibration reports and quality documentation for pharmaceutical instruments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus balance quality and economy in calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our NABL-accredited calibration services use precise, standardized processes to deliver high-quality results while optimizing costs for clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'What support does Indivirtus offer for GMP approvals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide regulatory readiness assessments, vendor audits, CAPA plans, GMP documentation reviews, and audit remediation strategies for global GMP approvals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure economical GMP compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer tailored, efficient solutions for GMP compliance, ensuring high-quality outcomes while minimizing costs, in line with our quality and economy motto.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Indivirtus’s genotoxic impurity assessment services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide genotoxicity risk assessments aligned with ICH Q3A/B/C/M7, TTC-based impurity categorization, and toxicological risk assessments for medical devices per ISO 10993.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus maintain quality in toxicological assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our assessments combine rigorous scientific standards with cost-effective approaches, ensuring compliance and safety while maintaining economic value.',
        },
      },
    ],
  },
};
