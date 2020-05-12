import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { MEALS } from '../data/dummy-data';


const MealDetailScreen = (props) => {

    const myParams = props.route.params;
    const mealId = myParams.mealId;
    const otherParam = myParams.otherParam;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (

        <View style={styles.screen}>
            
            <Text>{selectedMeal.title}</Text>

        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailScreen;