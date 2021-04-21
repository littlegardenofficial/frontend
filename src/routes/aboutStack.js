
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About/About';
import Header from '../shared/Header'
import React from 'react';

const aboutScreen = {
    About : {
        screen : About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About'/>
            }
        }
    }
}


const aboutStack = createStackNavigator(aboutScreen , {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'grey',
            height: 60,
        },
        headerTintColor: 'white',
    }
});

export default aboutStack;