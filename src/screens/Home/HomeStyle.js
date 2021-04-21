const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  body: {
    height: '97%',
    position: 'absolute',
  },
  discounts: {
    marginVertical: 8,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filters: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  products: {flex: 5, zIndex: 1, width: '100%', marginTop: 0},
  cartButtonContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '5%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  cartButton: {
    backgroundColor: 'green',
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartTitle: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  productsContainer: {
    padding: 0,
    height: '100%',
    backgroundColor: 'grey',
    borderRadius: 6,
  },
});

export default styles;
