/**
 * Test the Stories
 */

import '@testing-library/jest-dom';
import { createMemoryHistory, createLocation } from 'history';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Stories from '../Stories';

const history = createMemoryHistory();
const path = `/route/:id`;
const match = {
  isExact: false,
  path,
  url: path.replace(':id', '1'),
  params: { id: '1' },
};
const location = createLocation(match.url);

afterEach(cleanup);

it('Expect to not log errors in console', () => {
  const spy = jest.spyOn(global.console, 'error');
  render(<Stories history={history} location={location} match={match} />);
  expect(spy).not.toHaveBeenCalled();
});

it('Should render and match the snapshot', () => {
  const {
    container: { firstChild },
  } = render(<Stories history={history} location={location} match={match} />);
  expect(firstChild).toMatchSnapshot();
});
