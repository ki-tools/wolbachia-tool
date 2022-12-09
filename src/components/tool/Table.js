import { useMemo } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridFooterContainer,
  GridPagination,
} from '@mui/x-data-grid';
import InfoSection from './InfoSection';
import { VARS, TABLES, TABLESORT } from '../../constants';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      {/* <GridToolbarFilterButton /> */}
      {/* <GridToolbarDensitySelector /> */}
      <GridToolbarExport csvOptions={{ fileName: 'wolbachia_tool_export' }} />
      <Box sx={{ flex: 1 }} />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

function CustomFooter({ text }) {
  return (
    <GridFooterContainer>
      <Box sx={{ fontSize: 15 }} paddingLeft={2}>
        {text}
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      <GridPagination />
    </GridFooterContainer>
  );
}

export function formatNumber(value, obj) {
  if (value == null) {
    return '';
  }
  const val = value.toLocaleString(undefined, {
    minimumFractionDigits: obj.digits,
    maximumFractionDigits: obj.digits,
  });
  const prefix = obj.type === 'currency' ? '$' : '';
  return `${prefix}${val}`;
}

export default function Table({ data, which, sec, footerText }) {
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
        res.valueFormatter = ({ value }) => formatNumber(value, curVar);
      }
      return res;
    });
  }, [which]);

  return (
    // height: 455
    <Box sx={{ width: '100%' }}>
      <InfoSection sec={sec} />
      <DataGrid
        getRowId={(row) => row.gaul_code}
        rows={data}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[10, 25, 50]}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        headerHeight={90}
        autoHeight
        density="compact"
        components={{ Toolbar: CustomToolbar, Footer: CustomFooter }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            printOptions: { disableToolbarButton: true },
          },
          footer: {
            text: footerText,
          },
        }}
        initialState={{
          sorting: {
            sortModel: TABLESORT[which],
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
