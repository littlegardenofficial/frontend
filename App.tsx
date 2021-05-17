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
import {StatusBar} from 'react-native';
import {THEME_COLOR} from './src/styles/theme';

export interface Props {}
export interface State {}
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar
            animated={true}
            backgroundColor={THEME_COLOR}
            barStyle="light-content"
            hidden={false}
          />
          <Navigator />
          <FlashMessage position="top" style={{alignItems: 'center'}} />
        </SafeAreaProvider>
      </Provider>
    );
  }

  componentDidMount() {
    SplashScreen.hide();
  }
}

export default App;
