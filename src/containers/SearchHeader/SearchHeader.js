import React, {Component} from 'react';
import {View , Text} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import { fetchProductsSearchResult } from '../../redux/actions/productsAction';
import { generateRequestPayloadForProductSearch, isNotNullOrUndefined } from '../../utils/HelperUtil';
import styles from './SearchHeaderStyles';
import { connect } from 'react-redux';
import { THEME_COLOR, THEME_TEXT_COLOR } from '../../styles/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { showInfoFlashMessage } from '../../utils/FlashMessageUtil';
import { PLEASE_ENTER_VALID_SEARCH_STRING } from '../../utils/AppConstants';

class SearchHeader extends Component {
  updateSearch;
  lastSearch ;
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onChange = value => {
    console.log(value);
    this.setState({search: value});
  };

  hitSearch = () => {
    console.log(this.state.search);
    if(this.lastSearch !== this.state.search && isNotNullOrUndefined(this.state.search) && this.state.search !== ""){
      this.props.searchProductsByName(generateRequestPayloadForProductSearch({searchString : this.state.search}));
      this.lastSearch = this.state.search;
    }else{
      showInfoFlashMessage(PLEASE_ENTER_VALID_SEARCH_STRING);
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.search}>
          <SearchBar
            placeholder="Search Product "
            placeholderTextColor={THEME_TEXT_COLOR}
            containerStyle={styles.searchBarContainerStyle}
            inputContainerStyle={styles.searchBarInputContainerStyle}
            inputStyle={styles.searchInputStyle}
            style={styles.searchBarStyle}
            onChangeText={this.onChange}
            value={this.state.search}
            searchIcon={false}
          />
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={this.hitSearch}>
          <Icon style={styles.searchButtonTitle} color={THEME_TEXT_COLOR} name="search">
          </Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch , props) => {
  return {
    ...props ,
    searchProductsByName : (request) => {dispatch(fetchProductsSearchResult(request))}
  }
}

export default connect(null , mapDispatchToProps)(SearchHeader);
