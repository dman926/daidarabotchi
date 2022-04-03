import { render } from '@testing-library/react';
import TextField from '../text-field/text-field';

import Autocomplete from './autocomplete';

describe('Autocomplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Autocomplete options={[]} renderInput={(params) => <TextField {...params} />} />);
    expect(baseElement).toBeTruthy();
  });
});
