/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React , {Component} from 'react';
 import { Provider } from 'react-redux';
 import Navigator from './src/routes/drawerNavigation'
 import store from './src/redux/store';
 import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
// import SplashScreen from 'react-native-splash-screen';
 
 class App extends Component {
   render() {
     return (
       <Provider store={store}>
         <SafeAreaProvider initialMetrics={initialWindowMetrics}>
           <Navigator />
           <FlashMessage position="bottom" />
         </SafeAreaProvider>
       </Provider>
     );
   }

   componentDidMount() {
     SplashScreen.hide();
   }
 };
 
 export default App;
 