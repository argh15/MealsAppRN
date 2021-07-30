import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MealCategoriesScreen from './view/screens/MealCategoriesScreen';
import FiltersScreen from './view/screens/FiltersScreen';
import FavoritesScreen from './view/screens/FavoritesScreen';
import MealsScreen from './view/screens/MealsScreen';
import MealDetailsScreen from './view/screens/MealDetailsScreen';
import HamburgerMenu from './view/customViews/HamburgerMenu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';
import Store from './redux/Store';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();
const FavoritesStack = createStackNavigator();
const MealStack = createStackNavigator();
const FiltersStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const tabBarHeight = () => {
  return Platform.OS === 'ios' ? 80 : 50;
};

const tabBarPaddingBottom = () => {
  return Platform.OS === 'ios' ? 25 : 5;
};

const navigationBarColor = () => {
  return Platform.OS === 'ios' ? 'white' : 'tomato';
};

const navigationTitleColor = () => {
  return Platform.OS === 'ios' ? 'tomato' : 'white';
};

function MealStackScreen() {
  return (
    <MealStack.Navigator
      screenOptions={{
        headerTintColor: navigationTitleColor(),
        headerStyle: {
          backgroundColor: navigationBarColor(),
        },
      }}
    >
      <MealStack.Screen
        name="Meal Categories"
        component={MealCategoriesScreen}
        options={(props) => ({
          title: 'Meal Categories',
          headerLeft: () => <HamburgerMenu navigation={props.navigation} />,
        })}
      />
      <MealStack.Screen name="Meals" component={MealsScreen} />
      <MealStack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={() => ({
          headerBackTitle: 'Back',
        })}
      />
    </MealStack.Navigator>
  );
}

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerTintColor: navigationTitleColor(),
        headerStyle: {
          backgroundColor: navigationBarColor(),
        },
      }}
    >
      <FavoritesStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: 'Your Favorites',
          headerLeft: () => <HamburgerMenu navigation={navigation} />,
        })}
      />
      <FavoritesStack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={() => ({
          headerBackTitle: 'Back',
        })}
      />
    </FavoritesStack.Navigator>
  );
}

function FiltersStackScreen() {
  return (
    <FiltersStack.Navigator>
      <FiltersStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation }) => ({
          title: 'Filters',
          headerLeft: () => <HamburgerMenu navigation={navigation} />,
          headerTintColor: navigationTitleColor(),
          headerStyle: {
            backgroundColor: navigationBarColor(),
          },
        })}
      />
    </FiltersStack.Navigator>
  );
}

function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === 'Meals') {
            iconName = 'silverware-fork-knife';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? 'tomato' : 'gray'}
            />
          );
        },
      })}
      tabBarOptions={{
        safeAreaInsets: { bottom: 0, top: 0, right: 0, left: 0 },
        labelStyle: { color: 'black' },
        tabStyle: {
          paddingTop: 5,
          paddingBottom: tabBarPaddingBottom(),
        },
        style: { height: tabBarHeight() },
      }}
    >
      <Tab.Screen name="Meals" component={MealStackScreen} />
      <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            labelStyle: {
              color: 'tomato',
            },
            activeBackgroundColor: 'papayawhip',
          }}
        >
          <Drawer.Screen name="Meals" component={TabScreens} />
          <Drawer.Screen name="Filters" component={FiltersStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
