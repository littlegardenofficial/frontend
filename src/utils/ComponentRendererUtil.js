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
  if (
    isNotNullOrUndefined(props.cart) &&
    isNotEmpty(props.cart.cartItems) &&
    isUserLoggedIn(props.auth)
  ) {
    return true;
  } else {
    return false;
  }
};

export const renderCheckoutButton = data => {
  return <CheckoutButton {...data}></CheckoutButton>;
};

export const isUserLoggedIn = auth => {
  return isNotNullOrUndefined(auth) ? true : false;
};

export const findPrimaryAddress = props => {
  return isNotEmpty(props.data.address)
    ? props.data.address
        .filter(add => add.primary === true)
        .map(add => {
          return {
            ...add,
            addressLine1: add.addressLine1.substring(0, 20) + '...',
          };
        })[0]
    : {
        addressName: 'No Address Found',
        city: 'Add new Address',
        addressLine1: '',
        noAddress: true,
      };
};