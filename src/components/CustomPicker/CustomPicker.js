import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {THEME_COLOR} from '../../styles/theme';
import styles from './CustomPickerStyles';
import {isNotEmpty} from '../../utils/HelperUtil';

class CustomPicker extends Component {
  constructor(props) {
    super(props);
  }

  showCurrentlySelectedOption = () => {
    let listOfOptions = this.props.getListOptions();
    const selectedOPtionLabel = isNotEmpty(listOfOptions)
      ? listOfOptions.filter(
          option => option.value === this.props.selectedValue(),
        )[0].label
      : '';
    console.log(selectedOPtionLabel);
    return selectedOPtionLabel;
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onDialogOpen}>
        <Text style={styles.defaultOption}>
          {this.showCurrentlySelectedOption()}
        </Text>
        <Icon
          name="chevron-down"
          type="evilicon"
          color={THEME_COLOR}
          iconStyle={styles.accorHeaderIcon}></Icon>
      </TouchableOpacity>
    );
  }
}

export default CustomPicker;
