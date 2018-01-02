import User from '../model/user';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAFGEOAdNOBSOA7G8Sr_5AB-sXoL_y_Mbw",
    authDomain: "reactnativeexample-2fdc4.firebaseapp.com",
    databaseURL: "https://reactnativeexample-2fdc4.firebaseio.com",
    projectId: "reactnativeexample-2fdc4",
    storageBucket: "reactnativeexample-2fdc4.appspot.com",
    messagingSenderId: "328944747809"
};
firebase.initializeApp(firebaseConfig); 

export default{
    
    signInWithEmailAndPassword: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    
    createUserWithEmailAndPassword: (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },

    createUserInDatabase: (user) => {
        return firebase.database().ref().child('users').push(user);
    },

    getUsers: () => {
        return new Promise((req, rej) => {
            firebase.database().ref().child('users').on('value', (snapshot) => {
                let users = [];    
                snapshot.forEach((snapshotChild) => {
                    let user = new User(snapshotChild.val().email, snapshotChild.val().name);
                    users.push(user);
                    user = new User();
                });
                req(users);    
            });
        });
    },

    saveUserInDatabase: (user) => {
        return new Promise((req, rej) => {
            firebase.database().ref().child('users').child(user.id).set(user).then(
                (res) => {
                    req(res);
                }
            ).catch( (err) => { rej(err) });
        });
    }

}