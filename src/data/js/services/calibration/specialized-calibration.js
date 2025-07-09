import serviceImage from '@/assets/calibration/specialized-calibration.jpg';
const link = '/services/calibration/specialized-calibration';

export default {
  slug: 'specialized-calibration',
  parentSlug: 'calibration',
  service_id: 'SC-005',
  report_type: 'NABL Accredited Calibration Certificate',
  title: 'Pharmaceutical Specialized Calibration Services | NABL Accredited',
  name: 'Specialized Calibration',
  description:
    'ISO/IEC 17025:2017 accredited calibration of electrochemical and flow instruments for GMP-critical pharmaceutical applications (±0.01 pH accuracy).',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. provides NABL-accredited Specialized Calibration with pharmaceutical-grade precision (pH: ±0.01, Conductivity: ±0.5% FS, Flow: ±0.25% RD). Our comprehensive services cover laboratory and process instruments including pH/ORP meters (0-14 pH, ±2000mV), conductivity/TDS meters (0.01μS/cm-1000mS/cm), and flow meters (0.1mL/min-1000L/min). Using NIST-traceable reference standards and automated calibration systems, we ensure compliance with USP <645>, EP 2.2.38, FDA 21 CFR Part 11, and WHO-GXP requirements. Each calibration includes temperature compensation, electrode slope verification, and full documentation for regulatory audits.',
  estimated_duration: '3–5 working days (expedited 48-hour service available)',
  deliverables: [
    'NABL-accredited Calibration Certificate',
    'Measurement Uncertainty Analysis',
    'As-Found/As-Left Compliance Data',
    'Traceability Documentation to NIST/NPL',
    'Electrode Performance Evaluation Report',
  ],
  regulatory_basis: [
    'ISO/IEC 17025:2017',
    'NABL Accreditation',
    'USP <645> Water Conductivity',
    'EP 2.2.38 Conductivity',
    '21 CFR Part 11',
    'WHO Technical Report Series 992',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Pharmaceutical Manufacturing',
    'Biopharmaceutical Production',
    'Sterile Water Systems',
    'Cleanroom Monitoring',
    'Process Analytical Technology (PAT)',
  ],
  expertise_area: [
    'Electrochemical Metrology',
    'Process Instrumentation',
    'Water System Validation',
    'GMP Compliance',
    'Measurement System Analysis',
  ],
  is_active: true,
  pageLink: link,
  icon: '🧪🌡️',
  image: {
    path: serviceImage,
    alt: 'NABL-accredited specialized calibration for pharmaceutical instruments',
    caption: 'Precision calibration of pH meters and conductivity probes in controlled laboratory environment',
  },
  gtm: {
    eventCategory: 'Pharma Metrology Services',
    eventAction: 'View Specialized Calibration',
    eventLabel: 'Pharmaceutical Electrochemical Calibration Inquiry',
    customDimensions: {
      serviceTier: 'NABL Accredited',
      complianceLevel: 'FDA/EMA Compliant',
    },
    dataLayerPush: {
      reportType: ['NABL Certificate', 'GMP Compliance Report'],
      certification: 'ISO/IEC 17025:2017',
      measurementCapability: 'pH: ±0.01 | Conductivity: ±0.5%',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Electrochemical & Flow Calibration',
    description:
      'NABL-accredited calibration of pH, conductivity, ORP, TDS, and flow measurement devices for pharmaceutical quality control and manufacturing.',
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
      serviceEmail: 'director@indivirtus.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pharmaceutical Specialized Calibration',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GMP pH Meter Calibration',
            description:
              'Multi-point calibration (pH 4.01, 7.00, 9.21) with temperature compensation and electrode slope verification per USP requirements',
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
            name: 'Water System Conductivity Calibration',
            description:
              'Calibration from ultrapure (0.055μS/cm) to concentrated solutions (1000mS/cm) for USP <645> and EP 2.2.38 compliance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process ORP Validation',
            description:
              'Redox potential calibration for CIP/SIP systems and water for injection (WFI) monitoring (±5mV accuracy)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pharmaceutical Flow Meter Calibration',
            description:
              'Gravimetric and volumetric calibration of ultrasonic, magnetic, and Coriolis flow meters for process validation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TDS Meter Certification',
            description:
              'Calibration against NIST-traceable NaCl standards for purified water and clean steam monitoring',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹1,800 per parameter (volume discounts available)',
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
        name: 'What reference standards do you use for pH calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use NIST-traceable pH buffers (4.01, 7.00, 9.21 at 25°C) with: • Certified accuracy of ±0.01 pH • Documentation of batch certification • Temperature compensation tables • Stability verification for GMP compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle conductivity calibration for USP Purified Water?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For USP <645> compliance: • Specialized low-conductivity calibration (0.055μS/cm) • Temperature compensation to 25°C • Cell constant verification • Documentation of reference solution traceability • Measurement uncertainty analysis for audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you calibrate installed process flow meters without removal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer: • In-situ calibration of magnetic flow meters • Clamp-on ultrasonic verification • Minimal disruption protocols • Documentation of field conditions • Compliance with process validation requirements—all without removing meters from service.',
        },
      },
      {
        '@type': 'Question',
        name: "What's included in your electrode performance report?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our comprehensive report includes: • Slope efficiency (%) • Response time • Asymmetry potential • Temperature compensation accuracy • Recommended replacement criteria—with all data traceable to national standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should pharmaceutical water system meters be calibrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recommended intervals: • Critical process pH/conductivity: 3 months • Laboratory meters: 6 months • Validation studies: Pre/post campaign • Based on risk assessment—we provide customized schedules aligned with your water system validation protocol.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL-Accredited Specialized Calibration for Pharma | Indivirtus',
    description:
      'ISO 17025 compliant calibration of pH, conductivity, ORP, and flow meters for pharmaceutical water systems and manufacturing—USP/EP compliant with full traceability.',
    keywords: [
      'NABL pH calibration',
      'Pharmaceutical conductivity calibration',
      'GMP ORP validation',
      'USP <645> compliance',
      '21 CFR Part 11 metrology',
      'WFI system calibration',
      'Process flow meter verification',
      'Indivirtus metrology services',
      'Electrochemical instrument calibration',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus Metrology Services',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma-Grade Specialized Calibration',
      description:
        'Precision calibration of electrochemical instruments for compliance with USFDA, EU GMP, and pharmacopeia standards',
      image: serviceImage.src,
      site: '@indivirtus_quality',
    },
    canonicalUrl: `'https://www.indivirtus.com/calibration/specialized-calibration'`,
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
    'pH Electrode Performance Validation',
    'Conductivity Cell Constant Verification',
    'Redox Potential Accuracy Testing',
    'Flow Meter Linearity Assessment',
    'Temperature Compensation Analysis',
    'Measurement Uncertainty Calculation',
    'Process Instrument Loop Checking',
  ],
};
