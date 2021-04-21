import React , {Component} from 'react';
import {View , Text} from 'react-native';
import styles from './CartStyles';

export default class Cart extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
          <View style={styles.wrapper}>
            <Text> User Cart </Text>
          </View>
        );
    }
}