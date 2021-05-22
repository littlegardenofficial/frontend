import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './LoaderStyles';

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.isLoading ? (
      <ActivityIndicator
        style={styles.loaderContainer}
        animating={true}
        size="large"
        color="white"
      />
    ) : (
      <View></View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, null)(Loader);
