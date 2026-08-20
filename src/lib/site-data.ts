export const services = [
  {
    slug: "industrial-decontamination",
    title: "Industrial Decontamination",
    summary:
      "Chemical and mechanical decontamination of process vessels, columns, heat exchangers and piping systems using closed-loop, low-emission methods.",
    points: [
      "Hydrocarbon and H2S vapour freeing",
      "Chemical circulation & degassing",
      "Benzene and pyrophoric iron control",
      "Waste characterisation and disposal",
    ],
  },
  {
    slug: "tank-cleaning",
    title: "Tank Cleaning",
    summary:
      "Non-man entry and controlled entry cleaning of crude, product and slop tanks, with sludge recovery that returns hydrocarbon value to the client.",
    points: [
      "Automated non-man entry systems",
      "Sludge mobilisation & oil recovery",
      "Confined space rescue standby",
      "Inspection-ready handover",
    ],
  },
  {
    slug: "pipeline-cleaning",
    title: "Pipeline Cleaning",
    summary:
      "Pigging, flushing, chemical cleaning, hydrotesting and dewatering for flowlines, trunklines and export pipelines.",
    points: [
      "Mechanical & gel pigging",
      "Nitrogen purging and drying",
      "Hydrotest & commissioning support",
      "Pre-inspection cleaning for ILI",
    ],
  },
  {
    slug: "engineering-services",
    title: "Engineering Services",
    summary:
      "Multi-discipline engineering from conceptual studies through detailed design, with brownfield modification and integrity focus.",
    points: [
      "FEED and detailed design",
      "Mechanical, piping & structural",
      "Instrumentation and electrical",
      "As-built documentation",
    ],
  },
  {
    slug: "procurement",
    title: "Procurement",
    summary:
      "Transparent sourcing of OEM-certified equipment, valves, spares and consumables with expediting and logistics into Nigerian terminals.",
    points: [
      "Vendor qualification & audits",
      "Expediting and inspection",
      "Customs clearing and logistics",
      "Local content compliance",
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    summary:
      "Civil, mechanical and structural construction for facility upgrades, tank farms, pump stations and pipeline right-of-way works.",
    points: [
      "Fabrication and welding (ASME/API)",
      "Tank erection and repairs",
      "Civil works and foundations",
      "Precommissioning support",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    summary:
      "Planned, preventive and shutdown maintenance backed by resident crews, spares management and reliability reporting.",
    points: [
      "Turnaround & shutdown execution",
      "Rotating equipment servicing",
      "Valve and flange management",
      "Manpower supply and supervision",
    ],
  },
] as const;

export const projects = [
  {
    title: "Crude Oil Tank Farm Decontamination",
    client: "Terminal Operator",
    location: "Bonny, Rivers State",
    scope:
      "Full decontamination and non-man entry cleaning of four 50,000 bbl crude storage tanks ahead of API 653 inspection.",
    result: "Zero LTI across 42,000 man-hours; 1,850 bbl of hydrocarbon recovered.",
  },
  {
    title: "24-inch Export Pipeline Pre-Commissioning",
    client: "E&P Operator",
    location: "Delta State",
    scope:
      "Gauging, cleaning, hydrotesting, dewatering and nitrogen drying of 38 km export line.",
    result: "Line handed over 9 days ahead of schedule with first-pass test acceptance.",
  },
  {
    title: "Process Plant Turnaround Maintenance",
    client: "Gas Processing Facility",
    location: "Warri, Delta State",
    scope:
      "Multi-discipline shutdown covering exchanger cleaning, valve overhaul and piping replacement.",
    result: "Turnaround closed within 21-day window and approved budget.",
  },
  {
    title: "Flow Station Upgrade — EPC",
    client: "Indigenous Producer",
    location: "Bayelsa State",
    scope:
      "Detailed engineering, procurement and construction of manifold, separator skid and utility piping.",
    result: "Plant commissioned with full as-built documentation package.",
  },
  {
    title: "Slop Tank Sludge Recovery",
    client: "Refinery",
    location: "Port Harcourt",
    scope: "Sludge mobilisation, three-phase separation and certified waste disposal.",
    result: "68% volume reduction of waste sent to disposal.",
  },
  {
    title: "Facility Integrity Maintenance Contract",
    client: "Offshore Support Base",
    location: "Onne, Rivers State",
    scope: "Resident crew for preventive maintenance of pumps, tanks and utilities.",
    result: "Ongoing contract with 98.6% equipment availability.",
  },
] as const;

export const stats = [
  { value: "15+", label: "Years in oil & gas services" },
  { value: "120+", label: "Projects delivered" },
  { value: "1.2M", label: "Safe man-hours" },
  { value: "0", label: "Lost time incidents" },
] as const;
