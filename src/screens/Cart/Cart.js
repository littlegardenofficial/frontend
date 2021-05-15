import React , {Component} from 'react';
import {View , Text} from 'react-native';
import VerticalCategoryProductList from '../../containers/VerticalCategoryProductList/VerticalCategoryProductList';
import styles from './CartStyles';

export default class Cart extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
          <View style={styles.wrapper}>
            <VerticalCategoryProductList isForCart={true} />
          </View>
        );
    }
}