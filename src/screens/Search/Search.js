import React , {Component} from 'react';
import {View , Text} from 'react-native';
import { connect } from 'react-redux';
import VerticalCategoryProductList from '../../containers/VerticalCategoryProductList/VerticalCategoryProductList';
import styles from './SearchStyle';

class Search extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <VerticalCategoryProductList
                    showSearchResults={true}
                >
                </VerticalCategoryProductList>
            </View>
        );
    }
}

export default Search;