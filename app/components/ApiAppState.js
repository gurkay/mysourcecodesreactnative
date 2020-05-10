import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const ApiAppState = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === "active") {
      console.log("App has come to the foreground!");
    }
    setAppState(nextAppState);
  };

  return (
    <View style={styles.container}>
      <Text>Current state is: {appState}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});


export default ApiAppState;