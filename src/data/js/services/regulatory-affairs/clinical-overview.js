import serviceImage from '@/assets/regulatory-affairs/clinical-overview.jpg';
const link = '/services/regulatory-affairs/clinical-overview';

export default {
  slug: 'clinical-overview',
  parentSlug: 'regulatory-affairs',
  service_id: 'REG003',
  report_type: 'Clinical / Non-Clinical Overview Reports',
  title: 'Clinical & Non-Clinical Overview Services',
  name: 'Clinical/Non-Clinical Overview',
  description:
    'Expert preparation of clinical and non-clinical overviews for regulatory submissions including bioequivalence justifications and BCS biowaivers.',
  full_description:
    'Indivirtus provides strategic support in compiling high-quality clinical and non-clinical overview documents for Modules 2.4 (Nonclinical Overview) and 2.5 (Clinical Overview) as per ICH guidelines. Our services include scientific justification for bioequivalence, BCS-based biowaivers (Class I/III), and development of bridging study reports for global submissions. These overviews form the scientific narrative supporting Modules 3–5 and are critical for successful dossier acceptance.',
  estimated_duration: '3–5 weeks depending on data availability and indication',
  deliverables: [
    'Module 2.4 (Nonclinical Overview)',
    'Module 2.5 (Clinical Overview)',
    'Bioequivalence Justification Document',
    'BCS-based Biowaiver Support',
    'Bridging Study Summary Report',
  ],
  regulatory_basis: [
    'ICH M4S',
    'US FDA Guidance on Clinical/Non-Clinical Summaries',
    'EMA and ASEAN guidelines on biowaivers',
    'CDSCO Bioavailability/Bioequivalence norms',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Generics'],
  expertise_area: ['Regulatory Writing', 'Clinical Justification', 'Biowaivers'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Clinical and Non-Clinical Overviews',
    caption: 'Module 2.4 & 2.5 summaries, bioequivalence justification & BCS biowaiver support',
  },
  gtm: {
    eventCategory: 'Clinical Overview Services',
    eventAction: 'Submit Request',
    eventLabel: 'Clinical/Non-Clinical Module Services',
    dataLayerPush: {
      reportType: ['Clinical / Non-Clinical Overview Reports'],
      modulesPrepared: ['Module 2.4', 'Module 2.5'],
      includesBiowaiver: true,
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Clinical and Non-Clinical Overview Writing',
    description:
      'Preparation of clinical (Module 2.5) and non-clinical (Module 2.4) overviews including bioequivalence rationale, biowaivers, and bridging study documentation.',
    serviceType: 'Regulatory Medical Writing',
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
      name: 'Clinical & Non-Clinical Writing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Module 2.4 Preparation',
            description:
              'Preparation of the Nonclinical Overview (Module 2.4) summarizing pharmacology, toxicology, and pharmacokinetics studies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Module 2.5 Preparation',
            description:
              'Preparation of the Clinical Overview (Module 2.5) summarizing efficacy, safety, and risk-benefit analysis.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bioequivalence Justification',
            description:
              'Scientific justification for waiver of in vivo bioequivalence studies for certain formulations or line extensions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'BCS Class I/III Biowaivers',
            description:
              'Preparation of BCS-based biowaiver dossiers compliant with ICH, FDA, and EMA guidance for eligible products.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bridging Study Reports',
            description:
              'Summarized bridging data across different studies or populations to justify extrapolation of safety and efficacy.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Custom quotation based on indication and data availability',
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
        name: 'What is included in Module 2.4 and 2.5?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Module 2.4 includes the nonclinical overview summarizing pharmacology and toxicology, while Module 2.5 includes the clinical overview with efficacy and safety conclusions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are BCS-based biowaivers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BCS-based biowaivers are regulatory provisions that allow waiving in vivo bioequivalence studies for highly soluble, highly permeable (Class I) or rapidly dissolving (Class III) drugs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you justify biowaivers for fixed-dose combinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we evaluate fixed-dose combination products for eligibility under biowaiver guidance and prepare appropriate justification based on regulatory expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a bridging study report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bridging study reports are summaries that link nonclinical or clinical data from different sources to justify product approval in a new population or region.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide literature references and citations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all overviews include updated literature references, citations from global guidance documents, and rationale to support conclusions.',
        },
      },
    ],
  },
  meta: {
    title: 'Clinical & Non-Clinical Overview | Module 2.4 & 2.5 Writing Services',
    description:
      'Expert preparation of clinical (Module 2.5) and non-clinical (Module 2.4) overviews, including BCS biowaivers and bioequivalence justifications.',
    keywords: [
      'module 2.4 writing',
      'module 2.5 preparation',
      'clinical overview services',
      'non-clinical overview writing',
      'BCS biowaiver support',
      'bioequivalence justification',
      'bridging study report',
      'regulatory overview module preparation',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Clinical/Non-Clinical Overview Services | Indivirtus',
      description: 'Strategic Module 2.4 and 2.5 support with biowaiver justification and bridging studies.',
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
    'Clinical/Nonclinical Summary Review',
    'BCS Biowaiver Eligibility Check',
    'Bridging Study Strategy',
    'Regulatory Justification Audit',
  ],
};
