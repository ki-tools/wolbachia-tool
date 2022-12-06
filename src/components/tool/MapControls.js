import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';

import { COLORMENU, VARLOOKUP } from '../../constants';

export default function MapControls() {
  const [colorVar, setColorVar] = useState('costperperson');

  const handleChange = (event) => {
    setColorVar(event.target.value);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 1000,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
      }}
      marginRight={2}
      padding={0.2}
    >
      <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel id="color-select">Color by</InputLabel>
        <Select
          labelId="color-select"
          id="color-select"
          value={colorVar}
          label="Color by"
          onChange={handleChange}
        >
          {COLORMENU.map((d) => {
            if (d.title) {
              return (
                <ListSubheader
                  key={d.title}
                  sx={{
                    backgroundColor: '#efefef',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {d.title}
                </ListSubheader>
              );
            }
            const vr = d.option;
            return (
              <MenuItem key={VARLOOKUP[vr].name} value={VARLOOKUP[vr].name}>
                {VARLOOKUP[vr].label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
