import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity
                onPress={props.onSelectMeal}
            >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.imageUrl }}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{props.title}</Text>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        width: '98%',
        height: 200,
        backgroundColor: '#d5cbd6',
        borderRadius:10,
        overflow:'hidden',
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
    },
    mealRow: {
        flexDirection: 'row',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealHeader: {
        height: '90%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height:'10%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 18,
        fontWeight:'bold',
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;