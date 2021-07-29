import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

const MealDetailsScreen = (props) => {
  useEffect(() =>
    props.navigation.setOptions({
      title: props.route.params.mealItem.title,
    })
  );

  return (
    <ScrollView>
      <Image
        style={styles.mealImage}
        source={{ uri: props.route.params.mealItem.imageUrl }}
      />
      <View style={styles.statsView}>
        <Text style={[styles.statsText, { textTransform: "none" }]}>
          {props.route.params.mealItem.duration}m
        </Text>
        <Text style={styles.statsText}>
          {props.route.params.mealItem.complexity}
        </Text>
        <Text style={styles.statsText}>
          {props.route.params.mealItem.affordability}
        </Text>
      </View>
      <Text style={styles.ingredientsHeader}>Ingredients</Text>
      <View>
        <FlatList
          data={props.route.params.mealItem.ingredients}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Text>{item}</Text>}
          nestedScrollEnabled
          style={styles.list}
        />
      </View>
      <Text style={styles.ingredientsHeader}>Steps</Text>
      <View>
        <FlatList
          data={props.route.params.mealItem.steps}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.stepsItem}>
              <Text style={{ fontSize: 16 }}>{item}</Text>
            </View>
          )}
          nestedScrollEnabled
          style={styles.list}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mealImage: {
    height: 250,
    resizeMode: "cover",
  },
  statsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  statsText: {
    fontSize: 16,
    textTransform: "uppercase",
  },
  ingredientsHeader: {
    fontSize: 28,
    alignSelf: "center",
  },
  list: {
    margin: 10,
  },
  stepsItem: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    margin: 10,
  },
});

export default MealDetailsScreen;
