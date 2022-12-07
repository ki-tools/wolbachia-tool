import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import SectionHeader from './SectionHeader';
import { INPUTS } from '../../../constants';

export default function PercentSlider({ inputs, nm, handleChange, tooltip }) {
  const [value, setValue] = useState(inputs[nm] * 100);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box marginBottom={0} marginTop={0}>
      <SectionHeader title={INPUTS[nm].label} tooltip={tooltip} />
      <Box sx={{ width: 262, mt: 1, boxSixing: 'border-box' }}>
        <StyledSlider
          aria-label="effectiveness"
          value={value}
          onChange={handleSliderChange}
          onChangeCommitted={() => handleChange(value, nm)}
          step={1}
          marks={[
            { value: 0, label: '0%' },
            { value: 25, label: '25%' },
            { value: 50, label: '50%' },
            { value: 75, label: '75%' },
            { value: 100, label: '100%' },
          ]}
          min={0}
          max={100}
          valueLabelDisplay="on"
        />
      </Box>
    </Box>
  );
}

const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 11,
    fontWeight: 'normal',
    // fontWeight: 600,
    top: 4,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-markLabel': {
    fontSize: 11,
    top: 25,
    color: '#888888',
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-mark': {
    // display: 'none',
  },
}));
