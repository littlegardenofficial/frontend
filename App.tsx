import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/routes/drawerNavigation';
import store from './src/redux/store';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
export interface Props {};
export interface State {};
class App extends React.Component<Props, State> {
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
}

export default App;
