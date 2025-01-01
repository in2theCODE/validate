import { render } from '@testing-library/react';

import Logging from './logging';

describe('Logging', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logging />);
    expect(baseElement).toBeTruthy();
  });
});
