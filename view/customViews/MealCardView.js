import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

const MealCardView = (props) => {
  return (
    <TouchableOpacity onPress={() => props.openMealDetails(props.meal)}>
      <ImageBackground
        source={{ uri: props.meal.imageUrl }}
        style={styles.container}
        imageStyle={{ borderRadius: 10 }}
        resizeMode="stretch"
      >
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{props.meal.title}</Text>
        </View>
        <View style={styles.statsView}>
          <Text style={[styles.statsText, { textTransform: "none" }]}>
            {props.meal.duration}m
          </Text>
          <Text style={styles.statsText}>{props.meal.complexity}</Text>
          <Text style={styles.statsText}>{props.meal.affordability}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    height: 250,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  headerView: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000c0",
  },
  statsView: {
    flex: 0.1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  statsText: {
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default MealCardView;
