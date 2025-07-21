import serviceImage from '@/assets/calibration/thermal-calibration.jpg';
const link = '/services/calibration/thermal-calibration';

export default {
  slug: 'thermal-calibration',
  parentSlug: 'calibration',
  service_id: 'TC-006',
  report_type: 'NABL Accredited Calibration Certificate',
  title: 'Pharmaceutical Thermal Calibration Services | NABL Accredited',
  name: 'Thermal Calibration',
  description:
    'ISO/IEC 17025:2017 accredited calibration of temperature and humidity instruments for GMP-critical pharmaceutical applications (±0.05°C accuracy).',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. provides NABL-accredited Thermal Calibration with pharmaceutical-grade precision (RTDs: ±0.05°C, Thermocouples: ±0.1°C, RH Sensors: ±0.8%). Our comprehensive services cover temperature sensors (-80°C to 1200°C), IR thermometers (-30°C to 500°C), stability chambers, autoclaves, and cleanroom monitoring systems. Using SPRT primary standards, dry-block calibrators, and humidity generators traceable to NPL/NIST, we ensure compliance with USP <660>, EP 2.2.12, FDA 21 CFR Part 11, and EU GMP Annex 15 requirements. Each calibration includes stability analysis, uniformity mapping, and full documentation for regulatory audits.',
  estimated_duration: '3–5 working days (expedited 48-hour service for critical equipment)',
  deliverables: [
    'NABL-accredited Calibration Certificate',
    'Measurement Uncertainty Analysis',
    'As-Found/As-Left Compliance Data',
    'Temperature Uniformity Mapping Report',
    'Sensor Performance Evaluation',
  ],
  regulatory_basis: [
    'ISO/IEC 17025:2017',
    'NABL Accreditation',
    'USP <660> Containers',
    'EP 2.2.12 Temperature',
    '21 CFR Part 11',
    'EU GMP Annex 15',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Sterile Pharmaceutical Manufacturing',
    'Vaccine Production',
    'Biologics Storage',
    'API Manufacturing',
    'Stability Testing Facilities',
  ],
  expertise_area: [
    'Thermal Metrology',
    'Environmental Monitoring',
    'Stability Chamber Validation',
    'GMP Compliance',
    'Measurement System Analysis',
  ],
  is_active: true,
  pageLink: link,
  icon: '🌡️🧊',
  image: {
    path: serviceImage,
    alt: 'NABL-accredited thermal calibration for pharmaceutical equipment',
    caption: 'Precision calibration of temperature sensors and stability chambers in controlled environment',
  },
  pageContent: {
    hero: {
      heading: 'Precision Thermal Calibration for GMP-Critical Environments',
      tagline:
        'Ensure compliance and accuracy with Indivirtus Healthcare’s NABL-accredited temperature and humidity calibration services.',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., we provide ISO/IEC 17025:2017 accredited thermal calibration for temperature and humidity instruments, delivering pharmaceutical-grade precision for critical applications like stability chambers and cleanrooms.',
    },
    overview: {
      heading: 'Overview of Thermal Calibration Services',
      overviewCards: [
        {
          heading: 'What',
          detail:
            'Our NABL-accredited thermal calibration services validate temperature sensors (-80°C to 1200°C), IR thermometers, humidity sensors (±0.8% RH), stability chambers, autoclaves, and cleanroom monitoring systems with high precision.',
        },
        {
          heading: 'Why',
          detail:
            'Accurate temperature and humidity control is essential for pharmaceutical processes, ensuring product stability, safety, and compliance with stringent GMP and pharmacopeia standards.',
        },
        {
          heading: 'Role',
          detail:
            'We help pharmaceutical companies maintain regulatory compliance, ensure product integrity, and achieve audit readiness with traceable, high-precision calibration services.',
        },
      ],
    },
    approach: {
      heading: 'Our Expert Approach',
      detail: [
        'At Indivirtus, we use SPRT primary standards, dry-block calibrators, and humidity generators traceable to NPL/NIST to deliver exceptional accuracy (RTDs: ±0.05°C, thermocouples: ±0.1°C, RH sensors: ±0.8%). Our team of certified professionals performs stability analysis and uniformity mapping to ensure your instruments meet the highest industry standards.',
        'We customize our calibration services to your specific needs, whether for autoclaves, stability chambers, or cleanroom systems. Our comprehensive documentation supports FDA and EMA audits, giving you confidence in your compliance and operational reliability.',
      ],
    },
    deliverables: {
      heading: 'Service Deliverables',
      itemList: [
        '<strong>NABL-accredited Calibration Certificate:</strong> Official certification ensuring compliance with ISO/IEC 17025:2017 standards.',
        '<strong>Measurement Uncertainty Analysis:</strong> Detailed analysis to quantify measurement reliability and accuracy.',
        '<strong>As-Found/As-Left Compliance Data:</strong> Comprehensive report comparing pre- and post-calibration measurements with compliance details.',
        '<strong>Temperature Uniformity Mapping Report:</strong> Detailed report assessing temperature consistency across chambers or environments.',
        '<strong>Sensor Performance Evaluation:</strong> In-depth evaluation of sensor accuracy and reliability for optimal performance.',
      ],
    },
    compliance: {
      heading: 'Regulatory Compliance & Guidelines',
      detail: [
        'Our thermal calibration services adhere to stringent global standards, ensuring your temperature and humidity instruments meet regulatory requirements for GMP-critical applications.',
      ],
      itemList: [
        'ISO/IEC 17025:2017: International standard for calibration and testing laboratories.',
        'NABL Accreditation: Ensures technical competence and reliability in calibration.',
        'USP <660> Containers: Standards for pharmaceutical container performance.',
        'EP 2.2.12 Temperature: European Pharmacopoeia guidelines for temperature measurement.',
        '21 CFR Part 11: FDA regulations for electronic records and signatures.',
        'EU GMP Annex 15: European guidelines for qualification and validation.',
      ],
    },
    applications: {
      heading: 'Applications & Use Cases',
      detail: [
        'Our thermal calibration services are vital for pharmaceutical companies involved in drug development, manufacturing, and storage. Accurate temperature and humidity control is critical for maintaining product stability and quality in GMP-critical environments.',
        'Use cases include calibrating sensors for stability chambers to ensure consistent storage conditions, validating autoclaves for sterilization processes, and monitoring cleanroom environments for compliance. Our services support regulatory audits, product launches, and global market compliance.',
      ],
    },
    conclusion: {
      heading: 'Why Choose Indivirtus Healthcare',
      detail: [
        'Our team of certified calibration experts and toxicologists brings extensive global regulatory experience to every project. We deliver scientifically defensible results with rapid turnaround times, ensuring your operations remain efficient and compliant.',
        'At Indivirtus, we prioritize confidentiality and adhere to industry best practices, safeguarding your sensitive data and equipment. Our commitment to precision, regulatory compliance, and customer satisfaction makes us the trusted choice for thermal calibration needs.',
      ],
    },
    cta: {
      heading: 'Ready to Ensure GMP-Compliant Environments?',
      tagline:
        'Partner with Indivirtus for NABL-accredited thermal calibration services tailored to your pharmaceutical needs.',
      aria: 'Contact Indivirtus for thermal calibration services',
    },
  },
  gtm: {
    eventCategory: 'Pharma Metrology Services',
    eventAction: 'View Thermal Calibration',
    eventLabel: 'Pharmaceutical Thermal Calibration Inquiry',
    customDimensions: {
      serviceTier: 'NABL Accredited',
      complianceLevel: 'FDA/EMA Compliant',
    },
    dataLayerPush: {
      reportType: ['NABL Certificate', 'GMP Compliance Report'],
      certification: 'ISO/IEC 17025:2017',
      measurementCapability: 'Temperature: ±0.05°C | RH: ±0.8%',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Thermal & Humidity Metrology',
    description:
      'NABL-accredited calibration of temperature and humidity measurement devices for pharmaceutical manufacturing and quality control.',
    serviceType: ['CalibrationService', 'LaboratoryService'],
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus Metrology Laboratory',
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
      serviceUrl: link,
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
      serviceEmail: 'metrology@indivirtus.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pharmaceutical Thermal Calibration',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GMP Temperature Sensor Calibration',
            description:
              'Calibration of RTDs, thermocouples (-80°C to 1200°C) with SPRT traceability for autoclaves and freeze dryers',
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
            name: 'Stability Chamber Validation',
            description:
              'Temperature mapping (2°C-8°C, 25°C/60%RH) with 3D uniformity analysis per ICH Q1A requirements',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cleanroom RH Sensor Calibration',
            description:
              'Humidity calibration (10-95% RH) for sterile manufacturing areas with NIST-traceable standards',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IR Thermometer Certification',
            description: 'Non-contact thermometer calibration for personnel monitoring and surface temperature checks',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Thermal Process Validation',
            description: 'Autoclave and depyrogenation tunnel temperature profiling for sterilization processes',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹2,200 per sensor (volume discounts available)',
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
        name: 'What accuracy levels do you achieve for pharmaceutical temperature sensors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our NABL-accredited capabilities include: • Platinum RTDs: ±0.05°C • Thermocouples: ±0.1°C • Infrared thermometers: ±0.5°C • Data loggers: ±0.2°C—all with documented measurement uncertainty meeting ISO/IEC 17025 requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you perform stability chamber temperature mapping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mapping protocol includes: • 3D sensor placement per ICH Q1A • Minimum 24-hour monitoring • Hot/Cold spot identification • Load condition testing • Full statistical analysis with compliance statements for regulatory submissions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you calibrate ultra-low temperature freezers for vaccine storage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in: • -80°C freezer calibration • NIST-traceable standards • Temperature uniformity mapping • Alarm verification • Documentation meeting WHO EPI standards for vaccine storage compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide on-site calibration for installed autoclave sensors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer: • In-situ calibration of fixed thermocouples • Portable dry-block calibrators • Steam exposure simulation • Minimal downtime procedures • Documentation packages suitable for validation protocols.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should GMP temperature sensors be calibrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recommended intervals: • Critical process sensors: 3-6 months • Stability chambers: 12 months • Warehouse monitors: 6 months • Based on risk assessment—we provide customized schedules aligned with your validation master plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is NABL-accredited thermal calibration, and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NABL-accredited thermal calibration ensures temperature and humidity instruments meet precise measurement standards per ISO/IEC 17025:2017. This is critical for pharmaceutical applications to maintain product quality, safety, and regulatory compliance in GMP-critical environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which instruments can Indivirtus calibrate for temperature and humidity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We calibrate a wide range of instruments, including RTDs (±0.05°C), thermocouples (±0.1°C), RH sensors (±0.8%), IR thermometers, stability chambers, autoclaves, and cleanroom monitoring systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure regulatory compliance for thermal calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services comply with ISO/IEC 17025:2017, USP <660>, EP 2.2.12, FDA 21 CFR Part 11, and EU GMP Annex 15, ensuring your instruments are audit-ready for FDA and EMA inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are included with your thermal calibration services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each calibration includes a NABL-accredited certificate, measurement uncertainty analysis, as-found/as-left compliance data, temperature uniformity mapping report, and sensor performance evaluation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should temperature and humidity instruments be calibrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calibration frequency depends on instrument usage, environmental conditions, and regulatory requirements. We provide tailored recommendations to ensure ongoing accuracy and compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is temperature uniformity mapping, and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Temperature uniformity mapping assesses the consistency of temperature across a chamber or environment, ensuring compliance with GMP standards and reliable performance in critical pharmaceutical processes.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL-Accredited Thermal Calibration for Pharma | Indivirtus',
    description:
      'ISO 17025 compliant calibration of temperature and humidity instruments for sterile manufacturing—autoclaves, freeze dryers, and stability chambers with FDA/EMA compliance.',
    keywords: [
      'NABL thermal calibration',
      'Pharmaceutical temperature calibration',
      'GMP stability chamber mapping',
      'USP <660> compliance',
      '21 CFR Part 11 temperature',
      'Vaccine storage calibration',
      'Autoclave sensor verification',
      'Indivirtus metrology services',
      'Cleanroom RH calibration',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus Metrology Services',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma-Grade Thermal Calibration',
      description:
        'Precision calibration of temperature and humidity instruments for compliance with USFDA, EU GMP, and pharmacopeia standards',
      image: serviceImage.src,
      site: '@indivirtus_quality',
    },
    canonicalUrl: `'https://www.indivirtus.com/calibration/thermal'`,
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
    'Temperature Sensor Accuracy Verification',
    'Chamber Uniformity Mapping',
    'Humidity Sensor Performance Testing',
    'Thermal Process Profiling',
    'Measurement Uncertainty Calculation',
    'Sensor Response Time Analysis',
    'Environmental Monitoring Validation',
  ],
};
