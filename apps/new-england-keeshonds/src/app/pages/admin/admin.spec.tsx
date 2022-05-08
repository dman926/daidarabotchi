import { renderWithProvider, waitFor } from '../../../utils/testUtils';

import { Admin } from './admin';

describe('Admin', () => {
  it('should render successfully', async () => {
    const { baseElement } = renderWithProvider(<Admin />);
    await waitFor(() => expect(baseElement).toBeTruthy());
  });
});
