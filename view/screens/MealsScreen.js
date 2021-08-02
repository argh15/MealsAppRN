import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { MEALS } from '../../data/dataDump';
import MealCardView from '../customViews/MealCardView';

const MealsScreen = (props) => {
  const filters = useSelector((state) => state.filtersReducer.filters);
  const getCategoryFilteredArray = () => {
    return MEALS.filter((meals) =>
      meals.categoryIds.includes(props.route.params.mealsList.id)
    );
  };

  const getFinalFilteredArray = () => {
    var dataSet = getCategoryFilteredArray();
    return dataSet.filter(
      (meal) =>
        meal.isGlutenFree === filters.isGlutenFree &&
        meal.isLactoseFree === filters.isLactoseFree &&
        meal.isVegan === filters.isVegan &&
        meal.isVegetarian === filters.isVegetarian
    );
  };

  useEffect(() =>
    props.navigation.setOptions({
      title: props.route.params.mealsList.title,
    })
  );

  const openMealDetailsScreen = (meal) => {
    props.navigation.navigate('MealDetails', {
      mealItem: meal,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={getFinalFilteredArray()}
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

export default MealsScreen;
