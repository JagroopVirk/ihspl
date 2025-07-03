import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/ade-pde-calculation';

export default {
  service_id: 'ade_pde_calc_001',
  report_type: 'Comprehensive Toxicological Assessment',
  title: 'ADE/PDE/OEL Calculation Services',
  name: 'ADE/PDE/OEL Determination',
  description:
    'Regulatory-compliant toxicological assessments for establishing scientifically validated Health-Based Exposure Limits (HBELs) including ADE, PDE, and OEL values with expert toxicologist review.',
  full_description:
    'Our comprehensive ADE/PDE Calculation service delivers rigorous toxicological risk assessments to establish defensible exposure limits for pharmaceutical manufacturing. We conduct thorough NOAEL/LOAEL evaluations, apply appropriate adjustment factors, and strictly adhere to EMA/ICH Q3D guidelines. Each assessment includes detailed scientific rationale and receives final approval by certified toxicologists to ensure regulatory compliance and patient safety across all manufacturing scenarios.',
  estimated_duration: '5-7 business days (expedited options available)',
  deliverables: [
    'Comprehensive toxicological evaluation report',
    'EMA/ICH Q3D-compliant PDE calculation',
    'ADE determination with scientific justification',
    'OEL recommendation where applicable',
    'Detailed NOAEL/LOAEL derivation with uncertainty factor analysis',
    'Toxicologist-signed final report with compliance statement',
    'Executive summary for regulatory submissions',
  ],
  regulatory_basis: [
    'EMA Guideline on Setting Health-Based Exposure Limits (EMA/CHMP/CVMP/SWP/169430/2012)',
    'ICH Q3D Guideline for Elemental Impurities (R2)',
    'PIC/S PI 046-1 Guide to GMP for Medicinal Products',
    'WHO Technical Report Series No. 961 (Annex 3)',
    'FDA Guidance on Elemental Impurities',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Pharmaceutical Manufacturing',
    'Biotechnology',
    'Contract Development & Manufacturing (CDMO)',
    'API Production',
    'Medical Devices',
    'Excipient Manufacturers',
  ],
  expertise_area: [
    'Regulatory Toxicology',
    'Pharmaceutical Risk Assessment',
    'Quality Assurance & Compliance',
    'Occupational Health Safety',
    'Cleaning Validation Support',
  ],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Professional toxicological assessment for ADE/PDE/OEL determination',
    caption: 'Scientifically validated exposure limits with full regulatory compliance documentation.',
  },
  gtm: {
    eventCategory: 'Regulatory Services',
    eventAction: 'Service Inquiry',
    eventLabel: 'ADE/PDE Calculation',
    customDimensions: {
      serviceTier: 'Expert',
      regulatoryLevel: 'EMA/FDA/ICH',
    },
    dataLayerPush: {
      reportType: ['Toxicological Assessment', 'HBEL Determination'],
      certification: ['EMA/ICH Q3D', 'PIC/S GMP'],
      expertReview: true,
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ADE/PDE/OEL Determination Service',
    description:
      'Regulatory-grade toxicological assessment for establishing scientifically valid exposure limits with full documentation.',
    serviceType: ['Toxicology Assessment', 'Regulatory Compliance'],
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
      availableLanguage: ['English', 'German', 'French', 'Spanish'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Toxicological Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Comprehensive ADE/PDE Assessment',
            description:
              'End-to-end toxicological evaluation including literature review, data analysis, and limit calculation.',
            serviceOutput: 'Toxicological Assessment Report',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory-Compliant PDE Report',
            description: 'PDE determination fully documented for EMA/FDA/ICH submissions.',
            serviceOutput: 'PDE Calculation Dossier',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Occupational Exposure Limit (OEL) Assessment',
            description: 'Workplace safety evaluation with OEL recommendations.',
            serviceOutput: 'OEL Report',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cleaning Validation Support Package',
            description: 'Complete HBEL documentation for cleaning validation protocols.',
            serviceOutput: 'Cleaning Validation HBEL Report',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR', 'GBP'],
      price: 'From ₹25,000 per compound (volume discounts available)',
      url: link,
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
      eligibleCustomerType: 'https://schema.org/Business',
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What comprehensive data do you need to perform an ADE/PDE assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We require complete toxicological data including study reports (acute, subchronic, chronic, reproductive toxicity), genotoxicity data, carcinogenicity information (if available), clinical data (human exposure experience), and physicochemical properties. For existing compounds, we can conduct literature searches if complete study reports are unavailable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure PDE calculations meet global regulatory expectations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our methodology strictly follows EMA/ICH Q3D guidelines while incorporating elements from FDA and WHO recommendations. We apply appropriate uncertainty factors (UF) based on compound-specific data, document all assumptions transparently, and include comparative analyses with similar compounds when available. All reports undergo dual review by senior toxicologists with regulatory submission experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'What distinguishes your ADE/PDE service from basic toxicological reviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide: 1) Full scientific rationale documentation, 2) Regulatory compliance mapping, 3) Multiple scenario analysis (different routes of exposure), 4) Occupational risk assessment integration, 5) Cleaning validation support documentation, and 6) Ongoing regulatory update monitoring for your compounds. Our reports are designed to withstand regulatory scrutiny during inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support cleaning validation and cross-contamination risk assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our standard ADE/PDE package includes dedicated cleaning validation support with: 1) HBEL justification statement, 2) Worst-case scenario analysis, 3) Equipment grouping recommendations, 4) Scientific rationale for limit selection, and 5) Ready-to-use templates for your cleaning validation protocols. We can also provide ongoing consultation during regulatory inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your typical turnaround time for urgent requests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard assessments complete in 5-7 business days. We offer expedited 72-hour service for urgent needs (surcharge applies). For multi-compound packages or complex molecules requiring additional literature review, timelines are established during project scoping. We provide regular progress updates throughout the assessment process.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide ongoing support after delivering the assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All assessments include 30 days of complimentary follow-up support for clarification questions. We offer annual reassessment services to incorporate new toxicological data and regulatory updates. For enterprise clients, we provide toxicology retainer packages with priority access to our experts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ADE/PDE/OEL determination?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ADE (Acceptable Daily Exposure), PDE (Permitted Daily Exposure), and OEL (Occupational Exposure Limit) determination involves toxicological risk assessments to establish safe exposure limits for pharmaceutical manufacturing. These calculations ensure patient and worker safety by setting defensible limits for residual compounds and impurities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure compliance with regulatory guidelines?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our assessments strictly adhere to EMA/ICH Q3D guidelines, PIC/S GMP standards, WHO Technical Reports, and FDA guidance. Each report is reviewed and signed by certified toxicologists, ensuring audit readiness and global market compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are included in the ADE/PDE/OEL service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our service includes a comprehensive toxicological evaluation report, EMA/ICH Q3D-compliant PDE calculations, ADE determination with scientific justification, OEL recommendations, NOAEL/LOAEL derivation, a toxicologist-signed final report, and an executive summary for regulatory submissions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to receive an ADE/PDE/OEL report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnaround times vary based on project complexity, but we prioritize efficiency without compromising quality. Most reports are delivered within 7-14 business days, with expedited options available upon request.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is a toxicologist-signed report important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A toxicologist-signed report ensures scientific defensibility and regulatory compliance. Our certified toxicologists provide expert validation, giving regulators and clients confidence in the accuracy and reliability of the assessment.',
        },
      },
    ],
  },
  meta: {
    title: 'Expert ADE/PDE/OEL Calculation Services | Regulatory Toxicology Assessments - Indivirtus',
    description:
      'Regulatory-grade ADE/PDE determinations with expert toxicologist sign-off. Comprehensive HBEL assessments compliant with EMA, ICH Q3D, and FDA requirements for pharmaceutical manufacturing safety.',
    keywords: [
      'ADE calculation service',
      'PDE determination expert',
      'OEL toxicological assessment',
      'EMA compliant HBEL',
      'ICH Q3D PDE report',
      'Pharmaceutical exposure limits',
      'Cleaning validation support',
      'Regulatory toxicology consulting',
      'NOAEL uncertainty factors',
      'GMP cross-contamination control',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: `https://www.indivirtus.com${link}`,
      site_name: 'Indivirtus Regulatory Services',
      published_time: '2023-01-15T00:00:00+05:30',
      modified_time: '2023-06-20T00:00:00+05:30',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Professional ADE/PDE/OEL Determination | Indivirtus',
      description:
        'Regulatory-compliant toxicological assessments with expert review for pharmaceutical manufacturing safety.',
      image: serviceImage.src,
      site: '@indivirtus',
      creator: '@indivirtus_tox',
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    additionalMeta: {
      viewport: 'width=device-width, initial-scale=1.0',
      themeColor: '#0066cc',
      author: 'Indivirtus Toxicology Team',
    },
  },
  assessmentTypes: [
    'Standard ADE/PDE Determination',
    'Occupational Exposure Limit (OEL) Assessment',
    'Cleaning Validation HBEL Package',
    'Multi-Compound Facility-Wide Assessment',
    'Pediatric-Specific ADE Evaluation',
    'Genotoxic Impurity Risk Assessment',
  ],
  serviceTiers: [
    {
      name: 'Standard Assessment',
      features: [
        'Single compound evaluation',
        'PDE determination',
        'Basic toxicological review',
        'Regulatory compliance check',
      ],
      deliveryTime: '5-7 business days',
    },
    {
      name: 'Comprehensive Package',
      features: [
        'ADE/PDE/OEL determination',
        'Cleaning validation support',
        'Occupational risk assessment',
        'Comparative compound analysis',
        'Priority review',
      ],
      deliveryTime: '7-10 business days',
    },
    {
      name: 'Enterprise Solution',
      features: [
        'Facility-wide assessment',
        'Multiple compounds',
        'Dedicated toxicologist',
        'Regulatory submission support',
        'Annual reassessment',
      ],
      deliveryTime: 'Custom timeline',
    },
  ],
};
