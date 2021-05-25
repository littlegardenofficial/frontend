import {THEME_TEXT_COLOR} from '../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {width: '100%', height: '100%'},
  checkoutButton: {
    height: '5%',
  },
  divider: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
  },
  placeOrderButton: {
    backgroundColor: '#315AEE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  closeBottomSheet: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  actionButtonTitle: {
    color: THEME_TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
