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
      <Container maxWidth="lg" style={{ boxSizing: 'border-box' }}>
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
          <Card elevation={0} sx={{ padding: 4 }}>
            <Typography
              variant="h6"
              align={'left'}
              color={'text.secondary'}
              data-aos={'fade-up'}
            >
              <Box paddingBottom={2}>
                The goal of this tool is to provide data to support decisions
                related to the implementation and scale-up of <em>Wolbachia</em>{' '}
                Replacement Technology for dengue control globally. This tool is
                flexible, allowing the user to input estimated costs,
                effectiveness, coverage, disease reduction targets, and
                constraints to estimate the impact and costs for their context.{' '}
              </Box>

              <Box paddingBottom={2}>
                Efforts were made to ensure that this tool can be used by
                various decision-makers considering <em>Wolbachia</em>{' '}
                Replacement Technology implementation. Intended users include
                in-country policy makers, dengue program managers, funders, and
                implementers.{' '}
              </Box>

              <Box>
                This tool generates data to support decisions globally. The tool
                is not intended to provide exact figures but can support
                decision making by providing plausible values that the user can
                interpret and estimate by adjusting to local contexts. Without
                data on the estimated impacts and costs, there is a risk that
                mosquito release programs will not be implemented in areas where
                there is the greatest need and payoff for investments.{' '}
              </Box>
            </Typography>
          </Card>
        </Box>{' '}
        <Box marginBottom={3}>
          <Card elevation={0}>
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
                  begin immediately after programs are initiated. In reality,
                  there might be a slight longer lag to impact given the
                  preparation required before <em>Wolbachia</em>-containing
                  mosquitoes and eggs are released. Relatedly, we had to make
                  some assumptions about the costs over time. We assumed that
                  the program would require high resources for the first three
                  years of implementation and then be sustained at a low cost
                  for the following years. These were based on meetings with
                  implementers and represent the best estimates to date.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card elevation={0}>
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
        <Box>
          <Card elevation={0}>
            <CardContent sx={{ padding: 4 }}>
              <Box>
                <Typography
                  variant={'h5'}
                  sx={{ fontWeight: 700, pb: 1 }}
                  align={'center'}
                  gutterBottom
                >
                  Acknowledgements
                </Typography>
                <Typography
                  variant="h6"
                  align={'left'}
                  color={'text.secondary'}
                  data-aos={'fade-up'}
                >
                  We would like to acknowledge the many organizations and
                  individuals who made this tool and prior iterations of the
                  tool possible:
                  <ul>
                    <li>
                      START Center team members (Aldina Mesic, William Sheahan,
                      Jairam Lingappa, Andrew Secor, Mohamed Albirair, and Paul
                      Drain).
                    </li>
                    <li>
                      START Center Operations and Leadership (Lauren Adjumani,
                      Noel Daniel, Stephen Hawes).{' '}
                    </li>
                    <li>
                      The Bill and Melinda Gates Foundation (Steve Kern, Christy
                      Hanson, Kayla Laserson, and Harmony Chartier).{' '}
                    </li>
                    <li>The Preva Group (Ryan Hafen)</li>
                    <li>The Arcady Group (Bruce Thomas)</li>
                    <li>
                      The London School of Hygiene and Tropical Medicine (Oliver
                      Brady)
                    </li>
                    <li>
                      Linksbridge SPC (Mike Osberg, Dena Seabrook, Sheldon
                      Halsted, Mira Sytsma)
                    </li>
                    <li>
                      World Mosquito Program (Katie Anders, Bryan Callahan,
                      Reynold Dias)
                    </li>
                    <li>World Health Organization (Raman Velayudhan)</li>
                    <li>
                      Foundation of the National Institutes of Health (Michael
                      Santos, Susan Wiener)
                    </li>
                    <li>Brandeis University (Donald Shepard)</li>
                    <li>Management Sciences for Health (Damian Walker)</li>
                    <li>
                      Imperial College London (Hugo Turner, John Mumford, Megan
                      Quinlan, Adrian Leach, Austin Burt)
                    </li>
                    <li>Keele University (Frederic Tripet)</li>
                  </ul>
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
