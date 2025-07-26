// const siteUrl = document.location.origin || "https://indivirtus.com";
const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/logo.png';

export const defaultSeo = {
  meta: {
    title: 'Indivirtus Healthcare Services | Pharmaceutical CRO & Calibration Experts',
    description:
      'Explore full-spectrum CRO and calibration services from Indivirtus Healthcare - leaders in toxicological risk assessment, containment engineering, GMP validation, and regulatory consulting.',
    keywords: [
      'pharmaceutical CRO services',
      'ADE PDE toxicology experts',
      'GMP calibration services',
      'regulatory compliance India',
      'containment validation',
      'cleanroom airflow visualization',
      'environmental monitoring services',
      'NABL metrology calibration',
      'OEB OEL banding services',
      'pharmaceutical consulting firm',
    ],
    twitterHandle: '@indivirtus',
    url: siteUrl,
    logo: siteLogo,
    type: 'website',
    canonical: 'https://www.indivirtus.com/',
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    ogTags: {
      type: 'website',
      url: siteUrl,
      site_name: 'Indivirtus Healthcare Services Pvt Ltd',
      image: siteLogo,
      title: 'Pharmaceutical CRO & Calibration Services | Indivirtus Healthcare',
      description:
        'Trusted provider of toxicological assessments, GMP validation, and accredited calibration services for the pharmaceutical industry.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma CRO & GMP Calibration Services | Indivirtus Healthcare',
      description:
        'Explore industry-leading services in toxicology, compliance, and calibration for regulated pharmaceutical operations.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
};

export const aboutPageSeo = {
  title: 'About Us -Indivirtus',
  description:
    'Journey of Indivirtus: A leading Contract Research Organization (CRO) providing comprehensive clinical trial services.',
  keywords: 'about, mission, company',
  image: siteLogo,
  url: siteUrl + '/about',
  twitterHandle: '@indivirtus',
  type: 'article',
  logo: siteLogo,
};

// export const servicesPageSeo = {
//   title: 'Services Provided -Indivirtus',
//   description:
//     'Journey of Indivirtus: A leading Contract Research Organization (CRO) providing comprehensive clinical trial services.',
//   keywords: 'about, mission, company',
//   image: siteLogo,
//   url: siteUrl + '/about',
//   twitterHandle: '@indivirtus',
//   type: 'article',
//   logo: siteLogo,
// };
