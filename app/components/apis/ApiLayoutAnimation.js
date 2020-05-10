import React, { useState } from "react";
import { 
  LayoutAnimation, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  UIManager, 
  View 
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const ApiLayoutAnimation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!expanded);
        }}
      >
        <Text>Press me to {expanded ? "collapse" : "expand"}!</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.tile}>
          <Text>I disappear sometimes!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "#a99191",
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  }
});

export default ApiLayoutAnimation;