import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';

class Login extends Component {
  imageSource = require('../../../../assets/images/logo.png');

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={this.imageSource}
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '100%',
            }}></Image>
          <View style={{width: '80%'}}>
            <Input
              placeholder="Email"
              leftIcon={<Icon name="email" size={20} color="green" />}
              inputStyle={{color: 'green'}}
              onChangeText={value => this.setState({email: value})}
            />
            <Input
              placeholder="Password"
              inputStyle={{color: 'green', letterSpacing: 0.2}}
              leftIcon={<Icon name="lock" size={20} color="green" />}
              secureTextEntry={true}
              onChangeText={value => this.setState({password: value})}
            />
            <Button
              title="Login"
              buttonStyle={{backgroundColor: 'green', marginBottom: 10}}
            />
            <Button
              title="Register"
              type="outline"
              raised={true}
              titleStyle={{color: 'green'}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
