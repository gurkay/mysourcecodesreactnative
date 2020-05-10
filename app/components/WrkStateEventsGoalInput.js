import React, { useState } from 'react'
import {
    View,
    Button,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native'

const WrkStateEventsGoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal
            visible={props.visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter...'
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    {/* <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} /> */}
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default WrkStateEventsGoalInput;