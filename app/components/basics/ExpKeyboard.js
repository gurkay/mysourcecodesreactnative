import React, { useState } from 'react'
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Alert
} from 'react-native'

const createAlertMessage = () => {

    console.log("Message : ");
    Alert.alert(
        "Press Button",
        "My Message",
        [
            {
                text: "Ask me Later",
                onPress: () => console.log("Ask me later press")
            },
            {
                text: "Cancel",
                onPress: () => console.log("Cancel press"),
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => console.log("OK press")
            }
        ],
        { cancelable: false }
    );
}

const ExpKeyboard = () => {

    const [message, setMessage] = useState('No Message');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Header</Text>
                    <TextInput
                        placeholder="Username"
                        style={styles.textInput}
                    />
                    <View style={styles.btnContainer}>
                        <Button
                            title="Submit"
                            onPress={createAlertMessage}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default ExpKeyboard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around",
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
});