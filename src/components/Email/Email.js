import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './EmailStyles'


class Email extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => onPressEmail(this.props.email)}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.iconRow}>
            <Icon
              name="email"
              underlayColor="transparent"
              iconStyle={styles.emailIcon}
              onPress={() => this.props.onPressEmail()}
            />
          </View>
          <View style={styles.emailRow}>
            <View style={styles.emailColumn}>
              <Text style={styles.emailText}>{this.props.email}</Text>
            </View>
            {/* <View style={styles.emailNameColumn}>
                {name.length !== 0 && (
                  <Text style={styles.emailNameText}>{name}</Text>
                )}
              </View> */}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

}

// Email.propTypes = {
//   containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
//   email: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
//   name: PropTypes.string,
//   onPressEmail: PropTypes.func.isRequired,
// };

// Email.defaultProps = {
//   containerStyle: {},
//   name: null,
// };

export default Email;
