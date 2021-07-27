import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoritesScreen = ({navigation}) => {
  const handleHamburgerMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <Icon
        name="menu"
        size={28}
        style={styles.icon}
        onPress={() => handleHamburgerMenu()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 10,
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

export default FavoritesScreen;
