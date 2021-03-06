import { render } from '@testing-library/react';
import React from 'react';
import Tooltip from './tooltip';

describe('Tooltip', () => {
  it('should render successfully', () => {
    const Content = React.forwardRef<HTMLSpanElement>((props, ref) => (
      <span {...props} ref={ref}>
        Test
      </span>
    ));
    const { baseElement } = render(
      <Tooltip title="Tooltip example">
        <Content />
      </Tooltip>
    );
    expect(baseElement).toBeTruthy();
  });
});
