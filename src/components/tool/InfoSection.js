import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function InfoSection({ sec, title = true }) {
  return (
    <Box sx={{ backgroundColor: '#444444' }} padding={2}>
      <Typography
        sx={{
          color: 'white',
          fontWeight: 700,
          fontSize: '18px',
          textTransform: 'uppercase',
          display: title ? 'initial' : 'none',
        }}
      >
        {sec.infoTitle}
      </Typography>
      <Typography sx={{ color: 'white' }}>{sec.text}</Typography>
    </Box>
  );
}
