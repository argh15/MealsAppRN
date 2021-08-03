import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MealCardView from '../customViews/MealCardView';

const MealsScreen = (props) => {
  const mealsList = useSelector((state) => state.filtersReducer.mealsList);
  const getCategoryFilteredArray = () => {
    return mealsList.filter((meals) =>
      meals.categoryIds.includes(props.route.params.mealsList.id)
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
        data={getCategoryFilteredArray()}
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
