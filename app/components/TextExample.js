import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToHome = () => {
    Actions.home();
}

const TextExample = () => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={goToHome}
        >
            <Text>This is Text Example</Text>
        </TouchableOpacity>
    );
}

export default TextExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 16
    },
});