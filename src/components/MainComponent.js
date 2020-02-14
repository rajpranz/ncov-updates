import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeCompoent';
import About from './AboutComponent';
import Details from './DetailsComponent';
import News from './NewsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const MainComponent = () => {
    return (
        <div>
        <Header />
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/news" component={News} />
        <Route path="/about" component={About} />
        </Switch>
        </div>
        
    );
}

export default MainComponent;