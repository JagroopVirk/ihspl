import serviceImage from '@/assets/gmp-audits/quality-systems.jpg';
const link = '/services/gmp-audits/quality-systems';

export default {
  slug: 'quality-systems',
  parentSlug: 'gmp-audits',
  service_id: 'QSD-004',
  report_type: 'Quality System Gap Report',
  title: 'Quality System Development',
  name: 'Quality System Development Services',
  description:
    'Establish, enhance, and audit pharmaceutical quality systems with a risk-based, global compliance approach.',
  full_description:
    'Indivirtus offers comprehensive Quality System Development services tailored to pharmaceutical companies. Whether setting up a new QMS or optimizing existing ones, we ensure alignment with regulatory expectations such as ICH Q10, FDA, and WHO guidelines. Our services span ALCOA+ compliance, SOP audits, and deviation management—creating a robust and inspection-ready quality culture.',
  estimated_duration: '2 to 4 weeks depending on scope',
  deliverables: [
    'Quality Management System (QMS) framework',
    'ALCOA+ compliance checklist and remediation plan',
    'SOP audit reports',
    'Deviation & OOS review summary',
  ],
  regulatory_basis: [
    'ICH Q10 - Pharmaceutical Quality System',
    'FDA 21 CFR Parts 210 & 211',
    'WHO TRS 986 Annex 2',
    'EU GMP Chapter 1: Quality Management',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Contract Manufacturing'],
  expertise_area: ['Quality Assurance', 'Regulatory Affairs', 'Data Integrity'],
  is_active: true,
  pageLink: link,
  icon: '📋',
  image: {
    path: serviceImage,
    alt: 'Quality system development consulting for pharmaceutical QMS',
    caption: 'Comprehensive QMS development & data integrity auditing',
  },
  gtm: {
    eventCategory: 'GMP Audit Services',
    eventAction: 'View Quality System Development Service',
    eventLabel: 'quality-systems',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['QMS Setup', 'SOP Audit', 'ALCOA+ Compliance'],
      certification: 'ISO/GMP aligned',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Quality System Development Services',
    description:
      'GMP-compliant QMS setup and documentation audits with a focus on ALCOA+ data integrity and deviation management.',
    serviceType: 'Quality Management Consulting',
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
      name: 'Quality System Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'QMS Setup & Optimization',
          itemOffered: {
            '@type': 'Service',
            name: 'QMS Setup & Optimization',
            description:
              'Setup or refine your Quality Management System in alignment with ICH Q10, EU GMP, and US FDA standards.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Data Integrity (ALCOA+)',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Integrity (ALCOA+)',
            description:
              'Ensure compliance with data governance principles using our ALCOA+ audit tools and remediation strategies.',
          },
        },
        {
          '@type': 'Offer',
          name: 'SOP & Documentation Audits',
          itemOffered: {
            '@type': 'Service',
            name: 'SOP & Documentation Audits',
            description: 'Review and audit SOPs, batch records, logbooks and quality documents for GMP readiness.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Deviation & OOS Management',
          itemOffered: {
            '@type': 'Service',
            name: 'Deviation & OOS Management',
            description:
              'Implement effective deviation handling systems and out-of-specification investigations with CAPA integration.',
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
        name: 'What is included in a QMS setup service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our QMS setup includes policy framework development, standard operating procedures (SOPs), document control, change management protocols, and training matrices customized to regulatory expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you assess ALCOA+ compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We audit your data recording and documentation systems to ensure attributes like Attributable, Legible, Contemporaneous, Original, and Accurate data practices are in place, with enhancements for ALCOA+ such as Consistent and Enduring.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you audit existing SOPs for gaps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we evaluate the structure, content, and regulatory compliance of your SOPs to identify gaps and suggest revisions aligned with current GMP standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you support deviation and OOS investigations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We assist in root cause analysis, documentation, risk assessment, and CAPA implementation for both deviation and out-of-specification events.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your QMS services applicable for global regulatory bodies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We align our QMS frameworks with EMA, USFDA, MHRA, WHO, and CDSCO standards, ensuring readiness for global inspections.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharma Quality System Development | QMS Setup & ALCOA+ Audits – Indivirtus',
    description:
      'Establish or optimize your pharmaceutical QMS with Indivirtus. Services include ALCOA+ compliance, SOP audits, and deviation/OOS handling. Globally compliant.',
    keywords: [
      'Quality system development',
      'Pharma QMS setup',
      'ALCOA+ audits',
      'Deviation handling',
      'SOP documentation audit',
      'GMP QMS consulting',
      'Pharmaceutical data integrity',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma Quality System Development | QMS Setup & ALCOA+ Audits - Indivirtus',
      description:
        'Optimize your GMP compliance with QMS consulting, ALCOA+ audits, and deviation management from Indivirtus.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['QMS Gap Assessment', 'SOP Audit', 'ALCOA+ Data Integrity Review', 'Deviation/OOS Risk Review'],
};
