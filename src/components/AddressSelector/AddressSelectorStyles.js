import {THEME_COLOR} from '../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedAdd: {
    color: THEME_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'blue',
  },
});

export default styles;
