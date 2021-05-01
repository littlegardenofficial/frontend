const {StyleSheet, Dimensions} = require('react-native');

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = (cardWidth) => {
  return StyleSheet.create({
    wrapper: {height: '100%', width: DEVICE_WIDTH},
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
      width: 15,
      height: 6,
      borderRadius: 3,
      margin: 4,
      backgroundColor: 'black',
    },
  });
}

export default styles;
