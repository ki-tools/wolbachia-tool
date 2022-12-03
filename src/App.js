import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import useScrollSpy from 'react-use-scrollspy';
import Header from './components/Header';
import Main from './components/main/Main';
import Tool from './components/tool/Tool';
// import 'aos/dist/aos.css';
import useCountryMeta from './services/useCountryMeta';
import { INPUTS } from './constants';

const initialState = {};
Object.entries(INPUTS).forEach(([key, val]) => {
  initialState[key] = val.default;
});

export default function App() {
  const { isLoading, error, data: meta } = useCountryMeta();
  const [countryIndex, setCountryIndex] = useState(0);
  const [inputs, setInputs] = useState(initialState);

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
        name: 'Dengue Burden',
        title: 'What is the dengue burden in my country?',
        hash: 'Section1',
        ref: useRef(null),
      },
      {
        name: 'Where to Focus and Cost',
        title: 'Where should I implement Wolbachia and how much will it cost?',
        hash: 'Section2',
        ref: useRef(null),
      },
      {
        name: 'Reduction Benefits',
        title: 'What are the dengue reduction benefits?',
        hash: 'Section3',
        ref: useRef(null),
      },
      {
        name: 'Additional Benefits',
        title: 'What are additional benefits?',
        hash: 'Section4',
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
      />
      <Routes>
        <Route path="/">
          <Route index element={<Main sections={sections.main} />} />
          <Route
            path="tool"
            element={
              <Tool
                sections={sections.tool}
                countryIndex={countryIndex}
                meta={meta}
                inputs={inputs}
                setInputs={setInputs}
              />
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
