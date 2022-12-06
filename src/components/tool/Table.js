import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { VARS, TABLES } from '../../constants';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      {/* <GridToolbarColumnsButton /> */}
      {/* <GridToolbarFilterButton /> */}
      {/* <GridToolbarDensitySelector /> */}
      <GridToolbarExport csvOptions={{ fileName: 'wolbachia_tool_export' }} />
      <Box sx={{ flex: 1 }} />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

export default function Table({ data, which, sec }) {
  const columns = useMemo(() => {
    return TABLES[which].map((d) => {
      const curVar = VARS.filter((el) => el.name === d)[0];
      const type = curVar.type === 'currency' ? 'number' : curVar.type;
      const res = {
        type: type,
        field: curVar.name,
        width: curVar.width || 170,
        headerName: curVar.label,
        headerClassName: type === 'number' ? 'rightHeader' : '',
      };
      if (type === 'number') {
        res.valueFormatter = ({ value }) => {
          if (value == null) {
            return '';
          }
          const val = value.toLocaleString(undefined, {
            minimumFractionDigits: curVar.digits,
            maximumFractionDigits: curVar.digits,
          });
          const prefix = curVar.type === 'currency' ? '$' : '';
          return `${prefix}${val}`;
        };
      }
      return res;
    });
  }, [which]);

  return (
    // height: 455
    <Box sx={{ width: '100%' }}>
      <Box sx={{ backgroundColor: '#444444' }} padding={2}>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: '18px',
            textTransform: 'uppercase',
          }}
        >
          {sec.tblTitle}
        </Typography>
        <Typography sx={{ color: 'white' }}>{sec.text}</Typography>
      </Box>
      <DataGrid
        getRowId={(row) => row.gaul_code}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        disableSelectionOnClick
        headerHeight={90}
        autoHeight
        density="compact"
        components={{ Toolbar: CustomToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            printOptions: { disableToolbarButton: true },
          },
        }}
        sx={{
          '& .MuiDataGrid-cell': {
            fontFamily: 'PT Mono',
            fontSize: '14px',
          },
          '& .MuiDataGrid-columnHeaderTitleContainerContent': {
            padding: 1,
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            textOverflow: 'clip',
            whiteSpace: 'normal',
            lineHeight: 1.1,
            fontWeight: 700,
          },
          '& .rightHeader': {
            textAlign: 'end',
          },
        }}
      />
    </Box>
  );
}
