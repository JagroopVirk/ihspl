import serviceImage from '@/assets/validation.png';
import labSystemsValidation from '@/assets/validation.png';
import processAutomationValidation from '@/assets/validation.png';
import emsValidation from '@/assets/validation.png';
import enterpriseAppValidation from '@/assets/validation.png';
import temperatureMapping from '@/assets/validation.png';
import hvacValidation from '@/assets/validation.png';
import validationDocumentation from '@/assets/validation.png';
import validationTraining from '@/assets/validation.png';
import periodicRevalidation from '@/assets/validation.png';
const baseLink = '/services/validation';

export default {
  service_id: 'cro-validation-equipment-csv-hvac',
  report_type: 'Validation & Qualification Services',
  title: 'CSV, Equipment & HVAC Validation Services',
  name: 'Comprehensive Validation Services for Pharma CRO Operations',
  description:
    'Validation of laboratory systems, process automation, EMS, LIMS, HVAC and temperature mapping to support regulatory compliance.',
  full_description:
    'Indivirtus offers a full suite of validation and qualification services in support of pharmaceutical CRO operations. We validate computerized systems (CSV), laboratory instruments (HPLC, GC, FTIR, etc.), process automation platforms, environmental monitoring, enterprise software (LIMS, ERP, SAP), HVAC systems, and perform temperature mapping for critical zones. Our services ensure compliance with FDA, EMA, WHO and GMP standards, mitigating operational risk and ensuring data integrity.',
  estimated_duration: '2–8 weeks per system/project, depending on scope & complexity',
  deliverables: [
    'Validation Master Plan (VMP)',
    'User Requirement Specification (URS)',
    'Risk Assessment & Qualification Protocols (IQ/OQ/PQ)',
    'Traceable Test Scripts and Execution Records',
    'Deviation/Incident Reports and CAPA',
    'Final Validation Report & Summary',
  ],
  regulatory_basis: [
    'FDA 21 CFR Part 11',
    'EU GMP Annex 11',
    'PIC/S GMP',
    'WHO GMP',
    'ISO 14644 (Cleanroom)',
    'FDA HVAC Guidance',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'CRO', 'Medical Devices'],
  expertise_area: ['CSV', 'Equipment Validation', 'HVAC Qualification', 'Temperature Mapping'],
  is_active: true,
  pageLink: baseLink,
  icon: '✔️',
  image: {
    path: serviceImage,
    alt: 'Validation services for systems, equipment and HVAC',
    caption: 'CSV, equipment, EMS, and HVAC validation tailored for pharmaceutical labs',
  },
  pageContent: {
    hero: {
      heading: 'Validation Services for Pharma & Biotech',
      tagline: 'Ensuring Compliance for Critical Systems and Processes',
    },
    main: {
      heading: 'Our Validation Services',
      detail:
        'Our Contract Research Organization (CRO) offers comprehensive validation services for pharmaceutical and biotech systems, including laboratory instruments, process automation, HVAC, and enterprise applications. These services ensure compliance with global regulatory standards, maintain data integrity, and support operational excellence. Our solutions are critical for pharmaceutical manufacturers, biotech firms, CROs, and medical device companies seeking to meet stringent requirements from FDA, EMA, and other authorities while ensuring system reliability and product quality.',
    },
    cards: {
      heading: 'Our Validation Expertise',
      services: [
        {
          icon: '🔬',
          image: labSystemsValidation,
          title: 'Laboratory Systems Validation',
          items: [
            'DQ/IQ/OQ/PQ for HPLC, GC, etc.',
            'ICH Q2 method validation',
            '21 CFR Part 11 compliance',
            'Software validation (Empower)',
          ],
          link: baseLink + '/lab-systems-validation',
        },
        {
          icon: '⚙️',
          image: processAutomationValidation,
          title: 'Process Automation Validation',
          items: [
            'PLC/HMI/SCADA validation',
            'GAMP 5 risk-based approach',
            'FS/DS documentation',
            'Cybersecurity verification',
          ],
          link: baseLink + '/process-automation-validation',
        },
        {
          icon: '🌡️',
          image: emsValidation,
          title: 'EMS Validation',
          items: [
            'IQ/OQ/PQ & software validation',
            'BMS/HVAC integration',
            '21 CFR Part 11 compliance',
            'Sensor calibration',
          ],
          link: baseLink + '/ems-validation',
        },
        {
          icon: '💻',
          image: enterpriseAppValidation,
          title: 'Enterprise Application Validation',
          items: [
            'CSV for SAP, LIMS, QMS',
            '21 CFR Part 11 compliance',
            'Risk & data integrity audits',
            'URS to summary reports',
          ],
          link: baseLink + '/enterprise-app-validation',
        },
        {
          icon: '📏',
          image: temperatureMapping,
          title: 'Temperature Mapping',
          items: [
            'Autoclave, tunnel validation',
            'Cold room & warehouse mapping',
            'Data logger calibration',
            'Graphical data analysis',
          ],
          link: baseLink + '/temperature-mapping',
        },
        {
          icon: '❄️',
          image: hvacValidation,
          title: 'HVAC Validation',
          items: [
            'DOP/PAO filter testing',
            'Airflow & particle testing',
            'ISO 14644 compliance',
            'Cleanroom classification',
          ],
          link: baseLink + '/hvac-validation',
        },
        {
          icon: '📜',
          image: validationDocumentation,
          title: 'Validation Documentation',
          items: [
            'VMP & protocol preparation',
            'GAMP 5 risk planning',
            'Traceability & summary reports',
            'Audit readiness support',
          ],
          link: baseLink + '/validation-documentation',
        },
        {
          icon: '🎓',
          image: validationTraining,
          title: 'Validation Training',
          items: [
            'CSV & GAMP 5 training',
            'Data integrity (ALCOA+)',
            'Validation strategy workshops',
            'GxP system training',
          ],
          link: baseLink + '/validation-training',
        },
        {
          icon: '🔄',
          image: periodicRevalidation,
          title: 'Periodic Review & Revalidation',
          items: [
            'Periodic system reviews',
            'Trigger-based revalidation',
            'System decommissioning',
            'Change control integration',
          ],
          link: baseLink + '/periodic-revalidation',
        },
      ],
    },
    process: {
      heading: 'Our Validation Process',
      steps: [
        {
          title: 'System Assessment',
          description:
            'We evaluate systems (lab, automation, HVAC, etc.) to define validation scope and regulatory requirements.',
        },
        {
          title: 'Protocol Development',
          description: 'We create Validation Master Plans, DQ/IQ/OQ/PQ protocols, and risk assessments per GAMP 5.',
        },
        {
          title: 'Execution & Testing',
          description:
            'We execute validation protocols, including testing for functionality, data integrity, and compliance.',
        },
        {
          title: 'Documentation & Reporting',
          description: 'We provide traceability matrices, summary reports, and audit-ready documentation.',
        },
        {
          title: 'Ongoing Support',
          description:
            'We offer periodic reviews, revalidation, and training to maintain compliance and system performance.',
        },
      ],
    },
    compliance: {
      heading: 'Compliance & Standards',
      complianceSections: [
        {
          title: 'Regulatory Bodies',
          items: [
            'FDA (U.S. Food and Drug Administration)',
            'EMA (European Medicines Agency)',
            'ICH (International Council for Harmonisation)',
            'CDSCO (Central Drugs Standard Control Organization)',
            'WHO, PIC/S, TGA',
          ],
        },
        {
          title: 'Guidelines & Certifications',
          items: [
            '21 CFR Part 11, EU Annex 11',
            'GAMP 5, ICH Q2',
            'ISO 14644-1/2 (Cleanrooms)',
            'WHO TRS Annexes',
            'ISPE Guidelines',
          ],
        },
        {
          title: 'Applications & Industries',
          items: [
            'Pharmaceutical Manufacturing',
            'Biotechnology',
            'Contract Research Organizations',
            'Medical Device Manufacturing',
            'Quality Assurance/Control',
          ],
        },
      ],
    },
    conclusion: {
      heading: 'Why Choose Our Validation Services?',
      detail:
        'Our CRO delivers expert validation services for laboratory, automation, HVAC, and enterprise systems, ensuring compliance with global standards like 21 CFR Part 11, GAMP 5, and ISO 14644. With a risk-based approach and comprehensive documentation, we help you maintain system integrity and pass regulatory inspections. Partner with us to ensure your systems are robust, compliant, and ready for operational excellence.',
    },
    cta: {
      heading: 'Ready to Validate Your Critical Systems?',
      tagline: 'Partner with us for compliant, reliable validation solutions.',
    },
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'Validation_Services_Click',
    eventLabel: 'Validation & Qualification',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['CSV Validation', 'Equipment Qualification', 'HVAC Mapping'],
      certification: 'GMP Compliance',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Validation & Qualification Services',
    description:
      'CRO-based validation services covering CSV, lab equipment, automation systems, EMS, enterprise applications, temperature mapping, and HVAC qualification.',
    serviceType: 'Validation Services',
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
      serviceUrl: baseLink,
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
      name: 'Validation & Qualification Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Laboratory Systems Validation (HPLC/GC/UV/FTIR/Polarimeter)',
            description: 'IQ/OQ/PQ protocols and validation for analytical instruments.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Automation Systems Validation (PLC/HMI/SCADA)',
            description: 'CSV of automation platforms including risk assessment and data integrity.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Environmental Monitoring Systems (EMS) Validation',
            description: 'Qualification of systems capturing environmental and process data.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Applications Validation (SAP/ERP/LIMS/DMS/QMS/LMS)',
            description: 'Computer system validation to meet GxP and Part 11 requirements.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Temperature Mapping (SIP, Autoclave, Tunnel, Cold Room, Warehouse)',
            description: 'Mapping and qualification of temperature-controlled zones and equipment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC Qualification (DOP/Air Velocity/NVPC/Filter Integrity)',
            description: 'DOP testing, air changes, velocity mapping and filter integrity testing for cleanrooms.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Project-based pricing',
      url: baseLink,
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
        name: 'What does CSV cover for process automation systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CSV includes risk assessment, requirement traceability, protocol design (IQ/OQ/PQ), execution, deviation handling and final report for PLC/HMI/SCADA systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you validate laboratory equipment like HPLC or FTIR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We develop instrument-specific validation plans, conduct IQ/OQ/PQ runs, document performance qualifications, and assess calibration and maintenance needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is temperature mapping and why is it necessary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Temperature mapping documents spatial temperature uniformity and stability in critical environments (e.g., cold rooms, autoclaves) to ensure product safety and compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tests are included in HVAC qualification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HVAC qualification includes DOP/fog testing, air velocity profiling, NVPC (non-viable particle counts), air changes per hour, and HEPA filter integrity checks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you validate enterprise applications like LIMS or SAP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we perform full CSV including requirement gathering, functional testing, user acceptance, and compliance to ensure systems meet GxP and 21 CFR Part 11 standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a validation project typically take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Validation timelines depend on system complexity and client readiness, but most projects complete in 2–8 weeks per system.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is involved in laboratory systems validation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our laboratory systems validation includes DQ, IQ, OQ, PQ for instruments like HPLC, GC, and FTIR, along with analytical method validation, 21 CFR Part 11 compliance, and software validation for data acquisition systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you validate HVAC systems for cleanrooms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We perform HVAC validation with DQ/IQ/OQ/PQ protocols, including airflow visualization, DOP/PAO testing, air velocity, particle counts, and compliance with ISO 14644-1/2 for cleanroom classifications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does temperature mapping entail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Temperature mapping involves protocol development, pre/post-calibrated data loggers, and validation for autoclaves, tunnels, cold rooms, warehouses, and vehicles, ensuring data integrity and regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure compliance for enterprise applications like LIMS or ERP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We execute CSV lifecycles (URS, FS/DS, IQ/OQ/PQ) for systems like LabWare, SAP, and Veeva, ensuring 21 CFR Part 11 compliance, risk assessments, and data integrity audits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries benefit from your validation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers, biotech firms, CROs, and medical device companies benefit by ensuring compliant systems for quality, safety, and regulatory inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the role of GAMP 5 in your validation process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GAMP 5 provides a risk-based approach for validating automated systems like PLC, SCADA, and LIMS, ensuring compliance with regulatory standards and efficient validation processes.',
        },
      },
    ],
  },
  meta: {
    title: 'Validation Services: CSV, Equipment & HVAC | Indivirtus',
    description:
      'Indivirtus offers validation and qualification of lab instruments, automation, EMS, LIMS/SAP, temperature mapping and HVAC for pharma CRO compliance.',
    keywords: [
      'CSV services',
      'equipment validation',
      'HVAC qualification',
      'temperature mapping',
      'LIMS validation',
      'HPLC validation',
      'SCADA qualification',
      'GMP compliance',
      'FDA Part 11',
      'EU Annex 11',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: baseLink,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'CSV & Equipment Validation Services | Indivirtus',
      description:
        'Comprehensive validation of laboratory, automation, EMS, enterprise systems and HVAC in pharmaceutical environments.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${baseLink}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    'Computer System Validation',
    'Laboratory Instrument Qualification',
    'HVAC & Cleanroom Qualification',
    'Temperature Mapping Services',
    'Enterprise Application Validation',
    'EMS System Validation',
  ],
};
