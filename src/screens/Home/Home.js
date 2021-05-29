import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView , Modal } from 'react-native';
import InterCommRoutingService from '../../services/interCommRoutingService';
import styles from './HomeStyle';
import HorizontalCategoryProductList from '../../containers/HorizontalCategoryProductList/HorizontalCategoryProductList';
import Offerlist from '../../containers/OfferList/OfferList';
import FilterList from '../../containers/FilterList/FilterList';
import {fetchCategoryList} from '../../redux/actions/categoryAction';
import {SCROLL_EVENT_THROTTLE, HIDE_SCROLL_INDICATOR} from '../../styles/theme';
import ROUTES from '../../routes/routeNames';
import {
  renderCartButton,
  isCartButtonEnabled,
} from '../../utils/ComponentRendererUtil';
import OrderPlaced from '../../components/modalComponents/OrderPlaced/OrderPlaced';
import { closeOrderPlacedDialogAction } from '../../redux/actions/orderPlacedDialogAction';
import {requestFetchProducts} from '../../redux/actions/productsAction';
import { generateRequestPayloadForCategoryPageProductList, sortCategoryById } from '../../utils/HelperUtil';

class Home extends Component {
  
  constructor(props) {
    super(props);
    InterCommRoutingService.navigationProps = this.props.navigation;
    this.props.fetchCategoryList();
  }

  openCategoryProductList = category => {
    if(category.productCount > category.productList.length){
      this.props.fetchProductList(generateRequestPayloadForCategoryPageProductList({id : category.id , productCount: category.productCount}))
    }
    this.props.navigation.navigate(ROUTES.CATEGORY_PRODUCT, category);
  };

  openMyOrders = () => {
    this.props.closePlaceOrderDialog();
    this.props.navigation.navigate(ROUTES.MY_ORDERS);
  };

  getBodyStylesOnTheBasisOfCart = () => {
    return {
      ...styles.body,
      height: isCartButtonEnabled(this.props) ? '95%' : '100%',
    };
  };

  onClosePopup = () => {
    this.props.closePlaceOrderDialog();
  };
  
  renderCategoryProductsList = () => {
    return this.props.categoryProductMap != null &&
      this.props.categoryProductMap.length != 0 ? (
      this.props.categoryProductMap
        .filter(category => category.productList.length != 0)
        .sort(sortCategoryById)
        .map(category => {
          return (
            <HorizontalCategoryProductList
              key={category.id}
              category={category}
              homePageList={true}
              navigation={this.props.navigation}
              onAddingItemToCart={this.onAddingItemToCart}
              openCategoryProductList={this.openCategoryProductList}
            />
          );
        })
    ) : (
      <View></View>
    );
  };

  renderFilterList = () => {
    return this.props.categoryProductMap != null &&
      this.props.categoryProductMap.length != 0 ? (
      <FilterList
        categoryProductMap={this.props.categoryProductMap}
        openCategoryProductList={this.openCategoryProductList}
        navigation={this.props.navigation}
      />
    ) : (
      <View></View>
    );
  };

  renderPlaceOrderModalComponent = () => {
    return (
      <Modal
        animationType="fade"
        style={styles.modalWrapper}
        transparent={true}
        visible={this.props.orderPlacedDialog}
        statusBarTranslucent={true}>
        <OrderPlaced
          onPopupClose={this.props.closePlaceOrderDialog}
          openMyOrders={this.openMyOrders}></OrderPlaced>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderPlaceOrderModalComponent()}
        <ScrollView
          scrollEventThrottle={SCROLL_EVENT_THROTTLE}
          showsVerticalScrollIndicator={HIDE_SCROLL_INDICATOR}
          style={this.getBodyStylesOnTheBasisOfCart()}
          stickyHeaderIndices={[1]}>
          <Offerlist />
          {this.renderFilterList()}
          {this.renderCategoryProductsList()}
        </ScrollView>
        {renderCartButton(this.props)}
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    categoryProductMap: state.categoryProductMap,
    cart: state.cart,
    auth: state.auth,
    orderPlacedDialog : state.orderPlacedDialog,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    fetchCategoryList: () => {
      dispatch(fetchCategoryList());
    },
    closePlaceOrderDialog: () => {
      dispatch(closeOrderPlacedDialogAction());
    },
    fetchProductList: request => {
      dispatch(requestFetchProducts(request));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
