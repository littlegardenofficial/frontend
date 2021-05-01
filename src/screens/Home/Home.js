import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import InterCommRoutingService from '../../services/interCommRoutingService';
import styles from './HomeStyle';
import HorizontalCategoryProductList from '../../containers/HorizontalCategoryProductList/HorizontalCategoryProductList';
import Offerlist from '../../containers/OfferList/OfferList';
import FilterList from '../../containers/FilterList/FilterList';
import CartButton from '../../containers/CartButton/CartButton';

class Home extends Component {
  constructor(props) {
    super(props);
    InterCommRoutingService.navigationProps = this.props.navigation;
  }

  onPressHandler = item => {
    this.props.navigation.navigate('Reviews', item);
  };

  onOpenCart = () => {
    this.props.navigation.navigate('Cart');
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={styles.body}
          stickyHeaderIndices={[1]}>
          <Offerlist />
          <FilterList />
          <HorizontalCategoryProductList categoryName="Vegetables"   />
          <HorizontalCategoryProductList categoryName="Fruits"   />
          <HorizontalCategoryProductList categoryName="Cereals/Spices"   />
          <HorizontalCategoryProductList categoryName="Navratri"   />
        </ScrollView>
        <CartButton />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    movieList: state.movieList,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
