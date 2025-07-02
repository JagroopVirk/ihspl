import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel';

export default {
  service_id: 'ade-pde-oel-oeb-cleaning-validation',
  report_type: 'Toxicological Risk Assessment',
  title: 'ADE/PDE/OEL & OEB Calculation for Cleaning Validation',
  name: 'ADE/PDE/OEL & OEB Calculation',
  description:
    'Specialized calculations for determining safe exposure levels during pharmaceutical cleaning validation to ensure product safety and cross-contamination control.',
  full_description:
    'Our ADE (Acceptable Daily Exposure), PDE (Permitted Daily Exposure), OEL (Occupational Exposure Limit), and OEB (Occupational Exposure Banding) calculations are crucial in cleaning validation protocols to ensure that traces of active pharmaceutical ingredients (APIs) do not pose risks to patient safety or operator health. Our service includes scientific justification and detailed toxicological risk assessments, aligned with EMA, ICH Q3D, ISPE, and other international standards.',
  estimated_duration: '7-10 working days',
  deliverables: [
    'ADE/PDE/OEL Calculation Report',
    'Scientific Justification and Methodology',
    'Toxicological Monograph Summary',
    'Risk Assessment Summary for Cleaning Validation',
    'Compliance Support Documentation',
  ],
  regulatory_basis: [
    'EMA Guideline on Setting Health Based Exposure Limits',
    'ICH Q3D (Guideline for Elemental Impurities)',
    'ISPE Baseline Guide Vol. 7',
    'Occupational Safety and Health Standards (OSHA)',
    'PIC/S Guidelines',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturing', 'CDMO', 'CRO'],
  expertise_area: ['Toxicology', 'Risk Assessment', 'Cleaning Validation', 'Occupational Safety'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'ADE PDE OEL OEB Cleaning Validation Calculation',
    caption: 'Toxicological Assessment for Safe Exposure Limits in Cleaning Validation',
  },
  gtm: {
    eventCategory: 'CleaningValidationServices',
    eventAction: 'ADE_PDE_OEL_OEB_Calculation',
    eventLabel: 'Toxicological_Risk_Assessment',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['ADE', 'PDE', 'OEL', 'OEB'],
      certification: 'EMA | ICH Q3D | ISPE',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ADE/PDE/OEL & OEB Calculation for Cleaning Validation',
    description:
      'Comprehensive risk-based calculation service for cleaning validation, determining ADE, PDE, OEL, and OEB levels to ensure pharmaceutical safety and compliance.',
    serviceType: 'Toxicological Risk Assessment for Cleaning Validation',
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
      name: 'ADE/PDE/OEL & OEB Cleaning Validation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'ADE (Acceptable Daily Exposure) Calculation',
          description:
            'Scientific determination of ADE values to define safe carryover limits in multiproduct facilities.',
        },
        {
          '@type': 'Offer',
          name: 'PDE (Permitted Daily Exposure) Calculation',
          description:
            'Establish PDE values for APIs to support cleaning validation based on toxicological data and safety factors.',
        },
        {
          '@type': 'Offer',
          name: 'OEL (Occupational Exposure Limit) Calculation',
          description: 'Calculation of safe exposure thresholds for manufacturing personnel handling potent APIs.',
        },
        {
          '@type': 'Offer',
          name: 'OEB (Occupational Exposure Banding)',
          description:
            'Banding assessment to categorize compound toxicity for hazard communication and containment strategy.',
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
        name: 'What is ADE in cleaning validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ADE (Acceptable Daily Exposure) is the maximum amount of a substance that is considered safe for patient exposure per day. It's critical for determining cross-contamination limits in multiproduct facilities.",
        },
      },
      {
        '@type': 'Question',
        name: 'How is PDE calculated for pharmaceutical APIs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDE (Permitted Daily Exposure) is calculated using toxicological data such as NOAEL, LOAEL, and safety factors. It supports setting cleaning limits to ensure residual levels are safe for patients.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is OEL important in pharma manufacturing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OEL (Occupational Exposure Limit) is essential for safeguarding workers who handle potent APIs. It defines the maximum allowable airborne concentration to avoid health risks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is OEB and how is it used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "OEB (Occupational Exposure Banding) groups compounds based on their toxicity when exact OEL data isn't available. It helps determine containment and PPE requirements during manufacturing.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need ADE/PDE/OEL calculations for all products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, especially in multiproduct facilities or when handling highly potent APIs. These calculations are required by EMA, ICH, and WHO for cleaning validation and risk mitigation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you provide ADE/PDE reports for regulatory audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our reports are audit-ready and compliant with EMA, ICH Q3D, and ISPE standards. We also assist with scientific justifications during regulatory inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is involved in ADE/PDE calculation for cleaning validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ADE/PDE calculations involve a full toxicological assessment of APIs and intermediates, using NOAEL, LOAEL, and adjustment factors per EMA guidelines to set health-based exposure limits for cleaning validation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you determine Occupational Exposure Limits (OEL)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OELs are calculated based on toxicological data, airborne exposure risk modeling, and route-specific limits (inhalation, dermal, etc.), with comparisons to NIOSH, ACGIH, and REACH databases.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the role of OEB in pharmaceutical manufacturing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OEB assigns compounds to exposure bands (e.g., 1–5 or A–F) based on toxicity and pharmacological activity, guiding containment system design and facility segregation decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do PDE values support cleaning validation protocols?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDE values are used to calculate Maximum Allowable Carryover (MACO), set rinse/swab limits, and develop health-based cleaning validation protocols per EMA, PIC/S, and Annex 15 guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from your cleaning validation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers, biotech firms, and CROs benefit by ensuring safe, compliant shared equipment and facilities, reducing cross-contamination risks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Toxicological Risk Assessment (TRA) report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TRA reports include compound-specific toxicology monographs, cleaning limit justifications, and documentation for cleaning validation protocols, PQRs, and regulatory submissions.',
        },
      },
    ],
  },
  meta: {
    title: 'ADE/PDE/OEL & OEB Calculation for Cleaning Validation | Indivirtus',
    description:
      'Expert toxicological calculations of ADE, PDE, OEL, and OEB for cleaning validation to ensure pharmaceutical safety and compliance. Trusted CRO support by Indivirtus.',
    keywords: [
      'ADE calculation',
      'PDE assessment',
      'OEL determination',
      'OEB banding',
      'cleaning validation',
      'pharma risk assessment',
      'toxicological reports',
      'EMA PDE guideline',
      'ICH Q3D ADE',
      'CRO cleaning services',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'ADE/PDE/OEL & OEB Calculation for Cleaning Validation',
      description:
        'Get expert support on ADE, PDE, and OEL calculation for pharma cleaning validation. Ensure global compliance with audit-ready reports.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['ADE Calculation', 'PDE Calculation', 'OEL Setting', 'OEB Banding'],
};
