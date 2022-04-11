import { render } from '@testing-library/react';

import NewEnglandKeeshondsLib from './new-england-keeshonds-lib';

describe('NewEnglandKeeshondsLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewEnglandKeeshondsLib />);
    expect(baseElement).toBeTruthy();
  });
});
