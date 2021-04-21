
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home/Home';
import Header from '../shared/Header';
import React from 'react';
import Cart from "../screens/Cart/Cart";
import Search from "../screens/Search/Search";

const screens = {
    Home : {
        screen : Home ,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='MovieReview'/>
            }
        }
    },
    Cart: {
        screen : Cart,
        screenOptions: {
            headerShown: false
        }
    },
    Search: {
        screen : Search,
        screenOptions: {
            headerShown: false
        }
    }
}

const homeStack = createStackNavigator(screens , {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'green',
            height: 60,
        },
        headerTintColor: 'white',
    }
});

export default homeStack;