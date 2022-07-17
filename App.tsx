import React from 'react';
import Index from './src';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Index />
    </SafeAreaProvider>
  );
};

export default App;
