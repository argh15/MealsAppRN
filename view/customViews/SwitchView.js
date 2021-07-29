import React, { useState } from "react";
import { View, StyleSheet, Switch, Text } from "react-native";

const SwitchView = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.switchView}>
      <Text style={styles.switchText}>{props.switchText}</Text>
      <Switch
        trackColor={{ false: "grey", true: "#ff6347c0" }}
        thumbColor="white"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchView: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  switchText: {
    fontSize: 16,
  },
});

export default SwitchView;
