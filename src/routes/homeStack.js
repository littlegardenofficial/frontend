import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home/Home';
import Header from '../shared/Header/Header';
import React from 'react';
import Cart from "../screens/Cart/Cart";
import Search from "../screens/Search/Search";
import {THEME_TEXT_COLOR, GLOBAL_STYLES, THEME_COLOR} from '../styles/theme';
import Login from '../screens/Auth/login/Login';
import SearchHeader from "../containers/SearchHeader/SearchHeader";
import  VerticalCategoryProductList from '../containers/VerticalCategoryProductList/VerticalCategoryProductList';
import Register from '../screens/Auth/register/Register';

const screens = {
  home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
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
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <SearchHeader navigation={navigation} />,
        headerStyle: {
          backgroundColor: THEME_COLOR,
        },
        headerTintColor: THEME_TEXT_COLOR,
      };
    },
  },
  CategoryProduct: {
    screen: VerticalCategoryProductList,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.state.params.categoryTitle,
        headerStyle: {
          backgroundColor: THEME_COLOR,
        },
        headerTintColor: THEME_TEXT_COLOR,
      };
    },
  },
  Login: {
    screen: Login,
    screenOptions: {
      headerShown: false,
    },
    navigationOptions: ({ navigation }) => {
      return {
        // title: navigation.state.params.authFlow,
        title: '',
        headerStyle: {
          backgroundColor: THEME_COLOR,
        },
        headerTintColor: THEME_TEXT_COLOR,
      };
    },
  },
  Register: {
    screen: Register,
    screenOptions: {
      headerShown: false,
    },
    navigationOptions: {
      headerStyle: {
        backgroundColor: THEME_COLOR,
      },
      headerTintColor: THEME_TEXT_COLOR,
    },
  },
};

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: GLOBAL_STYLES.headerStyle,
    headerTintColor: THEME_TEXT_COLOR,
  },
});

export default homeStack;