import React, { useState, useCallback } from 'react'
import {
    ScrollView,
    RefreshControl,
    StyleSheet,
    Text,
    SafeAreaView,
} from 'react-native'

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const ExpRefresh = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                RefreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                
            >
                <Text>Pull down to see RefreshControl indicator</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ExpRefresh;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        marginHorizontal:10,
    },
    text: {
        fontSize:42,
        marginLeft:5
    }
});