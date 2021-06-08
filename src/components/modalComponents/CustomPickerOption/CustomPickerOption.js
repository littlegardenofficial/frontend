import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {isNotEmpty} from '../../../utils/HelperUtil';
import styles from './CustomPickerOptionStyles';

class CustomPickerOption extends Component {
  constructor(props) {
    super(props);
  }

  renderListOfOptions = () => {
    const optionList = this.props.listOfOptions();
    return isNotEmpty(optionList) ? (
      optionList.map(option => {
        return (
          <TouchableOpacity
            style={styles.pickerContainer}
            onPress={() => {
              this.props.onOptionSelect(option.value);
            }}>
            <Text style={styles.pickerTitle}>{option.label}</Text>
          </TouchableOpacity>
        );
      })
    ) : (
      <View></View>
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.dialogContainer}>{this.renderListOfOptions()}</View>
      </View>
    );
  }
}

export default CustomPickerOption;
