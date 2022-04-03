import { render } from '@testing-library/react';

import TableRow from './table-row';
import Table from '../table'
import TableBody from '../table-body/table-body';

describe('TableRow', () => {
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
