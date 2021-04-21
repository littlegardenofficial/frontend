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
 
 class App extends Component {
   render () {return (
     <Provider store={store}>
       <SafeAreaProvider initialMetrics={initialWindowMetrics}>
       <Navigator />
       </SafeAreaProvider>
     </Provider>
   );
   }
 };
 
 export default App;
 