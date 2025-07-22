import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = '/services/ade-pde-oel/oeb-assignment';

export default {
  slug: 'oeb-assignment',
  parentSlug: 'ade-pde-oel',
  service_id: 'oeb_assign_001',
  report_type: 'Comprehensive Occupational Exposure Banding',
  title: 'Occupational Exposure Band (OEB) Classification Services',
  name: 'OEB Assessment & Containment Strategy',
  description:
    'Expert OEB classification using multiple methodologies (ISPE/SafeBridge/NIOSH) with toxicological justification and facility-specific containment recommendations for potent compounds.',
  full_description:
    'Our OEB Assignment service provides pharmaceutical manufacturers with scientifically robust exposure banding using integrated assessment frameworks. We evaluate compounds against ISPE, SafeBridge, and NIOSH criteria while considering pharmacological potency, genotoxic potential, and occupational exposure scenarios. Our reports include detailed toxicological justification, multi-method comparison, and actionable containment strategies tailored to your facility design and operational workflows.',
  estimated_duration: '5-8 business days (expedited options available)',
  deliverables: [
    'Comprehensive OEB classification report',
    'Toxicological data evaluation matrix',
    'Multi-framework comparison (ISPE/SafeBridge/NIOSH)',
    'Compound-specific hazard profile',
    'Facility containment level recommendations',
    'Engineering control evaluation',
    'PPE requirement guidelines',
    'Cross-contamination risk assessment',
    'Regulatory compliance statement',
    'Training package for occupational safety teams',
  ],
  regulatory_basis: [
    'ISPE Risk-Based Manufacture of Pharmaceutical Products (Risk-MaPP 2.0)',
    'SafeBridge Potent Compound Safety Standard (2021)',
    'NIOSH Occupational Exposure Banding e-Tool (2019)',
    'EMA Guideline on Hazardous Medicines (EMA/CHMP/608186/2009)',
    'OSHA Hazard Communication Standard (29 CFR 1910.1200)',
    'EU REACH Regulation (EC) No 1907/2006',
    'ACGIH Threshold Limit Values (TLVs)',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Pharmaceutical Manufacturing',
    'Biologics & ADC Production',
    'Contract Development & Manufacturing (CDMO)',
    'API & HPAPI Facilities',
    'Oncology Drug Manufacturers',
    'Veterinary Pharmaceutical Producers',
    'Research & Development Organizations',
  ],
  expertise_area: [
    'Occupational Toxicology',
    'Exposure Risk Assessment',
    'Containment Strategy',
    'Potent Compound Safety',
    'Regulatory Compliance',
    'Facility Design',
  ],
  is_active: true,
  pageLink: link,
  icon: '🏷️',
  image: {
    path: serviceImage,
    alt: 'Occupational Exposure Banding (OEB) classification services for pharmaceutical compounds',
    caption: 'Science-based OEB determination for safe handling of potent active ingredients.',
  },
  pageContent: {
    hero: {
      heading: "OEB Assessment for <span class='halfHeading'>Pharmaceutical Safety</span>",
      tagline: 'Safeguard Workers with Science-Driven Containment Solutions',
      detail:
        'At Indivirtus Healthcare Services, our <strong>OEB assessment and containment strategy services</strong> deliver tailored Occupational Exposure Banding (OEB) classifications to protect workers and ensure <strong>regulatory compliance</strong> in pharmaceutical manufacturing, safeguarding your operations with precision.',
    },
    overview: {
      heading: "Mastering Occupational <span class='halfHeading'>Safety</span>",
      overviewCards: [
        {
          heading: 'What is OEB Assessment?',
          detail:
            'Our services provide <strong>scientifically robust OEB classifications</strong>, evaluating compounds against ISPE, SafeBridge, and NIOSH criteria to ensure safe handling and effective containment in pharmaceutical facilities.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Proper OEB classification protects workers from <strong>hazardous compounds</strong>, ensures regulatory compliance, and minimizes occupational exposure risks, enhancing safety in manufacturing environments.',
        },
        {
          heading: 'Our Role in Your Safety',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>actionable containment strategies</strong> and detailed reports, empowering your facility to achieve compliance and maintain safe operations.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Assessment Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, we integrate <strong>ISPE, SafeBridge, and NIOSH frameworks</strong> to deliver precise OEB classifications. Our certified toxicologists evaluate pharmacological potency, genotoxic potential, and exposure scenarios, providing detailed toxicological justifications and tailored containment strategies.',
        'Our approach ensures your facility’s workflows are optimized for <strong>worker safety</strong> and compliance, with solutions customized to your specific compounds and operational needs, ready for regulatory scrutiny.',
      ],
    },
    deliverables: {
      heading: "OEB Assessment <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Comprehensive OEB Classification Report</strong>: Detailed evaluation of compound hazards.',
        '<strong>Toxicological Data Evaluation Matrix</strong>: Structured analysis of compound risks.',
        '<strong>Multi-Framework Comparison</strong>: ISPE, SafeBridge, and NIOSH-based assessments.',
        '<strong>Compound-Specific Hazard Profile</strong>: Tailored profile for each compound.',
        '<strong>Facility Containment Level Recommendations</strong>: Guidance for safe handling.',
        '<strong>Engineering Control Evaluation</strong>: Assessment of containment effectiveness.',
        '<strong>PPE Requirement Guidelines</strong>: Specific recommendations for protective equipment.',
        '<strong>Cross-Contamination Risk Assessment</strong>: Evaluation to prevent contamination.',
        '<strong>Regulatory Compliance Statement</strong>: Audit-ready compliance documentation.',
        '<strong>Training Package for Safety Teams</strong>: Resources to empower your staff.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our OEB assessment services adhere to stringent global standards, ensuring <strong>worker safety</strong> and compliance in pharmaceutical manufacturing. By aligning with industry-leading guidelines, we deliver robust, audit-ready solutions that support safe operations and seamless market compliance.',
      ],
      itemList: [
        '<strong>ISPE Risk-Based Manufacture of Pharmaceutical Products (Risk-MaPP 2.0)</strong>: Industry best practices for risk management.',
        '<strong>SafeBridge Potent Compound Safety Standard (2021)</strong>: Compliance with potent compound safety protocols.',
        '<strong>NIOSH Occupational Exposure Banding e-Tool (2019)</strong>: Alignment with occupational safety guidelines.',
        '<strong>EMA Guideline on Hazardous Medicines (EMA/CHMP/608186/2009)</strong>: European standards for hazardous compounds.',
        '<strong>OSHA Hazard Communication Standard (29 CFR 1910.1200)</strong>: U.S. worker safety regulations.',
        '<strong>EU REACH Regulation (EC) No 1907/2006</strong>: European chemical safety standards.',
        '<strong>ACGIH Threshold Limit Values (TLVs)</strong>: Industry-recognized exposure limits.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our OEB assessment and containment strategy services are vital for manufacturers handling <strong>potent compounds</strong>, developing new drugs, or operating shared facilities. These solutions ensure safe handling during facility design, process development, and occupational safety planning. Key use cases include protecting workers in <strong>multi-product facilities</strong>, ensuring compliance during regulatory audits, and optimizing containment for new production lines.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted leader in OEB assessment and containment strategy development, delivering <strong>scientifically robust solutions</strong> tailored to your facility. Our certified toxicologists and regulatory experts ensure compliance with global standards, rapid turnaround times, and strict confidentiality. Partner with us to achieve <strong>operational safety</strong> and regulatory success.',
      ],
    },
    cta: {
      heading: "Ready to Enhance <span class='halfHeading'>Worker Safety?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert OEB Solutions',
      aria: 'Contact us to discuss your OEB assessment needs',
    },
  },
  gtm: {
    eventCategory: 'Occupational Safety',
    eventAction: 'Service Inquiry',
    eventLabel: 'OEB Classification',
    customDimensions: {
      serviceTier: 'Expert',
      regulatoryLevel: 'Global Standards',
    },
    dataLayerPush: {
      reportType: ['Risk Assessment', 'Exposure Banding'],
      methodology: ['ISPE', 'SafeBridge', 'NIOSH'],
      compoundType: ['API', 'HPAPI', 'Oncology'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Occupational Exposure Banding (OEB) Services',
    description:
      'Comprehensive OEB classification with toxicological justification and containment strategy development.',
    serviceType: ['Risk Assessment', 'Occupational Safety', 'Regulatory Compliance'],
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
      availableLanguage: ['English', 'German', 'Japanese', 'French'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'OEB Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Comprehensive OEB Classification',
            description: 'Multi-framework evaluation using ISPE, SafeBridge and NIOSH methodologies.',
            serviceOutput: 'OEB Classification Dossier',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HPAPI Safety Assessment',
            description: 'Specialized evaluation for highly potent active pharmaceutical ingredients.',
            serviceOutput: 'HPAPI Safety Profile',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Containment Strategy Development',
            description: 'Facility-specific engineering controls and workflow recommendations.',
            serviceOutput: 'Containment Implementation Plan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Occupational Safety Package',
            description: 'Complete PPE program and exposure monitoring recommendations.',
            serviceOutput: 'Occupational Safety Plan',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹35,000 per compound (volume discounts available)',
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
        name: 'What criteria differentiate OEB levels in your assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate multiple parameters: 1) Acute toxicity (LD50/LC50), 2) Chronic effects (NOAEL/LOAEL), 3) Genotoxic potential, 4) Sensitization risk, 5) Pharmacological potency, and 6) Reproductive toxicity. Our classification matrix weights these factors according to ISPE/SafeBridge frameworks while considering your specific manufacturing context.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle compounds with limited toxicological data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For data-poor compounds, we: 1) Apply read-across from structurally similar compounds, 2) Utilize QSAR modeling where appropriate, 3) Consider pharmacological class effects, and 4) Implement a precautionary approach with more conservative banding. All assumptions are clearly documented with rationale for regulatory review.',
        },
      },
      {
        '@type': 'Question',
        name: 'What containment strategies do you recommend for OEB 4/5 compounds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For high-potency compounds, we typically recommend: 1) Isolator technology or closed systems, 2) Dedicated HVAC with negative pressure, 3) Airlock entry systems, 4) Continuous exposure monitoring, 5) Full-body PPE with respiratory protection, and 6) Rigorous cleaning validation protocols. We tailor recommendations to your specific facility capabilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should OEB classifications be reviewed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend: 1) Annual review of all compounds, 2) Immediate reassessment when new toxicological data emerges, 3) Re-evaluation after significant process changes, and 4) Systematic review every 3 years even without changes. Our service includes optional annual review packages to maintain current classifications.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help implement OEB-based controls in existing facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer: 1) Facility gap assessments, 2) Retrofit containment solutions, 3) Workflow optimization, 4) Staff training programs, and 5) Performance verification. Our engineers specialize in practical implementations that balance safety requirements with operational feasibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do your OEB services support regulatory inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our deliverables are inspection-ready with: 1) Complete scientific justification, 2) Methodology transparency, 3) Regulatory standard alignment, 4) Clear documentation trails, and 5) Prepared response packages. We also provide mock inspection support and on-call expert assistance during actual audits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Occupational Exposure Banding (OEB) assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OEB assessment classifies pharmaceutical compounds into exposure bands based on their toxicity, potency, and occupational exposure risks. It helps manufacturers implement appropriate containment strategies to ensure worker safety and regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure compliance with OEB assessment standards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our OEB assessments align with ISPE Risk-MaPP, SafeBridge, NIOSH, EMA, OSHA, and EU REACH guidelines. We provide scientifically robust reports with toxicological justifications, ensuring compliance and audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are included in the OEB assessment service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our deliverables include a comprehensive OEB classification report, toxicological data evaluation matrix, multi-framework comparison (ISPE/SafeBridge/NIOSH), compound-specific hazard profile, containment level recommendations, engineering control evaluation, PPE guidelines, cross-contamination risk assessment, regulatory compliance statement, and training package.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does an OEB assessment take to complete?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline depends on the complexity of the compounds and facility. We typically deliver OEB assessments within 7-14 business days, with expedited options available for urgent needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is a multi-framework comparison important for OEB classification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Using multiple frameworks like ISPE, SafeBridge, and NIOSH ensures a robust and defensible classification. It accounts for diverse criteria, enhancing the accuracy of exposure banding and alignment with global safety standards.',
        },
      },
    ],
  },
  meta: {
    title: 'Expert OEB Classification Services | ISPE & SafeBridge Aligned - Indivirtus',
    description:
      'Comprehensive occupational exposure banding with toxicological justification and facility-specific containment strategies for safe handling of potent compounds.',
    keywords: [
      'OEB classification service',
      'occupational exposure banding',
      'SafeBridge OEB assessment',
      'ISPE Risk-MaPP banding',
      'HPAPI safety evaluation',
      'potent compound containment',
      'pharma occupational safety',
      'toxicology based OEB',
      'OEB level 1-5 determination',
      'regulatory compliant banding',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: `https://www.indivirtus.com${link}`,
      site_name: 'Indivirtus Occupational Safety',
      published_time: '2023-04-05T00:00:00+05:30',
      modified_time: '2023-07-10T00:00:00+05:30',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Expert OEB Classification Services | Indivirtus',
      description: 'Science-based OEB determination for safe handling of potent active ingredients.',
      image: serviceImage.src,
      site: '@indivirtus',
      creator: '@indivirtus_safety',
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
      author: 'Indivirtus Occupational Safety Team',
    },
  },
  assessmentTypes: [
    'Standard OEB Classification',
    'HPAPI Safety Assessment',
    'Multi-Compound Facility Evaluation',
    'Containment Strategy Development',
    'Occupational Safety Program Design',
    'Regulatory Compliance Review',
  ],
  serviceTiers: [
    {
      name: 'Basic OEB Assessment',
      features: [
        'Single compound evaluation',
        'ISPE or SafeBridge methodology',
        'Basic toxicological review',
        'OEB level determination',
      ],
      deliveryTime: '5-7 business days',
    },
    {
      name: 'Comprehensive Banding Package',
      features: [
        'Multi-method comparison',
        'Detailed hazard profile',
        'Facility containment advice',
        'PPE recommendations',
        'Cross-contamination analysis',
      ],
      deliveryTime: '7-10 business days',
    },
    {
      name: 'Enterprise Solution',
      features: [
        'Facility-wide assessment',
        'Engineering control design',
        'Staff training program',
        'Annual review service',
        'Inspection support',
      ],
      deliveryTime: 'Custom timeline',
    },
  ],
};
