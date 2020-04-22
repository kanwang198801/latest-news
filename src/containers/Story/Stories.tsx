/*
 *
 * Stories Listing
 *
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from "react-helmet";
// import { Redirect, Route, Link } from 'react-router-dom'

function Listing() {

    useEffect(() => {

    }, []);

    return (
        <div>
            <Helmet>
                <title>Stories Listing</title>
                <meta name="description" content="Stories Listing" />
            </Helmet>
            <div>
                Stories Listing
            </div>
        </div>
    );
}

export default memo(Listing);