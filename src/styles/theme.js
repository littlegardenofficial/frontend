import {StyleSheet} from 'react-native';

// we can fetch these parameters from backend service also to make this app flexible
const themeColor = 'green';
const contrastColor = 'white';

const globalStyles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: 'green',
    height: 50,
  },
});

export {globalStyles, themeColor, contrastColor};
