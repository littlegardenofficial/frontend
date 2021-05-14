import {APP_BACKGROUND} from '../../styles/theme';
const {StyleSheet, Dimensions} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: APP_BACKGROUND,
  },
  body: {
    height: '95%',
    flex: 1,
    position: 'absolute',
    // backgroundColor: 'lightblue',
  },
  productsContainer: {
    padding: 0,
    height: '100%',
    // backgroundColor: 'grey',
    borderRadius: 6,
  },
});

export default styles;
