import React, { useState } from 'react'
import {
    TextInput,
    View,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native'
import ExpSeparator from './ExpSeparator'

function UselessTextInput(props) {
    return (
        <TextInput
            {...props}
            editable
            maxLength={40}
        />
    );
}

const ExpTextInput = () => {
    const [changeText, setChangeText] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Write here...'
                    onChangeText={text => setChangeText(text)}
                    value={changeText}
                />
                <Text>{changeText}</Text>
            </View>
            <ExpSeparator />
            <View style={styles.textInputViewStyle}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    value={changeText}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 15,
    },
    textInputStyle: {
        margin: 60,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "#fff"
    },
    textInputViewStyle: {
        backgroundColor: 'gray',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }
});

export default ExpTextInput;