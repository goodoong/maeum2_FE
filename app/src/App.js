import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';


/**
 * Main App
 * @param props
 * @returns
 */

const queryClient = new QueryClient();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <QueryClientProvider client={queryClient}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <StackNavigation />
      </QueryClientProvider>
  );
};
export default App;
