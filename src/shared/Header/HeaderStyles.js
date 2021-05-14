import {StyleSheet} from 'react-native';
import {THEME_TEXT_COLOR} from '../../styles/theme';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noPaddingMargin: {paddingLeft: 0, marginLeft: 0},
  searchLogin: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginText: {color: THEME_TEXT_COLOR, fontWeight: 'bold', fontSize: 18},
});

export default styles;
