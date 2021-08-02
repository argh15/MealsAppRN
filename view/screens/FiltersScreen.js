import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchView from '../customViews/SwitchView';
import SaveButton from '../customViews/SaveButton';
import { useDispatch } from 'react-redux';
import { saveFilters } from '../../redux/FiltersSlice';

const FiltersScreen = (props) => {
  const dispatch = useDispatch();

  var isGFree, isVege, isVegan, isLFree;

  const saveAllFilters = () => {
    dispatch(
      saveFilters({
        isGlutenFree: isGFree,
        isVegetarian: isVege,
        isVegan: isVegan,
        isLactoseFree: isLFree,
      })
    );
  };

  const setGlutenFreeValue = (item) => {
    isGFree = item;
  };

  const setLactoseFreeValue = (item) => {
    isLFree = item;
  };

  const setVeganValue = (item) => {
    isVegan = item;
  };

  const setVegetarianValue = (item) => {
    isVege = item;
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <SaveButton saveFilters={saveAllFilters} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Filters/Restrictions</Text>
      <SwitchView
        switchText="Gluten-free"
        setSwitchValue={setGlutenFreeValue}
      />
      <SwitchView
        switchText="Vegetarian"
        // switchValue={checkIfVegatarian}
        setSwitchValue={setVegetarianValue}
      />
      <SwitchView
        switchText="Lactose-free"
        // switchValue={checkIfLactoseFree}
        setSwitchValue={setLactoseFreeValue}
      />
      <SwitchView
        switchText="Vegan"
        // switchValue={checkIfVegan}
        setSwitchValue={setVeganValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  },
});

export default FiltersScreen;
