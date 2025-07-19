import serviceImage from '@/assets/greenfield-brownfield/feasibility-planning.jpg';
const link = '/services/greenfield-brownfield/feasibility-planning';

export default {
  slug: 'feasibility-planning',
  parentSlug: 'greenfield-brownfield',
  service_id: 'FPS001',
  report_type: 'Feasibility Assessment Report',
  title: 'Feasibility & Planning Services',
  name: 'Feasibility & Planning',
  description:
    'Comprehensive feasibility and strategic planning services for pharma facility development including site evaluation, ROI planning, and regulatory mapping.',
  full_description:
    'Indivirtus Healthcare offers end-to-end Feasibility & Planning services to support pharmaceutical companies in Greenfield or Brownfield project development. From technical and financial viability analysis to site selection and regulatory risk mapping, our consultants help design a clear roadmap aligned with compliance and ROI objectives. With insights drawn from years of experience across global regulatory landscapes, our feasibility studies ensure your facility planning is robust, scalable, and future-ready.',
  estimated_duration: '4–6 weeks',
  deliverables: [
    'Feasibility Assessment Report',
    'Technical and Financial Analysis',
    'Site Evaluation Matrix',
    'Business Case with ROI Forecast',
    'Regulatory Risk Map',
  ],
  regulatory_basis: ['ICH Q9 Risk Management', 'WHO TRS 1019 Annex 2', 'USFDA/EMA Facility Design Considerations'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotechnology', 'API Manufacturing'],
  expertise_area: ['Facility Planning', 'Regulatory Strategy', 'Business Analysis'],
  is_active: true,
  pageLink: link,
  icon: '🧭',
  image: {
    path: serviceImage,
    alt: 'Pharmaceutical Facility Feasibility Planning',
    caption: 'Strategic facility planning and feasibility assessment services',
  },
  gtm: {
    eventCategory: 'Feasibility Planning',
    eventAction: 'View Service',
    eventLabel: 'Feasibility & Planning Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Feasibility Assessment Report'],
      certification: 'NA',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Feasibility & Planning',
    description:
      'Technical and business feasibility planning services for pharmaceutical companies including site evaluation, ROI projections, and regulatory mapping.',
    serviceType: 'Feasibility Assessment & Strategic Planning',
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
      name: 'Feasibility & Planning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Technical & Financial Viability',
          description:
            'Assess the technical feasibility and financial sustainability of proposed pharmaceutical projects including CAPEX and OPEX modeling.',
        },
        {
          '@type': 'Offer',
          name: 'Site Selection & Evaluation',
          description:
            'Evaluate and compare multiple sites based on regulatory, logistical, and operational parameters to ensure optimal facility location.',
        },
        {
          '@type': 'Offer',
          name: 'Business Case & ROI Planning',
          description:
            'Develop a compelling business case with return-on-investment forecasts and risk modeling to support strategic decisions.',
        },
        {
          '@type': 'Offer',
          name: 'Regulatory Landscape Mapping',
          description:
            'Map out regional and global regulatory landscapes to anticipate compliance risks and streamline planning and execution.',
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
        name: 'What does technical and financial viability include in pharmaceutical feasibility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It involves assessing engineering practicality, capacity planning, technology fit, cost modeling, CAPEX/OPEX estimation, and break-even analysis to determine project success probability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is site selection performed for a new pharma facility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Site selection includes evaluation based on proximity to suppliers, logistics, utility availability, workforce, regulatory requirements, and environmental risk to determine suitability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is a business case with ROI essential in early-stage planning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A business case helps justify the investment by projecting costs, returns, timelines, and potential risks, enabling stakeholders to make informed go/no-go decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is covered under regulatory landscape mapping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It involves identifying all applicable local and international regulations (e.g., USFDA, EMA, WHO), zoning laws, permitting, and GxP requirements for facility setup and operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a feasibility study typically take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A standard feasibility and planning study for pharma facilities takes 4 to 6 weeks, depending on project complexity, data availability, and number of site options under consideration.',
        },
      },
    ],
  },
  meta: {
    title: 'Feasibility & Planning Services | Indivirtus',
    description:
      'Get expert feasibility and planning services for pharmaceutical projects. From technical and financial assessment to site selection and regulatory mapping, Indivirtus ensures your facility setup is optimized for success.',
    keywords: [
      'pharma feasibility study',
      'pharmaceutical site planning',
      'ROI analysis pharma',
      'regulatory risk mapping',
      'technical feasibility pharma',
      'Greenfield project planning',
      'Brownfield pharma planning',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Feasibility & Planning Services | Indivirtus',
      description:
        'Indivirtus offers feasibility and strategic planning services for pharma facilities, including site evaluation, ROI planning, and regulatory mapping.',
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
    'Technical Feasibility Assessment',
    'Financial Viability Report',
    'Site Suitability Analysis',
    'ROI Business Case Development',
    'Regulatory Compliance Planning',
  ],
};
