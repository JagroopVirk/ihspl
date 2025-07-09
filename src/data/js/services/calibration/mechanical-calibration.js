import serviceImage from '@/assets/calibration/mechanical-calibration.jpg';
const link = '/services/calibration/mechanical-calibration';

export default {
  slug: 'mechanical-calibration',
  parentSlug: 'calibration',
  service_id: 'MC-003',
  report_type: 'NABL Accredited Calibration Certificate',
  title: 'Pharmaceutical Mechanical Calibration Services | NABL Accredited',
  name: 'Mechanical Calibration',
  description:
    'ISO/IEC 17025:2017 accredited calibration of dimensional, speed, and acoustic instruments for GMP-compliant pharmaceutical operations.',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. provides NABL-accredited Mechanical Calibration with pharmaceutical-grade precision (±1μm for dimensional tools, ±0.1% for tachometers, ±0.5dB for sound meters). Our comprehensive services cover micrometers (0-300mm), calipers (0-1000mm), tachometers (10-100,000 RPM), sound level meters (30-130dB), and torque wrenches (0.1-300Nm). Using laser interferometers, accredited reference standards, and automated test systems traceable to NIST, we ensure compliance with ISO 9001, ISO 13485, and 21 CFR Part 820 requirements. Each calibration includes environmental compensation, measurement uncertainty analysis, and full documentation for regulatory audits.',
  estimated_duration: '3–5 working days (emergency 24-hour service available for critical equipment)',
  deliverables: [
    'NABL-accredited Calibration Certificate',
    'Measurement Uncertainty Analysis Report',
    'As-Found/As-Left Compliance Data',
    'Traceability Documentation to NPL/NIST',
    'Recommended Adjustment Intervals Based on Usage Patterns',
  ],
  regulatory_basis: [
    'ISO/IEC 17025:2017',
    'NABL Accreditation',
    '21 CFR Part 820 (Medical Devices)',
    'EU GMP Annex 11',
    'ISO 9001:2015',
    'ISO 13485:2016',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Pharmaceutical Manufacturing',
    'Medical Device Production',
    'Biotechnology Research',
    'Cleanroom Equipment Validation',
    'Packaging Quality Control',
  ],
  expertise_area: [
    'Dimensional Metrology',
    'Rotational Speed Measurement',
    'Acoustic Analysis',
    'GMP Compliance',
    'Measurement System Analysis',
  ],
  is_active: true,
  pageLink: link,
  icon: '📏🎚️',
  image: {
    path: serviceImage,
    alt: 'NABL-accredited mechanical calibration for pharmaceutical equipment',
    caption: 'Precision calibration of micrometers and tachometers in controlled laboratory environment',
  },
  gtm: {
    eventCategory: 'Pharma Metrology Services',
    eventAction: 'View Mechanical Calibration',
    eventLabel: 'Pharmaceutical Mechanical Calibration Inquiry',
    customDimensions: {
      serviceTier: 'NABL Accredited',
      complianceLevel: 'FDA/EMA Compliant',
    },
    dataLayerPush: {
      reportType: ['NABL Certificate', 'GMP Compliance Report'],
      certification: 'ISO/IEC 17025:2017',
      measurementCapability: 'Dimensional: ±1μm | Tachometry: ±0.1%',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Mechanical Metrology',
    description:
      'NABL-accredited calibration of dimensional, speed, and acoustic measurement devices for pharmaceutical manufacturing and quality control.',
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
      name: 'Pharmaceutical Mechanical Calibration',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Precision Dimensional Calibration',
            description:
              'Micrometer, caliper, and gauge calibration with laser interferometry (1μm accuracy) for tablet tooling and device components',
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
            name: 'Pharma Tachometry Services',
            description:
              'Calibration of tachometers for centrifuges, mixers, and packaging lines (±0.1% accuracy) with RPM traceability',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cleanroom Acoustics Calibration',
            description:
              'Sound level meter calibration (Type 1/2) for HVAC systems, isolators, and sterile area monitoring per ISO 3746',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Torque Tool Certification',
            description:
              'Calibration of torque wrenches and screwdrivers (0.5-300Nm) for critical assembly processes in device manufacturing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Surface Roughness Verification',
            description:
              'Profilometer calibration for tablet compression tooling and medical device surfaces (Ra 0.05-25μm range)',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹2,200 per instrument (package deals available)',
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
        name: 'What accuracy levels do you achieve for dimensional calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our NABL-accredited capabilities include: • Micrometers: ±1μm accuracy • Vernier calipers: ±2μm • Dial indicators: ±3μm • Height gauges: ±5μm—all measurements include temperature-compensated uncertainty budgets and are traceable to national standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you calibrate tachometers for high-speed centrifuges?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use: • Optical tachometers with stroboscopic verification • Encoder-based systems up to 100,000 RPM • Traceable RPM standards • Vibration compensation techniques—providing ±0.1% accuracy with documentation suitable for validation protocols.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you calibrate sound meters used in cleanroom validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services cover: • Type 1 precision sound meters (30-130dB) • Frequency-weighted measurements (A/C/Z scales) • Octave band analysis • Documentation meeting ISO 14644 cleanroom standards for noise level validation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide on-site calibration for production equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer mobile calibration services for: • In-place tachometer verification • Production line dimensional checks • Cleanroom sound level monitoring • Torque tool certification—using portable NABL-traceable standards with full environmental condition recording.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should mechanical measuring instruments be calibrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recommended intervals: • Critical dimensional tools: 6 months • Production tachometers: 12 months • Sound level meters: 12 months • Torque devices: 3-6 months (or per usage/risk assessment)—we provide customized schedules based on your usage patterns and quality requirements.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL-Accredited Mechanical Calibration for Pharma | Indivirtus',
    description:
      'ISO 17025 compliant calibration of micrometers, tachometers, sound meters, and torque tools for pharmaceutical manufacturing—FDA/EMA compliant with full traceability.',
    keywords: [
      'NABL mechanical calibration',
      'Pharmaceutical dimensional calibration',
      'GMP tachometer verification',
      'Cleanroom sound meter calibration',
      '21 CFR Part 820 metrology',
      'Micrometer calibration services',
      'Precision torque tool certification',
      'Indivirtus metrology lab',
      'Pharma equipment calibration',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus Metrology Services',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma-Grade Mechanical Calibration',
      description:
        'Precision calibration of dimensional, speed, and acoustic instruments for compliance with USFDA, EU GMP, and ISO 13485',
      image: serviceImage.src,
      site: '@indivirtus_quality',
    },
    canonicalUrl: `'https://www.indivirtus.com/calibration/mechanical'`,
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
    'Dimensional Accuracy Verification',
    'Tachometer Linearity Testing',
    'Acoustic Frequency Response Analysis',
    'Torque Tool Repeatability Validation',
    'Measurement Uncertainty Calculation',
    'Surface Roughness Profiling',
    'Instrument Resolution Verification',
  ],
};
