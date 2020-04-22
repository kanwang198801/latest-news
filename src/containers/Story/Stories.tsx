/*
 *
 * Stories Listing
 *
 */

import React, { useEffect, useState, memo } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { Helmet } from "react-helmet";
import URL from "../../API";
import Theme from "../../components/Theme";
import List from "../../components/List";
import { StoryType } from "./types"

interface OwnProps extends RouteComponentProps<any> { }
type Props = OwnProps;

function Stories(props: Props) {
    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState<StoryType[]>([]);

    const loadStories = async () => {
        await fetch(
            `${URL}/topstories.json?print=pretty`
        ).then(res => res.json())
            .then(async response => {
                const topTenStoryIDs: [] = response.slice(0, 10);
                const list = await Promise.all(topTenStoryIDs.map(topTenStoryID => {
                    const story = fetch(`${URL}/item/${topTenStoryID}.json?print=pretty`)
                        .then(res => res.json())
                        .then(response => {
                            return response
                        }).catch(error => {
                            console.log(error)
                        });
                    return story;
                }));
                setStories(list);
            })
            .catch(error => console.log(error));
        setLoading(false);
    }

    useEffect(() => {
        loadStories();
    }, []);

    console.log("Object.keys(stories).length", Object.keys(stories).length);
    console.log("stories[0]", stories[0]);
    console.log(stories);
    // console.log(stories);
    // console.log(stories[0]);
    // console.log(stories.length);
    // console.log(typeof stories);

    interface ListTypes {
        items: StoryType[],
        hasLink: boolean,
        link: string,
    }
    const ListProps: ListTypes = {
        items: stories,
        hasLink: true,
        link: '/story',
    }
    return (
        <Theme>
            <Helmet>
                <title>Stories</title>
                <meta name="description" content="Stories" />
            </Helmet>
            {!loading ?
                stories.length === 0 ? (<div>No data</div>) :
                    (
                        <>
                            <h1>Top 10 Stories</h1>
                            <List {...ListProps} />
                        </>
                    ) :
                <div>Loading...</div>}

        </Theme>
    );
}

export default memo(Stories);