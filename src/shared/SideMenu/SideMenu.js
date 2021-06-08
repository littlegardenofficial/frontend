import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import styles from './SideMenuStyles';
import {Text, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {logoutAction} from '../../redux/actions/authActions';
import DrawerOptionItem from '../../components/DrawerOptionItem/DrawerOptionItem';

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.props.requestLogout()
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <View style={styles.avatarSection}>
            <View style={styles.avatar}>
              <Image source={require('../../../assets/images/logo.png')} />
            </View>
          </View>
          <View>
            <DrawerItems
              {...this.props}
              getLabel={scene => (
                <DrawerOptionItem scene={scene}></DrawerOptionItem>
              )}
            />
          </View>
        </ScrollView>
        <View style={styles.sidemenuFooter}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={this.logout}>
            <Text h4 h4Style={styles.logoutTitle}>
              Logout
            </Text>
            <Icon name="logout" color="red" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    requestLogout: () => dispatch(logoutAction()),
  };
};

export default connect(null, mapDispatchToProps)(SideMenu);
