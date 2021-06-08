import {BLUE_COLOR, THEME_COLOR, THEME_TEXT_COLOR} from '../../../styles/theme';

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
    height: 'auto',
    width: '70%',
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    height: '20%',
    marginBottom: '5%',
  },
  pickerContainer: {
    height: 50,
    marginVertical: 10,
    backgroundColor: THEME_COLOR,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  pickerTitle: {
    color: THEME_TEXT_COLOR,
    fontWeight: '600',
    fontSize: 20,
  },
});

export default styles;
