import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwitchView from "../customViews/SwitchView";

const FiltersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Filters/Restrictions</Text>
      <SwitchView switchText="Gluten-free" />
      <SwitchView switchText="Vegetarian" />
      <SwitchView switchText="Lactose-free" />
      <SwitchView switchText="Vegan" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default FiltersScreen;
