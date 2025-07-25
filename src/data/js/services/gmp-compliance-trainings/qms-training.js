import serviceImage from '@/assets/gmp-compliance-trainings/qms-training.jpg';
const link = '/services/gmp-compliance-trainings/qms-training';

export default {
  slug: 'qms-training',
  parentSlug: 'gmp-compliance-trainings',
  service_id: 'QMS_TRAINING_001',
  report_type: 'Training',
  title: 'QMS Training for Pharmaceutical Professionals',
  name: 'QMS Training',
  description:
    'Comprehensive QMS training covering ICH Q10 framework, document management, supplier qualification, and KPI monitoring for pharmaceutical teams.',
  full_description:
    'Indivirtus’ QMS Training equips pharmaceutical professionals with essential knowledge and tools to design, implement, and maintain a robust Quality Management System. Participants will gain insights into the ICH Q10 framework, proper documentation practices, supplier qualification strategies, and continuous improvement monitoring through APQR and KPI tracking. This training is ideal for QA/QC teams, regulatory personnel, and compliance managers who aim to elevate operational excellence and compliance readiness.',
  estimated_duration: '1-2 days',
  deliverables: [
    'Interactive QMS workshop materials',
    'Templates for APQR and KPI tracking',
    'Document control and supplier evaluation tools',
    'Participation certificate',
  ],
  regulatory_basis: ['ICH Q10', 'WHO TRS', '21 CFR Part 210/211'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'API Manufacturing'],
  expertise_area: ['Quality Assurance', 'GMP Compliance', 'Regulatory Affairs'],
  is_active: true,
  pageLink: link,
  icon: '📘',
  image: {
    path: serviceImage,
    alt: 'QMS Training for Pharma',
    caption: 'Master ICH Q10 and document control through interactive QMS training sessions.',
  },
  pageContent: {
    hero: {
      heading: "QMS Training for <span class='halfHeading'>Pharmaceutical Excellence</span>",
      tagline: 'Build Robust Quality Systems with Expert-Led ICH Q10 Training',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>QMS training program</strong> equips pharmaceutical professionals with the knowledge and tools to design and maintain a robust Quality Management System. Focused on the ICH Q10 framework, our training covers documentation practices, supplier qualification, and KPI monitoring to ensure <strong>regulatory compliance</strong> and operational excellence.',
    },
    overview: {
      heading: "Mastering Quality Management <span class='halfHeading'>Systems</span>",
      overviewCards: [
        {
          heading: 'What is QMS Training?',
          detail:
            'Our training provides comprehensive education on the ICH Q10 framework, document management, supplier qualification strategies, and continuous improvement through APQR and KPI tracking, ensuring <strong>GMP-aligned quality systems</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'A robust QMS ensures <strong>product quality</strong>, patient safety, and regulatory compliance by fostering effective documentation, supplier oversight, and performance monitoring, reducing risks and enhancing audit readiness.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led QMS training</strong>, empowering QA/QC teams, regulatory personnel, and compliance managers to achieve operational excellence and regulatory alignment.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Training Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our QMS training is led by seasoned regulatory experts who bring <strong>global expertise</strong> to every session. We provide in-depth insights into the ICH Q10 framework, covering document management, supplier qualification, and continuous improvement through APQR and KPI monitoring. Our interactive workshops include practical case studies and hands-on exercises to ensure real-world applicability.',
        'Our approach is tailored to your team’s needs, delivering <strong>actionable strategies</strong> that align with global GMP standards. We focus on building a quality-driven culture, equipping your team for regulatory audits and operational success.',
      ],
    },
    deliverables: {
      heading: "QMS Training <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Interactive QMS Workshop Materials</strong>: Comprehensive resources for hands-on learning.',
        '<strong>Templates for APQR and KPI Tracking</strong>: Practical tools for continuous improvement monitoring.',
        '<strong>Document Control and Supplier Evaluation Tools</strong>: Streamlined resources for QMS implementation.',
        '<strong>Participation Certificate</strong>: Official certification recognizing training completion.',
        '<strong>Regulatory Reference Guides</strong>: Supplemental materials to support ongoing compliance.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our QMS training aligns with stringent global standards, ensuring your team is equipped to meet <strong>regulatory requirements</strong> and maintain audit-ready operations. By adhering to industry-leading guidelines, we deliver training that supports compliance and enhances quality assurance for international markets.',
      ],
      itemList: [
        '<strong>ICH Q10</strong>: Pharmaceutical Quality System framework for robust QMS implementation.',
        '<strong>WHO Technical Report Series</strong>: Global GMP guidelines for quality assurance.',
        '<strong>FDA 21 CFR Part 210/211</strong>: U.S. regulations for manufacturing and quality control.',
        '<strong>EU GMP Annex 1</strong>: European guidelines for quality systems in sterile manufacturing.',
        '<strong>ISO 9001</strong>: International standard for quality management systems.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our QMS training is vital for pharmaceutical teams aiming to strengthen <strong>quality management</strong>, streamline documentation, and enhance supplier oversight. Ideal for QA/QC teams, regulatory personnel, and compliance managers, the program supports audit preparation, facility expansions, and new product launches. Key use cases include implementing <strong>ICH Q10-compliant systems</strong>, improving APQR processes, and ensuring compliance with global regulatory standards.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical manufacturers, delivering <strong>expert-led QMS training</strong> backed by certified regulatory experts with global experience. Our programs ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your team with the knowledge and tools to achieve <strong>regulatory success</strong> and operational excellence, ensuring compliance and competitiveness.',
      ],
    },
    cta: {
      heading: "Ready to Elevate Your <span class='halfHeading'>Quality Systems?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert QMS Training',
      aria: 'Contact us to discuss your QMS training needs',
    },
  },
  gtm: {
    eventCategory: 'Training Services',
    eventAction: 'View QMS Training',
    eventLabel: 'QMS Training for Pharmaceuticals',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Training'],
      certification: 'Participation Certificate',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'QMS Training',
    description:
      'Pharmaceutical QMS training covering ICH Q10 framework, document management, supplier qualification, and KPI tracking.',
    serviceType: 'GMP Compliance Training',
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
      name: 'QMS Training Modules',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'QMS Framework (ICH Q10)',
            description: 'Understanding and implementing the ICH Q10 model within your quality system.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Document Management',
            description: 'Best practices for controlled document lifecycle, archival, and change management.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Supplier Qualification',
            description: 'Evaluating and managing supplier quality systems, audits, and certifications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'APQR & KPI Tracking',
            description: 'Building systems for Annual Product Quality Review and performance metrics tracking.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Custom pricing based on scope',
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
        name: 'What does the QMS training cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It covers the ICH Q10 framework, document management systems, supplier qualification, and APQR/KPI tracking for maintaining an effective quality system.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should attend QMS training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality assurance professionals, regulatory teams, production managers, and anyone involved in pharmaceutical quality systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the training include real-world documentation examples?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the session includes templates and practical examples for SOPs, APQR, supplier audit reports, and KPI dashboards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this training aligned with ICH and WHO GMP expectations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. The training content aligns with ICH Q10 principles and WHO GMP standards for global compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can this QMS training be customized for our company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indivirtus offers tailored sessions including company-specific documentation, SOP walkthroughs, and role-based training.',
        },
      },
      {
        '@type': 'Question',
        name: 'What topics are covered in the QMS training program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our training covers the ICH Q10 framework, document management, supplier qualification, and continuous improvement through APQR and KPI tracking, with practical case studies and hands-on exercises for real-world application.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should participate in the QMS training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The program is ideal for QA/QC teams, regulatory personnel, compliance managers, and manufacturing staff seeking to strengthen quality systems and ensure compliance with global GMP standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the training ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our training aligns with ICH Q10, WHO TRS, FDA 21 CFR Part 210/211, EU GMP Annex 1, and ISO 9001, ensuring your team meets global regulatory requirements and is prepared for audits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What materials are provided during the training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Participants receive interactive QMS workshop materials, templates for APQR and KPI tracking, document control and supplier evaluation tools, a participation certificate, and regulatory reference guides.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the training be customized for our specific needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our training is tailored to your organization’s needs, focusing on specific areas like documentation, supplier qualification, or KPI monitoring to ensure relevant and practical outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What delivery formats are available for the training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer flexible delivery options, including on-site, virtual, and hybrid formats, designed to accommodate your team’s preferences and ensure seamless learning experiences.',
        },
      },
    ],
  },
  meta: {
    title: 'QMS Training for Pharmaceuticals | Indivirtus',
    description:
      'Master the essentials of pharmaceutical QMS with Indivirtus. Learn ICH Q10, document control, APQR, and supplier qualification in our expert-led training.',
    keywords: [
      'QMS training',
      'ICH Q10 training',
      'pharmaceutical quality systems',
      'document control training',
      'supplier qualification workshop',
      'APQR and KPI training',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'QMS Training for Pharmaceuticals | Indivirtus',
      description:
        'Elevate your quality systems with our QMS training program focused on ICH Q10, document management, and supplier audits.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [],
};
