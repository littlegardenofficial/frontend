import {connect} from 'react-redux';
import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import { Button , Icon} from 'react-native-elements';
import styles from './HorizontalCategoryProductListStyles';
import Product from '../../components/Product/Product';
import { requestAddItemToCartAction } from '../../redux/actions/cartAction';


class HorizontalCategoryProductList extends Component {
  constructor(props) {
    super(props);
  }

  onAddingItemToCart = item => {
    this.props.addItemToCart({...item, userId: this.props.cart.userId});
  };

  openCategoryProductList = () => {
    this.props.navigation.navigate('CategoryProduct', this.props.category);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 6 , 
          }}>
          <Text style={styles.categoryTitle}>
            {this.props.category.categoryTitle != null
              ? this.props.category.categoryTitle
              : ''}
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.openCategoryProductList()}>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                marginRight: 0,
                paddingRight: 0,
                fontSize: 14,
              }}>
              {' '}
              Show All
            </Text>
            <Icon name="chevron-right" size={25} color="blue" />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          contentContainerStyle={{paddingHorizontal: 5}}
          showsHorizontalScrollIndicator={false}>
          {this.props.category.productList.map(product => (
            <Product
              key={product.id}
              addItem={this.onAddingItemToCart}
              item={product}
            />
          ))}
        </ScrollView>
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
    addItemToCart : (item) => {
      dispatch(requestAddItemToCartAction(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HorizontalCategoryProductList);
