import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navigation'; // Main navigation setup
import { TailwindProvider } from 'tailwindcss-react-native';
import store from './src/redux/store'

const App = () => {
  return (
    <TailwindProvider>
      <Provider store={store}>
          <Navigation />
      </Provider>
    </TailwindProvider>
  );
};

export default App;
