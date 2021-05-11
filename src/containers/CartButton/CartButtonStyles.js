const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'green',
    width: '100%',
    height: '5%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 0,
    zIndex: 2,
  },
  cartButton: {
    backgroundColor: 'green',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cartTitle: {color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 3},
});

export default styles;
