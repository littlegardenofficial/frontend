import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import { THEME_COLOR } from '../../../styles/theme';
import styles from './LoginStyles';

class Login extends Component {
  imageSource = require('../../../../assets/images/logo.png');

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.wrapper}>
        <View
          style={styles.loginFormAndLogo}>
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

export default Login;
