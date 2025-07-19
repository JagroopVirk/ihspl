import serviceImage from '@/assets/msds-sds/toxicological-assessment.jpg';
const link = '/services/msds-sds/toxicological-assessment';

export default {
  slug: 'toxicological-assessment',
  parentSlug: 'msds-sds',
  service_id: 'toxicological_assessment_001',
  report_type: 'Toxicological Assessment Report',
  title: 'Toxicological Assessment Services',
  name: 'Toxicological Assessment',
  description: 'Pharmaceutical-grade toxicological evaluations using LD50, NOAEL, mutagenicity, and ECHA/TOXNET data.',
  full_description:
    'Our Toxicological Assessment service offers scientifically validated insights into the health and environmental risks associated with pharmaceutical compounds. From acute toxicity data like LD50 and LC50 to chronic exposure markers like NOAEL, our experts interpret mutagenicity, biodegradability, and regulatory toxicology data using global databases such as ECHA and TOXNET. This comprehensive evaluation is essential for preparing SDS, product registrations, and compliance submissions.',
  estimated_duration: '5–10 working days',
  deliverables: [
    'Compound-specific toxicological summary report',
    'Toxicity classification using LD50, LC50, NOAEL',
    'Mutagenicity and genotoxicity evaluations',
    'Biodegradability profile',
    'ECHA and TOXNET data references',
  ],
  regulatory_basis: ['REACH (EC No. 1907/2006)', 'OECD Guidelines', 'CLP Regulation (EC) No 1272/2008', 'ICH M7, Q3D'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'APIs & Intermediates', 'Fine Chemicals', 'Biotech'],
  expertise_area: ['Toxicology', 'Regulatory Compliance', 'Risk Assessment'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Toxicological assessment report for pharmaceutical compound',
    caption: 'Comprehensive toxicological assessment for drug safety and regulatory compliance.',
  },
  gtm: {
    eventCategory: 'Toxicological Assessment',
    eventAction: 'Submit Request',
    eventLabel: 'Toxicological Assessment Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Toxicological Assessment'],
      certification: 'REACH, ICH, OECD',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Toxicological Assessment',
    description:
      'Scientific toxicological assessments for pharmaceuticals using LD50, NOAEL, mutagenicity, and biodegradability data for global compliance.',
    serviceType: 'Toxicological Assessment Service',
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
      name: 'Toxicological Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'LD50, LC50, NOAEL Data Evaluation',
          description: 'Quantitative toxicity endpoints for acute and chronic exposure scenarios.',
        },
        {
          '@type': 'Offer',
          name: 'Mutagenicity & Genotoxicity Screening',
          description: 'Interpretation of AMES, micronucleus, and chromosomal aberration test data.',
        },
        {
          '@type': 'Offer',
          name: 'Biodegradability Assessment',
          description: 'OECD-guideline based assessment of environmental degradation potential.',
        },
        {
          '@type': 'Offer',
          name: 'ECHA & TOXNET Database Analysis',
          description: 'Comprehensive literature and regulatory database review for toxicological endpoints.',
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
        name: 'What is the importance of LD50 and NOAEL in toxicological assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "LD50 and NOAEL are critical indicators of a substance's toxicity. LD50 reflects the dose at which 50% of test animals die, while NOAEL helps establish safe exposure levels in humans.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do you determine mutagenic potential of a compound?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assess mutagenicity through validated test results such as the Ames test, chromosomal aberration assays, and micronucleus tests, using data from ECHA, TOXNET, or sponsor studies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is biodegradability assessment important in pharmaceutical toxicology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It helps determine the compound’s environmental impact, especially for wastewater discharge and environmental safety evaluations during regulatory submissions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can ECHA and TOXNET data be used directly for regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, data from ECHA and TOXNET are widely accepted in SDS, REACH, and ICH submissions. Our experts ensure the data meets relevance and reliability criteria.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information do I need to provide for toxicological assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need to share the compound’s CAS number, molecular structure, and any available toxicity data. We also require intended use and exposure scenarios.',
        },
      },
    ],
  },
  meta: {
    title: 'Toxicological Assessment Services | LD50, NOAEL, Mutagenicity | Indivirtus',
    description:
      'Indivirtus offers expert toxicological assessments for pharmaceuticals using LD50, NOAEL, mutagenicity, and biodegradability data from ECHA, TOXNET, and OECD guidelines.',
    keywords: [
      'toxicological assessment',
      'LD50 evaluation',
      'NOAEL calculation',
      'pharma mutagenicity study',
      'biodegradability testing',
      'ECHA toxicology report',
      'TOXNET data analysis',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Toxicological Assessment Services | Indivirtus',
      description: 'Comprehensive toxicology services including LD50, mutagenicity, NOAEL, and ECHA database reviews.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    'Toxicological Risk Assessment',
    'Pharmaceutical Safety Evaluation',
    'Mutagenicity Screening',
    'Environmental Degradation Studies',
  ],
};
