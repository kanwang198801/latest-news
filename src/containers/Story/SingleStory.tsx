/*
 *
 * Single Story
 *
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from "react-helmet";
// import { Redirect, Route, Link } from 'react-router-dom'

function Listing() {
    useEffect(() => {
        //api
    }, []);

    return (
        <div>
            <Helmet>
                <title>Single Story</title>
                <meta name="description" content="Stories Listing" />
            </Helmet>
            <div>
                Single Story
            </div>
        </div>
    );
}

export default memo(Listing);