import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { INPUTS } from '../../constants';

export default function ValInput({ inputs, nm, handleChange }) {
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
        onChange={(event) => handleChange(Number(event.target.value), nm)}
        type="number"
        size="small"
      />
    </Box>
  );
}

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: '4px 0 1px',
  },
  '& .MuiInputLabel-root': {
    top: '3px',
  },
}));
