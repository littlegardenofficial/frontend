import {StyleSheet} from 'react-native';
import {THEME_COLOR, THEME_COLOR_LIGHT} from '../../styles/theme';

const styles = StyleSheet.create({
  navigationItemWrapper: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: THEME_COLOR,
    marginLeft: 15,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default styles;
