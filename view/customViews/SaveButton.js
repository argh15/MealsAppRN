import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SaveButton = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        name="content-save-outline"
        size={28}
        style={styles.icon}
        onPress={() => {
          props.saveFilters();
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

export default SaveButton;
