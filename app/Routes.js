import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home';
import About from './components/About';
import ExpText from './components/basics/ExpText';
import ExpActivityIndicator from './components/basics/ExpActivityIndicator';
import ExpButton from './components/basics/ExpButton';
import ExpFlatListSimple from './components/basics/ExpFlatListSimple'
import ExpFlatListSelectable from './components/basics/ExpFlatListSelectable'
import ExpImages from './components/basics/ExpImages'
import ExpImageBackground from './components/basics/ExpImageBackground'
import ExpKeyboard from './components/basics/ExpKeyboard';
import ExpModal from './components/basics/ExpModal';
import ExpRefresh from './components/basics/ExpRefresh';
import ExpStatusBar from './components/basics/ExpStatusBar';
import ExpSwitch from './components/basics/ExpSwitch';
import ExpTextInput from './components/basics/ExpTextInput';
import ExpTouchableHighlight from './components/basics/ExpTouchableHighlight';
import ExpTouchableOpacity from './components/basics/ExpTouchableOpacity';
import ExpTouchableWithoutFeedback from './components/basics/ExpTouchableWithoutFeedback';
import ExpVirtualizedList from './components/basics/ExpVirtualizedList';
import ApiAccessibilityInfo from './components/apis/ApiAccessibilityInfo';
import ApiAlert from './components/apis/ApiAlert';
import ApiAnimated from './components/apis/ApiAnimated';
import ApiAppearance from './components/apis/ApiAppearance';
import ApiAppRegistry from './components/apis/ApiAppRegistry';
import ApiAppState from './components/apis/ApiAppState';
import ApiDevSettings from './components/apis/ApiDevSettings';
import ApiDimensions from './components/apis/ApiDimensions';
import ApiEasing from './components/apis/ApiEasing';
import ApiInteractionManager from './components/apis/ApiInteractionManager';
import ApiKeyboard from './components/apis/ApiKeyboard';
import ApiLayoutAnimation from './components/apis/ApiLayoutAnimation';
import ApiLinking from './components/apis/ApiLinking';
import ApiPanResponder from './components/apis/ApiPanResponder';
import ApiPixelRatio from './components/apis/ApiPixelRatio';
import ApiShare from './components/apis/ApiShare';
import ApiStyleSheet from './components/apis/ApiStyleSheet';
import ApiSystrace from './components/apis/ApiSystrace';
import ApiTransforms from './components/apis/ApiTransforms';
import ApiVibration from './components/apis/ApiVibration';
import WrkFlex from './components/WrkFlex';
import WrkStateEvents from './components/WrkStateEvents';

const Routes = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key='expText' component={ExpText} title='Text Example'/>
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
                <Scene key="wrkFlex" component={WrkFlex} title="Flex Work" />
                <Scene key="wrkStateEvents" component={WrkStateEvents} title="State and Events Work" />
                <Scene key="about" component={About} title="About" />
            </Scene>
        </Router>
    );
}

export default Routes;