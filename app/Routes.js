import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home';
import About from './components/About';
import ExpText from './components/ExpText';
import ExpActivityIndicator from './components/ExpActivityIndicator';
import ExpButton from './components/ExpButton';
import ExpFlatListSimple from './components/ExpFlatListSimple'
import ExpFlatListSelectable from './components/ExpFlatListSelectable'
import ExpImages from './components/ExpImages'
import ExpImageBackground from './components/ExpImageBackground'
import ExpKeyboard from './components/ExpKeyboard';
import ExpModal from './components/ExpModal';
import ExpRefresh from './components/ExpRefresh';
import ExpStatusBar from './components/ExpStatusBar';
import ExpSwitch from './components/ExpSwitch';
import ExpTextInput from './components/ExpTextInput';
import ExpTouchableHighlight from './components/ExpTouchableHighlight';
import ExpTouchableOpacity from './components/ExpTouchableOpacity';
import ExpTouchableWithoutFeedback from './components/ExpTouchableWithoutFeedback';
import ExpVirtualizedList from './components/ExpVirtualizedList';

const Routes = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="expText" component={ExpText} title="Text Example" />
                <Scene key="expActivityIndicator" component={ExpActivityIndicator} title="Example Activity Indicator" />
                <Scene key="expButton" component={ExpButton} title="Button Examples" />
                <Scene key="expFlatListSimple" component={ExpFlatListSimple} title="Flat List Simple" />
                <Scene key="expFlatListSelectable" component={ExpFlatListSelectable} title="Flat List Selectable" />
                <Scene key="expImages" component={ExpImages} title="Images Examples" />
                <Scene key="expImageBackground" component={ExpImageBackground} title="Images Background Examples" />
                <Scene key="expKeyboard" component={ExpKeyboard} title="Keyboard Example"/>
                <Scene key="expModal" component={ExpModal} title="Modal Examples"/>
                <Scene key="expRefresh" component={ExpRefresh} title="Refresh Control"/>
                <Scene key="expStatusBar" component={ExpStatusBar} title="StatusBar Example"/>
                <Scene key="expSwitch" component={ExpSwitch} title="Switch Example"/>
                <Scene key="expTextInput" component={ExpTextInput} title="Text Input Example"/>
                <Scene key="expTouchableHighlight" component={ExpTouchableHighlight} title="TouchableHighlight Example"/>
                <Scene key="expTouchableOpacity" component={ExpTouchableOpacity} title="TouchableOpacity Example"/>
                <Scene key="expTouchableWithoutFeedback" component={ExpTouchableWithoutFeedback} title="TouchableWithoutFeedback Example"/>
                <Scene key="expVirtualizedList" component={ExpVirtualizedList} title="VirtualizedList Example" />
                <Scene key="about" component={About} title="About" />
            </Scene>
        </Router>
    );
}

export default Routes;