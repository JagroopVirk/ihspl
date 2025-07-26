import serviceImage from '@/assets/msds-sds/sds-preparation.jpg';
const link = '/services/msds-sds/sds-preparation';

export default {
  slug: 'sds-preparation',
  parentSlug: 'msds-sds',
  service_id: 'sds_preparation_001',
  report_type: 'SDS/MSDS Document',
  title: 'SDS/MSDS Preparation Services',
  name: 'SDS/MSDS Preparation',
  description:
    'Preparation of globally compliant Safety Data Sheets (SDS/MSDS) for pharmaceutical compounds in accordance with GHS, OSHA, and REACH standards.',
  full_description:
    'Our SDS/MSDS Preparation service provides comprehensive and regulatory-compliant documentation that meets global chemical safety standards. We follow the internationally accepted 16-section format under the GHS system and ensure compliance with OSHA (USA), REACH (EU), WHMIS (Canada), and local regulations for India, China, and Japan. Each Safety Data Sheet is tailored to the compound’s chemical properties, toxicity profile, and intended industrial use, ensuring that hazard communication is both accurate and up to date for regulatory submissions and workplace safety.',
  estimated_duration: '3–7 working days',
  deliverables: [
    'GHS-compliant 16-section SDS/MSDS',
    'Region-specific compliance versions (US, EU, India, China, Japan)',
    'Classification of hazards and precautionary statements',
    'Toxicological and ecological summaries',
    'Handling, storage, transport, and disposal guidance',
  ],
  regulatory_basis: [
    'GHS (Globally Harmonized System)',
    'OSHA Hazard Communication Standard (29 CFR 1910.1200)',
    'REACH Regulation (EC) No 1907/2006',
    'WHMIS 2015 (Canada)',
    'Japan ISHL, China GB Standards',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'APIs & Intermediates', 'Fine Chemicals', 'Biotech'],
  expertise_area: ['Chemical Safety', 'Toxicology', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'SDS/MSDS preparation document showing GHS-compliant hazard sections',
    caption: 'Professionally prepared SDS/MSDS for pharmaceutical regulatory and safety compliance.',
  },
  pageContent: {
    hero: {
      heading: "SDS/MSDS Preparation for <span class='halfHeading'>Global Compliance</span>",
      tagline: 'Ensure Safe Handling with Regulatory-Compliant Safety Data Sheets',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>SDS/MSDS Preparation service</strong> delivers comprehensive, globally compliant Safety Data Sheets for pharmaceutical compounds. Tailored to GHS, OSHA, REACH, and regional standards, we ensure <strong>accurate hazard communication</strong> for regulatory submissions and workplace safety.',
    },
    overview: {
      heading: "Mastering Safety Data <span class='halfHeading'>Sheet Compliance</span>",
      overviewCards: [
        {
          heading: 'What is SDS/MSDS Preparation?',
          detail:
            'Our service provides GHS-compliant 16-section Safety Data Sheets tailored to a compound’s chemical properties, toxicity, and industrial use, ensuring compliance with OSHA, REACH, WHMIS, and regional regulations for <strong>global safety standards</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Accurate SDS/MSDS ensures <strong>workplace safety</strong>, regulatory compliance, and effective hazard communication, supporting safe handling, transport, and disposal while meeting global submission requirements.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led SDS/MSDS solutions</strong>, providing precise, compliant documentation to support regulatory submissions and safe pharmaceutical operations.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>SDS/MSDS Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our SDS/MSDS Preparation services are led by certified toxicologists and regulatory experts specializing in <strong>global chemical safety</strong>. We develop 16-section Safety Data Sheets in accordance with GHS standards, incorporating region-specific requirements for the US, EU, India, China, and Japan, based on the compound’s toxicity profile and intended use.',
        'Our rigorous approach ensures <strong>accurate and compliant documentation</strong>, integrating toxicological and ecological data to support regulatory submissions, workplace safety, and hazard communication across global markets.',
      ],
    },
    deliverables: {
      heading: "SDS/MSDS Preparation <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>GHS-Compliant 16-Section SDS/MSDS</strong>: Comprehensive safety documentation for global use.',
        '<strong>Region-Specific Compliance Versions</strong>: Tailored SDS for US, EU, India, China, and Japan regulations.',
        '<strong>Classification of Hazards and Precautionary Statements</strong>: Precise hazard and safety guidance.',
        '<strong>Toxicological and Ecological Summaries</strong>: Detailed compound safety profiles.',
        '<strong>Handling, Storage, Transport, and Disposal Guidance</strong>: Practical instructions for safe operations.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our SDS/MSDS Preparation services align with stringent global and regional standards, ensuring your documentation is <strong>regulatory-compliant</strong> and ready for international submissions. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and compliance confidence.',
      ],
      itemList: [
        '<strong>GHS (Globally Harmonized System)</strong>: International standard for chemical hazard classification and labeling.',
        '<strong>OSHA Hazard Communication Standard (29 CFR 1910.1200)</strong>: U.S. regulations for workplace safety documentation.',
        '<strong>REACH Regulation (EC) No 1907/2006</strong>: European requirements for chemical safety data.',
        '<strong>WHMIS 2015 (Canada)</strong>: Canadian standards for workplace hazardous materials information.',
        '<strong>Japan ISHL, China GB Standards</strong>: Regional regulations for chemical safety and compliance.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our SDS/MSDS Preparation services are essential for pharmaceutical manufacturers requiring <strong>compliant hazard communication</strong> for compounds and APIs. Ideal for regulatory submissions, workplace safety, and global market approvals, our solutions support safe handling and transport. Key use cases include preparing SDS for <strong>new drug products</strong>, ensuring compliance for API manufacturing, and supporting global supply chain safety.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical manufacturers, delivering <strong>expert-led SDS/MSDS solutions</strong> backed by certified toxicologists and regulatory experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, accurate, and tailored Safety Data Sheets, driving <strong>regulatory success</strong> and workplace safety.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>SDS Compliance?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Documentation Solutions',
      aria: 'Contact us to discuss your SDS/MSDS preparation needs',
    },
  },
  gtm: {
    eventCategory: 'SDS Preparation',
    eventAction: 'Submit Request',
    eventLabel: 'SDS/MSDS Preparation Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['SDS/MSDS'],
      certification: 'GHS, REACH, OSHA, WHMIS',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SDS/MSDS Preparation',
    description:
      'Expert preparation of GHS-compliant Safety Data Sheets for pharmaceuticals as per OSHA, REACH, and WHMIS standards.',
    serviceType: 'SDS/MSDS Preparation Service',
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
      serviceUrl: `https://www.indivirtus.com${link}`,
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
      name: 'SDS/MSDS Preparation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'GHS-Compliant SDS Creation',
          description: 'Preparation of SDS/MSDS in the 16-section GHS format for global use.',
        },
        {
          '@type': 'Offer',
          name: 'Region-Specific SDS Compliance',
          description:
            'Customized SDS versions for OSHA (USA), REACH (EU), WHMIS (Canada), and Asia-Pacific standards.',
        },
        {
          '@type': 'Offer',
          name: 'Hazard Classification & Labeling',
          description: 'Accurate hazard classification and precautionary statements as per CLP/GHS.',
        },
        {
          '@type': 'Offer',
          name: 'SDS for India, China, Japan',
          description: 'Preparation of SDS in line with country-specific templates and regulatory formats.',
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
        name: 'What is the format of an SDS/MSDS under GHS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GHS-compliant SDS follows a standardized 16-section format, covering identification, hazards, composition, handling, toxicology, transport, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is one SDS format acceptable for all countries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While the GHS format is globally recognized, country-specific regulations (like OSHA, REACH, or China GB standards) require localized adaptations of the SDS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you prepare SDS in compliance with India, China, and Japan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide SDSs tailored for India (per MSIHC Rules), China (GB/T 16483), and Japan (ISHL and JIS Z 7253).',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is required from the client to prepare an SDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We need the compound name, CAS number, toxicological data, intended use, and physical/chemical properties such as pH, boiling point, solubility, etc.',
        },
      },
      {
        '@type': 'Question',
        name: 'What regulations are considered while preparing SDS/MSDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We incorporate GHS, OSHA HazCom 2012, EU REACH & CLP, WHMIS, and local environmental health and safety rules applicable in the target market.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do SDS/MSDS Preparation services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include GHS-compliant 16-section SDS/MSDS, region-specific versions for US, EU, India, China, and Japan, hazard classifications, toxicological summaries, and handling/storage guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from SDS/MSDS Preparation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers preparing regulatory submissions, ensuring workplace safety, or managing global supply chains for compounds and APIs benefit from our tailored SDS solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with GHS, OSHA (29 CFR 1910.1200), REACH (EC No. 1907/2006), WHMIS 2015, Japan ISHL, and China GB Standards, ensuring global and regional compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive GHS-compliant SDS/MSDS, region-specific compliance versions, hazard classifications, toxicological/ecological summaries, and handling/storage guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the SDS/MSDS services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your compound’s specific properties, regulatory requirements, and intended use, ensuring accurate and compliant documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support global regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide region-specific SDS versions and comprehensive hazard data, ensuring compliance with global standards for regulatory submissions and safe handling across markets.',
        },
      },
    ],
  },
  meta: {
    title: 'SDS/MSDS Preparation Services | GHS, OSHA, REACH Compliant | Indivirtus',
    description:
      'Get professional SDS/MSDS preparation services for pharmaceutical chemicals. Fully compliant with GHS 16-section format, OSHA, REACH, WHMIS, and Asia-Pacific standards.',
    keywords: [
      'SDS preparation',
      'MSDS documentation',
      'GHS 16-section format',
      'OSHA SDS service',
      'REACH compliant MSDS',
      'WHMIS SDS preparation',
      'India China Japan SDS',
      'pharmaceutical safety data sheet',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'SDS/MSDS Preparation Services | Indivirtus',
      description: 'Pharma-grade SDS/MSDS documentation service for GHS, OSHA, EU REACH, and local compliance.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    'GHS Safety Data Sheet',
    'REACH & OSHA Hazard Communication',
    'WHMIS & Asia-Pacific SDS',
    'Pharmaceutical Hazard Documentation',
  ],
};
