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
