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
  pageContent: {
    hero: {
      heading: "Civil & Architectural Design for <span class='halfHeading'>Pharma Facilities</span>",
      tagline: 'Build GMP-Compliant Plants with Expert Design Solutions',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Civil & Architectural Design services</strong> deliver comprehensive solutions for pharmaceutical manufacturing plants. From site master planning to ISO-classified cleanroom layouts, we ensure <strong>regulatory compliance</strong>, safety, and operational efficiency from concept to commissioning.',
    },
    overview: {
      heading: "Mastering Pharma Facility <span class='halfHeading'>Design</span>",
      overviewCards: [
        {
          heading: 'What are Civil & Architectural Design Services?',
          detail:
            'Our services provide end-to-end design solutions, including site master planning, detailed civil and architectural drawings, ISO-classified cleanroom layouts, and compliance with fire and seismic safety norms, ensuring <strong>GMP-compliant facilities</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Optimized civil and architectural design ensures <strong>regulatory compliance</strong>, personnel safety, and operational efficiency, supporting GMP standards and enabling audit-ready pharmaceutical facilities.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led design solutions</strong>, creating compliant, safe, and efficient pharmaceutical plants tailored to global regulatory standards.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Design Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Civil & Architectural Design services are led by experienced engineers and architects specializing in <strong>GMP-compliant facility design</strong>. We develop detailed engineering drawings, ISO-classified cleanroom layouts, and structural safety assessments, ensuring compliance with fire, seismic, and regulatory standards.',
        'Our integrated approach includes close coordination with construction and qualification teams, delivering <strong>scalable and audit-ready designs</strong> that optimize operational workflows and ensure regulatory readiness from concept to commissioning.',
      ],
    },
    deliverables: {
      heading: "Civil & Architectural Design <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Site Master Planning and Layout</strong>: Comprehensive plans for optimized facility design.',
        '<strong>Detailed Civil & Architectural Drawings</strong>: Precise blueprints for construction execution.',
        '<strong>Cleanroom Classification and Layout (ISO 14644)</strong>: Compliant designs for sterile and non-sterile environments.',
        '<strong>Seismic & Fire Safety Compliance Reports</strong>: Assessments ensuring structural and safety compliance.',
        '<strong>Construction Phase Coordination and Handover Support</strong>: Guidance for seamless project execution.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our Civil & Architectural Design services align with stringent global and local standards, ensuring your facility is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver designs that enhance safety and regulatory confidence.',
      ],
      itemList: [
        '<strong>ISO 14644</strong>: Standards for cleanroom classification and performance.',
        '<strong>GMP</strong>: Global good manufacturing practice guidelines for facility design.',
        '<strong>IS 1893</strong>: Indian standards for seismic design and safety.',
        '<strong>NBC 2016</strong>: National Building Code of India for structural and fire safety.',
        '<strong>Factory Act</strong>: Indian regulations for industrial safety and compliance.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our Civil & Architectural Design services are essential for pharmaceutical manufacturers developing new facilities or upgrading existing ones to meet <strong>GMP and ISO standards</strong>. Ideal for sterile and non-sterile environments, our solutions support cleanroom design, structural safety, and regulatory audits. Key use cases include designing <strong>GMP-compliant manufacturing plants</strong>, ensuring compliance for facility expansions, and optimizing layouts for operational efficiency.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical manufacturers, delivering <strong>expert-led civil and architectural design solutions</strong> backed by certified engineers and regulatory experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your facility with compliant, safe, and efficient designs, driving <strong>regulatory success</strong> and operational excellence.',
      ],
    },
    cta: {
      heading: "Ready to Design a <span class='halfHeading'>GMP-Compliant Facility?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Design Solutions',
      aria: 'Contact us to discuss your civil and architectural design needs',
    },
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
      {
        '@type': 'Question',
        name: 'What do Civil & Architectural Design services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include site master planning, detailed civil and architectural drawings, ISO 14644-compliant cleanroom layouts, seismic and fire safety assessments, and construction phase coordination.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from Civil & Architectural Design services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers developing new facilities or upgrading existing ones, particularly those requiring GMP-compliant and ISO-classified designs, benefit from our tailored solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with ISO 14644, GMP, IS 1893, NBC 2016, and Factory Act, ensuring facility designs meet global and local regulatory standards and are audit-ready.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive site master planning, detailed civil and architectural drawings, cleanroom classification layouts, seismic and fire safety reports, and construction phase coordination support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the design services be customized for our facility’s needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your facility’s specific operational, regulatory, and safety requirements, ensuring practical and compliant design solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support cleanroom and safety compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide ISO 14644-compliant cleanroom layouts and seismic/fire safety assessments, ensuring compliance with GMP and safety standards for sterile and non-sterile environments.',
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
