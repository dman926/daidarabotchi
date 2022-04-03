import { TableBody } from '@mui/material';
import { render } from '@testing-library/react';
import Table from '../table';
import TableRow from '../table-row/table-row';

import TableCell from './table-cell';

describe('TableCell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(baseElement).toBeTruthy();
  });
});
