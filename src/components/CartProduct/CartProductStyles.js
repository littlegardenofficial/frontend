import {Dimensions, Platform} from 'react-native';
import {
  PRODUCT_CARD_COLOR,
  THEME_COLOR,
  THEME_TEXT_COLOR,
} from '../../styles/theme';
const {StyleSheet} = require('react-native');

const getStyles = productCardStyle => {
  return StyleSheet.create({
    productCard: {
      height: '100%',
      borderRadius: 5,
      borderWidth: 1 ,
      borderColor: 'lightgrey',
      borderBottomWidth: 0 ,
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
      backgroundColor: PRODUCT_CARD_COLOR,
      ...productCardStyle,
    },
    productDetail: {
      height: '100%',
      width: '100%',
      borderRadius: 5,
      flexDirection: 'row',
      paddingRight: 0,
      justifyContent: 'center',
    },
    imageSection: {
      flex: 1,
      width: '20%',
      marginTop: 5,
    },
    descriptionSection: {
      width: '65%',
      padding: 15,
      paddingLeft: 20,
      justifyContent: 'center',
    },
    actions: {
      flex: 1,
      marginVertical: 3,
      paddingHorizontal: 5,
      flexDirection: 'row',
      height: '100%',
      width: '35%',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: THEME_COLOR,
      color: THEME_TEXT_COLOR,
      padding: 2,
      borderRadius: 6,
      height: '40%',
      marginHorizontal: 10,
    },
    imageStyle: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
  });
};

export default getStyles;
