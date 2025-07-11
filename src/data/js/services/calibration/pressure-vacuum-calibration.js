import serviceImage from '@/assets/calibration/pressure-vacuum-calibration.jpg';
const link = '/services/calibration/pressure-vacuum-calibration';

export default {
  slug: 'pressure-vacuum-calibration',
  parentSlug: 'calibration',
  service_id: 'PVC-004',
  report_type: 'NABL Accredited Calibration Certificate',
  title: 'Pharmaceutical Pressure & Vacuum Calibration | NABL Accredited',
  name: 'Pressure & Vacuum Calibration',
  description:
    'ISO/IEC 17025:2017 accredited calibration of pressure/vacuum instruments for GMP-critical pharmaceutical applications (±0.025% accuracy).',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. provides NABL-accredited Pressure & Vacuum Calibration with pharmaceutical-grade precision (0.01 mbar to 700 bar range, ±0.025% FS accuracy). Our comprehensive services cover digital/analog pressure gauges, vacuum transducers, Magnehelic gauges, pressure switches, and safety relief valves critical for autoclaves, bioreactors, and sterile manufacturing. Using deadweight testers, pneumatic comparators, and vacuum standards traceable to NPL/NIST, we ensure compliance with FDA 21 CFR Part 11, EU GMP Annex 1, and ASME B40.100 requirements. Each calibration includes hysteresis testing, repeatability analysis, and full documentation for regulatory audits.',
  estimated_duration: '3–5 working days (24-hour emergency service for critical process instruments)',
  deliverables: [
    'NABL-accredited Calibration Certificate',
    'Measurement Uncertainty Analysis',
    'As-Found/As-Left Data with Compliance Statement',
    'Traceability Documentation to National Standards',
    'Valve Set Pressure Certification (where applicable)',
  ],
  regulatory_basis: [
    'ISO/IEC 17025:2017',
    'NABL Accreditation',
    'USP <1058> Analytical Instrument Qualification',
    'EU GMP Annex 1',
    '21 CFR Part 11',
    'ASME B40.100',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Sterile Pharmaceutical Manufacturing',
    'Biopharmaceutical Production',
    'API Manufacturing',
    'Medical Device Sterilization',
    'Cleanroom Facility Management',
  ],
  expertise_area: [
    'Pressure Metrology',
    'Vacuum System Validation',
    'Process Safety Instrumentation',
    'GMP Compliance',
    'Measurement Uncertainty Analysis',
  ],
  is_active: true,
  pageLink: link,
  icon: '📊💨',
  image: {
    path: serviceImage,
    alt: 'NABL-accredited pressure and vacuum calibration for pharmaceutical equipment',
    caption: 'Precision calibration of pressure transmitters and safety valves in controlled environment',
  },
  gtm: {
    eventCategory: 'Pharma Metrology Services',
    eventAction: 'View Pressure & Vacuum Calibration',
    eventLabel: 'Pharmaceutical Pressure Calibration Inquiry',
    customDimensions: {
      serviceTier: 'NABL Accredited',
      complianceLevel: 'FDA/EMA Compliant',
    },
    dataLayerPush: {
      reportType: ['NABL Certificate', 'GMP Compliance Report'],
      certification: 'ISO/IEC 17025:2017',
      measurementCapability: 'Pressure: ±0.025% | Vacuum: ±0.05%',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Pressure & Vacuum Metrology',
    description:
      'NABL-accredited calibration of pressure and vacuum measurement devices for sterile manufacturing and critical process applications.',
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
      name: 'Pharmaceutical Pressure & Vacuum Calibration',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GMP Pressure Gauge Calibration',
            description:
              'Calibration of analog/digital gauges (0.01 mbar to 700 bar) with hysteresis testing for autoclaves and process vessels',
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
            name: 'Sterile Facility Vacuum Calibration',
            description:
              'Calibration of vacuum transducers and controllers (-1 to 0 bar) for freeze dryers and isolation technology',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cleanroom Differential Pressure Calibration',
            description: 'Magnehelic and digital manometer calibration for ISO 14644 cleanroom monitoring systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Safety Valve Certification',
            description:
              'Set pressure verification and blowdown testing for relief valves on reactors and sterilization equipment',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bioreactor Pressure Transmitter Calibration',
            description:
              '4-20mA signal validation for critical bioprocess monitoring systems with temperature compensation',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹2,500 per instrument (package pricing for facility-wide calibration)',
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
        name: 'What accuracy levels do you achieve for critical process instruments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our NABL-accredited capabilities include: • Pressure gauges: ±0.025% of full scale • Vacuum transducers: ±0.05% • Differential pressure: ±0.1% • Safety valves: ±1% of set pressure—all with documented measurement uncertainty meeting ISO/IEC 17025 requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle calibration for sterile manufacturing equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For sterile applications: • Cleanroom-compatible calibration procedures • VHP-resistant test equipment • Sterile documentation handling • Dedicated tools for isolator/lyophilizer calibration • Full compliance with EU GMP Annex 1 particulate requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you certify safety valves for FDA-regulated processes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our valve certification includes: • ASME Section VIII Div. 1 compliance • Set pressure verification • Blowdown testing • Seat tightness checks • Full documentation package with traceable standards for FDA/EMA audits.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide on-site calibration for installed process instruments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer mobile calibration services for: • Skid-mounted pressure systems • Hard-piped transmitters • Cleanroom Magnehelic gauges • Critical process valves—using portable deadweight testers and NABL-traceable standards with full environmental compensation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should pressure/vacuum instruments be calibrated in GMP environments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recommended intervals: • Critical process gauges: 6 months • Cleanroom monitoring: 12 months • Safety valves: 12-24 months (with in-service checks) • Reference standards: 3-6 months—we provide risk-based schedules aligned with your validation master plan.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL-Accredited Pressure/Vacuum Calibration for Pharma | Indivirtus',
    description:
      'ISO 17025 compliant calibration of pressure/vacuum instruments for sterile manufacturing—autoclaves, bioreactors, and cleanroom monitoring with FDA/EMA compliance.',
    keywords: [
      'NABL pressure calibration',
      'Pharmaceutical vacuum calibration',
      'GMP Magnehelic gauge',
      'Sterile manufacturing metrology',
      '21 CFR Part 11 pressure',
      'Cleanroom differential pressure',
      'Safety valve certification',
      'Indivirtus metrology services',
      'Process instrument calibration',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus Metrology Services',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma-Grade Pressure/Vacuum Calibration',
      description:
        'Precision calibration for sterile manufacturing equipment—autoclaves, isolators, and bioreactors with full regulatory compliance',
      image: serviceImage.src,
      site: '@indivirtus_quality',
    },
    canonicalUrl: `'https://www.indivirtus.com/calibration/pressure-vacuum-calibration'`,
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
    'Pressure Gauge Hysteresis Testing',
    'Vacuum System Accuracy Verification',
    'Differential Pressure Calibration',
    'Safety Valve Set Pressure Certification',
    'Transmitter Signal Linearization',
    'Measurement Uncertainty Analysis',
    'Process Instrument Loop Checking',
  ],
};
