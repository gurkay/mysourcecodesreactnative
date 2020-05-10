import React, { useState } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

const ExpTouchableOpacity = () => {
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>
                    Count : {count}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.pressMeText}>Press Here</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    },
    pressMeText: {
        color: 'white'
    }
});

export default ExpTouchableOpacity;