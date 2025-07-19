import serviceImage from '@/assets/greenfield-brownfield/civil-design.jpg';
const link = '/services/greenfield-brownfield/civil-design';

export default {
  slug: 'civil-design',
  parentSlug: 'greenfield-brownfield',
  service_id: 'CRO-CAD-001',
  report_type: 'Design & Engineering',
  title: 'Civil & Architectural Design for Pharmaceutical Facilities',
  name: 'Civil & Architectural Design',
  description:
    'End-to-end civil and architectural design services tailored for GMP pharmaceutical manufacturing plants, ensuring regulatory compliance and efficient project execution.',
  full_description:
    'Indivirtus Healthcare Services Pvt. Ltd. offers comprehensive Civil & Architectural Design solutions for pharmaceutical facilities, aligning with international GMP, fire, and seismic safety norms. Our expertise includes developing detailed engineering drawings, ISO-classified cleanroom layouts, structural safety assessments, and construction management support. From concept to commissioning, we ensure each facility is designed to maximize operational efficiency, personnel safety, and regulatory readiness.',
  estimated_duration: '4–12 weeks depending on project scope',
  deliverables: [
    'Site master planning and layout',
    'Detailed civil & architectural drawings',
    'Cleanroom classification and layout (ISO 14644)',
    'Seismic & fire safety compliance reports',
    'Construction phase coordination and handover support',
  ],
  regulatory_basis: ['ISO 14644', 'GMP', 'IS 1893', 'NBC 2016', 'Factory Act'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'API Manufacturing', 'Vaccine & Biologics'],
  expertise_area: ['Facility Design', 'Regulatory Compliance', 'Greenfield & Brownfield Projects'],
  is_active: true,
  pageLink: link,
  icon: '🏗️',
  image: {
    path: serviceImage,
    alt: 'Civil and architectural design for pharmaceutical facilities',
    caption: 'Cleanroom-compliant facility layouts and structural design solutions for pharma plants',
  },
  gtm: {
    eventCategory: 'Civil Design Services',
    eventAction: 'View Service',
    eventLabel: 'Civil & Architectural Design for Pharma',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Engineering'],
      certification: 'Not Applicable',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Civil & Architectural Design',
    description:
      'Pharmaceutical facility civil and architectural design services, including cleanroom layouts, fire & seismic safety compliance, and construction management.',
    serviceType: 'Civil Engineering & GMP Facility Design',
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
      name: 'Civil & Architectural Design Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Detailed Engineering Drawings',
          description:
            'Comprehensive civil and architectural drawings including layouts, elevations, sections, and utility routing.',
        },
        {
          '@type': 'Offer',
          name: 'Cleanroom ISO Classification Design',
          description: 'Design of ISO-classified cleanroom spaces compliant with ISO 14644 and GMP standards.',
        },
        {
          '@type': 'Offer',
          name: 'Seismic & Fire Safety Compliance',
          description: 'Structural design with analysis and documentation for seismic zone and fire code compliance.',
        },
        {
          '@type': 'Offer',
          name: 'Construction Management',
          description:
            'Project supervision, contractor coordination, and compliance verification during construction phase.',
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
        name: 'What are detailed engineering drawings in a pharmaceutical facility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Detailed engineering drawings include architectural layouts, structural plans, utility routing, elevations, and equipment placements critical for regulatory submissions and construction execution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is cleanroom ISO classification important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO classification ensures that cleanrooms meet controlled environmental standards crucial for sterile and non-sterile drug manufacturing, aligned with ISO 14644 and GMP guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure fire and seismic safety compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow national codes such as IS 1893 and NBC 2016, incorporating fire escape layouts, material specifications, and structural reinforcements to ensure resilience against fire and seismic activity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Indivirtus support on-site construction management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide construction management including contractor coordination, quality checks, site progress monitoring, and final documentation to ensure regulatory alignment and project success.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Indivirtus handle design for both Greenfield and Brownfield projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our team is experienced in designing new facilities from scratch as well as modifying and upgrading existing sites while ensuring minimal disruption and full compliance.',
        },
      },
    ],
  },
  meta: {
    title: 'Civil & Architectural Design for Pharmaceutical Facilities | Indivirtus',
    description:
      'Explore Indivirtus’ civil & architectural design services tailored for pharma facilities — including cleanroom classification, fire safety compliance, and construction management.',
    keywords: [
      'civil design for pharma',
      'architectural layout GMP',
      'cleanroom ISO classification',
      'seismic design pharma plant',
      'fire safety GMP facility',
      'construction management CRO',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Civil & Architectural Design Services | Indivirtus',
      description: 'GMP-compliant civil and architectural designs for pharmaceutical manufacturing plants.',
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
    'Cleanroom Design Evaluation',
    'GMP Architectural Compliance Review',
    'Structural Integrity Assessment',
  ],
};
