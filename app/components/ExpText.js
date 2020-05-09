import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ExpSeparator from './ExpSeparator';

const goToHome = () => {
    Actions.home();
}



const ExpText = () => {
    const titleText = useState("Bird's Nest");
    const [bodyText, setBodyText] = useState("This is not really a bird nest.");

    const onPressTitle = () => {
        console.log('title pressed.');
        setBodyText('Click a bird nest');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View  >
                <View>
                    <Text onPress={goToHome}>This is Text Example click go to Home</Text>
                </View>
                <ExpSeparator />
                <View>
                    <Text style={styles.baseText}>
                        <Text style={styles.titleText} onPress={onPressTitle}>
                            {titleText}
                            {'\n'}
                            {'\n'}
                        </Text>
                        <Text numberOfLines={5}>
                            {bodyText}
                        </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ExpText;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 16
    },
    baseText: {
        fontFamily: 'Cochin'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});