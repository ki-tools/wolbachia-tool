import React from 'react';
import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from './Container';
import LaunchApp from './LaunchApp';

const PromoNumbers = () => {
  const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <Box sx={{ backgroundColor: '#f7faff' }}>
      <Container maxWidth="lg">
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
            About this tool
          </Typography>
          <Card sx={{ padding: 4 }}>
            <Typography
              variant="h6"
              align={'left'}
              color={'text.secondary'}
              data-aos={'fade-up'}
            >
              <Box paddingBottom={2}>
                The goal of this tool is to provide data to support decisions
                related to the implementation and scale-up of Wolbachia for
                dengue control globally. This tool is flexible, allowing the
                user to input estimated costs, effectiveness, coverage, disease
                reduction targets, and constraints to estimate the impact and
                costs for their context.{' '}
              </Box>

              <Box paddingBottom={2}>
                Efforts were made to ensure that this tool can be used by
                various decision-makers considering Wolbachia implementation.
                Intended users include in-country policy makers, dengue program
                managers, funders, and implementers.{' '}
              </Box>

              <Box>
                This tool generates data to support decisions globally. Without
                data on the estimated impacts and costs, there is a risk that
                mosquito release programs will not be implemented in areas where
                there is the greatest need and payoff for investments.{' '}
              </Box>
            </Typography>
          </Card>
        </Box>{' '}
        <Box marginBottom={3}>
          <Card>
            <CardContent sx={{ padding: 4 }}>
              <Box>
                <Typography
                  variant={'h5'}
                  sx={{ fontWeight: 700 }}
                  align={'center'}
                  gutterBottom
                >
                  Limitations
                </Typography>
                <Typography
                  variant="h6"
                  align={'left'}
                  color={'text.secondary'}
                  data-aos={'fade-up'}
                >
                  There are a few limitations to note in this tool. Although we
                  used the most recent available estimates for input parameters
                  (i.e., dengue incidence, cost of illness), these may not
                  reflect values in 2022. Given lack of consensus on the best
                  approaches for adjusting costs or modelling dengue incidence
                  spatially, we opted to use estimates from the original data
                  sources. On long-term assumptions, we assume for benefits to
                  begin six months after programs begin. In reality, there might
                  be a slight longer lag to impact given the preparation
                  required before Wolbachia-containing mosquitoes and eggs are
                  released. Relatedly, we had to make some assumptions about the
                  costs over time. These were based on academic literature and
                  from meetings with implementers and represent the best
                  estimates to date.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent sx={{ padding: 4 }}>
              <Box>
                <Typography
                  variant={'h5'}
                  sx={{ fontWeight: 700 }}
                  align={'center'}
                  gutterBottom
                >
                  App development
                </Typography>
                <Typography
                  variant="h6"
                  align={'left'}
                  color={'text.secondary'}
                  data-aos={'fade-up'}
                >
                  This tool was developed by the Strategic Analysis, Research &
                  Training (START) Center in the Department of Global Health at
                  the University of Washington with support from the Bill and
                  Melinda Gates Foundation. Questions regarding the data
                  sources, calculations, and use cases can be directed to Aldina
                  Mesic (amesic@uw.edu). Questions regarding the code and
                  deployment can be directed to Ryan Hafen
                  (rhafen@prevagroup.com)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <LaunchApp />
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default PromoNumbers;
