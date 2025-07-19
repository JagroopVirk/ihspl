import serviceImage from '@/assets/pharmacovigilance/pv-training.jpg';
const link = '/services/pharmacovigilance/pv-training';

export default {
  slug: 'pv-training',
  parentSlug: 'pharmacovigilance',
  service_id: 'PVTR-003',
  report_type: 'Pharmacovigilance Training',
  title: 'Pharmacovigilance (PV) Training Services',
  name: 'PV Training',
  description:
    'Regulatory-compliant pharmacovigilance training programs including GVP, ICH E2E, MAH systems, and custom workflows.',
  full_description:
    'Indivirtus provides specialized pharmacovigilance (PV) training programs tailored to the needs of pharmaceutical companies, marketing authorization holders (MAHs), and regulatory professionals. From foundational GVP and ICH E2E guideline sessions to advanced PV system setup and train-the-trainer workshops, our programs enhance compliance, team competence, and operational efficiency. Custom PV process design is also available to align your internal systems with global best practices.',
  estimated_duration: '1–4 weeks depending on module selection',
  deliverables: [
    'GVP & ICH E2E training modules',
    'PV system setup templates for MAHs',
    'Trainer kits and facilitator guides',
    'Custom PV process SOPs and workflows',
  ],
  regulatory_basis: ['ICH E2E', 'EMA GVP Modules I–XV', '21 CFR Part 314'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'MAHs', 'Training Organizations'],
  expertise_area: ['Pharmacovigilance', 'Training', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '🎓',
  image: {
    path: serviceImage,
    alt: 'Pharmacovigilance training and system design',
    caption: 'Upskill your PV team with regulatory-driven training programs.',
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'PV Training Inquiry',
    eventLabel: 'PV Training Programs',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['PV Training Certificate'],
      certification: 'ICH/GVP Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'PV Training',
    description:
      'Hands-on training in pharmacovigilance including GVP, ICH guidelines, PV system setup, and custom workflow design.',
    serviceType: 'Pharmacovigilance Training',
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
      name: 'Pharmacovigilance Training Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GVP & ICH E2E Training',
            description:
              'Instructor-led or virtual training on EMA GVP Modules and ICH E2E pharmacovigilance guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PV System Setup for MAHs',
            description: 'Guidance and SOPs to implement compliant PV systems for Marketing Authorization Holders.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Train-the-Trainer Workshops',
            description:
              'Empowering internal leads with facilitation skills and technical content to roll out PV training internally.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom PV Process Design',
            description:
              'Tailored SOPs, workflows, and document templates for organization-specific PV process integration.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Modular-based pricing',
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
        name: 'What is covered under GVP and ICH E2E training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The training covers EMA's Good Pharmacovigilance Practices (GVP Modules I–XV) and ICH E2E guidelines, including signal detection, PSURs, and QPPV responsibilities.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is this training suitable for MAHs setting up their first PV system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide system-level implementation guidance, SOPs, and compliance checklists specifically tailored for Marketing Authorization Holders (MAHs).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in train-the-trainer workshops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These workshops include facilitator handbooks, slide decks, learner assessments, and group activities to enable your internal team to deliver PV training independently.',
        },
      },
      {
        '@type': 'Question',
        name: "Can you design PV training specific to our company's processes?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We offer custom PV process design including SOPs, flowcharts, and templates that align with your organization’s specific risk profile and regulatory needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are training sessions available virtually?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our training modules are available in virtual, on-site, and hybrid formats based on your preference and team location.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmacovigilance Training (PV) Services | GVP, ICH, MAH | Indivirtus',
    description:
      'Regulatory-compliant PV training services by Indivirtus, including GVP & ICH training, MAH system setup, train-the-trainer workshops, and custom PV workflow design.',
    keywords: [
      'PV Training',
      'Pharmacovigilance Training',
      'GVP Training',
      'ICH E2E Guidelines',
      'MAH PV Setup',
      'Train-the-Trainer Pharmacovigilance',
      'PV SOP Design',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'PV Training Services | Indivirtus',
      description:
        'Tailored pharmacovigilance training programs for GVP, ICH, MAH system design, and internal rollout.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['PV Knowledge Assessment', 'System Readiness Check'],
};
