const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {flex: 6, zIndex: 1, width: '100%', marginTop: 0},
  productsContainer: {
    flexGrow: 1,
    padding: 0,
    height: '100%',
    backgroundColor: 'purple',
    borderRadius: 6,
    marginHorizontal: 4,
    marginTop: 5,
    alignItems: 'center',
  },
});

export default styles;
