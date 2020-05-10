import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';

const goToHome = () => {
    Actions.home();
}

const ExpActivityIndicator = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
            <ActivityIndicator size="small" color="#00ff00" />
            <ActivityIndicator size="large" color="#0000ff" />
            <ActivityIndicator size="small" color="#00ff00" />
        </View>
    );
}

export default ExpActivityIndicator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});