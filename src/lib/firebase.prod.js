import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwT9ZO2nPQycxOUWm1AfUed2BG7YUM1vs",
    authDomain: "neflix-3c987.firebaseapp.com",
    projectId: "neflix-3c987",
    storageBucket: "neflix-3c987.appspot.com",
    messagingSenderId: "690249040316",
    appId: "1:690249040316:web:5d9eb4bcb04b0a9326abb9"
};

const firebase = Firebase.initializeApp(config);

export {firebase};