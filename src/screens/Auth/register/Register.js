import React, {Component} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {THEME_COLOR} from '../../../styles/theme';
import styles from './RegisterStyles';
import {connect} from 'react-redux';
import {
  showDangerFlashMessage,
  showInfoFlashMessage,
} from '../../../utils/FlashMessageUtil';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../../../redux/actions/loadingAction';
import {parseRegisterRequestData} from '../../../utils/DataParserUtils/authDataParserUtil';
import {
  API_RESPONSE_STATUS,
  SOMETHING_WENT_WRONG,
} from '../../../utils/AppConstants';
import { genericExceptionHandling, isEmailAddress, isMobileNumber, isNotEmpty } from '../../../utils/HelperUtil';

class Register extends Component {
  imageSource = require('../../../../assets/images/logo.png');

  constructor(props) {
    super(props);
    this.state = {
      email: {value: '', error: null},
      password: {value: '', error: null},
      rePassword: {value: '', error: null},
      phone: {value: '', error: null},
      firstName: {value: '', error: null},
      lastName: {value: '', error: null},
    };
  }

  formValidation = () => {
    let isFormValidated = true;
    Object.entries(this.state).map(stateItem => {
      // validation for empty fields
      const item = stateItem[0];
      if (stateItem[1].value.trim() === '') {
        this.setState(this.getErrorMessagesIfAnyFieldIsEmpty(item));
        isFormValidated = false;
      }

      // validtion for mobile phone validation
      if (item === 'phone') {
        if (!isMobileNumber(stateItem[1].value)) {
          isFormValidated = false;
          this.setState({phone: {value: '', error: 'Enter a valid Phone no.'}});
        }
      }

      // validation for email format validation
      if (item === 'email') {
        console.log(stateItem[1].value.toLowerCase().trim());
        if (!isEmailAddress(stateItem[1].value.toLowerCase().trim())) {
          isFormValidated = false;
          this.setState({email: {value: '', error: 'Enter a valid Email'}});
        }
      }

      // validation for both password and rePassword should be same
      if (item === 'password') {
        if (stateItem[1].value.trim().length < 6) {
          isFormValidated = false;
          this.setState({
            password: {
              value: '',
              error: "Password can't be less than 6 characters",
            },
          });
        }

        if (stateItem[1].value.trim() !== this.state.rePassword.value.trim()) {
          isFormValidated = false;
          this.setState({
            password: {value: '', error: 'Both Passwords are not same'},
            rePassword: {value: '', error: 'Both Passwords are not same'},
          });
        }
      }

      if (item === 'rePassword') {
        if (stateItem[1].value.trim().length < 6) {
          isFormValidated = false;
          this.setState({
            rePassword: {
              value: '',
              error: "Password can't be less than 6 characters",
            },
          });
        }

        if (stateItem[1].value.trim() !== this.state.password.value.trim()) {
          isFormValidated = false;
          this.setState({
            password: {value: '', error: 'Both Passwords are not same'},
            rePassword: {value: '', error: 'Both Passwords are not same'},
          });
        }
      }
    });

    return isFormValidated;
  };

  getErrorMessagesIfAnyFieldIsEmpty = item => {
    switch (item) {
      case 'email':
        return {email: {value: '', error: 'Please Enter a value'}};
      case 'password':
        return {password: {value: '', error: 'Please Enter a value'}};
      case 'rePassword':
        return {rePassword: {value: '', error: 'Please Enter a value'}};
      case 'phone':
        return {phone: {value: '', error: 'Please Enter a value'}};
      case 'firstName':
        return {firstName: {value: '', error: 'Please Enter a value'}};
      case 'lastName':
        return {lastName: {value: '', error: 'Please Enter a value'}};
      default:
        break;
    }
  };

  getRegisterRequestPayload = () => {
    return JSON.stringify({
      user_name: encodeURIComponent(this.state.email.value.toLowerCase().trim()),
      first_name: this.state.firstName.value.trim(),
      last_name: this.state.lastName.value.trim(),
      mobile_no: this.state.phone.value,
      password: this.state.password.value.trim(),
      confirm_password: this.state.password.value.trim(),
    });
  };

  registerMe = () => {
    if (this.formValidation()) {
      // call api to register here an route
      this.props.startLoading();
      parseRegisterRequestData(this.getRegisterRequestPayload())
        .then(response => {
          if (
            isNotEmpty(response.data) &&
            response.data.statusCode === API_RESPONSE_STATUS.SUCCESS
          ) {
            showInfoFlashMessage('Registered Successfully!');
            this.props.navigation.goBack();
          } else {
            showDangerFlashMessage(response.errorMessage);
          }
        })
        .catch(err => {
          genericExceptionHandling(err);
        });
    }
    this.props.stopLoading();
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.loginFormAndLogo}>
            <Image source={this.imageSource} style={styles.logoStyle}></Image>
            <View style={styles.inputSection}>
              <Input
                placeholder="First Name"
                leftIcon={<Icon name="person" size={13} color={THEME_COLOR} />}
                inputStyle={styles.emailElement}
                errorMessage={this.state.firstName.error}
                onChangeText={value =>
                  this.setState({firstName: {value: value, error: null}})
                }
                onSubmitEditing={this.registerMe}
              />
              <Input
                placeholder="Last Name"
                leftIcon={<Icon name="person" size={13} color={THEME_COLOR} />}
                inputStyle={styles.emailElement}
                errorMessage={this.state.lastName.error}
                onChangeText={value =>
                  this.setState({lastName: {value: value, error: null}})
                }
                onSubmitEditing={this.registerMe}
              />
              <Input
                placeholder="Phone No."
                leftIcon={<Icon name="email" size={13} color={THEME_COLOR} />}
                inputStyle={styles.emailElement}
                errorMessage={this.state.phone.error}
                keyboardType="numeric"
                onChangeText={value =>
                  this.setState({phone: {value: value, error: null}})
                }
                onSubmitEditing={this.registerMe}
              />
              <Input
                placeholder="Email"
                leftIcon={<Icon name="email" size={13} color={THEME_COLOR} />}
                inputStyle={styles.emailElement}
                errorMessage={this.state.email.error}
                onChangeText={value =>
                  this.setState({email: {value: value, error: null}})
                }
                onSubmitEditing={this.registerMe}
              />
              <Input
                placeholder="Password"
                inputStyle={styles.passElement}
                leftIcon={<Icon name="lock" size={13} color={THEME_COLOR} />}
                secureTextEntry={true}
                errorMessage={this.state.password.error}
                onChangeText={value =>
                  this.setState({password: {value: value, error: null}})
                }
                onSubmitEditing={this.registerMe}
              />
              <Input
                placeholder="Confirm Password"
                inputStyle={styles.passElement}
                leftIcon={<Icon name="lock" size={13} color={THEME_COLOR} />}
                secureTextEntry={true}
                errorMessage={this.state.rePassword.error}
                onChangeText={value =>
                  this.setState({rePassword: {value: value, error: null}})
                }
                onSubmitEditing={this.registerMe}
              />
              <Button
                title="Register Me"
                buttonStyle={styles.loginButton}
                onPress={this.registerMe}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    ...ownprops,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    ...ownprops,
    startLoading: () => {
      dispatch(startLoadingAction());
    },
    stopLoading: () => {
      dispatch(stopLoadingAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
