import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import Map from './map/Map';
import MapControls from './map/MapControls';
import MapLegend from './map/MapLegend';
import Sidebar from './Sidebar';
import Table from './Table';
import useTopojson from '../../services/useTopojson';
import SummaryGrid from './SummaryGrid';
import { SUMMS, INPUTS, COLORMENU } from '../../constants';
import { interpolateViridis } from 'd3-scale-chromatic';
import { scaleLinear, scaleThreshold } from 'd3-scale';
import InfoSection from './InfoSection';

export default function Tool({
  sections,
  meta,
  countryCode,
  inputs,
  setInputs,
  openSidebar,
  handleSidebarClose,
  colorVar,
  setColorVar,
}) {
  const theme = useTheme();
  const [mapScrollZoom, setMapScrollZoom] = useState(false);
  const handleCheck = (event) => {
    setMapScrollZoom(event.target.checked);
  };
  const location = useLocation();
  const hash = location.hash;

  const {
    isLoading,
    error,
    data: topo,
  } = useTopojson(countryCode, inputs.TARPLN, inputs[inputs.TARPLN]);

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace('#', 'sec-');
      const element = document.getElementById(id);
      const yOffset = -140;
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: location.state?.prevPath === '/tool' ? 'smooth' : 'auto',
        });
      }
    }, 0);
  }, [hash]); // do this on route change

  const { data, calcTopo, tots, ranges } = useMemo(() => {
    return calculateData(topo, meta[countryCode], inputs);
  }, [topo, meta, countryCode, inputs]);

  if (!meta || !data || !ranges) {
    return null;
  }
  // ;
  if (error) return 'An error has occurred: ' + error.message;
  const curRange =
    isNaN(ranges[colorVar].min) || isNaN(ranges[colorVar].max)
      ? { min: 0, max: 0 }
      : ranges[colorVar];
  const bins = scaleLinear()
    .domain([curRange.min, curRange.max])
    .nice()
    .ticks(8);

  const qCols = [
    0,
    ...Array.from(Array(bins.length - 1).keys()),
    bins.length - 2,
  ].map((v) => interpolateViridis(v / (bins.length - 2)));

  const colorScale = scaleThreshold().domain(bins).range(qCols);

  let footerText = '';
  const nEntities = topo.objects.foo.geometries.length;
  const nCalcEntities = calcTopo.objects.foo.geometries.length;
  if (inputs.CONSTR && nEntities !== nCalcEntities) {
    footerText = `Showing ${nCalcEntities} of ${nEntities} that meet the budget constraint`;
  }

  const open = isMd ? false : openSidebar;

  return (
    <Box>
      <Sidebar
        meta={meta[countryCode]}
        onClose={handleSidebarClose}
        open={open}
        variant={isMd ? 'permanent' : 'temporary'}
        inputs={inputs}
        setInputs={setInputs}
      />
      <main>
        <Box
          display="flex"
          flex="1 1 auto"
          overflow="hidden"
          paddingLeft={{ md: '300px' }}
          sx={{ flexDirection: 'column' }}
          id={`sec-${sections[0].hash}`}
          ref={sections[0].ref}
        >
          <Box sx={{ mt: 2, mr: 2, ml: 2 }}>
            <InfoSection sec={sections[0]} />
          </Box>{' '}
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box
              flex="1 1 auto"
              height="100%"
              overflow="auto"
              padding={2}
              sx={{ position: 'relative' }}
            >
              <MapControls colorVar={colorVar} setColorVar={setColorVar} />
              <MapLegend colorVar={colorVar} bins={bins} qCols={qCols} />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 15,
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  left: 16,
                  paddingLeft: '10px',
                  zIndex: 1000,
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={mapScrollZoom}
                        onChange={handleCheck}
                      />
                    }
                    label="Scroll to zoom"
                  />
                </FormGroup>
              </Box>
              <Map
                isLoading={isLoading}
                topo={calcTopo}
                inputs={inputs}
                countryCode={countryCode}
                colorVar={colorVar}
                colorScale={colorScale}
                mapScrollZoom={mapScrollZoom}
              />
            </Box>
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[1].hash}`} ref={sections[1].ref}>
              {sections[1].title}
            </h2>
            <SummaryGrid items={SUMMS.BURDEN} tots={tots} />
            <Table
              data={data}
              which="BURDEN"
              sec={sections[1]}
              footerText={footerText}
              inputs={inputs}
            />
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[2].hash}`} ref={sections[2].ref}>
              {sections[2].title}
            </h2>
            <SummaryGrid items={SUMMS.IMPLEMENTATION} tots={tots} />
            <h3 style={{ marginBottom: 0 }}>Total cost breakdown</h3>
            <SummaryGrid items={SUMMS.IMPLEMENTATION2} tots={tots} />
            <Table
              data={data}
              which="IMPLEMENTATION"
              sec={sections[2]}
              footerText={footerText}
              inputs={inputs}
            />
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[3].hash}`} ref={sections[3].ref}>
              {sections[3].title}
            </h2>
            <SummaryGrid items={SUMMS.REDUCTION} tots={tots} />
            <Table
              data={data}
              which="REDUCTION"
              sec={sections[3]}
              footerText={footerText}
              inputs={inputs}
            />
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[4].hash}`} ref={sections[4].ref}>
              {sections[4].title}
            </h2>
            <SummaryGrid items={SUMMS.ADDBENEFITS} tots={tots} />
            <Table
              data={data}
              which="ADDBENEFITS"
              sec={sections[4]}
              footerText={footerText}
              inputs={inputs}
            />
          </Box>
        </Box>
      </main>
    </Box>
  );
}

function calculateData(topo, cmeta, inputs) {
  if (!topo) {
    return { data: null, tots: null };
  }

  const newTopo = JSON.parse(JSON.stringify(topo));

  // for map legend
  const ranges = {};

  topo.objects.foo.geometries.forEach((d, ii) => {
    const props = d.properties;
    const timeframe = parseInt(inputs.TIMFRM);

    const totalcases =
      props.totdenm *
      props.targetpop *
      INPUTS.TIMFRM.benefitsDiscounted[timeframe];
    const areacovered = props.targetarea * inputs.COV;

    let totalcost;
    if (inputs.PHSACT === 'PHASE') {
      // phase-based
      totalcost =
        (inputs.PLAN +
          inputs.PREP +
          inputs.PROD +
          inputs.DIST +
          inputs.REL +
          inputs.MONIT) *
        areacovered *
        INPUTS.TIMFRM.costs[timeframe];
    } else {
      // activity-based
      totalcost =
        (inputs.WRKPLN +
          inputs.COMMUN +
          inputs.FACSET +
          inputs.LINCRE +
          inputs.MOSPRD +
          inputs.QM +
          inputs.QA +
          inputs.EGGDEP +
          inputs.DELEGG +
          inputs.ADMAN +
          inputs.COMSEN +
          inputs.WOLMON +
          inputs.DETREL) *
        areacovered *
        INPUTS.TIMFRM.costs[timeframe];
    }

    let totplan, totprep, totprod, totdist, totrel, totmonit;
    if (inputs.PHSACT === 'PHASE') {
      totplan = inputs.PLAN * areacovered * INPUTS.TIMFRM.costs[timeframe];
      totprep = inputs.PREP * areacovered * INPUTS.TIMFRM.costs[timeframe];
      totprod = inputs.PROD * areacovered * INPUTS.TIMFRM.costs[timeframe];
      totdist = inputs.DIST * areacovered * INPUTS.TIMFRM.costs[timeframe];
      totrel = inputs.REL * areacovered * INPUTS.TIMFRM.costs[timeframe];
      totmonit = inputs.MONIT * areacovered * INPUTS.TIMFRM.costs[timeframe];
    } else {
      totplan =
        (inputs.WRKPLN + inputs.DETREL) *
        areacovered *
        INPUTS.TIMFRM.costs[timeframe];
      totprep = inputs.COMMUN * areacovered * INPUTS.TIMFRM.costs[timeframe];
      totprod =
        (inputs.FACSET + inputs.LINCRE + inputs.MOSPRD + inputs.QM) *
        areacovered *
        INPUTS.TIMFRM.costs[timeframe];
      totdist = inputs.DELEGG * areacovered * INPUTS.TIMFRM.costs[timeframe];
      totrel =
        (inputs.EGGDEP + inputs.QA) *
        areacovered *
        INPUTS.TIMFRM.costs[timeframe];
      totmonit =
        (inputs.ADMAN + inputs.COMSEN + inputs.WOLMON) *
        areacovered *
        INPUTS.TIMFRM.costs[timeframe];
    }

    const popcovered =
      props.targetpop *
      inputs.COV *
      INPUTS.TIMFRM.benefitsDiscounted[timeframe];
    const totaldalys = totalcases * cmeta.daly_per_case;

    const avertedcases = popcovered * props.totdenm * inputs.EFF;
    // * INPUTS.TIMFRM.benefitsDiscounted[timeframe];
    const hospaverted = avertedcases * cmeta.percent_hosp;
    const ambuaverted = avertedcases * cmeta.percent_ambu;
    const nonmedicalaverted = avertedcases * cmeta.percent_non_medical;
    const averteddalys = avertedcases * cmeta.daly_per_case;
    // * INPUTS.TIMFRM.benefitsDiscounted[timeframe];

    const directhospcosts = hospaverted * cmeta.direct_hosp;
    const directambucosts = ambuaverted * cmeta.direct_ambu;
    const directnonmedicalcosts = nonmedicalaverted * cmeta.direct_non_medical;
    const indirecthospcosts = hospaverted * cmeta.indirect_hosp;
    const indirectambucosts = ambuaverted * cmeta.indirect_ambu;
    const indirectnonmedicalcosts =
      nonmedicalaverted * cmeta.indirect_non_medical;

    const denom1 = popcovered * props.totdenm * inputs.EFF;
    const denom2 = denom1 * cmeta.daly_per_case;

    const curRow = {
      name: props.name,
      gaul_code: props.gaul_code,
      // burden
      totpop: props.totpop,
      targetpop: props.targetpop,
      totdenm: props.totdenm,
      totalcases: totalcases,
      totaldalys: totaldalys,
      totalhosp: totalcases * cmeta.percent_hosp,
      totalambu: totalcases * cmeta.percent_ambu,
      totalnonmedical: totalcases * cmeta.percent_non_medical,
      // implementation
      areacovered: areacovered,
      popcovered: popcovered,
      totalcost: totalcost,
      totplan: totplan,
      totprep: totprep,
      totprod: totprod,
      totdist: totdist,
      totrel: totrel,
      totmonit: totmonit,
      costperperson: popcovered === 0 ? 0 : totalcost / popcovered,
      costperavertedcase: denom1 === 0 ? 0 : totalcost / denom1,
      costperaverteddaly: denom2 === 0 ? 0 : totalcost / denom2,
      // reduction
      avertedcases: avertedcases,
      averteddalys: averteddalys,
      hospaverted: hospaverted,
      ambuaverted: ambuaverted,
      nonmedicalaverted: nonmedicalaverted,
      // addbenefits
      directhospcosts: directhospcosts,
      directambucosts: directambucosts,
      directnonmedicalcosts: directnonmedicalcosts,
      indirecthospcosts: indirecthospcosts,
      indirectambucosts: indirectambucosts,
      indirectnonmedicalcosts: indirectnonmedicalcosts,
      healthsystemcosts:
        directhospcosts + directambucosts + directnonmedicalcosts,
      economiccosts:
        indirecthospcosts + indirectambucosts + indirectnonmedicalcosts,
    };
    newTopo.objects.foo.geometries[ii].properties = {
      ...newTopo.objects.foo.geometries[ii].properties,
      ...curRow,
    };
    if (ii === 0) {
      COLORMENU.forEach((item) => {
        if (item.option) {
          ranges[item.option] = {
            min: curRow[item.option],
            max: curRow[item.option],
          };
        }
      });
    } else {
      COLORMENU.forEach((item) => {
        if (item.option) {
          const curVal = curRow[item.option];
          if (typeof curVal === 'number' && isFinite(curVal)) {
            ranges[item.option].min = Math.min(ranges[item.option].min, curVal);
            ranges[item.option].max = Math.max(ranges[item.option].max, curVal);
          }
        }
      });
    }
  });

  if (inputs.CONSTR) {
    const cpp = newTopo.objects.foo.geometries.map((d, ii) => ({
      cost: d.properties.costperperson,
      idx: ii,
    }));
    cpp.sort((a, b) => a.cost - b.cost);
    let curSum = 0;
    const cumSum = [];
    const budget = inputs.CNSTRAMT || 0;
    cpp.forEach((el) => {
      curSum += newTopo.objects.foo.geometries[el.idx].properties.totalcost;
      cumSum.push({
        x: curSum,
        gaul_code: newTopo.objects.foo.geometries[el.idx].properties.gaul_code,
      });
    });
    const keepCodes = cumSum
      .filter((el) => el.x < budget)
      .map((el) => el.gaul_code);

    newTopo.objects.foo.geometries = newTopo.objects.foo.geometries.filter(
      (el) => keepCodes.includes(el.properties.gaul_code)
    );
  }

  const tots = {
    totalcases: 0,
    totaldalys: 0,
    popcovered: 0,
    totalcost: 0,
    totplan: 0,
    totprep: 0,
    totprod: 0,
    totdist: 0,
    totrel: 0,
    totmonit: 0,
    avertedcases: 0,
    averteddalys: 0,
    tothealthsystem: 0,
    toteconomic: 0,
  };

  newTopo.objects.foo.geometries.forEach((d) => {
    const row = d.properties;
    tots.totalcases += row.totalcases;
    tots.totaldalys += row.totaldalys;
    tots.popcovered += row.popcovered;
    tots.totalcost += row.totalcost;
    tots.totplan += row.totplan;
    tots.totprep += row.totprep;
    tots.totprod += row.totprod;
    tots.totdist += row.totdist;
    tots.totrel += row.totrel;
    tots.totmonit += row.totmonit;
    tots.avertedcases += row.avertedcases;
    tots.averteddalys += row.averteddalys;
    tots.tothealthsystem += row.healthsystemcosts;
    tots.toteconomic += row.economiccosts;
  });

  const data = newTopo.objects.foo.geometries.map((d) => ({
    ...d.properties,
    ...inputs,
    daly_per_case: cmeta.daly_per_case,
    direct_ambu: cmeta.direct_ambu,
    direct_hosp: cmeta.direct_hosp,
    direct_non_medical: cmeta.direct_non_medical,
    indirect_ambu: cmeta.indirect_ambu,
    indirect_hosp: cmeta.indirect_hosp,
    indirect_non_medical: cmeta.indirect_non_medical,
    percent_ambu: cmeta.percent_ambu,
    percent_hosp: cmeta.percent_hosp,
    percent_non_medical: cmeta.percent_non_medical,
  }));

  return { data, calcTopo: newTopo, tots, ranges };
}
