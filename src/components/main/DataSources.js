/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import LaunchApp from './LaunchApp';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Container from './Container';
// import { useTheme } from '@mui/material/styles';

const content = [
  {
    title: (
      <span>
        Cost ranges for <em>Wolbachia</em> implementation by phase and activity
      </span>
    ),
    text: (
      <div>
        <div>
          Costs have been generalized to common program phases which include
          planning, preparation, production, distribution, release, and
          monitoring, and common activities within those phases. Prior
          cost-effectiveness analyses (
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-020-01638-2"
          >
            Brady et al. 2020
          </Link>
          ) have reported costs per km2 within these phases.
        </div>
        <div>
          <Button
            size={'large'}
            sx={{ marginTop: 1 }}
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            Learn more
          </Button>
        </div>
      </div>
    ),
  },
  {
    title: 'Dengue burden',
    text: (
      <span>
        We relied on modelled raster data for burden as asymptomatic and
        symptomatic dengue and malaria are severely underreported. Symptomatic
        dengue burden was extracted from spatial raster datasets provided by{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.nature.com/articles/nature12060"
        >
          Bhatt et al. 2013
        </Link>
        .
      </span>
    ),
  },
  {
    title: 'Dengue disability',
    text: (
      <span>
        Estimates of DALYs and cases were extracted from{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.healthdata.org/gbd/2019"
        >
          The Institute for Health Metrics and Evaluation (IHME)
        </Link>
        . Based on the national estimates, we calculated the DALYs per dengue
        case.
      </span>
    ),
  },
  {
    title: 'Administrative divisions',
    text: (
      <span>
        Administrative divisions for each secondary administrative unit were
        obtained from{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://data.review.fao.org/map/catalog/srv/api/records/7e6357e6-0893-4b61-a26d-eb09a04eed72"
        >
          GAUL within the Food and Agriculture organization of the UN
        </Link>
        .
      </span>
    ),
  },
  {
    title: 'Population',
    text: (
      <span>
        Population raster spatial datasets were accessed from{' '}
        <Link target="_blank" rel="noreferrer" href="https://www.worldpop.org">
          WorldPop
        </Link>{' '}
        The data used was unconstrained 1 km resolution estimates of population
        count and population density, adjusted to match UN Population estimates
        and measured in units of persons per km2.
      </span>
    ),
  },
  {
    title: 'Effectiveness',
    text: (
      <span>
        The default value for effectiveness was extracted from a recent study in
        Yogyakarta demonstrating that Wolbachia led to a 77% (95% Confidence
        Interval: 65-85%) reduction in dengue incidence (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.nejm.org/doi/full/10.1056/NEJMoa2030243"
        >
          Utarini et al. 2021
        </Link>
        ).
      </span>
    ),
  },
  {
    title: 'Healthcare utilization & cost of illness',
    text: (
      <span>
        Estimates of healthcare utilization for each type of case (hospitalized,
        ambulatory, non-medically attended) were derived from a study evaluating
        the global economic burden of dengue (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://pubmed.ncbi.nlm.nih.gov/27091092/"
        >
          Shepard et al. 2016
        </Link>
        ).
      </span>
    ),
  },
  {
    title: 'Discounting rates',
    text: (
      <span>
        A discount rate of 3% was applied to the costs and benefits for the 5-,
        10-, and 20-year estimates. This discounting rate is recommended by the
        World Health Organization (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://apps.who.int/iris/bitstream/handle/10665/42699/9241546018.pdf?sequence=1"
        >
          Baltussen, 2003
        </Link>
        ).
      </span>
    ),
  },
];

const DataSources = () => {
  return (
    <Box paddingBottom={0} sx={{ backgroundColor: '#f7faff' }}>
      <Container maxWidth="xl" style={{ boxSizing: 'border-box' }}>
        <Box marginBottom={4}>
          {/* <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            Data Sources
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
            Data Sources
          </Typography>
          <Typography
            variant="h6"
            align={'center'}
            color={'text.secondary'}
            data-aos={'fade-up'}
          >
            Information about the data sources used in this tool is provided
            below.
            <br />
            All of the data is available to inspect on GitHub.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {content.map((item, i) => (
              <Grid item sm={12} md={6} xl={4} key={i}>
                <Box
                  component={Card}
                  sx={{ boxSizing: 'border-box' }}
                  padding={4}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                  variant={'outlined'}
                >
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography
                      variant={'h5'}
                      color={'primary'}
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.text}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <LaunchApp />
      </Container>
    </Box>
  );
};

export default DataSources;
