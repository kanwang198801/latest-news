/**
 * Testing our List component
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoryType } from '../../../containers/Story/types';
import List from '../index';

interface storyListTypes {
  type: string;
  link: string;
  items: StoryType[];
}

afterEach(cleanup);

it('should render the List if loading was story list successful', () => {
  const props: storyListTypes = {
    type: 'story',
    link: 'https://google.com',
    items: [
      {
        by: 'pjc50',
        descendants: 22944177,
        id: 22943621,
        kids: [22944685, 22944096, 22944317],
        score: 95,
        title: '&quot;Permanent&quot; and &quot;free tier&quot;',
        time: 1587552301,
        type: 'comment',
        url: 'https://www.permanent.org/',
      },
      {
        by: 'pjc50',
        descendants: 22944174,
        id: 22943620,
        kids: [22944681, 22944092, 22944313],
        score: 95,
        title: '&quot;Permanent&quot; and &quot;free tier&quot;',
        time: 1587552300,
        type: 'comment',
        url: 'https://www.permanent.org/',
      },
    ],
  };
  const { container } = render(
    <Router>
      <List {...props} />
    </Router>
  );
  expect(container.firstChild).toMatchSnapshot();
});
