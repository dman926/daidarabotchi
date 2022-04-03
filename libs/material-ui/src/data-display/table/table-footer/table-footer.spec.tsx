import { render } from '@testing-library/react';
import Table from '../table';
import TableRow from '../table-row/table-row';

import TableFooter from './table-footer';

describe('TableFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table>
        <TableFooter>
          <TableRow />
        </TableFooter>
      </Table>
    );
    expect(baseElement).toBeTruthy();
  });
});
