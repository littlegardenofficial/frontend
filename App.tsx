import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/routes/drawerNavigation';
import store, {persistedStore} from './src/redux/store';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import FlashMessage, {positionStyle} from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar, ActivityIndicator} from 'react-native';
import {THEME_COLOR} from './src/styles/theme';
import {View} from 'react-native';
import Loader from './src/containers/Loader/Loader';
import {PersistGate} from 'redux-persist/es/integration/react';

export interface Props {}
export interface State {}
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Loader></Loader>
            <StatusBar
              animated={true}
              backgroundColor={THEME_COLOR}
              barStyle="light-content"
              hidden={false}
            />
            <Navigator />
            <FlashMessage position="top" style={{alignItems: 'center'}} />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }

  componentDidMount() {
    SplashScreen.hide();
  }
}

export default App;
