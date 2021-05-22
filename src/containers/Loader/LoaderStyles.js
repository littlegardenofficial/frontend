const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    zIndex: 100,
    backgroundColor: 'rgba(34,139,34, 0.8)',
    width: '100%',
  },
});

export default styles;
