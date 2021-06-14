import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { THEME_COLOR } from '../../../styles/theme';
import styles from './LoginStyles';
import { connect } from 'react-redux';
import { loginRequestAction } from '../../../redux/actions/authActions';
import ROUTES from '../../../routes/routeNames';
import { genericExceptionHandling, isEmailAddress, isMobileNumber, isNotNullOrUndefined, isValidPassword } from '../../../utils/HelperUtil';
import { COMMON_AUTH_FLOWS } from '../../../utils/AppConstants';
import { parseForgotChangePasswordData, parseForgotPasswordData, parseVerifyForgotPasswordData } from '../../../utils/DataParserUtils/authDataParserUtil';
import { showInfoFlashMessage, showSuccessFlashMessage } from '../../../utils/FlashMessageUtil';
import { startLoadingAction, stopLoadingAction } from '../../../redux/actions/loadingAction';

class Login extends Component {
  imageSource = require('../../../../assets/images/logo.png');

  constructor(props) {
    super(props);
    this.state = {
      userName: { value: '', error: null },
      password: { value: '', error: null },
      otp: { value: '', error: null },
      changePass: { value: '', error: null },
      reTypChangePass: { value: '', error: null },
      authFlow: COMMON_AUTH_FLOWS.LOGIN,
      forgotPassEmail: { value: '', error: null },
      tokenForChangePass: null,
    };
  }

  changeAuthFlow = (authFlow) => {
    this.setState({ authFlow: authFlow });
  }

  componentDidMount() {
    console.log('component mounted login')
  }

  componentWillUnmount() {
    console.log('compoentn will unmount login');
  }

  loginFormValidation = () => {
    let isFormValidated = true;
    Object.entries(this.state).filter(stateItem => stateItem[0] === 'userName' || stateItem[0] === 'password')
      .map(stateItem => {
        console.log(stateItem);
        // validation for empty fields
        const item = stateItem[0];
        if (stateItem[1].value.trim() === '') {
          this.setState(this.getErrorMessagesIfAnyFieldIsEmpty(item));
          isFormValidated = false;
        }

        // validtion for mobile phone validation
        if (item === 'userName') {
          console.log(stateItem[1].value);
          if (!isMobileNumber(stateItem[1].value.toLowerCase().trim()) && !isEmailAddress(stateItem[1].value.toLowerCase().trim())) {
            isFormValidated = false;
            this.setState({
              userName: {
                value: '',
                error: "Enter a valid Email/Phone no.",
              },
            });
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
        }
      });

    return isFormValidated;
  };

  changePasswordFormValidation = () => {
    if (isValidPassword(this.state.changePass.value) && isValidPassword(this.state.reTypChangePass.value)) {
      if (this.state.changePass.value.trim() === this.state.reTypChangePass.value.trim()) {
        return true;
      } else {
        this.setState({
          changePass: { value: '', error: 'Password and confirm password should be same' },
          reTypChangePass: { value: '', error: 'Password and confirm password should be same' }
        });
        return false;
      }
    } else {
      this.setState({
        changePass: { value: '', error: 'Password should have min 6 characters and max 10 characters' },
        reTypChangePass: { value: '', error: 'Password should have min 6 characters and max 10 characters' }
      });
      return false;
    }
  }

  getLoginRequestPayload = () => {
    if (isEmailAddress(this.state.userName.value)) {
      return {
        'user_name': this.state.userName.value.toLowerCase().trim(),
        'password': this.state.password.value,
      }
    } else {
      return {
        'mobile_no': this.state.userName.value,
        'password': this.state.password.value,
      }
    }
  }

  requestLogin = () => {
    // first apply field level validations
    if (this.loginFormValidation()) {
      let requestPayload = this.getLoginRequestPayload();
      console.log('request payload', requestPayload);
      this.props.requestForLoginUser(requestPayload);
    }
  };

  requestForgotPassword = () => {
    if (isEmailAddress(this.state.forgotPassEmail.value.trim())) {
      this.props.startLoading();
      parseForgotPasswordData({ 'user_name': this.state.forgotPassEmail.value.toLowerCase().trim() })
        .then(data => {
          console.log(data);
          showInfoFlashMessage(data.data.message);
          this.setState({ authFlow: COMMON_AUTH_FLOWS.VERIFY_FORGOT_PASSWORD });
          this.props.stopLoading();
        })
        .catch(err => {
          genericExceptionHandling(err);
          this.props.stopLoading();
        })
    } else {
      this.setState({ userName: { error: 'Enter a valid Email address' } });
    }
    // this.props.navigation.push(ROUTES.LOGIN, { authFlow: COMMON_AUTH_FLOWS.FORGOT_PASSWORD })
  }

  requestChangePasswordBody = () => {
    if (isNotNullOrUndefined(this.state.otp.value.trim())) {
      this.props.startLoading();
      parseVerifyForgotPasswordData({
        'user_name': this.state.forgotPassEmail.value.trim()
        , otp: this.state.otp.value.trim()
      })
        .then(data => {
          console.log(data);
          // set tokenForChangePass for change password request
          console.log(data.data.data.fp_token);
          this.setState({ tokenForChangePass: data.data.data.fp_token, authFlow: COMMON_AUTH_FLOWS.CHANGE_PASSWORD });
          this.props.stopLoading();
        })
        .catch(err => {
          genericExceptionHandling(err);
          this.props.stopLoading();
        })
    } else {
      this.setState({ otp: { error: 'Enter a valid OTP' } });
    }
  }

  requestChangePassword = () => {
    console.log('change password finally');
    if (this.changePasswordFormValidation()) {
      this.props.startLoading();
      parseForgotChangePasswordData(JSON.stringify({ confirm_password: this.state.changePass.value.trim(), password: this.state.changePass.value.trim() }), this.state.tokenForChangePass)
        .then(data => {
          console.log(data);
          showSuccessFlashMessage(data.data.message);
          this.setState({ authFlow: COMMON_AUTH_FLOWS.LOGIN, password: { value: '', error: null } });
          this.props.stopLoading();
        })
        .catch(err => {
          genericExceptionHandling(err);
          this.props.stopLoading();
        })
    }
  }

  userIsLoggedIn = () => {
    this.props.navigation.goBack();
  };

  goToRegister = () => {
    this.props.navigation.navigate(ROUTES.REGISTER);
  };

  getErrorMessagesIfAnyFieldIsEmpty = item => {
    switch (item) {
      case 'userName':
        return { userName: { value: '', error: 'Please Enter a value' } };
      case 'password':
        return { password: { value: '', error: 'Please Enter a value' } };
      default:
        break;
    }
  };

  renderPageBody = () => {
    switch (this.state.authFlow) {
      case COMMON_AUTH_FLOWS.LOGIN:
        return this.renderLoginBody();
      case COMMON_AUTH_FLOWS.FORGOT_PASSWORD:
        return this.renderForgotPasswordBody();
      case COMMON_AUTH_FLOWS.VERIFY_FORGOT_PASSWORD:
        return this.renderVerifyForgotPasswordBody();
      case COMMON_AUTH_FLOWS.CHANGE_PASSWORD:
        return this.renderChangePasswordBody();
      default:
        break;
    }
  }

  renderLoginBody = () => {
    return (
      <View style={styles.inputSection}>
        <Input
          placeholder="Email/Mobile No."
          leftIcon={<Icon name="person" size={20} color={THEME_COLOR} />}
          inputStyle={styles.emailElement}
          onChangeText={value => this.setState({ userName: { value: value, error: null } })}
          errorMessage={this.state.userName.error}
          onSubmitEditing={this.requestLogin}
        />
        <Input
          placeholder="Password"
          inputStyle={styles.passElement}
          leftIcon={<Icon name="lock" size={20} color={THEME_COLOR} />}
          secureTextEntry={true}
          errorMessage={this.state.password.error}
          onChangeText={value => this.setState({ password: { value: value, error: null } })}
          onSubmitEditing={this.requestLogin}
        />
        <Button
          title="Login"
          buttonStyle={styles.loginButton}
          onPress={this.requestLogin}
        />
        <Button
          title="Register"
          type="outline"
          raised={true}
          buttonStyle={styles.registerButton}
          titleStyle={styles.registerTitle}
          onPress={this.goToRegister}
          containerStyle={{ marginBottom: 10 }}
        />
        <TouchableOpacity
          style={{ alignItems: 'center', marginVertical: 10 }}
          onPress={() => this.changeAuthFlow(COMMON_AUTH_FLOWS.FORGOT_PASSWORD)}
        >
          <Text style={styles.forgotTitle}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderForgotPasswordBody = () => {
    return (
      <View style={styles.inputSection}>
        <View style={styles.forgotPasswordInf}>
          <Text style={styles.forgotPassMess}>You will recieve an OTP at the below email address</Text>
        </View>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" size={20} color={THEME_COLOR} />}
          inputStyle={styles.emailElement}
          onChangeText={value => this.setState({ forgotPassEmail: { value: value, error: null } })}
          errorMessage={this.state.forgotPassEmail.error}
          onSubmitEditing={this.requestForgotPassword}
        />
        <Button
          title="Get OTP"
          buttonStyle={styles.loginButton}
          onPress={this.requestForgotPassword}
        />
      </View>
    )
  }

  renderVerifyForgotPasswordBody = () => {
    return (
      <View style={styles.inputSection}>
        <View style={styles.forgotPasswordInf}>
          <Text style={styles.forgotPassMess}>Please enter OTP recieved in your email Inbox and hit proceed to change your password</Text>
        </View>
        <Input
          placeholder="Enter OTP"
          leftIcon={<Icon name="person" size={20} color={THEME_COLOR} />}
          inputStyle={styles.emailElement}
          onChangeText={value => this.setState({ otp: { value: value, error: null } })}
          errorMessage={this.state.otp.error}
          onSubmitEditing={this.requestChangePasswordBody}
        />
        <Button
          title="Proceed"
          buttonStyle={styles.loginButton}
          onPress={this.requestChangePasswordBody}
        />
      </View>
    )
  }

  renderChangePasswordBody = () => {
    return (
      <View style={styles.inputSection}>
        <View style={styles.forgotPasswordInf}>
          <Text style={styles.forgotPassMess}>Please enter your new password </Text>
        </View>
        <Input
          placeholder="Password"
          inputStyle={styles.passElement}
          leftIcon={<Icon name="lock" size={20} color={THEME_COLOR} />}
          secureTextEntry={true}
          errorMessage={this.state.changePass.error}
          onChangeText={value => this.setState({ changePass: { value: value, error: null } })}
          onSubmitEditing={this.requestChangePassword}
        />
        <Input
          placeholder="Confirm Password"
          inputStyle={styles.passElement}
          leftIcon={<Icon name="lock" size={20} color={THEME_COLOR} />}
          secureTextEntry={true}
          errorMessage={this.state.reTypChangePass.error}
          onChangeText={value => this.setState({ reTypChangePass: { value: value, error: null } })}
          onSubmitEditing={this.requestChangePassword}
        />
        <Button
          title="Change password"
          buttonStyle={styles.loginButton}
          onPress={this.requestChangePassword}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.loginFormAndLogo}>
            {this.props.auth !== null ? this.userIsLoggedIn() : <></>}
            <Image source={this.imageSource} style={styles.logoStyle}></Image>
            {this.renderPageBody()}
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
    requestForLoginUser: data => dispatch(loginRequestAction(data)),
    startLoading: () => { dispatch(startLoadingAction()) },
    stopLoading: () => { dispatch(stopLoadingAction()) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
