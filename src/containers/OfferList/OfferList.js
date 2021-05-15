import React from 'react';
import {View, Dimensions} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../utils/DeviceParamsUtil';
import HorizontalAutoScrollCards from '../HorizontalAutoScrollCards/HorizontalAutoScrollCards';
import styles from './OfferListStyles';

class OfferList extends React.Component {
  cardStyle = {
    flex: 1.2,
    width: DEVICE_WIDTH,
    backgroundColor: 'white',
    height: '100%',
    resizeMode: 'stretch',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <HorizontalAutoScrollCards
          cardWidth={DEVICE_HEIGHT}
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
