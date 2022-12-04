import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { INPUTS } from '../../constants';
import SectionHeader from './SectionHeader';

export default function ButtonSelect({
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
            key={item}
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
