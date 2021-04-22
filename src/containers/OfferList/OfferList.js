import React from 'react';
import {View, Dimensions} from 'react-native';
import HorizontalScrollCards from '../HorizontalScrollCards/HorizontalScrollCards';
import styles from './OfferListStyles';

const DEVICE_WIDTH = Dimensions.get('window').width;

class OfferList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <HorizontalScrollCards
          cardWidth={DEVICE_WIDTH}
          autoScroll={true}
          cards={['Offer 1', 'Offer 2', 'Offer 3', 'Offer 4']}
        />
      </View>
    );
  }
}

export default OfferList;
