const {StyleSheet, Dimensions} = require('react-native');

const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  body: {
    height: '100%',
    position: 'absolute',
  },
  productsContainer: {
    padding: 0,
    height: '100%',
    backgroundColor: 'grey',
    borderRadius: 6,
  },
});

export default styles;
