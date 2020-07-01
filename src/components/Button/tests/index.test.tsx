/**
 * Testing our Button component
 */

import React from 'react';
import { render } from '@testing-library/react';

import Button from '../index';
const children = <>Test</>;
const renderComponent = (props: any = {}) => {
  const utils = render(<Button {...props}>{children}</Button>);
  const button = utils.queryByText('Test')!.parentNode! as HTMLElement;
  return { ...utils, button };
};

describe('<Button />', () => {
  it('should have children', () => {
    const { button } = renderComponent();
    expect(button.children).toHaveLength(1);
  });
});
