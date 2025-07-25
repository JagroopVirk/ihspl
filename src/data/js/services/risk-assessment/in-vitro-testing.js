import serviceImage from '@/assets/risk-assessment/in-vitro-testing.jpg';
const link = '/services/risk-assessment/in-vitro-testing';

export default {
  slug: 'in-vitro-testing',
  parentSlug: 'risk-assessment',
  service_id: 'cro-in-vitro-genotox',
  report_type: 'In Vitro Genotoxicity Testing',
  title: 'In Vitro Genotoxicity Testing',
  name: 'In Vitro Genotoxicity Testing',
  description:
    'OECD-compliant in vitro genotoxicity testing including Ames Test and Mouse Lymphoma Assay under GLP conditions.',
  full_description:
    'Our in vitro genotoxicity testing services support early-stage safety evaluations by identifying mutagenic and clastogenic risks using cell-based assays. We conduct the Ames Test (OECD 471) and Mouse Lymphoma Assay (OECD 490), both aligned with international guidelines. These high-throughput, GLP-compliant assays are essential for impurity profiling, regulatory filings, and hazard classification without the ethical complexities of animal testing.',
  estimated_duration: '1–3 weeks',
  deliverables: [
    'OECD-compliant study protocol',
    'GLP study report with statistical evaluation',
    'Raw data and interpretation',
    'Mutagenicity/clastogenicity classification',
  ],
  regulatory_basis: ['OECD 471', 'OECD 490', 'ICH S2(R1)', 'FDA Guidance on Genotoxic Impurities'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'API Manufacturers', 'Biotech', 'CDMO'],
  expertise_area: ['Genotoxicology', 'In Vitro Toxicology', 'Regulatory Testing'],
  is_active: true,
  pageLink: link,
  icon: '🧫',
  image: {
    path: serviceImage,
    alt: 'In Vitro Genotoxicity Testing Lab',
    caption: 'OECD-aligned in vitro assays for regulatory mutagenicity evaluations.',
  },
  pageContent: {
    hero: {
      heading: "In Vitro Genotoxicity Testing for <span class='halfHeading'>Regulatory Safety</span>",
      tagline: 'High-Throughput, GLP-Compliant Safety Assessments',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>In Vitro Genotoxicity Testing services</strong> provide OECD-compliant Ames Test (OECD 471) and Mouse Lymphoma Assay (OECD 490) under GLP conditions. These assays deliver <strong>reliable mutagenicity and clastogenicity data</strong> for regulatory filings and impurity profiling, minimizing ethical concerns.',
    },
    overview: {
      heading: "Mastering In Vitro <span class='halfHeading'>Genotoxicity Testing</span>",
      overviewCards: [
        {
          heading: 'What are In Vitro Genotoxicity Testing Services?',
          detail:
            'Our services include GLP-compliant Ames Test and Mouse Lymphoma Assay, aligned with OECD 471 and 490, to assess mutagenic and clastogenic risks for <strong>regulatory compliance</strong>.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'In vitro genotoxicity testing identifies <strong>safety risks early</strong>, supports regulatory filings, and reduces reliance on animal testing, ensuring compliance and efficient development.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led genotoxicity solutions</strong>, providing reliable, regulator-ready data to support global submissions and safety profiling.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>In Vitro Testing Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our In Vitro Genotoxicity Testing services are led by certified toxicology experts with <strong>global regulatory expertise</strong>. We conduct the Ames Test (OECD 471) and Mouse Lymphoma Assay (OECD 490) under GLP conditions to evaluate mutagenic and clastogenic risks.',
        'Our high-throughput approach ensures <strong>regulator-ready reports</strong>, aligning with OECD 471, OECD 490, ICH S2(R1), and FDA Guidance on Genotoxic Impurities to support pharmaceutical safety assessments.',
      ],
    },
    deliverables: {
      heading: "In Vitro Genotoxicity <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>OECD-Compliant Study Protocol</strong>: Detailed plan for genotoxicity testing.',
        '<strong>GLP Study Report with Statistical Evaluation</strong>: Comprehensive report with robust analysis.',
        '<strong>Raw Data and Interpretation</strong>: Complete data sets with scientific insights.',
        '<strong>Mutagenicity/Clastogenicity Classification</strong>: Clear hazard classification for submissions.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our In Vitro Genotoxicity Testing services align with stringent global standards, ensuring your data is <strong>regulator-ready</strong> and compliant with international expectations. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence and submission success.',
      ],
      itemList: [
        '<strong>OECD 471</strong>: Guideline for Bacterial Reverse Mutation Test (Ames Test).',
        '<strong>OECD 490</strong>: Guideline for In Vitro Mammalian Cell Gene Mutation Tests (Mouse Lymphoma Assay).',
        '<strong>ICH S2(R1)</strong>: Standards for genotoxicity testing in pharmaceuticals.',
        '<strong>FDA Guidance on Genotoxic Impurities</strong>: U.S. regulations for impurity safety assessments.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our In Vitro Genotoxicity Testing services are essential for pharmaceutical companies ensuring <strong>compound safety</strong> and regulatory compliance. Ideal for impurity profiling, early-stage safety evaluations, and regulatory filings, our solutions support global markets. Key use cases include assessing <strong>mutagenicity of impurities</strong>, supporting IND submissions, and classifying hazards for new drug candidates.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led genotoxicity testing solutions</strong> backed by certified toxicology professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, high-throughput genotoxicity data, driving <strong>regulatory success</strong> and patient safety.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>Compound Safety?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert In Vitro Testing Solutions',
      aria: 'Contact us to discuss your in vitro genotoxicity testing needs',
    },
  },
  gtm: {
    eventCategory: 'In Vitro Genotoxicity Testing',
    eventAction: 'In Vitro Genotoxicity Page View',
    eventLabel: 'Genotox In Vitro Service Detail',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['In Vitro Genotoxicity Testing'],
      certification: 'GLP-compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'In Vitro Genotoxicity Testing',
    description:
      'In vitro genotoxicity services including Ames Test (OECD 471) and Mouse Lymphoma Assay (OECD 490), GLP-compliant and regulatory ready.',
    serviceType: 'In Vitro Genotoxicity Testing',
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
      name: 'In Vitro Genotoxicity Testing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ames Test (OECD 471)',
            description:
              'Detects mutagenicity by evaluating reverse mutations in Salmonella typhimurium or E. coli strains exposed to test compounds.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mouse Lymphoma Assay (OECD 490)',
            description:
              'Assesses gene mutation and chromosomal damage in mammalian cells, providing a broad safety profile at the cellular level.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GLP-Compliant Study Execution',
            description:
              'All genotoxicity studies are performed under strict GLP practices, ensuring reliability, reproducibility, and regulatory acceptance.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Study-based pricing',
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
        name: 'What is the purpose of in vitro genotoxicity testing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In vitro genotoxicity tests are designed to identify whether a chemical can cause genetic mutations or chromosomal damage in cultured cells, helping predict carcinogenic risks without animal studies.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Ames Test (OECD 471)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Ames Test detects mutagenicity by measuring the rate of reverse mutations in specific bacterial strains when exposed to a test compound, both with and without metabolic activation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the Mouse Lymphoma Assay detect?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Mouse Lymphoma Assay evaluates genetic mutations and chromosomal alterations in mammalian cells, providing information on both gene-level and structural DNA damage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these studies GLP-compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All in vitro genotoxicity assays are conducted in GLP-certified labs, ensuring quality, traceability, and regulatory acceptance of the data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are in vitro results accepted for regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. In vitro assays like the Ames Test and MLA are standard requirements under ICH S2(R1) and are accepted by regulatory agencies worldwide including FDA, EMA, and PMDA.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do In Vitro Genotoxicity Testing services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include OECD-compliant Ames Test and Mouse Lymphoma Assay under GLP conditions, delivering protocols, reports, and hazard classifications.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from In Vitro Genotoxicity Testing services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical companies conducting early-stage safety evaluations, impurity profiling, or regulatory filings benefit from our tailored solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with OECD 471, OECD 490, ICH S2(R1), and FDA Genotoxicity Guidance, ensuring global regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive OECD-compliant protocols, GLP study reports with statistical evaluation, raw data, and mutagenicity/clastogenicity classifications.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the in vitro testing services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific compounds, impurities, and regulatory requirements, ensuring compliant solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide GLP-compliant reports and classifications to support genotoxicity data for IND, impurity profiling, and other regulatory submissions.',
        },
      },
    ],
  },
  meta: {
    title: 'In Vitro Genotoxicity Testing | Indivirtus CRO Services',
    description:
      'OECD 471 Ames Test and OECD 490 Mouse Lymphoma Assay under GLP conditions. Fast and reliable in vitro genotoxicity evaluations for pharmaceutical safety.',
    keywords: [
      'in vitro genotoxicity testing',
      'Ames test',
      'OECD 471',
      'OECD 490',
      'mouse lymphoma assay',
      'GLP genotoxicity studies',
      'mutagenicity test',
      'Indivirtus CRO',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'In Vitro Genotoxicity Testing | Indivirtus CRO Services',
      description:
        'OECD-compliant Ames Test and Mouse Lymphoma Assay conducted in GLP labs. Mutagenicity data for regulatory filings.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Ames Test (OECD 471)', 'Mouse Lymphoma Assay (OECD 490)', 'GLP Genotoxicity Screening'],
};
