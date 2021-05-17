import React from 'react';
import styles from './CheckoutButtonStyles';
import {View, TouchableOpacity, Text} from 'react-native';
import {PROCEED_TO_CHECKOUT} from '../../utils/AppConstants';
import {THEME_CONTRAST_COLOR, THEME_TEXT_COLOR} from '../../styles/theme';

class CheckoutButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  onOpenCheckoutPage = () => {
    // this.props.navigation.navigate(ROUTES.CART);
  };

  render() {
    return (
      <View style={{...styles.wrapper, ...this.props.styles}}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={this.props.onPressButton}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.cartTitle}>{PROCEED_TO_CHECKOUT}</Text>
            <Text style={styles.amount}>
              {'\u20B9'} {this.props.data.cartTotal}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CheckoutButton;
