import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Container from './Container';
import { LaunchAppButton } from './LaunchApp';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Box marginBottom={2}>
        <Typography
          color={'primary'}
          component={'span'}
          variant="h3"
          fontWeight={700}
          sx={{
            background: `linear-gradient(180deg, transparent 82%, ${alpha(
              theme.palette.secondary.main,
              0.3
            )} 0%)`,
          }}
        >
          <em>Wolbachia</em>
        </Typography>
        <Typography variant="h3" color="text.primary" sx={{ fontWeight: 700 }}>
          decision-support tool
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          <em>Aedes aegypti</em> mosquitoes infected with naturally occurring{' '}
          <em>Wolbachia</em> bacteria have a reduced ability to transmit dengue
          virus. What it is not known is how to implement and scale up this
          technology to substantially reduce the burden of dengue.
        </Typography>
        <Typography pt={2} variant="h6" component="p" color="text.secondary">
          This tool is designed to support decisions related to{' '}
          <em>Wolbachia</em> implementation and scale-up for global dengue
          control.
        </Typography>
      </Box>
      <Box>
        <LaunchAppButton variant="outlined" />
      </Box>
    </Box>
  );

  const RightSide = () => {
    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'cover',
          },
        }}
      >
        <Box
          component={'img'}
          loading="lazy"
          src={'images/mosquito7.jpg'}
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        // backgroundColor: '#f7faff',
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container sx={{ boxSizing: 'border-box' }}>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 40%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '40%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '60vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Hero;
