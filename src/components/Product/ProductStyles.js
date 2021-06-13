import { Dimensions , Platform } from 'react-native';
import {PRODUCT_CARD_COLOR, THEME_COLOR, THEME_TEXT_COLOR} from '../../styles/theme';
const {StyleSheet} = require('react-native');
const { height , width } = Dimensions.get('window');

const announcement = {
  height: '18%',
  width: '100%',
  alignItems: 'center',
  // borderTopLeftRadius: 3,
};

const getStyles = (productCardStyle) => {
  return StyleSheet.create({
    productCard: {
      height: '94%',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderBottomWidth: 0,
      elevation: 5,
      alignItems: 'center',
      marginBottom: 3,
      backgroundColor: PRODUCT_CARD_COLOR,
      ...productCardStyle,
    },
    productDetail: {
      height: '76%',
      width: '100%',
      borderRadius: 5,
      flexDirection: 'row',
      paddingRight: 0,
    },
    imageSection: {
      flex: 1,
      width: '40%',
      borderRadius: 5,
    },
    descriptionSection: {
      width: '60%',
      padding: 15,
      paddingLeft: 20,
    },
    actions: {
      flex: 1,
      marginBottom: 8,
      paddingHorizontal: 5,
      height: '24%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
    },
    buttonStyle: {
      backgroundColor: THEME_COLOR,
      color: THEME_TEXT_COLOR,
      marginRight: 8,
      padding: 2,
      borderRadius: 6,
      height: '100%',
    },
    imageStyle: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      borderRadius: 5,
    },
    limitedStock: {
      ...announcement,
      backgroundColor: 'orange',
    },
    soldOut: {
      ...announcement,
      backgroundColor: 'red',
    },
    nothing: {
      height: '0%',
      width: '100%',
      alignItems: 'center',
    },
  });
};

export default getStyles;
