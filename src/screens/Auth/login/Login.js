import React, {Component} from 'react';
import {View , Image} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import { THEME_COLOR } from '../../../styles/theme';
import styles from './LoginStyles';
import {connect} from 'react-redux';
import {loginRequestAction} from '../../../redux/actions/authActions';
import { fetchUserCartAction } from '../../../redux/actions/cartAction';

class Login extends Component {
  imageSource = require('../../../../assets/images/logo.png');

  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
    }
    console.log(this.props.auth);
  }

  requestLogin = () => {
    this.props.requestForLoginUser({email: this.state.email , password : this.state.password});
  }
  
  userIsLoggedIn = () => {
    console.log('user is logged in');
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View
        style={styles.wrapper}>
        <View
          style={styles.loginFormAndLogo}>
            {this.props.auth !== null ? this.userIsLoggedIn() : <View></View>}
          <Image
            source={this.imageSource}
            style={styles.logoStyle}></Image>
          <View style={styles.inputSection}>
            <Input
              placeholder="Email"
              leftIcon={<Icon name="email" size={20} color={THEME_COLOR} />}
              inputStyle={styles.emailElement}
              onChangeText={value => this.setState({email: value})}
            />
            <Input
              placeholder="Password"
              inputStyle={styles.passElement}
              leftIcon={<Icon name="lock" size={20} color={THEME_COLOR} />}
              secureTextEntry={true}
              onChangeText={value => this.setState({password: value})}
            />
            <Button
              title="Login"
              buttonStyle={styles.loginButton}
              onPress = {this.requestLogin}
            />
            <Button
              title="Register"
              type="outline"
              raised={true}
              titleStyle={styles.registerTitle}
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
