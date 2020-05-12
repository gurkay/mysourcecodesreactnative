import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import {useScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

const App = () => {
    return (
        // <View>      </View>
        <MealsNavigator/>
    );
}

const styles = StyleSheet.create({

});

export default App;