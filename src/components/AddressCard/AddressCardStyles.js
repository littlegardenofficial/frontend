import {
  PRODUCT_CARD_COLOR,
  THEME_COLOR,
  THEME_CONTRAST_COLOR,
  THEME_TEXT_COLOR,
} from '../../styles/theme';
const {StyleSheet} = require('react-native');

const getStyles = addressCardStyle => {
  return StyleSheet.create({
    productCard: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: PRODUCT_CARD_COLOR,
      borderWidth: 0,
      borderBottomWidth: 2,
      borderColor: 'lightgrey',
      ...addressCardStyle,
    },
    productDetail: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      paddingRight: 0,
      justifyContent: 'center',
    },
    descriptionSection: {
      width: '80%',
      flexDirection: 'row',
      paddingLeft: 5,
      justifyContent: 'flex-start',
      alignItems: 'center',
      //   borderWidth: 0,
      //   borderRightWidth: 2,
      //   borderColor: THEME_COLOR,
    },
    primaryAddress: {
      marginLeft: 15,
    },
    actions: {
      flex: 1,
      justifyContent: 'center',
      height: '100%',
      width: '20%',
      marginRight: 5,
    },
    buttonStyle: {
      backgroundColor: THEME_CONTRAST_COLOR,
      color: THEME_TEXT_COLOR,
      padding: 2,
      borderRadius: 6,
        marginVertical: 3,
    },
    buttonTitleStyle: {
      color: 'blue',
      fontSize: 13,
      textDecorationLine: 'underline',
    },
    addressLine: {fontSize: 13, fontWeight: 'bold', color: THEME_COLOR},
  });
};

export default getStyles;
