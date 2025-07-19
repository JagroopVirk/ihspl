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
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Regulatory Dossier Support | CTD/eCTD, NDA, ANDA, DMF, MAA',
      description: 'Expert regulatory submission support for pharma and API manufacturers.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['CTD', 'eCTD', 'CMC Review', 'Submission Dossier'],
};
