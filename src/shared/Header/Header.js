import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar, Button, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InterCommRoutingService from '../../services/interCommRoutingService';
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
    InterCommRoutingService.routeToScreen('Search', null);
  };

  onSearch = key => {
    console.log(key);
    this.props.navigation.navigate('Search');
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Button
          icon={<Icon name="segment" size={30} color="white" />}
          type="clear"
          onPress={this.onOpenDrawer}
          buttonStyle={styles.noPaddingMargin}
        />
        <View style={styles.searchLogin}>
          <Button
            icon={<Icon name="search" size={24} color="white" />}
            type="clear"
            onPress={this.openSearchPage}
          />
          <TouchableOpacity style={{marginLeft: 10}}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
