/**
 * Testing our List component
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StoryType, CommentType } from '../../../containers/Story/types';
import List from '../index';

interface storyListTypes {
  type: string;
  link: string;
  items: StoryType[];
}
interface commentListTypes {
  type: string;
  link: string;
  items: CommentType[];
}

afterEach(cleanup);

it('should render the List if loading was comment list successful', () => {
  const props: commentListTypes = {
    type: 'comment',
    link: '',
    items: [
      {
        by: 'pjc50',
        id: 22944174,
        kids: [22944922],
        parent: 22943620,
        text: '&quot;Permanent&quot; and &quot;free tier&quot;',
        time: 1587552301,
        type: 'comment',
      },
      {
        by: 'pjc50',
        id: 22944175,
        kids: [22944922, 22944923, 22944924],
        parent: 22943620,
        text: '&quot;Permanent&quot; and &quot;free tier&quot;',
        time: 1587552301,
        type: 'comment',
      },
    ],
  };
  const { container } = render(<List {...props} />);
  expect(container.firstChild).toMatchSnapshot();
});
