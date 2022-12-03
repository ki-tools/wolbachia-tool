import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { INPUTS } from '../../constants';

const SidebarControls = ({ inputs, setInputs }) => {
  const handleChange = (val, nm) => {
    const newInputs = { ...inputs };
    newInputs[nm] = val;
    setInputs(newInputs);
  };

  // for slider
  const handleChange2 = (val, nm) => {
    const newInputs = { ...inputs };
    newInputs[nm] = val / 100;
    setInputs(newInputs);
  };

  // TARPLN: {
  //   default: 'Population density threshold',
  //   values: ['Population density threshold', 'Disease reduction target'],
  //   inputNames: ['POPDEN', 'REDTAR'],
  //   label: 'Targeting criteria',
  //   helpText: undefined,
  // },
  // POPDEN: {
  //   default: 1500,
  //   values: [250, 500, 1000, 1500],
  //   label: 'Population density',
  //   helpText: undefined,
  // },
  // REDTAR: {
  //   default: 12.5,
  //   values: [12.5, 25, 50, 100],
  //   label: 'Disease reduction target',
  //   helpText: undefined,
  // },
  // TIMFRM: {
  //   default: 1,
  //   values: [1, 5, 10, 20],
  //   label: 'Time frame',
  //   helpText: undefined,
  // },

  return (
    <Box padding={2}>
      <ButtonSelect
        inputs={inputs}
        nm="TARPLN"
        handleChange={handleChange}
        orientation="vertical"
      />
      {inputs.TARPLN === 'POPDEN' && (
        <>
          <RadioSel inputs={inputs} nm="POPDEN" handleChange={handleChange} />
        </>
      )}
      {inputs.TARPLN === 'REDTAR' && (
        <>
          <RadioSel inputs={inputs} nm="REDTAR" handleChange={handleChange} />
        </>
      )}

      <PercentSlider inputs={inputs} nm="COV" handleChange={handleChange2} />
      <PercentSlider inputs={inputs} nm="EFF" handleChange={handleChange2} />

      <ButtonSelect inputs={inputs} nm="PHSACT" handleChange={handleChange} />
      {inputs.PHSACT === 'PHASE' && (
        <>
          <SectionHeader title="Primary Costs" />
          <ValueInput inputs={inputs} nm="PLAN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="PREP" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="PROD" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="DIST" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="REL" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="MONIT" handleChange={handleChange} />
        </>
      )}
      {inputs.PHSACT === 'ACTIVITY' && (
        <>
          <SectionHeader title="Planning Costs" />
          <ValueInput inputs={inputs} nm="WRKPLN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="DETREL" handleChange={handleChange} />
          <SectionHeader title="Preparation Costs" />
          <ValueInput inputs={inputs} nm="COMMUN" handleChange={handleChange} />
          <SectionHeader title="Production Costs" />
          <ValueInput inputs={inputs} nm="FACSET" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="LINCRE" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="MOSPRD" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="QM" handleChange={handleChange} />
          <SectionHeader title="Distribution Costs" />
          <ValueInput inputs={inputs} nm="DELEGG" handleChange={handleChange} />
          <SectionHeader title="Release Costs" />
          <ValueInput inputs={inputs} nm="EGGDEP" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="QA" handleChange={handleChange} />
          <SectionHeader title="Monitoring Costs" />
          <ValueInput inputs={inputs} nm="ADMAN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="COMSEN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="WOLMON" handleChange={handleChange} />
        </>
      )}
      <RadioSel inputs={inputs} nm="TIMFRM" handleChange={handleChange} />
    </Box>
  );
};

export default SidebarControls;

function ButtonSelect({
  inputs,
  nm,
  handleChange,
  orientation = 'horizontal',
}) {
  return (
    <Box paddingBottom={2.5} sx={{ width: '100%' }}>
      <SectionHeader title={INPUTS[nm].label} />
      <ButtonGroup orientation={orientation} sx={{ width: '100%' }}>
        {INPUTS[nm].values.map((item, ii) => (
          <Button
            sx={{ width: '100%' }}
            size="small"
            variant={inputs[nm] === item ? 'contained' : 'outlined'}
            onClick={() => handleChange(item, nm)}
          >
            {INPUTS[nm].valueLabels[ii]}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

function RadioSel({ inputs, nm, handleChange }) {
  return (
    <Box paddingBottom={2}>
      <SectionHeader title={INPUTS[nm].label} />
      <RadioGroup
        name="radio-buttons-group"
        value={inputs[nm]}
        onChange={(event) => handleChange(event.target.value, nm)}
      >
        {INPUTS[nm].values.map((item, ii) => (
          <FormControlLabel
            value={item}
            control={<StyledRadio size="small" />}
            label={INPUTS[nm].valueLabels[ii]}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

const StyledRadio = styled(Radio)(({ theme }) => ({
  // '& .MuiButtonBase-root': {
  //   color: 'red',
  // },
}));

function SectionHeader({ title }) {
  return (
    <Typography
      variant="caption"
      color={'text.secondary'}
      sx={{
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: 1,
        display: 'block',
      }}
    >
      {title}
    </Typography>
  );
}

function ValueInput({ inputs, nm, handleChange }) {
  const label = `${INPUTS[nm].label} ($${INPUTS[
    nm
  ].range[0].toLocaleString()}-$${INPUTS[nm].range[1].toLocaleString()})`;
  return (
    <Box marginBottom={2}>
      <StyledTextField
        sx={{ width: '100%' }}
        label={label}
        variant="standard"
        value={inputs[nm]}
        onChange={(event) => handleChange(event.target.value, nm)}
        type="number"
        size="small"
      />
    </Box>
  );
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: '4px 0 1px',
  },
  '& .MuiInputLabel-root': {
    top: '3px',
  },
}));

function PercentSlider({ inputs, nm, handleChange }) {
  const [value, setValue] = useState(inputs[nm] * 100);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box marginBottom={0.5}>
      <SectionHeader title={INPUTS[nm].label} />
      <Box sx={{ width: 262, mt: 1.5, boxSixing: 'border-box' }}>
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
