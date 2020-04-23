/**
 * Test the Single Story
 */

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import { RouteComponentProps } from 'react-router-dom'
import { createMemoryHistory, createLocation } from 'history';
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SingleStory from '../Stories';
interface OwnProps extends RouteComponentProps<any> { }
type Props = OwnProps;
const history = createMemoryHistory();
const path = `/route/:id`;
const match = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};
const location = createLocation(match.url);

describe('<SingleStory />', () => {
    it('Expect to not log errors in console', () => {
        const spy = jest.spyOn(global.console, 'error');
        render(<SingleStory
            history={history}
            location={location}
            match={match} />
        );
        expect(spy).not.toHaveBeenCalled();
    });


    it('Should render and match the snapshot', () => {
        const {
            container: { firstChild },
        } = render(
            <SingleStory
                history={history}
                location={location}
                match={match} />
        );
        expect(firstChild).toMatchSnapshot();
    });
});