import React, {useState} from 'react'
import {
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native'

const WrkStateEventsGoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Enter...'
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            {/* <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} /> */}
            <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 1,
        padding: 10
    },

});

export default WrkStateEventsGoalInput;