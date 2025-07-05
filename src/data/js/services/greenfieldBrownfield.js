import serviceImage from '@/assets/greenfieldBrownfieldProjects.png';
import feasibilityPlanning from '@/assets/greenfieldBrownfieldProjects.png';
import conceptualDesign from '@/assets/greenfieldBrownfieldProjects.png';
import civilDesign from '@/assets/greenfieldBrownfieldProjects.png';
import utilityEngineering from '@/assets/greenfieldBrownfieldProjects.png';
import equipmentProcurement from '@/assets/greenfieldBrownfieldProjects.png';
import gmpCompliance from '@/assets/greenfieldBrownfieldProjects.png';
import validationServices from '@/assets/greenfieldBrownfieldProjects.png';
import constructionCommissioning from '@/assets/greenfieldBrownfieldProjects.png';
import warehouseDesign from '@/assets/greenfieldBrownfieldProjects.png';
import ehsServices from '@/assets/greenfieldBrownfieldProjects.png';
import qmsSetup from '@/assets/greenfieldBrownfieldProjects.png';
import brownfieldUpgrades from '@/assets/greenfieldBrownfieldProjects.png';
import digitalPharma from '@/assets/greenfieldBrownfieldProjects.png';
import projectManagement from '@/assets/greenfieldBrownfieldProjects.png';
import postHandover from '@/assets/greenfieldBrownfieldProjects.png';
const baseLink = '/services/greenfield-brownfield';

export default {
  slug: 'greenfield-brownfield',
  service_id: 'cro-greenfield-brownfield',
  report_type: 'Pharma Turnkey Project Setup',
  title: 'Turnkey Greenfield & Brownfield Projects',
  name: 'Greenfield and Brownfield Turnkey Pharmaceutical Projects',
  description:
    'End-to-end project execution for new (Greenfield) and upgrade (Brownfield) pharmaceutical manufacturing facilities.',
  full_description:
    'Indivirtus offers turnkey consulting and implementation services for Greenfield and Brownfield pharmaceutical projects. Our CRO services include conceptual planning, design, execution, compliance, and technology transfer for Finished Dosage Forms (FDFs), Active Pharmaceutical Ingredients (APIs), and Intermediates. We ensure regulatory-ready facilities through a single-window approach—from layout to validation—meeting all global GMP requirements.',
  estimated_duration: '6–18 months depending on scope and regulatory jurisdiction',
  deliverables: [
    'Concept-to-commissioning project plan',
    'Facility layout and cleanroom design',
    'Process flow diagrams (material, personnel, utility)',
    'Equipment & utility qualification',
    'Validation master plan (VMP)',
    'Regulatory submission documentation (as needed)',
  ],
  regulatory_basis: ['WHO-GMP', 'EU-GMP', 'USFDA cGMP', 'PIC/S Guidelines', 'Schedule M (India)'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'APIs', 'Biotech', 'CDMO'],
  expertise_area: ['Turnkey Projects', 'GMP Facility Design', 'Regulatory Engineering'],
  is_active: true,
  pageLink: baseLink, // page link through variable
  icon: '🏗️',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical facility construction and design',
    caption: 'Complete Greenfield and Brownfield execution for pharma plants',
  },
  pageContent: {
    hero: {
      heading: 'Greenfield & Brownfield Pharmaceutical Projects',
      tagline: 'Building and Upgrading Compliant Facilities for Pharma Excellence',
    },
    main: {
      heading: 'Our Turnkey Project Services',
      detail:
        'Our Contract Research Organization (CRO) specializes in delivering turnkey greenfield and brownfield pharmaceutical projects, covering finished dosage forms, active pharmaceutical ingredients (APIs), and intermediates. From feasibility studies and facility design to regulatory compliance, validation, and commissioning, we provide end-to-end solutions to ensure GMP-compliant, efficient, and future-proof facilities. These services are critical for ensuring product quality, regulatory approvals, and operational excellence, serving pharmaceutical manufacturers, biotech firms, API producers, and CROs aiming to establish or upgrade their facilities.',
    },
    cards: {
      heading: 'Our Project Expertise',
      services: [
        {
          icon: '📊',
          image: feasibilityPlanning,
          title: 'Feasibility & Planning',
          items: [
            'Technical & financial viability',
            'Site selection & evaluation',
            'Business case & ROI planning',
            'Regulatory landscape mapping',
          ],
          link: baseLink + '/feasibility-planning',
        },
        {
          icon: '🖼️',
          image: conceptualDesign,
          title: 'Conceptualization & Design',
          items: [
            'Facility layout optimization',
            'Modular & prefab design',
            '3D modeling & BIM integration',
            'Cleanroom zoning',
          ],
          link: baseLink + '/conceptual-design',
        },
        {
          icon: '🏛️',
          image: civilDesign,
          title: 'Civil & Architectural Design',
          items: [
            'Detailed engineering drawings',
            'Cleanroom ISO classification',
            'Seismic & fire safety compliance',
            'Construction management',
          ],
          link: baseLink + '/civil-design',
        },
        {
          icon: '⚙️',
          image: utilityEngineering,
          title: 'Process & Utility Engineering',
          items: [
            'HVAC & water system design',
            'PFD & P&ID preparation',
            'Automation & SCADA integration',
            'Effluent treatment systems',
          ],
          link: baseLink + '/utility-engineering',
        },
        {
          icon: '🛠️',
          image: equipmentProcurement,
          title: 'Equipment Procurement',
          items: [
            'Vendor selection & audits',
            'FAT/SAT coordination',
            'Global & local sourcing',
            'Installation & hook-up',
          ],
          link: baseLink + '/equipment-procurement',
        },
        {
          icon: '📜',
          image: gmpCompliance,
          title: 'GMP Compliance Consulting',
          items: ['USFDA, EMA, WHO compliance', 'URS, DQ, IQ, OQ, PQ', 'Schedule M implementation', 'Mock inspections'],
          link: baseLink + '/gmp-compliance',
        },
        {
          icon: '✅',
          image: validationServices,
          title: 'Validation & Qualification',
          items: [
            'Validation Master Plan',
            'HVAC & cleanroom validation',
            'Process & cleaning validation',
            'Computer system validation',
          ],
          link: baseLink + '/validation-services',
        },
        {
          icon: '🏗️',
          image: constructionCommissioning,
          title: 'Construction & Commissioning',
          items: ['Project management', 'Site supervision', 'Utility commissioning', 'As-built documentation'],
          link: baseLink + '/construction-commissioning',
        },
        {
          icon: '📦',
          image: warehouseDesign,
          title: 'Warehouse Design',
          items: ['GMP-compliant layout', 'Cold & hazardous storage', 'Material traceability', 'Personnel flow design'],
          link: baseLink + '/warehouse-design',
        },
        {
          icon: '🛡️',
          image: ehsServices,
          title: 'EHS Services',
          items: [
            'HAZOP & HIRA studies',
            'Fire safety & emergency plans',
            'Waste management',
            'Occupational health programs',
          ],
          link: baseLink + '/ehs-services',
        },
        {
          icon: '📋',
          image: qmsSetup,
          title: 'QMS Setup',
          items: ['ICH Q10 QMS development', 'SOPs & BMR/BPR', 'Electronic document systems', 'Training management'],
          link: baseLink + '/qms-setup',
        },
        {
          icon: '🔄',
          image: brownfieldUpgrades,
          title: 'Brownfield Upgrades',
          items: ['GMP gap assessments', 'Retrofitting & expansion', 'Tech transfer support', 'Downtime minimization'],
          link: baseLink + '/brownfield-upgrades',
        },
        {
          icon: '💻',
          image: digitalPharma,
          title: 'Digital Pharma Integration',
          items: [
            'SCADA & IoT integration',
            'eBMR/eBPR systems',
            'Track & trace solutions',
            '21 CFR Part 11 compliance',
          ],
          link: baseLink + '/digital-pharma',
        },
        {
          icon: '📅',
          image: projectManagement,
          title: 'Turnkey Project Management',
          items: ['EPCM services', 'Time-cost-quality management', 'Risk mitigation planning', 'Project dashboards'],
          link: baseLink + '/project-management',
        },
        {
          icon: '🤝',
          image: postHandover,
          title: 'Post-Handover Support',
          items: [
            'SOP training & handholding',
            'Regulatory inspection support',
            'Maintenance planning',
            'APR/PQR setup',
          ],
          link: baseLink + '/post-handover',
        },
      ],
    },
    process: {
      heading: 'Our Project Delivery Process',
      steps: [
        {
          title: 'Feasibility & Planning',
          description:
            'We assess project viability, select sites, and map regulatory requirements to create a robust business case.',
        },
        {
          title: 'Design & Engineering',
          description:
            'We develop GMP-compliant facility designs, including cleanrooms, utilities, and automation systems.',
        },
        {
          title: 'Procurement & Construction',
          description:
            'We manage equipment sourcing, vendor audits, construction, and quality control to meet project timelines.',
        },
        {
          title: 'Validation & Commissioning',
          description: 'We perform validations (DQ/IQ/OQ/PQ) and commission utilities, ensuring regulatory compliance.',
        },
        {
          title: 'Handover & Support',
          description:
            'We deliver as-built documentation, train personnel, and provide ongoing regulatory and maintenance support.',
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
            'WHO, PIC/S, TGA, Health Canada, ANVISA',
          ],
        },
        {
          title: 'Guidelines & Certifications',
          items: [
            'USFDA, EU GMP, WHO TRS, PIC/S',
            'Revised Schedule M',
            'ICH Q7/Q9/Q10',
            'ISO 14644 (Cleanrooms)',
            '21 CFR Part 11',
          ],
        },
        {
          title: 'Applications & Industries',
          items: [
            'Pharmaceutical Manufacturing',
            'Biotechnology',
            'API & Intermediates Production',
            'Contract Research Organizations',
            'Contract Manufacturing',
          ],
        },
      ],
    },
    conclusion: {
      heading: 'Why Choose Our CRO?',
      detail:
        'Our CRO delivers end-to-end greenfield and brownfield pharmaceutical projects with precision, ensuring GMP compliance, operational efficiency, and regulatory success. With expertise in facility design, validation, and Industry 4.0 integration, we build future-proof facilities tailored to your needs. Partner with us to transform your vision into a compliant, high-performing pharmaceutical operation.',
    },
    cta: {
      heading: 'Ready to Build or Upgrade Your Pharma Facility?',
      tagline: 'Let us deliver turnkey solutions for your greenfield or brownfield project.',
    },
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'Greenfield_Project_Click',
    eventLabel: 'Turnkey Facility Setup',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Greenfield', 'Brownfield'],
      certification: 'Regulatory-Ready Turnkey Facility',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Turnkey Greenfield and Brownfield Projects',
    description:
      'Complete project execution for FDF, API, and Intermediate manufacturing units under global GMP regulations.',
    serviceType: 'Turnkey Pharmaceutical Facility Projects',
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
      name: 'Turnkey Facility Setup Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Greenfield Project Execution for Finished Dosage Forms',
            description: 'From concept to commissioning of new FDF plants including layout, utilities, and validation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Greenfield Project Execution for APIs',
            description: 'Complete setup of new API facilities with compliance to cGMP and ICH Q7 standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Greenfield Setup for Intermediates Manufacturing',
            description:
              'Design and establish facilities for intermediates with integrated safety and environmental controls.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brownfield Expansion for FDF Manufacturing',
            description:
              'Upgrading and expanding existing FDF units for capacity enhancement and regulatory compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brownfield Upgrade for API Units',
            description: 'Retrofitting legacy API plants to meet current GMP expectations and regulatory requirements.',
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
        name: 'What is the difference between Greenfield and Brownfield pharmaceutical projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Greenfield projects are entirely new facilities built from the ground up, while Brownfield projects involve upgrading or expanding existing facilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services are included in a turnkey Greenfield FDF project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cover complete design, engineering, equipment selection, utility integration, validation, and regulatory compliance for finished dosage form manufacturing plants.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help retrofit our existing API facility for regulatory audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our Brownfield services include facility revamp, process requalification, documentation alignment, and CAPA support to meet global GMP expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete a Greenfield project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical timelines range from 12 to 18 months depending on the size and regulatory scope of the facility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer end-to-end compliance support with turnkey execution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide design, engineering, execution, and documentation aligned with WHO-GMP, EU-GMP, and other standards to ensure inspection readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the scope of your turnkey pharmaceutical project services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our turnkey services cover feasibility studies, facility design, equipment procurement, validation, regulatory compliance, construction, commissioning, and post-handover support for greenfield and brownfield pharmaceutical projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure GMP compliance in facility design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We align facility designs with USFDA, EMA, WHO, PIC/S, and Revised Schedule M guidelines, incorporating GMP-compliant cleanroom zoning, HVAC systems, and validation protocols like DQ, IQ, OQ, and PQ.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical timeline for a greenfield pharmaceutical project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Timelines vary, but a greenfield project typically takes 12–24 months, depending on facility size, complexity, and regulatory requirements. Brownfield upgrades may take 6–12 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you support brownfield facility upgrades?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We conduct gap assessments, retrofit designs for GMP compliance, enhance capacity, support tech transfers, and minimize downtime to ensure seamless upgrades.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries benefit from your project services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers, biotech firms, API producers, and CROs benefit from our services, ensuring compliant facilities for finished dosage forms, APIs, and intermediates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you integrate Industry 4.0 into pharmaceutical projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We incorporate SCADA, BMS, IoT sensors, eBMR/eBPR systems, and 21 CFR Part 11-compliant solutions to enable real-time monitoring, automation, and data integrity.',
        },
      },
    ],
  },
  meta: {
    title: 'Turnkey Greenfield & Brownfield Pharma Projects | Indivirtus CRO',
    description:
      'Indivirtus provides complete turnkey project services for pharmaceutical manufacturing facilities – Greenfield and Brownfield – covering FDF, API, and intermediates.',
    keywords: [
      'greenfield pharma projects',
      'brownfield pharma projects',
      'turnkey API facility',
      'turnkey dosage form setup',
      'pharma facility construction',
      'regulatory ready pharma plant',
      'GMP compliant design',
      'FDF plant turnkey',
      'intermediate manufacturing',
      'pharma engineering CRO',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: baseLink,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Greenfield & Brownfield Turnkey Pharma Projects | Indivirtus',
      description:
        'Turnkey execution of FDF, API, and Intermediate pharmaceutical facilities from concept to GMP readiness.',
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
    'Facility Engineering Assessment',
    'Regulatory Compliance Mapping',
    'Cleanroom Design Review',
    'Utility Qualification',
    'FDF/API Manufacturing Layout Audit',
  ],
};
