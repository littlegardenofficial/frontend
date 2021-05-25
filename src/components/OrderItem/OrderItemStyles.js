const {StyleSheet} = require('react-native');
const {THEME_TEXT_COLOR} = require('../../styles/theme');

const styles = StyleSheet.create({
  smallText: {
    color: THEME_TEXT_COLOR,
    fontWeight: 'bold',
    marginVertical: 2,
  },
});

export default styles;
