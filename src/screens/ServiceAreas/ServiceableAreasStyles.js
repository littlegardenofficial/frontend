import {THEME_COLOR, THEME_TEXT_COLOR} from '../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topLevelLocationPicker: {
    width: 150,
    marginBottom: '10%',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: THEME_COLOR,
  },
  pickerItemStyle: {color: THEME_COLOR, fontWeight: 'bold'},
  pickerDimension: {height: 50, width: 150},
  scrollViewDimension: {width: '95%', marginVertical: 15},
  accordionItemHeader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  accorHeaderTitle: {fontSize: 17, fontWeight: '600'},
  accorHeaderIcon: {fontSize: 30, fontWeight: 'bold'},
  accordItemContent: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'lightgrey',
    elevation: 5,
    margin: 15,
    backgroundColor: THEME_COLOR,
  },
  accordItemContentItem: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accordItemContentText: {color: THEME_TEXT_COLOR},
});

export default styles;
