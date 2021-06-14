import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { THEME_COLOR } from '../../styles/theme';
import { showDangerFlashMessage } from '../../utils/FlashMessageUtil';
import { isEmailAddress, isMobileNumber, isNotNullOrUndefined } from '../../utils/HelperUtil';
import styles from './ProfilePageFieldStyles'


class ProfilePageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            value: this.props.name,
            error: null,
        }
    }

    setErrorMessage = (message) => {
        console.log(message);
        this.setState({ 'error': message });
        showDangerFlashMessage(message);
    }

    fieldValidation = () => {
        let isValid = false;
        console.log(this.state.value);
        console.log(this.props.nameType);
        if (this.props.nameType === 'firstName') {
            isValid = isNotNullOrUndefined(this.state.value.trim());
            if (!isValid) {
                this.setErrorMessage("First name can't be empty")
            }
        }
        if (this.props.nameType === 'lastName') {
            isValid = isNotNullOrUndefined(this.state.value.trim());
            if (!isValid) {
                this.setErrorMessage("Last name can't be empty")
            }
        }
        if (this.props.nameType === 'email') {
            isValid = isEmailAddress(this.state.value.trim());
            if (!isValid) {
                this.setErrorMessage("Enter a valid Email address")
            }
        }
        if (this.props.nameType === 'mobileNo') {
            isValid = isMobileNumber(this.state.value.trim());
            if (!isValid) {
                this.setErrorMessage("Enter a valid Mobile number")
            }
        }
        return isValid;
    }

    confirmChange = () => {
        if (this.fieldValidation()) {
            this.props.onEdit(this.props.nameType, this.state.value);
            this.setState({ edit: false });
        }
    }

    cancelChange = () => {
        this.setState({ value: this.props.name, edit: false });
    }

    renderName = () => {
        if (this.props.nameType === 'firstName') {
            return 'First Name';
        }
        if (this.props.nameType === 'lastName') {
            return 'Last Name';
        }
        if (this.props.nameType === 'email') {
            return 'Email';
        }
        if (this.props.nameType === 'mobileNo') {
            return 'Mobile Number';
        }
    }

    renderIcon = () => {
        if (this.props.nameType === 'firstName') {
            return 'person';
        }
        if (this.props.nameType === 'lastName') {
            return 'person';
        }
        if (this.props.nameType === 'email') {
            return 'email';
        }
        if (this.props.nameType === 'mobileNo') {
            return 'call';
        }
    }

    render() {
        return (
            <View >
                <View style={[styles.container, this.props.containerStyle]}>
                    <View style={styles.iconRow}>
                        <Icon
                            name={this.renderIcon()}
                            underlayColor="transparent"
                            iconStyle={styles.emailIcon}
                        />
                    </View>
                    <View style={styles.fieldRow}>
                        {this.state.edit ?
                            <View style={styles.fieldColumn}>
                                <Input
                                    placeholder={this.renderName()}
                                    inputStyle={styles.fieldElement}
                                    value={this.state.value}
                                    containerStyle={styles.inputContainerStyle}
                                    onChangeText={value => this.setState({ value: value, error: null })}
                                    errorMessage={this.state.error}
                                    onSubmitEditing={this.confirmChange}
                                />
                            </View>
                            :
                            <View style={styles.fieldColumnForText}>
                                <Text style={styles.emailText}>{this.state.value}</Text>
                                <Text style={styles.typeOfField}>{this.renderName()}</Text>
                            </View>
                        }
                        {this.state.edit ?
                            <View style={styles.action}>
                                <Icon name='check' color={THEME_COLOR} containerStyle={{ marginRight: 10 }} onPress={this.confirmChange} />
                                <Icon name='cancel' color={THEME_COLOR} containerStyle={{ marginRight: 10 }} onPress={this.cancelChange} />
                            </View> :
                            <Icon name='edit' color={THEME_COLOR} containerStyle={{ marginRight: 10 }} onPress={() => this.setState({ edit: true })} />
                        }

                    </View>
                </View>
            </View>
        )
    }

}

export default ProfilePageField;
