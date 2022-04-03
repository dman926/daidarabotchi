import { render } from '@testing-library/react';

import Table from '../table';
import TableRow from '../table-row/table-row';
import TableBody from './table-body';

describe('TableBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>
    );
    expect(baseElement).toBeTruthy();
  });
});
