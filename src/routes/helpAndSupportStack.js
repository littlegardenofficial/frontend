import {createStackNavigator} from 'react-navigation-stack';
import Header from '../shared/Header/Header';
import React from 'react';
import {THEME_TEXT_COLOR, GLOBAL_STYLES} from '../styles/theme';

import ROUTES from './routeNames';
import HelpAndSupport from '../screens/HelpAndSupport/HelpAndSupport';
import {getTitleFromRouteNameForSideMenu} from '../utils/HelperUtil';

const screen = {
  HelpAndSupport: {
    screen: HelpAndSupport,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            toHomeButton={true}
            routeName={getTitleFromRouteNameForSideMenu(
              ROUTES.HELP_AND_SUPPORT,
            )}
          />
        ),
      };
    },
  },
};

const helpAndSupportStack = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerStyle: GLOBAL_STYLES.headerStyle,
    headerTintColor: THEME_TEXT_COLOR,
  },
});

export default helpAndSupportStack;
