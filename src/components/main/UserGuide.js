import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LaunchApp from './LaunchApp';
import { USER_GUIDE_CONTENT } from '../../constants';
import YoutubeEmbed from './YoutubeEmbed';

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
            <Grid item container alignItems={'top'} xs={12} sm={6}>
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
                sx={{
                  height: '350px',
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                }}
              >
                <YoutubeEmbed embedId={item.embedId} />
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
