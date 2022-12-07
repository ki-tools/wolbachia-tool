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
    default: 1000,
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
    default: 0,
    values: [0, 1, 2, 3],
    multiplier: [1, 5, 10, 20],
    benefitsDiscounted: [1, 4.70886, 8.752529, 15.20686],
    costs: [1, 3.000798291, 3.167078222, 3.238879794],
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
  CONSTR: {
    default: false,
    label: 'Constrain budget',
    helpText: undefined,
  },
  CNSTRAMT: {
    default: 0,
    label: 'Budget limit',
    helpText: undefined,
  },
};

export const TOOLTIPS = {
  TARG: (
    <span>
      There are two options for selecting which areas (administrative 2 units)
      to target with the <em>Wolbachia</em> program. You can select either areas
      based on a population density cutoff (number of people per {'km\u00b2'})
      or by selecting a disease reduction target (12.5% or 25%). Details on both
      methods are included in the 'Data Sources' section.
    </span>
  ),
  EFF: (
    <span>
      Select your estimate of <em>Wolbachia's</em> effectiveness in averting
      dengue cases.
    </span>
  ),
  COV: (
    <span>
      Select what percentage of target areas you expect to release{' '}
      <em>Wolbachia</em>
      mosquitoes or eggs. This input reflects that many {'km\u00b2'}, even with
      high population density, may have areas (e.g., parks, green space) where
      there are limited people, indicating that Wolbachia-containing
      mosquitoes/eggs would not be released there.
    </span>
  ),
  COSTS:
    "Select your estimates of costs, either on the phase-based or activity-based level. All values should be in dollars per km\u00b2. Expand the 'cost detail' section to update cost inputs. Details on the activities included in each phase / activity are included in the 'Data Sources'. section",
  BUDGET: (
    <span>
      If you have a specific budget constraint, please enter it here. Based on
      this constraint, administrative areas will be prioritized based on the
      most cost-effective (defined as lowest cost per person covered by{' '}
      <em>Wolbachia</em>).
    </span>
  ),
  TIME: 'Select the time frame for the implementation costs and benefits. 5-, 10-, and 20- year costs and benefits are discounted.',
};

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
  IMPLEMENTATION: [
    'name',
    'gaul_code',
    'areacovered',
    'popcovered',
    'totalcost',
    'costperperson',
    'costperavertedcase',
    'costperaverteddaly',
  ],
  REDUCTION: [
    'name',
    'gaul_code',
    'avertedcases',
    'averteddalys',
    'hospaverted',
    'ambuaverted',
    'nonmedicalaverted',
  ],
  ADDBENEFITS: [
    'name',
    'gaul_code',
    'directhospcosts',
    'directambucosts',
    'directnonmedicalcosts',
    'indirecthospcosts',
    'indirectambucosts',
    'indirectnonmedicalcosts',
    'healthsystemcosts',
    'economiccosts',
  ],
};

export const TABLESORT = {
  BURDEN: [{ field: 'totdenm', sort: 'desc' }],
  IMPLEMENTATION: [{ field: 'costperperson', sort: 'asc' }],
  REDUCTION: [{ field: 'avertedcases', sort: 'desc' }],
  ADDBENEFITS: [{ field: 'healthsystemcosts', sort: 'desc' }],
};

export const COLORMENU = [
  { title: 'Burden' },
  { option: 'totpop' },
  { option: 'targetpop' },
  { option: 'totdenm' },
  { option: 'totalcases' },
  { option: 'totaldalys' },
  { option: 'totalhosp' },
  { option: 'totalambu' },
  { option: 'totalnonmedical' },
  { title: 'Implementation' },
  { option: 'areacovered' },
  { option: 'popcovered' },
  { option: 'totalcost' },
  { option: 'costperperson' },
  { option: 'costperavertedcase' },
  { option: 'costperaverteddaly' },
  { title: 'Reduction' },
  { option: 'avertedcases' },
  { option: 'averteddalys' },
  { option: 'hospaverted' },
  { option: 'ambuaverted' },
  { option: 'nonmedicalaverted' },
  { title: 'Additional Benefits' },
  { option: 'directhospcosts' },
  { option: 'directambucosts' },
  { option: 'directnonmedicalcosts' },
  { option: 'indirecthospcosts' },
  { option: 'indirectambucosts' },
  { option: 'indirectnonmedicalcosts' },
];

export const VARS = [
  {
    name: 'name',
    label: 'Name',
    type: 'string',
    width: 200,
    // source is geo data
  },
  {
    name: 'gaul_code',
    label: 'GAUL code',
    type: 'string',
    width: 90,
    // source is geo data
  },
  {
    name: 'totpop',
    label: 'Total population',
    type: 'number',
    digits: 0,
    width: 130,
    // source is geo data
  },
  {
    name: 'targetpop',
    label: 'Target population',
    type: 'number',
    digits: 0,
    width: 130,
    // source is geo data
  },
  {
    name: 'totdenm',
    label: 'Mean dengue incidence',
    type: 'number',
    digits: 4,
    width: 120,
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
    digits: 0,
    // totdenm * targetpop
  },
  {
    name: 'totaldalys',
    label: 'Total number of DALYs (without intervention)',
    type: 'number',
    digits: 0,
    // totalcases * daly_per_case (country dataset)
  },
  {
    name: 'totalhosp',
    label: 'Total number of hospitalized cases (without intervention)',
    type: 'number',
    digits: 0,
    // totalcases * percent_hosp (country dataset)
  },
  {
    name: 'totalambu',
    label: 'Total number of ambulatory cases (without intervention)',
    type: 'number',
    digits: 0,
    // totalcases * percent_ambu (country dataset)
  },
  {
    name: 'totalnonmedical',
    label: 'Total number of non-medically treated cases (without intervention)',
    type: 'number',
    digits: 0,
    // totalcases * percent_non_medical (country dataset)
  },
  {
    name: 'areacovered',
    label: 'Area covered by intervention',
    type: 'number',
    digits: 2,
    width: 130,
    // targetarea (spatial dataset) * COVERAGE_DEFAULT (user-input)
  },
  {
    name: 'popcovered',
    label: 'Population covered by intervention',
    type: 'number',
    digits: 0,
    // targetpop * COVERAGE_DEFAULT (user-input)
  },
  {
    name: 'totalcost',
    label: 'Total cost of intervention',
    type: 'currency',
    digits: 2,
    // see below for calculation
  },
  {
    name: 'costperperson',
    label: 'Cost per person',
    type: 'currency',
    digits: 2,
    width: 135,
    // totalcost / popcovered
  },
  {
    name: 'costperavertedcase',
    label: 'Cost per case averted',
    type: 'currency',
    digits: 2,
    // totalcost / ((popcovered * totdenm) * EFFECTIVENESS_DEFAULT)
  },
  {
    name: 'costperaverteddaly',
    label: 'Cost per daly averted',
    type: 'currency',
    digits: 2,
    // totalcost / (((popcovered *totdenm)* daly_per_case (country dataset)) EFFECTIVENESS_DEFAULT))
  },
  {
    name: 'avertedcases',
    label: 'Cases averted',
    type: 'number',
    digits: 0,
    width: 130,
    // (popcovered *totdenm) * EFFECTIVENESS_DEFAULT
  },
  {
    name: 'averteddalys',
    label: 'DALYs averted',
    type: 'number',
    digits: 0,
    width: 130,
    // ((popcovered * totdenm) * daly_per_case (country dataset)) EFFECTIVENESS_DEFAULT))
  },
  {
    name: 'hospaverted',
    label: 'Hospitalized cases averted',
    type: 'number',
    digits: 0,
    width: 130,
    // avertedcases * percent_hosp (country dataset)
  },
  {
    name: 'ambuaverted',
    label: 'Ambulatory cases averted',
    type: 'number',
    digits: 0,
    width: 130,
    // avertedcases * percent_ambu (country dataset)
  },
  {
    name: 'nonmedicalaverted',
    label: 'Non-medically treated cases averted',
    type: 'number',
    digits: 0,
    // avertedcases * percent_non_medical (country dataset)
  },
  {
    name: 'directhospcosts',
    label: 'Direct hospitalized costs averted',
    type: 'currency',
    digits: 2,
    // hospaverted * direct_hosp (country dataset)
  },
  {
    name: 'directambucosts',
    label: 'Direct ambulatory costs averted',
    type: 'currency',
    digits: 2,
    // ambuaverted * direct_ambu (country dataset)
  },
  {
    name: 'directnonmedicalcosts',
    label: 'Direct non-medical costs averted',
    type: 'currency',
    digits: 2,
    // ambuaverted * direct_non_medical (country dataset)
  },
  {
    name: 'indirecthospcosts',
    label: 'Indirect hospitalized costs averted',
    type: 'currency',
    digits: 2,
    // hospaverted * indirect_hosp (country dataset)
  },
  {
    name: 'indirectambucosts',
    label: 'Indirect ambulatory costs averted',
    type: 'currency',
    digits: 2,
    // ambuaverted * indirect_ambu (country dataset)
  },
  {
    name: 'indirectnonmedicalcosts',
    label: 'Indirect non-medical costs averted',
    type: 'currency',
    digits: 2,
    // ambuaverted * indirect_non_medical (country dataset)
  },
  {
    name: 'healthsystemcosts',
    label: 'Total health system costs',
    type: 'currency',
    digits: 2,
    // directhospcosts + directambucosts + directnonmedicalcosts
  },
  {
    name: 'economiccosts',
    label: 'Total economic costs',
    type: 'currency',
    digits: 2,
    // indirecthospcosts + indirectambucosts + indirectnonmedicalcosts
  },
];

export const VARLOOKUP = {};
VARS.forEach((d) => {
  VARLOOKUP[d.name] = d;
});

export const SECTEXT = {
  BURDEN:
    'To determine whether you should or should not implement Wolbachia in your country or target geography, we would recommend reviewing the dengue burden overall and in each geography. In the following table, we present data for each second Global Administrative Unit Layer (GAUL)  within the selected country. Data includes the total area (km\u00b2), the target area (km² ), the total population, the target population, the mean dengue incidence, dengue cases, dengue DALYs,  and the number of cases which are treated in a hospital inpatient setting, treated an outpatient/ambulatory setting, and not treated in medical settings. The table can be sorted by each of the presented indicators. Specific observations can be found by using the search bar.',
  IMPLEMENTATION:
    'To understand where to implement Wolbachia given your set inputs, we present a summary of the area (km\u00b2) covered by Wolbachia (i.e., the target area based on population density  multiplied by the intervention coverage), the population covered by the intervention (i.e., the population in the target area multiplied by the intervention coverage), the total cost of the Wolbachia intervention in each second administrative unit, and the cost per person covered. The table can be sorted by each of the presented indicators. Specific observations can be found by using the search bar.',
  REDUCTION:
    'To understand the impact of Wolbachia in terms  of the number of dengue cases which could be averted, we present the number of cases, DALYs, hospitalized cases, ambulatory cases, and not-medically treated cases averted within each geography. The table can be sorted by each of the presented indicators. Specific observations can be found by using the search bar.',
  ADDBENEFITS:
    'To understand the impact of Wolbachia in terms  of the number of dengue cases which could be averted, we present the number of cases, DALYs, hospitalized cases, ambulatory cases, and not-medically treated cases averted within each geography. The table can be sorted by each of the presented indicators. Specific observations can be found by using the search bar.',
};

const cols = ['#76B7B2', '#E15759', '#F28E2B', '#59A14F', '#B07AA1', '#4E79A7'];
const gr = '#666666';

export const SUMMS = {
  BURDEN: [
    {
      title: 'Total cases',
      var: 'totalcases',
      dollars: false,
      color: cols[0],
      n: 6,
    },
    {
      title: 'Total DALYs',
      var: 'totaldalys',
      dollars: false,
      color: cols[1],
      n: 6,
    },
  ],
  IMPLEMENTATION: [
    {
      title: (
        <span>
          Total population covered by <em>Wolbachia</em>
        </span>
      ),
      var: 'popcovered',
      dollars: false,
      color: cols[0],
      n: 6,
    },
    {
      title: 'Total cost',
      var: 'totalcost',
      dollars: true,
      color: cols[1],
      n: 6,
    },
  ],
  IMPLEMENTATION2: [
    {
      title: 'Planning',
      var: 'totplan',
      dollars: true,
      n: 4,
      color: gr,
    },
    {
      title: 'Prepration',
      var: 'totprep',
      dollars: true,
      n: 4,
      color: gr,
    },
    {
      title: 'Production',
      var: 'totprod',
      dollars: true,
      n: 4,
      color: gr,
    },
    {
      title: 'Distribution',
      var: 'totdist',
      dollars: true,
      n: 4,
      color: gr,
    },
    { title: 'Release', var: 'totrel', dollars: true, n: 4, color: gr },
    {
      title: 'Monitoring',
      var: 'totmonit',
      dollars: true,
      n: 4,
      color: gr,
    },
  ],
  REDUCTION: [
    {
      title: 'Total cases averted',
      var: 'avertedcases',
      dollars: false,
      n: 6,
      color: cols[0],
    },
    {
      title: 'Total DALYs averted',
      var: 'averteddalys',
      dollars: false,
      n: 6,
      color: cols[1],
    },
  ],
  ADDBENEFITS: [
    {
      title: 'Total health system costs averted',
      var: 'tothealthsystem',
      dollars: true,
      n: 6,
      color: cols[0],
    },
    {
      title: 'Total economic costs averted',
      var: 'toteconomic',
      dollars: true,
      n: 6,
      color: cols[1],
    },
  ],
};
