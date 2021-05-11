import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
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
  searchTitle: {color: 'green', fontWeight: 'bold', fontSize: 18},
});

export default styles;
