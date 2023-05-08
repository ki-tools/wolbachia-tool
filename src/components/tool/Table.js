import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  // GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridFooterContainer,
  GridPagination,
} from '@mui/x-data-grid';
import InfoSection from './InfoSection';
import { VARS, TABLES, TABLESORT } from '../../constants';

function CustomToolbar({ csvFields }) {
  return (
    <GridToolbarContainer>
      {/* <GridToolbarColumnsButton /> */}
      {/* <GridToolbarFilterButton /> */}
      {/* <GridToolbarDensitySelector /> */}
      <GridToolbarExport
        csvOptions={{ fileName: 'wolbachia_tool_export', fields: csvFields }}
      />
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

export default function Table({ data, which, sec, footerText, inputs }) {
  const [sortModel, setSortModel] = useState(TABLESORT[which]);
  const columns = useMemo(() => {
    const main = VARS.map((curVar) => {
      const type = curVar.type === 'currency' ? 'number' : curVar.type;

      const typeClass = type === 'number' ? 'rightHeader' : '';
      const highlight = sortModel.map((d) => d.field).includes(curVar.name)
        ? 'highlighted-column'
        : '';

      const res = {
        type: type,
        field: curVar.name,
        width: curVar.width || 170,
        headerName: curVar.label,
        headerClassName: `${typeClass} ${highlight}`,
      };
      if (type === 'number') {
        res.valueFormatter = ({ value }) => formatNumber(value, curVar);
      }
      return res;
    });
    const extra = Object.keys(inputs).map((d) => ({
      type: 'string',
      field: d,
    }));
    const extra2 = [
      'daly_per_case',
      'direct_ambu',
      'direct_hosp',
      'direct_non_medical',
      'indirect_ambu',
      'indirect_hosp',
      'indirect_non_medical',
      'percent_ambu',
      'percent_hosp',
      'percent_non_medical',
    ].map((d) => ({
      type: 'number',
      field: d,
    }));
    return [...main, ...extra, ...extra2];
  }, [which, sortModel]);

  const allFields = columns.map((d) => d.field);
  const visibility = {};
  allFields
    .filter((d) => !TABLES[which].includes(d))
    .forEach((d) => {
      visibility[d] = false;
    });

  return (
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
        sortModel={sortModel}
        onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
        getCellClassName={(params) => {
          if (sortModel.map((d) => d.field).includes(params.field)) {
            return 'highlighted-column';
          }
          return '';
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            printOptions: { disableToolbarButton: true },
            csvFields: allFields,
          },
          footer: {
            text: footerText,
          },
        }}
        initialState={{
          // sorting: {
          //   sortModel: TABLESORT[which],
          // },
          columns: {
            columnVisibilityModel: visibility,
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
