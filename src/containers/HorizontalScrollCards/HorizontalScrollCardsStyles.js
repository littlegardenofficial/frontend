const {StyleSheet, Dimensions} = require('react-native');

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {height: '100%', width: DEVICE_WIDTH, backgroundColor: 'pink'},
  backgroundImage: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#fff',
  },
  cardStyle: {
    backgroundColor: 'red',
    width: DEVICE_WIDTH - 60,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

export default styles;
