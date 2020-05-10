import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const WrkStateEventsGoalItem = (props) => {
    return (
        // <View style={styles.listItem}>
        //     <Text>{itemData.item.value}</Text>
        // </View>
        <TouchableOpacity
            activeOpacity={0.8} 
            onPress={props.onDelete.bind(this, props.id)}
        >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4
    }

});

export default WrkStateEventsGoalItem;