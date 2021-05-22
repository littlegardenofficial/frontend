import React, {Component} from 'react';
import styles from './OrderPlacedStyles';
import {View, Text, Image as Img, TouchableOpacity} from 'react-native';

class OrderPlaced extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.dialogContainer}>
          <Img
            source={require('../../../../assets/images/orderplaced.jpg')}
            style={styles.image}></Img>
          <Text style={styles.title}>Order Placed Successfully</Text>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.viewOrdersbutton}
              onPress={this.props.openMyOrders}>
              <Text style={styles.buttonTitle}>View Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={this.props.onPopupClose}>
              <Text style={styles.buttonTitle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default OrderPlaced;
