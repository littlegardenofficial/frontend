import {connect} from 'react-redux';
import React, {Component} from 'react';
import {ScrollView, View, Text } from 'react-native';
import styles from './VerticalCategoryProductListStyles';
import Product from '../../components/Product/Product';
import {requestAddItemToCartAction, requestRemoveItemFromCartAction} from '../../redux/actions/cartAction';
import {HIDE_SCROLL_INDICATOR, SCROLL_EVENT_THROTTLE} from '../../styles/theme';
import {renderCartButton , isCartButtonEnabled, isUserLoggedIn } from '../../utils/ComponentRendererUtil';
import { DEVICE_WIDTH } from '../../utils/DeviceParamsUtil';
import CartProduct from '../../components/CartProduct/CartProduct'
import { sortProductByProductId } from '../../utils/HelperUtil';
import { showInfoFlashMessage } from '../../utils/FlashMessageUtil';
import { PLEASE_LOGIN_TO_ADD_TO_CART } from '../../utils/AppConstants';

class VerticalCategoryProductList extends Component {
  cardWidth = DEVICE_WIDTH - 20;

  constructor(props) {
    super(props);
    this.state = {
      bottomSheetIsVisible : false,
    }
  }

  fetchAllProductsForThisCategory = () => {};

  onAddingItemToCart = item => {
    if(isUserLoggedIn(this.props.auth)){
      this.props.addItemToCart({...item, userId: this.props.cart.userId});
    }else{
      showInfoFlashMessage(PLEASE_LOGIN_TO_ADD_TO_CART);
    }
  };

  onRemovingItemToCart = item => {
    this.props.removeItemFromCart({...item, userId: this.props.cart.userId});
  };

  getProductListHeight = () => {
    return {height: isCartButtonEnabled(this.props) && !this.props.isForCart ? '95%' : '100%'};
  };

  renderProductList = () => {
    if(this.props.isForCart){
      // should show products from cart object 
      return this.props.cart.cartItems
        .sort(sortProductByProductId)
        .map(product => (
          <View style={{...styles.productCardWrapper , height: 80}}>
            <CartProduct
              productCardStyle={{
                width: this.cardWidth,
                marginBottom: 8,
                marginRight: 0,
                height: 80,
              }}
              key={product.id}
              addItem={this.onAddingItemToCart}
              removeItem={this.onRemovingItemToCart}
              item={product}
            />
          </View>
        ));
    }else{
    return this.props.navigation.state.params.productList
    .sort(sortProductByProductId)
    .map(product => (
      <View
        style={styles.productCardWrapper}>
        <Product
          productCardStyle={{width : this.cardWidth , marginRight: 0}}
          key={product.id}
          addItem={this.onAddingItemToCart}
          item={product}
        />
      </View>
    ))
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={this.getProductListHeight()}>
          <ScrollView
            scrollEventThrottle={SCROLL_EVENT_THROTTLE}
            contentContainerStyle={styles.scrollContainerStyle}
            showsVerticalScrollIndicator={HIDE_SCROLL_INDICATOR}>
            {this.renderProductList()}
          </ScrollView>
        </View>
        {!this.props.isForCart ? renderCartButton(this.props) : <View></View>}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    cart: state.cart,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    addItemToCart: item => {
      dispatch(requestAddItemToCartAction(item));
    },
    removeItemFromCart: item => {
      dispatch(requestRemoveItemFromCartAction(item))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerticalCategoryProductList);
