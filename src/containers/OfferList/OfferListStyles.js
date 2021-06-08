const {StyleSheet, Dimensions} = require('react-native');

const {height, width} = Dimensions.get('window');
const offerSectionHeight = (height * 20) / 100;

const styles = StyleSheet.create({
  wrapper: {
    // marginBottom: 2,
    flex: 1,
    height: offerSectionHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
