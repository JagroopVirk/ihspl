import serviceImage from '@/assets/gmp-audits/pai-support.jpg';
const link = '/services/gmp-audits/pai-support';

export default {
  slug: 'pai-support',
  parentSlug: 'gmp-audits',
  service_id: 'PAI_SUPPORT',
  report_type: 'Audit Readiness',
  title: 'PAI Support Services',
  name: 'Pre-Approval Inspection (PAI) Support',
  description: 'Site readiness, documentation, and audit support for successful pre-approval inspections.',
  full_description:
    'Our PAI Support services help pharmaceutical manufacturers prepare for Pre-Approval Inspections (PAIs) by offering comprehensive assessments, real-time audit guidance, and remediation planning. From readiness reviews to documentation alignment and on-ground inspection assistance, we ensure your facility is fully prepared to meet regulatory expectations.',
  estimated_duration: '2–6 weeks (depending on scope)',
  deliverables: [
    'Site readiness assessment report',
    'PAI document checklist and review',
    'Audit response plan',
    'Remediation roadmap',
  ],
  regulatory_basis: ['FDA', 'EMA', 'CDSCO', 'PIC/S'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'API & FDF Manufacturers'],
  expertise_area: ['Regulatory Inspections', 'Audit Readiness', 'GMP Compliance'],
  is_active: true,
  pageLink: link,
  icon: '🧾',
  image: {
    path: serviceImage,
    alt: 'PAI Support Services for Regulatory Readiness',
    caption: 'Inspection readiness and documentation support for smooth regulatory approvals.',
  },
  gtm: {
    eventCategory: 'GMP Audit Services',
    eventAction: 'PAI Support Accessed',
    eventLabel: 'pai-support',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Audit Readiness'],
      certification: 'Regulatory Pre-Approval',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pre-Approval Inspection (PAI) Support',
    description:
      'Comprehensive regulatory inspection readiness support including site audits, documentation alignment, and remediation planning.',
    serviceType: 'Pharmaceutical Regulatory Support',
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
      name: 'PAI Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site Readiness Assessments',
            description: 'Evaluation of site preparedness for PAI.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PAI Documentation Support',
            description: 'Comprehensive support in compiling and reviewing required PAI documents.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real-time Audit Assistance',
            description: 'On-ground or remote assistance during regulatory inspections.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Remediation Planning',
            description: 'Structured remediation plans addressing identified gaps post-inspection.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Project-based pricing',
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
        name: 'What is PAI support and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PAI (Pre-Approval Inspection) support ensures that your site, documents, and personnel are fully prepared for regulatory inspections, which are critical for market authorization.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a site readiness assessment include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes facility walkthroughs, documentation reviews, staff preparedness evaluations, and identification of potential compliance risks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Indivirtus assist during the actual regulatory audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer real-time assistance during audits, helping you respond promptly to inspector queries and observations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of documentation is reviewed under PAI support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review SOPs, batch records, validation reports, quality manuals, and other documents requested during pre-approval inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you help with remediation post-audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We identify root causes, draft CAPA plans, and provide timelines and documentation to address any inspectional findings effectively.',
        },
      },
    ],
  },
  meta: {
    title: 'PAI Support Services | Site Readiness & Audit Preparation - Indivirtus',
    description:
      'Get audit-ready with our expert PAI Support services. Indivirtus offers site readiness reviews, documentation alignment, and real-time assistance during inspections.',
    keywords: [
      'PAI support',
      'Pre-approval inspection readiness',
      'Pharma audit assistance',
      'PAI documentation',
      'Site inspection support',
      'Regulatory inspection readiness',
      'CRO audit services',
      'Indivirtus PAI',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'PAI Support Services | Site Readiness & Audit Preparation - Indivirtus',
      description:
        'Indivirtus provides end-to-end PAI Support services including audit documentation and real-time regulatory inspection assistance.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Site Inspection Readiness', 'Documentation Audits', 'Mock PAI Simulations'],
};
