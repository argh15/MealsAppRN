import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchView from '../customViews/SwitchView';
import SaveButton from '../customViews/SaveButton';

const FiltersScreen = (props) => {
  const saveFilters = () => {
    alert('Save Filters');
  };
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <SaveButton saveFilters={saveFilters} />,
    });
  }, []);

  const checkSwitch = (switchItem) => {
    console.log(switchItem);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Filters/Restrictions</Text>
      <SwitchView switchText="Gluten-free" switch={checkSwitch} />
      <SwitchView switchText="Vegetarian" />
      <SwitchView switchText="Lactose-free" />
      <SwitchView switchText="Vegan" />
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
