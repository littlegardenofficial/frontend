import React from 'react';
import CartButton from '../containers/CartButton/CartButton';
import {isNotEmpty, isNotNullOrUndefined} from './HelperUtil';
import {View} from 'react-native';

export const renderCartButton = props => {
  return isCartButtonEnabled(props) ? <CartButton /> : <View></View>;
};

export const isCartButtonEnabled = props => {
  if (isNotNullOrUndefined(props.cart) && isNotEmpty(props.cart.cartItems)) {
    return true;
  } else {
    return false;
  }
};
