import serviceImage from '@/assets/msds-sds/msds-review.jpg';
const link = '/services/msds-sds/msds-review';

export default {
  slug: 'msds-review',
  parentSlug: 'msds-sds',
  service_id: 'MSDS_Review_Update_001',
  report_type: 'Safety Documentation',
  title: 'MSDS Review & Updating',
  name: 'MSDS Review & Updating Services',
  description:
    'Ensure your Material Safety Data Sheets remain compliant and up-to-date with evolving global regulatory standards.',
  full_description:
    'Indivirtus provides expert MSDS review and updating services tailored for pharmaceutical and chemical industries. Our team specializes in converting outdated legacy MSDS formats to the latest GHS-compliant SDS, including periodic updates to meet REACH, OSHA, and country-specific changes. We incorporate version control systems, maintain historical tracking, and integrate REACH UFI (Unique Formula Identifier) codes where applicable, ensuring your documentation stays accurate, traceable, and audit-ready.',
  estimated_duration: '3–7 business days per document',
  deliverables: [
    'Updated GHS-compliant SDS in 16-section format',
    'Version-controlled documentation',
    'REACH UFI inclusion (if applicable)',
    'Audit trail of changes and rationale',
  ],
  regulatory_basis: [
    'GHS – Globally Harmonized System',
    'REACH – Registration, Evaluation, Authorisation and Restriction of Chemicals (EU)',
    'OSHA HCS – Hazard Communication Standard (USA)',
    'IS 17803:2022 – Indian SDS guidelines',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Chemical', 'Cosmetics', 'Biotech'],
  expertise_area: ['Regulatory Documentation', 'Chemical Safety', 'Toxicology'],
  is_active: true,
  pageLink: link,
  icon: '🧾',
  image: {
    path: serviceImage,
    alt: 'MSDS review and updating services for regulatory compliance',
    caption: 'Modernize and maintain your safety documentation with Indivirtus',
  },
  gtm: {
    eventCategory: 'MSDS Services',
    eventAction: 'MSDS Review & Updating',
    eventLabel: 'msds-review',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['MSDS Review', 'SDS Update'],
      certification: 'GHS, REACH, OSHA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MSDS Review & Updating Services',
    description:
      'Legacy MSDS to SDS conversion, periodic compliance updates, version tracking, and REACH UFI integration.',
    serviceType: 'MSDS Review & Updating',
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
      name: 'MSDS Review & Updating Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Legacy MSDS Conversion',
            description: 'Transform outdated MSDS into modern GHS-compliant SDS.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Periodic MSDS Updates',
            description: 'Regularly review and update SDS to reflect latest regulatory changes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Version Control & Change Tracking',
            description: 'Maintain robust change logs and ensure document traceability.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'REACH UFI Integration',
            description: 'Include Unique Formula Identifier for EU-specific SDS.',
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
        name: 'Why is it important to update legacy MSDS documents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Legacy MSDS may not meet current global regulatory standards. Updating ensures compliance with GHS, REACH, OSHA, and national laws, avoiding legal and safety risks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should MSDS be reviewed and updated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MSDS should be reviewed at least every 3 years or whenever there are significant formulation or regulatory changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you convert old MSDS formats into GHS-compliant SDS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in converting outdated MSDS formats into the 16-section GHS-aligned SDS structure in accordance with global norms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is REACH UFI and why is it needed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Unique Formula Identifier (UFI) is a European requirement to identify mixtures placed on the market. It enhances poison center response capabilities and is mandatory under CLP Regulation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide version control and change logs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Each updated SDS is version-controlled with detailed change history, ensuring full traceability for audits and regulatory reviews.',
        },
      },
    ],
  },
  meta: {
    title: 'MSDS Review & Updating | GHS, REACH, OSHA-Compliant SDS',
    description:
      'Professional services for MSDS review, legacy document conversion, periodic updates, REACH UFI addition, and compliance with GHS/OSHA/REACH.',
    keywords: [
      'MSDS review',
      'SDS update',
      'legacy MSDS conversion',
      'REACH UFI',
      'GHS compliance',
      'OSHA HCS',
      'pharmaceutical safety sheets',
      'chemical regulatory documentation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'MSDS Review & Updating | GHS, REACH, OSHA-Compliant SDS',
      description:
        'Ensure your safety documentation is compliant and up to date with Indivirtus’s MSDS review and updating services.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['MSDS Conversion', 'REACH UFI Integration', 'SDS Updates'],
};
