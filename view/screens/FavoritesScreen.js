import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
