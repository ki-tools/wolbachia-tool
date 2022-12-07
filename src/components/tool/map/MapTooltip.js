import Box from '@mui/material/Box';
import { COLORMENU, VARLOOKUP } from '../../../constants';
import { formatNumber } from '../Table';

export default function MapTooltip({ data, colorVar }) {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', zIndex: 2000 }}>
      <TooltipRow name="name" label="name" value={data.name} />
      {COLORMENU.map((d) => {
        if (d.title) {
          // return <Box key={d.title}>{d.title}</Box>;
          return null;
        }
        const vr = d.option;
        return (
          <TooltipRow
            key={VARLOOKUP[vr].name}
            name={VARLOOKUP[vr].name}
            label={VARLOOKUP[vr].label}
            value={data[vr]}
            colorVar={colorVar}
          />
        );
      })}
    </Box>
  );
}

function TooltipRow({ name, label, value, colorVar }) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: name === colorVar ? 'rgba(0, 0, 0, 0.1)' : '',
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <Box style={{ fontWeight: 600, paddingRight: 6 }}>{label}:</Box>
      <Box>{formatNumber(value, VARLOOKUP[name])}</Box>
    </Box>
  );
}
