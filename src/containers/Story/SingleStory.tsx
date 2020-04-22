/*
 *
 * Single Story
 *
 */

import React, { useEffect, useState, memo } from 'react';
import { Helmet } from "react-helmet";
import URL from "../../API";
import Theme from "../../components/Theme";
import { RouteComponentProps } from 'react-router-dom'
import List from "../../components/List";
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
            type: "",
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
            const topCommentIDs = story.kids.slice(0, 20);
            let commentsTop20: CommentType[] = [];
            topCommentIDs.forEach(comentId => {
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
    interface ListTypes {
        items: CommentType[],
        hasLink: boolean,
        link: string,
    }
    const ListProps: ListTypes = {
        items: comments,
        hasLink: false,
        link: '',
    }
    return (
        <Theme>
            <Helmet>
                <title>Single Story</title>
                <meta name="description" content="Single Story" />
            </Helmet>
            {
                !loading ?
                    story.type === "story" ?
                        (<div>
                            <h1>{story.title}</h1>
                            <h3>By: {story.by}</h3>
                            <p>Url: {story.url}</p>
                            {comments.length > 0 &&
                                <>
                                    <h3>Top 20 Comments</h3>
                                    <List {...ListProps} />
                                </>
                            }
                        </div>
                        )
                        : (<div>Not found</div>)
                    : (<div>loading...</div>)
            }
        </Theme>
    );
}

export default memo(SingleStory);