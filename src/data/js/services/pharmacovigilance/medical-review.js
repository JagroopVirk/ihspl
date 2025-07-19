import serviceImage from '@/assets/pharmacovigilance/medical-review.jpg';
const link = '/services/pharmacovigilance/medical-review';

export default {
  slug: 'medical-review',
  parentSlug: 'pharmacovigilance',
  service_id: 'PHV008',
  report_type: 'ICSR & Signal Medical Review',
  title: 'Medical Review Services',
  name: 'Medical Review of ICSR, Signal & Benefit-Risk Reports',
  description:
    'Expert medical review for ICSRs, narratives, signal trends, and benefit-risk profiles as part of global pharmacovigilance.',
  full_description:
    'Our Medical Review service ensures scientific oversight of adverse event cases, signals, and product safety trends. We offer expert evaluation of Individual Case Safety Reports (ICSRs), medical narratives, signal detection outcomes, and benefit-risk profiles. Our team of qualified healthcare professionals applies a structured and compliant review approach to support regulatory submissions, PSURs/PADERs, and safety surveillance efforts. Whether supporting your internal PV team or acting as an extension of it, our reviewers ensure data accuracy, clinical relevance, and timely insights.',
  estimated_duration: 'Project-specific or ongoing (monthly/quarterly)',
  deliverables: [
    'Medically reviewed ICSRs (CIOMS/MedWatch)',
    'Signal trend evaluation reports',
    'Benefit-risk assessment documents',
    'Medical narratives and case summaries',
    'Safety reporting dashboards or annotated trackers',
  ],
  regulatory_basis: ['ICH E2D', 'GVP Module VI & IX', 'US FDA 21 CFR Part 314.80', 'EMA GVP Guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Regulatory Affairs'],
  expertise_area: ['Pharmacovigilance', 'Medical Affairs', 'Drug Safety'],
  is_active: true,
  pageLink: link,
  icon: '🩺',
  image: {
    path: serviceImage,
    alt: 'Medical Review of ICSRs and Signal Reports',
    caption: 'Expert clinical review of ICSRs, narratives, and safety signals for pharmacovigilance.',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'Medical Review Viewed',
    eventLabel: 'Medical Review',
    customDimensions: {
      serviceType: 'Medical Safety Review',
    },
    dataLayerPush: {
      reportType: ['ICSR', 'Signal Detection', 'Benefit-Risk'],
      certification: 'GVP Module VI, ICH E2D',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Medical Review of ICSR, Signal & Benefit-Risk Reports',
    description:
      'Indivirtus offers expert medical review services for ICSRs, safety reports, signal evaluations, benefit-risk assessments, and narrative writing to support global pharmacovigilance.',
    serviceType: 'Medical Review Services',
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
      name: 'Medical Review Service Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'ICSR & Safety Report Review',
          description:
            'Thorough medical assessment of spontaneous and solicited case reports to ensure data quality and regulatory compliance.',
        },
        {
          '@type': 'Offer',
          name: 'Benefit-Risk Assessments',
          description:
            'Evidence-based evaluation of drug safety versus therapeutic benefit for regulatory filings and internal review.',
        },
        {
          '@type': 'Offer',
          name: 'Signal Trend Analysis',
          description:
            'Medical evaluation of potential safety signals and emerging risk patterns using quantitative and clinical methods.',
        },
        {
          '@type': 'Offer',
          name: 'Medical Narrative Writing',
          description:
            'Concise, medically relevant narratives crafted for case reports submitted to regulatory bodies and internal databases.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Case-volume based pricing',
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
        name: 'What qualifications do your medical reviewers have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our reviewers are qualified physicians and healthcare professionals with experience in clinical pharmacology and pharmacovigilance. Each case is reviewed with clinical relevance and regulatory insight.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support both spontaneous and solicited case reviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we support both spontaneous (post-marketing) and solicited (clinical trial, patient support programs) case types in full compliance with GVP and ICH standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you assist with benefit-risk assessment sections of PSUR or PBRER?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We prepare benefit-risk sections using aggregate safety data and literature evaluation for regulatory submission documents like PSURs or PBRERs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the process for signal evaluation and trend analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We combine quantitative data (e.g., disproportionality scores) with clinical assessment to evaluate emerging signals, prepare assessment reports, and advise on next steps per GVP Module IX.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you write case narratives from scratch or only edit existing ones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer both options. Our team can create concise, regulatory-compliant narratives or refine and medicalize existing drafts provided by your PV team.',
        },
      },
    ],
  },
  meta: {
    title: 'Medical Review Services for Pharmacovigilance | Indivirtus',
    description:
      'Comprehensive medical review of ICSRs, signals, narratives, and benefit-risk data by expert physicians. Ensure regulatory compliance with Indivirtus.',
    keywords: [
      'medical review pharma',
      'ICSR medical review',
      'pharmacovigilance narrative writing',
      'benefit-risk assessment service',
      'signal analysis pharma',
      'medical reviewer CRO',
      'safety report review',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Medical Review Services for Pharmacovigilance | Indivirtus',
      description:
        'Get expert medical review support for ICSRs, signal detection, and safety report narratives with Indivirtus’ specialized pharmacovigilance services.',
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
