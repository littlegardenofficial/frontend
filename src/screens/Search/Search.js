import React , {Component} from 'react';
import {View , Text} from 'react-native';
import VerticalCategoryProductList from '../../containers/VerticalCategoryProductList/VerticalCategoryProductList';
import InterCommRoutingService from '../../services/interCommRoutingService';
import { renderCartButton } from '../../utils/ComponentRendererUtil';
import styles from './SearchStyle';
import { connect } from 'react-redux';

class Search extends Component {
    navigationProps ;
    constructor(props){
        super(props);
        this.navigationProps = InterCommRoutingService.navigationProps;
    }

    render(){
        return (
          <View style={styles.searchWrapper}>
            <VerticalCategoryProductList
              showSearchResults={true}>
              </VerticalCategoryProductList>
              {renderCartButton({...this.props , navigation : this.navigationProps})}
          </View>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
      ...props,
      cart: state.cart,
      auth: state.auth,
    };
  };

  
  export default connect(mapStateToProps, null)(Search);