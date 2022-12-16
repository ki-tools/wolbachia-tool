import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LaunchApp from './LaunchApp';
import { USER_GUIDE_CONTENT } from '../../constants';

const UserGuide = () => {
  return (
    <Box paddingTop={10} paddingBottom={4}>
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
          Our work
        </Typography> */}
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
          How to use the tool
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
          Please see the descriptions and video tutorials for guidance on how to
          use the tool for key implementation decisions.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {USER_GUIDE_CONTENT.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={i}
            item
            container
            xs={12}
            spacing={4}
            direction={i % 2 === 1 ? 'row-reverse' : 'row'}
          >
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                {/* {item.icon} */}
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700, fontSize: 24 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 18 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Box
                maxWidth={'80%'}
                sx={{
                  position: 'relative',
                  margin: 1,
                  borderRadius: 2,
                }}
              >
                <Box
                  component={'img'}
                  src={item.illustration}
                  alt={item.title}
                  width={1}
                  sx={{
                    borderRadius: 2,
                    boxShadow:
                      'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                />
                <Box
                  width={1}
                  sx={{
                    pl: 2,
                    pr: 2,
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '15%',
                    background: 'rgba(255, 255, 255, 0.4)',
                    color: '#777',
                    left: 0,
                    textAlign: 'center',
                    fontSize: { xs: 25, sm: 20, lg: 30 },
                    fontWeight: 800,
                  }}
                >
                  Video tutorial coming soon
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <LaunchApp />
    </Box>
  );
};

export default UserGuide;
