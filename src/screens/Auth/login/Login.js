import React, {Component} from 'react';
import {View , Image} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import { THEME_COLOR } from '../../../styles/theme';
import styles from './LoginStyles';
import {connect} from 'react-redux';
import {loginRequestAction} from '../../../redux/actions/authActions';
import ROUTES from '../../../routes/routeNames';

class Login extends Component {
  imageSource = require('../../../../assets/images/logo.png');

  constructor(props) {
    super(props);
    this.state = {
      email: {value: '' , error: null},
      password: {value: '' , error : null},
    };
  }

  formValidation = () => {
    this.setState({email: {value: '' , error: 'Wrong email'} , password: {value: '' , error: 'Wrong password'}});
    return false;
  }

  requestLogin = () => {
    // first apply field level validations
    if(this.formValidation()){
      this.props.requestForLoginUser({
        email: this.state.email,
        password: this.state.password,
      });
    }
  };

  userIsLoggedIn = () => {
    this.props.navigation.goBack();
  };

  goToRegister = () => {
    this.props.navigation.navigate(ROUTES.REGISTER);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.loginFormAndLogo}>
          {this.props.auth !== null ? this.userIsLoggedIn() : <View></View>}
          <Image source={this.imageSource} style={styles.logoStyle}></Image>
          <View style={styles.inputSection}>
            <Input
              placeholder="Email/Mobile No."
              leftIcon={<Icon name="email" size={20} color={THEME_COLOR} />}
              inputStyle={styles.emailElement}
              onChangeText={value => this.setState({email: {value: value , error : null}})}
              errorMessage={this.state.email.error}
            />
            <Input
              placeholder="Password"
              inputStyle={styles.passElement}
              leftIcon={<Icon name="lock" size={20} color={THEME_COLOR} />}
              secureTextEntry={true}
              errorMessage={this.state.password.error}
              onChangeText={value => this.setState({password: {value: value , error : null}})}
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
              titleStyle={styles.registerTitle}
              onPress={this.goToRegister}
            />
          </View>
        </View>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
