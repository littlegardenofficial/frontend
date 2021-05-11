const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 180,
    zIndex: 1,
    width: '100%',
    marginVertical: 4,
    backgroundColor: 'white',
  },
  productsContainer: {
    flexGrow: 1,
    padding: 0,
    height: '100%',
    borderRadius: 6,
    marginHorizontal: 4,
    marginTop: 5,
  },
  categoryTitle: {
    color: 'darkgreen',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
    marginBottom: 1,
  },
});

export default styles;
