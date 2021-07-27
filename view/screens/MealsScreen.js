import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dataDump';

const MealsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default MealsScreen;
