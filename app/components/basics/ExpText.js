import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToHome = () => {
    Actions.home();
}

const ExpText = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const [bodyText, setBodyText] = useState("This is not really a bird nest.");

    const onPressTitle = () => {
        console.log('title pressed.');
        setBodyText('Click a bird nest');
    }
    return (
        <View style={styles.container} >
            <View>
                <Text onPress={goToHome}>This is Text Example click go to Home</Text>
            </View>

            <View>
                <View style={styles.baseText}>
                <TouchableOpacity onPress={onPressTitle}>
                        <Text style={styles.titleText} > {titleText}  </Text>
                </TouchableOpacity>

                    <Text > {bodyText} </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    baseText: {
        fontFamily: 'Cochin'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ExpText;

