import serviceImage from '@/assets/gmp-audits/audit-representation.jpg';
const link = '/services/gmp-audits/audit-representation';

export default {
  slug: 'audit-representation',
  parentSlug: 'gmp-audits',
  service_id: 'AR001',
  report_type: 'Audit Assistance & Response',
  title: 'Audit Representation Services',
  name: 'Audit Representation',
  description:
    'Real-time support and strategic response services during regulatory audits for pharmaceutical companies.',
  full_description:
    'Our Audit Representation services are tailored for pharmaceutical manufacturers and CROs needing experienced support during regulatory inspections. We provide on-site audit assistance, prepare comprehensive responses, help with CAPA development, and ensure complete post-inspection follow-up. With expertise in international regulatory requirements, our team ensures your compliance posture is always audit-ready.',
  estimated_duration: '1–4 weeks depending on scope and findings',
  deliverables: [
    'On-site audit support report',
    'Audit response documents',
    'CAPA plan and documentation',
    'Post-inspection summary & follow-up plan',
  ],
  regulatory_basis: ['21 CFR Part 210/211', 'EU GMP Guidelines', 'ICH Q10'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'CROs'],
  expertise_area: ['GMP Audits', 'Regulatory Compliance', 'CAPA Management'],
  is_active: true,
  pageLink: link,
  icon: '🛡️',
  image: {
    path: serviceImage,
    alt: 'Audit Representation for Pharma CROs',
    caption: 'Supporting regulatory audits for pharmaceutical companies.',
  },
  gtm: {
    eventCategory: 'Audit Services',
    eventAction: 'Audit Representation Viewed',
    eventLabel: 'Audit Representation CRO Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Audit Support', 'CAPA Development'],
      certification: 'Audit-readiness',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Audit Representation',
    description:
      'Real-time support, CAPA preparation, and post-audit guidance for pharmaceutical regulatory inspections.',
    serviceType: 'Audit Support Service',
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
      name: 'Audit Representation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'On-site support during inspections',
            description:
              'Experienced team members provide live audit representation to communicate with regulators and document findings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit response preparation',
            description:
              'Preparation of precise, regulator-ready responses including timelines, root cause analysis, and evidence.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CAPA development',
            description: 'Design and documentation of corrective and preventive actions based on audit observations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Post-inspection follow-up',
            description: 'Support for implementing agreed CAPAs and addressing any additional regulator queries.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Scope-based pricing',
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
        name: 'What is the role of audit representation in pharmaceutical inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Audit representation ensures that you have experienced professionals on-site during inspections to provide clarifications, document observations, and guide the inspection process efficiently.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you help prepare responses after an audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in drafting detailed, regulator-compliant audit responses that include root cause analysis and CAPA documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support during international audits like US FDA or EMA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our team is experienced in handling audits from global regulators including US FDA, EMA, MHRA, and WHO.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of CAPA assistance do you provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help develop robust CAPA plans addressing both immediate and systemic issues, along with documentation and timelines for execution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer remote support if on-site is not feasible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer both on-site and virtual audit support depending on your location and regulatory needs.',
        },
      },
    ],
  },
  meta: {
    title: 'Audit Representation Services for Pharma | Indivirtus',
    description:
      'Get expert audit representation during pharmaceutical inspections. We provide on-site support, CAPA planning, audit response drafting, and follow-up strategies.',
    keywords: [
      'audit support pharma',
      'regulatory inspection help',
      'CAPA audit preparation',
      'pharma audit response service',
      'on-site inspection representation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Audit Representation Services for Pharma | Indivirtus',
      description:
        'Full-service audit assistance, from on-site representation to CAPA documentation. Ensure compliance during every inspection.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Regulatory Inspection Support', 'CAPA & Deviation Handling'],
};
