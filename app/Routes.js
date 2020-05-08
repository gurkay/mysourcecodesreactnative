import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import About from './components/About';
import TextExample from './components/TextExample'

const Routes = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="textExample" component={TextExample} title="Text Example" />
                <Scene key="about" component={About} title="About" />
            </Scene>
        </Router>
    );

}

export default Routes;