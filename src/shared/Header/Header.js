import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar, Button, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ROUTES from '../../routes/routeNames';
import InterCommRoutingService from '../../services/interCommRoutingService';
import {THEME_TEXT_COLOR, APP_NAME} from '../../styles/theme';
import styles from './HeaderStyles';

class Header extends Component {
  search;
  constructor(props) {
    super(props);
  }

  onOpenDrawer = () => {
    this.props.navigation.openDrawer();
  };

  openSearchPage = () => {
    InterCommRoutingService.routeToScreen(ROUTES.SEARCH, null);
  };

  openLoginPage = () => {
    InterCommRoutingService.routeToScreen(ROUTES.LOGIN, null);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Button
          icon={<Icon name="segment" size={30} color={THEME_TEXT_COLOR} />}
          type="clear"
          onPress={this.onOpenDrawer}
          buttonStyle={styles.noPaddingMargin}
        />
        <Text style={styles.loginText}>{APP_NAME}</Text>
        <View style={styles.searchLogin}>
          <Button
            icon={<Icon name="search" size={24} color={THEME_TEXT_COLOR} />}
            type="clear"
            onPress={this.openSearchPage}
          />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={this.openLoginPage}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
