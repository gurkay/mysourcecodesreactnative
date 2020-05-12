import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
} from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {

    const renderMealItem = (itemData) => {
        return(
            <MealItem
                title = {itemData.item.title}
                duration= {itemData.item.duration}
                complexity= {itemData.item.complexity}
                affordability= {itemData.item.affordability}
                imageUrl= {itemData.item.imageUrl}
                onSelectMeal={()=>{
                    props.navigation.navigate('MealDetail', {
                        mealId: itemData.item.id,
                        otherParam: 'anything you want here'
                    })
                }}
            />
        );
    }

    const myParams = props.route.params;
    const catId = myParams.categoryId;
    const otherParam = myParams.otherParam;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
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