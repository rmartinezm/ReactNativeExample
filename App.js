import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/reducers';
import UsersListComponent from './src/components/UsersListComponent'

const App = () => (
  <Provider store={createStore(Reducers)}> 
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Aplicación de Prueba con ¡React Native!
      </Text>
      <UsersListComponent />
    </View>
  </Provider>
); 

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
