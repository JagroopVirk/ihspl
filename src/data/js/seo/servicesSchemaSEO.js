export const pdeReports = ({
  "service_id": "svc-pde-001",
  "report_type": "PDE",
  "name": "PDE Report",
  "description": "Assessment of Permitted Daily Exposure based on NOAEL/LOAEL, uncertainty factors, and EMA guidelines.",
  "price_model": "Fixed",
  "estimated_duration": "10 business days",
  "deliverables": [
    "PDE Report (PDF)",
    "Toxicological Summary",
    "Calculation Sheet"
  ],
  "regulatory_basis": ["ICH Q3D", "EMA"],
  "requires_data_from_client": true,
  "target_industry": ["Pharma", "API", "CMO"],
  "expertise_area": ["Toxicology", "Regulatory Compliance"],
  "is_active": true,
}
);

export const adeReports = ({
 "service_id": "svc-ade-001",
  "report_type": "ADE",
  "name": "ADE Report for Compound",
  "description": "Establish Acceptable Daily Exposure values for cross-contamination control.",
  "price_model": "Fixed",
  "estimated_duration": "8 business days",
  "deliverables": [
    "ADE Report (PDF)",
    "Risk-Based Justification Document"
  ],
  "regulatory_basis": ["EMA", "WHO"],
  "requires_data_from_client": true,
  "target_industry": ["Pharma", "CMO"],
  "expertise_area": ["Risk Assessment", "Pharmacology"],
  "is_active": true
}
);

export const oelReports = ({
 "service_id": "svc-oel-001",
  "report_type": "OEL",
  "name": "Occupational Exposure Limit Assessment for API",
  "description": "Determine safe workplace exposure limits using toxicological and epidemiological data.",
  "price_model": "Per Report",
  "estimated_duration": "15 business days",
  "deliverables": [
    "OEL Assessment Report",
    "Toxicity Profile",
    "Airborne Exposure Calculations"
  ],
  "regulatory_basis": ["OSHA", "NIOSH", "ACGIH"],
  "requires_data_from_client": true,
  "target_industry": ["API", "Manufacturing", "CMO"],
  "expertise_area": ["Industrial Hygiene", "Toxicology"],
  "is_active": true
}
);

export const oebReports = ({
   "service_id": "svc-oeb-001",
  "report_type": "OEB",
  "name": "Occupational Exposure Banding for Early-stage Molecule",
  "description": "Band assignment based on limited data for R&D phase compounds.",
  "price_model": "Fixed",
  "estimated_duration": "5 business days",
  "deliverables": [
    "OEB Classification Document",
    "Data Summary Table",
    "Banding Rationale"
  ],
  "regulatory_basis": ["NIOSH", "PhRMA", "ISPE"],
  "requires_data_from_client": true,
  "target_industry": ["Biotech", "Pharma R&D"],
  "expertise_area": ["Toxicology", "Occupational Safety"],
  "is_active": true
}
);

// export const adeReports = (
// );

export const allServicesSchema = 
{
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Healthcare Regulatory Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Permitted Daily Exposure (PDE) Report",
          "description": "Permitted Daily Exposure (PDE) Report service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Acceptable Daily Exposure (ADE) Report",
          "description": "Acceptable Daily Exposure (ADE) Report service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Occupational Exposure Limit (OEL) Assessment",
          "description": "Occupational Exposure Limit (OEL) Assessment service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Occupational Exposure Band (OEB) Classification",
          "description": "Occupational Exposure Band (OEB) Classification service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pharmacovigilance",
          "description": "Pharmacovigilance service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Genotoxic (Mutagenic) Evaluation of Impurities",
          "description": "Genotoxic (Mutagenic) Evaluation of Impurities service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Safety Assessment Report of Finished Formulations",
          "description": "Safety Assessment Report of Finished Formulations service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Preparation of MSDS/SDS",
          "description": "Preparation of MSDS/SDS service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regulatory Compliance",
          "description": "Regulatory Compliance service offered by our healthcare and pharmaceutical consultancy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical Device Registration",
          "description": "Medical Device Registration service offered by our healthcare and pharmaceutical consultancy."
        }
      }

   
    ]
  }
}



