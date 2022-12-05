import { useMemo } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { VARS, TABLES } from '../../constants';

export default function Table({ data, which }) {
  const rows = useMemo(() => data[which], [data, which]);
  const columns = useMemo(() => {
    return TABLES[which].map((d) => {
      const curVar = VARS.filter((el) => el.name === d)[0];
      const res = {
        type: curVar.type,
        field: curVar.name,
        width: 150,
        headerName: curVar.label,
      };
      if (curVar.type === 'number') {
        res.valueFormatter = ({ value }) => {
          if (value == null) {
            return '';
          }
          const val =
            Math.round(value * 10 ** curVar.digits) / 10 ** curVar.digits;
          return val.toLocaleString();
        };
      }
      return res;
    });
  }, [which]);

  return (
    <Box sx={{ height: 455, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.gaul_code}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        disableSelectionOnClick
        density="compact"
        sx={{
          fontFamily: 'PT Mono',
          fontSize: '14px',
          '& .MuiDataGrid-columnHeaderTitle': {
            textOverflow: 'clip',
            whiteSpace: 'break-spaces',
            lineHeight: 1,
          },
        }}
      />
    </Box>
  );
}
