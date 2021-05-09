import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import styles from './SideMenuStyles';
import {Text, Icon} from 'react-native-elements';

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
            <Text h3 h3Style={{color: 'white'}} style={{letterSpacing: 2}}>
              Dailyish
            </Text>
          </View>
          <View>
            <DrawerItems {...this.props} />
          </View>
        </ScrollView>
        <View style={styles.sidemenuFooter}>
          <TouchableOpacity style={{flexDirection: 'row' , justifyContent: 'center' , alignItems: 'center'}}>
            <Text h4 h4Style={{color: 'grey', fontSize: 18 , marginRight: 10}}>
              Logout
            </Text>
            <Icon name="logout" color="grey" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default SideMenu;
