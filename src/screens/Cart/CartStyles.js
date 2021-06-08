import {THEME_TEXT_COLOR} from '../../styles/theme';
import {DEVICE_WIDTH} from '../../utils/DeviceParamsUtil';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {width: '100%', height: '100%'},
  cartContainer: {height: '92%'},
  addressCardStyle: {height: '14%', width: DEVICE_WIDTH , marginBottom: 10},
  checkoutButton: {
    height: '8%',
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
