import React, { useState } from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native'

const ExpTouchableHighlight = () => {
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.touchMeText}>Touch Here</Text>
            </TouchableHighlight>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>
                    {count !== 0 ? count : null}
                </Text>
            </View>
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
    touchMeText: {
        color: 'white'
    }
});

export default ExpTouchableHighlight;