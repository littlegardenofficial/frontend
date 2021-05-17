import {StyleSheet} from 'react-native';
import {ThemeColors} from 'react-navigation';
import {
  THEME_COLOR,
  THEME_TEXT_COLOR,
  THEME_CONTRAST_COLOR,
} from '../../styles/theme';
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
  avatartitle: {fontSize: 15, fontWeight: 'bold', color: THEME_COLOR},
  avatarContainer: {backgroundColor: THEME_CONTRAST_COLOR},
});

export default styles;
