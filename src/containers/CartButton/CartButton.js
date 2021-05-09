import React from 'react';
import styles from './CartButtonStyles';
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon, Badge} from 'react-native-elements';
import { connect } from 'react-redux'

class CartButton extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
  }

  // calculateTotalItemInCart = (cartItems) => {
  //   console.log('calculate')
  //   let totalElements = 0;
  //   for(let i = 0;i< cartItems.length ;i++ ) {
  //     totalElements += cartItems[i].quantity;
  //   }
  //   return totalElements;
  // }

  render() {
    console.log("in rerender")
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
            
            {this.props.cart.itemCount}
          
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
