import React, { useState, useEffect } from "react";
import {
  Alert,
  Animated,
  InteractionManager,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExpSeparator from './ExpSeparator';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

const useMount = func => useEffect(() => func(), []);

const useFadeIn = (duration = 5000) => {
  const [opacity] = useState(new Animated.Value(0));

  // Running the animation when the component is mounted
  useMount(() => {
    // Animated.timing() create a interaction handle by default, if you want to disabled that
    // behaviour you can set isInteraction to false to disabled that.
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver:false,
      duration,
    }).start();
  });

  return opacity;
};

// You can create a custom interaction/animation and add
// support for InteractionManager
const useCustomInteraction = (timeLocked = 2000) => {
  useMount(() => {
    const handle = InteractionManager.createInteractionHandle();

    setTimeout(
      () => InteractionManager.clearInteractionHandle(handle),
      timeLocked
    );

    return () => InteractionManager.clearInteractionHandle(handle);
  });
};

const BallCustom = ({ onInteractionIsDone }) => {
  useCustomInteraction();

  // Running a method after the interaction
  useMount(() => {
    InteractionManager.runAfterInteractions(() => onInteractionIsDone());
  });

  return <Animated.View style={[styles.ball]} />;
};

const Ball = ({ onShown }) => {
  const opacity = useFadeIn();

  // Running a method after the animation
  useMount(() => {
    InteractionManager.runAfterInteractions(() => onShown());
  });

  return <Animated.View style={[styles.ball, { opacity }]} />;
};

const ApiInteractionManager = () => {
  return (
    <View style={styles.container}>
      <Text>{instructions}</Text>
      <Ball onShown={() => Alert.alert("Animation is done")} />
      <ExpSeparator/>
      <BallCustom onInteractionIsDone={() => Alert.alert("Interaction is done")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: "salmon",
    borderRadius: 100,
  },
});


export default ApiInteractionManager;