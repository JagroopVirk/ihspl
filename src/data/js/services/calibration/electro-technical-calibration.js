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
    'NABL-accredited calibration of electrical parameters for critical pharmaceutical equipment, ensuring measurement accuracy and regulatory compliance.',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. delivers ISO/IEC 17025:2017 accredited Electro-Technical Calibration with pharmaceutical-grade precision. Our specialized services cover comprehensive electrical parameter validation including AC/DC current (±0.5% accuracy), voltage (up to 1000V), resistance (0.1Ω–100MΩ), inductance (1μH–100H), and time/frequency (±0.01ppm). Utilizing certified reference standards and automated calibration systems, we ensure your laboratory instruments, production equipment, and quality control devices meet stringent GMP, WHO, and pharmacopeia requirements while maintaining full measurement traceability to NIST standards.',
  estimated_duration: '3–5 working days (expedited options available)',
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
  target_industry: [
    'Pharmaceutical Manufacturing',
    'Biotechnology',
    'Medical Device Production',
    'Clinical Research Organizations',
  ],
  expertise_area: [
    'Electrical Metrology',
    'Pharmaceutical Compliance',
    'Measurement Uncertainty Analysis',
    'Quality System Validation',
  ],
  is_active: true,
  pageLink: link,
  icon: '⚡',
  image: {
    path: serviceImage,
    alt: 'NABL-accredited electro-technical calibration of pharmaceutical testing equipment',
    caption: 'Precision calibration of multimeters and electrical test equipment in controlled laboratory environment',
  },
  gtm: {
    eventCategory: 'Premium Calibration Services',
    eventAction: 'View Electro-Technical Calibration Details',
    eventLabel: 'Pharma Electrical Calibration Inquiry',
    customDimensions: {
      serviceTier: 'Premium',
      accreditationLevel: 'NABL',
    },
    dataLayerPush: {
      reportType: ['NABL Certificate', 'Compliance Report'],
      certification: 'ISO/IEC 17025:2017',
      measurementCapability: 'DC Voltage: ±0.02% | Resistance: ±0.05%',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Electro-Technical Calibration',
    description:
      'NABL-accredited calibration services for electrical measurement devices used in pharmaceutical quality control and manufacturing processes.',
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
      serviceEmail: 'calibration@indivirtus.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pharmaceutical Electrical Calibration Services',
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
        name: 'What measurement capabilities do you offer for pharmaceutical electrical calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our NABL-accredited lab provides: • DC Voltage: 1mV–1000V (±0.02%) • Resistance: 0.1Ω–100MΩ (±0.05%) • AC Current: 1mA–20A (±0.2%) • Frequency: 10Hz–1MHz (±0.01ppm) with full uncertainty analysis meeting ISO/IEC 17025 requirements.',
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
          text: 'We offer: • Standard: 3–5 business days • Priority: 48 hours (surcharge applies) • Emergency: 24-hour service (for critical equipment failure situations) with proper documentation maintained for all expedited services.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL-Accredited Electro-Technical Calibration for Pharma | Indivirtus',
    description:
      'ISO 17025 compliant calibration of electrical measurement devices for pharmaceutical QC labs and manufacturing – AC/DC current, voltage, resistance, inductance with full traceability.',
    keywords: [
      'NABL accredited electrical calibration',
      'Pharmaceutical equipment calibration',
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
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus Metrology Services',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma-Grade Electro-Technical Calibration Services',
      description:
        'Precision calibration of electrical parameters for compliance with USFDA, EU GMP, and WHO regulations',
      image: serviceImage.src,
      site: '@indivirtus_quality',
    },
    canonicalUrl: `'https://www.indivirtus.com/calibration/electro-technical'`,
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
