import {connect} from 'react-redux';
import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './HorizontalCategoryProductListStyles';
import Product from '../../components/Product/Product';
import { DEVICE_WIDTH } from '../../utils/DeviceParamsUtil';
import CartProduct from '../../components/CartProduct/CartProduct';
import { requestAddItemToCartAction } from '../../redux/actions/cartAction';
import {isUserLoggedIn} from '../../utils/ComponentRendererUtil';
import {showInfoFlashMessage} from '../../utils/FlashMessageUtil';
import {PLEASE_LOGIN_TO_ADD_TO_CART} from '../../utils/AppConstants';

class HorizontalCategoryProductList extends Component {
  cardWidth = DEVICE_WIDTH -30;
  constructor(props) {
    super(props);
  }

  onAddingItemToCart = item => {
    if  (isUserLoggedIn(this.props.auth))  {
      this.props.addItemToCart({...item, userId: this.props.cart.userId});
    }  else  {
      showInfoFlashMessage(PLEASE_LOGIN_TO_ADD_TO_CART);
    }
  };

  renderProductList = () => {
      return this.props.category.productList.map(product => (
        <Product
          productCardStyle={{width : this.cardWidth , marginRight: 8}}
          key={product.id}
          addItem={this.onAddingItemToCart}
          item={product}
        />
      ));
  }

  renderCategoryHeader = () => {
    return this.props.isForCart ? <View></View> :
    <View style={styles.productListContainer}>
          <Text style={styles.categoryTitle}>
            {this.props.category.categoryTitle != null
              ? this.props.category.categoryTitle
              : ''}
          </Text>
          <TouchableOpacity
            style={styles.showMoreContainerStyle}
            onPress={() => this.props.openCategoryProductList(this.props.category)}>
            <Text
              style={styles.showMoreTitleStyle}>
              {' '}
              Show All
            </Text>
            <Icon name="chevron-right" size={25} color="blue" />
          </TouchableOpacity>
        </View> 
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderCategoryHeader()}
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          contentContainerStyle={{paddingHorizontal: 5}}
          showsHorizontalScrollIndicator={false}>
          {this.renderProductList()}
        </ScrollView>
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
    addItemToCart : (item) => {
      dispatch(requestAddItemToCartAction(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HorizontalCategoryProductList);