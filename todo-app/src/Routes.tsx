import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateTask from './pages/CreateTask';
import Home from './pages/Home';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/selecao" component={SelecaoTribos} /> */}
                <Route path="/" exact component={Home} />
                <Route path="/create" exact component={CreateTask} />
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
