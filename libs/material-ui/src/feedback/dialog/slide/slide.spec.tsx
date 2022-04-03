import { render } from '@testing-library/react';

import Slide from './slide';

describe('Slide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Slide in={true}>
        <h1>Test</h1>
      </Slide>);
    expect(baseElement).toBeTruthy();
  });
});
