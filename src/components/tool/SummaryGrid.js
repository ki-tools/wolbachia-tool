import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Summary from './Summary';

export default function SummaryGrid({ items, tots }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: '#ffffff',
        fontSize: '26px',
        fontWeight: 700,
      }}
      marginBottom={2}
    >
      <Grid container spacing={0}>
        {items.map((d) => (
          <Summary key={d.title} item={d} val={tots[d.var]} />
        ))}
      </Grid>
    </Box>
  );
}
