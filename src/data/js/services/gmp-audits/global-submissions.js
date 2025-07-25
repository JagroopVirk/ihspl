import serviceImage from '@/assets/gmp-audits/global-submissions.jpg';
const link = '/services/gmp-audits/global-submissions';

export default {
  slug: 'global-submissions',
  parentSlug: 'regulatory-affairs',
  service_id: 'RS-GSS-009',
  report_type: 'Regulatory Filing Support',
  title: 'Global Submission Support',
  name: 'Global Submission Support',
  description: 'Expert regulatory support for FDA, EMA, PMDA, WHO PQ submissions, and lifecycle document handling.',
  full_description:
    'Indivirtus offers comprehensive Global Submission Support for pharmaceutical and biopharmaceutical organizations aiming for regulatory approvals in multiple regions. Our team assists in compiling, reviewing, and submitting dossiers for agencies like the FDA, EMA, PMDA, and WHO. Services include managing DMF/CEP lifecycles, preparing query responses, and aligning regulatory strategies with country-specific requirements. Whether your need is initial submission, lifecycle management, or post-approval changes, we streamline the regulatory journey to ensure timely approvals and global market access.',
  estimated_duration: '4–12 weeks depending on region and submission type',
  deliverables: [
    'Agency-specific submission dossier',
    'Query response documentation',
    'CEP/DMF lifecycle reports',
    'Submission timelines & status dashboards',
  ],
  regulatory_basis: ['FDA', 'EMA', 'PMDA', 'WHO', 'ICH CTD', 'eCTD'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biopharmaceuticals', 'Generics'],
  expertise_area: ['Regulatory Affairs', 'CMC', 'Global Compliance'],
  is_active: true,
  pageLink: link,
  icon: '🌍',
  image: {
    path: serviceImage,
    alt: 'Regulatory Submission Services by Indivirtus',
    caption: 'Global regulatory filings & compliance support',
  },
  pageContent: {
    hero: {
      heading: "Global Submission Support for <span class='halfHeading'>Regulatory Success</span>",
      tagline: 'Navigate Complex Regulatory Pathways with Confidence',
      detail:
        'Indivirtus Healthcare Services provides expert regulatory support for pharmaceutical and biopharmaceutical organizations targeting approvals from FDA, EMA, PMDA, and WHO. Our comprehensive services streamline dossier preparation, submission, and lifecycle management, ensuring compliance and timely market access.',
    },
    overview: {
      heading: "Mastering Global <span class='halfHeading'>Regulatory Submissions</span>",
      overviewCards: [
        {
          heading: 'What is Global Submission Support?',
          detail:
            'Global submission support involves preparing, reviewing, and submitting regulatory dossiers to agencies like FDA, EMA, PMDA, and WHO. It ensures compliance with region-specific requirements, facilitating approvals for pharmaceuticals and biopharmaceuticals.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Navigating complex regulatory landscapes is essential for market access. Expert support minimizes errors, accelerates approvals, and ensures compliance with global standards, reducing delays and costly revisions.',
        },
        {
          heading: 'Our Role in Your Journey',
          detail:
            'Indivirtus Healthcare Services acts as your trusted partner, offering end-to-end regulatory support. From initial submissions to post-approval lifecycle management, our team aligns strategies with agency requirements to ensure seamless approvals.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Regulatory Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, we deliver tailored regulatory support backed by a team of certified professionals with extensive global experience. We guide you through every step of the submission process, from dossier compilation to query responses and lifecycle management. Our services include strategic alignment with country-specific regulations, ensuring compliance with FDA, EMA, PMDA, and WHO standards. We also manage Drug Master Files (DMF) and Certificates of Suitability (CEP), providing robust support for initial submissions, variations, and post-approval changes. Our proactive approach minimizes risks and accelerates your path to market.',
      ],
    },
    deliverables: {
      heading: "Submission Support <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Agency-Specific Submission Dossier</strong>: Tailored dossiers meeting the requirements of FDA, EMA, PMDA, or WHO for seamless approvals.',
        '<strong>Query Response Documentation</strong>: Comprehensive responses to regulatory queries, ensuring clarity and compliance.',
        '<strong>CEP/DMF Lifecycle Reports</strong>: Detailed reports for managing Drug Master Files and Certificates of Suitability throughout their lifecycle.',
        '<strong>Submission Timelines & Status Dashboards</strong>: Real-time tracking tools to monitor progress and ensure timely submissions.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Guidelines Followed</span>",
      detail: [
        'Our global submission support services adhere to the highest regulatory standards, ensuring your dossiers are robust, compliant, and audit-ready. By aligning with agency-specific guidelines and international frameworks, we help you achieve global market access while maintaining compliance with regional requirements. Our expertise in electronic Common Technical Document (eCTD) submissions ensures efficiency and accuracy across all regulatory submissions.',
      ],
      itemList: [
        '<strong>FDA</strong>: Compliance with U.S. Food and Drug Administration guidelines for drug approvals.',
        '<strong>EMA</strong>: Adherence to European Medicines Agency standards for centralized and national procedures.',
        '<strong>PMDA</strong>: Alignment with Japan’s Pharmaceuticals and Medical Devices Agency requirements.',
        '<strong>WHO</strong>: Support for WHO Prequalification (PQ) submissions to ensure global access to quality medicines.',
        '<strong>ICH CTD</strong>: Structured dossier preparation following the International Council for Harmonisation’s Common Technical Document.',
        '<strong>eCTD</strong>: Electronic submissions compliant with global eCTD standards for efficiency and accuracy.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our global submission support services are designed for pharmaceutical and biopharmaceutical companies at various stages of their regulatory journey. Whether you’re seeking initial market approval, managing post-approval variations, or navigating complex multi-region submissions, we provide tailored solutions. Our services are ideal for new drug applications, generic drug submissions, biologics, and biosimilars. We also support lifecycle management for DMFs and CEPs, ensuring continued compliance and market access. From startups to established manufacturers, our expertise helps you achieve regulatory success efficiently.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services stands out with our team of certified regulatory experts and toxicologists, bringing global experience to every project. Our scientifically defensible submissions and rapid turnaround times ensure your regulatory goals are met efficiently. We prioritize confidentiality, adhering to industry best practices to protect your sensitive data. With a proven track record of successful FDA, EMA, PMDA, and WHO submissions, we are your trusted partner for achieving global market access and maintaining compliance throughout your product’s lifecycle.',
      ],
    },
    cta: {
      heading: "Ready to Streamline Your <span class='halfHeading'>Regulatory Submissions?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services to achieve timely approvals and global market success.',
      aria: 'Contact us to discuss your regulatory submission needs',
    },
  },
  gtm: {
    eventCategory: 'Regulatory Affairs',
    eventAction: 'Submission Support Viewed',
    eventLabel: 'Global Submission Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Regulatory Filing Support'],
      certification: 'Agency-compliant Dossier',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Global Submission Support',
    description:
      'Global regulatory submission support services including FDA, EMA, PMDA filings, WHO PQ, and lifecycle management for DMF and CEP.',
    serviceType: 'Regulatory Submission Consulting',
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
      name: 'Global Submission Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FDA, EMA, PMDA Filings',
            description: 'Regulatory dossier preparation and submission for global authorities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Query Response Compilation',
            description: 'Compilation and strategic drafting of regulatory query responses.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DMF/CEP Lifecycle Management',
            description: 'Lifecycle and variation handling for Drug Master Files and CEPs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WHO PQ Submissions',
            description: 'End-to-end support for WHO Prequalification submissions and audits.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Region-based pricing',
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
        name: 'What global agencies do you support submissions for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support submissions to FDA, EMA, PMDA, WHO, and various country-specific regulatory authorities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help respond to regulatory authority queries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide strategic support in drafting and submitting responses to agency queries post-filing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle lifecycle management of DMF and CEP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We manage the entire lifecycle including variations, renewals, and compliance updates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WHO PQ submission support included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer full support for WHO Prequalification submissions, including dossier preparation and audit readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is required from clients to begin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically require the product dossier, manufacturing process details, prior correspondence, and supporting documents as per regional requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is global submission support, and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Global submission support involves preparing and submitting regulatory dossiers to agencies like FDA, EMA, PMDA, and WHO to secure drug approvals. It’s critical for ensuring compliance, minimizing delays, and achieving market access in multiple regions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which regulatory agencies does Indivirtus support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide expert support for submissions to the FDA, EMA, PMDA, and WHO, ensuring compliance with each agency’s specific requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of submissions can Indivirtus handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support initial drug applications, generic drug submissions, biologics, biosimilars, DMF/CEP lifecycle management, and post-approval variations, tailored to your needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are included in your submission support services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our deliverables include agency-specific dossiers, query response documentation, CEP/DMF lifecycle reports, and submission timelines with status dashboards for real-time tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure confidentiality during the submission process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We adhere to strict confidentiality protocols and industry best practices, safeguarding your sensitive data throughout the regulatory submission process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the benefit of using eCTD for submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The electronic Common Technical Document (eCTD) format ensures efficient, standardized, and accurate submissions, reducing errors and speeding up the review process with regulatory agencies.',
        },
      },
    ],
  },
  meta: {
    title: 'Global Submission Support | FDA, EMA, PMDA & WHO Filing Experts',
    description:
      'Expert regulatory submission support for FDA, EMA, PMDA, WHO PQ, DMF/CEP lifecycle management, and global regulatory strategy by Indivirtus.',
    keywords: [
      'Global Submission Support',
      'Regulatory Filings',
      'FDA submission',
      'EMA dossier',
      'PMDA regulatory',
      'WHO PQ submission',
      'CEP lifecycle',
      'DMF submission',
      'Regulatory Affairs CRO',
      'Indivirtus regulatory support',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Global Submission Support | FDA, EMA, WHO Experts',
      description: 'Seamless regulatory submissions and global dossier handling support by Indivirtus Healthcare.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Global Filing Review', 'Dossier Compilation', 'Regulatory Gap Analysis', 'Lifecycle Management'],
};
