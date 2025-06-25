import serviceImage from '@/assets/pharmacovigilance.png';
const link = '/services/pharmacovigilance';

export default {
  service_id: 'cro-pharmacovigilance-services',
  report_type: 'Pharmacovigilance & Safety Reporting',
  title: 'Pharmacovigilance & Drug Safety Monitoring Services',
  name: 'Comprehensive Pharmacovigilance Services for Regulatory Compliance',
  description:
    'Full-suite pharmacovigilance solutions from database setup to risk management plans for pharmaceutical safety monitoring.',
  full_description:
    'Indivirtus provides end-to-end pharmacovigilance (PV) support as part of its CRO services for the pharmaceutical industry. From setting up PV systems and handling ICSR case processing to preparing PSMF, PSUR, and Risk Management Plans, our solutions are aligned with global regulatory standards (EMA, US FDA, WHO). Our team ensures your products meet all compliance requirements while protecting patient safety through vigilant signal detection, literature monitoring, and spontaneous reporting systems.',
  estimated_duration: 'Ongoing service (duration based on regulatory timelines and product scope)',
  deliverables: [
    'Pharmacovigilance System Master File (PSMF)',
    'Standard Operating Procedures (SOPs)',
    'Setup and configuration of safety databases',
    'ICSR processing reports',
    'PSUR/PBRER/PADER submissions',
    'Signal Detection Reports',
    'Risk Management Plans',
    'Literature surveillance logs and summaries',
  ],
  regulatory_basis: [
    'ICH E2E Pharmacovigilance Guidelines',
    'EU GVP Modules I–XVI',
    'US FDA 21 CFR Part 314.80',
    'WHO Pharmacovigilance Guidelines',
    'EMA GVP Module VII – PSUR',
  ],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'Clinical Research Organizations'],
  expertise_area: ['Pharmacovigilance', 'Drug Safety', 'Regulatory Compliance', 'Signal Detection'],
  is_active: true,
  pageLink: link,
  icon: '💊',
  image: {
    path: serviceImage,
    alt: 'Pharmacovigilance CRO services at Indivirtus',
    caption: 'End-to-end safety monitoring and compliance with global PV regulations',
  },
  gtm: {
    eventCategory: 'CRO Services',
    eventAction: 'Pharmacovigilance_Click',
    eventLabel: 'Pharmacovigilance Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Pharmacovigilance', 'Risk Management'],
      certification: 'GVP Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmacovigilance & Drug Safety Monitoring Services',
    description:
      'CRO-driven pharmacovigilance services covering safety database setup, ICSR reporting, PSURs, risk management, and literature monitoring.',
    serviceType: 'Pharmacovigilance Services',
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
      name: 'Pharmacovigilance and Drug Safety Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pharmacovigilance Database Setup',
            description:
              'Configuration of compliant drug safety databases and systems such as Argus, ARISg, and custom platforms.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical Information Call Centre (MICC)',
            description:
              '24/7 support center for managing medical inquiries, product complaints, and adverse event intake.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PSMF and SOPs Preparation',
            description:
              'Preparation of the Pharmacovigilance System Master File and PV SOPs aligned with EMA and FDA guidelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICSR Case Processing and ADR Reporting',
            description:
              'End-to-end ICSR management including MedDRA coding, narrative writing, and submission to authorities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Literature Monitoring',
            description:
              'Automated and manual screening of global scientific literature to identify reportable safety signals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PSUR / PBRER / PADER Report Preparation',
            description:
              'Preparation and submission of periodic safety reports as per EMA, FDA, and other agency requirements.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Risk Management Plan (RMP)',
            description:
              'Creation and maintenance of RMPs to mitigate known or potential risks associated with medicinal products.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Signal Management',
            description:
              'Detection, validation, analysis, and tracking of safety signals in line with regulatory expectations.',
          },
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
        name: 'What is a Pharmacovigilance Database?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A PV database is a secure system used to collect, manage, and submit adverse event reports. It ensures regulatory compliance and accurate tracking of safety data across product lifecycles.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services are included in a Medical Information Call Centre (MICC)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MICC services include responding to medical inquiries, product information dissemination, adverse event intake, and complaint logging—all handled by trained healthcare professionals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the PSMF and why is it required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pharmacovigilance System Master File (PSMF) provides an overview of the PV system used by the Marketing Authorization Holder. It is a regulatory requirement in the EU and other markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ICSR and how do you process it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An Individual Case Safety Report (ICSR) is a detailed record of an adverse drug reaction. We handle collection, MedDRA coding, narrative writing, quality control, and submission to EudraVigilance, FDA FAERS, etc.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is literature monitoring in PV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Literature monitoring involves scanning scientific journals and databases for reports of adverse events or new safety concerns related to your products. It's a mandatory pharmacovigilance activity.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are PSUR, PBRER, and PADER reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These are periodic safety reports required by regulatory bodies. PSUR (EU), PBRER (global format), and PADER (US FDA) summarize the benefit-risk balance of a product over a defined period.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a Risk Management Plan (RMP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "An RMP outlines known and potential risks of a drug and describes how these will be minimized. It's essential for products with significant safety profiles or conditional approvals.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do you manage safety signals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow a structured signal management process—detection, validation, prioritization, assessment, and recommendation—based on quantitative and qualitative safety data.',
        },
      },
    ],
  },
  meta: {
    title: 'Pharmacovigilance Services | Safety Reporting & Risk Management | Indivirtus',
    description:
      'Comprehensive CRO-led pharmacovigilance services including ICSR processing, PSUR/PBRER reporting, signal detection, and database setup for regulatory compliance.',
    keywords: [
      'pharmacovigilance',
      'ICSR case processing',
      'PSUR reporting',
      'PADER',
      'PBRER',
      'Risk Management Plan',
      'signal detection',
      'medical information call centre',
      'PV database setup',
      'GVP compliance',
      'drug safety monitoring',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharmacovigilance & Drug Safety Monitoring | Indivirtus',
      description: 'ICSR reporting, RMP, PSUR/PADER preparation, and full PV support under one CRO service umbrella.',
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
    'Pharmacovigilance System Setup',
    'ICSR & ADR Reporting',
    'Periodic Safety Reports',
    'Risk Management Strategy',
    'Signal Detection & Literature Monitoring',
  ],
};
