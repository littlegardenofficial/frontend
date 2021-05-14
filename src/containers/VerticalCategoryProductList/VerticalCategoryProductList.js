import {connect} from 'react-redux';
import React, {Component} from 'react';
import {ScrollView, View, } from 'react-native';
import styles from './VerticalCategoryProductListStyles';
import Product from '../../components/Product/Product';
import {requestAddItemToCartAction} from '../../redux/actions/cartAction';
import {HIDE_SCROLL_INDICATOR, SCROLL_EVENT_THROTTLE} from '../../styles/theme';
import {renderCartButton , isCartButtonEnabled} from '../../utils/ComponentRendererUtil';
import { DEVICE_WIDTH } from '../../utils/DeviceParamsUtil';

class VerticalCategoryProductList extends Component {
  cardWidth = DEVICE_WIDTH - 20;
  constructor(props) {
    super(props);
  }

  fetchAllProductsForThisCategory = () => {};

  onAddingItemToCart = item => {
    this.props.addItemToCart({...item, userId: this.props.cart.userId});
  };

  getProductListHeight = () => {
    return {height: isCartButtonEnabled(this.props) ? '95%' : '100%'};
  };

  renderProductList = () => {
    return this.props.navigation.state.params.productList.map(product => (
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
        {renderCartButton(this.props)}
      </View>
    );
  }
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
