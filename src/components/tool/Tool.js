import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Map from './Map';
import useTopojson from '../../services/useTopojson';
import Sidebar from './Sidebar';
import { VARS, TABLES } from '../../constants';
import Table from './Table';

export default function Tool({
  sections,
  meta,
  countryIndex,
  inputs,
  setInputs,
  openSidebar,
  handleSidebarClose,
}) {
  const theme = useTheme();

  const location = useLocation();
  const hash = location.hash;

  const {
    isLoading,
    error,
    data: topo,
  } = useTopojson(Object.keys(meta)[countryIndex], inputs.POPDEN);

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

  const data = useMemo(() =>
    calculateData(topo, Object.values(meta)[countryIndex], inputs)
  );

  if (!meta || !data) {
    return null;
  }

  if (error) return 'An error has occurred: ' + error.message;

  const open = isMd ? false : openSidebar;

  return (
    <Box>
      <Sidebar
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
        >
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box flex="1 1 auto" height="100%" overflow="auto" padding={2}>
              <Map
                isLoading={isLoading}
                topo={topo}
                inputs={inputs}
                countryIndex={countryIndex}
              />

              {/* <Divider />
              <Container paddingY={4}>
                <Footer />
              </Container> */}
            </Box>
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[0].hash}`} ref={sections[0].ref}>
              {sections[0].title}
            </h2>
            <Table data={data} which="BURDEN" />
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[1].hash}`} ref={sections[1].ref}>
              {sections[1].title}
            </h2>
            <Table data={data} which="WHERE" />
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[2].hash}`} ref={sections[2].ref}>
              {sections[2].title}
            </h2>
            <Table data={data} which="BENEFITS" />
          </Box>
          <Box sx={{ mr: 2, ml: 2 }}>
            <h2 id={`sec-${sections[3].hash}`} ref={sections[3].ref}>
              {sections[3].title}
            </h2>
            <Table data={data} which="ADDITIONAL" />
          </Box>
        </Box>
      </main>
    </Box>
  );
}

function calculateData(topo, cmeta, inputs) {
  if (!topo) {
    return null;
  }

  const res = {
    BURDEN: [],
    WHERE: [],
    BENEFITS: [],
    ADDITIONAL: [],
  };

  topo.objects.foo.geometries.forEach((d, ii) => {
    const props = d.properties;

    const totalcases = props.totdenm * props.targetpop;
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
        areacovered;
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
        areacovered;
      // Q: DETREL not in PPT
    }

    const popcovered = props.targetpop * inputs.COV;
    res.BURDEN.push({
      name: props.name,
      gaul_code: props.gaul_code,
      totpop: props.totpop,
      targetpop: props.targetpop,
      totdenm: props.totdenm,
      totalcases: totalcases,
      totaldalys: totalcases * cmeta.daly_per_case,
      totalhosp: totalcases * cmeta.percent_hosp,
      totalambu: totalcases * cmeta.percent_ambu,
      totalnonmedical: totalcases * cmeta.percent_non_medical,
    });

    res.WHERE.push({
      name: props.name,
      gaul_code: props.gaul_code,
      areacovered: areacovered,
      popcovered: popcovered,
      totalcost: totalcost,
      costperperson: totalcost / popcovered,
      costperavertedcase: totalcost / (popcovered * props.totdenm * inputs.EFF),
      costperaverteddaly:
        totalcost /
        (popcovered * props.totdenm * cmeta.daly_per_case * inputs.EFF),
    });

    const avertedcases = popcovered * props.totdenm * inputs.EFF;
    const hospaverted = avertedcases * cmeta.percent_hosp;
    const ambuaverted = avertedcases * cmeta.percent_ambu;
    const nonmedicalaverted = avertedcases * cmeta.percent_non_medical;
    res.BENEFITS.push({
      name: props.name,
      gaul_code: props.gaul_code,
      avertedcases: avertedcases,
      averteddalys:
        popcovered * props.totdenm * props.daly_per_case * inputs.EFF,
      hospaverted: hospaverted,
      ambuaverted: ambuaverted,
      nonmedicalaverted: nonmedicalaverted,
    });

    res.ADDITIONAL.push({
      name: props.name,
      gaul_code: props.gaul_code,
      directhospcosts: hospaverted * cmeta.direct_hosp,
      directambucosts: ambuaverted * cmeta.direct_ambu,
      directnonmedicalcosts: nonmedicalaverted * cmeta.direct_non_medical,
      indirecthospcosts: hospaverted * cmeta.indirect_hosp,
      indirectambucosts: ambuaverted * cmeta.indirect_ambu,
      indirectnonmedicalcosts: nonmedicalaverted * cmeta.indirect_non_medical,
    });
  });

  return res;
}
