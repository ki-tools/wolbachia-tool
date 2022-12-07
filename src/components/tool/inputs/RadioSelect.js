import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import SectionHeader from './SectionHeader';
import { INPUTS } from '../../../constants';

export default function RadioSel({ inputs, nm, handleChange, tooltip }) {
  return (
    <Box paddingBottom={1}>
      <SectionHeader
        title={INPUTS[nm].label}
        style={{ height: 14 }}
        tooltip={tooltip}
      />
      <RadioGroup
        name="radio-buttons-group"
        value={inputs[nm]}
        onChange={(event) => handleChange(event.target.value, nm)}
      >
        {INPUTS[nm].values.map((item, ii) => (
          <StyledFormControlLabel
            key={item}
            value={item}
            control={<Radio size="small" />}
            label={INPUTS[nm].valueLabels[ii]}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiRadio-root': { padding: '4px', marginLeft: '14px' },
  '& .MuiFormControlLabel-label': {
    fontSize: '14px',
  },
}));
