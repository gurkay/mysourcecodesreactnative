import React, { useState, useEffect } from 'react'
import {
    AccessibilityInfo,
    View,
    Text,
    StyleSheet
} from 'react-native'

const ApiAccessibilityInfo = () => {
    const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
    const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

    const handleScreenReaderToggled = reduceMotionEnabled => {
        setReduceMotionEnabled(reduceMotionEnabled);
    }
    const handleReduceMotionToggled = screenReaderEnabled => {
        setScreenReaderEnabled(screenReaderEnabled);
    }

    useEffect(() => {
        AccessibilityInfo.addEventListener(
            'reduceMotionChanged',
            handleReduceMotionToggled
        );
        AccessibilityInfo.addEventListener(
            'screenReaderChanged',
            handleScreenReaderToggled
        );
        AccessibilityInfo.isReduceMotionEnabled(reduceMotionEnabled => {
            setReduceMotionEnabled(reduceMotionEnabled);
        });
        AccessibilityInfo.isScreenReaderEnabled(screenReaderEnabled => {
            setScreenReaderEnabled(screenReaderEnabled);
        });
        return () => {
            AccessibilityInfo.removeEventListener(
                'reduceMotionChanged',
                handleReduceMotionToggled
            );
            AccessibilityInfo.removeEventListener(
                'screenReaderChanged',
                handleScreenReaderToggled
            );
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.status}>
                The reduce motion is {reduceMotionEnabled ? 'enabled' : 'disable'}
            </Text>
            <Text style={styles.status}>
                The screen reader is {screenReaderEnabled ? 'enabled' : 'disable'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    status: {
        margin: 30
    }
});

export default ApiAccessibilityInfo;