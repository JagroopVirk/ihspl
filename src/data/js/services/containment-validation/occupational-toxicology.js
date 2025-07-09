import serviceImage from '@/assets/containment-validation/occupational-toxicology.jpg';
const link = '/services/containment-validation/occupational-toxicology';

export default {
  slug: 'occupational-toxicology',
  parentSlug: 'containment-validation',
  service_id: 'CV-OT-007',
  report_type: 'Comprehensive Occupational Toxicology & Exposure Risk Assessment Report',
  title: 'Pharmaceutical Occupational Toxicology Services | OEL/ADE/OEB | Indivirtus',
  name: 'Occupational Toxicology & Risk Assessment',
  description:
    'Science-based toxicological evaluations for pharmaceutical compounds - from OEL derivation to facility-wide exposure control strategies.',
  full_description:
    'Our Occupational Toxicology service provides comprehensive health risk assessment for pharmaceutical compounds, combining regulatory expertise with advanced toxicological methodologies. We specialize in: derivation of Occupational Exposure Limits (OELs) using NOAEL/LOAEL data with species-specific allometric scaling, calculation of Acceptable Daily Exposures (ADEs) for cross-contamination control, and Occupational Exposure Banding (OEB) classification per global frameworks. For novel modalities (ATMPs, oligonucleotides, ADCs), we apply modified risk assessment approaches. Our team also conducts facility-wide risk mapping using FMEA methodologies to identify critical exposure points, and develops compound-specific control strategies aligned with ISPE Risk-MaPP and EMA HBEL guidelines. All assessments include detailed uncertainty analysis and are presented with clear implementation roadmaps for engineering controls and PPE strategies.',
  estimated_duration: '5–12 days (varies by compound class and data availability)',
  deliverables: [
    'Detailed OEL/ADE derivation report with uncertainty analysis',
    'OEB classification with band-specific containment recommendations',
    'Facility risk assessment matrix (FMEA format)',
    'Cross-contamination control strategy document',
    'Compound-specific safety data sheets (SDS)',
    'Toxicological data gap analysis (when applicable)',
    'Regulatory submission-ready toxicology summaries',
  ],
  regulatory_basis: [
    'EMA Guideline on Setting Health Based Exposure Limits (2014)',
    'ICH Q3D Elemental Impurities (2019)',
    'ISPE Risk-Based Manufacture of Pharma Products (Risk-MaPP 2nd Ed)',
    'OSHA 29 CFR 1910.1000 (Air Contaminants)',
    'ACGIH Threshold Limit Values (TLVs)',
    'REACH Regulation (EC) No 1907/2006',
    'NIOSH Hazardous Drug Handling Guidelines',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'High-potency API', 'ATMP/Cell Therapy', 'Oncology Drug Development'],
  expertise_area: [
    'Toxicological Risk Assessment',
    'Pharmaceutical Safety',
    'Exposure Control Strategy',
    'Regulatory Toxicology',
    'Novel Modalities',
  ],
  is_active: true,
  pageLink: link,
  icon: '☣️',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical Occupational Toxicology Risk Assessment Dashboard',
    caption: 'Toxicologist reviewing API exposure risk data and OEB classification models',
  },
  gtm: {
    eventCategory: 'Pharmaceutical Safety Services',
    eventAction: 'Toxicology Assessment Inquiry',
    eventLabel: 'OEL/ADE/OEB Service',
    customDimensions: {
      compoundClass: 'Small Molecule/Biologic/ATMP',
      potencyCategory: 'Cytotoxic/Non-Cytotoxic',
    },
    dataLayerPush: {
      reportType: ['Occupational Toxicology', 'Exposure Risk Assessment'],
      certification: ['EMA Compliant', 'OSHA Aligned'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Occupational Toxicology Services',
    description:
      'Comprehensive toxicological risk assessment for pharmaceutical compounds including OEL/ADE derivation, OEB classification, and exposure control strategy development.',
    serviceType: 'Pharmaceutical Safety Service',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus Healthcare Solutions',
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
      name: 'Occupational Toxicology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Advanced OEL/ADE Derivation',
            description:
              'Scientifically justified exposure limits using species-specific PK/PD modeling and route-to-route extrapolation when needed.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'OEB Classification & Containment Strategy',
            description:
              'Band assignment using global frameworks (ECETOC, ISPE) with facility-specific control recommendations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Novel Modality Risk Assessment',
            description:
              'Specialized approaches for ATMPs, oligonucleotides, and ADCs where traditional toxicology paradigms may not apply.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Facility Risk Mapping',
            description: 'FMEA-based identification of critical exposure points with prioritized control measures.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'Risk-based tiered pricing',
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
        name: 'How do you handle OEL derivation for compounds with limited toxicology data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For data-poor compounds, we employ: 1) Read-across from structurally similar compounds, 2) Threshold of Toxicological Concern (TTC) approaches, 3) Pharmacological activity-based estimation, and 4) Expert judgment with conservative uncertainty factors - always clearly documenting data gaps and assumptions.',
        },
      },
      {
        '@type': 'Question',
        name: "What's your approach for cytotoxic compounds with genotoxic potential?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For genotoxic compounds, we follow a tiered approach: 1) Apply TTC-based limits (1.5μg/day) when no threshold can be identified, 2) Use linear extrapolation from TD50 when some data exists, and 3) Consider threshold approaches when mechanistic data supports it. All recommendations include ALARP (As Low As Reasonably Practicable) implementation guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you reconcile differences between EMA HBEL and other OEL frameworks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, we specialize in creating harmonized approaches that meet EMA HBEL requirements for cross-contamination while also satisfying OSHA and ACGIH expectations for occupational safety, often developing compound-specific 'control bands' that address both needs efficiently.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do you assess risk for novel modalities like cell therapies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For ATMPs, we modify traditional approaches by: 1) Evaluating replicative capacity rather than classic toxicity endpoints, 2) Considering patient-specific risks (autologous vs allogeneic), and 3) Developing facility controls based on biological containment principles (BSL levels) in addition to chemical exposure paradigms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What format are your toxicology reports provided in for regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our standard deliverables include both technical reports (with full methodology and references) and submission-ready modules formatted per CTD requirements, including granular uncertainty analysis and clear rationale for all derived values suitable for MHRA, FDA, and EMA review.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmaceutical Occupational Toxicology Services | OEL/ADE/OEB | GMP Compliance',
    description:
      'Comprehensive toxicological risk assessment for pharmaceutical compounds - OEL derivation, OEB classification, and exposure control strategy development for safe manufacturing.',
    keywords: [
      'pharmaceutical occupational toxicology',
      'OEL derivation service',
      'ADE calculation',
      'OEB classification',
      'cytotoxic compound risk assessment',
      'ATMP safety evaluation',
      'cross-contamination control strategy',
      'EMA HBEL compliance',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus Healthcare Solutions',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma Occupational Toxicology Services | OEL/ADE/OEB Experts',
      description:
        'Science-based toxicological evaluations for pharmaceutical compounds - from OEL derivation to facility-wide exposure control strategies.',
      image: serviceImage.src,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: 'index, follow, max-image-preview:large',
    },
  },
  assessmentTypes: [
    'Occupational Exposure Limit (OEL) Derivation',
    'Acceptable Daily Exposure (ADE) Calculation',
    'Occupational Exposure Banding (OEB)',
    'Novel Modality Risk Assessment',
    'Facility Risk Mapping (FMEA)',
    'Control Strategy Development',
  ],
};
