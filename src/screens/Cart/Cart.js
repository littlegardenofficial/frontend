import React , {Component} from 'react';
import {View , Text  , TouchableOpacity  , Image as Img } from 'react-native';
import { BottomSheet , ListItem , Button  } from 'react-native-elements';
import VerticalCategoryProductList from '../../containers/VerticalCategoryProductList/VerticalCategoryProductList';
import styles from './CartStyles';
import {findPrimaryAddress, isCartButtonEnabled, renderCheckoutButton} from '../../utils/ComponentRendererUtil'
import { connect } from 'react-redux';
import AddressCard from '../../components/AddressCard/AddressCard';
import { DEVICE_WIDTH } from '../../utils/DeviceParamsUtil';
import { requestPlaceOrderAction } from '../../redux/actions/cartAction';
import PriceBreakup from '../../components/PriceBreakup/PriceBreakup';
import AddressSelector from '../../components/AddressSelector/AddressSelector';
import { selectAddressForDeliveryAction } from '../../redux/actions/userDataAction';

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible : false,
      forPricing: true ,
    }
  }

  placeOrder = () => {
    this.setState({ isVisible: false})
    let deliverToAddress = findPrimaryAddress({
      data: this.props.auth,
    });
    let requestPayload = {
      productList: {...this.props.cart},
      deliverTo: deliverToAddress,
    }; 
    this.props.requestPlaceOrder(requestPayload);
  }

  onPressCheckoutButton = () => {
    this.setState({isVisible : true , forPricing : true})
  }

  onPressAddressChangeButton = () => {
    this.setState({isVisible : true , forPricing : false});
  }

  returnBackToHomeIfCartIsEmpty = () => {
    if(!isCartButtonEnabled(this.props)){
      this.props.navigation.goBack();
    }
  }

  getComponentConditionally = (isForPriceDetails) => {
    return isForPriceDetails ? 
    (<PriceBreakup 
      cart={this.props.cart} 
      onPlaceOrder={this.placeOrder}
      />) :
     (<AddressSelector auth={this.props.auth} onSelectAddress={this.props.selectAddressForDelivery}/>)
  }

  renderBottomSheetForPriceDetails = () => {
    return (
      <BottomSheet
        isVisible={this.state.isVisible}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
        {this.getComponentConditionally(this.state.forPricing)}
        <TouchableOpacity 
        style={styles.closeBottomSheet} 
        onPress={() => this.setState({isVisible : false})} >
          <Text style={styles.actionButtonTitle}>Close</Text>
        </TouchableOpacity>
      </BottomSheet>
    );
  };


  render() {
    return (
      <View style={styles.wrapper}>
        {this.returnBackToHomeIfCartIsEmpty()}
        <View style={styles.cartContainer}>
          <AddressCard
            addressCardStyle={styles.addressCardStyle}
            data={this.props.auth}
            onPressChange={this.onPressAddressChangeButton}></AddressCard>
          <VerticalCategoryProductList isForCart={true} />
        </View>
        {renderCheckoutButton({
          styles: styles.checkoutButton,
          data: this.props.cart,
          onPressButton: this.onPressCheckoutButton,
        })}
        {this.renderBottomSheetForPriceDetails()}
      </View>
    );
  }
}

const mapStateToProps = (state , props) => {
  return {
    ...props ,
    auth : state.auth,
    cart : state.cart,
  }
}

const mapDispatchToProps = (dispatch , props) => {
  return {
    ...props,
    requestPlaceOrder: (payload) => {dispatch(requestPlaceOrderAction(payload))},
    selectAddressForDelivery : (addressId) => {dispatch(selectAddressForDeliveryAction(addressId))}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Cart);