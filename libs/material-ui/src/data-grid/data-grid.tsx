import { DataGrid as MuiDataGrid, DataGridProps as MuiDataGridProps } from '@mui/x-data-grid';

/* eslint-disable-next-line */
export interface DataGridProps extends MuiDataGridProps {}

export function DataGrid(props: DataGridProps) {
  return <MuiDataGrid {...props} />;
}

export default DataGrid;
