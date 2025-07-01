import serviceImage from '@/assets/calibration.png';
const link = '/services/calibration';

export default {
  service_id: 'cro-nabl-calibration-lab',
  report_type: 'NABL Accredited Calibration Services',
  title: 'NABL‑Accredited Calibration Lab for Pharma Instruments',
  name: 'Accurate Calibration of Thermal, Electrical, Mechanical, Pressure/Vacuum, Mass/Volume & Other Instruments',
  description: 'Precise calibration services for critical pharmaceutical instruments, backed by NABL accreditation.',
  full_description:
    'Our NABL‑accredited calibration lab offers full-spectrum support to pharmaceutical CROs, ensuring accuracy and compliance of analytical, lab, production, and utility instruments. We calibrate thermal and humidity devices, electro‑technical meters, mechanical gauges, pressure/vacuum instruments, mass/volume equipment, and a variety of specialty meters. Each service is underpinned by traceable procedures and recognized across global regulators.',
  estimated_duration: '2–5 business days per instrument (depends on queue and scope)',
  deliverables: [
    'Accredited Calibration Certificate',
    'Traceable Calibration Report',
    'Deviation & Adjustment Records',
    'Due Date Recommendation & Sticker',
    'Full Quality Documentation (SOPs, Calibration Logs)',
  ],
  regulatory_basis: [
    'NABL ISO/IEC 17025',
    'FDA 21 CFR Part 11 & GMP Annexes',
    'EU GMP & PIC/S',
    'ISO 9001:2015',
    'WHO Good Practices',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Laboratories', 'Utilities'],
  expertise_area: ['Calibration Services', 'Quality Compliance', 'Traceability'],
  is_active: true,
  pageLink: link,
  icon: '🛠️',
  image: {
    path: serviceImage,
    alt: 'NABL accredited calibration laboratory',
    caption: 'Calibration of pharma-grade instruments with global traceability',
  },
  gtm: {
    eventCategory: 'Calibration Services',
    eventAction: 'CalibrationLab_Click',
    eventLabel: 'NABL Calibration',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Calibration Certificate', 'Traceable Reports'],
      certification: 'NABL 17025',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NABL‑Accredited Calibration Lab',
    description:
      'Calibration of thermal, electrical, mechanical, pressure/vacuum, mass/volume, pH/ORP/conductivity instruments with NABL certification.',
    serviceType: 'Calibration & Metrology Services',
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
      name: 'NABL‑Accredited Calibration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Thermal Calibration (Temp & RH, Furnaces, Ovens)',
            description: 'Calibration of thermal sensors and chambers across pharma labs and utilities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electro‑Technical Calibration (Current, Voltage, Resistance, etc.)',
            description: 'Calibrating meters measuring AC/DC current, voltage, resistance, frequency, time, etc.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mechanical Calibration (Dimensions, Speed, Acoustics)',
            description: 'Precision calibration of gauges for length, speed, sound, and dimension.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pressure & Vacuum Calibration',
            description: 'Calibration of pressure, vacuum, magnehelic gauges, transmitters, safety valves.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mass & Volume Calibration (Balances, Pipettes, Burettes)',
            description: 'Calibration of weigh scales, pipettes, burettes and volumetric devices.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Other Instrument Calibration (pH, ORP, Conductivity, Flow)',
            description: 'Calibration of chemical and process meters like pH, conductivity, TDS, and flow instruments.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Instrument‑based pricing',
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
        name: 'What is NABL accreditation and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NABL 17025 accreditation demonstrates technical competence and traceability of calibration labs—a must‑have for pharma compliance and regulator acceptance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should we calibrate our instruments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calibration intervals depend on use, criticality, and stability. We recommend a documented risk‑based schedule, typically 6–12 months for most instruments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you handle on‑site and in‑lab calibration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes—we provide both on‑site calibration services and in‑lab calibrations depending on equipment size and service needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you calibrate pipettes and burettes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We calibrate volumetric equipment including pipettes, burettes, and balances to USP, EP, or IP standards with traceable results.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you issue traceable certificates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Each calibration comes with a traceable certificate, deviation logs, and recommendations for due‑dates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your certificates accepted internationally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. NABL accreditation is recognized by ILAC MRA signatories—including regulators in USA, EU and other regions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the importance of NABL accreditation for calibration services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NABL accreditation ensures that our calibration laboratory adheres to international standards like ISO/IEC 17025, guaranteeing accuracy, reliability, and traceability of measurements. This is critical for pharmaceutical companies to maintain compliance with regulatory requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of equipment are calibrated under thermal calibration services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our thermal calibration services cover temperature and relative humidity (RH) devices, IR thermometers, furnaces, ovens, and environmental chambers, ensuring precise control in pharmaceutical manufacturing and storage environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should pharmaceutical equipment be calibrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calibration frequency depends on equipment usage, manufacturer recommendations, and regulatory guidelines. Typically, critical instruments like balances and thermometers require annual or biannual calibration to ensure compliance and accuracy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of calibrating pressure and vacuum gauges?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calibrating pressure and vacuum gauges ensures accurate measurements for processes like sterilization, filtration, and HVAC systems, preventing equipment failures and ensuring compliance with GMP and other regulatory standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does your CRO support multi-disciplinary calibration needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our CRO provides comprehensive calibration services across thermal, electro-technical, mechanical, pressure/vacuum, mass/volume, and other specialized areas, ensuring all pharmaceutical equipment meets stringent quality and regulatory standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical turnaround time for calibration services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnaround time varies based on the equipment and calibration scope, but most services are completed within 3–7 business days, with expedited options available for urgent needs.',
        },
      },
    ],
  },
  meta: {
    title: 'NABL Accredited Calibration Lab | Indivirtus',
    description:
      'NABL‑accredited calibration for thermal, electrical, mechanical, pressure/vacuum, mass/volume and chemical meters—recognized globally.',
    keywords: [
      'NABL calibration',
      'pharma instrument calibration',
      'thermal calibration',
      'electro technical calibration',
      'pressure calibration',
      'balance calibration',
      'pipette calibration',
      'pH meter calibration',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'NABL‑Accredited Calibration Services | Indivirtus',
      description:
        'We calibrate all critical pharma instruments—thermal, electrical, mechanical, pressure, mass/volume and more—with NABL accreditation.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    'Instrument Calibration',
    'Traceability Certification',
    'On‑site Calibration',
    'Preventive Calibration Scheduling',
  ],
};
