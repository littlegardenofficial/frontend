import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import InterCommRoutingService from '../../services/interCommRoutingService';
import styles from './HomeStyle';
import HorizontalCategoryProductList from '../../containers/HorizontalCategoryProductList/HorizontalCategoryProductList';
import Offerlist from '../../containers/OfferList/OfferList';
import FilterList from '../../containers/FilterList/FilterList';
import {fetchCategoryList} from '../../redux/actions/categoryAction';
import {fetchUserCartAction, requestAddItemToCartAction} from '../../redux/actions/cartAction';
import {SCROLL_EVENT_THROTTLE, HIDE_SCROLL_INDICATOR} from '../../styles/theme';
import ROUTES from '../../routes/routeNames';
import { renderCartButton  , isCartButtonEnabled} from '../../utils/ComponentRendererUtil';

class Home extends Component {
  constructor(props) {
    super(props);
    InterCommRoutingService.navigationProps = this.props.navigation;
    this.props.fetchCategoryList();
    this.props.fetchCartData(12);
  }

  openCategoryProductList = (category) => {
    this.props.navigation.navigate(ROUTES.CATEGORY_PRODUCT, category);
  };

  getBodyStylesOnTheBasisOfCart = () => {
    return {
      ...styles.body,
      height: isCartButtonEnabled(this.props) ? '95%' : '100%',
    };
  };

  renderCategoryProductsList = () => {
    return this.props.categoryProductMap != null &&
      this.props.categoryProductMap.length != 0 ? (
      this.props.categoryProductMap
        .filter(category => category.productList.length != 0)
        .map(category => {
          return (
            <HorizontalCategoryProductList
              key={category.id}
              category={category}
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
        navigation={this.props.navigation}
      />
    ) : (
      <View></View>
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
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
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    fetchCategoryList: () => {
      dispatch(fetchCategoryList());
    },
    fetchCartData: userId => {
      dispatch(fetchUserCartAction(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
