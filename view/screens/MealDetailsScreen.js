import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/FavoritesSlice';
import FavoriteButton from '../customViews/FavoriteButton';
import MealIngredientsListItem from '../customViews/MealIngredientsListItem';
import MealStepsListItem from '../customViews/MealStepsListItem';

const MealDetailsScreen = (props) => {
  const favList = useSelector((state) => state.favoritesReducer.favoritesList);

  const checkIfFavorite = () => {
    return favList.includes(props.route.params.mealItem.id);
  };

  const dispatch = useDispatch();
  useEffect(() =>
    props.navigation.setOptions({
      title: props.route.params.mealItem.title,
    })
  );

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <FavoriteButton
          addToFavs={addToFavs}
          removeFromFavs={removeFromFavs}
          isFav={checkIfFavorite}
        />
      ),
    });
  }, [checkIfFavorite]);

  const addToFavs = () => {
    dispatch(addToFavorites(props.route.params.mealItem.id));
  };

  const removeFromFavs = () => {
    dispatch(removeFromFavorites(props.route.params.mealItem.id));
  };

  return (
    <ScrollView>
      <Image
        style={styles.mealImage}
        source={{ uri: props.route.params.mealItem.imageUrl }}
      />
      <View style={styles.statsView}>
        <Text style={[styles.statsText, { textTransform: 'none' }]}>
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
      <View style={styles.list}>
        {props.route.params.mealItem.ingredients.map((item) => (
          <MealIngredientsListItem key={item.toString()} value={item} />
        ))}
      </View>
      <Text style={styles.ingredientsHeader}>Steps</Text>
      <View style={styles.list}>
        {props.route.params.mealItem.steps.map((item) => (
          <MealStepsListItem key={item.toString()} value={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mealImage: {
    height: 250,
    resizeMode: 'cover',
  },
  statsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  statsText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  ingredientsHeader: {
    fontSize: 28,
    alignSelf: 'center',
  },
  list: {
    margin: 15,
  },
});

export default MealDetailsScreen;
