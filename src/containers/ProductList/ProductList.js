import {connect} from 'react-redux';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './ProductListStyles';
import Product from '../../components/Product/Product';
import {requestFetchProducts} from '../../redux/actions/productsAction';
class ProductList extends Component {
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
        <View style={styles.productsContainer}>
          {this.props.productList.map(product => (
            <Product key={product.id} item={product} />
          ))}
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
