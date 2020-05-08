import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import About from './components/About';
import TextExample from './components/TextExample';
import ExpActivityIndicator from './components/ExpActivityIndicator';
import ExpButton from './components/ExpButton';

const Routes = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="textExample" component={TextExample} title="Text Example" />
                <Scene key="expActivityIndicator" component={ExpActivityIndicator} title="Example Activity Indicator" />
                <Scene key="expButton" component={ExpButton} title="Button Examples" />
                <Scene key="about" component={About} title="About" />
            </Scene>
        </Router>
    );
}

export default Routes;