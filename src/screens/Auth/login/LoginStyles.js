import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormAndLogo: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoStyle: {
    backgroundColor: 'white',
    height: 200,
    width: '100%',
  },
  inputSection: {width: '80%'},
  emailElement: {color: 'green'},
  passElement: {color: 'green', letterSpacing: 0.2},
  loginButton: {backgroundColor: 'green', marginBottom: 10},
  registerTitle: {color: 'green'},
});

export default styles;
