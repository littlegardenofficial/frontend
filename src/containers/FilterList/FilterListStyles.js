const {StyleSheet, Dimensions} = require('react-native');
const { height , width } = Dimensions.get('window');
const filterSectionHeight = (height * 10) / 100;

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

export const getCardStyles = () => {
  return {
    flex: 1,
    width: 150,
    backgroundColor: 'white',
    height: '95%',
    resizeMode: 'stretch',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 4,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  };
};

export default styles;
