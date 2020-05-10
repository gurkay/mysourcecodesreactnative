import React from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native'

const DATA = [
    {
        id: '0',
        title: 'Text'
    },
    {
        id: '1',
        title: 'Activity Indicator'
    },
    {
        id: '2',
        title: 'Button'
    },
    {
        id: '3',
        title: 'Flat List Simple'
    },
    {
        id: '4',
        title: 'Flat List Selectable'
    },
    {
        id: '5',
        title: 'Image'
    },
    {
        id: '6',
        title: 'Image Background'
    },
];

function Item({title}) {
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const ExpFlatListSimple = () => {
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title}/>}
                keyExtractor={item=>item.id}
            />
        </SafeAreaView>
    );
}

export default ExpFlatListSimple;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:25,
    },
    item:{
        backgroundColor:'#f9c2ff',
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
    },
    title:{
        fontSize:32,
    },
});