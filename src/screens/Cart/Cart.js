import React , {Component} from 'react';
import {View , Text} from 'react-native';

export default class Cart extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{width: '100%' , height: '100%' }}>
                <Text> User  Cart </Text>
            </View>
        )
    }
}