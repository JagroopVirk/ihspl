import serviceImage from '@/assets/calibration/mass-volume-calibration.jpg';
const link = '/services/calibration/mass-volume-calibration';

export default {
  slug: 'mass-volume-calibration',
  parentSlug: 'calibration',
  service_id: 'MVC-002',
  report_type: 'NABL Accredited Calibration Certificate',
  title: 'Pharmaceutical-Grade Mass & Volume Calibration Services',
  name: 'Mass & Volume Calibration',
  description:
    'ISO/IEC 17025:2017 accredited calibration of weighing instruments and volumetric devices for GMP-compliant pharmaceutical operations.',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. delivers NABL-accredited Mass & Volume Calibration with pharmaceutical-grade precision (up to 0.001mg for balances, ±0.1% for volumetric devices). Our comprehensive services cover analytical balances (0.1mg–30kg), microbalances, pipettes (0.1μL–100mL), burettes, and certified weights (Class E1 to M3). Using automated gravimetric systems and reference standards traceable to NIST, we ensure compliance with USP <41>, USP <1251>, ISO 8655, and OIML R111 standards. Each calibration includes measurement uncertainty analysis, environmental condition recording, and full documentation for FDA/EMA audit readiness.',
  estimated_duration: '3–5 working days (express 24/48-hour service available)',
  deliverables: [
    'NABL-accredited Calibration Certificate',
    'Measurement Uncertainty Analysis Report',
    'As-Found/As-Left Data with Compliance Statement',
    'Traceability Documentation to National Standards',
    'Recommended Calibration Interval Based on Usage',
  ],
  regulatory_basis: [
    'ISO/IEC 17025:2017',
    'NABL (ISO 17025 compliant)',
    'USP General Chapters <41> & <1251>',
    'EU GMP Annex 11',
    '21 CFR Part 11',
    'OIML R111',
  ],
  requires_data_from_client: true,
  target_industry: [
    'Pharmaceutical Manufacturing',
    'Biotechnology Research',
    'Clinical Trial Laboratories',
    'Medical Device Production',
    'Contract Research Organizations',
  ],
  expertise_area: [
    'Gravimetric Analysis',
    'Measurement Uncertainty Calculation',
    'Pharmaceutical Metrology',
    'Quality Control Instrumentation',
    'Regulatory Compliance',
  ],
  is_active: true,
  pageLink: link,
  icon: '🧪⚖️',
  image: {
    path: serviceImage,
    alt: 'NABL-accredited pharmaceutical mass and volume calibration',
    caption: 'Precision calibration of analytical balances and pipettes in controlled environment',
  },
  gtm: {
    eventCategory: 'Pharma Metrology Services',
    eventAction: 'View Mass & Volume Calibration',
    eventLabel: 'Pharmaceutical Weighing Calibration Inquiry',
    customDimensions: {
      serviceTier: 'NABL Accredited',
      complianceLevel: 'USP/EP/JP Compliant',
    },
    dataLayerPush: {
      reportType: ['NABL Certificate', 'GMP Compliance Report'],
      certification: 'ISO/IEC 17025:2017',
      measurementCapability: 'Balance: ±0.001mg | Pipettes: ±0.1%',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Mass & Volume Metrology',
    description:
      'NABL-accredited calibration of weighing and volumetric instruments for drug development, manufacturing, and quality control applications.',
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
      name: 'Pharmaceutical Mass & Volume Calibration',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Analytical Balance Calibration',
            description:
              'Precision calibration from 0.1mg to 30kg capacities with repeatability, eccentricity, and linearity testing per USP <41>',
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
            name: 'Microbalance Validation',
            description:
              'Sub-microgram calibration (0.001mg resolution) for dissolution testing and reference standard preparation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pipette Calibration',
            description:
              'Gravimetric calibration of single/multi-channel pipettes (0.1μL–10mL) with Z-factor calculation per ISO 8655',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Volumetric Glassware Certification',
            description:
              'Class A/B glassware calibration with temperature-compensated measurements for USP/EP compliance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GMP Weights Certification',
            description: 'Class E1 to M3 weight calibration with density determination for buoyancy correction',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD', 'EUR'],
      price: 'From ₹1,800 per instrument (volume discounts available)',
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
        name: 'What measurement standards do you follow for balance calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We adhere to: • USP <41> for balance qualification • OIML R76 for non-automatic weighing instruments • ISO 17025 for measurement uncertainty • Manufacturer specifications with strict adherence to repeatability (≤2%), eccentricity (≤1%), and linearity (≤0.1%) requirements for pharmaceutical applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle pipette calibration for viscous liquids?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For viscous solutions: • We use density-corrected gravimetric methods • Apply Z-factor corrections • Provide viscosity-specific calibration protocols • Include uncertainty contributions from fluid properties in our reports to ensure accurate volume delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support 21 CFR Part 11 compliant electronic records?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our calibration management system provides: • Electronic signatures with dual authentication • Audit trails with timestamping • Version-controlled certificates • Automated data integrity checks • Role-based access control—fully compliant with FDA 21 CFR Part 11 and EU GMP Annex 11 requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What environmental controls are maintained during calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our calibration lab maintains: • Temperature: 20°C±1°C • Humidity: 45%±5% RH • Vibration-free weighing tables • Air current protection • Positive pressure control—with continuous monitoring documented in calibration certificates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide on-site calibration for production equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer: • Factory floor balance calibration • In-place pipette verification • Production vessel volume certification • Cleanroom-compatible calibration services • IQ/OQ documentation support—all performed with portable NABL-traceable standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is NABL-accredited mass and volume calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NABL-accredited mass and volume calibration ensures that weighing instruments and volumetric devices meet precise measurement standards as per ISO/IEC 17025:2017. This is critical for pharmaceutical operations to ensure accuracy, compliance, and product safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which instruments can Indivirtus calibrate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We calibrate analytical balances (0.1mg–30kg), microbalances, pipettes (0.1μL–100mL), burettes, and certified weights (Class E1 to M3), ensuring precision for a wide range of pharmaceutical applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure compliance with regulatory standards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our calibration services adhere to ISO/IEC 17025:2017, USP <41>, USP <1251>, ISO 8655, OIML R111, EU GMP Annex 11, and 21 CFR Part 11, ensuring audit readiness for FDA and EMA inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the calibration deliverables?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each calibration includes a NABL-accredited certificate, measurement uncertainty analysis, as-found/as-left data, traceability documentation, and recommendations for optimal calibration intervals based on usage.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should weighing and volumetric instruments be calibrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calibration frequency depends on usage, manufacturer guidelines, and regulatory requirements. We provide tailored recommendations to maintain accuracy and compliance for your specific instruments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is measurement uncertainty analysis important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Measurement uncertainty analysis quantifies the reliability of your measurements, ensuring confidence in results and compliance with stringent pharmaceutical standards like USP and OIML.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL-Accredited Mass & Volume Calibration for Pharma | Indivirtus',
    description:
      'ISO 17025 compliant calibration of balances, pipettes, and volumetric glassware for pharmaceutical QC labs and manufacturing—USP/EP/JP compliant with full traceability.',
    keywords: [
      'NABL accredited mass calibration',
      'Pharmaceutical pipette calibration',
      'GMP balance verification',
      'USP <41> compliance',
      '21 CFR Part 11 metrology',
      'Analytical balance certification',
      'Gravimetric pipette testing',
      'Indivirtus metrology services',
      'Measurement uncertainty analysis',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus Metrology Services',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma-Grade Mass & Volume Calibration',
      description:
        'Precision calibration of weighing and volumetric instruments for compliance with USFDA, EU GMP, and pharmacopeia standards',
      image: serviceImage.src,
      site: '@indivirtus_quality',
    },
    canonicalUrl: `'https://www.indivirtus.com/calibration/mass-volume'`,
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
    'Balance Repeatability Testing',
    'Pipette Gravimetric Analysis',
    'Weight Classification Verification',
    'Volumetric Device Accuracy Testing',
    'Measurement Uncertainty Calculation',
    'Eccentricity Load Testing',
    'Linearity Validation',
  ],
};
