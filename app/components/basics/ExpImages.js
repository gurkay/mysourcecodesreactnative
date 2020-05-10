import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import ExpSeparator from './ExpSeparator'

const ExpImages = () => {
    return(
        <View style={styles.container}>
            <Text>
                Tiny Logo
            </Text>
            <Image
                style={styles.tinyLogo}
                source={require('../images/linux.png')}
            />
            <ExpSeparator/>
            <Text>
                Logo
            </Text>
            <Image
                style={styles.logo}
                source={require('../images/linux.png')}
            />
            <ExpSeparator/>
            <Text>
                Logo Stretch
            </Text>
            <Image
                style={styles.stretch}
                source={require('../images/linux.png')}
            />
        </View>
    );
}

export default ExpImages;

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
    },
    tinyLogo:{
        width:50,
        height:50,
    },
    logo:{
        width:66,
        height:58,
    },
    stretch:{
        width:50,
        height:200,
        resizeMode:'stretch',
    }
});