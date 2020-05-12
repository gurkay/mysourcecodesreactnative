import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { HeaderButton } from '../components/HeaderButton';


const Stack = createStackNavigator();

const MealsNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categories"
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        title: 'Meal Categories',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="CategoryMeals"
                    component={CategoryMealsScreen}
                />
                <Stack.Screen
                    name="MealDetail"
                    component={MealDetailScreen}
                    options={{
                        title: 'Meal Details',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Item
                                    title="menu"
                                    iconName="star"

                                />
                            </HeaderButtons>

                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default MealsNavigation;