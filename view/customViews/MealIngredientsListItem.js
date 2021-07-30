import React from 'react';
import { Text, View } from 'react-native';

const MealIngredientsListItem = (props) => {
  return (
    <View>
      <Text>{props.value}</Text>
    </View>
  );
};

export default MealIngredientsListItem;
