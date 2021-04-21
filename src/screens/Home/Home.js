import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import HorizontalScrollCards from '../../containers/HorizontalScrollCards/HorizontalScrollCards';
import InterCommRoutingService from '../../services/interCommRoutingService';
import styles from './HomeStyle';

class Home extends Component {
  constructor(props) {
    super(props);
    InterCommRoutingService.navigationProps = this.props.navigation;
  }

  onPressHandler = item => {
    console.log(item);
    this.props.navigation.navigate('Reviews', item);
  };

  onOpenCart = () => {
    this.props.navigation.navigate('Cart');
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <View style={styles.discounts}>
            <HorizontalScrollCards
              autoScroll={true}
              cards={['Offer 1', 'Offer 2', 'Offer 3', 'Offer 4']}
            />
          </View>
          <View style={styles.filters}>
            <HorizontalScrollCards
              autoScroll={false}
              cards={['filter 1', 'filter 2', 'filter 3', 'filter 4']}
            />
          </View>
          <View style={styles.products}>
            <Card containerStyle={styles.productsContainer}></Card>
          </View>
        </View>
        <View style={styles.cartButtonContainer}>
          <TouchableOpacity style={styles.cartButton} onPress={this.onOpenCart}>
            <Text style={styles.cartTitle}>Go To Cart</Text>
          </TouchableOpacity>
        </View>
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

export default connect(mapStateToProps, null)(Home);
