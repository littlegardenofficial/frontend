const {StyleSheet, Dimensions} = require('react-native');
const { height , width } = Dimensions.get('window');
const filterSectionHeight = (height * 12 ) / 100;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: filterSectionHeight ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // padding: 2,
  },
});

export default styles;
