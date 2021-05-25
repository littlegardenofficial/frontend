import {
  THEME_CONTRAST_COLOR,
  THEME_COLOR,
  THEME_TEXT_COLOR,
} from '../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  bottomSheetItem: {
    backgroundColor: THEME_CONTRAST_COLOR,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSheetContainer: {backgroundColor: THEME_CONTRAST_COLOR},
  smallTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  discount: {
    color: THEME_COLOR,
  },
  finalPrice: {
    color: 'blue',
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
