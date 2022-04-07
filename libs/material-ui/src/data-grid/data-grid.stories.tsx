import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Story, Meta } from '@storybook/react';
import { DataGrid, DataGridProps } from './data-grid';

export default {
  component: DataGrid,
  title: 'Material-UI/Data Grid',
} as Meta;

const Template: Story<DataGridProps> = (args) => (
  <div style={{ height: 400, width: 600 }}>
    <DataGrid {...args} />
  </div>
);

export const Primary = Template.bind({});
const rows: GridRowsProp = [
  { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
  { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
  { id: 3, make: 'Porsche', model: 'Boxter', price: 72000 },
];
const columns: GridColDef[] = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
];
Primary.args = {
  rows,
  columns,
};
