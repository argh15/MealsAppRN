import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { MEALS } from '../../data/dataDump';
import MealCardView from '../customViews/MealCardView';

const FavoritesScreen = (props) => {
  const favList = useSelector((state) => state.favoritesReducer.favoritesList);

  const getArray = () => {
    return MEALS.filter((item) => favList.includes(item.id));
  };

  const openMealDetailsScreen = (meal) => {
    props.navigation.navigate('MealDetails', {
      mealItem: meal,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getArray()}
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

export default FavoritesScreen;
