import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import Home from './index';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

describe('Home', () => {
    it('should render page home', () => {
        render(
            <Router history={history}>
                <Home />
            </Router>,
        );
    });
});
