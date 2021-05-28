import React, { Component } from 'react'
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import { GetStartedScreen, LoginScreen, RegisterScreen, SplashScreen } from './src/pages'
import { Persistor, Store } from './src/redux/Store';
import { theme } from './src/styles';

export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <PersistGate persistor={Persistor} loading={null}>
              <Navigation/>
            </PersistGate>
          </ThemeProvider>
        </SafeAreaProvider>
      </Provider>
    )
  }
}

export default App
