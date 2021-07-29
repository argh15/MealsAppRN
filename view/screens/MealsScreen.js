import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../../data/dataDump";
import MealCardView from "../customViews/MealCardView";

const MealCategoriesScreen = (props) => {
  const getFilteredArray = () => {
    return MEALS.filter((meals) =>
      meals.categoryIds.includes(props.route.params.mealsList.id)
    );
  };

  useEffect(() =>
    props.navigation.setOptions({
      title: props.route.params.mealsList.title,
    })
  );

  const openMealDetailsScreen = (meal) => {
    props.navigation.navigate("MealDetails", {
      mealItem: meal,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={getFilteredArray()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCardView meal={item} openMealDetails={openMealDetailsScreen} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealCategoriesScreen;
