import React, {useState} from 'react'
import {
    TextInput,
    View,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native'
import ExpSeparator from './ExpSeparator'

function UselessTextInput(props) {
    return(
        <TextInput
            {...props}
            editable
            maxLength={40}
        />
    );
}

const ExpTextInput = () => {
    const[changeText, setChangeText] = useState('Useless Placeholder');

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={text => setChangeText(text)}
                    value={changeText}
                />
                <Text>{changeText}</Text>
            </View>
            <ExpSeparator/>
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

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:15,
    },
    textInputStyle:{
        height:40,
        borderColor:'grey',
        borderWidth:1,
    },
    textInputViewStyle:{
        backgroundColor:'gray',
        borderBottomColor:'#000000',
        borderBottomWidth:1,
    }
});

export default ExpTextInput;