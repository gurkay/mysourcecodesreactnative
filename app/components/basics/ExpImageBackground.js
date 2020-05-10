import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native'
import ExpSeparato from './ExpSeparator'

const imageSource = require("../images/input.jpg");

const ExpImageBackground = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={imageSource} style={styles.image}>
                <Text style={styles.text}>
                    Inside Background image
                </Text>
                <ExpSeparato/>
                <Image
                    style={styles.logo}
                    source={require('../images/linux.png')}
                />
            </ImageBackground>
        </View>
    );
}

export default ExpImageBackground;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
    },
    image:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center",
    },
    text:{
        color:"red",
        fontSize:30,
        marginLeft:5,
        fontWeight:"bold",
    },
    logo:{
        width:66,
        height:58,
        marginLeft:5,
    },
});