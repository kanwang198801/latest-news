/**
 * Test the Single Story
 */

import '@testing-library/jest-dom';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import { RouteComponentProps } from 'react-router-dom';
import { createMemoryHistory, createLocation, History } from 'history';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SingleStory from '../Stories';

const history: History = createMemoryHistory();
const path = `/route/:id`;
const match = {
  isExact: false,
  path,
  url: path.replace(':id', '1'),
  params: { id: '1' },
};
const location = createLocation(match.url);

afterEach(cleanup);

it('Should render and match the snapshot', () => {
  const {
    container: { firstChild },
  } = render(<SingleStory history={history} location={location} match={match} />);
  expect(firstChild).toMatchSnapshot();
});
