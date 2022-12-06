import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import SectionHeader from './SectionHeader';
import { INPUTS } from '../../constants';
import ValInput from './ValInput';

export default function BudgetConstraint({ inputs, setInputs, handleChange }) {
  const handleCheck = (event) => {
    const newInputs = { ...inputs };
    newInputs.CONSTR = event.target.checked;
    if (event.target.checked) {
      newInputs.CNSTRAMT = 1000000;
    }
    setInputs(newInputs);
  };

  return (
    <Box paddingBottom={1}>
      <FormGroup>
        <FormControlLabel
          sx={{
            '& .MuiFormControlLabel-label': {
              paddingTop: '8px',
            },
          }}
          control={<Checkbox checked={inputs.CONSTR} onChange={handleCheck} />}
          label={<SectionHeader title={INPUTS.CONSTR.label} />}
        />
      </FormGroup>
      {inputs.CONSTR && (
        <ValInput inputs={inputs} nm="CNSTRAMT" handleChange={handleChange} />
      )}
    </Box>
  );
}
