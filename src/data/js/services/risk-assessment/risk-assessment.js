import serviceImage from '@/assets/risk-assessment/risk-assessment.jpg';
const link = '/services/risk-assessment/risk-assessment';

export default {
  slug: 'risk-assessment',
  parentSlug: 'risk-assessment',
  service_id: 'cro-risk-assessment',
  report_type: 'Toxicological Risk Assessment',
  title: 'Toxicological Risk Assessment (TRA)',
  name: 'Toxicological Risk Assessment',
  description:
    'Expert toxicological risk evaluations including PDE calculations, Cramer classification, and safety profiling for pharmaceutical development.',
  full_description:
    'Our Toxicological Risk Assessment (TRA) services offer scientifically robust evaluations to ensure the safety of pharmaceutical products across various routes of administration. We provide tolerable intake and PDE calculations, route-specific safety profiling, and substance classification through the Cramer decision tree approach. Designed for regulatory compliance and patient safety, our assessments support informed decisions in formulation, manufacturing, and impurity management.',
  estimated_duration: '5-10 working days',
  deliverables: [
    'Comprehensive TRA report',
    'PDE/TI Calculation summary',
    'Route-specific risk summary',
    'Cramer Class determination rationale',
  ],
  regulatory_basis: [
    'ICH Q3C/Q3D',
    'EMA Guidelines on Setting Health-Based Exposure Limits',
    'FDA Guidance on Genotoxic Impurities',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'CDMO', 'API Manufacturers'],
  expertise_area: ['Toxicology', 'Risk Assessment', 'Regulatory Affairs'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Toxicological Risk Assessment Services',
    caption: 'Toxicological evaluations for pharmaceutical safety and compliance.',
  },
  pageContent: {
    hero: {
      heading: "Toxicological Risk Assessments for <span class='halfHeading'>Pharmaceutical Safety</span>",
      tagline: 'Robust Evaluations for Regulatory Compliance',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Toxicological Risk Assessment (TRA) services</strong> deliver scientifically robust evaluations, including PDE calculations, Cramer classification, and route-specific safety profiling. We ensure <strong>regulatory compliance</strong> and patient safety to support pharmaceutical development and impurity management.',
    },
    overview: {
      heading: "Mastering Toxicological <span class='halfHeading'>Risk Evaluations</span>",
      overviewCards: [
        {
          heading: 'What are Toxicological Risk Assessment Services?',
          detail:
            'Our services provide comprehensive TRA reports, PDE/TI calculations, route-specific risk summaries, and Cramer Class determinations, ensuring <strong>safety and compliance</strong> for pharmaceutical products.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'TRA ensures <strong>patient safety</strong>, supports regulatory compliance, and informs decisions in formulation, manufacturing, and impurity management, minimizing risks in drug development.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led TRA solutions</strong>, providing scientifically sound assessments to support regulatory submissions and product safety.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>TRA Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Toxicological Risk Assessment services are led by certified toxicology experts with <strong>global regulatory expertise</strong>. We perform PDE/TI calculations, route-specific safety profiling, and Cramer Class determinations using a scientifically robust methodology.',
        'Our approach ensures <strong>regulator-ready assessments</strong>, aligning with ICH Q3C/Q3D, EMA Guidelines on Health-Based Exposure Limits, and FDA Guidance on Genotoxic Impurities to support formulation and manufacturing decisions.',
      ],
    },
    deliverables: {
      heading: "Toxicological Risk Assessment <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Comprehensive TRA Report</strong>: Detailed toxicological evaluation for regulatory submissions.',
        '<strong>PDE/TI Calculation Summary</strong>: Permissible Daily Exposure and Tolerable Intake calculations.',
        '<strong>Route-Specific Risk Summary</strong>: Safety profiles for various administration routes.',
        '<strong>Cramer Class Determination Rationale</strong>: Justification for substance classification.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our Toxicological Risk Assessment services align with stringent global standards, ensuring your assessments are <strong>regulator-ready</strong> and compliant with international expectations. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.',
      ],
      itemList: [
        '<strong>ICH Q3C/Q3D</strong>: Guidelines for residual solvents and elemental impurities.',
        '<strong>EMA Guidelines on Setting Health-Based Exposure Limits</strong>: Standards for exposure limit calculations.',
        '<strong>FDA Guidance on Genotoxic Impurities</strong>: U.S. regulations for impurity safety assessments.',
        '<strong>WHO Guidelines on Impurity Management</strong>: Global standards for pharmaceutical safety.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our Toxicological Risk Assessment services are essential for pharmaceutical companies ensuring <strong>product safety</strong> and regulatory compliance. Ideal for formulation development, impurity management, and regulatory submissions, our solutions support global markets. Key use cases include PDE calculations for <strong>impurity control</strong>, Cramer classification for excipients, and safety profiling for new drugs.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led TRA solutions</strong> backed by certified toxicology professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, robust assessments, driving <strong>regulatory success</strong> and patient safety.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>Product Safety?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert TRA Solutions',
      aria: 'Contact us to discuss your toxicological risk assessment needs',
    },
  },
  gtm: {
    eventCategory: 'Toxicological Risk Assessment',
    eventAction: 'TRA Page View',
    eventLabel: 'TRA Service Detail',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Toxicological Risk Assessment'],
      certification: 'GLP-aligned',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Toxicological Risk Assessment',
    description:
      'Toxicological Risk Assessment (TRA) services for pharmaceutical products, including PDE calculations, route-specific safety evaluations, and Cramer classification.',
    serviceType: 'Toxicological Risk Assessment',
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
      name: 'Toxicological Risk Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tolerable Intake and PDE Calculations',
            description:
              'Determination of Tolerable Intake (TI) and Permitted Daily Exposure (PDE) for active and residual compounds following EMA and ICH guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Route-specific Safety Evaluations',
            description:
              'Toxicological evaluation tailored to specific routes such as oral, dermal, and inhalation to ensure safety and compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cramer Classification for Unquantified Substances',
            description:
              'Assessment of toxicological concern levels using Cramer rules for compounds lacking established exposure thresholds.',
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
        name: 'What is a Toxicological Risk Assessment (TRA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A TRA evaluates the potential health risks associated with exposure to pharmaceutical compounds. It supports safety decisions and regulatory compliance by calculating safe exposure levels and classifying substances.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are PDE calculations important in pharmaceuticals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDE (Permitted Daily Exposure) calculations establish safe levels of residual compounds in drug products or manufacturing environments, ensuring patient and worker safety as per EMA and ICH guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is route-specific safety evaluated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Route-specific evaluations consider the method of administration (oral, dermal, inhalation) to assess how a compound may affect the body differently through each exposure pathway.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Cramer Classification and when is it used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cramer Classification is used for substances without established exposure limits. It categorizes them into classes of toxicological concern based on chemical structure and likelihood of toxicity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should opt for toxicological risk assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical companies, CDMOs, and API manufacturers involved in formulation development, cleaning validation, or impurity profiling should consider TRA for regulatory and safety purposes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Toxicological Risk Assessment services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include comprehensive TRA reports, PDE/TI calculations, route-specific risk summaries, and Cramer Class determinations for pharmaceutical safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from Toxicological Risk Assessment services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical companies developing formulations, managing impurities, or preparing regulatory submissions benefit from our tailored TRA solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with ICH Q3C/Q3D, EMA Health-Based Exposure Limits, FDA Genotoxic Impurities guidance, and WHO standards, ensuring global compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive comprehensive TRA reports, PDE/TI summaries, route-specific risk summaries, and Cramer Class determination rationales.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the TRA services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific product, impurities, and regulatory requirements, ensuring compliant and effective assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support impurity management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide PDE calculations and Cramer classifications to assess impurity safety, supporting formulation and manufacturing decisions.',
        },
      },
    ],
  },
  meta: {
    title: 'Toxicological Risk Assessment Services | Indivirtus CRO',
    description:
      'Ensure pharmaceutical safety and compliance with expert Toxicological Risk Assessments from Indivirtus. PDE calculations, Cramer classification & route-specific evaluations.',
    keywords: [
      'Toxicological Risk Assessment',
      'PDE calculation',
      'Cramer Classification',
      'Route-specific toxicology',
      'TRA services pharma',
      'Pharmaceutical risk assessment',
      'Indivirtus CRO',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Toxicological Risk Assessment Services | Indivirtus CRO',
      description:
        'PDE, TI, and Cramer Classification backed Toxicological Risk Assessments tailored for pharmaceutical and API manufacturers.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['PDE Calculation', 'Route-specific Toxicological Evaluation', 'Cramer Classification'],
};
