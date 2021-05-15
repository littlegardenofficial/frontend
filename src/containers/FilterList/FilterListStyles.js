import { THEME_COLOR, THEME_TEXT_COLOR } from '../../styles/theme';
import {DEVICE_HEIGHT } from '../../utils/DeviceParamsUtil';
const {StyleSheet} = require('react-native');
const filterSectionHeight = (DEVICE_HEIGHT * 14) / 100;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: filterSectionHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_COLOR,
    padding: 6,
    marginBottom: 5,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCard: {
    flex: 1,
    width: 100,
    height: '95%',
    resizeMode: 'stretch',
    borderRadius: 10,
    borderStyle: 'solid',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  filterTitleContainer: {
    height: 'auto',
    backgroundColor: THEME_COLOR,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterTitle: {
    color: THEME_TEXT_COLOR,
    fontWeight: '700',
    fontSize: 13,
  },
});

export default styles;
