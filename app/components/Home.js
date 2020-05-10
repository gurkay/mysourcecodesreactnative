import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    SectionList
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const DATA = [
    {
        key: 'Basic Components',
        data: [
            {
                'id': '0',
                'value': 'Text'
            },
            {
                'id': '1',
                'value': 'Activity Indicator'
            },
            {
                'id': '2',
                'value': 'Button'
            },
            {
                'id': '3',
                'value': 'Flat List Simple'
            },
            {
                'id': '4',
                'value': 'Flat List Selectable'
            },
            {
                'id': '5',
                'value': 'Image'
            },
            {
                'id': '6',
                'value': 'Image Background'
            },
            {
                'id': '7',
                'value': 'Keyboard Avoiding View'
            },
            {
                'id': '8',
                'value': 'Modal'
            },
            {
                'id': '9',
                'value': 'Refresh Control'
            },
            {
                'id': '10',
                'value': 'StatusBar'
            },
            {
                'id': '11',
                'value': 'Switch'
            },
            {
                'id': '12',
                'value': 'Text Input'
            },
            {
                'id': '13',
                'value': 'TouchableHighlight'
            },
            {
                'id': '14',
                'value': 'TouchableOpacity'
            },
            {
                'id': '15',
                'value': 'TouchableWithoutFeedback'
            },
            {
                'id': '16',
                'value': 'VirtualizedList'
            },      
        ]
    },
    {
        key: 'App APIs',
        data: [
            {
                'id': '17',
                'value': 'AccessibilityInfo'
            },
            {
                'id': '18',
                'value': 'Alert'
            },
            {
                'id': '19',
                'value': 'Animated'
            },
            {
                'id': '20',
                'value': 'Appearance'
            },
            {
                'id': '21',
                'value': 'AppRegistry'
            },
            {
                'id': '22',
                'value': 'AppState'
            },
            {
                'id': '23',
                'value': 'DevSettings'
            },
            {
                'id': '24',
                'value': 'Dimensions'
            },
            {
                'id': '25',
                'value': 'Easing'
            },
            {
                'id': '26',
                'value': 'InteractionManager'
            },
            {
                'id': '27',
                'value': 'Keyboard'
            },
            {
                'id': '28',
                'value': 'LayoutAnimation'
            },
            {
                'id': '29',
                'value': 'Linking'
            },
            {
                'id': '30',
                'value': 'PanResponder'
            },
            {
                'id': '31',
                'value': 'PixelRatio'
            },
            {
                'id': '32',
                'value': 'Share'
            },
            {
                'id': '33',
                'value': 'StyleSheet'
            },
            {
                'id': '34',
                'value': 'Systrace'
            },
            {
                'id': '35',
                'value': 'Transforms'
            },
            {
                'id': '36',
                'value': 'Vibration'
            },
        ]
    },
    {
        key: 'Other',
        data: [
            {
                'id': '24',
                'value': 'S3_Record1'
            },
            {
                'id': '100',
                'value': 'About'
            }
        ]
    },
];

const goToRoutes = (goTo) => {
    switch (goTo) {
        case '0':
            Actions.expText();
            break;
        case '1':
            Actions.expActivityIndicator();
            break;
        case '2':
            Actions.expButton();
            break;
        case '3':
            Actions.expFlatListSimple();
            break;
        case '4':
            Actions.expFlatListSelectable();
            break;
        case '5':
            Actions.expImages();
            break;
        case '6':
            Actions.expImageBackground();
            break;
        case '7':
            Actions.expKeyboard();
            break; 
        case '8':
            Actions.expModal();
            break;
        case '9':
            Actions.expRefresh();
            break; 
        case '10':
            Actions.expStatusBar();
            break; 
        case '11':
            Actions.expSwitch();
            break;
        case '12':
            Actions.expTextInput();
            break;
        case '13':
            Actions.expTouchableHighlight();
            break;
        case '14':
            Actions.expTouchableOpacity();
            break;
        case '15':
            Actions.expTouchableWithoutFeedback();
            break;
        case '16':
            Actions.expVirtualizedList();
            break;
        case '17':
            Actions.apiAccessibilityInfo();
            break;
        case '18':
            Actions.apiAlert();
            break;
        case '19':
            Actions.apiAnimated();
            break;
        case '20':
            Actions.apiAppearance();
            break;
        case '21':
            Actions.apiAppRegistry();
            break;
        case '22':
            Actions.apiAppState();
            break;
        case '23':
            Actions.apiDevSettings();
            break;
        case '24':
            Actions.apiDimensions();
            break;
        case '25':
            Actions.apiEasing();
            break; 
        case '26':
            Actions.apiInteractionManager();
            break;
        case '27':
            Actions.apiKeyboard();
            break; 
        case '28':
            Actions.apiLayoutAnimation();
            break; 
        case '29':
            Actions.apiLinking();
            break;
        case '30':
            Actions.apiPanResponder();
            break;
        case '31':
            Actions.apiPixelRatio();
            break;
        case '32':
            Actions.apiShare();
            break;
        case '33':
            Actions.apiStyleSheet();
            break;
        case '34':
            Actions.apiSystrace();
            break;
        case '35':
            Actions.apiTransforms();
            break;    
        case '36':
            Actions.apiVibration();
            break;                                                           
        case '100':
            Actions.about();
            break;
    }
}

const Home = () => {
    return (
        <View testID='container' style={styles.container}>
            <Text style={styles.header}>Section List</Text>
            <SectionList
                testID='section_list'
                keyExtractor={(item, index) => item + index}
                sections={DATA}
                renderSectionHeader={item => <Text style={styles.header}>{item.section.key}</Text>}
                renderItem={item => (
                    <View testID={item.item.id}>
                        <TouchableOpacity
                            onPress={() => goToRoutes(item.item.id)}
                        >
                            <Text key={item.item.index} style={styles.item}>{item.item.value}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});

export default Home;