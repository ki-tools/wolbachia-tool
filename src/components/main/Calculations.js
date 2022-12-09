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

// ['#76B7B2', '#E15759', '#F28E2B', '#59A14F', '#B07AA1', '#4E79A7'];

function PreDef({ children }) {
  return <span style={{ color: '#59A14F' }}>{children}</span>;
}

function UserInput({ children }) {
  return <span style={{ color: '#F28E2B' }}>{children}</span>;
}

function Calc({ children }) {
  return <span style={{ color: '#E15759' }}>{children}</span>;
}

function Times() {
  return <> &times; </>;
}

const content = [
  {
    section: 'Dengue burden estimates',
    items: [
      {
        title: 'Total population',
        description: (
          <PreDef>Total population in the administrative level 2 area</PreDef>
        ),
      },
      {
        title: 'Target population',
        description: (
          <>
            <PreDef>
              Total population in the 'target' of the administrative 2 area
            </PreDef>
            <Times />
            <UserInput>coverage</UserInput>
          </>
        ),
      },
      {
        title: 'Mean dengue incidence',
        description: (
          <PreDef>Total dengue incidence in the administrative 2 area</PreDef>
        ),
      },
      {
        title: 'Total number of cases',
        description: (
          <>
            <PreDef>Total population in the administrative 2 area</PreDef>
            <Times />
            <UserInput>coverage</UserInput>
            <Times />
            <PreDef>Total dengue incidence in the administrative 2 area</PreDef>
            <Box>
              {' '}
              <em>
                For 5, 10,and 20 year estimates, the cases are multiplied by 5,
                10, and 20 respectively.
              </em>
            </Box>
          </>
        ),
      },
      {
        title: 'Total number of hospitalized cases',
        description: (
          <>
            <Calc>Total number of cases</Calc>
            <Times />
            <PreDef>
              percentage of cases seeking care in hospitalized setting
            </PreDef>
          </>
        ),
      },
      {
        title: 'Total number of ambulatory cases',
        description: (
          <>
            <Calc>Total number of cases</Calc>
            <Times />
            <PreDef>
              percentage of cases seeking care in an outpatient setting
            </PreDef>
          </>
        ),
      },
      {
        title: 'Total number of not medically-attended cases',
        description: (
          <>
            <Calc>Total number of cases</Calc>
            <Times />
            <PreDef>
              percentage of cases seeking care in a non-medical setting
            </PreDef>
          </>
        ),
      },
    ],
  },
  {
    section: 'Implementation estimates',
    items: [
      {
        title: 'Area covered by intervention',
        description: (
          <>
            <PreDef>target area</PreDef>
            <Times />
            <UserInput>coverage</UserInput>
          </>
        ),
      },
      {
        title: 'Population covered by intervention',
        description: (
          <>
            <PreDef>target population</PreDef>
            <Times />
            <UserInput>coverage</UserInput>
          </>
        ),
      },
      {
        title: 'Total cost (phase-based)',
        description: (
          <>
            (<UserInput>cost of planning</UserInput> +{' '}
            <UserInput>cost of preparation</UserInput> +{' '}
            <UserInput>cost of production</UserInput> +{' '}
            <UserInput>cost of distribution</UserInput> +{' '}
            <UserInput>cost of release</UserInput> +{' '}
            <UserInput>cost of monitoring</UserInput>) <Times /> (
            <PreDef>target area</PreDef>
            <Times /> <UserInput>coverage</UserInput>)
          </>
        ),
      },
      {
        title: 'Total cost (activity-based)',
        description: (
          <>
            (<UserInput>define workplan and budget</UserInput> +{' '}
            <UserInput>determine release methodology</UserInput> +{' '}
            <UserInput>enroll community participation</UserInput> +{' '}
            <UserInput>facility setup</UserInput> +{' '}
            <UserInput>mosquito line creation</UserInput> +{' '}
            <UserInput>mosquito production</UserInput> +{' '}
            <UserInput>quality management and control</UserInput> +{' '}
            <UserInput>deliver eggs/adults to distribution points</UserInput> +{' '}
            <UserInput>egg/adult deployments</UserInput> +{' '}
            <UserInput>quality assurance</UserInput> +{' '}
            <UserInput>adaptive management</UserInput> +{' '}
            <UserInput>measure community sentiment</UserInput> +{' '}
            <UserInput>monitoring in the field</UserInput>) <Times /> (
            <PreDef>target area</PreDef>
            <Times /> <UserInput>coverage</UserInput>)
          </>
        ),
      },
      {
        title: 'Mean cost per person',
        description: (
          <>
            <Calc>total cost</Calc> /{' '}
            <Calc>population covered by intervention</Calc>
          </>
        ),
      },
      {
        title: 'Area covered by intervention',
        description: <></>,
      },
      {
        title: 'Population covered by intervention',
        description: <></>,
      },
      {
        title: 'Total cost of intervention',
        description: <></>,
      },
      {
        title: 'Cost per person',
        description: <></>,
      },
      {
        title: 'Cost per case averted',
        description: <></>,
      },
      {
        title: 'Cost per DALY averted',
        description: <></>,
      },
    ],
  },
  {
    section: 'Dengue reduction estimates',
    items: [
      {
        title: 'Total cases averted',
        description: <></>,
      },
      {
        title: 'Total DALYs averted',
        description: <></>,
      },
      {
        title: 'Cases averted',
        description: <></>,
      },
      {
        title: 'DALYs averted',
        description: <></>,
      },
      {
        title: 'Hospitalized cases averted',
        description: <></>,
      },
      {
        title: 'Ambulatory cases averted',
        description: <></>,
      },
      {
        title: 'Non-medically attended cases averted',
        description: <></>,
      },
    ],
  },
  {
    section: 'Health system & economic benefit estimates',
    items: [
      {
        title: 'Total health system costs averted',
        description: <></>,
      },
      {
        title: 'Total economic costs averted',
        description: <></>,
      },
      {
        title: 'Direct hospitalized costs averted',
        description: <></>,
      },
      {
        title: 'Direct ambulatory costs averted',
        description: <></>,
      },
      {
        title: 'Direct not-medically attended costs averted',
        description: <></>,
      },
      {
        title: 'Indirect hospitalized costs averted',
        description: <></>,
      },
      {
        title: 'Indirect ambulatory costs averted',
        description: <></>,
      },
      {
        title: 'Indirect not-medically attended costs averted',
        description: <></>,
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
          <Typography
            variant="h6"
            align={'center'}
            color={'text.secondary'}
            data-aos={'fade-up'}
          >
            For any 5-, 10-, or 20-year estimates, all costs / benefits are
            multiplied by the year.
          </Typography>{' '}
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
