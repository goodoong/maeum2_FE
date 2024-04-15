import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';


/**
 * Main App
 * @param props 
 * @returns 
 */
const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <StackNavigation />
    </Provider>
  )
}
export default App;