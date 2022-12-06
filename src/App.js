import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import useScrollSpy from 'react-use-scrollspy';
import Header from './components/Header';
import Main from './components/main/Main';
import Tool from './components/tool/Tool';
// import 'aos/dist/aos.css';
import useCountryMeta from './services/useCountryMeta';
import { INPUTS, SECTEXT } from './constants';

const initialState = {};
Object.entries(INPUTS).forEach(([key, val]) => {
  initialState[key] = val.default;
});

export default function App() {
  const { isLoading, error, data: meta } = useCountryMeta();
  const [countryIndex, setCountryIndex] = useState(0);
  const [inputs, setInputs] = useState(initialState);

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
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
        tblTitle: 'Dengue burden estimates',
        text: SECTEXT.BURDEN,
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
        tblTitle: 'Implementation estimates',
        text: SECTEXT.IMPLEMENTATION,
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
        tblTitle: 'Dengue reduction estimates',
        text: SECTEXT.REDUCTION,
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
        tblTitle: 'Health system & economic benefit estimates',
        text: SECTEXT.ADDBENEFITS,
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
    <div>
      <Header
        sections={sections}
        activeMainSection={activeMainSection}
        activeToolSection={activeToolSection}
        countryIndex={countryIndex}
        setCountryIndex={setCountryIndex}
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
                    countryIndex={countryIndex}
                    meta={meta}
                    inputs={inputs}
                    setInputs={setInputs}
                    openSidebar={openSidebar}
                    handleSidebarClose={handleSidebarClose}
                  />
                )}
              </>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
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
