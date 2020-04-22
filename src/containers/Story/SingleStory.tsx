/*
 *
 * Single Story
 *
 */

import React, { useEffect, useState, memo } from 'react';
import { Helmet } from "react-helmet";
import URL from "../../API";
import Theme from "../../components/Theme";
import { RouteComponentProps, Link } from 'react-router-dom'
import List from "../../components/List";
import Button from "../../components/Button";
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

    const loadComments = async (commentIDs: string[]) => {
        const topCommentIDs = commentIDs.slice(0, 20);
        const list: CommentType[] = await Promise.all(topCommentIDs.map(comentId => {
            const singleComment = fetch(`${URL}/item/${comentId}.json?print=pretty`).then(res => res.json())
                .then(response => { return response; }).catch(error => console.log(error));
            return singleComment;
        }));
        setComments(list);
    }

    useEffect(() => {
        const singleProjectID = props.match.params.id;
        fetch(
            `${URL}/item/${singleProjectID}.json?print=pretty`
        ).then(res => res.json())
            .then(response => {
                if (response !== null)
                    setStory(response);
                setLoading(false);
            }
            )
            .catch(error => console.log(error));
    }, [props.match.params.id]);

    useEffect(() => {
        if (story.type !== "story") return
        if (story.kids.length > 0) {
            loadComments(story.kids);
        }
    }, [story]);
    interface ListTypes {
        items: CommentType[],
        hasLink: boolean,
        link: string,
        type: string,
    }
    const ListProps: ListTypes = {
        items: comments,
        hasLink: false,
        link: '',
        type: 'comment',
    }
    let date = "";
    if (story.time) {
        const dateTime = new Date(story.time * 1000);
        date = dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear();
    }

    return (
        <Theme>
            <Helmet>
                <title>Story</title>
                <meta name="description" content="Story" />
            </Helmet>
            {
                !loading ? story.type === "story" ?
                    (<>
                        <Link to="/"><Button>Back</Button></Link>

                        <h1>{story.title}</h1>
                        <h3>Arthur: {story.by} - {date}</h3>
                        <a href={story.url} target="_black">View details</a>
                        {comments.length > 0 &&
                            <>
                                <h3>Comments</h3>
                                <List {...ListProps} />
                            </>
                        }
                    </>
                    )
                    : (<p>Not found</p>)
                    : (<p>loading...</p>)
            }
        </Theme>
    );
}

export default memo(SingleStory);