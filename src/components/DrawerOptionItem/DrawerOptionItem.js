import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {THEME_COLOR} from '../../styles/theme';
import {
  getIconNameFromRouteNameForSideMenu,
  getTitleFromRouteNameForSideMenu,
} from '../../utils/HelperUtil';
import styles from './DrawerOptionItemStyles';

const DrawerOptionItem = props => {
  return (
    <View style={styles.navigationItemWrapper}>
      <Icon
        name={getIconNameFromRouteNameForSideMenu(props.scene.route.routeName)}
        color={THEME_COLOR}></Icon>
      <Text style={styles.title}>
        {getTitleFromRouteNameForSideMenu(props.scene.route.key)}
      </Text>
    </View>
  );
};

export default DrawerOptionItem;
