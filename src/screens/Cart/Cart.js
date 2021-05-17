import React , {Component} from 'react';
import {View , Text  , TouchableOpacity} from 'react-native';
import { BottomSheet , Button } from 'react-native-elements';
import VerticalCategoryProductList from '../../containers/VerticalCategoryProductList/VerticalCategoryProductList';
import styles from './CartStyles';
import {findPrimaryAddress, renderCheckoutButton} from '../../utils/ComponentRendererUtil'
import { connect } from 'react-redux';
import AddressCard from '../../components/AddressCard/AddressCard';
import { DEVICE_WIDTH } from '../../utils/DeviceParamsUtil';

class Cart extends Component {
  selectedOrderForDelivery = null;

  constructor(props) {
    super(props);
    this.selectedOrderForDelivery = findPrimaryAddress({
      data: props.auth.address,
    });
    this.state = {
      isVisible : false,
    }
  }

  getComponentConditionally = (isForPriceDetails) => {
    return isForPriceDetails ? 
    (<View style={styles.bottomSheetContainer}>
        <View style={styles.bottomSheetItem}>
          <Text style={styles.smallTitle}>Total Price </Text>
          <Text style={styles.price}>{'\u20B9'} {this.props.cart.cartTotal}</Text>
        </View>
        <View style={styles.bottomSheetItem}>
          <Text style={styles.smallTitle}>Delivery Charges </Text>
          <Text style={styles.price}> + {'\u20B9'} {0}</Text>
        </View>
        <View style={{...styles.bottomSheetItem , ...styles.divider}}>
          <Text style={styles.smallTitle}>Discount</Text>
          <Text style={{...styles.price , ...styles.discount}}> - {'\u20B9'} {0}</Text>
        </View>
        <View style={styles.bottomSheetItem }>
          <Text style={{...styles.smallTitle }}>Final Price : </Text>
          <Text style={{...styles.price , ...styles.finalPrice}}>{'\u20B9'} {this.props.cart.cartTotal}</Text>
        </View>
        <TouchableOpacity style={styles.placeOrderButton}>
          <Text style={styles.actionButtonTitle}>Place Order</Text>
        </TouchableOpacity>
      </View>) :
     (<View><Text>GM</Text></View>)
  }

  renderBottomSheetForPriceDetails = (isForPriceDetails) => {
    return (
      <BottomSheet
        isVisible={this.state.isVisible}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
        {this.getComponentConditionally(isForPriceDetails)}
        <TouchableOpacity 
        style={styles.closeBottomSheet} 
        onPress={() => this.setState({isVisible : false})} >
          <Text style={styles.actionButtonTitle}>Close</Text>
        </TouchableOpacity>
      </BottomSheet>
    );
  };

  onPressCheckoutButton = () => {
    console.log("here");
    this.setState({isVisible : true})
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{height: '92%'}}>
          <AddressCard
            addressCardStyle={{height: '14%', width: DEVICE_WIDTH}}
            data={this.props.auth}></AddressCard>
          <VerticalCategoryProductList isForCart={true} />
        </View>
        {renderCheckoutButton({
          styles: styles.checkoutButton,
          data: this.props.cart,
          onPressButton : this.onPressCheckoutButton
        })}
        {this.renderBottomSheetForPriceDetails(true)}
      </View>
    );
  }
}

const mapStateToProps = (state , props) => {
  return {
    ...props ,
    auth : state.auth,
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch , props) => {
  return {
    ...props,
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Cart);