import serviceImage from '@/assets/riskAssessment.png';
import impurityProfiling from '@/assets/risk-assessment/impurity-profiling.jpg';
import qsarAssessment from '@/assets/risk-assessment/qsar-assessment.jpg';
import inVitroTesting from '@/assets/risk-assessment/in-vitro-testing.jpg';
import inVivoTesting from '@/assets/risk-assessment/in-vivo-testing.jpg';
import eAndLStudies from '@/assets/risk-assessment/e-and-l-studies.jpg';
import riskAssessment from '@/assets/risk-assessment/risk-assessment.jpg';
const baseLink = '/services/risk-assessment';

export default {
  slug: 'risk-assessment',
  service_id: 'cro-genotoxic-medical-device-toxicology',
  report_type: 'Toxicological Risk Assessment',
  title: 'Genotoxic Impurity & Medical Device Toxicology Assessment',
  name: 'Genotoxicity Evaluation & Toxicological Risk for Medical Devices',
  description:
    'Comprehensive CRO support for genotoxic impurity evaluation and toxicological risk assessments of medical devices.',
  full_description:
    'Indivirtus offers specialized CRO services for genotoxic impurity evaluation and medical device toxicological risk assessment. We follow global regulatory standards like ICH Q3A(R2), Q3B(R2), Q3C(R8), M7 for mutagenic impurity profiling and ISO 10993-17 for evaluating extractables, leachables, and their toxicological relevance in medical devices. Our expert toxicologists provide data-driven risk assessments to ensure product safety and global compliance.',
  estimated_duration: '2–6 weeks (depending on data availability and number of substances)',
  deliverables: [
    'Genotoxicity risk assessment report aligned with ICH Q3A/B/C/M7',
    'TTC-based impurity categorization and qualification strategy',
    'Toxicological Risk Assessment (TRA) report for medical devices per ISO 10993',
    'Assessment of extractables and leachables (E&L)',
  ],
  regulatory_basis: [
    'ICH Q3A(R2), Q3B(R2), Q3C(R8)',
    'ICH M7 (R1)',
    'ISO 10993-17',
    'ISO 10993-18',
    'US FDA, EMA, PMDA expectations',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices'],
  expertise_area: ['Toxicology', 'Risk Assessment', 'Regulatory Compliance'],
  is_active: true,
  pageLink: baseLink,
  icon: '🧬',
  image: {
    path: serviceImage,
    alt: 'Genotoxicity and Medical Device Toxicological Risk Assessment',
    caption: 'Expert ICH and ISO-aligned toxicological assessments for impurities and medical devices',
  },
  pageContent: {
    hero: {
      heading: 'Genotoxicity Risk Assessment & Medical Device Toxicity Assessment',
      tagline: 'Unrivaled expertise in genotoxic impurity evaluation and toxicological risk assessment',
    },
    main: {
      heading: 'Why Our CRO Services Stand Out',
      detail:
        'Indivirtus provides specialized CRO services, delivering precision in genotoxic impurity evaluation, toxicological risk assessments, and extractables and leachables (E&L) studies. These services empower pharmaceutical companies, biotech innovators, and medical device manufacturers to achieve compliance with stringent global regulations while ensuring patient safety. By integrating advanced analytics, computational toxicology, and rigorous testing, we streamline drug and device development, helping clients bring safe, high-quality products to market efficiently.',
    },
    cards: {
      heading: 'Tailored CRO Services',
      services: [
        {
          icon: '🧪',
          image: impurityProfiling,
          title: 'Impurity Profiling',
          items: [
            'Precise identification via LC-MS/MS, GC-MS, NMR, HRMS',
            'Threshold of Toxicological Concern (TTC) analysis',
            'Robust impurity qualification studies',
          ],
          link: baseLink + '/impurity-profiling',
        },
        {
          icon: '💻',
          image: qsarAssessment,
          title: 'In Silico (Q)SAR Assessment',
          items: [
            'Advanced toxicity predictions with Derek Nexus, Leadscope',
            'Dual-model approach: rule-based and statistical',
            'ICH M7-compliant mutagenicity reports',
          ],
          link: baseLink + '/qsar-assessment',
        },
        {
          icon: '🧬',
          image: inVitroTesting,
          title: 'In Vitro Genotoxicity Testing',
          items: [
            'Ames Test (OECD 471) for mutagenicity',
            'Mouse Lymphoma Assay (OECD 490)',
            'GLP-compliant, high-precision studies',
          ],
          link: baseLink + '/in-vitro-testing',
        },
        {
          icon: '🐁',
          image: inVivoTesting,
          title: 'In Vivo Genotoxicity Testing',
          items: [
            'In vivo Micronucleus Test (OECD 474)',
            'Comet Assay (OECD 489) for DNA damage',
            'Transgenic Rodent Mutation Assays',
          ],
          link: baseLink + '/in-vivo-testing',
        },
        {
          icon: '⚗️',
          image: eAndLStudies,
          title: 'Extractables and Leachables Studies',
          items: [
            'ISO 10993-18 chemical characterization',
            'Simulated-use extraction for real-world insights',
            'Advanced GC-MS, LC-MS/MS analysis',
          ],
          link: baseLink + '/e-and-l-studies',
        },
        {
          icon: '📊',
          image: riskAssessment,
          title: 'Toxicological Risk Assessment',
          items: [
            'Tolerable Intake and PDE calculations',
            'Route-specific safety evaluations',
            'Cramer Classification for unquantified substances',
          ],
          link: baseLink + '/risk-assessment',
        },
      ],
    },
    process: {
      heading: 'How We Deliver Excellence',
      steps: [
        {
          title: 'Project Onboarding',
          description: 'Align with clients on objectives and regulatory needs',
        },
        {
          title: 'Data Acquisition',
          description: 'Leverage cutting-edge analytics and in silico tools',
        },
        {
          title: 'Testing Phase',
          description: 'Conduct OECD-compliant in vitro and in vivo trials',
        },
        {
          title: 'Regulatory Support',
          description: 'Prepare ICH-compliant documentation for global submissions',
        },
        {
          title: 'Final Delivery',
          description: 'Provide actionable risk assessments and stability reports',
        },
      ],
    },
    compliance: {
      heading: 'Global Compliance, Assured',
      complianceSections: [
        {
          title: 'Regulatory Oversight',
          items: [
            'FDA (U.S. Food and Drug Administration)',
            'EMA (European Medicines Agency)',
            "CDSCO (India's Regulatory Authority)",
            "PMDA (Japan's Regulatory Authority)",
          ],
        },
        {
          title: 'Standards & Certifications',
          items: [
            'ICH Q3A, Q3B, Q3C, M7 for impurities',
            'ISO 10993 for medical device safety',
            'GLP-certified laboratories',
            'ISO 14971 risk management framework',
          ],
        },
      ],
    },
    conclusion: {
      heading: 'Your Trusted CRO Partner',
      detail:
        'Indivirtus combines scientific rigor with regulatory expertise to deliver CRO services that ensure your pharmaceutical and medical device products are safe, compliant, and market-ready. Our advanced analytical tools, global compliance know-how, and commitment to precision make us the ideal partner to accelerate your development journey with confidence.',
    },
    cta: {
      heading: 'Ready to Advance Your Research?',
      tagline: 'Partner with Indivirtus for innovative, compliant CRO solutions.',
    },
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'Genotoxicity_MedicalDevice_Click',
    eventLabel: 'Genotoxic & TRA Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Genotoxic Impurity Evaluation', 'Medical Device Toxicological Risk Assessment'],
      certification: 'Regulatory Toxicology',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Genotoxic Impurity Evaluation & Toxicological Risk Assessment',
    description:
      'CRO support for pharmaceutical and medical device manufacturers to assess genotoxic impurities and toxicological risks as per ICH and ISO guidelines.',
    serviceType: 'Pharmaceutical & Medical Device CRO Service',
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
      name: 'Genotoxic and Medical Device Risk Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Genotoxic Impurity Risk Assessment (ICH Q3A/Q3B)',
            description:
              'Evaluation of organic impurities for genotoxic potential in drug substances and drug products.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elemental Impurity Assessment (ICH Q3C/Q3D)',
            description: 'Assessment and justification of metal impurities in line with ICH Q3C/Q3D guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICH M7 (R1) Toxicological Evaluation',
            description: 'In silico and literature-based risk assessment of genotoxic impurities per ICH M7.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Toxicological Risk Assessment (TRA) for Medical Devices',
            description:
              'Evaluation of biological safety risks from extractables and leachables in devices per ISO 10993-17.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Extractables and Leachables (E&L) Toxicological Interpretation',
            description: 'Toxicological relevance of E&L studies for device safety across product lifecycle.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Compound-based pricing',
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
        name: 'What is genotoxic impurity evaluation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is the assessment of impurities in pharmaceuticals for their potential to damage DNA. This ensures patient safety and aligns with regulatory guidelines like ICH M7.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you evaluate genotoxicity risk without lab testing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use (Q)SAR in silico tools, literature review, and threshold of toxicological concern (TTC) principles to evaluate genotoxic potential when experimental data is not available.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is covered under ICH M7?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ICH M7 covers assessment, control, and qualification of mutagenic impurities, combining computational toxicology and structure-activity relationship analysis.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a toxicological risk assessment for medical devices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It evaluates the safety impact of chemical substances (like leachables) from device materials on human health, based on exposure and hazard data, as outlined in ISO 10993-17.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do extractables and leachables impact patient safety?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Extractables and leachables are chemical compounds that can migrate from medical device materials. If toxic, they can pose risks to patients. Risk assessments help determine if their levels are safe.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data is needed for genotoxic impurity assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We require chemical structure (SMILES or CAS), batch impurity data, synthetic pathway, and analytical impurity profiles. Public literature and Ames test data (if available) can be included.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support ISO 10993-based biological evaluation plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we help create and execute Biological Evaluation Plans (BEPs) including toxicological interpretation under ISO 10993-17 and 10993-18.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does genotoxic impurity evaluation involve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genotoxic impurity evaluation identifies and assesses DNA-damaging impurities in pharmaceuticals, following ICH M7 and related guidelines. It combines in silico predictions, in vitro/in vivo testing, and risk assessments to ensure product safety and regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus maintain regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus adheres to global standards like ICH Q3A-Q3C, M7, and ISO 10993, delivering GLP-compliant studies, detailed documentation, and regulatory submission support for agencies such as FDA, EMA, and PMDA.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are extractables and leachables (E&L) studies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'E&L studies analyze chemicals released from medical devices or packaging under simulated conditions, using ISO 10993-18 compliant methods to ensure safety through identification, quantification, and toxicological risk assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is (Q)SAR used in CRO services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '(Q)SAR employs computational models to predict toxicity risks of impurities, supporting ICH M7 compliance by identifying potential genotoxic hazards efficiently without extensive laboratory testing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus support medical device safety?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus conducts ISO 10993-17 compliant toxicological risk assessments, evaluating extractables, leachables, and degradation products with route- and patient-specific analyses to ensure medical device safety.',
        },
      },
    ],
  },
  meta: {
    title: 'Genotoxicity & Medical Device Toxicology Assessment | Indivirtus',
    description:
      'Indivirtus offers CRO services for genotoxic impurity risk evaluation (ICH Q3/M7) and toxicological assessment of medical devices (ISO 10993).',
    keywords: [
      'genotoxic impurity evaluation',
      'ICH M7',
      'toxicological risk assessment',
      'medical device safety',
      'ISO 10993-17',
      'extractables and leachables',
      'ICH Q3A',
      'ICH Q3C',
      'ICH Q3D',
      'in silico mutagenicity',
      'TTC thresholds',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: baseLink,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Genotoxicity & Medical Device Toxicology | Indivirtus',
      description: 'Comprehensive toxicological evaluations for impurities and devices using ICH & ISO standards.',
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
    'Genotoxicity Evaluation',
    'Mutagenicity Prediction',
    'Medical Device Toxicological Risk Assessment',
    'Extractables and Leachables Interpretation',
  ],
};
