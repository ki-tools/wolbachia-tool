import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const INPUTS = {
  // misc
  TARPLN: {
    default: 'POPDEN',
    valueLabels: ['Population density threshold', 'Disease reduction target'],
    values: ['POPDEN', 'DISRED'],
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
  DISRED: {
    default: '12_5',
    values: ['12_5', '25'], //, 50, 100],
    valueLabels: ['12.5%', '25%'], //, '50%', '100%'],
    label: 'Disease reduction target',
    helpText: undefined,
  },
  TIMFRM: {
    default: 1,
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
      <em>Wolbachia</em> mosquitoes or eggs. This input reflects that many{' '}
      {'km\u00b2'}, even with high population density, may have areas (e.g.,
      parks, green space) where there are limited people, indicating that
      <em>Wolbachia</em>-containing mosquitoes/eggs would not be released there.
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

export const TOOLSECTEXT = {
  MAP: (
    <span>
      Please use the map to visualize key indicators to determine the impact and
      cost of implementing <em>Wolbachia</em> in your country.
    </span>
  ),
  BURDEN: (
    <span>
      Please use the following table to review estimates of the dengue burden.
      The following table presents data for each second administrative unit
      within the selected country. Data includes the total area (km²), the
      target area (km²), the total population, the target population, the mean
      dengue incidence, dengue cases, dengue DALYs, and the number of cases
      which are treated in a hospital inpatient setting, treated an
      outpatient/ambulatory setting, and not treated in medical settings. The
      table can be sorted by each of the presented indicators. Specific
      observations can be located using the search bar. All data can be exported
      as a CSV.
    </span>
  ),
  IMPLEMENTATION: (
    <span>
      Please use the following table to understand where you may want to
      implement <em>Wolbachia</em> given your targeting approach and input
      parameters. This table presents a summary of the area (km²) covered by
      <em>Wolbachia</em> (i.e., the target area based on population density
      multiplied by the intervention coverage), the population covered by the
      intervention (i.e., the population in the target area multiplied by the
      intervention coverage), the total cost of the <em>Wolbachia</em>{' '}
      intervention in each second administrative unit, and the cost per person
      covered. The table can be sorted by each of the presented indicators.
      Specific observations can be located using the search bar. All data can be
      exported as a CSV.
    </span>
  ),
  REDUCTION: (
    <span>
      Please use the following table to understand the impact of{' '}
      <em>Wolbachia</em> in terms of reduced disease burden. This table presents
      the number of cases, DALYs, hospitalized cases, ambulatory cases, and
      not-medically treated cases averted within each geography. The table can
      be sorted by each of the presented indicators. Specific observations can
      be located using the search bar. All data can be exported as a CSV.
    </span>
  ),
  ADDBENEFITS: (
    <span>
      Please use the following table to understand the impact of{' '}
      <em>Wolbachia</em> in terms of health system and economic costs averted.
      This table presents the direct (i.e., medical) costs of averting each type
      of dengue case (i.e., treated in a hospital; treated in an outpatient
      setting; treated in a non-medical setting), and the indirect (i.e., lost
      wages) associated with averting each type of dengue case (i.e., treated in
      a hospital; treated in an outpatient setting; treated in a non-medical
      setting). The total health system (all direct costs) and economic (all
      indirect costs) are presented. Specific observations can be located using
      the search bar. All data can be exported as a CSV.
    </span>
  ),
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

// fills in the content in main/DataSources.js
// the optional `extraText` will show up in a dialog box, useful if there's too much text to show by default
export const DATA_SOURCES_CONTENT = [
  {
    title: (
      <span>
        Cost ranges for <em>Wolbachia</em> implementation by phase and activity
      </span>
    ),
    text: (
      <span>
        of area covered by the program. Costs have been generalized to common
        program phases which include planning, preparation, production,
        distribution, release, and monitoring, and common activities within
        those phases. Prior cost-effectiveness analyses (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-020-01638-2"
        >
          Brady et al. 2020
        </Link>
        ) have reported costs per km² within these program phases.
      </span>
    ),
    extraText: (
      <Box>
        <ul>
          <li>
            Planning refers to creating a coordinated release plan using data
            sources for geospatial disease burden, population demographics,
            health systems costing, environmental covariates, and vector
            bionomics.
          </li>
          <li>
            Preparation refers to regulatory and stakeholder engagement
            logistics such as Environmental Impact Assessments, social
            mobilization, and setting up procurement agreements.
          </li>
          <li>
            Production refers to building or leasing an appropriate facility,
            training staff, and rearing a breeding line of mass-produced
            mosquitos. Additional guidance on estimating these costs can be
            found at the following dashboard developed by our collaborators at
            Coupa.
          </li>
          <li>
            Distribution refers to sex-sorting followed by transportation to
            release areas via ground or air shipping. Additional guidance on
            estimating these costs can be found at the following dashboard
            developed by our collaborators at Coupa.
          </li>
          <li>
            Release refers to the release of live adults or placement of eggs
            along pre-determined release grid to cover maximum relevant program
            area.
          </li>
          <li>
            Monitoring refers to three types of monitoring: environmental
            monitoring to ensure no unplanned effects on relevant ecological
            niches; entomological monitoring to determine intervention
            establishment in local vectors; epidemiological monitoring to
            measure impact on human disease in target areas for determining
            effectiveness.
          </li>
        </ul>
        <p>
          Cost data for mosquito release technologies are not publicly shared by
          implementers. Publicly available information (e.g., in academic and
          grey literature) varies drastically. Based on budget estimates,
          publicly available literature, and key informant interviews, costs
          were aggregated to the program category and averaged to determine a
          range for each category of phases and activities.
        </p>
      </Box>
    ),
  },
  {
    title: 'Dengue burden',
    text: (
      <span>
        We relied on modelled raster data for burden as asymptomatic and
        symptomatic dengue are severely underreported. Symptomatic dengue burden
        was extracted from spatial raster datasets from{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.nature.com/articles/nature12060"
        >
          Bhatt et al. 2013
        </Link>
        .
      </span>
    ),
  },
  {
    title: 'Dengue disability',
    text: (
      <span>
        Estimates of DALYs and cases were extracted from{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.healthdata.org/gbd/2019"
        >
          The Institute for Health Metrics and Evaluation (IHME)
        </Link>
        . Based on the national estimates, we calculated the DALYs per dengue
        case.
      </span>
    ),
  },
  {
    title: 'Administrative divisions',
    text: (
      <span>
        Administrative divisions for each secondary administrative unit were
        obtained from{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://data.review.fao.org/map/catalog/srv/api/records/7e6357e6-0893-4b61-a26d-eb09a04eed72"
        >
          GAUL within the Food and Agriculture organization of the UN
        </Link>
        .
      </span>
    ),
  },
  {
    title: 'Population',
    text: (
      <span>
        Population raster spatial datasets were accessed from{' '}
        <Link target="_blank" rel="noreferrer" href="https://www.worldpop.org">
          WorldPop
        </Link>{' '}
        {
          'The data used was unconstrained 1 km resolution estimates of population count and population density, adjusted to match UN Population estimates and measured in units of persons per km\u00b2.'
        }
      </span>
    ),
  },
  {
    title: 'Effectiveness',
    text: (
      <span>
        The default value for effectiveness was extracted from a recent study in
        Yogyakarta demonstrating that <em>Wolbachia</em> led to a 77% (95%
        Confidence Interval: 65-85%) reduction in dengue incidence (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.nejm.org/doi/full/10.1056/NEJMoa2030243"
        >
          Utarini et al. 2021
        </Link>
        ).
      </span>
    ),
  },
  {
    title: 'Healthcare utilization & cost of illness',
    text: (
      <span>
        Estimates of healthcare utilization for each type of case (hospitalized,
        ambulatory, non-medically attended) were derived from a study evaluating
        the global economic burden of dengue (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://pubmed.ncbi.nlm.nih.gov/27091092/"
        >
          Shepard et al. 2016
        </Link>
        . The study provides estimates for the percentage of people with dengue
        that receive care in a hospital setting, ambulatory/outpatient setting,
        and non-medical setting. It also estimates direct, medical costs and
        indirect (lost wages) associated with each type of case in each country.
      </span>
    ),
  },
  {
    title: 'Discounting rates',
    text: (
      <span>
        A discount rate of 3% was applied to the costs and benefits for the 5-,
        10-, and 20-year estimates. This discounting rate is recommended by the
        World Health Organization (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://apps.who.int/iris/bitstream/handle/10665/42699/9241546018.pdf?sequence=1"
        >
          Baltussen, 2003
        </Link>
        ).
      </span>
    ),
  },
  {
    title: 'Disease reduction targets',
    text: (
      <span>
        Priority administrative 2 units were selected for 12.5% and 25% national
        reduction based on the work of one of our collaborators (Tiley, K.,
        Entwistle, J., Thomas, B., Yakob L., Brady, O.J. Using models and maps
        to inform Target Product Profiles and Preferred Product Characteristics:
        the example of <em>Wolbachia</em> replacement. Manuscript in
        preparation). Details regarding the methodology for selecting those
        areas are described in the manuscript above and in this{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://cdn.who.int/media/docs/default-source/ntds/vector-ecology-mangement/context-background-materials-tpp-wolbachia-infected-aedes-aegypti.pdf?sfvrsn=6760a656_3"
        >
          WHO report (2022)
        </Link>
        .
      </span>
    ),
  },
];

// #4E79A7', ',#F28E2B', ',#E15759', ',#76B7B2', ',#59A14F', ',#EDC948', ',#B07AA1', ',#FF9DA7', ',#9C755F', ',#BAB0AC'

export const CALCKEY = {
  predef: { color: '#59A14F', name: 'Green: Pre-defined input parameter' },
  userinput: { color: '#9C755F', name: 'Brown: User input' },
  calc: { color: '#E15759', name: 'Red: Calculated value' },
};

function PreDef({ children }) {
  return <span style={{ color: CALCKEY.predef.color }}>{children}</span>;
}

function UserInput({ children }) {
  return <span style={{ color: CALCKEY.userinput.color }}>{children}</span>;
}

function Calc({ children }) {
  return <span style={{ color: CALCKEY.calc.color }}>{children}</span>;
}

function Times() {
  return <> &times; </>;
}

export const CALCS = [
  {
    section: 'Dengue burden estimates',
    items: [
      {
        title: 'Total population',
        description: (
          <PreDef>Total population in the administrative level 2 area</PreDef>
        ),
      },
      {
        title: 'Target population',
        description: (
          <>
            <PreDef>
              Total population in the 'target' of the administrative 2 area
            </PreDef>
            <Times />
            <UserInput>coverage</UserInput>
          </>
        ),
      },
      {
        title: 'Mean dengue incidence',
        description: (
          <PreDef>Total dengue incidence in the administrative 2 area</PreDef>
        ),
      },
      {
        title: 'Total number of cases',
        description: (
          <>
            <PreDef>Total population in the administrative 2 area</PreDef>
            <Times />
            <UserInput>coverage</UserInput>
            <Times />
            <PreDef>Total dengue incidence in the administrative 2 area</PreDef>
            <br />
            <em>
              For 5, 10,and 20 year estimates, the cases are multiplied by 5,
              10, and 20 respectively.
            </em>
          </>
        ),
      },
      {
        title: 'Total number of hospitalized cases',
        description: (
          <>
            <Calc>Total number of cases</Calc>
            <Times />
            <PreDef>
              percentage of cases seeking care in hospitalized setting
            </PreDef>
          </>
        ),
      },
      {
        title: 'Total number of ambulatory cases',
        description: (
          <>
            <Calc>Total number of cases</Calc>
            <Times />
            <PreDef>
              percentage of cases seeking care in an outpatient setting
            </PreDef>
          </>
        ),
      },
      {
        title: 'Total number of not medically-attended cases',
        description: (
          <>
            <Calc>Total number of cases</Calc>
            <Times />
            <PreDef>
              percentage of cases seeking care in a non-medical setting
            </PreDef>
          </>
        ),
      },
    ],
  },
  {
    section: 'Implementation estimates',
    items: [
      {
        title: 'Area covered by intervention',
        description: (
          <>
            <PreDef>target area</PreDef>
            <Times />
            <UserInput>coverage</UserInput>
          </>
        ),
      },
      {
        title: 'Population covered by intervention',
        description: (
          <>
            <PreDef>target population</PreDef>
            <Times />
            <UserInput>coverage</UserInput>
          </>
        ),
      },
      {
        title: 'Total cost (phase-based)',
        description: (
          <>
            (<UserInput>cost of planning</UserInput> +{' '}
            <UserInput>cost of preparation</UserInput> +{' '}
            <UserInput>cost of production</UserInput> +{' '}
            <UserInput>cost of distribution</UserInput> +{' '}
            <UserInput>cost of release</UserInput> +{' '}
            <UserInput>cost of monitoring</UserInput>) <Times /> (
            <PreDef>target area</PreDef>
            <Times /> <UserInput>coverage</UserInput>)
            <br />
            <em>
              For 5, 10,and 20 year estimates, costs are discounted by 3% each
              year.
            </em>
            <br />
            <em>
              For 5, 10, and 20 year estimates, we assume 100% of the costs for
              years 1-3, and then 1% of total costs for year 4 and beyond.
            </em>
          </>
        ),
      },
      {
        title: 'Total cost (activity-based)',
        description: (
          <>
            (<UserInput>define workplan and budget</UserInput> +{' '}
            <UserInput>determine release methodology</UserInput> +{' '}
            <UserInput>enroll community participation</UserInput> +{' '}
            <UserInput>facility setup</UserInput> +{' '}
            <UserInput>mosquito line creation</UserInput> +{' '}
            <UserInput>mosquito production</UserInput> +{' '}
            <UserInput>quality management and control</UserInput> +{' '}
            <UserInput>deliver eggs/adults to distribution points</UserInput> +{' '}
            <UserInput>egg/adult deployments</UserInput> +{' '}
            <UserInput>quality assurance</UserInput> +{' '}
            <UserInput>adaptive management</UserInput> +{' '}
            <UserInput>measure community sentiment</UserInput> +{' '}
            <UserInput>monitoring in the field</UserInput>) <Times /> (
            <PreDef>target area</PreDef>
            <Times /> <UserInput>coverage</UserInput>)
            <br />
            <em>
              For 5, 10,and 20 year estimates, costs are discounted by 3% each
              year.
            </em>
            <br />
            <em>
              For 5, 10, and 20 year estimates, we assume 100% of the costs for
              years 1-3, and then 1% of total costs for year 4 and beyond.
            </em>
          </>
        ),
      },
      {
        title: 'Mean cost per person',
        description: (
          <>
            <Calc>total cost</Calc> /{' '}
            <Calc>population covered by intervention</Calc>
          </>
        ),
      },
      {
        title: 'Total cost of intervention (phase-based)',
        description: (
          <>
            <UserInput>cost of phase</UserInput> <Times />{' '}
            <Calc>area covered by intervention</Calc>
            <br />
            <em>
              For 5, 10,and 20 year estimates, costs are discounted by 3% each
              year.
            </em>
            <br />
            <em>
              For 5, 10, and 20 year estimates, we assume 100% of the costs for
              years 1-3, and then 1% of total costs for year 4 and beyond.
            </em>
          </>
        ),
      },
      {
        title: 'Total cost of intervention (activity-based)',
        description: (
          <>
            <UserInput>total cost of each activity within the phase</UserInput>{' '}
            <Times /> <Calc>area covered by intervention</Calc>
            <br />
            <em>
              For 5, 10,and 20 year estimates, costs are discounted by 3% each
              year.
            </em>
            <br />
            <em>
              For 5, 10, and 20 year estimates, we assume 100% of the costs for
              years 1-3, and then 1% of total costs for year 4 and beyond.
            </em>
          </>
        ),
      },
      {
        title: 'Cost per person',
        description: (
          <>
            <Calc>total cost</Calc> /{' '}
            <Calc>population covered by intervention</Calc>
          </>
        ),
      },
      {
        title: 'Cost per case averted',
        description: (
          <>
            <Calc>total cost</Calc> / (<Calc>cases averted</Calc> <Times />{' '}
            <UserInput>effectiveness</UserInput>)
          </>
        ),
      },
      {
        title: 'Cost per DALY averted',
        description: (
          <>
            <Calc>total cost</Calc> / (<Calc>dalys averted</Calc> <Times />{' '}
            <UserInput>effectiveness</UserInput>)
          </>
        ),
      },
    ],
  },
  {
    section: 'Dengue reduction estimates',
    items: [
      {
        title: 'Total cases averted',
        description: (
          <>
            (<UserInput>coverage</UserInput> <Times />{' '}
            <PreDef>dengue incidence</PreDef>) <Times />{' '}
            <UserInput>effectiveness</UserInput>
            <br />
            <em>
              For 5, 10, and 20 year estimates, cases averted are discounted by
              3% each year.
            </em>
          </>
        ),
      },
      {
        title: 'Total DALYs averted',
        description: (
          <>
            (<UserInput>coverage</UserInput> <Times />{' '}
            <PreDef>dengue incidence</PreDef>) <Times />{' '}
            <PreDef>DALY_per_case</PreDef> *{' '}
            <UserInput>effectiveness</UserInput>
            <br />
            <em>
              For 5, 10, and 20 year estimates, cases averted are discounted by
              3% each year.
            </em>
          </>
        ),
      },
      {
        title: 'Hospitalized cases averted',
        description: (
          <>
            <Calc>cases averted</Calc> <Times />{' '}
            <PreDef>percent of cases treated in hospitalized setting </PreDef>
          </>
        ),
      },
      {
        title: 'Ambulatory cases averted',
        description: (
          <>
            <Calc>cases averted</Calc> <Times />{' '}
            <PreDef>percent of cases treated in ambulatory setting</PreDef>
          </>
        ),
      },
      {
        title: 'Non-medically attended cases averted',
        description: (
          <>
            <Calc>cases averted</Calc> <Times />{' '}
            <PreDef>percent of cases not medically attended</PreDef>
          </>
        ),
      },
    ],
  },
  {
    section: 'Health system & economic benefit estimates',
    items: [
      {
        title: 'Total health system costs averted',
        description: (
          <>
            <Calc>direct hospitalized costs</Calc> +{' '}
            <Calc>direct ambulatory costs</Calc> +{' '}
            <Calc>direct non-medically attended costs</Calc>
          </>
        ),
      },
      {
        title: 'Total economic costs averted',
        description: (
          <>
            <Calc>indirect hospitalized costs</Calc> +{' '}
            <Calc>indirect ambulatory costs</Calc> +{' '}
            <Calc>indirect non-medically attended costs</Calc>
          </>
        ),
      },
      {
        title: 'Direct hospitalized costs averted',
        description: (
          <>
            <Calc>hospitalized cases averted</Calc> <Times />{' '}
            <PreDef>direct cost per hospitalized case</PreDef>
          </>
        ),
      },
      {
        title: 'Direct ambulatory costs averted',
        description: (
          <>
            <Calc>ambulatory cases averted</Calc> <Times />{' '}
            <PreDef>direct cost per ambulatory case</PreDef>
          </>
        ),
      },
      {
        title: 'Direct not-medically attended costs averted',
        description: (
          <>
            <Calc>not medically attended cases averted</Calc> <Times />{' '}
            <PreDef>direct cost per not medically attended case</PreDef>
          </>
        ),
      },
      {
        title: 'Indirect hospitalized costs averted',
        description: (
          <>
            <Calc>hospitalized cases averted</Calc> <Times />{' '}
            <PreDef>indirect cost per hospitalized case</PreDef>
          </>
        ),
      },
      {
        title: 'Indirect ambulatory costs averted',
        description: (
          <>
            <Calc>ambulatory cases averted</Calc> <Times />{' '}
            <PreDef>indirect cost per ambulatory case</PreDef>
          </>
        ),
      },
      {
        title: 'Indirect not-medically attended costs averted',
        description: (
          <>
            <Calc>not medically attended cases averted</Calc> <Times />{' '}
            <PreDef>indirect cost per nonmedically attended case</PreDef>
          </>
        ),
      },
    ],
  },
];
