import Typography from '@mui/material/Typography';

export default function SectionHeader({ title }) {
  return (
    <Typography
      variant="caption"
      color={'text.secondary'}
      sx={{
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: 1,
        display: 'block',
      }}
    >
      {title}
    </Typography>
  );
}
