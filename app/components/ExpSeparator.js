import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const ExpSeparator = () => {
    return(
        <View style={styles.separator}>
            
        </View>
    );
}

export default ExpSeparator;

const styles = StyleSheet.create ({
    separator:{
        marginVertical:8,
        borderBottomColor: '#737373',
        borderBottomWidth:StyleSheet.hairlineWidth,
    }
});
