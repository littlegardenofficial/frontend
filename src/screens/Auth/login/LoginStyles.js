import {StyleSheet} from 'react-native';
import {
  THEME_COLOR,
  THEME_CONTRAST_COLOR,
} from '../../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME_CONTRAST_COLOR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormAndLogo: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_CONTRAST_COLOR,
  },
  logoStyle: {
    backgroundColor: THEME_CONTRAST_COLOR,
    height: 150,
    width: 200,
  },
  inputSection: {width: '80%' , marginTop: 10},
  emailElement: {color: THEME_COLOR},
  passElement: {color: THEME_COLOR, letterSpacing: 0.2},
  loginButton: {backgroundColor: THEME_COLOR, marginBottom: 10},
  registerTitle: {color: THEME_COLOR},
});

export default styles;
