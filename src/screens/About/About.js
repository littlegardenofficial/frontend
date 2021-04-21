import React , {Component} from 'react';
import { View , Text , StyleSheet} from 'react-native'
import globalStyles from '../../styles/theme'

class About extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <View style={globalStyles.homeStyle}>
                <Text style={globalStyles.textStyle}>About Component</Text>
            </View>
        );
    }
}

export default About ;