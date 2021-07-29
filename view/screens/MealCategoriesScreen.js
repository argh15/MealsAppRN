import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../../data/dataDump";
import CategoryCardView from "../customViews/CategoryCardView";

const MealCategoriesScreen = (props) => {
  const openMealsScreen = (meals) => {
    props.navigation.navigate("Meals", {
      mealsList: meals,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryCardView cardDetails={item} openMeals={openMealsScreen} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default MealCategoriesScreen;
