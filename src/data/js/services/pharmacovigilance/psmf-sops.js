import serviceImage from '@/assets/pharmacovigilance/psmf-sops.jpg';
const link = '/services/pharmacovigilance/psmf-sops';

export default {
  slug: 'psmf-sops',
  parentSlug: 'pharmacovigilance',
  service_id: 'PV010',
  report_type: 'Document Drafting & Compliance Setup',
  title: 'PSMF & SOPs Preparation',
  name: 'PSMF & SOPs Preparation',
  description:
    'Authoring and maintaining regulatory-compliant Pharmacovigilance System Master Files (PSMF) and SOPs tailored for global regulatory frameworks.',
  full_description:
    'Our PSMF & SOPs Preparation service supports MAHs and PV service providers in building a comprehensive documentation foundation. From EMA and MHRA-compliant PSMFs to SOPs aligned with GVP modules, we offer complete lifecycle management including annex structuring, version control, and integration with the organization’s Quality Management System. Each document is customized to reflect your company’s operational setup and ensure regulatory inspection readiness.',
  estimated_duration: '2–4 weeks',
  deliverables: [
    'EMA/MHRA-compliant PSMF document',
    'Custom PV SOP set (GVP-aligned)',
    'Version control matrix',
    'Annex templates and documentation plan',
  ],
  regulatory_basis: ['EMA GVP Module I', 'MHRA GVP Requirements', 'ICH E2E'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Clinical Research'],
  expertise_area: ['Pharmacovigilance', 'Quality Systems', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '📂',
  image: {
    path: serviceImage,
    alt: 'PSMF & SOPs documentation process with compliance elements',
    caption: 'EMA and MHRA-compliant PSMF & PV SOP creation by Indivirtus',
  },
  pageContent: {
    hero: {
      heading: "PSMF & SOPs Preparation for <span class='halfHeading'>Global Compliance</span>",
      tagline: 'Build Robust PV Documentation for Regulatory Success',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>PSMF & SOPs Preparation service</strong> delivers comprehensive, regulatory-compliant Pharmacovigilance System Master Files (PSMFs) and SOPs for MAHs and PV service providers. Tailored to EMA, MHRA, and GVP standards, we ensure <strong>inspection-ready documentation</strong> with full lifecycle management.',
    },
    overview: {
      heading: "Mastering PV <span class='halfHeading'>Documentation</span>",
      overviewCards: [
        {
          heading: 'What are PSMF & SOPs Preparation Services?',
          detail:
            'Our services provide EMA/MHRA-compliant PSMFs, GVP-aligned SOPs, annex structuring, and version control, ensuring a robust documentation foundation for <strong>global pharmacovigilance compliance</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Compliant PSMFs and SOPs ensure <strong>regulatory inspection readiness</strong>, operational consistency, and integration with Quality Management Systems, supporting global safety and compliance.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led PV documentation solutions</strong>, providing customized, compliant PSMFs and SOPs to streamline regulatory compliance.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Documentation Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our PSMF & SOPs Preparation services are led by certified pharmacovigilance experts specializing in <strong>global regulatory compliance</strong>. We author EMA/MHRA-compliant PSMFs and GVP-aligned SOPs, structure annexes, and implement version control for lifecycle management.',
        'Our tailored approach integrates with your Quality Management System, delivering <strong>inspection-ready documentation</strong> that reflects your operational setup and aligns with EMA GVP Module I, MHRA, and ICH E2E standards.',
      ],
    },
    deliverables: {
      heading: "PSMF & SOPs Preparation <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>EMA/MHRA-Compliant PSMF Document</strong>: Comprehensive pharmacovigilance system overview.',
        '<strong>Custom PV SOP Set (GVP-Aligned)</strong>: Tailored procedures for operational consistency.',
        '<strong>Version Control Matrix</strong>: Traceable documentation updates for compliance.',
        '<strong>Annex Templates and Documentation Plan</strong>: Structured tools for lifecycle management.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our PSMF & SOPs Preparation services align with stringent global pharmacovigilance standards, ensuring your documentation is <strong>inspection-ready</strong> and compliant with international markets. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence.',
      ],
      itemList: [
        '<strong>EMA GVP Module I</strong>: European standards for pharmacovigilance system documentation.',
        '<strong>MHRA GVP Requirements</strong>: UK regulations for PV system compliance.',
        '<strong>ICH E2E</strong>: Guidelines for pharmacovigilance planning and documentation.',
        '<strong>WHO Pharmacovigilance Guidelines</strong>: Global standards for safety system documentation.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our PSMF & SOPs Preparation services are essential for MAHs and PV service providers establishing or maintaining <strong>compliant pharmacovigilance systems</strong>. Ideal for regulatory inspections, system setup, or process optimization, our solutions support global compliance. Key use cases include authoring PSMFs for <strong>new MAHs</strong>, updating SOPs for GVP alignment, and ensuring inspection readiness.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for MAHs and PV service providers, delivering <strong>expert-led PSMF and SOP solutions</strong> backed by certified pharmacovigilance experts with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, tailored documentation, driving <strong>regulatory success</strong> and pharmacovigilance excellence.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>PV Documentation Compliance?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert PSMF & SOP Solutions',
      aria: 'Contact us to discuss your PSMF and SOP preparation needs',
    },
  },
  gtm: {
    eventCategory: 'Pharmacovigilance',
    eventAction: 'PSMF_SOPs_Preparation_View',
    eventLabel: 'PSMF & SOPs Preparation Service',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Document Compliance'],
      certification: 'EMA/MHRA GVP',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'PSMF & SOPs Preparation',
    description:
      'Regulatory-compliant authoring of PSMF and SOPs for pharmacovigilance systems, aligned with EMA, MHRA, and ICH standards.',
    serviceType: 'Pharmacovigilance Documentation Service',
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
      name: 'PSMF & SOPs Preparation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EMA/MHRA-compliant PSMF',
            description: 'Preparation of Pharmacovigilance System Master File as per EU and UK standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SOPs for PV activities',
            description: 'Custom SOP development covering all pharmacovigilance activities per GVP guidance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Annexes & version control',
            description: 'Structured annex documentation and controlled versioning aligned with QMS.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quality system documentation',
            description: 'Integration of PV documentation into organization-wide quality systems.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Tiered pricing based on scope',
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
        name: 'What is a PSMF and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Pharmacovigilance System Master File (PSMF) is a regulatory document required by EMA and MHRA to describe the PV system of the MAH. It ensures transparency, compliance, and inspection readiness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide both EU and UK compliant PSMFs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we prepare region-specific PSMFs aligned with EMA and MHRA formats, including region-specific annexes and role definitions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What SOPs are typically included in PV documentation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We develop SOPs covering ICSR management, aggregate reporting, literature screening, signal detection, database validation, and PSMF maintenance among others.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you manage version control and updates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We implement a structured version control matrix and change log system to track updates across SOPs and annexes, fully integrated with the client’s QMS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can these documents be prepared in inspection-ready format?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. All documents are formatted and quality-reviewed to meet inspection-readiness standards for audits by EMA, MHRA, or other global regulators.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do PSMF & SOPs Preparation services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include EMA/MHRA-compliant PSMFs, GVP-aligned SOPs, version control matrices, and annex templates tailored for pharmacovigilance compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from PSMF & SOPs Preparation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MAHs and PV service providers establishing or maintaining compliant pharmacovigilance systems for regulatory inspections benefit from our tailored solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with EMA GVP Module I, MHRA GVP Requirements, ICH E2E, and WHO Pharmacovigilance Guidelines, ensuring global compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive EMA/MHRA-compliant PSMFs, custom PV SOPs, version control matrices, and annex templates/documentation plans.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the PSMF and SOP services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your organization’s operational setup, regulatory requirements, and PV needs, ensuring compliant documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support inspection readiness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide comprehensive, version-controlled PSMFs and SOPs integrated with your Quality Management System, ensuring readiness for regulatory inspections.',
        },
      },
    ],
  },
  meta: {
    title: 'PSMF & SOPs Preparation for Pharmacovigilance | Indivirtus',
    description:
      'Build a robust pharmacovigilance system with PSMF and SOPs aligned with EMA and MHRA regulations. Expert PV documentation services by Indivirtus.',
    keywords: [
      'PSMF preparation',
      'pharmacovigilance SOPs',
      'EMA MHRA GVP',
      'PV documentation',
      'QMS for PV',
      'PV annexes',
      'inspection-ready SOPs',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'PSMF & SOPs Preparation | Pharmacovigilance Documentation',
      description: 'EMA and MHRA-compliant PSMF and SOPs preparation for PV systems.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Regulatory Documentation Review', 'SOP Gap Assessment', 'PSMF Compliance Evaluation'],
};
