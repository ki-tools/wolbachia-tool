import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';

export default function InputTooltip({ text }) {
  if (!text) {
    return null;
  }
  return (
    <Tooltip
      disableFocusListener
      title={<span style={{ fontSize: '14px' }}>{text}</span>}
      placement="right"
      arrow
    >
      <Box
        sx={{
          display: 'inline-block',
          verticalAlign: 'bottom',
          paddingLeft: 0.5,
        }}
      >
        <IconButton size="small">
          <InfoIcon sx={{ fontSize: '16px' }} />
        </IconButton>
      </Box>
    </Tooltip>
  );
}
