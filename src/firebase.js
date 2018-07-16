import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyASr5SozN2A-BEsem8Uo0Jg5cUvjmaWAvk",
    authDomain: "test-firebase-e2bf3.firebaseapp.com",
    databaseURL: "https://test-firebase-e2bf3.firebaseio.com",
    projectId: "test-firebase-e2bf3",
    storageBucket: "",
    messagingSenderId: "984605774447"
};

firebase.initializeApp(config);

export default firebase