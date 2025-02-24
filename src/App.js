import { useState, useRef, useMemo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import useScrollSpy from 'react-use-scrollspy';
import Header from './components/Header';
import Main from './components/main/Main';
import Tool from './components/tool/Tool';
// import 'aos/dist/aos.css';
import useCountryMeta from './services/useCountryMeta';
import AppErrorBoundary from './components/AppErrorBoundary';
import { INPUTS, TOOLSECTEXT } from './constants';
import {
  useSearchParamsState,
  serializeInputs,
  parseInputs,
} from './services/useSearchParamsState';

const initialState = {};
Object.entries(INPUTS).forEach(([key, val]) => {
  initialState[key] = val.default;
});

export default function App() {
  const { data: meta } = useCountryMeta();
  const [countryCode, setCountryCode] = useSearchParamsState('cc', 'IDN');
  const [sinputs, setSInputs] = useSearchParamsState(
    'inputs',
    serializeInputs(initialState)
  );
  const [colorVar, setColorVar] = useSearchParamsState('cv', 'costperperson');
  const [openSidebar, setOpenSidebar] = useState(false);

  const inputs = useMemo(() => parseInputs(sinputs), [sinputs]);
  function setInputs(x) {
    console.log('a', serializeInputs(x));
    setSInputs(serializeInputs(x));
  }
  // console.log(inputs);
  // console.log(sinputs);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const handleCountryChange = (event) => {
    const newCode = event.target.value;
    // if the country doesn't have the target plan option, need to change it
    const tarPln = inputs.TARPLN;
    if (!meta?.[newCode]?.data?.[tarPln].includes(inputs[tarPln])) {
      // const newInputs = { ...inputs };
      const newInputs = JSON.parse(JSON.stringify(inputs));
      if (meta?.[newCode]?.data?.POPDEN?.length > 0) {
        newInputs.TARPLN = 'POPDEN';
        newInputs.POPDEN = meta?.[newCode]?.data?.POPDEN[0];
      } else {
        newInputs.TARPLN = 'DISRED';
        newInputs.DISRED = meta?.[newCode]?.data?.DISRED[0];
      }
      setInputs(newInputs);
    }
    setCountryCode(newCode);
  };

  const sections = {
    main: [
      { name: 'Home', hash: 'home', ref: useRef(null) },
      { name: 'User Guide', hash: 'userguide', ref: useRef(null) },
      { name: 'Data Sources', hash: 'datasources', ref: useRef(null) },
      { name: 'Calculations', hash: 'calculations', ref: useRef(null) },
      { name: 'About', hash: 'about', ref: useRef(null) },
    ],
    tool: [
      {
        name: 'Map',
        hash: 'map',
        infoTitle: 'Key Indicators Map',
        text: TOOLSECTEXT.MAP,
        ref: useRef(null),
      },
      {
        name: 'Dengue Burden',
        hash: 'burden',
        title: (
          <span>
            What is the dengue burden in my country? Should I consider{' '}
            <em>Wolbachia?</em>
          </span>
        ),
        infoTitle: 'Dengue burden estimates',
        text: TOOLSECTEXT.BURDEN,
        ref: useRef(null),
      },
      {
        name: 'Where to Focus and Cost',
        hash: 'implementation',
        title: (
          <span>
            Where should I implement <em>Wolbachia</em> and how much will it
            cost?
          </span>
        ),
        infoTitle: 'Implementation estimates',
        text: TOOLSECTEXT.IMPLEMENTATION,
        ref: useRef(null),
      },
      {
        name: 'Reduction Benefits',
        hash: 'reduction',
        title: (
          <span>
            What are the dengue reduction benefits of implementing{' '}
            <em>Wolbachia</em>?
          </span>
        ),
        infoTitle: 'Dengue reduction estimates',
        text: TOOLSECTEXT.REDUCTION,
        ref: useRef(null),
      },
      {
        name: 'Additional Benefits',
        hash: 'addbenefits',
        title: (
          <span>
            What are additional benefits of implementing <em>Wolbachia</em>?
          </span>
        ),
        infoTitle: 'Health system & economic benefit estimates',
        text: TOOLSECTEXT.ADDBENEFITS,
        ref: useRef(null),
      },
    ],
  };

  const activeMainSection = useScrollSpy({
    sectionElementRefs: sections.main.map((el) => el.ref),
    offsetPx: -400,
  });

  const activeToolSection = useScrollSpy({
    sectionElementRefs: sections.tool.map((el) => el.ref),
    offsetPx: -440,
  });

  // if (isLoading) return 'Loading...';
  // if (error) return 'An error has occurred: ' + error.message;

  return (
    <AppErrorBoundary inputs={{ ...inputs, countryCode, colorVar }}>
      <Header
        sections={sections}
        activeMainSection={activeMainSection}
        activeToolSection={activeToolSection}
        countryCode={countryCode}
        handleCountryChange={handleCountryChange}
        meta={meta}
        onSidebarOpen={handleSidebarOpen}
      />
      <Routes>
        <Route path="/">
          <Route index element={<Main sections={sections.main} />} />
          <Route
            path="tool"
            element={
              <>
                {meta && (
                  <Tool
                    sections={sections.tool}
                    countryCode={countryCode}
                    meta={meta}
                    inputs={inputs}
                    setInputs={setInputs}
                    openSidebar={openSidebar}
                    handleSidebarClose={handleSidebarClose}
                    colorVar={colorVar}
                    setColorVar={setColorVar}
                  />
                )}
              </>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppErrorBoundary>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
