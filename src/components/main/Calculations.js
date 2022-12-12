/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Container from './Container';
// import { useTheme } from '@mui/material/styles';
import LaunchApp from './LaunchApp';
import { CALCS, CALCKEY } from '../../constants';

const Calculations = () => {
  return (
    <Box>
      <Container maxWidth="xl" style={{ boxSizing: 'border-box' }}>
        <Box marginBottom={3}>
          {/* <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            Calculations
          </Typography> */}
          <Typography
            variant="h4"
            align={'center'}
            data-aos={'fade-up'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Calculations
          </Typography>
          <Typography
            variant="h6"
            align={'center'}
            color={'text.secondary'}
            data-aos={'fade-up'}
          >
            Information about calculations and assumptions used in the tool is
            provided below.
          </Typography>
          <Typography
            variant="h6"
            align={'center'}
            color={'text.secondary'}
            data-aos={'fade-up'}
          >
            For any 5-, 10-, or 20-year estimates, all costs / benefits are
            multiplied by the year.
          </Typography>{' '}
          <Box align="center" pt={3}>
            {Object.values(CALCKEY).map((d, ii) => (
              <Typography key={ii} sx={{ color: d.color, fontWeight: 700 }}>
                {d.name}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box>
          {CALCS.map((section, j) => (
            <Box key={j}>
              <Typography
                paddingBottom={1}
                paddingTop={4}
                variant="h5"
                color={'primary'}
                sx={{ fontWeight: 800 }}
              >
                {section.section}
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  {section.items.map((item, i) => (
                    <Grid key={i} item xs={12} md={6}>
                      <Paper
                        elevation={0}
                        sx={{ padding: 1, backgroundColor: '#f7faff' }}
                      >
                        <Typography
                          variant={'h6'}
                          gutterBottom
                          sx={{ fontWeight: 700 }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          color={'text.secondary'}
                          sx={{ fontWeight: 700 }}
                        >
                          {item.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>
        <LaunchApp />
      </Container>
    </Box>
  );
};

export default Calculations;
