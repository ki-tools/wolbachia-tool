import { useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useScrollSpy from 'react-use-scrollspy';
import Header from './components/Header';
import Main from './components/main/Main';
import Tool from './components/tool/Tool';
// import 'aos/dist/aos.css';

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: `"Nunito Sans", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    action: {
      selected: 'red',
      selectedOpacity: 0.5,
    },
    alternate: {
      main: '#f7faff',
      dark: '#edf1f7',
    },
    cardShadow: 'rgba(23, 70, 161, .11)',
    mode: 'light',
    primary: {
      main: '#377dff',
      light: '#467de3',
      dark: '#2f6ad9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb74d',
      main: '#f9b934',
      dark: '#FF9800',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    text: {
      primary: '#1e2022',
      secondary: '#677788',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#ffffff',
      default: '#ffffff',
      level2: '#f5f5f5',
      level1: '#ffffff',
    },
  },
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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
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
