import React from 'react';
import {View, Text} from 'react-native';
import productSaga from '../../saga/productsSaga';
import styles from './ProductStyles';

const Product = props => {
  return (
    <View style={styles.productCard}>
      <Text>{props.item.productName}</Text>
    </View>
  );
};

export default Product;
