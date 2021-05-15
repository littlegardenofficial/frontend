import {Dimensions, Platform} from 'react-native';
import {
  PRODUCT_CARD_COLOR,
  THEME_COLOR,
  THEME_TEXT_COLOR,
} from '../../styles/theme';
const {StyleSheet} = require('react-native');
const {height, width} = Dimensions.get('window');

const announcement = {
  height: '18%',
  width: '100%',
  alignItems: 'center',
  borderTopLeftRadius: 5,
};

const getStyles = productCardStyle => {
  return StyleSheet.create({
    productCard: {
      height: '100%',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'grey',
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.9,
      shadowRadius: 3,
      elevation: 1,
      alignItems: 'center',
      marginRight: 8,
      backgroundColor: PRODUCT_CARD_COLOR,
      ...productCardStyle,
    },
    productDetail: {
      height: '70%',
      width: '100%',
      borderRadius: 5,
      flexDirection: 'row',
      paddingRight: 0,
    },
    imageSection: {
      flex: 1,
      width: '40%',
      marginTop: 5,
    },
    descriptionSection: {
      width: '60%',
      padding: 15,
      paddingLeft: 20,
    },
    actions: {
      flex: 1,
      marginVertical: 3,
      paddingHorizontal: 5,
      height: '30%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    buttonStyle: {
      backgroundColor: THEME_COLOR,
      color: THEME_TEXT_COLOR,
      padding: 2,
      borderRadius: 6,
      height: '100%',
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
