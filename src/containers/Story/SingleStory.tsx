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
import { StoryType } from "./types"

interface OwnProps extends RouteComponentProps { }
type Props = OwnProps;

function SingleStory(props: Props) {
    const [loading, setLoading] = useState(true);
    const [story, setStory] = useState<StoryType | null>(null);
    useEffect(() => {

    }, []);

    return (
        <div>
            <Helmet>
                <title>Single Story</title>
                <meta name="description" content="Single Story" />
            </Helmet>

        </div>
    );
}

export default memo(SingleStory);