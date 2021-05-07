import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCj1BYUFfap2wMPW9fX6Kzhm8egnJw1f7U",
    authDomain: "react-crud-64d21.firebaseapp.com",
    projectId: "react-crud-64d21",
    storageBucket: "react-crud-64d21.appspot.com",
    messagingSenderId: "320408008322",
    appId: "1:320408008322:web:8eead3a23cad318129e69b",
    measurementId: "G-7CPCFDRP0T"
});

var db = firebaseApp.firestore();   

export {db};