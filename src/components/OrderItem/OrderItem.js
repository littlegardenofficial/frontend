import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {THEME_COLOR} from '../../styles/theme';
import {isNotEmpty} from '../../utils/HelperUtil';
import CartProduct from '../CartProduct/CartProduct';
import styles from './OrderItemStyles';

class OrderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          marginVertical: 15,
          backgroundColor: THEME_COLOR,
          width: '100%',
          padding: 5,
          borderRadius: 5,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            width: '99%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.smallText}>Order Date :</Text>
          </View>
          <View>
            <Text style={styles.smallText}>
              {this.props.order.orderDate.toString()}
            </Text>
          </View>
        </View>
        {isNotEmpty(this.props.order.orderItems) ? (
          this.props.order.orderItems.map(orderItem => {
            return (
              <CartProduct
                productCardStyle={{
                  height: 100,
                  width: '100%',
                  marginHorizontal: 0,
                  marginVertical: 1,
                }}
                item={orderItem}
                isOrdered={true}
              />
            );
          })
        ) : (
          <View></View>
        )}
        <View
          style={{
            width: '99%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.smallText}> Address :</Text>
          <Text style={styles.smallText}>
            {this.props.order.deliverTo.addressName} ,{' '}
            {this.props.order.deliverTo.pinCode} ,{' '}
            {this.props.order.deliverTo.state}
          </Text>
        </View>
      </View>
    );
  }
}

export default OrderItem;
