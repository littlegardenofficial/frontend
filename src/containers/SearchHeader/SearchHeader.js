import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {SearchBar} from 'react-native-elements';
import InterCommRoutingService from '../../services/interCommRoutingService';
import styles from './SearchHeaderStyles';

class SearchHeader extends Component {
  search;
  updateSearch;
  searchBarWidth;
  constructor(props) {
    super(props);
    this.searchBarWidth = Dimensions.get('window').width;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.search}>
          <SearchBar
            placeholder="Search Product "
            containerStyle={{
              flex: 1,
              //   width: this.searchBarWidth,
              height: 50,
              backgroundColor: 'green',
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 0,
              borderRadius: 0,
              color: 'white',
            }}
            inputContainerStyle={{
              height: 50,
              backgroundColor: 'green',
              borderColor: 'white',
              margin: 0,
              color: 'white',
              //   width: this.searchBarWidth,
              paddingHorizontal: 0,
              marginHorizontal: 0,
              margin: 0,
              borderRadius: 0,
              borderBottomColor: 'white',
              borderBottomWidth: 3,
            }}
            inputStyle={{color: 'white'}}
            style={{backgroundColor: 'green'}}
            onChangeText={this.updateSearch}
            value={this.search}
          />
          {/* <TouchableOpacity style={{marginLeft: 10}}>
            <Text style={styles.searchTitle}>Search</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

export default SearchHeader;
