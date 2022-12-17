import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { INPUTS } from '../../../constants';
import SectionHeader from './SectionHeader';

export default function ButtonSelect({
  meta,
  inputs,
  nm,
  handleChange,
  orientation = 'horizontal',
  pb = 2.5,
  tooltip,
}) {
  const disabled = [false, false];
  if (nm === 'TARPLN') {
    disabled[0] = !(meta.data?.POPDEN.length > 0);
    disabled[1] = !(meta.data?.DISRED.length > 0);
  }

  return (
    <Box paddingBottom={pb} sx={{ width: '100%' }}>
      <SectionHeader title={INPUTS[nm].label} tooltip={tooltip} />
      <ButtonGroup orientation={orientation} sx={{ width: '100%' }}>
        {INPUTS[nm].values.map((item, ii) => (
          <Button
            key={item}
            sx={{ width: '100%' }}
            size="small"
            variant={inputs[nm] === item ? 'contained' : 'outlined'}
            onClick={() => handleChange(item, nm)}
            disabled={disabled[ii]}
          >
            {INPUTS[nm].valueLabels[ii]}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
