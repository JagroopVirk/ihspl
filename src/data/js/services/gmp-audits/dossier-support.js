import serviceImage from '@/assets/gmp-audits/dossier-support.jpg';
const link = '/services/gmp-audits/dossier-support';

export default {
  slug: 'dossier-support',
  parentSlug: 'regulatory-support',
  service_id: 'REG-DOSSIER',
  report_type: 'Regulatory Submission Package',
  title: 'Regulatory Dossier Support',
  name: 'Regulatory Dossier Support',
  description:
    'Expert support in CTD/eCTD dossier compilation, CMC documentation review, and global regulatory submissions.',
  full_description:
    'Indivirtus provides comprehensive Regulatory Dossier Support for pharmaceutical, biopharmaceutical, and API manufacturers. Our experts assist with CTD/eCTD module preparation for submissions including NDA, ANDA, IND, DMF, and MAA across global regulatory authorities. We also ensure thorough CMC documentation review and Pre-Approval Inspection (PAI) readiness to streamline your product registrations and lifecycle management.',
  estimated_duration: '2–6 weeks depending on dossier type',
  deliverables: [
    'Complete CTD/eCTD Modules 1–5',
    'Reviewed and formatted CMC documentation',
    'Compiled dossiers for NDA, ANDA, IND, DMF, MAA',
    'PAI readiness checklist and support',
  ],
  regulatory_basis: ['ICH M4', 'FDA eCTD Guidance', 'EMA eSubmission', 'PMDA Guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biopharmaceuticals', 'APIs', 'Generics'],
  expertise_area: ['Regulatory Affairs', 'CMC', 'Global Submissions'],
  is_active: true,
  pageLink: link,
  icon: '📄',
  image: {
    path: serviceImage,
    alt: 'Regulatory Dossier Support Services',
    caption: 'CTD/eCTD Preparation, CMC Review, Global Submissions',
  },
  pageContent: {
    hero: {
      heading: "Data Integrity & CSV for <span class='halfHeading'>Regulatory Compliance</span>",
      tagline: 'Safeguard Your Data with Expert Audits and Validation',
      detail:
        'Indivirtus Healthcare Services delivers specialized Data Integrity and Computer System Validation (CSV) services to ensure compliance with 21 CFR Part 11 and global standards. Our expert audits and technical support help pharmaceutical companies maintain data integrity, ensuring regulatory readiness and operational trust.',
    },
    overview: {
      heading: "Mastering Data Integrity <span class='halfHeading'>& System Validation</span>",
      overviewCards: [
        {
          heading: 'What is Data Integrity & CSV?',
          detail:
            'Data Integrity ensures that data is accurate, complete, and reliable throughout its lifecycle. Computer System Validation (CSV) verifies that computerized systems in GxP environments meet regulatory requirements, such as 21 CFR Part 11, for data security and traceability.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Compliance with data integrity standards prevents regulatory penalties, ensures patient safety, and maintains trust in your operations. Proper CSV ensures systems are reliable, secure, and audit-ready for global regulatory inspections.',
        },
        {
          heading: 'Our Role in Your Compliance',
          detail:
            'Indivirtus Healthcare Services provides comprehensive audits and validation services to align your systems with 21 CFR Part 11, ALCOA+ principles, and global guidelines. We help you achieve robust data governance and regulatory compliance.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Validation Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, we take a meticulous approach to Data Integrity and Computer System Validation. Our certified professionals conduct thorough assessments, including audit trail verification, data backup evaluations, and system qualification, to ensure compliance with global standards. We align with ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, and more) to safeguard data integrity across GxP environments. Our services include developing tailored CSV Master Plans and providing technical support to address gaps, ensuring your systems are secure, compliant, and ready for regulatory scrutiny.',
      ],
    },
    deliverables: {
      heading: "Data Integrity & CSV <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Data Integrity Audit Report</strong>: A detailed report identifying risks, non-conformities, and recommendations for compliance.',
        '<strong>CSV Master Plan</strong>: A strategic roadmap outlining the validation process for computerized systems.',
        '<strong>Audit Trail & Backup Validation Summary</strong>: Documentation verifying the integrity of audit trails and data backup processes.',
        '<strong>21 CFR Part 11 Compliance Checklist</strong>: A practical tool to ensure adherence to FDA’s electronic records and signatures regulations.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Guidelines Followed</span>",
      detail: [
        'Our Data Integrity and CSV services are designed to meet stringent global regulatory requirements, ensuring your systems are audit-ready and compliant. By adhering to industry standards, we provide scientifically defensible solutions that support inspections by regulatory bodies like the FDA, MHRA, and WHO. Our expertise ensures your data governance aligns with international expectations, facilitating seamless compliance.',
      ],
      itemList: [
        '<strong>21 CFR Part 11</strong>: Compliance with FDA regulations for electronic records and electronic signatures.',
        '<strong>MHRA Data Integrity Guidance</strong>: Adherence to UK Medicines and Healthcare products Regulatory Agency guidelines for data integrity.',
        '<strong>EU Annex 11</strong>: Alignment with European Union requirements for computerized systems in GMP environments.',
        '<strong>WHO Guidance on Data Integrity</strong>: Conformance with World Health Organization standards for global data governance.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our Data Integrity and CSV services are essential for pharmaceutical and life science companies managing computerized systems in GxP environments. Whether you’re implementing new systems, upgrading existing ones, or preparing for regulatory inspections, our services ensure compliance and reliability. We support applications such as electronic batch records, laboratory information management systems (LIMS), and quality management systems. Our audits and validations are ideal for companies addressing data integrity gaps, ensuring audit trail compliance, or seeking to align with 21 CFR Part 11 for global market access.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services brings unmatched expertise in Data Integrity and Computer System Validation, with a team of certified professionals experienced in global regulatory requirements. Our scientifically robust audits and validations ensure your systems are secure and compliant. We prioritize rapid turnaround times, delivering actionable insights to maintain data integrity and regulatory readiness. With a commitment to confidentiality and industry best practices, we help you build trust in your operations and achieve compliance with confidence.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>Data Integrity Compliance?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services to secure your systems and achieve regulatory success.',
      aria: 'Contact us to discuss your data integrity and CSV needs',
    },
  },
  gtm: {
    eventCategory: 'Regulatory Dossier Support',
    eventAction: 'View Service',
    eventLabel: 'CTD/eCTD & Submission Support',
    customDimensions: {},
    dataLayerPush: {
      submissionType: ['NDA', 'ANDA', 'IND', 'DMF', 'MAA'],
      documentType: 'CTD/eCTD',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Regulatory Dossier Support',
    description: 'CTD/eCTD module preparation, NDA/ANDA/IND/DMF dossier compilation, and CMC documentation review.',
    serviceType: 'Regulatory Submission & Documentation Support',
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
      name: 'Regulatory Dossier Support',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CTD/eCTD Module Preparation',
            description: 'Authoring and compilation of Modules 1–5 as per ICH and region-specific guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'NDA, ANDA, IND, DMF, MAA Compilation',
            description: 'Complete support for global regulatory submissions across agencies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CMC Documentation Review',
            description:
              'Technical and regulatory compliance review of Chemistry, Manufacturing, and Controls sections.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pre-Approval Inspection (PAI) Readiness',
            description: 'Support for PAI documentation and regulatory inspection readiness.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Data Integrity and Computer System Validation (CSV)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Data Integrity ensures data is accurate, complete, and reliable throughout its lifecycle. CSV verifies that computerized systems in GxP environments meet regulatory requirements, such as 21 CFR Part 11, for security and traceability.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is 21 CFR Part 11 compliance important?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Compliance with 21 CFR Part 11 ensures that electronic records and signatures are trustworthy, secure, and equivalent to paper records, meeting FDA requirements and avoiding regulatory penalties.',
          },
        },
        {
          '@type': 'Question',
          name: 'What deliverables are included in your Data Integrity and CSV services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide a Data Integrity Audit Report, CSV Master Plan, Audit Trail & Backup Validation Summary, and a 21 CFR Part 11 Compliance Checklist to ensure regulatory compliance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which regulatory guidelines do your services align with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our services comply with 21 CFR Part 11, MHRA Data Integrity Guidance, EU Annex 11, and WHO Guidance on Data Integrity, ensuring global regulatory alignment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Indivirtus ensure confidentiality during audits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We adhere to strict confidentiality protocols and industry best practices, protecting your sensitive data throughout the audit and validation process.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of systems can Indivirtus validate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We validate a range of GxP systems, including electronic batch records, laboratory information management systems (LIMS), quality management systems, and other computerized systems.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['USD', 'INR'],
      price: 'Customized as per project scope',
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
        name: 'What is CTD/eCTD in pharmaceutical submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CTD (Common Technical Document) and eCTD (electronic format) are structured formats for submitting regulatory dossiers to agencies like the FDA and EMA.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support all types of regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we support NDA, ANDA, IND, DMF, CEP, and MAA submissions with complete dossier lifecycle management.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you assist with CMC documentation review?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our team conducts detailed reviews to ensure your CMC sections meet global regulatory expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in PAI readiness support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help prepare documentation, mock queries, and inspection checklists to ensure your site and team are fully PAI-ready.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to compile a regulatory dossier?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dossier compilation timelines range from 2 to 6 weeks depending on dossier complexity and available documentation.',
        },
      },
    ],
  },
  meta: {
    title: 'Regulatory Dossier Support | CTD/eCTD, NDA, ANDA, DMF, MAA - Indivirtus',
    description:
      'Get expert help in CTD/eCTD dossier preparation, NDA, ANDA, IND, DMF, and MAA submissions. CMC documentation review and PAI readiness included.',
    keywords: [
      'Regulatory dossier support',
      'CTD preparation',
      'eCTD submissions',
      'NDA ANDA IND DMF MAA',
      'CMC documentation',
      'PAI readiness',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Regulatory Dossier Support | CTD/eCTD, NDA, ANDA, DMF, MAA',
      description: 'Expert regulatory submission support for pharma and API manufacturers.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['CTD', 'eCTD', 'CMC Review', 'Submission Dossier'],
};
