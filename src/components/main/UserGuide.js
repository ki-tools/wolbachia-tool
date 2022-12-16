import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import LaunchApp from './LaunchApp';

const content = [
  {
    title: 'How does this tool work?',
    description: (
      <span>
        This video tutorial provides an overview selected of the key features of
        the tool. We highlight how the user can select a country, decide on a
        targeting approach, and input costs, coverage, and effectiveness
        estimates to understand the potential impact of <em>Wolbachia</em>. We
        demonstrate the tool’s ability to provide estimates for the total target
        areas of a country, and for each second Global Administrative Unit Layer
        (GAUL) (e.g., districts) within the country.
      </span>
    ),
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: 'How should I estimate cost inputs?',
    description: (
      <span>
        This video tutorial shows resources within and beyond the tool which may
        assist a user in deriving their own cost estimates for{' '}
        <em>Wolbachia</em> programs.
      </span>
    ),
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: 'What is the dengue burden in my country?',
    description: (
      <span>
        This video tutorial presents how to use the tool to view the estimated
        dengue burden data. We present how the tool calculates dengue burden
        overall and in each relevant administrative unit. This data provides a
        potentially improved understanding of the burden in a country/geography
        given dengue incidence is often under-reported. We would recommend
        reviewing this data prior to deciding about <em>Wolbachia</em>{' '}
        implementation.
      </span>
    ),
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        Where should I target <em>Wolbachia</em> efforts in my country?
      </span>
    ),
    description: (
      <span>
        This video tutorial provides insight on how to use the tool to select
        areas for <em>Wolbachia</em> implementation. We demonstrate how areas
        can be selected using population density thresholds or by disease
        reduction targets. For the population density thresholds, the target
        areas are any areas with population density above or equal to, 250
        people per km², 500 people per km², 1,000 people per km², or 1,500 per
        km². For disease reduction targets, the user can select to reduce 12.5%
        or 25% of the total dengue burden. Estimates on the costs, impact, and
        benefits are provided for the selected target areas.
      </span>
    ),
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
    description: (
      <span>
        This video tutorial describes the disease reduction targeting approach.
        We demonstrate how a user can select two different disease reduction
        targets (12.5% or 25%) and what the associated costs, impact, and
        benefits are for those selected areas in each country.{' '}
      </span>
    ),
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
    description: (
      <span>
        This video tutorial describes how the tool can be used to determine the
        impact of <em>Wolbachia</em> in terms of dengue cases averted and
        Disability-Adjusted Life Years (DALYs) averted. We describe how types of
        cases averted (i.e., cases requiring hospitalization) are estimated.
      </span>
    ),
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
    description: (
      <span>
        This video tutorial describes how the tool can be used to scale up
        <em>Wolbachia</em> in high priority areas. We describe how areas are
        prioritized based on cost-effectiveness (measured by cost per person
        covered by the intervention).
      </span>
    ),
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        What is the estimated total cost to implement <em>Wolbachia</em>?
      </span>
    ),
    description: (
      <span>
        This video tutorial describes how the tool can be used to understand the
        total costs of <em>Wolbachia</em> programs with differing target
        approaches and input parameter assumptions such as cost, coverage, and
        effectiveness. We describe how costs can be refined for different cost
        scenarios and what the impact might be on the overall costs.
      </span>
    ),
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title:
      'What is the estimated cost for each phase (i.e., planning, preparation, production, distribution, release, monitoring)?',
    description: (
      <span>
        This video tutorial describes how the tool can be used to understand the
        phase-specific costs of <em>Wolbachia</em> programs with differing
        target approaches and input parameter assumptions. We describe how costs
        can be refined for different cost scenarios and what the impact might be
        on the overall phase-specific costs.
      </span>
    ),
    illustration: 'images/placeholder.svg',
    icon: <HelpIcon color="primary" />,
  },
  {
    title: (
      <span>
        What will the other benefits, including reductions in (DALYs) and
        economic losses be due to <em>Wolbachia</em> implementation?
      </span>
    ),
    description: (
      <span>
        This video tutorial describes how the tool estimates additional benefits
        of <em>Wolbachia</em> program implementation. We describe how estimates
        such as DALYs, averted health system costs, and averted economic costs
        are developed.
      </span>
    ),
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
          Please see the descriptions and video tutorials for guidance on how to
          use the tool for key implementation decisions.
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
