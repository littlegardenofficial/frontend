import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import OrderItem from '../../components/OrderItem/OrderItem';
import {fetchMyOrdersAction} from '../../redux/actions/myOrders';
import ROUTES from '../../routes/routeNames';
import InterCommRoutingService from '../../services/interCommRoutingService';
import { HIDE_SCROLL_INDICATOR, SCROLL_EVENT_THROTTLE } from '../../styles/theme';
import {isUserLoggedIn} from '../../utils/ComponentRendererUtil';
import { showInfoFlashMessage } from '../../utils/FlashMessageUtil';
import { isNotEmpty, isNotNullOrUndefined } from '../../utils/HelperUtil';
import styles from './MyOrdersStyles';
import { CommonActions, StackActions } from '@react-navigation/native';
import { NavigationEvents } from 'react-navigation';

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.fetchMyOrdersIfLoggedIn();
  }

  fetchMyOrdersIfLoggedIn = () => {
    if (isUserLoggedIn(this.props.auth)) {
      this.props.fetchMyOrders(this.props.auth.userId);
    }
  };

  componentDidUpdate() {
    if (
      !isNotNullOrUndefined(this.props.orders) &&
      isUserLoggedIn(this.props.auth)
    ) {
      this.fetchMyOrdersIfLoggedIn();
    }
  }

  navigateToLoginPage = () => {
    if (!isUserLoggedIn(this.props.auth)) {
      showInfoFlashMessage('Please login to see your orders');
      this.props.navigation.navigate(ROUTES.LOGIN, null);
    }
  };

  componentDidMount() {
    console.log('component mounted myorders')
  }

  componentWillUnmount() {
    console.log('compoentn will unmount myorders');
  }

  renderOrderItemList = () => {
    return isNotNullOrUndefined(this.props.orders) &&
      isNotEmpty(this.props.orders.orders) ? (
      <View style={{minHeight: '100%'}}>
        <ScrollView
          scrollEventThrottle={SCROLL_EVENT_THROTTLE}
          contentContainerStyle={styles.scrollContainerStyle}
          showsVerticalScrollIndicator={HIDE_SCROLL_INDICATOR}>
          {this.props.orders.orders.map(order => {
            return <OrderItem key={order.orderId} order={order} />;
          })}
        </ScrollView>
      </View>
    ) : (
      <View></View>
    );
  };

  renderOrders = () => {
    this.navigateToLoginPage();
    return (
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}>
        <NavigationEvents
          onDidFocus={payload => this.navigateToLoginPage()}
        />
        {isUserLoggedIn(this.props.auth) ? (
          this.renderOrderItemList()
        ) : (
          <View>
            <Text>Please Login !</Text>
          </View>
        )}
      </View>
    );
  };

  render() {
    return this.renderOrders();
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    auth: state.auth,
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    fetchMyOrders: userId => {
      dispatch(fetchMyOrdersAction(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
