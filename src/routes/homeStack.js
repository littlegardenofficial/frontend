import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home/Home';
import Header from '../shared/Header/Header';
import React from 'react';
import Cart from "../screens/Cart/Cart";
import Search from "../screens/Search/Search";
import {globalStyles} from '../styles/theme';
import Login from '../screens/Auth/login/Login';
import SearchHeader from "../containers/SearchHeader/SearchHeader";
import  VerticalCategoryProductList from '../containers/VerticalCategoryProductList/VerticalCategoryProductList';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} />
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
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <SearchHeader navigation={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'green'
        },
        headerTintColor: 'white'
      };
    },
  },
  CategoryProduct: {
    screen: VerticalCategoryProductList,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.state.params.categoryTitle,
        headerStyle: {
          backgroundColor: 'green'
        },
        headerTintColor: 'white'
      };
    }
  },
  Login: {
    screen: Login,
    screenOptions: {
      headerShown: false,
    },
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'green',
        },
        headerTintColor: 'white'
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