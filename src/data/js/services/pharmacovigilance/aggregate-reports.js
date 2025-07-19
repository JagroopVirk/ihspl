import serviceImage from '@/assets/pharmacovigilance/aggregate-reports.jpg';
const link = '/services/pharmacovigilance/aggregate-reports';

export default {
  slug: 'aggregate-reports',
  parentSlug: 'pharmacovigilance',
  service_id: 'PHV-AGGR-REP-001',
  report_type: 'PSUR, PBRER, DSUR, ASR, PADER',
  title: 'Aggregate Safety Reports',
  name: 'Aggregate Reports',
  description: 'Expert preparation of PSUR, DSUR, and PADER reports as per global PV guidelines.',
  full_description:
    'Aggregate safety reporting is a critical component of pharmacovigilance, helping evaluate a drug’s benefit-risk profile over time. At Indivirtus, we specialize in the preparation, medical review, and quality assurance of all major aggregate reports — including PSURs, PBRERs, PADERs, DSURs, and Annual Safety Reports (ASRs) — in line with ICH E2C(R2) and region-specific requirements. Our scientific and regulatory experts ensure timely submissions, high-quality narratives, and full compliance with global authority expectations.',
  estimated_duration: '4–6 weeks depending on report type',
  deliverables: [
    'Draft & final PSUR/PBRER reports',
    'DSUR or ASR (as applicable)',
    'Region-specific PADERs',
    'Integrated summary tables',
    'Submission-ready XML or eCTD output',
    'Medical review and quality control',
  ],
  regulatory_basis: ['ICH E2C(R2)', 'ICH E2F', 'FDA, EMA, PMDA Safety Guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Clinical Research', 'MAHs'],
  expertise_area: ['Pharmacovigilance Writing', 'Medical Review', 'Regulatory Submissions'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'PSUR, PBRER, DSUR Pharmacovigilance Report Services',
    caption: 'Aggregate report writing and compliance support by Indivirtus',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Aggregate Reports Viewed',
    eventLabel: 'Aggregate Reports',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['PSUR', 'PBRER', 'PADER', 'DSUR', 'ASR'],
      certification: 'ICH E2C(R2), ICH E2F',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Aggregate Reports',
    description:
      'Indivirtus offers PSUR, DSUR, PADER, ASR, and PBRER report preparation in compliance with ICH and regulatory authority guidelines.',
    serviceType: 'Pharmacovigilance Aggregate Reporting',
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
      name: 'Aggregate Report Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'PSUR, PBRER, PADER',
          description:
            'Preparation of periodic safety reports including PSUR (Periodic Safety Update Reports), PBRER (Periodic Benefit-Risk Evaluation Reports), and US-specific PADERs with end-to-end compliance and submission support.',
        },
        {
          '@type': 'Offer',
          name: 'DSUR & Annual Safety Reports',
          description:
            'Preparation of Development Safety Update Reports (DSURs) and Annual Safety Reports (ASRs) during clinical development phases.',
        },
        {
          '@type': 'Offer',
          name: 'ICH E2C(R2) Compliance',
          description:
            'Ensuring all aggregate reports comply with the current ICH E2C(R2) and E2F regulatory standards with proper format, structure, and submission tracking.',
        },
        {
          '@type': 'Offer',
          name: 'Medical & Quality Review',
          description:
            'Thorough internal quality and medical review of all reports, ensuring scientific accuracy, compliance, and alignment with risk-benefit evaluation.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Compound-based pricing',
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
        name: 'What is the difference between PSUR and PBRER?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PBRER is an updated version of PSUR as per ICH E2C(R2) guidelines. While PSURs focused on adverse event reporting, PBRERs include a comprehensive benefit-risk evaluation and cumulative data review.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide PADERs for the US market?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indivirtus prepares PADERs in compliance with FDA requirements including submission timelines, adverse event summaries, and narrative formatting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is responsible for DSUR preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DSURs are typically prepared by the sponsor during clinical development. Indivirtus supports sponsors by drafting, medically reviewing, and formatting DSURs according to ICH E2F guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure quality in aggregate reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each report undergoes detailed medical and QC review, version tracking, and a two-tier editorial review process to ensure scientific integrity and compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you handle submission of aggregate reports to regulatory portals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide submission-ready documents in eCTD format and support gateway submission processes such as EVWeb (EMA), ESG (FDA), and others.',
        },
      },
    ],
  },
  meta: {
    title: 'Aggregate Reports (PSUR, PBRER, DSUR) | Indivirtus Pharmacovigilance Services',
    description:
      'Get compliant PSUR, PBRER, DSUR, and PADER reports with medical review and global regulatory alignment. Reliable aggregate reporting services by Indivirtus.',
    keywords: [
      'PSUR preparation',
      'PBRER writing services',
      'DSUR report service',
      'PADER for FDA',
      'Aggregate reports pharmacovigilance',
      'ICH E2C(R2) compliance',
      'ASR writing support',
      'Medical review of PV reports',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'PSUR & Aggregate Reports | Indivirtus',
      description:
        'High-quality aggregate PV reports — PSUR, PBRER, DSUR — prepared by medical experts, compliant with global guidelines.',
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
    'Aggregate Report Gap Analysis',
    'ICH E2C(R2) Compliance Check',
    'Medical Review & Narrative Accuracy',
    'Submission Readiness Assessment',
  ],
};
