import {createStackNavigator} from 'react-navigation-stack';
import Header from '../shared/Header/Header';
import React from 'react';
import {THEME_TEXT_COLOR, GLOBAL_STYLES} from '../styles/theme';
import ServiceableAreas from '../screens/ServiceAreas/ServiceableAreas';
import ROUTES from './routeNames';

const screen = {
  myorders: {
    screen: ServiceableAreas,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            toHomeButton={true}
            routeName={ROUTES.SERVICE_AREAS}
          />
        ),
      };
    },
  },
};

const serviceAreaStack = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerStyle: GLOBAL_STYLES.headerStyle,
    headerTintColor: THEME_TEXT_COLOR,
  },
});

export default serviceAreaStack;
