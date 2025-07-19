import serviceImage from '@/assets/gmp-compliance-trainings/quality-systems-training.jpg';
const link = '/services/gmp-compliance-trainings/quality-systems-training';

export default {
  slug: 'quality-systems-training',
  parentSlug: 'gmp-compliance-trainings',
  service_id: 'QMS-TRN-007',
  report_type: 'Training Modules',
  title: 'Pharmaceutical Quality Systems Training',
  name: 'Quality Systems Training',
  description:
    'Comprehensive GMP training covering ICH Q10, quality culture, ALCOA+ data integrity, CAPA, deviation handling, and risk management based on ICH Q9.',
  full_description:
    'Our Quality Systems Training program is designed to strengthen the foundational and advanced elements of pharmaceutical quality systems. This includes a deep dive into ICH Q10 and quality culture practices, hands-on strategies for ALCOA+ data integrity implementation, and robust approaches to CAPA and deviation management. We also cover risk management frameworks aligned with ICH Q9 to help your teams proactively mitigate GMP risks and ensure regulatory alignment across operations.',
  estimated_duration: '2 Days',
  deliverables: ['Training Certificate', 'CAPA/Deviation Toolkit', 'Data Integrity Checklist', 'QRM Templates'],
  regulatory_basis: ['ICH Q10', 'ICH Q9', 'FDA 21 CFR Part 11', 'WHO Guidelines on QMS & Data Integrity'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'APIs', 'Sterile Manufacturing', 'Contract Manufacturing'],
  expertise_area: ['GMP Compliance', 'Quality Systems', 'Data Governance'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical Quality Systems training by Indivirtus',
    caption: 'Training on ICH Q10, ALCOA+, CAPA, deviation handling, and ICH Q9 risk management',
  },
  gtm: {
    eventCategory: 'Training',
    eventAction: 'Quality Systems Training View',
    eventLabel: 'Quality Systems Training Service Page',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Training Modules'],
      certification: 'Yes',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Quality Systems Training for Pharmaceutical GMP Compliance',
    description:
      'Training on pharmaceutical quality systems based on ICH Q10, ALCOA+ data integrity, CAPA management, and risk frameworks under ICH Q9.',
    serviceType: 'Quality Systems Training',
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
      name: 'Quality Systems Training Modules',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'ICH Q10 & Quality Culture',
          description: 'In-depth training on pharmaceutical quality systems and embedding a proactive quality culture.',
        },
        {
          '@type': 'Offer',
          name: 'Data Integrity (ALCOA+)',
          description:
            'Workshop on ensuring data reliability, completeness, and compliance with ALCOA+ principles and regulatory expectations.',
        },
        {
          '@type': 'Offer',
          name: 'CAPA & Deviation Management',
          description:
            'Hands-on tools and best practices for identifying, investigating, and closing deviations and CAPAs effectively.',
        },
        {
          '@type': 'Offer',
          name: 'Risk Management (ICH Q9)',
          description: 'Application of risk-based thinking in pharmaceutical operations based on ICH Q9 framework.',
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
        name: 'What is the focus of Quality Systems Training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This training covers ICH Q10 quality systems, ALCOA+ data integrity principles, deviation and CAPA management, and risk management per ICH Q9.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the training relevant for our QA and QC departments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this training is essential for QA/QC professionals, compliance officers, and managers responsible for quality operations and regulatory readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tools are included in the training package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Participants receive CAPA templates, deviation investigation formats, ALCOA+ checklists, and risk ranking tools for immediate implementation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this training aligned with ICH Q9 and Q10?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the training is fully based on ICH Q9 (Quality Risk Management) and ICH Q10 (Pharmaceutical Quality System) guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will this training help us prepare for regulatory inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. By strengthening documentation, deviation handling, and risk mitigation processes, this training helps your team meet regulatory expectations.',
        },
      },
    ],
  },
  meta: {
    title: 'Quality Systems Training | ICH Q10, ALCOA+, CAPA | Indivirtus',
    description:
      'Empower your pharma teams with training on ICH Q10, ALCOA+ data integrity, deviation/CAPA handling, and ICH Q9 risk management. Designed for GMP compliance.',
    keywords: [
      'ICH Q10 training',
      'ALCOA+ data integrity',
      'CAPA and deviation training',
      'ICH Q9 risk management',
      'pharma QMS training',
      'quality systems pharmaceutical',
      'GMP data integrity training',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Quality Systems Training | ICH Q10, ALCOA+, CAPA | Indivirtus',
      description:
        'Train your teams on QMS topics including ALCOA+, CAPA handling, and risk-based quality frameworks. Globally compliant.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['CAPA Effectiveness Assessment', 'QMS Maturity Scoring', 'Data Integrity Gap Analysis'],
};
