import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data';



const CategoryMealsScreen = (props) => {

    const catId = props.route.params.categoryId;
    const otherParam = props.route.params.otherParam;
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;