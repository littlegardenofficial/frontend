import { StyleSheet } from 'react-native';
import {
  THEME_COLOR,
  THEME_COLOR_DARK,
  THEME_CONTRAST_COLOR,
} from '../../../styles/theme';
import { DEVICE_HEIGHT } from '../../../utils/DeviceParamsUtil';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME_COLOR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: { width: '90%', marginTop: 10, paddingVertical: 10 },
  loginFormAndLogo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_CONTRAST_COLOR,
    borderRadius: 5,
    elevation: 10,
    marginTop: '10%',
    minHeight: (DEVICE_HEIGHT * 70) / 100,
  },
  logoStyle: {
    backgroundColor: THEME_CONTRAST_COLOR,
    height: '20%',
    width: '40%',
    marginVertical: '10%',
    // borderRadius: 75,
  },
  inputSection: { width: '80%', marginTop: 10 },
  emailElement: { color: THEME_COLOR },
  passElement: { color: THEME_COLOR, letterSpacing: 0.2 },
  loginButton: { backgroundColor: THEME_COLOR, marginBottom: 20 },
  registerButton: { borderWidth: 0, borderColor: 'lightgrey' },
  registerTitle: { color: THEME_COLOR },
  forgotButton: { borderWidth: 0, borderColor: 'lightgrey' },
  forgotTitle: { color: 'red', textDecorationLine: 'underline' },
  forgotPasswordInf: { width: '100%', alignItems: 'center', justifyContent: 'center', },
  forgotPassMess: { color: THEME_COLOR_DARK, fontSize: 15, marginVertical: 5, marginBottom: 10 }
});

export default styles;
