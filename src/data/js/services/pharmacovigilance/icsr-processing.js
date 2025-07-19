import serviceImage from '@/assets/pharmacovigilance/icsr-processing.jpg';
const link = '/services/pharmacovigilance/icsr-processing';

export default {
  slug: 'icsr-processing',
  parentSlug: 'pharmacovigilance',
  service_id: 'PHV010',
  report_type: 'ICSR Case Management & Regulatory Reporting',
  title: 'ICSR Case Processing Services',
  name: 'End-to-End ICSR Processing & E2B Submissions',
  description:
    'Efficient and compliant ICSR case processing including triage, MedDRA coding, seriousness assessment, and E2B R2/R3 submissions.',
  full_description:
    'Indivirtus provides full lifecycle processing of Individual Case Safety Reports (ICSRs) for pharmaceutical and biotech companies. Our pharmacovigilance specialists manage intake, triage, MedDRA coding, narrative drafting, seriousness assessment, and electronic submission (E2B R2/R3) via industry-standard safety databases. We also handle case follow-up and source reconciliation to ensure regulatory compliance and signal detection readiness. With validated systems and global compliance expertise, we support both spontaneous and solicited case workflows with precision and traceability.',
  estimated_duration: 'Ongoing with daily/weekly case volume support',
  deliverables: [
    'Processed ICSRs (MedWatch, CIOMS, e2B XML)',
    'MedDRA-coded adverse events',
    'Case narratives and seriousness justification',
    'Follow-up action logs',
    'Reconciliation reports with safety database and source systems',
  ],
  regulatory_basis: ['ICH E2B(R2/R3)', 'GVP Module VI', 'FDA 21 CFR Part 314.80', 'EMA Volume 9A'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Vaccine Manufacturers'],
  expertise_area: ['Pharmacovigilance', 'Safety Data Management', 'Regulatory Affairs'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'ICSR Case Processing and E2B Submissions',
    caption: 'Case intake, MedDRA coding, and global regulatory reporting through ICSR workflows.',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'ICSR Processing Viewed',
    eventLabel: 'ICSR Case Processing',
    customDimensions: {
      serviceType: 'ICSR Case Management',
    },
    dataLayerPush: {
      reportType: ['ICSR', 'E2B Submissions', 'Narrative Reports'],
      certification: 'ICH E2B(R3), GVP VI',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'End-to-End ICSR Processing & E2B Submissions',
    description:
      'End-to-end ICSR processing services including MedDRA coding, seriousness assessment, and E2B R2/R3 submissions for pharma and biotech by Indivirtus.',
    serviceType: 'ICSR Case Processing Services',
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
      name: 'ICSR Processing Service Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Triage & MedDRA Coding',
          description: 'Clinical triage of case reports and accurate MedDRA coding for adverse events and indications.',
        },
        {
          '@type': 'Offer',
          name: 'E2B R2/R3 Submissions',
          description:
            'Preparation and transmission of structured ICSR files via E2B R2 or R3 format to global health authorities.',
        },
        {
          '@type': 'Offer',
          name: 'Seriousness Assessment',
          description:
            'Medical review and documentation of case seriousness and expectedness using company core safety information.',
        },
        {
          '@type': 'Offer',
          name: 'Follow-up & Reconciliation',
          description:
            'Management of follow-up activities and source data reconciliation to ensure consistency across reporting systems.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Volume-based pricing per case or monthly retainer',
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
        name: 'What case types do you support in ICSR processing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We handle both spontaneous and solicited case types, including clinical trial cases, literature reports, patient support program cases, and post-marketing spontaneous reports.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support MedDRA version upgrades and dictionary management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we support MedDRA version upgrades and use validated tools for dictionary version control and auto-recode functions as per MedDRA MSSO updates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you process and submit E2B (R3) files through our safety database?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We integrate with safety systems like Argus, ArisG, and Veeva Vault to process and submit E2B files, including gateway communication when access is provided.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is seriousness and causality assessed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our medically qualified team assesses seriousness and causality based on client SOPs, reference safety information (RSI), and global regulatory expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure case reconciliation accuracy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We perform regular reconciliation between source systems (e.g., medical information, clinical, PV database) to ensure no case is missed or duplicated, with full traceability logs.',
        },
      },
    ],
  },
  meta: {
    title: 'ICSR Case Processing Services for Pharma | Indivirtus',
    description:
      'Full-service ICSR processing including MedDRA coding, narrative drafting, seriousness assessment, follow-up, and E2B R2/R3 submissions. Global compliance assured.',
    keywords: [
      'ICSR processing service',
      'MedDRA coding pharma',
      'E2B R3 submission support',
      'follow-up and reconciliation PV',
      'case triage pharmacovigilance',
      'narrative writing drug safety',
      'pharma safety case processing',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'ICSR Case Processing Services for Pharma | Indivirtus',
      description:
        'Indivirtus supports full-spectrum ICSR case processing from triage to regulatory submission, including MedDRA coding and reconciliation workflows.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [],
};
