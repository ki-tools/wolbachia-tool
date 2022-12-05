export const INPUTS = {
  // misc
  TARPLN: {
    default: 'POPDEN',
    valueLabels: ['Population density threshold', 'Disease reduction target'],
    values: ['POPDEN', 'REDTAR'],
    label: 'Targeting criteria',
    helpText: undefined,
  },
  POPDEN: {
    default: 1500,
    values: [1500, 1000, 500, 250],
    valueLabels: [
      '\u2265 1,500 people per km\u00b2',
      '\u2265 1,000 people per km\u00b2',
      '\u2265 500 people per km\u00b2',
      '\u2265 250 people per km\u00b2',
    ],
    label: 'Population density',
    helpText: undefined,
  },
  REDTAR: {
    default: 12.5,
    values: [12.5, 25, 50, 100],
    valueLabels: ['12.5%', '25%', '50%', '100%'],
    label: 'Disease reduction target',
    helpText: undefined,
  },
  TIMFRM: {
    default: 1,
    values: [1, 5, 10, 20],
    valueLabels: ['1 year', '5 years', '10 years', '20 years'],
    label: 'Time frame',
    helpText: undefined,
  },
  PHSACT: {
    default: 'PHASE',
    values: ['PHASE', 'ACTIVITY'],
    valueLabels: ['Phase-based', 'Activity-based'],
    label: 'Primary costs input mode',
    helpText: undefined,
  },
  // sliders
  COV: {
    default: 0.8,
    label: 'Area Coverage',
    range: [0, 1],
    helpText: undefined,
  },
  EFF: {
    default: 0.77,
    label: 'Effectiveness',
    range: [0, 1],
    helpText: undefined,
  },
  // phase-based
  PLAN: {
    default: 1200,
    label: 'Planning Cost',
    range: [1000, 2500],
    helpText: undefined,
  },
  PREP: {
    default: 2400,
    label: 'Preparation Cost',
    range: [2000, 6000],
    helpText: undefined,
  },
  PROD: {
    default: 9100,
    label: 'Production Cost',
    range: [8000, 12000],
    helpText: undefined,
  },
  DIST: {
    default: 300,
    label: 'Distribution Cost',
    range: [100, 1500],
    helpText: undefined,
  },
  REL: {
    default: 7100,
    label: 'Release Cost',
    range: [3500, 9000],
    helpText: undefined,
  },
  MONIT: {
    default: 3000,
    label: 'Monitoring Cost',
    range: [2500, 6000],
    helpText: undefined,
  },
  // activity-based
  DETREL: {
    default: 600,
    label: 'Determine release methodology',
    range: [300, 800],
    helpText: undefined,
  },
  WRKPLN: {
    default: 600,
    label: 'Define workplan and budget',
    range: [300, 800],
    helpText: undefined,
  },
  COMMUN: {
    default: 2000,
    label: 'Enroll community participation',
    range: [1000, 3000],
    helpText: undefined,
  },
  FACSET: {
    default: 1000,
    label: 'Facility setup',
    range: [0, 4000],
    helpText: undefined,
  },
  LINCRE: {
    default: 1500,
    label: 'Mosquito line creation',
    range: [0, 2000],
    helpText: undefined,
  },
  MOSPRD: {
    default: 3000,
    label: 'Mosquito production',
    range: [300, 5000],
    helpText: undefined,
  },
  QM: {
    default: 600,
    label: 'Quality management and control',
    range: [100, 1500],
    helpText: undefined,
  },
  QA: {
    default: 600,
    label: 'Quality assurance',
    range: [0, 1000],
    helpText: undefined,
  },
  EGGDEP: {
    default: 3100,
    label: 'Egg or adult deployment',
    range: [0, 8000],
    helpText: undefined,
  },
  DELEGG: {
    default: 200,
    label: 'Deliver eggs/adults to distro points',
    range: [0, 400],
    helpText: undefined,
  },
  ADMAN: {
    default: 200,
    label: 'Adaptive management',
    range: [0, 400],
    helpText: undefined,
  },
  COMSEN: {
    default: 200,
    label: 'Measure community sentiment',
    range: [0, 400],
    helpText: undefined,
  },
  WOLMON: {
    default: 1500,
    label: (
      <span>
        Monitoring <em>Wolbachia</em> frequency in the field
      </span>
    ),
    range: [0, 3000],
    helpText: undefined,
  },
};

// 5_year_benefits_discounted: 4.70886
// 10_year_benefits_discounted: 8.752529
// 20_year_benefits_discounted: 15.20686
// 5_year_costs: 3.000798291
// 10_year_costs: 3.167078222
// 20_year_costs: 3.238879794

export const TABLES = {
  BURDEN: [
    'name',
    'gaul_code',
    'totpop',
    'targetpop',
    'totdenm',
    'totalcases',
    'totaldalys',
    'totalhosp',
    'totalambu',
    'totalnonmedical',
  ],
  WHERE: [
    'name',
    'gaul_code',
    'areacovered',
    'popcovered',
    'totalcost',
    'costperperson',
    'costperavertedcase',
    'costperaverteddaly',
  ],
  BENEFITS: [
    'name',
    'gaul_code',
    'avertedcases',
    'averteddalys',
    'hospaverted',
    'ambuaverted',
    'nonmedicalaverted',
  ],
  ADDITIONAL: [
    'name',
    'gaul_code',
    'directhospcosts',
    'directambucosts',
    'directnonmedicalcosts',
    'indirecthospcosts',
    'indirectambucosts',
    'indirectnonmedicalcosts',
  ],
};

export const VARS = [
  {
    name: 'name',
    label: 'Name',
    type: 'string',
    // source is geo data
  },
  {
    name: 'gaul_code',
    label: 'GAUL code',
    type: 'string',
    // source is geo data
  },
  {
    name: 'totpop',
    label: 'Total population',
    type: 'number',
    digits: 2,
    // source is geo data
  },
  {
    name: 'targetpop',
    label: 'Target population',
    type: 'number',
    digits: 2,
    // source is geo data
  },
  {
    name: 'totdenm',
    label: 'Mean dengue incidence',
    type: 'number',
    digits: 2,
    // source is geo data
  },
  {
    name: 'targetarea',
    label: '',
    type: 'number',
    digits: 2,
    // source is geo data
  },
  {
    name: 'totalcases',
    label: 'Total number of cases of dengue (without intervention)',
    type: 'number',
    digits: 2,
    // totdenm * targetpop
  },
  {
    name: 'totaldalys',
    label: 'Total number of DALYs (without intervention)',
    type: 'number',
    digits: 2,
    // totalcases * daly_per_case (country dataset)
  },
  {
    name: 'totalhosp',
    label: 'Total number of hospitalized cases (without intervention)',
    type: 'number',
    digits: 2,
    // totalcases * percent_hosp (country dataset)
  },
  {
    name: 'totalambu',
    label: 'Total number of ambulatory cases (without intervention)',
    type: 'number',
    digits: 2,
    // totalcases * percent_ambu (country dataset)
  },
  {
    name: 'totalnonmedical',
    label: 'Total number of non-medically treated cases (without intervention)',
    type: 'number',
    digits: 2,
    // totalcases * percent_non_medical (country dataset)
  },
  {
    name: 'areacovered',
    label: 'Area covered by intervention',
    type: 'number',
    digits: 2,
    // targetarea (spatial dataset) * COVERAGE_DEFAULT (user-input)
  },
  {
    name: 'popcovered',
    label: 'Population covered by intervention',
    type: 'number',
    digits: 2,
    // targetpop * COVERAGE_DEFAULT (user-input)
  },
  {
    name: 'totalcost',
    label: 'Total cost of intervention',
    type: 'number',
    digits: 2,
    // see below for calculation
  },
  {
    name: 'costperperson',
    label: 'Cost per person',
    type: 'number',
    digits: 2,
    // totalcost / popcovered
  },
  {
    name: 'costperavertedcase',
    label: 'Cost per case averted',
    type: 'number',
    digits: 2,
    // totalcost / ((popcovered * totdenm) * EFFECTIVENESS_DEFAULT)
  },
  {
    name: 'costperaverteddaly',
    label: 'Cost per daly averted',
    type: 'number',
    digits: 2,
    // totalcost / (((popcovered *totdenm)* daly_per_case (country dataset)) EFFECTIVENESS_DEFAULT))
  },
  {
    name: 'avertedcases',
    label: 'Cases averted',
    type: 'number',
    digits: 2,
    // (popcovered *totdenm) * EFFECTIVENESS_DEFAULT
  },
  {
    name: 'averteddalys',
    label: 'DALYs averted',
    type: 'number',
    digits: 2,
    // ((popcovered * totdenm) * daly_per_case (country dataset)) EFFECTIVENESS_DEFAULT))
  },
  {
    name: 'hospaverted',
    label: 'Hospitalized cases averted',
    type: 'number',
    digits: 2,
    // avertedcases * percent_hosp (country dataset)
  },
  {
    name: 'ambuaverted',
    label: 'Ambulatory cases averted',
    type: 'number',
    digits: 2,
    // avertedcases * percent_ambu (country dataset)
  },
  {
    name: 'nonmedicalaverted',
    label: 'Non-medically treated cases averted',
    type: 'number',
    digits: 2,
    // avertedcases * percent_non_medical (country dataset)
  },
  {
    name: 'directhospcosts',
    label: 'Direct hospitalized costs averted',
    type: 'number',
    digits: 2,
    // hospaverted * direct_hosp (country dataset)
  },
  {
    name: 'directambucosts',
    label: 'Direct ambulatory costs averted',
    type: 'number',
    digits: 2,
    // ambuaverted * direct_ambu (country dataset)
  },
  {
    name: 'directnonmedicalcosts',
    label: 'Direct non-medical costs averted',
    type: 'number',
    digits: 2,
    // ambuaverted * direct_non_medical (country dataset)
  },
  {
    name: 'indirecthospcosts',
    label: 'Indirect hospitalized costs averted',
    type: 'number',
    digits: 2,
    // hospaverted * indirect_hosp (country dataset)
  },
  {
    name: 'indirectambucosts',
    label: 'Indirect ambulatory costs averted',
    type: 'number',
    digits: 2,
    // ambuaverted * indirect_ambu (country dataset)
  },
  {
    name: 'indirectnonmedicalcosts',
    label: 'Indirect non-medical costs averted',
    type: 'number',
    digits: 2,
    // ambuaverted * indirect_non_medical (country dataset)
  },
];

// totalcost = PLANNING_DEFAULT + PREP_DEFAULT + PRODUCTION_DEFAULT + DISTRIBUTION_DEFAULT + RELEASE_DEFAULT + MONITORING_DEFAULT (IF PHASE_BASED = 1) * AREACOVERED
// totalcost  = WORKPLAN_DEFAULT + COMMUNITY_DEFAULT + FACILITY_SETUP_DEFAULT + LINE_CREATION_DEFAULT + MOSPROD_DEFAULT + QUALITYMANAGEMENT_DEFAULT + QUALITY_ASSURANCE_DEFAULT + EGG_DEPLOYMENT_DEFAULT + DELIVER_EGGS_DEFAULT + ADAPTIVE_MANAGEMENT_DEFAULT + MEASURINGCOMMUNITY_DEFAULT + MONITORING_WOLBACHIA  (IF PHASE_BASED = 0) * AREACOVERED
