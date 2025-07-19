import serviceImage from '@/assets/gmp-compliance-trainings/gxp-training.jpg';
const link = '/services/gmp-compliance-trainings/gxp-training';

export default {
  slug: 'gxp-training',
  parentSlug: 'gmp-compliance-trainings',
  service_id: 'GXP-TRN-007',
  report_type: 'Training Module',
  title: 'GxP Training',
  name: 'GxP Compliance & Best Practices Training',
  description:
    'Comprehensive training on GMP, GLP, GCP, GDP, and GVP with regulatory benchmarks including ICH E6 and 21 CFR 210/211, tailored for pharma professionals.',
  full_description:
    'Our GxP Training program provides in-depth understanding of critical Good Practices—GMP, GLP, GCP, GDP, and GVP—essential for regulatory compliance in pharmaceuticals. We cover key global regulations like ICH E6, 21 CFR Parts 210/211, and compliance considerations for cold chain, warehousing, and clinical trials. Delivered through customized and interactive sessions, the training supports real-world application for QA, QC, R&D, supply chain, and clinical teams.',
  estimated_duration: '1–2 days per module',
  deliverables: [
    'Comprehensive GxP training slide decks',
    'Regulatory reference handouts (ICH, FDA, EMA)',
    'Quiz-based assessments and feedback',
    'Certificate of participation',
  ],
  regulatory_basis: ['ICH E6 (R2)', '21 CFR Part 210/211', 'EU GMP Guidelines', 'WHO TRS'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'Clinical Research'],
  expertise_area: ['Regulatory Training', 'Compliance', 'Quality Assurance'],
  is_active: true,
  pageLink: link,
  icon: '📘',
  image: {
    path: serviceImage,
    alt: 'GxP Training for Pharma Compliance',
    caption: 'GxP Training covering GMP, GLP, GCP, GDP, and GVP requirements.',
  },
  gtm: {
    eventCategory: 'GxP Training',
    eventAction: 'Submit',
    eventLabel: 'GxP Training Inquiry',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Training Module'],
      certification: 'Available',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GxP Compliance & Best Practices Training',
    description:
      'Pharmaceutical GxP training on GMP, GLP, GCP, GDP, and GVP with practical insights into ICH E6 and 21 CFR compliance.',
    serviceType: 'GxP Training',
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
      name: 'GxP Training Modules',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GMP, GLP, GCP, GDP, GVP Fundamentals',
            description: 'Introduction to core GxP principles across development and manufacturing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICH E6 & 21 CFR 210/211 Overview',
            description: 'Understanding ICH E6 Good Clinical Practice and U.S. FDA’s manufacturing regulations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cold Chain & Warehousing Compliance',
            description: 'Best practices for temperature-sensitive product handling and storage audits.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clinical Trial Compliance Essentials',
            description: 'Training for clinical operations, ethics committees, and investigator sites.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Participant-based pricing',
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
        name: 'What is covered under GxP training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GxP training includes GMP (Good Manufacturing Practices), GLP (Good Laboratory Practices), GCP (Good Clinical Practices), GDP (Good Distribution Practices), and GVP (Good Pharmacovigilance Practices).',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should attend GxP training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality assurance, quality control, manufacturing, R&D, clinical, and regulatory teams should attend to stay compliant with global standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this training cover ICH and FDA regulations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the training includes detailed guidance on ICH E6 (GCP) and U.S. FDA’s 21 CFR Parts 210 and 211.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there practical case studies included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, case studies and real-time examples are part of every session to enhance practical understanding.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can training be customized by role or department?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We offer department-specific and role-tailored training modules for greater impact and engagement.',
        },
      },
    ],
  },
  meta: {
    title: 'GxP Training | GMP, GLP, GCP, GDP, GVP | Indivirtus Pharma CRO',
    description:
      'Enroll in GxP training covering GMP, GLP, GCP, GDP & GVP. Includes ICH E6, 21 CFR 210/211, warehousing, cold chain, and clinical trial compliance.',
    keywords: [
      'GxP training',
      'GMP GLP GCP GDP GVP training',
      'ICH E6 training',
      '21 CFR 210/211 workshop',
      'clinical trial compliance training',
      'cold chain pharma training',
      'Indivirtus CRO training',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'GxP Training | GMP, GLP, GCP, GDP, GVP | Indivirtus',
      description:
        'Expert-led GxP training for pharma professionals. GMP, GLP, GCP, GDP & GVP modules including ICH and FDA guidelines.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Knowledge Check Quiz', 'Case Study Analysis', 'Trainer Feedback', 'Participation Certificate'],
};
