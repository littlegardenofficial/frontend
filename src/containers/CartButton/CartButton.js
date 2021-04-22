import React from 'react';
import styles from './CartButtonStyles';
import {View, TouchableOpacity, Text} from 'react-native';

class CartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.cartButton} onPress={this.onOpenCart}>
          <Text style={styles.cartTitle}>Go To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CartButton;
