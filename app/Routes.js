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
import ApiAccessibilityInfo from './components/ApiAccessibilityInfo';
import ApiAlert from './components/ApiAlert';
import ApiAnimated from './components/ApiAnimated';
import ApiAppearance from './components/ApiAppearance';
import ApiAppRegistry from './components/ApiAppRegistry';
import ApiAppState from './components/ApiAppState';
import ApiDevSettings from './components/ApiDevSettings';
import ApiDimensions from './components/ApiDimensions';
import ApiEasing from './components/ApiEasing';
import ApiInteractionManager from './components/ApiInteractionManager';
import ApiKeyboard from './components/ApiKeyboard';
import ApiLayoutAnimation from './components/ApiLayoutAnimation';
import ApiLinking from './components/ApiLinking';
import ApiPanResponder from './components/ApiPanResponder';
import ApiPixelRatio from './components/ApiPixelRatio';
import ApiShare from './components/ApiShare';
import ApiStyleSheet from './components/ApiStyleSheet';
import ApiSystrace from './components/ApiSystrace';
import ApiTransforms from './components/ApiTransforms';
import ApiVibration from './components/ApiVibration';

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
                <Scene key="apiAccessibilityInfo" component={ApiAccessibilityInfo} title="AccessibilityInfo" />
                <Scene key="apiAlert" component={ApiAlert} title="apiAlert" />
                <Scene key="apiAnimated" component={ApiAnimated} title="apiAnimated" />
                <Scene key="apiAppearance" component={ApiAppearance} title="apiAppearance" />
                <Scene key="apiAppRegistry" component={ApiAppRegistry} title="apiAppRegistry" />
                <Scene key="apiAppState" component={ApiAppState} title="apiAppState" />
                <Scene key="apiDevSettings" component={ApiDevSettings} title="apiDevSettings" />
                <Scene key="apiDimensions" component={ApiDimensions} title="apiDimensions" />
                <Scene key="apiEasing" component={ApiEasing} title="apiEasing" />
                <Scene key="apiInteractionManager" component={ApiInteractionManager} title="apiInteractionManager" />
                <Scene key="apiKeyboard" component={ApiKeyboard} title="apiKeyboard" />
                <Scene key="apiLayoutAnimation" component={ApiLayoutAnimation} title="apiLayoutAnimation" />
                <Scene key="apiLinking" component={ApiLinking} title="apiLinking" />
                <Scene key="apiPanResponder" component={ApiPanResponder} title="apiPanResponder" />
                <Scene key="apiPixelRatio" component={ApiPixelRatio} title="apiPixelRatio" />
                <Scene key="apiShare" component={ApiShare} title="apiShare" />
                <Scene key="apiStyleSheet" component={ApiStyleSheet} title="apiStyleSheet" />
                <Scene key="apiSystrace" component={ApiSystrace} title="apiSystrace" />
                <Scene key="apiTransforms" component={ApiTransforms} title="apiTransforms" />
                <Scene key="apiVibration" component={ApiVibration} title="apiVibration" />
                <Scene key="about" component={About} title="About" />
            </Scene>
        </Router>
    );
}

export default Routes;