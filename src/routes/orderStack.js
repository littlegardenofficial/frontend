import {createStackNavigator} from 'react-navigation-stack';
import Header from '../shared/Header/Header';
import React from 'react';
import {THEME_TEXT_COLOR, GLOBAL_STYLES} from '../styles/theme';
import MyOrders from '../screens/Orders/MyOrders';
import ROUTES from './routeNames';

const screen = {
  myorders: {
    screen: MyOrders,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            toHomeButton={true}
            routeName={ROUTES.MY_ORDERS}
          />
        ),
      };
    },
  },
};

const ordersStack = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerStyle: GLOBAL_STYLES.headerStyle,
    headerTintColor: THEME_TEXT_COLOR,
  },
});

export default ordersStack;
