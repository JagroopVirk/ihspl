import serviceImage from '@/assets/pharmacovigilance.png';
import pvDatabase from '@/assets/pharmacovigilance/pv-database.jpg';
import micc from '@/assets/pharmacovigilance/micc.jpg';
import psmfSops from '@/assets/pharmacovigilance/psmf-sops.jpg';
import icsrProcessing from '@/assets/pharmacovigilance/icsr-processing.jpg';
import literatureMonitoring from '@/assets/pharmacovigilance/literature-monitoring.jpg';
import aggregateReports from '@/assets/pharmacovigilance/aggregate-reports.jpg';
import riskManagement from '@/assets/pharmacovigilance/risk-management.jpg';
import signalManagement from '@/assets/pharmacovigilance/signal-management.jpg';
import complianceAudit from '@/assets/pharmacovigilance/compliance-audit.jpg';
import globalSubmissions from '@/assets/pharmacovigilance/global-submissions.jpg';
import medicalReview from '@/assets/pharmacovigilance/medical-review.jpg';
import pvTraining from '@/assets/pharmacovigilance/pv-training.jpg';
const baseLink = '/services/pharmacovigilance';

export default {
  slug: 'pharmacovigilance',
  service_id: 'cro-pharmacovigilance-services',
  report_type: 'Pharmacovigilance & Safety Reporting',
  title: 'Pharmacovigilance & Drug Safety Monitoring Services',
  name: 'Comprehensive Pharmacovigilance Services for Regulatory Compliance',
  description:
    'Full-suite pharmacovigilance solutions from database setup to risk management plans for pharmaceutical safety monitoring.',
  full_description:
    'Indivirtus provides end-to-end pharmacovigilance (PV) support as part of its CRO services for the pharmaceutical industry. From setting up PV systems and handling ICSR case processing to preparing PSMF, PSUR, and Risk Management Plans, our solutions are aligned with global regulatory standards (EMA, US FDA, WHO). Our team ensures your products meet all compliance requirements while protecting patient safety through vigilant signal detection, literature monitoring, and spontaneous reporting systems.',
  estimated_duration: 'Ongoing service (duration based on regulatory timelines and product scope)',
  deliverables: [
    'Pharmacovigilance System Master File (PSMF)',
    'Standard Operating Procedures (SOPs)',
    'Setup and configuration of safety databases',
    'ICSR processing reports',
    'PSUR/PBRER/PADER submissions',
    'Signal Detection Reports',
    'Risk Management Plans',
    'Literature surveillance logs and summaries',
  ],
  regulatory_basis: [
    'ICH E2E Pharmacovigilance Guidelines',
    'EU GVP Modules I–XVI',
    'US FDA 21 CFR Part 314.80',
    'WHO Pharmacovigilance Guidelines',
    'EMA GVP Module VII – PSUR',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'Clinical Research Organizations'],
  expertise_area: ['Pharmacovigilance', 'Drug Safety', 'Regulatory Compliance', 'Signal Detection'],
  is_active: true,
  pageLink: baseLink,
  icon: '💊',
  image: {
    path: serviceImage,
    alt: 'Pharmacovigilance CRO services at Indivirtus',
    caption: 'End-to-end safety monitoring and compliance with global PV regulations',
  },
  pageContent: {
    hero: {
      heading: 'Pharmacovigilance <span class="halfHeading">Services</span>',
      tagline: 'Ensuring Drug Safety with Comprehensive PV Solutions',
    },
    main: {
      heading: 'Our <span class="halfHeading">Pharmacovigilance Services</span>',
      detail:
        'Our Contract Research Organization (CRO) provides end-to-end pharmacovigilance (PV) services to ensure drug safety and regulatory compliance across the product lifecycle. From database setup and adverse event reporting to risk management and global submissions, we help pharmaceutical companies, biotech firms, and marketing authorization holders (MAHs) monitor and manage drug safety effectively. Our services are critical for maintaining patient safety, meeting stringent regulatory requirements, and supporting clinical and post-marketing phases for generics, biosimilars, and innovative drugs.',
    },
    cards: {
      heading: 'Our <span class="halfHeading">PV Expertise</span>',
      services: [
        {
          icon: '💾',
          image: pvDatabase,
          title: 'PV Sytem Setup',
          items: [
            'End to end PV System Setup',
            'Argus, Veeva Vault implementation',
            'MedDRA/WHO-DD coding',
            'E2B R3 data exchange',
            '21 CFR Part 11 compliance',
          ],
          link: baseLink + '/pv-database',
        },
        {
          icon: '📞',
          image: micc,
          title: 'Medical Information Call Centre',
          items: [
            '24/7 medical inquiry support',
            'Multilingual adverse event intake',
            'HCP & patient interaction',
            'Product complaint triage',
          ],
          link: baseLink + '/micc',
        },
        {
          icon: '📜',
          image: psmfSops,
          title: 'PSMF & SOPs Preparation',
          items: [
            'EMA/MHRA-compliant PSMF',
            'SOPs for PV activities',
            'Annexes & version control',
            'Quality system documentation',
          ],
          link: baseLink + '/psmf-sops',
        },
        {
          icon: '📋',
          image: icsrProcessing,
          title: 'ICSR Case Processing',
          items: [
            'Triage & MedDRA coding',
            'E2B R2/R3 submissions',
            'Seriousness assessment',
            'Follow-up & reconciliation',
          ],
          link: baseLink + '/icsr-processing',
        },
        {
          icon: '🔍',
          image: literatureMonitoring,
          title: 'Literature Monitoring',
          items: [
            'GVP Module VI compliance',
            'Embase/PubMed searches',
            'ADR & signal screening',
            'Regulatory submissions',
          ],
          link: baseLink + '/literature-monitoring',
        },
        {
          icon: '📊',
          image: aggregateReports,
          title: 'Aggregate Reports',
          items: ['PSUR, PBRER, PADER', 'DSUR & ASRs', 'ICH E2C(R2) compliance', 'Quality review & submission'],
          link: baseLink + '/aggregate-reports',
        },
        {
          icon: '⚠️',
          image: riskManagement,
          title: 'Risk Management Plan',
          items: [
            'EU-RMP & REMS preparation',
            'Safety specification',
            'Risk minimization measures',
            'RMP lifecycle management',
          ],
          link: baseLink + '/risk-management',
        },
        {
          icon: '🚨',
          image: signalManagement,
          title: 'Signal Management',
          items: [
            'Disproportionality analysis',
            'Signal validation & assessment',
            'Empirica/VigiLyze tools',
            'Regulatory communication',
          ],
          link: baseLink + '/signal-management',
        },
        {
          icon: '✅',
          image: complianceAudit,
          title: 'OMS & Audit Support',
          items: [
            'PV compliance monitoring',
            'Audit/inspection preparation',
            'CAPA management',
            'GVP & ICH E2E training',
          ],
          link: baseLink + '/compliance-audit',
        },
        {
          icon: '🌍',
          image: globalSubmissions,
          title: 'Global Submissions',
          items: [
            'E2B-compliant submissions',
            'EMA, FDA, PMDA filings',
            'PvPI & WHO submissions',
            'PV gateway configuration',
          ],
          link: baseLink + '/global-submissions',
        },
        {
          icon: '🩺',
          image: medicalReview,
          title: 'Medical Review',
          items: [
            'ICSR & safety report review',
            'Benefit-risk assessments',
            'Signal trend analysis',
            'Medical narrative writing',
          ],
          link: baseLink + '/medical-review',
        },
        {
          icon: '🎓',
          image: pvTraining,
          title: 'PV Training',
          items: ['GVP & ICH E2E training', 'Train-the-trainer workshops', 'Custom PV process design'],
          link: baseLink + '/pv-training',
        },
      ],
    },
    process: {
      heading: 'Our <span class="halfHeading">PV Service Process</span>',
      steps: [
        {
          title: 'System Setup & Planning',
          description: 'We implement PV databases, PSMF, and SOPs tailored to your regulatory needs.',
        },
        {
          title: 'Data Collection & Monitoring',
          description: 'We handle ICSR processing, literature monitoring, and MICC operations for adverse event data.',
        },
        {
          title: 'Analysis & Reporting',
          description: 'We perform signal detection, prepare aggregate reports, and conduct benefit-risk evaluations.',
        },
        {
          title: 'Regulatory Submissions',
          description: 'We submit ICSRs, PSURs, and RMPs to global authorities like EMA, FDA, and PMDA.',
        },
        {
          title: 'Compliance & Audit Support',
          description: 'We ensure audit readiness, provide CAPA management, and offer ongoing PV training.',
        },
      ],
    },
    compliance: {
      heading: 'Compliance & <span class="halfHeading">Standards</span>',
      complianceSections: [
        {
          title: 'Regulatory Bodies',
          items: [
            'FDA (U.S. Food and Drug Administration)',
            'EMA (European Medicines Agency)',
            'ICH (International Council for Harmonisation)',
            'DCGI (Drugs Controller General of India)',
            'PMDA, Health Canada, TGA, WHO-UMC',
          ],
        },
        {
          title: 'Guidelines & Certifications',
          items: [
            'GVP Modules (EMA)',
            'ICH E2A/E2B/E2C/E2E',
            '21 CFR Part 11, EU Annex 11',
            'WHO TRS Annex 2–5',
            'PvPI (India)',
          ],
        },
        {
          title: 'Applications & Industries',
          items: [
            'Pharmaceutical Manufacturing',
            'Biotechnology',
            'Generics & Biosimilars',
            'Marketing Authorization Holders',
            'Clinical Research',
          ],
        },
      ],
    },
    conclusion: {
      heading: 'Why Choose <span class="halfHeading">Our PV Services?</span>',
      detail:
        'Our CRO delivers comprehensive pharmacovigilance services to ensure drug safety and regulatory compliance. With expertise in ICSR processing, signal management, and global submissions, we help you meet stringent requirements from FDA, EMA, and other authorities. Partner with us to safeguard patients, streamline PV operations, and achieve regulatory success with confidence.',
    },
    cta: {
      heading: 'Ready to Strengthen Your Drug Safety Program?',
      tagline: 'Partner with us for expert pharmacovigilance solutions tailored to your needs.',
    },
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'Pharmacovigilance_Click',
    eventLabel: 'Pharmacovigilance Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Pharmacovigilance', 'Risk Management'],
      certification: 'GVP Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmacovigilance & Drug Safety Monitoring Services',
    description:
      'CRO-driven pharmacovigilance services covering safety database setup, ICSR reporting, PSURs, risk management, and literature monitoring.',
    serviceType: 'Pharmacovigilance Services',
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
      serviceUrl: `https://www.indivirtus.com${baseLink}`,
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
      name: 'Pharmacovigilance and Drug Safety Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pharmacovigilance Database Setup',
            description:
              'Configuration of compliant drug safety databases and systems such as Argus, ARISg, and custom platforms.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical Information Call Centre (MICC)',
            description:
              '24/7 support center for managing medical inquiries, product complaints, and adverse event intake.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PSMF and SOPs Preparation',
            description:
              'Preparation of the Pharmacovigilance System Master File and PV SOPs aligned with EMA and FDA guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICSR Case Processing and ADR Reporting',
            description:
              'End-to-end ICSR management including MedDRA coding, narrative writing, and submission to authorities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Literature Monitoring',
            description:
              'Automated and manual screening of global scientific literature to identify reportable safety signals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PSUR / PBRER / PADER Report Preparation',
            description:
              'Preparation and submission of periodic safety reports as per EMA, FDA, and other agency requirements.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Risk Management Plan (RMP)',
            description:
              'Creation and maintenance of RMPs to mitigate known or potential risks associated with medicinal products.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Signal Management',
            description:
              'Detection, validation, analysis, and tracking of safety signals in line with regulatory expectations.',
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
        name: 'What is a Pharmacovigilance Database?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A PV database is a secure system used to collect, manage, and submit adverse event reports. It ensures regulatory compliance and accurate tracking of safety data across product lifecycles.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services are included in a Medical Information Call Centre (MICC)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MICC services include responding to medical inquiries, product information dissemination, adverse event intake, and complaint logging—all handled by trained healthcare professionals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the PSMF and why is it required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pharmacovigilance System Master File (PSMF) provides an overview of the PV system used by the Marketing Authorization Holder. It is a regulatory requirement in the EU and other markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ICSR and how do you process it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An Individual Case Safety Report (ICSR) is a detailed record of an adverse drug reaction. We handle collection, MedDRA coding, narrative writing, quality control, and submission to EudraVigilance, FDA FAERS, etc.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is literature monitoring in PV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Literature monitoring involves scanning scientific journals and databases for reports of adverse events or new safety concerns related to your products. It's a mandatory pharmacovigilance activity.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are PSUR, PBRER, and PADER reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These are periodic safety reports required by regulatory bodies. PSUR (EU), PBRER (global format), and PADER (US FDA) summarize the benefit-risk balance of a product over a defined period.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a Risk Management Plan (RMP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "An RMP outlines known and potential risks of a drug and describes how these will be minimized. It's essential for products with significant safety profiles or conditional approvals.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do you manage safety signals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow a structured signal management process—detection, validation, prioritization, assessment, and recommendation—based on quantitative and qualitative safety data.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does your pharmacovigilance database setup include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our database setup includes implementation of validated safety databases like Argus Safety or Veeva Vault, workflow customization, MedDRA/WHO-DD coding, 21 CFR Part 11 compliance, and E2B R3 data exchange setup.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does your Medical Information Call Centre operate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our 24/7 MICC provides multilingual support for medical inquiries, adverse event intake, and product complaint triage, handling interactions from healthcare professionals and patients globally.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is involved in ICSR case processing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ICSR processing includes triage, data entry, MedDRA coding, narrative writing, seriousness/causality assessment, and submission to authorities like EMA, FDA, and DCGI using E2B R2/R3 formats.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure compliance with global PV regulations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We adhere to GVP Modules, ICH E2E, FDA 21 CFR Part 11, EU Annex 11, and regional requirements, with compliance monitoring, audit preparation, and CAPA management.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from your pharmacovigilance services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical companies, biotech firms, generic and biosimilar manufacturers, and MAHs benefit by ensuring drug safety, regulatory compliance, and effective risk management.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the role of literature monitoring in pharmacovigilance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Literature monitoring involves global and local surveillance for ADRs and safety signals using databases like Embase and PubMed, ensuring compliance with GVP Module VI.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmacovigilance Services | Safety Reporting & Risk Management | Indivirtus',
    description:
      'Comprehensive CRO-led pharmacovigilance services including ICSR processing, PSUR/PBRER reporting, signal detection, and database setup for regulatory compliance.',
    keywords: [
      'pharmacovigilance',
      'ICSR case processing',
      'PSUR reporting',
      'PADER',
      'PBRER',
      'Risk Management Plan',
      'signal detection',
      'medical information call centre',
      'PV database setup',
      'GVP compliance',
      'drug safety monitoring',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${baseLink}.jpg`,
      url: baseLink,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharmacovigilance & Drug Safety Monitoring | Indivirtus',
      description: 'ICSR reporting, RMP, PSUR/PADER preparation, and full PV support under one CRO service umbrella.',
      image: `https://www.indivirtus.com${baseLink}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${baseLink}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    'Pharmacovigilance System Setup',
    'ICSR & ADR Reporting',
    'Periodic Safety Reports',
    'Risk Management Strategy',
    'Signal Detection & Literature Monitoring',
  ],
};
