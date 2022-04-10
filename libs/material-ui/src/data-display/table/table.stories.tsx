import { Story, Meta } from '@storybook/react';
import { Table, TableProps } from './table';
import TableContainer from './table-container/table-container';
import Paper from '../../surfaces/paper/paper';
import TableHead from './table-head/table-head';
import TableRow from './table-row/table-row';
import TableCell from './table-cell/table-cell';
import TableBody from './table-body/table-body';
// Use some data about the first several elements
import rows from '../../assets/datasets/elementData';

export default {
  component: Table,
  title: 'Material-UI/Data Display/Table',
} as Meta;

const Template: Story<TableProps> = (args) => (
  <TableContainer component={Paper}>
    <Table {...args} sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No.</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Weight</TableCell>
          <TableCell align="right">Symbol</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.weight}</TableCell>
            <TableCell align="right">{row.symbol}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export const Primary = Template.bind({});
Primary.args = {};
