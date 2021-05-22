import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Icon, Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ROUTES from '../../routes/routeNames';
import InterCommRoutingService from '../../services/interCommRoutingService';
import {THEME_TEXT_COLOR, APP_NAME, THEME_COLOR_DARK, THEME_CONTRAST_COLOR, THEME_COLOR} from '../../styles/theme';
import {isUserLoggedIn} from '../../utils/ComponentRendererUtil';
import styles from './HeaderStyles';
import {connect} from 'react-redux';
import { getTitleFromRouteNameForSideMenu } from '../../utils/HelperUtil';

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

  openProfilePage = () => {
    InterCommRoutingService.routeToScreen(ROUTES.PROFILE ,  null);
  }

  routeBackToHome = () => {
    InterCommRoutingService.routeToScreen(ROUTES.HOME, null);
  };

  renderNavigationButton = () => {
    return this.props.toHomeButton ? (
      <Button
          icon={<Icon name="west" size={20} color={THEME_TEXT_COLOR} />}
          type="clear"
          onPress={this.routeBackToHome}
          buttonStyle={styles.noPaddingMargin}
        /> 
    ) :
    (<Button
      icon={<Icon name="segment" size={30} color={THEME_TEXT_COLOR} />}
      type="clear"
      onPress={this.onOpenDrawer}
      buttonStyle={styles.noPaddingMargin}
    />);
  }

  render() {
    return (
      <View style={styles.wrapper}>
       {this.renderNavigationButton()}
        <Text style={styles.loginText}>{this.props.toHomeButton ? getTitleFromRouteNameForSideMenu(this.props.routeName) : APP_NAME}</Text>
        <View style={styles.searchLogin}>
          <Button
            icon={<Icon name="search" size={24} color={THEME_TEXT_COLOR} />}
            type="clear"
            onPress={this.openSearchPage}
          />
          {isUserLoggedIn(this.props.auth) ? (
            <Avatar
              size="small"
              rounded
              containerStyle={styles.avatarContainer}
              titleStyle={styles.avatartitle}
              title={this.props.auth.userName.substring(0, 2)}
              onPress={this.openProfilePage}
              activeOpacity={0.7}
            />
          ) : (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={this.openLoginPage}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    ...ownprops,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Header);
