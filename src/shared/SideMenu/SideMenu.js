import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import styles from './SideMenuStyles';

class SideMenu extends Component {
  constructor(props) {
    super(props);
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
            <DrawerItems {...this.props} />
          </View>
        </ScrollView>
        <View style={styles.sidemenuFooter}>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default SideMenu;
