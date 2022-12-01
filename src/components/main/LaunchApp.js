import React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from './Container';

const LaunchApp = () => {
  return (
    // <Container>
    //   <Box>
    //     <Typography
    //       variant="h4"
    //       color="text.primary"
    //       align={'center'}
    //       gutterBottom
    //       sx={{
    //         fontWeight: 700,
    //       }}
    //     >
    //       Use the tool
    //     </Typography>
    //     <Typography
    //       variant="h6"
    //       component="p"
    //       color="text.secondary"
    //       sx={{ fontWeight: 400 }}
    //       align={'center'}
    //     >
    //       Use the tool
    //     </Typography>
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      justifyContent={'center'}
      marginTop={4}
    >
      <LaunchAppButton />
    </Box>
    //   </Box>
    // </Container>
  );
};

export default LaunchApp;

export const LaunchAppButton = function ({
  canBeFullWidth = true,
  variant = 'contained',
}) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Button
      component={'a'}
      variant={variant}
      color="primary"
      size="large"
      fullWidth={canBeFullWidth && isMd ? false : true}
      href={'/tool'}
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
      Use the tool
    </Button>
  );
};
