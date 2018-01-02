import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './src/store/configureStore'
import FirebaseMainService from './src/services/FirebaseMainService';
import * as UsersActions from './src/actions/usersActions'
import User from './src/model/user';

// Inicialización del Store
const store = configureStore();

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpUsername: '',
      signUpPassword: '',
    };
  }

  AppTemplate = (
    <Provider store={store}> 
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ¡Simple Login With Firebase and React Native!
        </Text>
        <View style={styles.inputs}>
          <TextInput style={styles.textInput} 
            placeholder="E-mail"
            onChangeText={(email) => this.setState({signInEmail: email})}>
          </TextInput>
          <TextInput style={styles.textInput}
            secureTextEntry={true} 
            placeholder="Password"
            onChangeText={(password) => this.setState({signInPassword: password})}>
          </TextInput>
          <Button style={styles.button} onPress={this.signIn.bind(this)} title="Sign in"></Button> 
          <Text style={styles.orText}>OR</Text>
          <TextInput style={styles.textInput}
            placeholder="E-mail"
            onChangeText={(email) => this.setState({signUpEmail: email})}>
          </TextInput>
          <TextInput style={styles.textInput} 
            placeholder="Username"
            onChangeText={(username) => this.setState({signUpUsername: username})}>
          </TextInput>
          <TextInput style={styles.textInput} 
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(password) => this.setState({signUpPassword: password})}>
          </TextInput>
          <Button style={styles.button} onPress={this.signUp.bind(this)} title="Sign up"></Button>        
        </View>
      </View>
    </Provider>
  ); 

  render() {
    return this.AppTemplate;
  } 

  signUp() {
    FirebaseMainService.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword).then(
      (res) => {
        let user = new User(res.uid, this.state.signUpEmail, this.state.signUpUsername);
        store.dispatch(UsersActions.saveNewUser(user));
      }).catch(( (err) => {
          alert(err)
    }));
  }
  
  signIn() {
    FirebaseMainService.signInWithEmailAndPassword(this.state.signInEmail, this.state.signInPassword).then(
      (res) => {
        alert('OK, this email and password works.');
    }).catch(( (err) => {
        alert(err)
    }));
  }

};

/***** STYLES *****/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, 
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 15,
    marginRight: 15,
  }, 
  inputs: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 30,
    marginBottom: 20,
  },
  orText: {
    marginTop: 25,
    marginBottom: 25,
  },
  button: {

  },
});
