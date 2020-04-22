import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Stories, SingleStory } from './containers/Story';

const Index = () => (
    <Route render={({ location }) => (
        <Switch location={location}>
            <Route path="/" component={Stories} key="Stories" exact={true} />
            <Route path="/story/:id" component={SingleStory} key="SingleStory" exact={true} />
        </Switch>
    )} />
);

export default Index;
