import serviceImage from '@/assets/pharmacovigilance/micc.jpg';
const link = '/services/pharmacovigilance/micc';

export default {
  slug: 'micc',
  parentSlug: 'pharmacovigilance',
  service_id: 'PHV007',
  report_type: 'Medical Information & Product Complaint Support',
  title: 'Medical Information Call Centre (MICC)',
  name: '24/7 Medical Information & Product Complaint Call Centre',
  description:
    'Around-the-clock multilingual medical inquiry and product complaint triage services for healthcare providers and patients.',
  full_description:
    'Our Medical Information Call Centre (MICC) service provides global 24/7 support for handling medical inquiries, adverse event intake, and product complaints. We ensure compliance with global PV standards while offering a patient- and HCP-friendly interface. With multilingual capabilities, our trained agents triage reports, manage medical queries, and escalate serious issues in real time — making your pharmacovigilance and customer engagement seamless and regulatory compliant.',
  estimated_duration: 'Ongoing service with monthly reporting',
  deliverables: [
    'Medical inquiry reports (daily/weekly/monthly)',
    'Adverse event case forwarding',
    'Product complaint triage summaries',
    'Call logs and QA monitoring reports',
    'HCP & patient interaction transcripts (as required)',
  ],
  regulatory_basis: ['ICH E2D', 'GVP Module VI', 'US FDA 21 CFR Part 314.80', 'EU Volume 9A'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotech', 'Medical Devices'],
  expertise_area: ['Pharmacovigilance', 'Medical Affairs', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '📞',
  image: {
    path: serviceImage,
    alt: 'Medical Call Centre for Drug Safety & Info Support',
    caption: '24/7 multilingual medical call centre services for HCPs and patients',
  },
  pageContent: {
    hero: {
      heading: "24/7 Multilingual Medical Inquiry & <span class='halfHeading'>Complaint Triage</span>",
      tagline: 'Global Support for Seamless Pharmacovigilance',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>Medical Information Call Centre (MICC) service</strong> provides 24/7 multilingual support for medical inquiries, adverse event intake, and product complaints. With trained agents and global PV compliance, we ensure <strong>patient- and HCP-friendly engagement</strong> for pharmacovigilance and customer satisfaction.',
    },
    overview: {
      heading: "Mastering Medical Inquiry & <span class='halfHeading'>Triage Services</span>",
      overviewCards: [
        {
          heading: 'What are Medical Information Call Centre Services?',
          detail:
            'Our MICC services offer 24/7 multilingual support for handling medical inquiries, adverse event reporting, and product complaint triage, ensuring compliance with <strong>global pharmacovigilance standards</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Effective inquiry and complaint management ensures <strong>patient safety</strong>, regulatory compliance, and real-time issue escalation, supporting robust pharmacovigilance and customer engagement.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led MICC solutions</strong>, providing seamless, compliant support for healthcare providers and patients worldwide.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>MICC Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our Medical Information Call Centre services are managed by trained pharmacovigilance professionals with <strong>multilingual expertise</strong>. We handle medical inquiries, adverse event intake, and product complaints with a patient- and HCP-friendly interface, ensuring real-time triage and escalation of serious issues.',
        'Our approach aligns with ICH E2D, GVP Module VI, and other global standards, delivering <strong>compliant and efficient support</strong> that integrates with your pharmacovigilance system for seamless operations.',
      ],
    },
    deliverables: {
      heading: "Medical Information Call Centre <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>Medical Inquiry Reports (Daily/Weekly/Monthly)</strong>: Summaries of inquiries and resolutions.',
        '<strong>Adverse Event Case Forwarding</strong>: Timely reporting of adverse events for PV processing.',
        '<strong>Product Complaint Triage Summaries</strong>: Detailed analysis of product-related issues.',
        '<strong>Call Logs and QA Monitoring Reports</strong>: Records ensuring quality and compliance.',
        '<strong>HCP & Patient Interaction Transcripts (as required)</strong>: Documentation for regulatory needs.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our MICC services align with stringent global pharmacovigilance standards, ensuring your operations are <strong>audit-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance safety and regulatory confidence.',
      ],
      itemList: [
        '<strong>ICH E2D</strong>: Guidelines for post-approval safety data management.',
        '<strong>GVP Module VI</strong>: European standards for adverse event reporting.',
        '<strong>US FDA 21 CFR Part 314.80</strong>: U.S. regulations for post-marketing adverse event reporting.',
        '<strong>EU Volume 9A</strong>: European guidelines for pharmacovigilance processes.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our MICC services are essential for pharmaceutical companies and MAHs managing <strong>global pharmacovigilance and customer engagement</strong>. Ideal for adverse event reporting, medical inquiry handling, and product complaint triage, our solutions support regulatory compliance and patient safety. Key use cases include supporting <strong>post-market surveillance</strong>, handling global HCP inquiries, and ensuring compliant adverse event escalation.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led MICC solutions</strong> backed by certified pharmacovigilance professionals with global and multilingual expertise. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid response, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, efficient, and patient-centric support, driving <strong>regulatory success</strong> and enhanced customer engagement.',
      ],
    },
    cta: {
      heading: "Ready to Enhance Your <span class='halfHeading'>PV Support?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert MICC Solutions',
      aria: 'Contact us to discuss your medical information call centre needs',
    },
  },
  gtm: {
    eventCategory: 'Pharmacovigilance Services',
    eventAction: 'MICC Viewed',
    eventLabel: 'Medical Information Call Centre',
    customDimensions: {
      serviceType: 'Medical Information & Product Complaint Handling',
    },
    dataLayerPush: {
      reportType: ['Medical Inquiry', 'Adverse Event Intake', 'Product Complaint'],
      certification: 'ICH E2D, GVP Module VI',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '24/7 Medical Information & Product Complaint Call Centre',
    description:
      'Indivirtus provides multilingual 24/7 support for medical inquiries, adverse event intakes, and product complaint triage through its MICC service for global pharma clients.',
    serviceType: 'Medical Information Call Centre Services',
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
      name: 'Medical Information Call Centre Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '24/7 Medical Inquiry Support',
          description: 'Round-the-clock handling of HCP and patient inquiries with expert escalation protocols.',
        },
        {
          '@type': 'Offer',
          name: 'Multilingual Adverse Event Intake',
          description: 'Trained agents collect and document AEs in local languages, with PV team escalation.',
        },
        {
          '@type': 'Offer',
          name: 'HCP & Patient Interaction',
          description: 'Trained communication specialists manage sensitive medical information interactions.',
        },
        {
          '@type': 'Offer',
          name: 'Product Complaint Triage',
          description: 'Initial intake, categorization, and regulatory escalation of product complaints.',
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
        name: 'What types of medical inquiries can your MICC handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our call centre handles inquiries related to dosage, administration, contraindications, off-label use, and more. All questions are managed by trained agents and escalated to qualified medical professionals as needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is multilingual support available for AE intake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide multilingual adverse event intake services across major languages to support global operations and ensure patient safety data is captured accurately.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure quality during HCP and patient interactions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All interactions are recorded and quality monitored, with regular training and audits to ensure regulatory compliance and empathy-driven communication.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are product complaints managed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Product complaints are triaged using a defined workflow, assessed for seriousness, and escalated to your QA and regulatory teams for investigation and response.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the MICC service be integrated with our existing pharmacovigilance system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer seamless integration with safety databases (like Argus or ArisG), CRMs, and workflow tools to ensure real-time data flow and compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Medical Information Call Centre services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include 24/7 multilingual support for medical inquiries, adverse event intake, product complaint triage, and real-time escalation, ensuring global PV compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from Medical Information Call Centre services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical companies and MAHs managing global inquiries, adverse event reporting, or product complaints benefit from our patient- and HCP-friendly solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with ICH E2D, GVP Module VI, US FDA 21 CFR Part 314.80, and EU Volume 9A, ensuring compliance with global pharmacovigilance standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive medical inquiry reports, adverse event case forwarding, product complaint summaries, call logs, QA monitoring reports, and interaction transcripts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the MICC services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific PV requirements, language needs, and operational goals, ensuring compliant and effective support.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support adverse event reporting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our trained agents triage and escalate adverse events in real time, ensuring timely reporting and integration with your pharmacovigilance system for compliance.',
        },
      },
    ],
  },
  meta: {
    title: 'Medical Information Call Centre for Pharma | Indivirtus',
    description:
      '24/7 multilingual medical information call centre services including medical inquiry handling, adverse event intake, and product complaint triage for pharma & biotech.',
    keywords: [
      'medical call centre pharma',
      '24/7 medical information support',
      'adverse event intake service',
      'pharma complaint triage',
      'HCP call support',
      'MICC service CRO',
      'medical inquiry handling',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Medical Information Call Centre for Pharma | Indivirtus',
      description:
        'Around-the-clock multilingual medical call centre for pharma, handling product inquiries, adverse events, and product complaints globally.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [],
};
