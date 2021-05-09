import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import InterCommRoutingService from '../../services/interCommRoutingService';
import styles from './HomeStyle';
import HorizontalCategoryProductList from '../../containers/HorizontalCategoryProductList/HorizontalCategoryProductList';
import Offerlist from '../../containers/OfferList/OfferList';
import FilterList from '../../containers/FilterList/FilterList';
import CartButton from '../../containers/CartButton/CartButton';
import {fetchCategoryList} from '../../redux/actions/categoryAction';
import {fetchUserCartAction} from '../../redux/actions/cartAction';
import {isNotEmpty, isNotNullOrUndefined} from '../../utils/HelperUtil';

class Home extends Component {
  constructor(props) {
    super(props);
    InterCommRoutingService.navigationProps = this.props.navigation;
    this.props.fetchCategoryList();
    this.props.fetchCartData(12);
  }

  componentDidUpdate() {}

  onPressHandler = item => {
    this.props.navigation.navigate('Reviews', item);
  };

  onOpenCart = () => {
    this.props.navigation.navigate('Cart');
  };

  render() {
        return (
          <View style={styles.wrapper}>
            <ScrollView
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              style={{...styles.body , height: (this.isCartButtonEnabled() ? '95%' : '100%')}}
              stickyHeaderIndices={[1]}>
              <Offerlist />
              {this.props.categoryProductMap != null &&
              this.props.categoryProductMap.length != 0 ? (
                <FilterList categoryProductMap={this.props.categoryProductMap} />
              ) : (
                <View></View>
              )}
              {this.props.categoryProductMap != null &&
              this.props.categoryProductMap.length != 0
                ? this.props.categoryProductMap
                    .filter(category => category.productList.length != 0)
                    .map(category => {
                      return (
                        <HorizontalCategoryProductList
                          key={category.id}
                          category={category}
                        />
                      );
                    })
                : <View></View>}
            </ScrollView>
            {(this.isCartButtonEnabled()) ? 
              <CartButton/> :
               <View></View>}
          </View>
        );
  }
  
  isCartButtonEnabled = () => {
    if (
      isNotNullOrUndefined(this.props.cart) &&
      isNotEmpty(this.props.cart.cartItems)
    ) {
      return true;
    } else {
      return false;
    }
  };

}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    categoryProductMap: state.categoryProductMap,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    fetchCategoryList: () => {
      dispatch(fetchCategoryList());
    },
    fetchCartData: userId => {
      dispatch(fetchUserCartAction(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
