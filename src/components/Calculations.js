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

const content = [
  {
    section: 'Dengue burden estimates',
    items: [
      {
        title: 'Total population',
        description: 'To be added',
      },
      {
        title: 'Target population',
        description: 'To be added',
      },
      {
        title: 'Mean dengue incidence',
        description: 'To be added',
      },
      {
        title: 'Total number of cases',
        description: 'To be added',
      },
      {
        title: 'Total number of hospitalized cases',
        description: 'To be added',
      },
      {
        title: 'Total number of ambulatory cases',
        description: 'To be added',
      },
      {
        title: 'Total number of not medically-attended cases',
        description: 'To be added',
      },
    ],
  },
  {
    section: 'Implementation estimates',
    items: [
      {
        title: (
          <span>
            Total population covered by <em>Wolbachia</em>
          </span>
        ),
        description: 'To be added',
      },
      {
        title: 'Total cost',
        description: 'To be added',
      },
      {
        title: 'Mean cost per person',
        description: 'To be added',
      },
      {
        title: 'Area covered by intervention',
        description: 'To be added',
      },
      {
        title: 'Population covered by intervention',
        description: 'To be added',
      },
      {
        title: 'Total cost of intervention',
        description: 'To be added',
      },
      {
        title: 'Cost per person',
        description: 'To be added',
      },
      {
        title: 'Cost per case averted',
        description: 'To be added',
      },
      {
        title: 'Cost per DALY averted',
        description: 'To be added',
      },
    ],
  },
  {
    section: 'Dengue reduction estimates',
    items: [
      {
        title: 'Total cases averted',
        description: 'To be added',
      },
      {
        title: 'Total DALYs averted',
        description: 'To be added',
      },
      {
        title: 'Cases averted',
        description: 'To be added',
      },
      {
        title: 'DALYs averted',
        description: 'To be added',
      },
      {
        title: 'Hospitalized cases averted',
        description: 'To be added',
      },
      {
        title: 'Ambulatory cases averted',
        description: 'To be added',
      },
      {
        title: 'Non-medically attended cases averted',
        description: 'To be added',
      },
    ],
  },
  {
    section: 'Health system & economic benefit estimates',
    items: [
      {
        title: 'Total health system costs averted',
        description: 'To be added',
      },
      {
        title: 'Total economic costs averted',
        description: 'To be added',
      },
      {
        title: 'Direct hospitalized costs averted',
        description: 'To be added',
      },
      {
        title: 'Direct ambulatory costs averted',
        description: 'To be added',
      },
      {
        title: 'Direct not-medically attended costs averted',
        description: 'To be added',
      },
      {
        title: 'Indirect hospitalized costs averted',
        description: 'To be added',
      },
      {
        title: 'Indirect ambulatory costs averted',
        description: 'To be added',
      },
      {
        title: 'Indirect not-medically attended costs averted',
        description: 'To be added',
      },
    ],
  },
];

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
        </Box>
        <Box>
          {content.map((section, j) => (
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
                        <Typography color={'text.secondary'}>
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
