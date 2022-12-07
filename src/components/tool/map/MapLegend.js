import Box from '@mui/material/Box';
import { VARLOOKUP } from '../../../constants';

export default function MapLegend({ colorVar, bins, qCols }) {
  // bins[0] to bins[1] points to qCols[1] (but not including bins[1])
  // bins[1] to bins[2] points to qCols[2]
  // bins[bins.length - 2] to bins[bins.length - 1] points to qCols[bins.length] (including bins[bins.length - 1])
  const seq = Array.from(Array(bins.length - 1).keys());
  const prefix = VARLOOKUP[colorVar]?.type === 'currency' ? '$' : '';

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 75,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        background: 'rgba(255, 255, 255, 0.6)',
        fontSize: '12px',
      }}
      marginRight={2}
      marginBottom={2}
    >
      {seq.map((idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{ width: 16, height: 16, backgroundColor: qCols[idx + 1] }}
          ></div>
          <div style={{ marginLeft: 8 }}>{`${prefix}${bins[
            idx
          ].toLocaleString()} \u2013 ${prefix}${bins[
            idx + 1
          ].toLocaleString()}`}</div>
        </div>
      ))}
    </Box>
  );
}
