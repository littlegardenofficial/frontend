import {createStackNavigator} from 'react-navigation-stack';
import Header from '../shared/Header/Header';
import React from 'react';
import {THEME_TEXT_COLOR, GLOBAL_STYLES} from '../styles/theme';
import Profile from '../screens/Profile/Profile';
import ROUTES from './routeNames';

const screen = {
  myorders: {
    screen: Profile,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            toHomeButton={true}
            routeName={ROUTES.PROFILE}
          />
        ),
      };
    },
  },
};

const profileStack = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerStyle: GLOBAL_STYLES.headerStyle,
    headerTintColor: THEME_TEXT_COLOR,
  },
});

export default profileStack;
