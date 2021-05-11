import { Dimensions , Platform } from 'react-native';
const {StyleSheet} = require('react-native');
const { height , width } = Dimensions.get('window');

const announcement = {
  height: '18%',
  width: '100%',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  productCard: {
    height: '100%',
    width: width - 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    // borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 1,
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: 'white',
  },
  productDetail: {
    height: '76%',
    width: '98%',
    borderRadius: 8,
    flexDirection: 'row',
    // paddingLeft: 5,
    paddingRight: 0,
    // backgroundColor: 'lightpink',
  },
  imageSection: {
    flex: 1,
    width: '40%',
    paddingTop: 10,
    // backgroundColor: 'green',
  },
  descriptionSection: {
    width: '60%',
    padding: 15,
    paddingLeft: 20,
    // backgroundColor: 'grey',
  },
  actions: {
    flex: 1,
    marginBottom: 8,
    paddingHorizontal: 5,
    height: '24%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  buttonStyle: {
    backgroundColor: 'green',
    color: 'white',
    marginRight: 8,
    padding: 2,
    borderRadius: 6,
    height: '100%',
  },
  imageStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  limitedStock: {
    ...announcement,
    backgroundColor: 'orange',
  },
  soldOut: {
    ...announcement,
    backgroundColor: 'red',
  },
  nothing: {
    height: '0%',
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
