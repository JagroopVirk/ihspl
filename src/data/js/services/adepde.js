import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel';

export default {
  service_id: 'cro-cleaning-validation-safety-sds',
  report_type: 'Toxicological Safety Assessment',
  title: 'Toxicological Safety & Regulatory Documentation',
  name: 'ADE/PDE/OEL Calculation, Safety Reports & SDS Preparation',
  description:
    'Specialized toxicological and safety documentation support for pharmaceutical manufacturing and cleaning validation.',
  full_description:
    'Indivirtus offers end-to-end services for toxicological risk assessment and safety documentation as part of pharmaceutical CRO operations. This includes ADE/PDE/OEL & OEB calculations for cleaning validation, Safety Assessment Reports (SAR) for finished formulations, and expert preparation of MSDS/SDS documents. These services ensure regulatory compliance and mitigate risks associated with cross-contamination, personnel exposure, and environmental hazards.',
  estimated_duration: '2–4 weeks (depending on compound and scope)',
  deliverables: [
    'Compound-specific ADE/PDE/OEL & OEB Calculation Report',
    'Safety Assessment Report (SAR) for Finished Formulations',
    'Regulatory-compliant MSDS/SDS for active substances or final products',
  ],
  regulatory_basis: [
    'EMA Guidelines on PDE/ADE',
    'ICH Q3D (Elemental Impurities)',
    'REACH & GHS Compliance',
    'OSHA Hazard Communication Standards',
    'EU Regulation No 1272/2008 (CLP)',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'Healthcare Manufacturing'],
  expertise_area: ['Toxicology', 'Regulatory Compliance', 'Cleaning Validation', 'Occupational Safety'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Toxicological risk assessment and SDS preparation services',
    caption: 'Risk assessments and SDS tailored to pharmaceutical compounds',
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'ADE_PDE_OEL_SAR_SDS_Click',
    eventLabel: 'Toxicological Safety Documentation',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Toxicological Risk Assessment', 'Safety Data Sheet'],
      certification: 'Regulatory Toxicology',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ADE/PDE/OEL Calculation, Safety Reports & SDS Preparation',
    description:
      'Professional CRO service for preparing toxicological safety reports, risk assessments, and regulatory-compliant SDS for the pharmaceutical sector.',
    serviceType: 'Pharmaceutical CRO Documentation',
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
      name: 'Toxicological Risk & Safety Documentation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Acceptable Daily Exposure (ADE) Calculation',
            description:
              'Toxicologically-derived exposure limit used to determine safe levels for carryover in pharmaceutical manufacturing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Permitted Daily Exposure (PDE) Calculation',
            description:
              'Quantitative limit used in cleaning validation and derived from NOAEL/LOAEL data using EMA/ICH guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Occupational Exposure Limit (OEL) Calculation',
            description: 'Determination of airborne limits to protect worker safety in manufacturing environments.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Occupational Exposure Banding (OEB)',
            description:
              'Risk-based exposure classification when definitive OEL data is not available. Helps define control strategies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Safety Assessment Report (SAR)',
            description:
              'Comprehensive toxicological and exposure-based evaluation of finished pharmaceutical formulations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Material Safety Data Sheet (MSDS) / Safety Data Sheet (SDS) Preparation',
            description:
              'Preparation of regulatory-compliant safety documents for APIs, intermediates, and finished products.',
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
        name: 'What is Acceptable Daily Exposure (ADE)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ADE is the maximum amount of a pharmaceutical substance that a person can be exposed to on a daily basis without appreciable health risk. It is critical for evaluating product carryover during cleaning validation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between PDE and ADE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While PDE (Permitted Daily Exposure) and ADE are often used interchangeably, PDE is more formally defined in regulatory guidelines and includes additional safety factors. ADE is a broader toxicological term used for health-based exposure limits.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are OEL values important in manufacturing environments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Occupational Exposure Limits (OELs) help ensure worker safety by defining the airborne concentration of a substance that should not be exceeded during a typical work shift. These values guide personal protective equipment (PPE) requirements and containment strategies.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is OEB and how is it used in risk classification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Occupational Exposure Banding (OEB) classifies compounds into exposure bands based on their potency and toxicity. It’s used when quantitative OELs are unavailable and is essential for risk mitigation in early-phase drug development.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a Safety Assessment Report (SAR) include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A SAR includes hazard identification, exposure assessment, dose-response analysis, and risk characterization of pharmaceutical products. It helps ensure regulatory compliance and patient safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need a Safety Assessment for a finished formulation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Finished product safety assessments ensure that all excipients and APIs combined do not pose any unforeseen health risks when used as intended. It is essential for both market approval and lifecycle risk management.',
        },
      },
      {
        '@type': 'Question',
        name: 'What regulations apply to SDS/MSDS preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MSDS/SDS documents must comply with standards such as REACH (EU), GHS (Globally Harmonized System), and OSHA’s Hazard Communication Standard (US). They provide critical safety, handling, and emergency response information.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide SDS for investigational products as well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we prepare SDS for investigational products, research-grade materials, and commercial APIs, all aligned with relevant regional and global guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to prepare an SDS or MSDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The turnaround time for SDS/MSDS preparation is typically 5–10 business days, depending on the complexity of the substance and availability of data.',
        },
      },
    ],
  },
  meta: {
    title: 'Toxicological Risk Assessment & SDS Preparation | Indivirtus CRO Services',
    description:
      'Indivirtus provides CRO-based toxicological evaluations including ADE/PDE/OEL calculations, safety assessments, and regulatory-compliant SDS/MSDS for pharmaceuticals.',
    keywords: [
      'ADE calculation',
      'PDE calculation',
      'OEL limits',
      'Safety Assessment Report',
      'MSDS preparation',
      'SDS preparation',
      'Cleaning validation',
      'CRO toxicology services',
      'pharmaceutical safety documentation',
      'occupational exposure banding',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Toxicological Risk Assessment & SDS Preparation | Indivirtus',
      description:
        'Expert ADE/PDE/OEL calculations, SAR reports, and SDS preparation for regulatory compliance in pharma manufacturing.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Toxicological Assessment', 'Cleaning Validation Support', 'SDS/MSDS Documentation'],
};
