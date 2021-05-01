import {connect} from 'react-redux';
import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './HorizontalCategoryProductListStyles';
import Product from '../../components/Product/Product';
import {requestFetchProducts} from '../../redux/actions/productsAction';

class HorizontalCategoryProductList extends Component {
  constructor(props) {
    super(props);
    this.fetchProducts();
  }

  fetchProducts = () => {
    if (!this.props.loaded) {
      this.props.fetchProducts();
    }
  };

  onAddingItemToCart = () => {};

  render() {
    return (
      // <View style={{flex: 1}}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.categoryTitle}> Vegetables </Text>
        </View>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          contentContainerStyle={{paddingHorizontal: 8}}
          showsHorizontalScrollIndicator={false}>
          {this.props.productList.map(product => (
            <Product key={product.id} item={product} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    productList: state.products.productList,
    loaded: state.products.loaded,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    fetchProducts: () => {
      dispatch(requestFetchProducts(null));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HorizontalCategoryProductList);
