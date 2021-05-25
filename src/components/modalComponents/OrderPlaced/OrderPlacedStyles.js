import {BLUE_COLOR} from '../../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    height: '40%',
    width: '80%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {height: '60%', width: '90%'},
  title: {
    fontSize: 20,
    fontWeight: '600',
    height: '20%',
    marginBottom: '5%',
  },
  actions: {height: '16%', width: '100%', flexDirection: 'row'},
  viewOrdersbutton: {
    width: '50%',
    backgroundColor: BLUE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    width: '50%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {color: 'white', fontWeight: '700'},
});

export default styles;
