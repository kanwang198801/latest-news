/*
 *
 * Single Story
 *
 */

import React, { useEffect, useState, memo } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom'
import { Helmet } from "react-helmet";
import URL from "../../API";
import ListItem from "../../components/ListItem";
import { StoryType, CommentType } from "./types"

interface OwnProps extends RouteComponentProps<any> { }
type Props = OwnProps;

function SingleStory(props: Props) {
    const [loading, setLoading] = useState(true);
    const [story, setStory] = useState<StoryType>(
        {
            by: "",
            descendants: 0,
            id: 0,
            kids: [],
            score: 0,
            text: "",
            time: 0,
            title: "",
            url: "",
        }
    );
    const [comments, setComments] = useState<CommentType[]>([]);
    useEffect(() => {
        const singleProjectID = props.match.params.id;
        fetch(
            `${URL}/item/${singleProjectID}.json?print=pretty`
        ).then(res => res.json())
            .then(response => {
                setStory(response);
            }
            )
            .catch(error => console.log(error));
    }, [props.match.params.id]);

    useEffect(() => {
        if (story.kids.length > 0) {
            let commentsTop20: CommentType[] = [];
            story.kids.forEach(comentId => {
                fetch(
                    `${URL}/item/${comentId}.json?print=pretty`
                ).then(res => res.json())
                    .then(response => {
                        commentsTop20.push(response);
                    }
                    )
                    .catch(error => console.log(error));
            });
            setComments(commentsTop20);
            setLoading(false);
        }
    }, [story]);


    return (
        <div>
            <Helmet>
                <title>Single Story</title>
                <meta name="description" content="Single Story" />
            </Helmet>
            {
                !loading ?
                    story.id !== 0 ?
                        (<div>
                            <h1>{story.title}</h1>
                            <h3>By: {story.by}</h3>
                            <p>Url: {story.url}</p>
                            <div>
                                <h3>Comments</h3>
                                {comments.length > 0 && comments.map((storyItem) => (
                                    <Link to={`/story/${storyItem.id}`} key={`item - ${storyItem.id}`}>
                                        <ListItem storyItem />
                                    </Link >
                                ))}
                            </div>
                        </div>
                        )
                        : (<div>Not found</div>)
                    : (<div>loading...</div>)
            }
        </div>
    );
}

export default memo(SingleStory);