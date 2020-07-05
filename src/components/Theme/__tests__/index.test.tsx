/**
 * Testing our Theme component
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Theme from '../index';

const children = <>Test</>;
const renderComponent = (props: any = {}) => {
  const utils = render(<Theme {...props}>{children}</Theme>);
  const theme = utils.queryByText('Test')!.parentNode! as HTMLElement;
  return { ...utils, theme };
};

afterEach(cleanup);

it('should have children', () => {
  const { theme } = renderComponent();
  expect(theme.children).toHaveLength(1);
});
