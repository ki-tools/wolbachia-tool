import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import LaunchApp from './LaunchApp';

const content = [
  {
    title: 'What is the dengue burden in my country?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        Where should I target <em>Wolbachia</em> efforts in my country?
      </span>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        Where should I scale up <em>Wolbachia</em> to achieve dengue reduction
        targets (i.e., 25% reduction in cases of dengue) in my country?
      </span>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        What will the impacts, in terms of disease reduction, be to scale up{' '}
        <em>Wolbachia</em> nationally?
      </span>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        What will the impacts, in terms of disease reduction, be to scale up{' '}
        <em>Wolbachia</em> nationally with a budget constraint?
      </span>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        What is the estimated total cost to implement <em>Wolbachia</em>?
      </span>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title:
      'What is the estimated cost for each phase (i.e., planning, preparation, production, distribution, release, monitoring)?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        What will the other benefits, including reductions in
        Disability-Adjusted Life Years (DALYs) and economic losses be due to{' '}
        <em>Wolbachia</em> implementation?
      </span>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
];

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
          Enter key implementation decisions to view the calculated supporting
          information.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {content.map((item, i) => (
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
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
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
                component={'img'}
                src={item.illustration}
                alt={item.title}
                width={1}
                maxWidth={'80%'}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <LaunchApp />
    </Box>
  );
};

export default UserGuide;
