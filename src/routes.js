import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Stories, SingleStory } from './containers/Story';
import NotFoundPage from './containers/NotFoundPage';

const Index = () => (
    <Route render={({ location }) => (
        <Switch location={location}>
            <Route path="/" component={Stories} key="Stories" exact={true} />
            <Route path="/story/:id" component={SingleStory} key="SingleStory" exact={true} />
            <Route path="" component={NotFoundPage} />
        </Switch>

    )} />
);

export default Index;
