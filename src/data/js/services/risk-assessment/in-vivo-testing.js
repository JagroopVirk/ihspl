import serviceImage from '@/assets/risk-assessment/in-vivo-testing.jpg';
const link = '/services/risk-assessment/in-vivo-testing';

export default {
  slug: 'in-vivo-testing',
  parentSlug: 'risk-assessment',
  service_id: 'cro-in-vivo-genotox',
  report_type: 'In Vivo Genotoxicity Testing',
  title: 'In Vivo Genotoxicity Testing',
  name: 'In Vivo Genotoxicity Testing',
  description:
    'Regulatory-compliant in vivo genotoxicity testing services including Micronucleus Test, Comet Assay, and Transgenic Rodent Mutation Assays.',
  full_description:
    'Indivirtus offers comprehensive in vivo genotoxicity testing to evaluate the potential of compounds to cause genetic damage in living organisms. Following OECD guidelines, our services include the Micronucleus Test (OECD 474), Comet Assay (OECD 489), and Transgenic Rodent Mutation Assays. These tests provide critical safety data required for IND, NDA, and other global submissions, ensuring both regulatory compliance and scientific reliability.',
  estimated_duration: '2–4 weeks',
  deliverables: [
    'GLP-compliant study protocol',
    'Raw data & statistical analysis',
    'OECD-compliant full study report',
    'Interpretation and regulatory conclusion',
  ],
  regulatory_basis: ['OECD 474', 'OECD 489', 'OECD 488', 'ICH S2(R1)', 'FDA Genotoxicity Guidance'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturing', 'Regulatory Submissions'],
  expertise_area: ['Genotoxicology', 'In Vivo Studies', 'Preclinical Safety'],
  is_active: true,
  pageLink: link,
  icon: '🐁',
  image: {
    path: serviceImage,
    alt: 'In Vivo Genotoxicity Testing Lab',
    caption: 'Animal-based genotoxicity assays for DNA damage and mutagenicity detection.',
  },
  pageContent: {
    hero: {
      heading: "In Vivo Genotoxicity Testing for <span class='halfHeading'>Regulatory Compliance</span>",
      tagline: 'Robust Safety Assessments for Global Submissions',
      detail:
        'At Indivirtus Healthcare Services Pvt. Ltd., our <strong>In Vivo Genotoxicity Testing services</strong> evaluate the potential of compounds to cause genetic damage using OECD-compliant tests like the Micronucleus Test, Comet Assay, and Transgenic Rodent Mutation Assays. We deliver <strong>GLP-compliant, regulator-ready data</strong> to support IND, NDA, and global submissions.',
    },
    overview: {
      heading: "Mastering In Vivo <span class='halfHeading'>Genotoxicity Testing</span>",
      overviewCards: [
        {
          heading: 'What are In Vivo Genotoxicity Testing Services?',
          detail:
            'Our services include OECD-compliant Micronucleus Test (OECD 474), Comet Assay (OECD 489), and Transgenic Rodent Mutation Assays, providing <strong>critical safety data</strong> for regulatory submissions.',
        },
        {
          heading: 'Why is it Critical?',
          detail:
            'Genotoxicity testing ensures <strong>compound safety</strong>, supports regulatory compliance, and provides essential data for IND/NDA submissions, minimizing risks in drug development.',
        },
        {
          heading: 'Our Role in Your Success',
          detail:
            'As a trusted CRO, Indivirtus Healthcare Services delivers <strong>expert-led genotoxicity solutions</strong>, providing scientifically reliable and compliant data to support global regulatory approvals.',
        },
      ],
    },
    approach: {
      heading: "Our Expert <span class='halfHeading'>Genotoxicity Testing Approach</span>",
      detail: [
        'At Indivirtus Healthcare Services, our In Vivo Genotoxicity Testing services are led by certified toxicology experts with <strong>global regulatory expertise</strong>. We conduct GLP-compliant Micronucleus Tests, Comet Assays, and Transgenic Rodent Mutation Assays following OECD guidelines.',
        'Our rigorous approach ensures <strong>regulator-ready study reports</strong>, aligning with OECD 474, 489, 488, ICH S2(R1), and FDA Genotoxicity Guidance to support pharmaceutical safety assessments.',
      ],
    },
    deliverables: {
      heading: "In Vivo Genotoxicity <span class='halfHeading'>Deliverables</span>",
      itemList: [
        '<strong>GLP-Compliant Study Protocol</strong>: Detailed plan for genotoxicity testing.',
        '<strong>Raw Data & Statistical Analysis</strong>: Comprehensive data with robust statistical evaluation.',
        '<strong>OECD-Compliant Full Study Report</strong>: Submission-ready report for regulatory authorities.',
        '<strong>Interpretation and Regulatory Conclusion</strong>: Scientific rationale and regulatory insights.',
      ],
    },
    compliance: {
      heading: "Regulatory Compliance & <span class='halfHeading'>Global Standards</span>",
      detail: [
        'Our In Vivo Genotoxicity Testing services align with stringent global standards, ensuring your data is <strong>regulator-ready</strong> and compliant with international expectations. By adhering to industry-leading guidelines, we deliver solutions that enhance regulatory confidence and submission success.',
      ],
      itemList: [
        '<strong>OECD 474</strong>: Guideline for the Mammalian Erythrocyte Micronucleus Test.',
        '<strong>OECD 489</strong>: Guideline for the In Vivo Mammalian Alkaline Comet Assay.',
        '<strong>OECD 488</strong>: Guideline for Transgenic Rodent Gene Mutation Assays.',
        '<strong>ICH S2(R1)</strong>: Standards for genotoxicity testing in pharmaceuticals.',
        '<strong>FDA Genotoxicity Guidance</strong>: U.S. regulations for genotoxicity safety assessments.',
      ],
    },
    applications: {
      heading: "Applications & <span class='halfHeading'>Use Cases</span>",
      detail: [
        'Our In Vivo Genotoxicity Testing services are essential for pharmaceutical companies ensuring <strong>compound safety</strong> and regulatory compliance. Ideal for IND/NDA submissions and impurity assessments, our solutions support global markets. Key use cases include evaluating genotoxicity for <strong>new drug candidates</strong>, supporting safety data for clinical trials, and meeting regulatory requirements for impurities.',
      ],
    },
    conclusion: {
      heading: "Why Choose <span class='halfHeading'>Indivirtus Healthcare</span>",
      detail: [
        'Indivirtus Healthcare Services is a trusted partner for pharmaceutical companies, delivering <strong>expert-led genotoxicity testing solutions</strong> backed by certified toxicology professionals with global experience. Our services ensure <strong>scientifically defensible outcomes</strong>, rapid delivery, and strict confidentiality to protect your proprietary information.',
        'With a commitment to industry best practices, we empower your organization with compliant, robust genotoxicity data, driving <strong>regulatory success</strong> and patient safety.',
      ],
    },
    cta: {
      heading: "Ready to Ensure <span class='halfHeading'>Compound Safety?</span>",
      tagline: 'Partner with Indivirtus Healthcare Services for Expert Genotoxicity Solutions',
      aria: 'Contact us to discuss your in vivo genotoxicity testing needs',
    },
  },
  gtm: {
    eventCategory: 'In Vivo Genotoxicity Testing',
    eventAction: 'In Vivo Genotoxicity Page View',
    eventLabel: 'Genotoxicity Service Detail',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['In Vivo Genotoxicity Testing'],
      certification: 'GLP-compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'In Vivo Genotoxicity Testing',
    description:
      'In vivo genotoxicity testing services including OECD 474, OECD 489, and transgenic rodent assays to detect chromosomal and DNA damage in live models.',
    serviceType: 'In Vivo Genotoxicity Testing',
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
      name: 'In Vivo Genotoxicity Testing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'In Vivo Micronucleus Test (OECD 474)',
            description:
              'Detects chromosomal damage in bone marrow or peripheral blood cells in rodents after compound exposure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Comet Assay (OECD 489)',
            description:
              'Single-cell gel electrophoresis test that detects DNA strand breaks in specific target organs after in vivo exposure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transgenic Rodent Mutation Assays',
            description:
              'Evaluates mutation frequencies in transgenic reporter genes, providing mechanistic insight into genotoxic potential.',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ['INR', 'USD'],
      price: 'Study design and species-based pricing',
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
        name: 'What is in vivo genotoxicity testing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In vivo genotoxicity testing involves administering a compound to live animals to detect chromosomal and DNA damage, helping determine its mutagenic potential in whole organisms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Micronucleus Test (OECD 474)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Micronucleus Test detects structural or numerical chromosomal damage by measuring micronuclei formation in dividing cells of rodents, typically bone marrow or blood cells.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the Comet Assay preferred?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Comet Assay (OECD 489) is ideal when evaluating DNA strand breaks in specific tissues like liver or stomach after systemic exposure, especially for short-lived or reactive compounds.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Transgenic Rodent Mutation Assays?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These assays use genetically engineered rodents carrying reporter genes to directly detect gene mutations after compound exposure, offering insights into mutagenic mechanisms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your studies GLP-compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All our in vivo genotoxicity studies are conducted in accordance with OECD and GLP guidelines, ensuring quality, reproducibility, and regulatory acceptance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do In Vivo Genotoxicity Testing services include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include OECD-compliant Micronucleus Test, Comet Assay, and Transgenic Rodent Mutation Assays, delivering GLP-compliant protocols and reports.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who benefits from In Vivo Genotoxicity Testing services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmaceutical companies preparing IND/NDA submissions or assessing impurities for regulatory compliance benefit from our tailored solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do these services ensure regulatory compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services align with OECD 474, 489, 488, ICH S2(R1), and FDA Genotoxicity Guidance, ensuring global regulatory compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables are provided with the service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive GLP-compliant study protocols, raw data with statistical analysis, OECD-compliant reports, and regulatory conclusions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the genotoxicity testing services be customized for our needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services are tailored to your specific compounds, regulatory requirements, and submission goals, ensuring compliant solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the services support regulatory submissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide OECD-compliant reports and scientific interpretations to support genotoxicity data for IND, NDA, and impurity-related submissions.',
        },
      },
    ],
  },
  meta: {
    title: 'In Vivo Genotoxicity Testing | Indivirtus CRO Services',
    description:
      'OECD-compliant in vivo genotoxicity studies including Micronucleus Test, Comet Assay, and Transgenic Rodent Assays for regulatory submissions.',
    keywords: [
      'in vivo genotoxicity',
      'OECD 474',
      'OECD 489',
      'Transgenic Rodent Assay',
      'Comet Assay',
      'Micronucleus test',
      'GLP genotoxicity testing',
      'Regulatory safety studies',
    ],
    ogTags: {
      type: 'service',
      image: `https://www.indivirtus.com${link}.jpg`,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'In Vivo Genotoxicity Testing | Indivirtus CRO Services',
      description:
        'OECD 474, 489, and transgenic rodent studies conducted under GLP for pharma safety testing and global regulatory filings.',
      image: `https://www.indivirtus.com${link}.jpg`,
    },
    canonicalUrl: `https://www.indivirtus.com${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Micronucleus Test (OECD 474)', 'Comet Assay (OECD 489)', 'Transgenic Rodent Assay'],
};
