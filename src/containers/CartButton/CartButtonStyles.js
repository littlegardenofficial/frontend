import {THEME_COLOR, THEME_TEXT_COLOR} from '../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME_COLOR,
    width: '100%',
    height: '5%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 0,
    zIndex: 2,
  },
  cartButton: {
    backgroundColor: THEME_COLOR,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cartTitle: {
    color: THEME_TEXT_COLOR,
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 3,
  },
});

export default styles;
