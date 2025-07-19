import serviceImage from '@/assets/msds-sds/expert-authoring.jpg';
const link = '/services/msds-sds/expert-authoring';

export default {
  slug: 'expert-authoring',
  parentSlug: 'msds-sds',
  service_id: 'EXA001',
  report_type: 'Toxicology, SDS Authoring, Regulatory Submissions',
  title: 'Expert Authoring Services for Regulatory Compliance',
  name: 'Expert Authoring',
  description: 'Toxicologist-led preparation and expert sign-off for globally compliant documentation.',
  full_description:
    'Our Expert Authoring service ensures that safety data sheets (SDS), toxicological reports, and regulatory dossiers are meticulously crafted by qualified toxicologists. Every document undergoes rigorous expert review and sign-off, followed by a compliance check aligned with global regulatory frameworks like REACH, GHS, and OSHA. With our services, you receive not only scientific accuracy but also regulatory endorsement, ensuring smooth submissions and audit readiness.',
  estimated_duration: '7–15 working days, depending on complexity',
  deliverables: [
    'Toxicologist-authored safety or technical documentation',
    'Peer-reviewed and signed-off reports',
    'Regulatory-ready dossiers (e.g., REACH, GHS)',
    'Documentation compliant with global guidelines (OSHA, ECHA, ICH)',
  ],
  regulatory_basis: ['ICH Q3D', 'GHS/OSHA', 'REACH (ECHA)', 'CLP Regulation (EC) No 1272/2008'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceuticals', 'Biotechnology', 'CDMOs', 'Generics', 'API Manufacturers'],
  expertise_area: ['Toxicology', 'Regulatory Compliance', 'Scientific Documentation'],
  is_active: true,
  pageLink: link,
  icon: '🧪',
  image: {
    path: serviceImage,
    alt: 'Expert authoring of toxicological and regulatory documents',
    caption: 'Toxicologist-led documentation & regulatory submissions',
  },
  gtm: {
    eventCategory: 'Expert Authoring',
    eventAction: 'Authoring Completed',
    eventLabel: 'Toxicologist-led authoring with regulatory compliance',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Toxicology Report', 'SDS Authoring', 'Regulatory Dossier'],
      certification: 'Certified Toxicologist, Regulatory Compliant',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Expert Authoring',
    description:
      'Expert authoring services by Indivirtus include toxicologist-led SDS and toxicological report preparation with full regulatory endorsement and peer-reviewed sign-off.',
    serviceType: 'Pharmaceutical CRO Scientific Documentation',
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
      name: 'Expert Authoring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Toxicologist-Led Preparation',
          itemOffered: {
            '@type': 'Service',
            name: 'Toxicologist-Led Preparation',
            description:
              'Scientific documentation authored by board-certified toxicologists, ensuring accuracy and credibility.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Expert Review & Sign-Off',
          itemOffered: {
            '@type': 'Service',
            name: 'Expert Review & Sign-Off',
            description: 'All authored documents undergo peer review and sign-off by domain specialists.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Regulatory Endorsement',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Endorsement',
            description:
              'Preparation aligned with global guidelines like REACH, OSHA, ICH Q3D, and more for smoother approvals.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Compliance Assurance',
          itemOffered: {
            '@type': 'Service',
            name: 'Compliance Assurance',
            description:
              'Final review to ensure documentation complies with all required regional and global regulatory standards.',
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
        name: 'What is toxicologist-led preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Toxicologist-led preparation means your reports are drafted by certified professionals who understand chemical safety, exposure risks, and global compliance norms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is expert review & sign-off important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Expert review ensures that your documents are not only scientifically accurate but also defensible during audits and regulatory scrutiny.',
        },
      },
      {
        '@type': 'Question',
        name: 'What regulatory guidelines do you follow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We align with global standards including REACH, OSHA, ICH Q3D, and GHS to ensure your documentation passes regulatory reviews worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you provide region-specific SDS authoring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our team prepares SDS and toxicological documents tailored to specific regions such as the EU, US, Canada, India, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data is needed from our side to initiate authoring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically need chemical composition, safety data, existing study reports (if any), and target regulatory region to begin the authoring process.',
        },
      },
    ],
  },
  meta: {
    title: 'Expert Authoring | Toxicologist-Led Regulatory Documentation - Indivirtus',
    description:
      'Professional authoring services for SDS, toxicology, and regulatory documentation by qualified experts. Includes expert review, compliance assurance, and global submission readiness.',
    keywords: [
      'Expert SDS authoring',
      'Toxicologist documentation',
      'Pharmaceutical regulatory support',
      'REACH compliance',
      'OSHA toxicology reports',
      'ICH Q3D documents',
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src,
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Expert Authoring | Toxicologist-Led Regulatory Documentation - Indivirtus',
      description:
        'Get regulatory-ready SDS and toxicology documents with expert authoring, review, and global compliance support by Indivirtus.',
      image: serviceImage.src,
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: ['Toxicological Risk Assessment', 'SDS Review & Gap Analysis', 'Regulatory Readiness Assessment'],
};
