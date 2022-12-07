import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';

export default function InputTooltip({ text }) {
  // if (!text) {
  // return null;
  // }
  return (
    <Tooltip
      title={<span style={{ fontSize: '12px' }}>{text}</span>}
      placement="right"
      arrow
    >
      <Box
        sx={{
          display: 'inline-block',
          // verticalAlign: 'top',
          paddingLeft: 1,
        }}
      >
        <InfoIcon sx={{ fontSize: '16px' }} />
      </Box>
    </Tooltip>
  );
}
