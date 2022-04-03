import { render } from '@testing-library/react';

import TableHead from './table-head';
import TableRow from '../table-row/table-row';
import Table from '../table'


describe('TableHead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table>
        <TableHead>
          <TableRow />
        </TableHead>
      </Table>
    );
    expect(baseElement).toBeTruthy();
  });
});
