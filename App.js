import React from 'react';
import {SafeAreaView} from 'react-native';
import ViewAndSearch from './src/ViewAndSearch';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ViewAndSearch />
    </SafeAreaView>
  );
};

export default App;
