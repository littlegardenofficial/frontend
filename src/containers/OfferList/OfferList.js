import React from 'react';
import {View, Dimensions} from 'react-native';
import HorizontalAutoScrollCards from '../HorizontalAutoScrollCards/HorizontalAutoScrollCards';
import styles from './OfferListStyles';

const DEVICE_WIDTH = Dimensions.get('window').width;

class OfferList extends React.Component {
  cardStyle = {
    flex: 1.2,
    width: DEVICE_WIDTH,
    backgroundColor: 'white',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 5,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <HorizontalAutoScrollCards
          cardWidth={DEVICE_WIDTH}
          autoScroll={true}
          cardStyle={this.cardStyle}
          cards={[
            {
              name: 'Offer 1',
              source: require('../../../assets/images/diwaliOffer.png'),
            },
            {
              name: 'Offer 2',
              source: require('../../../assets/images/navratriOffer.jpg'),
            },
            {
              name: 'Offer 3',
              source: require('../../../assets/images/end_of_the_season.jpg'),
            },
          ]}
        />
      </View>
    );
  }
}

export default OfferList;
