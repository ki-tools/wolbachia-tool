import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { NumericFormat } from 'react-number-format';
import { styled } from '@mui/material/styles';
import { INPUTS } from '../../constants';

export default function ValInput({ inputs, nm, handleChange }) {
  let label;
  if (INPUTS[nm].range) {
    label = `${INPUTS[nm].label} ($${INPUTS[
      nm
    ].range[0].toLocaleString()}-$${INPUTS[nm].range[1].toLocaleString()})`;
  } else {
    label = INPUTS[nm].label;
  }

  const materialUiTextFieldProps = {
    required: true,
    label,
    variant: 'standard',
    size: 'small',
    fullWidth: true,
    InputProps: {
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
    sx: {
      '& .MuiInput-input': { padding: 0 },
      '& .MuiInputLabel-root': {
        top: '1px',
      },
    },
  };

  if (INPUTS[nm].range) {
    materialUiTextFieldProps.error =
      inputs[nm] < INPUTS[nm].range[0] || inputs[nm] > INPUTS[nm].range[1];
  }

  return (
    <Box marginBottom={2}>
      <NumericFormat
        value={inputs[nm]}
        customInput={TextField}
        onValueChange={(event) => {
          handleChange(Number(event.floatValue), nm);
        }}
        thousandSeparator=","
        decimalSeparator="."
        {...materialUiTextFieldProps}
      />
    </Box>
  );
}

export const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-input': {
    padding: '4px 0 1px',
  },
  '& .MuiInputLabel-root': {
    top: '3px',
  },
}));
