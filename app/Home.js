import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    SectionList
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const DATA = [
    {
        title: "Basic Operations",
        data: ["Text Change", "Button Click"]
    },
    {
        title: "App Examples",
        data: ["Udemy Example", "Internet Example"]
    },
];

const DB = [
    { data: [{ record: 'S1_Record1' }, { record: 'S1_Record2' }], key: 'Section 1' },
    { data: [{ record: 'S2_Record1' }, { record: 'S2_Record2' }], key: 'Section 2' },
    { data: [{ record: 'S3_Record1' }, { record: 'S3_Record2' }], key: 'Section 3' },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Home = () => {
    const goToAbout = () => {
        Actions.about();
    }

    const goToRoutes = () => {
        alert(item.item.record);
    }

    return (

        // <SafeAreaView style={styles.container}>
        //     <SectionList
        //         sections={DATA}
        //         keyExtractor={(item, index) => item + index}
        //         renderSectionHeader={({ section: { title } }) => (
        //             <Text style={styles.header}>{title}</Text>
        //         )}
        //         renderItem={({ item }) => <Item title={item} />}
        //     />
        // </SafeAreaView>
        <View testID='container' style={styles.container}>
            <Text style={styles.h1}>Section List Test</Text>
            <SectionList
                testID='section_list'
                keyExtractor={item => item.record}
                sections={DB}
                renderSectionHeader={item => <Text style={styles.h2}>{item.section.key}</Text>}
                renderItem={item => (
                    <View testID={item.item.record}>
                        <TouchableOpacity
                            onPress={() => alert(item.item.record)}
                        >
                            <Text style={styles.record}>{item.item.record}</Text>
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