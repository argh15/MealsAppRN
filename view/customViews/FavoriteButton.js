import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoriteButton = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        name={props.isFav() ? 'heart' : 'heart-outline'}
        size={28}
        style={styles.icon}
        onPress={() => {
          if (props.isFav()) {
            props.removeFromFavs();
          } else {
            props.addToFavs();
          }
          !props.isFav();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 10,
  },
  icon: {
    ...Platform.select({
      ios: {
        color: 'tomato',
      },
      android: {
        color: 'white',
      },
    }),
  },
});

export default FavoriteButton;
