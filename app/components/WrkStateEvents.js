import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    ScrollView,
    FlatList
} from 'react-native'

import WrkStateEventsGoalItem from './WrkStateEventsGoalItem';
import WrkStateEventsGoalInput from './WrkStateEventsGoalInput';

const WrkStateEvents = () => {


    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    console.log(courseGoals);

    // const addGoalHandler = () => {
    //     console.log(enteredGoal);
    //     // setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
    //     setCourseGoals(currentGoals => [
    //         ...courseGoals,
    //         { id: Math.random().toString(), value: enteredGoal }
    //     ]);
    // }
    const addGoalHandler = (goalTitle) => {

        if(goalTitle === 0) {
            return;
        }

        setCourseGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: goalTitle }
        ]);

        // Modal false
        setIsAddMode(false);
    }

    const removeGoalHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    }

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    }

    return (
        <View style={styles.screen}>
            <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
            <WrkStateEventsGoalInput 
                visible={isAddMode} 
                onAddGoal={addGoalHandler}
                onCancel={cancelGoalAdditionHandler} 
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={itemData => (
                    <WrkStateEventsGoalItem 
                        id={itemData.item.id}
                        onDelete={removeGoalHandler} 
                        title={itemData.item.value} />
                )}
            />
        </View>

        // <View style={styles.screen}>
        //     <WrkStateEventsGoalInput onAddGoal={addGoalHandler} />
        //     <FlatList
        //         keyExtractor={(item, index) => item.id}
        //         data={courseGoals}
        //         renderItem={itemData => (
        //             <WrkStateEventsGoalItem 
        //                 id={itemData.item.id}
        //                 onDelete={removeGoalHandler} 
        //                 title={itemData.item.value} />
        //         )}
        //     />

        //     {/* <View style={styles.inputContainer}>
        //         <TextInput
        //             style={styles.input}
        //             placeholder='Enter...'
        //             onChangeText={goalInputHandler}
        //             value={enteredGoal}
        //         />
        //         <Button title='ADD' onPress={addGoalHandler} />
        //     </View> */}

        //     {/* <FlatList
        //         keyExtractor={(item, index) => item.id}
        //         data={courseGoals}
        //         renderItem={itemData => <WrkStateEventsGoalItem title={itemData.item.value}/>}
        //         // renderItem={itemData => (
        //         //     // <View style={styles.listItem}>
        //         //     //     <Text>{itemData.item.value}</Text>
        //         //     // </View>
        //         // )}
        //     /> */}

        //     {/* <ScrollView>
        //         {courseGoals.map(goal => (
        //             <View key={goal} style={styles.listItem}>
        //                 <Text>{goal}</Text>
        //             </View>
        //         ))}
        //     </ScrollView> */}
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        padding: 25,
    },


});

export default WrkStateEvents;