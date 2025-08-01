import serviceImage from '@/assets/calibration.png';
const link = '/services/calibration/electro-technical-calibration';

export default {
  slug: 'electro-technical-calibration',
  parentSlug: 'calibration',
  service_id: 'ETC-001',
  report_type: 'Calibration Certificate',
  title: 'Electro-Technical Calibration Services for Pharma & Biotech',
  name: 'Electro-Technical Calibration',
  description:
    'NABL-accredited calibration of electrical parameters for critical equipment, ensuring measurement accuracy and regulatory compliance.',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. delivers ISO/IEC 17025:2017 accredited Electro-Technical Calibration with -grade precision. Our specialized services cover comprehensive electrical parameter validation including AC/DC current, voltage , resistance, inductance , and time/frequency. Utilizing certified reference standards and automated calibration systems, we ensure your laboratory instruments, production equipment, and quality control devices meet stringent GMP, WHO, and pharmacopeia requirements while maintaining full measurement traceability to NIST standards.',
  estimated_duration: '3-5 working days (expedited options available)',
  deliverables: [
    'NABL-accredited Calibration Certificate',
    'Detailed Traceability Matrix',
    'As-Found/As-Left Data Report',
    'Measurement Uncertainty Analysis',
    'Recommendations for Optimal Calibration Intervals',
  ],
  regulatory_basis: [
    'ISO/IEC 17025:2017',
    'NABL (ISO 17025 compliant)',
    '21 CFR Part 11',
    'EU GMP Annex 11',
    'WHO TRS 986',
  ],
  requires_data_from_client: true,
  target_industry: [' Manufacturing', 'Biotechnology', 'Medical Device Production', 'Clinical Research Organizations'],
  expertise_area: [
    'Electrical Metrology',
    ' Compliance',
    'Measurement Uncertainty Analysis',
    'Quality System Validation',
  ],
  is_active: true,
  pageLink: link,
  icon: '⚡',
  image: {
    path: serviceImage,
    alt: 'NABL-accredited electro-technical calibration of testing equipment',
    caption: 'Precision calibration of multimeters and electrical test equipment in controlled laboratory environment',
  },
  pageContent: {
    hero: {
      heading: "Precision Calibration for <span class='halfHeading'> Excellence</span>",
      tagline: 'Ensure Compliance with NABL-Accredited Calibration Solutions',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>NABL-accredited calibration services</strong> deliver ISO/IEC 17025:2017-compliant validation for equipment. We ensure <strong>measurement accuracy</strong> and compliance with global regulatory standards, safeguarding the integrity of your processes and products.',
    },
    overview: {
      heading: "Mastering Calibration <span class='halfHeading'>Excellence</span>",
      overviewCards: [
        {
          heading: 'What is Calibration?',
          detail:
            'Our NABL-accredited calibration services validate critical electrical parameters for equipment, ensuring <strong>precision in measurements</strong> for AC/DC current, voltage, resistance, inductance, and time/frequency, aligned with global standards.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Accurate calibration is vital for maintaining <strong>process integrity</strong>, ensuring product safety, and meeting stringent regulatory requirements like GMP, WHO, and pharmacopeia standards, reducing risks of non-compliance.',
        },
        {
          heading: 'Our Role in Your Compliance',
          detail:
            'Indivirtus Healthcare Services provides <strong>traceable, high-precision calibration</strong> to enhance operational efficiency and ensure audit readiness, empowering companies with reliable and compliant equipment performance.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Calibration Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, we deliver <strong>precision-driven calibration</strong> using state-of-the-art automated systems and certified reference standards. Our process validates electrical parameters with -grade accuracy, ensuring traceability to NIST standards and compliance with global benchmarks.',
        'We adopt a tailored approach, understanding your equipment’s unique requirements to provide <strong>customized calibration solutions</strong>. From laboratory instruments to production machinery, our certified professionals ensure your equipment operates within specified tolerances, minimizing risks and enhancing <strong>quality control</strong> for seamless operations.',
      ],
    },
    deliverables: {
      heading: "Calibration Service <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>NABL-Accredited Calibration Certificate</strong>: Official certification proving compliance with ISO/IEC 17025:2017 standards.',
        '<strong>Detailed Traceability Matrix</strong>: Comprehensive documentation linking measurements to NIST standards.',
        '<strong>As-Found/As-Left Data Report</strong>: Detailed comparison of pre- and post-calibration measurements.',
        '<strong>Measurement Uncertainty Analysis</strong>: In-depth analysis to quantify measurement reliability.',
        '<strong>Optimal Calibration Interval Recommendations</strong>: Tailored guidance to maintain equipment accuracy and compliance.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our calibration services adhere to stringent global standards, ensuring your equipment meets <strong>regulatory requirements</strong> and is audit-ready. By aligning with industry-leading guidelines, we provide confidence in the accuracy and compliance of your operations.',
      ],
      itemList: [
        '<strong>ISO/IEC 17025:2017</strong>: International standard for testing and calibration laboratories.',
        '<strong>NABL (ISO 17025 Compliant)</strong>: Accreditation ensuring technical competence and reliability.',
        '<strong>21 CFR Part 11</strong>: U.S. FDA regulations for electronic records and signatures.',
        '<strong>EU GMP Annex 11</strong>: European guidelines for computerized systems in GMP environments.',
        '<strong>WHO TRS 986</strong>: World Health Organization standards for quality assurance.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our calibration services are essential for companies engaged in <strong>drug development</strong>, manufacturing, and quality control. Whether operating research labs, production facilities, or quality assurance departments, our services ensure <strong>accurate and reliable results</strong>. Key use cases include calibrating analytical instruments for drug formulation, validating production equipment for consistent output, and ensuring quality control devices meet pharmacopeia standards for regulatory audits and global market compliance.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services combines certified expertise and global regulatory knowledge to deliver unmatched calibration solutions. Our team of calibration specialists ensures <strong>scientifically defensible results</strong>, rapid turnaround times, and strict confidentiality to protect your proprietary data. With a commitment to precision and compliance, we help you achieve <strong>operational excellence</strong> and maintain trust in your processes.',
      ],
    },
    cta: {
      heading: "Ready to Achieve <span class='halfHeading'>Precision Compliance?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for NABL-Accredited Calibration Excellence',
      aria: 'Contact us to discuss your calibration needs',
    },
  },
  gtm: {
    eventCategory: 'Premium Calibration Services',
    eventAction: 'View Electro-Technical Calibration Details',
    eventLabel: 'Electrical Calibration Inquiry',
    customDimensions: {
      serviceTier: 'Premium',
      accreditationLevel: 'NABL',
    },
    dataLayerPush: {
      reportType: ['NABL Certificate', 'Compliance Report'],
      certification: 'ISO/IEC 17025:2017',
      measurementCapability: 'DC Voltage | Resistance',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ' Electro-Technical Calibration',
    description:
      'NABL-accredited calibration services for electrical measurement devices used in quality control and manufacturing processes.',
    serviceType: ['CalibrationService', 'LaboratoryService'],
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus Healthcare Services',
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
      name: ['India', 'United States', 'European Union', 'Middle East'],
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
        addressCountry: 'IN',
      },
      serviceSmsNumber: '+91-9131925456',
      serviceEmail: 'director@indivirtus.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: ' Electrical Calibration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC/DC Current Calibration',
            description:
              'Precision calibration from μA to kA ranges with ±0.5% accuracy for compliance with pharmacopeia requirements',
            provider: {
              '@type': 'Organization',
              name: 'Indivirtus NABL Accredited Lab',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GMP Voltage Calibration',
            description:
              'Traceable voltage calibration from mV to kV ranges with documented uncertainty budgets for audit readiness',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Critical Resistance Calibration',
            description:
              'Four-wire resistance measurement calibration for precision circuits in stability chambers and HPLC systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Inductance Validation',
            description:
              'Calibration of inductive components in sterilization equipment and electromagnetic compatibility test systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pharma-Grade Time/Frequency Calibration',
            description:
              'Calibration of timers, counters and frequency generators with NIST-traceable atomic clock references',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹2,500 per parameter (volume discounts available)',
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
        name: 'What measurement capabilities do you offer for electrical calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our NABL-accredited lab provides: • DC Voltage • Resistance • AC Current • Frequency with full uncertainty analysis meeting ISO/IEC 17025 requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure compliance with 21 CFR Part 11 for electronic calibration records?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our calibration management system features: • Electronic signatures • Audit trails • Data integrity checks • Role-based access control • Automated report generation that fully complies with FDA 21 CFR Part 11 and EU GMP Annex 11 requirements.',
        },
      },
      {
        '@type': 'Question',
        name: "What's included in your calibration certificate for audit purposes?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each NABL certificate includes: • Measurement results with uncertainties • Equipment used with calibration dates • Environmental conditions • Traceability statement to NIST • Authorized signatory • Compliance statement with relevant standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide calibration services for PAT (Process Analytical Technology) equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in calibration of electrical components in PAT systems including: • In-line sensors • Process analyzers • Control systems • Data acquisition units with IQ/OQ documentation support for continuous manufacturing applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What turnaround times can you guarantee for urgent calibration needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer: • Standard: 3-5 business days • Priority: 48 hours (surcharge applies) • Emergency: 24-hour service (for critical equipment failure situations) with proper documentation maintained for all expedited services.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is NABL-accredited calibration, and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NABL-accredited calibration ensures that your equipment’s measurements are accurate and traceable to national and international standards, as per ISO/IEC 17025:2017. This is critical for companies to meet regulatory requirements, ensure product safety, and maintain audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure traceability in calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use certified reference standards traceable to NIST, providing a detailed traceability matrix with each calibration. This ensures that your equipment measurements are globally recognized and compliant with regulatory standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of equipment can you calibrate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services cover a wide range of equipment, including laboratory instruments, production machinery, and quality control devices, with parameters like AC/DC current, voltage, resistance, inductance, and time/frequency.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should equipment be calibrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calibration intervals depend on equipment usage, manufacturer recommendations, and regulatory requirements. We provide tailored recommendations for optimal calibration intervals based on your specific equipment and processes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does your calibration service support regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our calibration services adhere to ISO/IEC 17025:2017, 21 CFR Part 11, EU GMP Annex 11, and WHO TRS 986, ensuring your equipment meets global regulatory standards and is audit-ready.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL-Accredited Electro-Technical Calibration | Indivirtus',
    description:
      'ISO 17025 compliant calibration of electrical measurement devices for QC labs and manufacturing – AC/DC current, voltage, resistance, inductance with full traceability.',
    keywords: [
      'NABL accredited electrical calibration',
      ' equipment calibration',
      'GMP compliant calibration services',
      'Traceable electrical measurements',
      '21 CFR Part 11 calibration',
      'Process validation calibration',
      'Audit-ready calibration certificates',
      'Indivirtus metrology lab',
      'Measurement uncertainty analysis',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus Healthcare Services',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Electro-Technical Calibration Services',
      description:
        'Precision calibration of electrical parameters for compliance with USFDA, EU GMP, and WHO regulations',
      image: `https://www.indivirtus.com${link}.jpg`,
      site: '@indivirtus_quality',
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
      },
    },
  },
  assessmentTypes: [
    'AC/DC Current Accuracy Verification',
    'Voltage Measurement System Validation',
    'Precision Resistance Calibration',
    'Inductance Characterization',
    'Time Interval Analysis',
    'Frequency Stability Testing',
    'Electrical Safety Parameter Verification',
  ],
};
