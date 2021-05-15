import React from 'react';
import styles from './CartButtonStyles';
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux'
import ROUTES from '../../routes/routeNames';

class CartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onOpenCart = () => {
    this.props.navigation.navigate(ROUTES.CART);
  };

  componentDidUpdate() {}

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.cartButton} onPress={this.onOpenCart}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.cartTitle}>Cart </Text>
            <Icon
              name="shopping-cart"
              color="white"
              containerStyle={{height: 25}}
            />
          </View>
          <Text style={{color: 'white', fontSize: 20}}>
                    {'\u20B9'} {this.props.cart.cartTotal}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  // let totalElementCounts = this.calculateTotalItemInCart(state.cart.cartItems)
  return {
    ...props,
    cart: state.cart,
  };
};

export default connect(mapStateToProps , null)(CartButton);
