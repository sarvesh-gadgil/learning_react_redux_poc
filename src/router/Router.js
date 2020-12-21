import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import App from '../App';
import DisplayComponent from '../component/DisplayComponent';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/displayComponent">DisplayComponent</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/displayComponent" component={DisplayComponent} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Routing;