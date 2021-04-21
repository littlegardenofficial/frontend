import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card } from 'react-native-elements';
import globalStyles from '../../styles/globalStyles';
import HorizontalScrollCards from '../../containers/HorizontalScrollCards/HorizontalScrollCards';
import InterCommRoutingService from '../../services/interCommRoutingService';

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
  }

  render() {
    return (
      <View style={globalStyles.homeStyle}>
        <View style={{height: '92%'}}>
          <View style={{marginVertical: 10 , flex: 2  , alignItems: 'center' , justifyContent: 'center'}}>
            <HorizontalScrollCards autoScroll={true} cards={['Offer 1' , 'Offer 2', 'Offer 3' , 'Offer 4']}/>
          </View>
          <View style={{flex: 1, marginBottom: 4 , alignItems: 'center' , justifyContent: 'center',}}>
            <HorizontalScrollCards autoScroll={false} cards={['filter 1' , 'filter 2', 'filter 3' , 'filter 4']}/>
          </View>
          <View style={{flex: 5 , zIndex: 1}}>
            <Card
              containerStyle={{
                padding: 0,
                height: '100%',
                backgroundColor: 'grey',
                borderRadius: 6,
              }}></Card>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '5%',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: '100%',
              flex: 1,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }} onPress={this.onOpenCart}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              Go To Cart
            </Text>
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
