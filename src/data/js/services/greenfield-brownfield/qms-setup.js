import serviceImage from '@/assets/greenfield-brownfield/qms-setup.jpg';
const link = '/services/greenfield-brownfield/qms-setup';

export default {
  slug: 'qms-setup',
  parentSlug: 'quality-systems',
  service_id: 'QMS-SETUP-006',
  report_type: 'QMS Implementation Pack',
  title: 'QMS Setup Services for Pharmaceutical Companies',
  name: 'QMS Development, Documentation & Training Systems Setup',
  description:
    'End-to-end Quality Management System (QMS) setup for pharma manufacturers, including ICH Q10 implementation, SOPs, document control, and training.',
  full_description:
    'Our QMS Setup service enables pharmaceutical companies to establish a robust, regulatory-aligned quality management system from scratch or modernize their existing framework. We provide comprehensive support in implementing ICH Q10 principles, drafting and reviewing SOPs, BMRs/BPRs, deploying electronic documentation systems, and building scalable training management programs. Whether it’s for a new facility or for enhancing compliance readiness, our QMS experts deliver structured, audit-proof quality systems.',
  estimated_duration: '4–6 weeks',
  deliverables: [
    'ICH Q10-based QMS Design Blueprint',
    'SOPs, BMRs, and BPR Templates',
    'Document Control System Architecture',
    'Training Matrix & Record Management Tools',
    'Audit Readiness & CAPA Support',
  ],
  regulatory_basis: ['ICH Q10', 'WHO TRS 1019', 'US FDA 21 CFR Part 211', 'EU GMP'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'API Manufacturing', 'Biotech', 'Medical Devices'],
  expertise_area: ['Quality Systems', 'GMP Compliance', 'Document Control'],
  is_active: true,
  pageLink: link,
  icon: '📋',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical QMS setup with SOPs and training systems',
    caption: 'Full QMS setup including SOPs, document control, and training for pharma companies',
  },
  pageContent: {
    hero: {
      heading: "QMS Setup for <span class='halfHeading'>Pharmaceutical Compliance</span>",
      tagline: 'Build Robust Quality Systems with Expert ICH Q10 Guidance',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>QMS Setup service</strong> empowers pharmaceutical manufacturers to establish or modernize a regulatory-aligned Quality Management System. From ICH Q10 implementation to SOPs, document control, and scalable training programs, we ensure <strong>audit-ready compliance</strong> and operational excellence.',
    },
    overview: {
      heading: "Mastering Quality Management <span class='halfHeading'>Systems</span>",
      overviewCards: [
        {
          heading: 'What is QMS Setup?',
          detail:
            'Our service delivers end-to-end QMS design, including ICH Q10 implementation, SOP and BMR/BPR drafting, electronic document control systems, and training management programs, ensuring <strong>GMP-compliant operations</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'A robust QMS ensures <strong>product quality</strong>, regulatory compliance, and operational efficiency, minimizing risks and preparing facilities for global audits and market approvals.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services provides <strong>expert-led QMS solutions</strong>, guiding manufacturers to build scalable, compliant quality systems tailored for new or existing facilities.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>QMS Setup Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our QMS Setup service is led by certified regulatory experts specializing in <strong>ICH Q10 compliance</strong>. We design tailored quality systems, drafting and reviewing SOPs, BMRs, and BPRs, deploying electronic document control systems, and establishing scalable training programs to ensure seamless implementation.',
        'Our approach includes comprehensive assessments of your facility’s needs, delivering <strong>audit-proof solutions</strong> that align with global GMP standards. We focus on practical integration and continuous improvement, ensuring your QMS supports regulatory readiness and operational efficiency.',
      ],
    },
    deliverables: {
      heading: "QMS Setup <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>ICH Q10-based QMS Design Blueprint</strong>: Comprehensive roadmap for quality system implementation.',
        '<strong>SOPs, BMRs, and BPR Templates</strong>: Standardized documents tailored to your operations.',
        '<strong>Document Control System Architecture</strong>: Framework for electronic documentation management.',
        '<strong>Training Matrix & Record Management Tools</strong>: Scalable tools for training program management.',
        '<strong>Audit Readiness & CAPA Support</strong>: Resources for regulatory audits and corrective action planning.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our QMS Setup services align with stringent global standards, ensuring your quality systems are <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance quality assurance and regulatory confidence.',
      ],
      itemList: [
        '<strong>ICH Q10</strong>: Pharmaceutical Quality System framework for robust QMS design.',
        '<strong>WHO TRS 1019</strong>: Global GMP guidelines for quality assurance.',
        '<strong>US FDA 21 CFR Part 211</strong>: U.S. regulations for pharmaceutical manufacturing and quality control.',
        '<strong>EU GMP</strong>: European guidelines for good manufacturing practices.',
        '<strong>ISO 9001</strong>: International standard for quality management systems.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our QMS Setup services are essential for pharmaceutical manufacturers establishing new facilities or modernizing existing ones to ensure <strong>GMP compliance</strong>. Ideal for QA, QC, and compliance teams, our solutions support regulatory audits, facility expansions, and new product launches. Key use cases include implementing <strong>ICH Q10-compliant systems</strong>, streamlining document control, and building scalable training programs for global market readiness.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical manufacturers, delivering <strong>expert-led QMS setup solutions</strong> backed by certified regulatory experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your facility with robust, compliant, and scalable quality systems, driving <strong>regulatory success</strong> and operational excellence.',
      ],
    },
    cta: {
      heading: "Ready to Build a <span class='halfHeading'>Robust QMS?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Quality Solutions',
      aria: 'Contact us to discuss your QMS setup needs',
    },
  },
  gtm: {
    eventCategory: 'QMS Setup',
    eventAction: 'view_service',
    eventLabel: 'qms-setup',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['QMS Implementation'],
      certification: 'GMP-Compliant QMS Systems',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical QMS Setup Services',
    description:
      'Design and implementation of ICH Q10-compliant QMS including SOPs, batch records, document control systems, and training programs.',
    serviceType: 'QMS Implementation & Consulting',
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
      serviceUrl: `https://www.indivirtus.com${link}`,
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
      name: 'QMS Setup & Implementation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICH Q10 QMS Development',
            description:
              'Design and implementation of a pharmaceutical QMS aligned with ICH Q10, including quality policy, objectives, risk management, and lifecycle approach.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SOP & Batch Documentation (BMR/BPR)',
            description:
              'Drafting, reviewing, and structuring SOPs, Batch Manufacturing Records (BMR), and Batch Packaging Records (BPR) for compliant manufacturing processes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electronic Document Management System (EDMS)',
            description:
              'Implementation-ready design for electronic documentation control systems with version tracking, approvals, audit trails, and metadata tagging.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Training Management System',
            description:
              'Design of role-based training programs, training calendars, effectiveness evaluation, and record tracking aligned with GMP training mandates.',
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
        name: 'What does ICH Q10 QMS development include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes setting up a structured quality management framework aligned with ICH Q10, covering documentation, roles, management responsibilities, and product lifecycle approaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do SOPs and BMR/BPR contribute to GMP compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SOPs standardize operations while BMRs and BPRs ensure traceable, batch-level documentation — both are essential for maintaining GMP compliance and audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of implementing an EDMS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An EDMS improves document control by enabling electronic versioning, controlled access, approvals, metadata tagging, and audit trails, all while supporting data integrity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a training management system typically include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes training matrices by role, training content plans, effectiveness evaluations, and digital tracking of training records for GMP-relevant personnel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the QMS setup service be customized for different facility types?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we customize QMS setup based on the facility type — whether it’s for oral dosage forms, injectables, APIs, or biotech — and align documentation accordingly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the QMS Setup service include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our service includes ICH Q10-based QMS design, drafting and reviewing SOPs, BMRs, and BPRs, deploying electronic document control systems, and establishing scalable training management programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from QMS Setup services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical manufacturers establishing new facilities or modernizing existing ones, particularly QA, QC, and compliance teams, benefit from our tailored QMS solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the service ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our QMS services align with ICH Q10, WHO TRS 1019, US FDA 21 CFR Part 211, EU GMP, and ISO 9001, ensuring your quality systems are audit-ready and compliant with global standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the QMS Setup service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive an ICH Q10-based QMS design blueprint, SOPs, BMRs, and BPR templates, document control system architecture, training matrix and record management tools, and audit readiness/CAPA support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the QMS Setup be customized for our facility’s needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our QMS solutions are tailored to your facility’s specific operational and regulatory needs, ensuring practical and compliant systems for your unique processes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the service support training management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide a scalable training matrix and record management tools, enabling your team to implement and track training programs aligned with GMP and regulatory requirements.',
        },
      },
    ],
  },
  meta: {
    title: 'QMS Setup Services | ICH Q10, SOPs, EDMS, Training | Indivirtus',
    description:
      'Build a compliant pharmaceutical QMS from the ground up. ICH Q10 development, SOPs, batch records, document control, and GMP training systems by Indivirtus.',
    keywords: [
      'pharma QMS setup',
      'ICH Q10 QMS development',
      'SOPs BMR BPR pharma',
      'electronic document management pharma',
      'pharma training management system',
      'quality system implementation',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'QMS Setup | SOPs, EDMS, Training | Indivirtus',
      description:
        'End-to-end QMS setup including ICH Q10 development, SOP documentation, electronic systems, and GMP training programs. Delivered by Indivirtus.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    'QMS Gap Assessment',
    'Document Control Review',
    'Training Program Audit',
    'ICH Q10 Implementation Readiness',
  ],
};
