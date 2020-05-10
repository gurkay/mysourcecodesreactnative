import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

const WrkFlex = () => {
    return (
        <View style={styles.containerMain0}>
            <View style={styles.containerMain1}>
                <View style={styles.conteinerView1}>
                    <Text>1</Text>
                </View>
                <View style={styles.conteinerView2}>
                    <Text>2</Text>
                </View>
                <View style={styles.conteinerView3}>
                    <Text>3</Text>
                </View>
            </View>
            <View style={styles.containerMain2}>
                <View style={styles.conteinerView1}>
                    <Text>1</Text>
                </View>
                <View style={styles.conteinerView2}>
                    <Text>2</Text>
                </View>
                <View style={styles.conteinerView3}>
                    <Text>3</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    containerMain0: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerMain1: {
        flexDirection: 'row',
        margin: 50,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    containerMain2: {
        flexDirection: 'column',
        margin: 50,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    conteinerView1: {
        backgroundColor: 'red',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    conteinerView2: {
        backgroundColor: 'blue',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    conteinerView3: {
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WrkFlex;