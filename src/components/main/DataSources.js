import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import LaunchApp from './LaunchApp';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Container from './Container';
// import { useTheme } from '@mui/material/styles';
import { DATA_SOURCES_CONTENT } from '../../constants';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DataSources = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: '',
    text: '',
    extraText: '',
  });

  const handleDialogOpen = (content) => {
    setDialogContent(content);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
            {DATA_SOURCES_CONTENT.map((item, i) => (
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
                    <Typography component="div" color="text.secondary">
                      {item.text}
                    </Typography>
                    {item.extraText && (
                      <Box>
                        <Button
                          onClick={() => handleDialogOpen(item)}
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
                      </Box>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <LaunchApp />
      </Container>
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md">
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogContent.text}
            {dialogContent.extraText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataSources;
