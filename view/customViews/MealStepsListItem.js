import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MealStepsListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default MealStepsListItem;
