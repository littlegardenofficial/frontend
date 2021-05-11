import {connect} from 'react-redux';
import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import styles from './VerticalCategoryProductListStyles';
import Product from '../../components/Product/Product';
import {requestAddItemToCartAction} from '../../redux/actions/cartAction';
import CartButton from '../CartButton/CartButton';
import {isNotEmpty, isNotNullOrUndefined} from '../../utils/HelperUtil';

class VerticalCategoryProductList extends Component {
  constructor(props) {
    super(props);
  }

  fetchAllProductsForThisCategory = () => {};

  onAddingItemToCart = item => {
    this.props.addItemToCart({...item, userId: this.props.cart.userId});
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{height: this.isCartButtonEnabled() ? '95%' : '100%'}}>
          <ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={{
              paddingHorizontal: 5,
              width: '100%',
            }}
            showsVerticalScrollIndicator={false}>
            {this.props.navigation.state.params.productList.map(product => (
              <View
                style={{
                  height: 160,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Product
                  cardWidth="100%"
                  key={product.id}
                  addItem={this.onAddingItemToCart}
                  item={product}
                />
              </View>
            ))}
            {this.props.navigation.state.params.productList.map(product => (
              <View
                style={{
                  height: 140,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Product
                  cardWidth="100%"
                  key={product.id}
                  addItem={this.onAddingItemToCart}
                  item={product}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        {this.isCartButtonEnabled() ? <CartButton /> : <View></View>}
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

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    addItemToCart: item => {
      dispatch(requestAddItemToCartAction(item));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerticalCategoryProductList);
