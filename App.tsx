import React from 'react';

import { StatusBar } from 'react-native';
import 'react-native-reanimated';

import RootNavigator from '../app/src/Navigation';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content"/>
    <RootNavigator/>
    </>
  );
};

export default App;