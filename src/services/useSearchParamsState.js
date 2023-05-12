import { useSearchParams } from 'react-router-dom';
import qs from 'qs';
import { INPUTS } from '../constants';

export function useSearchParamsState(searchParamName, defaultValue) {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const searchParamsState = acquiredSearchParam ?? defaultValue;

  const setSearchParamsState = (newState) => {
    const existingQueries = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });

    const newQuery = { ...existingQueries, [searchParamName]: newState };
    // debugger;
    // const next = Object.assign(
    //   {},
    //   [...searchParams.entries()].reduce(
    //     (o, [key, value]) => ({ ...o, [key]: value }),
    //     {}
    //   ),
    //   { [searchParamName]: newState }
    // );
    setSearchParams(newQuery);
    // setSearchParams({ [searchParamName]: newState });
    // console.log(next);
  };
  return [searchParamsState, setSearchParamsState];
}

const initialState = {};
Object.entries(INPUTS).forEach(([key, val]) => {
  initialState[key] = val.default;
});

const numVars = [
  'ADMAN',
  'CNSTRAMT',
  'COMMUN',
  'COMSEN',
  'DELEGG',
  'DETREL',
  'DIST',
  'EGGDEP',
  'FACSET',
  'LINCRE',
  'MONIT',
  'MOSPRD',
  'PLAN',
  'PREP',
  'PROD',
  'QA',
  'QM',
  'REL',
  'TIMFRM',
  'WOLMON',
  'WRKPLN',
  'COV',
  'EFF',
];

export function parseInputs(inputs) {
  const res = { ...initialState };
  inputs.split('_').forEach((d) => {
    const [k, v] = d.split('~');
    if (k === 'CONSTR') {
      res[k] = v === 'true';
    } else if (numVars.indexOf(k) > -1) {
      res[k] = parseFloat(v);
    } else {
      res[k] = v;
    }
  });
  return res;
}

export function serializeInputs(inputs) {
  return Object.entries(inputs)
    .map(([k, v]) => `${k}~${v}`)
    .join('_');
}
