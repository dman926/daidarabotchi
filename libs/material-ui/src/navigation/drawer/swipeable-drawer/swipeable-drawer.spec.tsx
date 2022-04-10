import { render } from '@testing-library/react';

import SwipeableDrawer from './swipeable-drawer';

describe('SwipeableDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SwipeableDrawer open={false} onClose={() => {console.log('Close')}} onOpen={() => { console.log('Open')}} />
    );
    expect(baseElement).toBeTruthy();
  });
});
