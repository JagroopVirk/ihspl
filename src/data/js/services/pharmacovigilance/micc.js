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
