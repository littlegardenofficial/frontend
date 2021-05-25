import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PriceBreakupStyles';

const PriceBreakup = props => {
  return (
    <View style={styles.bottomSheetContainer}>
      <View style={styles.bottomSheetItem}>
        <Text style={styles.smallTitle}>Total Price </Text>
        <Text style={styles.price}>
          {'\u20B9'} {props.cart.cartTotal}
        </Text>
      </View>
      <View style={styles.bottomSheetItem}>
        <Text style={styles.smallTitle}>Delivery Charges </Text>
        <Text style={styles.price}>
          {' '}
          + {'\u20B9'} {0}
        </Text>
      </View>
      <View style={{...styles.bottomSheetItem, ...styles.divider}}>
        <Text style={styles.smallTitle}>Discount</Text>
        <Text style={{...styles.price, ...styles.discount}}>
          {' '}
          - {'\u20B9'} {0}
        </Text>
      </View>
      <View style={styles.bottomSheetItem}>
        <Text style={{...styles.smallTitle}}>Final Price : </Text>
        <Text style={{...styles.price, ...styles.finalPrice}}>
          {'\u20B9'} {props.cart.cartTotal}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={props.onPlaceOrder}>
        <Text style={styles.actionButtonTitle}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceBreakup;
