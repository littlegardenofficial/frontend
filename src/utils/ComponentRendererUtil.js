import React from 'react';
import CartButton from '../containers/CartButton/CartButton';
import {isNotEmpty, isNotNullOrUndefined} from './HelperUtil';
import {View} from 'react-native';
import CheckoutButton from '../components/CheckoutButton/CheckoutButton';

export const renderCartButton = props => {
  return isCartButtonEnabled(props) ? (
    <CartButton navigation={props.navigation} />
  ) : (
    <View></View>
  );
};

export const isCartButtonEnabled = props => {
  if (isNotNullOrUndefined(props.cart) && isNotEmpty(props.cart.cartItems)) {
    return true;
  } else {
    return false;
  }
};

export const renderCheckoutButton = data => {
  return <CheckoutButton {...data}></CheckoutButton>;
};
