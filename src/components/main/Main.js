import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Hero from './Hero';
import UserGuide from './UserGuide';
import DataSources from './DataSources';
import Calculations from './Calculations';
import About from './About';

export default function Main({ sections }) {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace('#', 'sec-');
      const element = document.getElementById(id);
      const yOffset = -100;
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: location.state?.prevPath === '/' ? 'smooth' : 'auto',
        });
      }
    }, 0);
  }, [hash]); // do this on route change

  return (
    <>
      <div id={`sec-${sections[0].hash}`} ref={sections[0].ref}>
        <Hero />
      </div>
      <Container maxWidth="xl">
        <div id={`sec-${sections[1].hash}`} ref={sections[1].ref}>
          <UserGuide />
        </div>
        {/* <Box sx={{ mr: 2, ml: 2 }}>
          {sections.map((section) => (
            <div key={section.name}>
              <h2 id={`sec-${section.hash}`} ref={section.ref}>
                {section.name}
              </h2>
              {Array(15)
                .fill()
                .map((el, ii) => (
                  <p key={ii}>&nbsp;</p>
                ))}
            </div>
          ))}
        </Box> */}
      </Container>
      <div id={`sec-${sections[2].hash}`} ref={sections[2].ref}>
        <DataSources />
      </div>
      <div id={`sec-${sections[3].hash}`} ref={sections[3].ref}>
        <Calculations />
      </div>
      <div id={`sec-${sections[4].hash}`} ref={sections[4].ref}>
        <About />
      </div>
    </>
  );
}
