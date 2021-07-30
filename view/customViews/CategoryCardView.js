import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryCardView = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.cardDetails.color }]}
      onPress={() => props.openMeals(props.cardDetails)}
    >
      <Text>{props.cardDetails.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 120,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    padding: 5,
    shadowColor: 'lightgray',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 1,
  },
});

export default CategoryCardView;
