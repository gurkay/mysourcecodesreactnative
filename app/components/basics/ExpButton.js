import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToTextExample = () => {
    Actions.textExample();
}

function FuncSeparator() {
    return (
        <View style={styles.separator} />
    );
}

const ExpButton = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required. It is recommended to set
                    accessibilityLabel to help make your app usable by everyone.
                </Text>
                <Button
                    title="Go to Text Example"
                    onPress={goToTextExample}
                />
                <View style={styles.separator}></View>
                <FuncSeparator />
                <View>
                    <Text style={styles.title}>
                        Adjust the color in a way that looks standard on each platform. On
                        iOS, the color prop controls the color of the text. On Android, the
                        color adjusts the background color of the button.
                </Text>
                    <Button
                        title="Press me"
                        color="#f194ff"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                </View>
                <FuncSeparator />
                <View>
                    <Text style={styles.title}>
                        All interaction for the component are disabled.
                    </Text>
                    <Button
                        title="Press me"
                        disabled
                        onPress={() => Alert.alert('Cannot press this one')}
                    />
                </View>
                <FuncSeparator />
                <View>
                    <Text style={styles.title}>
                        This layout strategy lets the title define the width of the button.
                    </Text>
                    <View style={styles.fixToText}>
                        <Button
                            title="Left button"
                            onPress={() => Alert.alert('Left button pressed')}
                        />
                        <Button
                            title="Right button"
                            onPress={() => Alert.alert('Right button pressed')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ExpButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});