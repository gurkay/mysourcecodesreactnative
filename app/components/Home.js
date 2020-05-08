import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    SectionList
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const DATA = [
    {
        key: 'Basic',
        data: [
            {
                'id': '0',
                'value': 'Text'
            },
            {
                'id': '1',
                'value': 'Button'
            }
        ]
    },
    {
        key: 'App Examples',
        data: [
            {
                'id': '2',
                'value': 'S2_Record1'
            },
            {
                'id': '3',
                'value': 'S2_Record2'
            }
        ]
    },
    {
        key: 'Other',
        data: [
            {
                'id': '4',
                'value': 'S3_Record1'
            },
            {
                'id': '5',
                'value': 'About'
            }
        ]
    },
];

const goToRoutes = (goTo) => {
    console.log(goTo);
    switch (goTo) {
        case '0':
            Actions.textExample();
            break;
        case '1':
            Actions.about();
            break;
        case '2':
            Actions.about();
            break;
        case '3':
            Actions.about();
            break;
        case '4':
            Actions.about();
            break;
        case '5':
            Actions.about();
            break;
    }
}

const Home = () => {
    return (
        <View testID='container' style={styles.container}>
            <Text style={styles.header}>Section List Test</Text>
            <SectionList
                testID='section_list'
                keyExtractor={(item, index) => item + index}
                sections={DATA}
                renderSectionHeader={item => <Text style={styles.header}>{item.section.key}</Text>}
                renderItem={item => (
                    <View testID={item.item.id}>
                        <TouchableOpacity
                            onPress={() => goToRoutes(item.item.id)}
                        >
                            <Text key={item.item.index} style={styles.item}>{item.item.value}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});