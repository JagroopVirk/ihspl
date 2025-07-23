import serviceImage from '@/assets/msds-sds/expert-authoring.jpg';
const link = '/services/msds-sds/expert-authoring';

export default {
  slug: 'expert-authoring',
  parentSlug: 'msds-sds',
  service_id: 'EXA001',
  report_type: 'Toxicology, SDS Authoring, Regulatory Submissions',
  title: 'Expert Authoring Services for Regulatory Compliance',
  name: 'Expert Authoring',
  description: 'Toxicologist-led preparation and expert sign-off for globally compliant documentation.',
  full_description:
    'Our Expert Authoring service ensures that safety data sheets (SDS), toxicological reports, and regulatory dossiers are meticulously crafted by qualified toxicologists. Every document undergoes rigorous expert review and sign-off, followed by a compliance check aligned with global regulatory frameworks like REACH, GHS, and OSHA. With our services, you receive not only scientific accuracy but also regulatory endorsement, ensuring smooth submissions and audit readiness.',
  estimated_duration: '7–15 working days, depending on complexity',
  deliverables: [
    'Toxicologist-authored safety or technical documentation',
    'Peer-reviewed and signed-off reports',
    'Regulatory-ready dossiers (e.g., REACH, GHS)',
    'Documentation compliant with global guidelines (OSHA, ECHA, ICH)',
  ],
  regulatory_basis: ['ICH Q3D', 'GHS/OSHA', 'REACH (ECHA)', 'CLP Regulation (EC) No 1272/2008'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'CDMOs', 'Generics', 'API Manufacturers'],
  expertise_area: ['Toxicology', 'Regulatory Compliance', 'Scientific Documentation'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Expert authoring of toxicological and regulatory documents',
    caption: 'Toxicologist-led documentation & regulatory submissions',
  },
  pageContent: {
    hero: {
      heading: "Expert Authoring for <span class='halfHeading'>Global Compliance</span>",
      tagline: 'Toxicologist-Led Documentation for Regulatory Success',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Expert Authoring service</strong> delivers meticulously crafted safety data sheets, toxicological reports, and regulatory dossiers by qualified toxicologists. With expert review, sign-off, and alignment with REACH, GHS, and OSHA, we ensure <strong>scientific accuracy and audit-ready compliance</strong> for global submissions.',
    },
    overview: {
      heading: "Mastering Expert <span class='halfHeading'>Documentation</span>",
      overviewCards: [
        {
          heading: 'What is Expert Authoring?',
          detail:
            'Our service provides toxicologist-authored safety data sheets (SDS), toxicological reports, and regulatory dossiers, with expert review and sign-off, ensuring compliance with <strong>global regulatory standards</strong> like REACH, GHS, and OSHA.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Expert-authored documentation ensures <strong>scientific accuracy</strong>, regulatory compliance, and audit readiness, facilitating smooth submissions and safe handling for pharmaceutical and chemical products.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>toxicologist-led solutions</strong>, providing precise, compliant, and endorsed documentation to support regulatory approvals and global market entry.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Authoring Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Expert Authoring services are led by qualified toxicologists with <strong>global regulatory expertise</strong>. We craft detailed safety data sheets, toxicological reports, and regulatory dossiers, followed by rigorous peer review and expert sign-off to ensure scientific accuracy.',
        'Our approach aligns with REACH, GHS, OSHA, and other global standards, delivering <strong>audit-ready documentation</strong> that supports regulatory submissions and ensures compliance across international markets.',
      ],
    },
    deliverables: {
      heading: "Expert Authoring <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Toxicologist-Authored Safety or Technical Documentation</strong>: Scientifically accurate SDS and reports.',
        '<strong>Peer-Reviewed and Signed-Off Reports</strong>: Expert-endorsed documentation for credibility.',
        '<strong>Regulatory-Ready Dossiers (e.g., REACH, GHS)</strong>: Compliant submissions for global markets.',
        '<strong>Documentation Compliant with Global Guidelines</strong>: Aligned with OSHA, ECHA, and ICH standards.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our Expert Authoring services align with stringent global standards, ensuring your documentation is <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence and submission success.',
      ],
      itemList: [
        '<strong>ICH Q3D</strong>: Guidelines for elemental impurities in drug products.',
        '<strong>GHS – Globally Harmonized System</strong>: International standard for chemical hazard classification.',
        '<strong>REACH (ECHA)</strong>: European regulations for chemical safety and registration.',
        '<strong>CLP Regulation (EC) No 1272/2008</strong>: European standards for classification, labeling, and packaging.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our Expert Authoring services are essential for pharmaceutical and chemical manufacturers requiring <strong>compliant regulatory documentation</strong>. Ideal for SDS preparation, toxicological assessments, and dossier submissions, our solutions support product safety and global approvals. Key use cases include authoring SDS for <strong>new APIs</strong>, preparing REACH dossiers, and ensuring compliance for global supply chains.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical and chemical manufacturers, delivering <strong>toxicologist-led authoring solutions</strong> backed by certified experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, accurate, and endorsed documentation, driving <strong>regulatory success</strong> and market readiness.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>Compliant Documentation?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Authoring Solutions',
      aria: 'Contact us to discuss your regulatory documentation needs',
    },
  },
  gtm: {
    eventCategory: 'Expert Authoring',
    eventAction: 'Authoring Completed',
    eventLabel: 'Toxicologist-led authoring with regulatory compliance',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Toxicology Report', 'SDS Authoring', 'Regulatory Dossier'],
      certification: 'Certified Toxicologist, Regulatory Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Expert Authoring',
    description:
      'Expert authoring services by Indivirtus include toxicologist-led SDS and toxicological report preparation with full regulatory endorsement and peer-reviewed sign-off.',
    serviceType: 'Pharmaceutical CRO Scientific Documentation',
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
      name: 'Expert Authoring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Toxicologist-Led Preparation',
          itemOffered: {
            '@type': 'Service',
            name: 'Toxicologist-Led Preparation',
            description:
              'Scientific documentation authored by board-certified toxicologists, ensuring accuracy and credibility.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Expert Review & Sign-Off',
          itemOffered: {
            '@type': 'Service',
            name: 'Expert Review & Sign-Off',
            description: 'All authored documents undergo peer review and sign-off by domain specialists.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Regulatory Endorsement',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Endorsement',
            description:
              'Preparation aligned with global guidelines like REACH, OSHA, ICH Q3D, and more for smoother approvals.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Compliance Assurance',
          itemOffered: {
            '@type': 'Service',
            name: 'Compliance Assurance',
            description:
              'Final review to ensure documentation complies with all required regional and global regulatory standards.',
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
        name: 'What is toxicologist-led preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Toxicologist-led preparation means your reports are drafted by certified professionals who understand chemical safety, exposure risks, and global compliance norms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is expert review & sign-off important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Expert review ensures that your documents are not only scientifically accurate but also defensible during audits and regulatory scrutiny.',
        },
      },
      {
        '@type': 'Question',
        name: 'What regulatory guidelines do you follow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We align with global standards including REACH, OSHA, ICH Q3D, and GHS to ensure your documentation passes regulatory reviews worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you provide region-specific SDS authoring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our team prepares SDS and toxicological documents tailored to specific regions such as the EU, US, Canada, India, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data is needed from our side to initiate authoring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically need chemical composition, safety data, existing study reports (if any), and target regulatory region to begin the authoring process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Expert Authoring services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include toxicologist-authored SDS, toxicological reports, and regulatory dossiers, with peer review, expert sign-off, and compliance with REACH, GHS, and OSHA standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from Expert Authoring services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical and chemical manufacturers requiring accurate, compliant documentation for SDS, regulatory dossiers, or global submissions benefit from our tailored authoring solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with ICH Q3D, GHS, REACH (ECHA), and CLP Regulation (EC No 1272/2008), ensuring compliance with global regulatory standards and audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive toxicologist-authored documentation, peer-reviewed reports, regulatory-ready dossiers, and documentation compliant with OSHA, ECHA, and ICH guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the authoring services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific compounds, regulatory requirements, and submission needs, ensuring accurate and compliant documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support audit readiness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide peer-reviewed, expert-signed documentation with rigorous compliance checks, ensuring your dossiers and SDS are audit-ready for global regulatory submissions.',
        },
      },
    ],
  },
  meta: {
    title: 'Expert Authoring | Toxicologist-Led Regulatory Documentation - Indivirtus',
    description:
      'Professional authoring services for SDS, toxicology, and regulatory documentation by qualified experts. Includes expert review, compliance assurance, and global submission readiness.',
    keywords: [
      'Expert SDS authoring',
      'Toxicologist documentation',
      'Pharmaceutical regulatory support',
      'REACH compliance',
      'OSHA toxicology reports',
      'ICH Q3D documents',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Expert Authoring | Toxicologist-Led Regulatory Documentation - Indivirtus',
      description:
        'Get regulatory-ready SDS and toxicology documents with expert authoring, review, and global compliance support by Indivirtus.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Toxicological Risk Assessment', 'SDS Review & Gap Analysis', 'Regulatory Readiness Assessment'],
};
