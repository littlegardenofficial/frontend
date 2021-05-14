import React, {Component} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import InterCommRoutingService from '../../services/interCommRoutingService';
import styles from './SearchHeaderStyles';

class SearchHeader extends Component {
  search;
  updateSearch;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.search}>
          <SearchBar
            placeholder="Search Product "
            containerStyle={styles.searchBarContainerStyle}
            inputContainerStyle={styles.searchBarInputContainerStyle}
            inputStyle={styles.searchInputStyle}
            style={styles.searchBarStyle}
            onChangeText={this.updateSearch}
            value={this.search}
          />
        </View>
      </View>
    );
  }
}

export default SearchHeader;
