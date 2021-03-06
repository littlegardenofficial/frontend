import {
  THEME_COLOR,
  THEME_TEXT_COLOR,
  THEME_CONTRAST_COLOR,
} from '../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {flex: 1, height: '100%', width: '100%'},
  avatarSection: {
    backgroundColor: THEME_COLOR,
    height: 300,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 100,
    width: '60%',
    height: '60%',
    backgroundColor: THEME_CONTRAST_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidemenuFooter: {
    height: 70,
    flex: 1,
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'lightgrey',
    borderStyle: 'solid',
    borderTopWidth: 2,
  },
  appH3Title: {
    color: THEME_TEXT_COLOR,
  },
  appTitle: {
    letterSpacing: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  logoutTitle: { color: 'grey', fontSize: 20, marginRight: 10 },
  companyText: { color: 'grey', fontSize: 13, alignItems: 'center', justifyContent: 'center', marginVertical: 5 },
  companyTextIconStyle: { fontSize: 13, marginRight: 8 },
});

export default styles;

