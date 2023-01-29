import { renderWithProvider } from '../../../utils/testUtils';

import { Home } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProvider(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
