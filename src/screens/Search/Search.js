import React , {Component} from 'react';
import {View , Text} from 'react-native';
import styles from './SearchStyle';

export default class Search extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return <View style={styles.searchWrapper}></View>;
    }
}