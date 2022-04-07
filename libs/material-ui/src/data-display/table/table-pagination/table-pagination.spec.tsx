import { render } from '@testing-library/react';

import TablePagination from './table-pagination';

describe('TablePagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TablePagination
        component="div"
        count={5}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onPageChange={() => {}}
        page={0}
        rowsPerPage={10}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
