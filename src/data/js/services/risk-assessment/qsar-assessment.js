import serviceImage from '@/assets/risk-assessment/qsar-assessment.jpg';
const link = '/services/risk-assessment/qsar-assessment';

export default {
  slug: 'qsar-assessment',
  parentSlug: 'risk-assessment',
  service_id: 'cro-qsar-assessment',
  report_type: 'In Silico (Q)SAR Assessment',
  title: 'In Silico (Q)SAR Assessment',
  name: 'In Silico (Q)SAR Assessment',
  description:
    'Predict mutagenicity and toxicity using ICH M7-compliant (Q)SAR assessments powered by Derek Nexus and Leadscope.',
  full_description:
    'Our In Silico (Q)SAR Assessment service leverages cutting-edge software tools like Derek Nexus and Leadscope to predict the toxicological properties of pharmaceutical impurities and active substances. This dual-model strategy—combining rule-based and statistical approaches—ensures scientifically sound, ICH M7-compliant outcomes. These assessments reduce reliance on animal testing and help accelerate development timelines while meeting global regulatory expectations.',
  estimated_duration: '3–5 working days',
  deliverables: [
    'ICH M7-compliant (Q)SAR report',
    'Dual-model assessment summary (rule-based + statistical)',
    'Mutagenicity prediction results',
    'Supporting scientific rationale and conclusions',
  ],
  regulatory_basis: ['ICH M7 (R1)', 'OECD QSAR Principles', 'FDA Guidance on Genotoxic Impurities'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'API Manufacturing', 'Biotech', 'CDMOs'],
  expertise_area: ['Computational Toxicology', 'Regulatory Toxicology', 'Genotoxicity'],
  is_active: true,
  pageLink: link,
  icon: '🧬',
  image: {
    path: serviceImage,
    alt: 'QSAR Toxicity Prediction Report',
    caption: 'Regulatory-compliant in silico assessments using advanced toxicology software.',
  },
  gtm: {
    eventCategory: 'In Silico QSAR Assessment',
    eventAction: 'QSAR Page View',
    eventLabel: 'QSAR Service Detail',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['QSAR Assessment'],
      certification: 'ICH M7 (R1) compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'In Silico (Q)SAR Assessment',
    description:
      'In Silico (Q)SAR Assessment services using Derek Nexus and Leadscope for ICH M7-compliant mutagenicity prediction.',
    serviceType: 'QSAR Mutagenicity Assessment',
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
      name: 'In Silico (Q)SAR Assessment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Advanced Toxicity Predictions with Derek Nexus and Leadscope',
            description:
              'Predictive modeling of potential mutagenicity using licensed expert systems and AI-driven algorithms.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dual-Model Approach (Rule-based & Statistical)',
            description:
              'Combines expert-curated rule sets with machine learning-based models for reliable and reproducible results.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICH M7-Compliant Mutagenicity Reports',
            description:
              'Regulatory-ready reports designed for submission under ICH M7 guidelines for pharmaceutical impurities.',
          },
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
        name: 'What is (Q)SAR in toxicology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "(Q)SAR—Quantitative Structure-Activity Relationship—is a computational technique that predicts a chemical’s toxicity based on its molecular structure. It's widely used in regulatory risk assessment.",
        },
      },
      {
        '@type': 'Question',
        name: 'Which tools are used in your QSAR assessments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use validated industry-standard platforms: Derek Nexus for rule-based assessments and Leadscope for statistical model predictions. This dual approach improves confidence in predictions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your QSAR reports compliant with ICH M7?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our reports fully adhere to ICH M7 (R1) guidelines and include justification for both software tools used, alongside applicability domain and confidence levels.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the dual-model approach improve reliability?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By combining rule-based reasoning (from expert knowledge) with statistical analysis (from large datasets), we achieve broader coverage and more scientifically sound results.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this service accepted by global regulatory agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our QSAR reports are used in submissions to FDA, EMA, and other global regulatory bodies. They help avoid unnecessary testing and speed up approval processes.',
        },
      },
    ],
  },
  meta: {
    title: 'In Silico QSAR Assessment Services | Indivirtus CRO',
    description:
      'ICH M7-compliant in silico (Q)SAR mutagenicity prediction using Derek Nexus and Leadscope. Regulatory-ready reports for pharmaceutical impurities.',
    keywords: [
      'QSAR assessment',
      'In silico mutagenicity',
      'Derek Nexus Leadscope',
      'ICH M7 report',
      'Computational toxicology',
      'Indivirtus CRO',
      'Regulatory QSAR services',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'In Silico QSAR Assessment Services | Indivirtus CRO',
      description:
        'Regulatory-grade in silico toxicological assessment using Derek Nexus and Leadscope. Fast, reliable, and ICH M7-compliant.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['QSAR Mutagenicity Prediction', 'Dual-model Toxicity Assessment', 'Regulatory In Silico Analysis'],
};
