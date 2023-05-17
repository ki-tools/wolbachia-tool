import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NLink({ href, text, sx = {} }) {
  return (
    <Link target="_blank" rel="noreferrer" href={href} sx={sx}>
      {text}
    </Link>
  );
}

export const INPUTS = {
  TARPLN: {
    default: 'POPDEN',
    valueLabels: ['Population density threshold', 'Disease reduction target'],
    values: ['POPDEN', 'DISRED'],
    label: 'Targeting criteria',
    helpText: undefined,
  },
  POPDEN: {
    default: '1000',
    values: ['1500', '1000', '500', '250'],
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
    default: '125',
    values: ['125', '250'], //, 50, 100],
    valueLabels: ['12.5%', '25%'], //, '50%', '100%'],
    label: 'Disease reduction target',
    helpText: undefined,
  },
  TIMFRM: {
    default: 1,
    values: [0, 1, 2, 3],
    multiplier: [1, 5, 10, 20],
    // benefitsDiscounted: [1, 4.70886581, 8.75252910350239, 15.2068552357751],
    benefitsDiscounted: [1, 5, 10, 20],
    // costs: [1, 3.000798291, 3.167078222, 3.238879794],
    costs: [1, 3.02, 3.07, 3.11],
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
    label: 'Monitoring 𝘞𝘰𝘭𝘣𝘢𝘤𝘩𝘪𝘢 freq in the field',
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
  DISRED: (
    <span>
      12.5% and 25% national reduction targets based on the work of Tiley, K. et
      al. and this{' '}
      <NLink
        href="https://cdn.who.int/media/docs/default-source/ntds/vector-ecology-mangement/context-background-materials-tpp-wolbachia-infected-aedes-aegypti.pdf?sfvrsn=6760a656_3"
        text="WHO report"
        sx={{ color: 'white', textDecoration: 'underline' }}
      />{' '}
      (2022)
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
    digits: 0,
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
    digits: 0,
    // hospaverted * direct_hosp (country dataset)
  },
  {
    name: 'directambucosts',
    label: 'Direct ambulatory costs averted',
    type: 'currency',
    digits: 0,
    // ambuaverted * direct_ambu (country dataset)
  },
  {
    name: 'directnonmedicalcosts',
    label: 'Direct non-medical costs averted',
    type: 'currency',
    digits: 0,
    // ambuaverted * direct_non_medical (country dataset)
  },
  {
    name: 'indirecthospcosts',
    label: 'Indirect hospitalized costs averted',
    type: 'currency',
    digits: 0,
    // hospaverted * indirect_hosp (country dataset)
  },
  {
    name: 'indirectambucosts',
    label: 'Indirect ambulatory costs averted',
    type: 'currency',
    digits: 0,
    // ambuaverted * indirect_ambu (country dataset)
  },
  {
    name: 'indirectnonmedicalcosts',
    label: 'Indirect non-medical costs averted',
    type: 'currency',
    digits: 0,
    // ambuaverted * indirect_non_medical (country dataset)
  },
  {
    name: 'healthsystemcosts',
    label: 'Total health system costs',
    type: 'currency',
    digits: 0,
    // directhospcosts + directambucosts + directnonmedicalcosts
  },
  {
    name: 'economiccosts',
    label: 'Total economic costs',
    type: 'currency',
    digits: 0,
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

export const USER_GUIDE_CONTENT = [
  {
    title: 'How does this tool work?',
    description: (
      <span>
        This video tutorial provides an overview selected of the key features of
        the tool. We highlight how the user can select a country, decide on a
        targeting approach, and input costs, coverage, and effectiveness
        estimates to understand the potential impact of <em>Wolbachia</em>. We
        demonstrate the tool's ability to provide estimates for the total target
        areas of a country, and for each second Global Administrative Unit Layer
        (GAUL) (e.g., districts) within the country.
      </span>
    ),
    embedId: 'vSh-B2nLwJM',
  },
  {
    title: 'How to calculate dengue burden and reduction estimates?',
    description: (
      <span>
        This video tutorial presents how to use the tool to view the estimated
        dengue burden data. We present how the tool calculates dengue burden
        overall and in each relevant administrative unit. This data provides a
        potentially improved understanding of the burden in a country/geography
        given dengue incidence is often under-reported. We would recommend
        reviewing this data prior to deciding about <em>Wolbachia</em>{' '}
        implementation.
      </span>
    ),
    embedId: 'QGoTrcwiLLI',
  },
  {
    title: 'How to estimate cost?',
    description: (
      <span>
        This video tutorial shows resources within and beyond the tool which may
        assist a user in deriving their own cost estimates for{' '}
        <em>Wolbachia</em>
        programs. It also describes how the tool can be used to understand the
        total costs of <em>Wolbachia</em> programs with differing target
        approaches and input parameter assumptions such as cost, coverage, and
        effectiveness. We describe how costs can be refined for different cost
        scenarios and what the impact might be on the overall costs.
      </span>
    ),
    embedId: 'wmbE1XJFBPQ',
  },
  {
    title: (
      <span>
        How to calculate benefits from a National <em>Wolbachia</em> scale
        program?
      </span>
    ),
    description: (
      <span>
        This video tutorial describes how the tool can be used to determine the
        impact of <em>Wolbachia</em> in terms of dengue cases averted and
        Disability-Adjusted Life Years (DALYs) averted. We describe how types of
        cases averted (i.e., cases requiring hospitalization) are estimated. And
        also, describes how the tool can be used to scale up <em>Wolbachia</em>{' '}
        in high priority areas. We describe how areas are prioritized based on
        impact and cost (measured by cost per person covered by the
        intervention).
      </span>
    ),
    embedId: '1YmsE9PUvqA',
  },
  {
    title: <span>Let's do a practice scenario!</span>,
    description: (
      <span>
        Finally! Let's use Indonesia as a practice scenario as we use all the
        features of the tool to support decision making of <em>Wolbachia</em>{' '}
        Replacement Technology.
      </span>
    ),
    embedId: '3rZp7oLjT-g',
  },
];

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
        Costs are a key input parameter for this tool and should be input as the
        cost in USD per km² of area covered by the program. Costs have been
        generalized to common program phases which include planning,
        preparation, production, distribution, release, and monitoring, and
        common activities within those phases. Prior cost-effectiveness analyses
        (
        <NLink
          href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-020-01638-2"
          text="Brady et al. 2020"
        />
        ) have reported costs per km² within these program phases.
      </span>
    ),
    extraText: (
      <Box>
        <Typography sx={{ pt: 1 }}>
          Costs for <em>Wolbachia</em> have not been publicly shared by
          implementers. Publicly available information (e.g., in academic and
          grey literature) varies drastically. Based on budget estimates,
          publicly available literature, and key informant interviews, costs
          were aggregated to the program phases and activities and averaged to
          determine a range for each category of phases and activities.{' '}
          <b>
            We would highly recommend that the user inputs their own estimates
            of costs.
          </b>
        </Typography>
        <Typography sx={{ pt: 1 }}>
          For the 5-, 10-, 15- year costs, we assume that the programs are the
          full cost for the first three years of implementation, and then
          require very little funding after (1% of total budget annually) for
          monitoring.
        </Typography>
        <Typography>
          There are two cost models for how <em>Wolbachia</em> programs might be
          scaled up (
          <NLink
            href="https://cdn.who.int/media/docs/default-source/ntds/vector-ecology-mangement/context-background-materials-tpp-wolbachia-infected-aedes-aegypti.pdf?sfvrsn=6760a656_3"
            text="World Health Organization, 2022"
          />
          ).
          <ul>
            <li>
              A turnkey model, where a manufacturer is directly responsible for
              all aspects of the program, including set-up, release, and
              post-release monitoring.
            </li>
            <li>
              An integrated model, where the manufacturer, who may be local,
              regional, or global, will supply ready-to-distribute
              mosquito-release containers while a local organization or
              vector-control program manages set-up, release, and monitoring.
            </li>
          </ul>
        </Typography>
        <Typography>
          It is expected that the integrated model would be more cost-effective
          given it would leverage existing supply chains and resources. A
          detailed summary of phases and activities that guide cost inputs are
          provided below.
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 800, pt: 2 }}>
          Planning
        </Typography>
        <Typography sx={{ pt: 1 }}>
          <b>
            Planning refers to creating a coordinated release plan using data
            sources for geospatial disease burden, population demographics,
            health systems costing, environmental covariates, and vector
            bionomics.
          </b>{' '}
          The planning phase of a <em>Wolbachia</em> is critical because
          adequately characterizing the eventual release area will dictate most
          future costs. This tool provides insight on to some of these planning
          and targeting efforts. The necessary steps to the planning phase
          include identifying data sources for geospatial disease burden,
          population demographics, health systems costing, environmental
          covariates, and vector bionomics that are all likely to affect the
          creation of a coordinated release plan. The necessary vector bionomics
          will include the primary target Aedes species and other mosquitoes
          present in each area, the main transmitters of human disease, and how
          these abundance levels are affected by seasonality. If any of these
          datasets do not exist and need to be created, this will add
          substantially to the time and cost involved in the planning stage.
          Identifying and working with in-country partners to use these data in
          identifying a release area is an activity that will vary between
          countries.
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 800, pt: 2 }}>
          Preparation
        </Typography>
        <Typography sx={{ pt: 1 }}>
          <b>
            Preparation refers to regulatory and stakeholder engagement
            logistics such as Environmental Impact Assessments, social
            mobilization, and setting up procurement agreements.
          </b>{' '}
          The preparation phase of a<em>Wolbachia</em> includes the regulatory
          and stakeholder engagement logistics that are critical for
          programmatic success. Determining and meeting regulatory requirements
          from country to country is an opaque process, and one that would
          likely benefit from cooperation and sharing of experiences across
          implementers and countries. One potential driver of cost in this phase
          is the completion of an Environmental Impact Assessment, the cost of
          which may vary depending on the regulatory standards of the country of
          interest. These costs will also vary with the mosquito target and
          intervention in question.
        </Typography>
        <Typography sx={{ pt: 1 }}>
          Stakeholder and community engagement costs vary heavily by geography,
          as well as on the strategies chosen for their completion. For
          instance, social mobilization and community sensitization can comprise
          large proportions of a program budget, including up to 23% of total
          deployment costs in a scaled up Aedes aegypti release by the World
          Mosquito Program in Northern Australia (
          <NLink
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6305154/"
            text="O'Neill et al, 2019"
          />
          ). Individual program costs are likely to be variable and highly
          dependent on the methods used for implementation. For instance, mass
          media outreach will entail a different range of costs than
          on-the-ground visits to many affected towns or villages spread across
          a wide geographic area.
        </Typography>
        <Typography sx={{ pt: 1 }}>
          A key question affecting the costs of these efforts will be the
          measurement of success. If surveys are undertaken to show the impact
          of community engagement on public opinion, and if there are target
          levels of community approval that must be achieved to make the
          intervention acceptable to program staff or local government
          officials, these are likely to increase program costs for community
          engagement in comparison to purely educational efforts. Additionally,
          if an intervention intends to leverage community in-program
          distribution or implementation, through egg distribution or insect
          collection teams (i.e., the integrated model), this may reduce cost in
          the release and monitoring phases but will also require larger
          up-front investments in community engagement and training. It is
          possible that some programs will be able to reduce costs by
          integrating their community engagement and training efforts with
          existing programs for dengue control or public health campaigns such
          as mass drug administration, the likelihood of which will depend on
          the public health infrastructure and existing health interventions in
          the geographic area in question.
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 800, pt: 2 }}>
          Production
        </Typography>
        <Typography sx={{ pt: 1 }}>
          <b>
            Production refers to building or leasing an appropriate facility,
            training staff, and rearing a breeding line of mass-produced
            mosquitos.
          </b>{' '}
          The production phase of a mosquito intervention is typically dominated
          by fixed costs for mosquito rearing and mass production that are
          reliant on an established manufacturing facility. Building or leasing
          an appropriate facility will represent the largest proportion of costs
          in this phase, as well as recruiting and training the requisite staff
          for mosquito rearing. Whether a release program uses one central
          rearing facility and several smaller adult emergence centers, or sends
          centrally produced eggs internationally will impact costs in this
          phase by determining the number of facilities to be built and workers
          to be trained. These considerations are discussed at length in the
          distribution section. The creation of a mosquito breeding line will
          generally represent a fixed cost category across intervention sites.
          For instance, the backcrossing to a native population of mosquitoes is
          a critical component for <em>Wolbachia</em>
          interventions.
        </Typography>
        <Typography sx={{ pt: 1 }}>
          Tests for vector competence, including insecticide resistance and
          health checks of lab-produced mosquitoes, should be fixed from
          site-to-site, as should activities that ensure line stability and
          amplification of the original breeding colony. These may include PCR
          checks of brood stock genetic stability, outcrossing with wild males,
          the sourcing of human, animal, or synthetic blood, the cost of which
          will vary depending on the source, as human blood would need to be
          screened for pathogens, and may present additional ethical,
          regulatory, and community engagement considerations. Synthetic sources
          for blood meals such as SkitoSnak are more expensive to produce but
          present fewer costs for pathogen testing (
          <NLink
            href="https://www.nature.com/articles/s41598-018-29415-5#:~:text=To%20overcome%20these%20constraints%2C%20we,yolk%20and%20a%20bicarbonate%20buffer."
            text="Gonzalez et al, 2018"
          />
          ) and less concerns for community misunderstanding.
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 800, pt: 2 }}>
          Distribution
        </Typography>
        <Typography sx={{ pt: 1 }}>
          <b>
            Distribution refers to sex-sorting followed by transportation to
            release areas via ground or air shipping.
          </b>{' '}
          The proportion of costs dedicated to the distribution and release of
          lab-augmented mosquitoes will be driven by several factors.
          Interventions that involve the release of adult mosquitoes must
          consider survival factors that are independent of those important for
          egg distribution. Major differences in mosquito genera requirements
          will drive the cost of distribution and release (for example, the
          ability to sex-sort pupae which is feasible at scale for Aedes). Once
          they have been sex-sorted, adult mosquitoes can be chilled and
          compacted for smooth transport to their release location (
          <NLink
            href="https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0008561"
            text="Zhang et al, 2020"
          />
          ). This lowers the metabolism of the adult mosquitoes to a point where
          large numbers can be compacted into small tubes for transport with a
          reduced risk of death or injury and eventual competitiveness. For
          Aedes aegypti mosquitoes, a study has shown that overnight air
          transport after chilling to a temperature between 7 and 14°C resulted
          in the highest survival rate when mosquitoes were compacted to 240
          individuals/cm3, even though this resulted in partial damage to
          mosquito wings and scales (
          <NLink
            href="https://academic-oup-com.offcampus.lib.washington.edu/jinsectscience/article/18/6/2/5153339"
            text="Chung et al, 2018"
          />
          ). Additionally, another study found that Aedes albopictus mosquitoes
          can maintain high survival rates after chilling to either 5 or 10°C
          for a maximum of 24 hours ({' '}
          <NLink
            href="https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0008561"
            text="Zhang et al, 2020"
          />
          ). Shipping eggs is generally cheaper and typically bears less of a
          regulatory burden than the shipment of live adults. For those
          interventions relying upon the shipment of eggs from international or
          regional production hubs, Aedes eggs can be desiccated and packaged
          for long-distance transport between 1 and 6 months depending on the
          species (
          <NLink
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5654580/"
            text="Kauffman et al, 2017"
          />
          ). If mosquitoes are being delivered internationally via shipments,
          the costs for specialized shipping requirements and fees must be
          considered.
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 800, pt: 2 }}>
          Release
        </Typography>
        <Typography sx={{ pt: 1 }}>
          <b>
            Release refers to the release of live adults or placement of eggs
            along pre-determined release grid to cover maximum relevant program
            area.
          </b>{' '}
          In-country transportation to release sites has historically been
          accomplished via ground transportation (
          <NLink
            href="http://www-naweb.iaea.org/nafa/ipc/crp/RCM3-Mosquito-handlingtransport.pdf"
            text="IAEA, 2018"
          />
          ), meaning that large variable costs can be accrued in
          personnel-hours, vehicle costs, and fuel surcharges. Some groups have
          posited the use of drone technology or light aircraft for targeted
          airborne release of live mosquitoes ({' '}
          <NLink
            href="https://academic-oup-com.offcampus.lib.washington.edu/jinsectscience/article/18/6/2/5153339"
            text="Chung et al, 2018"
          />
          ), but this solution has not yet been implemented at scale, and comes
          with its own array of financial and technical considerations. The
          release of adults compared to the placement of eggs will impact cost
          estimates for programs, as will the size of the release grid and the
          frequency with which releases are planned. The specific dimensions of
          a release grid are tied generally to the flight range of the mosquito
          in question, along with the size of the at-risk area the intervention
          is designed to affect. Additionally, whether an intervention is
          self-limiting, or self-sustaining will determine the need for repeated
          releases within an area over time, or if just one release will be
          appropriate to allow the intervention to spread throughout a wild
          mosquito population.
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 800, pt: 2 }}>
          Monitoring
        </Typography>
        <Typography sx={{ pt: 1 }}>
          <b>
            Monitoring refers to three types of monitoring: environmental
            monitoring to ensure no unplanned effects on relevant ecological
            niches; entomological monitoring to determine intervention
            establishment in local vectors; epidemiological monitoring to
            measure impact on human disease in target areas for determining
            effectiveness.
          </b>
          The post-intervention phase of a mosquito release program includes
          significant proportions of the overall program cost, accounting for
          nearly one quarter of programmatic costs for a recent World Mosquito
          Programme city-wide scaled deployment of <em>Wolbachia</em>-infected
          Aedes mosquitoes in northern Australia (
          <NLink
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6305154/"
            text="O'Neill et al, 2019"
          />
          ). Most of this cost category is driven by post-release monitoring of
          environmental, entomological, and epidemiologic outcomes critical to
          evaluating programmatic success and monitoring any unintended effects
          of the release program. One aspect of post-intervention monitoring
          that will impact cost is the size of the intervention area that must
          be monitored. If the release area is spread out over a large
          geographical area, the costs of environmental, entomological, and
          epidemiological monitoring will all likely be higher.
        </Typography>
        <Typography sx={{ pt: 1 }}>
          Much of the cost related to post-intervention environmental monitoring
          will be determined by the biosafety regulations in the countries where
          release operations occur. Entomological monitoring for mosquito
          release involves costs associated with capturing mosquitoes in a
          systematic fashion from the release area in question, as well as
          identifying and sorting them by sex and species before examining
          target species individuals for evidence of intervention effect.
          Potential indicators for entomological monitoring include vector
          population size, transgene frequency, and the ability to support
          pathogen replication (
          <NLink
            href="https://www.who.int/tdr/publications/year/2014/Guidance_framework_mosquitoes.pdf"
            text="WHO, 2014"
          />
          ). Costs associated with the establishment of an appropriate capture
          grid may vary and the actual capture may vary. Once the mosquitoes are
          captured and sorted, any additional analysis that needs to occur for
          measuring uptake of the intervention will add to program costs. This
          would involve determining what proportion of captured mosquitoes have
          been colonized by the
          <em>Wolbachia</em>.
        </Typography>
        <Typography sx={{ pt: 1 }}>
          Epidemiological monitoring activities include the detection of lowered
          incidence of infection or clinical disease in human populations
          associated with the mosquito release area. Reductions in infections
          are often measured alongside decreased morbidity and mortality
          relating to the diseases of interest. If a field trial aims to detect
          decreasing infection incidence, this will be achievable with a smaller
          and less expensive cohort compared to field trails that aim to detect
          decreasing incidence of disease, as clinical disease development is
          not guaranteed in all those infected (
          <NLink
            href="https://www.who.int/tdr/publications/year/2014/Guidance_framework_mosquitoes.pdf"
            text="WHO, 2014"
          />
          ). The costs of detecting these endpoints are often bound to the time
          it takes to detect a meaningful difference from base-rates of disease,
          which is most easily detected in high-transmission settings. If there
          are very few cases in a release area, then a field trial will take
          longer to show a detectable decrease in cases over time. This is a key
          consideration when projecting costs for a <em>Wolbachia</em>, which
          may be affected by seasonality and year-to-year variations which
          affect the length of time needed to conduct a strong epidemiologic
          evaluation of an intervention. Finally, disease monitoring will be
          highly dependent on the existing local clinical infrastructure that
          can be accessed for disease detection, which would have important cost
          implications.
        </Typography>
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
        <NLink
          href="https://www.nature.com/articles/nature12060"
          text="Bhatt et al. 2013"
        />
        .
      </span>
    ),
  },
  {
    title: 'Dengue disability',
    text: (
      <span>
        Estimates of DALYs and cases were extracted from a{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://vizhub.healthdata.org/gbd-results/"
        >
          Global Burden of Disease Study
        </Link>{' '}
        (2019). Based on the national estimates, we calculated the DALYs per
        dengue case. A range of severities with disability weights is not
        accounted for.
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
          href="https://data.apps.fao.org/map/catalog/static/search?keyword=HiH_boundaries"
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
        indirect (lost wages) associated with each type of case in each country.{' '}
        Costs were adjusted to inflation from 2013 to 2020.
      </span>
    ),
  },
  // {
  //   title: 'Discounting rates',
  //   text: (
  //     <span>
  //       A discount rate of 3% was applied to the costs and benefits for the 5-,
  //       10-, and 20-year estimates. This discounting rate is recommended by the
  //       World Health Organization (
  //       <Link
  //         target="_blank"
  //         rel="noreferrer"
  //         href="https://apps.who.int/iris/bitstream/handle/10665/42699/9241546018.pdf?sequence=1"
  //       >
  //         Baltussen, 2003
  //       </Link>
  //       ).
  //     </span>
  //   ),
  // },
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
            <PreDef>Total dengue incidence in the administrative 2 area</PreDef>
            <br />
            <em>
              For 5, 10, and 20 year estimates, the cases are multiplied by 5,
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
              For 5, 10, and 20 year estimates, costs are discounted by 3% each
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
              For 5, 10, and 20 year estimates, costs are discounted by 3% each
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
        title: 'Total cost of intervention (phase-based)',
        description: (
          <>
            <UserInput>cost of phase</UserInput> <Times />{' '}
            <Calc>area covered by intervention</Calc>
            <br />
            <em>
              For 5, 10, and 20 year estimates, costs are discounted by 3% each
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
              For 5, 10, and 20 year estimates, costs are discounted by 3% each
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
      // {
      //   title: 'Mean cost per person',
      //   description: (
      //     <>
      //       <Calc>total cost</Calc> /{' '}
      //       <Calc>population covered by intervention</Calc>
      //     </>
      //   ),
      // },
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
            <Calc>total cost</Calc> / <Calc>cases averted</Calc>
          </>
        ),
      },
      {
        title: 'Cost per DALY averted',
        description: (
          <>
            <Calc>total cost</Calc> / <Calc>DALYs averted</Calc>
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
            <Calc>cases averted</Calc> <Times /> <PreDef>DALY_per_case</PreDef>
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
