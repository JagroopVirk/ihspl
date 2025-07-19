import serviceImage from '@/assets/greenfield-brownfield/equipment-procurement.jpg';
const link = '/services/greenfield-brownfield/equipment-procurement';

export default {
  slug: 'equipment-procurement',
  parentSlug: 'greenfield-brownfield',
  service_id: 'EP001',
  report_type: 'Equipment Procurement Dossier',
  title: 'Equipment Procurement Services',
  name: 'Equipment Procurement',
  description:
    'Strategic sourcing, vendor audits, and installation coordination for pharmaceutical equipment procurement.',
  full_description:
    'Indivirtus Healthcare offers comprehensive Equipment Procurement services tailored to pharmaceutical and biotech facilities. From identifying qualified vendors to conducting technical audits, coordinating FAT/SAT activities, and overseeing installation and hook-up, our team ensures that every piece of equipment meets regulatory and operational standards. Whether you’re sourcing from global OEMs or local suppliers, we streamline procurement while ensuring compliance, timely delivery, and cost-efficiency.',
  estimated_duration: '6–10 weeks',
  deliverables: [
    'Approved Equipment List (AEL)',
    'Vendor Qualification Reports',
    'FAT/SAT Coordination Reports',
    'Sourcing Plan (Global/Local)',
    'Installation & Hook-Up Report',
  ],
  regulatory_basis: ['USFDA 21 CFR Part 11', 'EU GMP Annex 11', 'WHO TRS 1019 Annex 2'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'API Manufacturing'],
  expertise_area: ['Engineering', 'Procurement', 'Regulatory Compliance'],
  is_active: true,
  pageLink: link,
  icon: '⚙️',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical Equipment Procurement and Installation',
    caption: 'Vendor audits, sourcing, FAT/SAT, and equipment setup for pharma projects',
  },
  gtm: {
    eventCategory: 'Equipment Procurement',
    eventAction: 'View Service',
    eventLabel: 'Equipment Procurement Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Equipment Procurement Dossier'],
      certification: 'NA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Equipment Procurement',
    description:
      'Pharma equipment procurement services including vendor audits, FAT/SAT coordination, and installation support.',
    serviceType: 'Pharmaceutical Equipment Procurement',
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
      name: 'Equipment Procurement Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Vendor Selection & Audits',
          description:
            'Identify, evaluate, and audit equipment vendors to ensure regulatory compliance and operational suitability.',
        },
        {
          '@type': 'Offer',
          name: 'FAT/SAT Coordination',
          description:
            'Coordinate Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) to validate equipment performance and compliance.',
        },
        {
          '@type': 'Offer',
          name: 'Global & Local Sourcing',
          description:
            'Source equipment from global OEMs or trusted local suppliers with optimized cost, lead-time, and quality balance.',
        },
        {
          '@type': 'Offer',
          name: 'Installation & Hook-Up',
          description:
            'Oversee equipment installation and integration with utilities and systems, ensuring alignment with project URS and validation readiness.',
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
        name: 'What is covered under vendor selection and audit for pharma equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate vendors based on regulatory history, quality systems, financial stability, and technical capabilities. Site audits ensure the equipment meets cGMP and user requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are FAT and SAT in equipment procurement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FAT (Factory Acceptance Test) ensures equipment performs as per specs before dispatch, while SAT (Site Acceptance Test) validates it post-installation. We manage both processes end-to-end.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you support both international and local equipment sourcing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we leverage a vetted network of global OEMs and regional suppliers to source high-quality equipment aligned with project specifications and budget goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you assist with installation and utility hook-up of procured equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We coordinate installation, calibration, utility connections, and alignment with cleanroom layouts or containment designs, ensuring readiness for qualification.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the equipment procurement process typically take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline varies based on equipment complexity and sourcing region, but typical procurement cycles span 6–10 weeks including testing and installation.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmaceutical Equipment Procurement | Indivirtus',
    description:
      'End-to-end pharmaceutical equipment procurement including vendor audits, FAT/SAT coordination, sourcing, installation, and hook-up for GMP compliance.',
    keywords: [
      'pharma equipment procurement',
      'vendor audits pharma',
      'FAT SAT coordination',
      'GMP equipment installation',
      'pharmaceutical equipment sourcing',
      'hook-up and installation pharma',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharmaceutical Equipment Procurement | Indivirtus',
      description:
        'Strategic procurement services for pharma equipment — vendor qualification, FAT/SAT, global/local sourcing, and installation coordination.',
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
    'Vendor Qualification Audit',
    'FAT/SAT Documentation',
    'Procurement Planning Report',
    'Installation Readiness Checklist',
  ],
};
