import {StyleSheet} from 'react-native';
import {THEME_COLOR, THEME_CONTRAST_COLOR} from '../../../styles/theme';
import {DEVICE_HEIGHT} from '../../../utils/DeviceParamsUtil';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME_COLOR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {width: '90%', marginTop: 10, paddingVertical: 10},
  loginFormAndLogo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_CONTRAST_COLOR,
    borderRadius: 5,
    elevation: 10,
    height: (DEVICE_HEIGHT * 80) / 100,
  },
  logoStyle: {
    backgroundColor: THEME_CONTRAST_COLOR,
    height: '15%',
    width: '40%',
    marginVertical: 10,
  },
  inputSection: {width: '90%', marginTop: 0},
  emailElement: {color: THEME_COLOR},
  passElement: {color: THEME_COLOR, letterSpacing: 0.2},
  loginButton: {backgroundColor: THEME_COLOR, marginBottom: 20},
  registerTitle: {color: THEME_COLOR},
});

export default styles;
