import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
} from '@mui/x-data-grid';

/* eslint-disable-next-line */
export interface DataGridProps extends MuiDataGridProps {}

export function DataGrid(props: DataGridProps) {
  return (
    /**
     * We are unable to detect the data-testid when its used in the MuiDataGrid component.
     * But setting it on the `span` works.
     */
    <span data-testid="mui-data-grid">
      <MuiDataGrid {...props} />
    </span>
  );
}

export default DataGrid;
