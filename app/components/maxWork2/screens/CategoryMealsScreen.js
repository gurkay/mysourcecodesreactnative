import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data';



const CategoryMealsScreen = (props) => {

    const myParams = props.route.params;

    const catId = myParams.categoryId;
    const otherParam = myParams.otherParam;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>Test : {selectedCategory.title}</Text>
            <Button title="Go to Meals Detail" onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Text>Test : {otherParam}</Text>
        </View>
    );
}

CategoryMealsScreen.navigation = (navigationData) => {
    console.log(navigationData);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;