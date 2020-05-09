import React, { useState, useCallback } from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native'

const DATA = [
    {
        'id': '0',
        'title': 'Text'
    },
    {
        'id': '1',
        'title': 'Activity Indicator'
    },
    {
        'id': '2',
        'title': 'Button'
    },
    {
        'id': '3',
        'title': 'Flat List Simple'
    },
    {
        'id': '4',
        'title': 'Flat List Selectable'
    },
    {
        'id': '5',
        'title': 'Image'
    },
    {
        'id': '6',
        'title': 'Image Background'
    },
];

function Item({ id, title, selected, onSelect }) {

    console.log("id : " + id +
        "\ntitle : " + title +
        "\nselected : " + selected +
        "\nonSelect : " + onSelect
    );

    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
                styles.item,
                { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            ]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const ExpFlatListSelectable = () => {
    const [selected, setSelected] = useState(new Map());

    const onSelect = useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));
            setSelected(newSelected);
        },
        [selected],
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                        id={item.id}
                        title={item.title}
                        selected={!!selected.get(item.id)}
                        onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.id}
                extraData={selected}
            />
        </SafeAreaView>
    );
}

export default ExpFlatListSelectable;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});