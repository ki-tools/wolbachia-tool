import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Map from './Map';

export default function Tool({ sections }) {
  const location = useLocation();
  const hash = location.hash;
  const [pop, setPop] = useState(0);
  const [countryCode, setCountryCode] = useState('BGD');

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

  return (
    <Container maxWidth="xl">
      <Map countryCode={countryCode} pop={pop} />
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
