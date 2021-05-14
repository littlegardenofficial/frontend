import {StyleSheet} from 'react-native';
import { THEME_COLOR, THEME_TEXT_COLOR } from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  noPaddingMargin: {paddingLeft: 0, marginLeft: 0},
  search: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTitle: {color: THEME_COLOR, fontWeight: 'bold', fontSize: 18},
  searchBarContainerStyle : {
    flex: 1,
    height: 50,
    backgroundColor: THEME_COLOR,
    borderColor: THEME_TEXT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    borderRadius: 0,
    color: THEME_TEXT_COLOR,
  },
  searchBarInputContainerStyle : {
    height: 50,
    backgroundColor: THEME_COLOR,
    borderColor: THEME_TEXT_COLOR,
    margin: 0,
    color: THEME_TEXT_COLOR,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    margin: 0,
    borderRadius: 0,
    borderBottomColor: THEME_TEXT_COLOR,
    borderBottomWidth: 3,
  },
  searchInputStyle : {color: THEME_TEXT_COLOR},
  searchBarStyle : {backgroundColor: THEME_COLOR}
});

export default styles;
