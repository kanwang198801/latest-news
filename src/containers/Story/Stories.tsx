/*
 *
 * Stories Listing
 *
 */

import React, { useEffect, useState, memo } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom'
import { Helmet } from "react-helmet";
import URL from "../../API";
import List from "../../components/List";
import { StoryType } from "./types"

interface OwnProps extends RouteComponentProps<any> { }
type Props = OwnProps;

function Stories(props: Props) {
    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState<StoryType[]>([]);
    useEffect(() => {
        fetch(
            `${URL}/topstories.json?print=pretty`
        ).then(res => res.json())
            .then(response => {
                const topTenStoryIDs = response.slice(0, 10);
                let storiesTop10: StoryType[] = [];

                topTenStoryIDs.forEach(topTenStoryID => {
                    fetch(
                        `${URL}/item/${topTenStoryID}.json?print=pretty`
                    )
                        .then(res => res.json())
                        .then(response => {
                            storiesTop10.push(response);
                        }).catch(error => console.log(error));
                });
                setStories(storiesTop10);
                setLoading(false);
            }
            )
            .catch(error => console.log(error));

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
        <div>
            <Helmet>
                <title>Stories Listing</title>
                <meta name="description" content="Stories Listing" />
            </Helmet>
            {!loading ?
                Object.keys(stories).length !== 0 ? (<div>No data</div>) :
                    (
                        <>
                            <h3>Top 10 Storis</h3>
                            <List {...ListProps} />
                        </>
                    ) :
                <div>Loading...</div>}

        </div>
    );
}

export default memo(Stories);