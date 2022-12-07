import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputTooltip from './InputTooltip';

export default function SectionHeader({ title, tooltip, ...props }) {
  return (
    <Box>
      <Typography
        variant="caption"
        color={'text.secondary'}
        sx={{
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: 1,
          display: 'block',
        }}
        {...props}
      >
        {title}
        {tooltip && <InputTooltip text={tooltip} />}
      </Typography>
    </Box>
  );
}
