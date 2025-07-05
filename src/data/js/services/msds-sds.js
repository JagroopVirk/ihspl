import serviceImage from '@/assets/msds-sds.png';
import sdsPreparation from '@/assets/msds-sds.png';
import regionSpecificSds from '@/assets/msds-sds.png';
import hazardClassification from '@/assets/msds-sds.png';
import toxicologicalAssessment from '@/assets/msds-sds.png';
import msdsReview from '@/assets/msds-sds.png';
import expertAuthoring from '@/assets/msds-sds.png';
import regulatorySubmission from '@/assets/msds-sds.png';
const baseLink = '/services/ade-pde-oel';

export default {
  service_id: 'msds-sds-preparation',
  report_type: 'Safety Documentation',
  title: 'Material Safety Data Sheet (MSDS) / Safety Data Sheet (SDS) Preparation',
  name: 'MSDS/SDS Preparation',
  description:
    'Accurate and compliant preparation of Material Safety Data Sheets (MSDS) and Safety Data Sheets (SDS) for pharmaceutical compounds.',
  full_description:
    'Our MSDS/SDS preparation service provides comprehensive safety documentation for active pharmaceutical ingredients (APIs), excipients, and formulations. These sheets are essential for safe handling, transportation, and regulatory compliance. We create GHS-compliant SDS that align with global standards including REACH, OSHA HCS, and CLP. Our service includes classification, hazard identification, toxicological data, and environmental considerations tailored for pharmaceutical settings.',
  estimated_duration: '5–7 working days',
  deliverables: [
    'GHS-Compliant SDS/MSDS (16-section format)',
    'Chemical hazard classification and labeling',
    'Toxicological and ecological data sheets',
    'Transport and disposal information',
    'Supporting references and data sources',
  ],
  regulatory_basis: [
    'Globally Harmonized System (GHS)',
    'OSHA Hazard Communication Standard (HCS)',
    'EU REACH Regulation',
    'CLP Regulation (EC) No 1272/2008',
    'UN Model Regulations for Transport of Dangerous Goods',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'Chemical Manufacturing', 'CDMOs', 'CROs'],
  expertise_area: ['Toxicology', 'Regulatory Compliance', 'Safety Documentation', 'Chemical Classification'],
  is_active: true,
  pageLink: baseLink,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'MSDS SDS preparation service for pharmaceuticals',
    caption: 'Regulatory-compliant SDS/MSDS preparation by Indivirtus',
  },
  pageContent: {
    hero: {
      heading: 'MSDS/SDS Preparation Services',
      tagline: 'Ensuring Global Compliance for Chemical Safety',
    },
    main: {
      heading: 'Our SDS/MSDS Services',
      detail:
        "Indivirtus provides expert Material Safety Data Sheet (MSDS) and Safety Data Sheet (SDS) preparation services to ensure compliance with global chemical safety regulations. We deliver GHS-compliant, 16-section SDS tailored to regional standards like OSHA, EU REACH, and India's IS 17803:2022, supporting pharmaceutical manufacturers, biotech firms, chemical producers, and CROs. These services are critical for ensuring worker safety, environmental protection, and regulatory compliance across clinical, manufacturing, and distribution processes.",
    },
    cards: {
      heading: 'Our SDS Expertise',
      services: [
        {
          icon: '📄',
          image: sdsPreparation,
          title: 'SDS/MSDS Preparation',
          items: [
            'GHS-compliant 16-section format',
            'OSHA, EU REACH, WHMIS standards',
            'India, China, Japan compliance',
            'Hazard & safety information',
          ],
          link: baseLink + '/sds-preparation',
        },
        {
          icon: '🌍',
          image: regionSpecificSds,
          title: 'Region-Specific Customization',
          items: [
            'EU REACH Annex II',
            'OSHA HCS, WHMIS compliance',
            'Multilingual translations',
            'IS 17803:2022 (India)',
          ],
          link: baseLink + '/region-specific-sds',
        },
        {
          icon: '⚠️',
          image: hazardClassification,
          title: 'Hazard Classification & Labeling',
          items: [
            'GHS hazard assessment',
            'Pictograms & H/P-statements',
            'Primary/secondary containers',
            'Serialization & barcoding',
          ],
          link: baseLink + '/hazard-classification',
        },
        {
          icon: '🧪',
          image: toxicologicalAssessment,
          title: 'Toxicological Assessment',
          items: [
            'LD50, LC50, NOAEL data',
            'Mutagenicity & toxicity',
            'Biodegradability assessment',
            'ECHA, TOXNET data use',
          ],
          link: baseLink + '/toxicological-assessment',
        },
        {
          icon: '🔄',
          image: msdsReview,
          title: 'MSDS Review & Updating',
          items: ['Legacy MSDS conversion', 'Periodic updates', 'Version control & tracking', 'REACH UFI integration'],
          link: baseLink + '/msds-review',
        },
        {
          icon: '✍️',
          image: expertAuthoring,
          title: 'Expert Authoring',
          items: [
            'Toxicologist-led preparation',
            'Expert review & sign-off',
            'Regulatory endorsement',
            'Compliance assurance',
          ],
          link: baseLink + '/expert-authoring',
        },
        {
          icon: '📤',
          image: regulatorySubmission,
          title: 'Regulatory Submission',
          items: ['EU Poison Centers', 'Indian BIS/CIB filings', 'ECHA REACH submissions', 'DMF/CTD integration'],
          link: baseLink + '/regulatory-submission',
        },
      ],
    },
    process: {
      heading: 'Our SDS Preparation Process',
      steps: [
        {
          title: 'Data Collection',
          description:
            'We gather toxicological, ecotoxicological, and chemical data from ECHA, TOXNET, and other databases.',
        },
        {
          title: 'Hazard Assessment',
          description:
            'We classify hazards per GHS categories and prepare compliant labels with pictograms and statements.',
        },
        {
          title: 'SDS Authoring',
          description:
            'Our toxicologists draft 16-section SDS, ensuring compliance with regional standards like OSHA and REACH.',
        },
        {
          title: 'Review & Customization',
          description:
            'We review and customize SDS for specific regions, including translations and regulatory alignment.',
        },
        {
          title: 'Submission & Support',
          description: 'We submit SDS to regulatory bodies and integrate them into DMFs, CTDs, and other dossiers.',
        },
      ],
    },
    compliance: {
      heading: 'Compliance & Standards',
      complianceSections: [
        {
          title: 'Regulatory Bodies',
          items: [
            'FDA (U.S. Food and Drug Administration)',
            'EMA (European Medicines Agency)',
            'CDSCO (Central Drugs Standard Control Organization)',
            'ECHA (European Chemicals Agency)',
            'OSHA, WHMIS, BIS',
          ],
        },
        {
          title: 'Guidelines & Certifications',
          items: [
            'UN GHS (Latest Version)',
            'EU REACH Annex II',
            'OSHA HCS 2012',
            'WHMIS, IS 17803:2022',
            'JIS Z 7253, GB/T 16483',
          ],
        },
        {
          title: 'Applications & Industries',
          items: [
            'Pharmaceutical Manufacturing',
            'Biotechnology',
            'Chemical Production',
            'Contract Research Organizations',
            'API & Formulation Development',
          ],
        },
      ],
    },
    conclusion: {
      heading: 'Why Choose Our SDS Services?',
      detail:
        'Our CRO delivers expert SDS/MSDS preparation services, ensuring compliance with global GHS standards and regional regulations like OSHA, REACH, and IS 17803:2022. With toxicologist-led authoring, multilingual customization, and regulatory submission support, we help you ensure worker safety and streamline compliance. Choose us for accurate, reliable SDS solutions that support your global operations.',
    },
    cta: {
      heading: 'Ready to Ensure Chemical Safety Compliance?',
      tagline: 'Partner with us for expert SDS preparation and global regulatory support.',
    },
  },
  gtm: {
    eventCategory: 'SafetyDocumentationServices',
    eventAction: 'MSDS_SDS_Preparation',
    eventLabel: 'Pharma_Safety_Sheets',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['MSDS', 'SDS'],
      certification: 'GHS | REACH | OSHA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MSDS/SDS Preparation Service',
    description:
      'GHS-compliant preparation of MSDS and SDS sheets for pharmaceutical APIs and excipients, including hazard classification and toxicological profiles.',
    serviceType: 'MSDS and SDS Preparation',
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
      serviceUrl: baseLink,
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
      name: 'MSDS/SDS Preparation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'GHS-Compliant SDS Preparation',
          description:
            'Creation of safety data sheets as per Globally Harmonized System (GHS) requirements with hazard classification, pictograms, and safety phrases.',
        },
        {
          '@type': 'Offer',
          name: 'MSDS for Legacy Compliance',
          description:
            'Preparation of Material Safety Data Sheets (MSDS) for regions still referencing older documentation systems prior to GHS integration.',
        },
        {
          '@type': 'Offer',
          name: 'Multilingual SDS Preparation',
          description:
            'Translation and localization of SDS documents to meet international market and import/export compliance (e.g., EU, Latin America, Asia).',
        },
        {
          '@type': 'Offer',
          name: 'Custom SDS for Formulations',
          description:
            'Development of SDS for finished formulations, covering mixtures and proprietary blends used in pharma manufacturing.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Compound-based pricing',
      url: baseLink,
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
        name: 'What is an MSDS or SDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An MSDS (Material Safety Data Sheet) or SDS (Safety Data Sheet) is a detailed document that provides information about the properties, hazards, safe handling, and emergency measures related to chemicals and pharmaceutical substances.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is SDS preparation important for pharmaceuticals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SDS is required for regulatory compliance and ensures the safe use, handling, transport, and disposal of pharmaceutical substances. It also helps in hazard communication and risk mitigation for workers and downstream users.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is SDS preparation mandatory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, SDS preparation is a legal requirement under various global regulations including GHS, OSHA, and REACH for any hazardous chemical or substance being manufactured, imported, or exported.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is required from the client?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically require detailed chemical composition, purity, toxicological and physical properties, usage guidelines, and any known hazards to generate accurate and compliant SDS/MSDS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with SDS translation for global markets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer multilingual SDS preparation to help pharmaceutical companies comply with regional regulations in Europe, Asia, and Latin America.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support SDS creation for custom formulations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We provide tailored SDS creation services for proprietary blends and formulations based on available data and safety assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should SDS be updated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SDS should be reviewed regularly and updated whenever there is new hazard information or a regulatory change. We recommend reviewing SDS at least every 3 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in your SDS/MSDS preparation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our SDS/MSDS preparation includes a 16-section format compliant with the latest GHS version, covering identification, hazards, composition, safety measures, and regulatory information tailored to global standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which regions do your SDS services cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We customize SDS for regions including the USA (OSHA), EU (REACH/CLP), Canada (WHMIS), India (IS 17803:2022), China (GB/T 16483), Japan (JIS Z 7253), and more, with local language translations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure GHS-compliant hazard classification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assess chemical and toxicological hazards based on GHS categories (health, environmental, physical) and prepare labels with pictograms, signal words, H-statements, and P-statements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data sources are used for toxicological assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We compile data from ECHA, TOXNET, NIOSH, HSDB, GESTIS, and REACH dossiers for toxicological and ecotoxicological information, including LD50, LC50, and biodegradability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle updates to existing MSDS documents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We convert legacy MSDS to GHS-compliant SDS, perform annual/periodic reviews, update based on new toxicology or regulations, and manage version control with REACH and UFI integration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from your SDS preparation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers, biotech firms, chemical producers, and CROs benefit by ensuring regulatory compliance, worker safety, and proper chemical handling across global markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the process for regulatory submission of SDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We submit SDS to National Poison Centers (EU Article 45), Indian BIS/CIB, and ECHA under REACH, and align them with DMFs, CTD/ACTD dossiers, and other regulatory documents.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure the accuracy of SDS documents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our SDS are prepared and reviewed by trained toxicologists and chemical safety experts, ensuring accuracy, compliance, and regulatory endorsement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you provide multilingual SDS for global compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer local language translations (e.g., French, German, Spanish, Chinese) to meet multilingual compliance requirements for global markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you support labeling for chemical products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We prepare GHS-compatible labels with pictograms, signal words, H- and P-statements, and support serialization and barcoding for primary and secondary containers.',
        },
      },
    ],
  },
  meta: {
    title: 'MSDS/SDS Preparation Services for Pharmaceuticals | Indivirtus',
    description:
      'Professional preparation of GHS-compliant Safety Data Sheets (SDS) and MSDS for pharmaceutical compounds. Ensure global regulatory compliance and worker safety.',
    keywords: [
      'MSDS preparation',
      'SDS service',
      'pharma safety sheets',
      'GHS compliance',
      'chemical safety documentation',
      'OSHA SDS',
      'REACH SDS',
      'toxicology safety data',
      'custom SDS',
      'multilingual SDS',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: baseLink,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'MSDS/SDS Preparation for Pharmaceutical Compounds',
      description:
        'Accurate and globally compliant MSDS/SDS documentation for APIs, excipients, and finished formulations. Trusted by pharmaceutical CROs.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${baseLink}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['SDS Preparation', 'MSDS Documentation', 'Hazard Classification'],
};
