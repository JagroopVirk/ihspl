import serviceImage from '@/assets/gmp-compliance-trainings/training-methodologies.jpg';
const link = '/services/gmp-compliance-trainings/training-methodologies';

export default {
  slug: 'training-methodologies',
  parentSlug: 'gmp-compliance-trainings',
  service_id: 'TRNG-METH-005',
  report_type: 'Training Framework',
  title: 'Custom Training Methodologies for Pharmaceutical Teams',
  name: 'Training Methodologies',
  description:
    'Flexible, role-specific training delivery methods including on-site, virtual, hybrid formats, Train-the-Trainer programs, and training needs analysis for pharma teams.',
  full_description:
    'At Indivirtus, our Training Methodologies are built to align with the diverse learning preferences and operational needs of pharmaceutical organizations. Whether you prefer on-site sessions, virtual engagement, or hybrid models, we ensure seamless delivery. Our role-specific workshops enhance functional competency, while our Train-the-Trainer programs build internal capacity for sustained learning. Each initiative begins with a comprehensive Training Needs Analysis (TNA) to ensure targeted outcomes and GMP-aligned performance enhancement.',
  estimated_duration: 'Customizable per program',
  deliverables: [
    'Training Needs Analysis Report',
    'Customized Curriculum',
    'Workshop Material',
    'Trainer Certification',
  ],
  regulatory_basis: ['EU GMP Chapter 2', 'ICH Q10 – Pharmaceutical Quality System', 'WHO GMP Training Guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Vaccines', 'APIs', 'Contract Manufacturing'],
  expertise_area: ['Training & Capacity Building', 'Pharmaceutical Compliance', 'Learning Design'],
  is_active: true,
  pageLink: link,
  icon: '🧑‍🏫',
  image: {
    path: serviceImage,
    alt: 'Training methodologies for pharma industry by Indivirtus',
    caption: 'Customized pharma GMP training delivery: on-site, virtual, hybrid, and role-specific',
  },
  gtm: {
    eventCategory: 'Training',
    eventAction: 'Training Methodologies View',
    eventLabel: 'Training Methodologies Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Training Framework'],
      certification: 'Yes',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Training Methodologies',
    description:
      'Flexible and effective pharmaceutical GMP training methodologies including virtual, hybrid, and role-based programs for CRO and manufacturing teams.',
    serviceType: 'Training Delivery Models',
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
      name: 'Training Methodology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'On-site/Virtual/Hybrid Training Delivery',
          description:
            'Flexible training modes to suit organizational needs, with online, physical, or blended formats.',
        },
        {
          '@type': 'Offer',
          name: 'Role-Specific Workshops',
          description:
            'Customized workshops designed for quality, production, validation, regulatory, and warehouse roles in pharma.',
        },
        {
          '@type': 'Offer',
          name: 'Train-the-Trainer Programs',
          description: 'Internal trainer development programs to sustain and scale GMP knowledge internally.',
        },
        {
          '@type': 'Offer',
          name: 'Training Needs Analysis (TNA)',
          description:
            'A structured approach to identify learning gaps and align training goals with compliance objectives.',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Project-based pricing',
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
        name: 'What delivery formats are available for pharmaceutical training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer on-site, virtual, and hybrid training formats to ensure flexibility and continuity for pharma teams across locations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are role-specific workshops in GMP training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These are tailored sessions for roles such as QA/QC, production, regulatory, and warehouse personnel, ensuring contextual relevance and job performance alignment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do Train-the-Trainer programs work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We prepare internal trainers through workshops and mentoring to deliver high-impact training sessions consistently within your organization.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Training Needs Analysis (TNA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TNA is a structured method to assess current competencies, identify skill gaps, and design a training roadmap aligned with regulatory requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the training customizable based on our site’s needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all training modules and delivery formats are fully customizable based on your facility’s processes, regulatory history, and team structure.',
        },
      },
    ],
  },
  meta: {
    title: 'Training Methodologies for GMP Teams | Indivirtus',
    description:
      'Explore customizable pharma training methodologies including virtual/on-site sessions, TNA assessments, and role-specific GMP workshops by Indivirtus.',
    keywords: [
      'Pharma training methodologies',
      'Train-the-trainer programs',
      'Role-based GMP workshops',
      'Training needs analysis for GMP',
      'Hybrid pharma GMP training',
      'custom GMP training delivery',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Training Methodologies for GMP Teams | Indivirtus',
      description:
        'Role-based and hybrid GMP training models for pharma teams, with TNA and internal trainer development.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Training Needs Analysis (TNA)', 'Role-based Pre/Post Assessments'],
};
