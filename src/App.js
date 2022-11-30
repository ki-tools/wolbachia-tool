import { useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useScrollSpy from 'react-use-scrollspy';
import Header from './components/Header';
import Main from './components/Main';
import Tool from './components/Tool';

const theme = createTheme({
  typography: {
    fontFamily: `"Nunito Sans", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    action: {
      selected: 'red',
      selectedOpacity: 0.5,
    },
  },
  // palette: {
  //   primary: {
  //     // main: purple[500],
  //   },
  //   secondary: {
  //     // main: green[500],
  //   },
  // },
});

export default function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header
          sections={sections}
          activeMainSection={activeMainSection}
          activeToolSection={activeToolSection}
        />
        <Routes>
          <Route path="/">
            <Route index element={<Main sections={sections.main} />} />
            <Route path="tool" element={<Tool sections={sections.tool} />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
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
