import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHwvZmTQWmL01eBuCRn21a6qPGUfeZRYY",
    authDomain: "clone-ms-684db.firebaseapp.com",
    databaseURL: "https://clone-ms-684db.firebaseio.com",
    projectId: "clone-ms-684db",
    storageBucket: "clone-ms-684db.appspot.com",
    messagingSenderId: "476346748051",
    appId: "1:476346748051:web:3807bc41600c4b4f181166",
    measurementId: "G-0E93CWVBN7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }