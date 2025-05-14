const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about", 
    submenu: [
      { name: "Vision, Mission and Quality Policy", href: "/about/vision-mission-qualityPolicy" },
      { name: "Security and Confidentiality", href: "/about/security-confidentiality" },
      { name: "Terms, Policy, Payments and Refunds", href: "/about/tearms&policy" },

    ],
  },
  {
    name: "Services", href: "/services",
    submenu: [
      { name: "Clinical Trials", href: "/services/clinicaltrials" },
      { name: "Bio-Analytical", href: "/services/bio-analytical" },
      { name: "Pharmacovigilance", href: "/services/pharmacovigilance" },
      { name: "Medical Writing", href: "/services/medicalwriting" },
      { name: "Regulatory Services", href: "/services/regulatoryservices" },
      { name: "Biometrics", href: "/services/biometrics" },
      { name: "QA & Monitoring", href: "/services/qamonitoring" },
    ],
  },
  { name: "Resources", href: "/resources" },
  { name: "Blogs", href: "/blogs" },
  { name: "Career", href: "/career" },

  {
    name: "Group of Companies",
    submenu: [
      {
        name: "Indivirtus Healthcare Services Pvt Ltd",
        href: "http://www.indivirtus.com",
      },
      {
        name: "Indivirtus Solutions Pvt Ltd",
        href: "http://www.indivirtussolutions.com",
      },
      {
        name: "Indivirtus Strategic Solutions Pvt Ltd",
        href: "http://www.indivirtusrnd.com",
      },
      { name: "Indivirtus AB7 Pvt Ltd", href: "http://www.indivirtusab7.com" },
    ],
  },

  { name: "Contact us", href: "/contact" },
  // { name: "Current Openings", href: "/openings" },
];

export default navItems;
