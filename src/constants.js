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
    values: [250, 500, 1000, 1500],
    valueLabels: [
      '\u2265 250 people per km\u00b2',
      '\u2265 500 people per km\u00b2',
      '\u2265 1,000 people per km\u00b2',
      '\u2265 1,500 people per km\u00b2',
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
