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

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      drawerItem: {
        flex: 1,
        backgroundColor: 'blue',
      },
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, height: '100%', width: '100%'}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'green',
              height: 300,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Avatar
              rounded
              source={{
                uri:require('../../assets/images/logo.png'),
              }}
            /> */}
            <View
              style={{
                borderRadius: 100,
                width: '60%',
                height: '60%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/images/logo.png')} />
            </View>
          </View>
          <View>
            <DrawerItems {...this.props} />
          </View>
        </ScrollView>
        <View
          style={{
            height: 60,
            flex: 1,
            position: 'absolute',
            width: '100%',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopColor: 'lightgrey',
            borderStyle: 'solid',
            borderTopWidth: 2,
          }}>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default SideMenu;
