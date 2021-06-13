import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './TelStyles';


class Tel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPressTel(this.props.number)}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.iconRow}>
            <Icon
              name="call"
              underlayColor="transparent"
              iconStyle={styles.telIcon}
              onPress={() => this.props.onPressTel(number)}
            />
          </View>
          <View style={styles.telRow}>
            <View style={styles.telNumberColumn}>
              <Text style={styles.telNumberText}>{this.props.number}</Text>
            </View>
            {/* <View style={styles.telNameColumn}>
              {name.length !== 0 && (
                <Text style={styles.telNameText}>{name}</Text>
              )}
            </View> */}
          </View>
          <View style={styles.smsRow}>
            <Icon
              name="textsms"
              underlayColor="transparent"
              iconStyle={styles.smsIcon}
              onPress={() => this.props.onPressSms()}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Tel;
