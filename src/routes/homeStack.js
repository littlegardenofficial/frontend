import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home/Home';
import Header from '../shared/Header/Header';
import React from 'react';
import Cart from "../screens/Cart/Cart";
import Search from "../screens/Search/Search";
import {globalStyles} from '../styles/theme';
import Login from '../screens/Auth/login/Login';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="MovieReview" />
        ),
      };
    },
  },
  Cart: {
    screen: Cart,
    screenOptions: {
      headerShown: false,
    },
  },
  Search: {
    screen: Search,
    screenOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    screenOptions: {
      headerShown: false,
    },
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: 'green'
    }
  },
};

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: globalStyles.headerStyle ,
    headerTintColor: 'white',
  },
});

export default homeStack;