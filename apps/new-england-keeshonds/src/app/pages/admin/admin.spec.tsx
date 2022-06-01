import { renderWithProvider, screen, act } from '../../../utils/testUtils';

import { Admin } from './admin';

describe('Admin', () => {
  it('should pass', () => {
    expect(true).toBeTruthy();
  });

  it('should render successfully', async () => {
    await act(() => {
      renderWithProvider(<Admin />);
    });
    expect(screen.getByTestId('admin-wrapper')).toBeInTheDocument();
  });
});
