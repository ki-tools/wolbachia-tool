import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Map from './Map';

// import Container from '../main/Container';
import Sidebar from './Sidebar';

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
  const [pop, setPop] = useState(0);

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

  if (!meta) {
    return null;
  }

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
        >
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box flex="1 1 auto" height="100%" overflow="auto" padding={2}>
              <Map countryCode={Object.keys(meta)[countryIndex]} pop={pop} />

              {/* <Divider />
              <Container paddingY={4}>
                <Footer />
              </Container> */}
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );

  return (
    <Container maxWidth="xl">
      <Map countryCode={Object.keys(meta)[countryIndex]} pop={pop} />
      <Box sx={{ mr: 2, ml: 2 }}>
        {sections.map((section) => (
          <div key={section.name}>
            <h2 id={`sec-${section.hash}`} ref={section.ref}>
              {section.title}
            </h2>
            {Array(15)
              .fill()
              .map((el, ii) => (
                <p key={ii}>&nbsp;</p>
              ))}
          </div>
        ))}
      </Box>
    </Container>
  );
}
