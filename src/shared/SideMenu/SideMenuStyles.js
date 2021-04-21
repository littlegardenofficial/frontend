const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {flex: 1, height: '100%', width: '100%'},
  avatarSection: {
    backgroundColor: 'green',
    height: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 100,
    width: '60%',
    height: '60%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidemenuFooter: {
    height: 60,
    flex: 1,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'lightgrey',
    borderStyle: 'solid',
    borderTopWidth: 2,
  },
});

export default styles;
