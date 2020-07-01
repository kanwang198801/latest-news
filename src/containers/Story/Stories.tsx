/*
 *
 * Stories Listing
 *
 */

import React, { useEffect, useState, memo } from 'react';
import { Helmet } from 'react-helmet';
import URL from '../../API';
import Theme from '../../components/Theme';
import StoryList from '../../components/StoryList';
import { StoryType } from './types';

function Stories() {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<StoryType[]>([]);

  const loadStories = async () => {
    await fetch(`${URL}/topstories.json?print=pretty`)
      .then((res) => res.json())
      .then(async (response) => {
        const topTenStoryIDs: [] = response.slice(0, 10);
        const list = await Promise.all(
          topTenStoryIDs.map((topTenStoryID) => {
            const story = fetch(
              `${URL}/item/${topTenStoryID}.json?print=pretty`
            )
              .then((res) => res.json())
              .then((response) => {
                return response;
              })
              .catch((error) => {
                console.log(error);
              });
            return story;
          })
        );
        setStories(list);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  };

  useEffect(() => {
    loadStories();
  }, []);

  interface ListTypes {
    items: StoryType[];
    link: string;
  }
  const ListProps: ListTypes = {
    items: stories,
    link: '/story',
  };
  return (
    <Theme>
      <Helmet>
        <title>Stories</title>
        <meta name="description" content="Stories" />
      </Helmet>
      {!loading ? (
        stories.length !== 0 ? (
          <>
            <h1>Top 10 Stories</h1>
            <StoryList {...ListProps} />
          </>
        ) : (
          <div>No data</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </Theme>
  );
}

export default memo(Stories);
