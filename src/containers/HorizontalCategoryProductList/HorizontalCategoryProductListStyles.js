import { APP_BACKGROUND, THEME_COLOR_DARK, WHITE_BACKGROUND } from '../../styles/theme';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 180,
    zIndex: 1,
    width: '100%',
    marginVertical: 4,
    backgroundColor: APP_BACKGROUND,
  },
  productListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  productsContainer: {
    flexGrow: 1,
    padding: 0,
    height: '100%',
    borderRadius: 6,
    marginHorizontal: 4,
    marginTop: 5,
  },
  categoryTitle: {
    color: THEME_COLOR_DARK,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  showMoreContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showMoreTitleStyle : {
    color: 'blue',
    fontWeight: 'bold',
    marginRight: 0,
    paddingRight: 0,
    fontSize: 14,
  },
});

export default styles;
