import React from 'react';
import {render} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import Home from './index';
import {createBrowserHistory} from 'history';
let history;
beforeEach(() => {
    history = createBrowserHistory();
});
//TODO : REFATORAR testes
describe('Home', () => {
    it('should render page home', () => {
        render(
            <Router history={history}>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Router>,
        );
    });
});
