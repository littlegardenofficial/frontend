import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar, Button, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InterCommRoutingService from '../services/interCommRoutingService';

class Header extends Component {
  search;
  constructor(props) {
    super(props);
  }

  onOpenDrawer = () => {
    this.props.navigation.openDrawer();
  };

  openSearchPage = () => {
      InterCommRoutingService.routeToScreen('Search',null);
  }

  styles = StyleSheet.create({
    headerStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  onSearch = key => {
    console.log(key);
    this.props.navigation.navigate('Search');
  };

  render() {
    return (
      <View style={this.styles.headerStyle}>
        <Button
          icon={<Icon name="segment" size={30} color="white" />}
          type="clear"
          onPress={this.onOpenDrawer}
          buttonStyle={{paddingLeft: 0 , marginLeft: 0}}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Button
          icon={<Icon name="search" size={24} color="white" />}
          type="clear"
          onPress={this.openSearchPage}
            />
          <TouchableOpacity style={{marginLeft: 10}} >
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
