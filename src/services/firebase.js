import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAJMrGlrdDHoFLBEskofSwH9MO7MqN5CnA",
    authDomain: "postflix-73c1c.firebaseapp.com",
    databaseURL: "https://postflix-73c1c.firebaseio.com",
    projectId: "postflix-73c1c",
    storageBucket: "postflix-73c1c.appspot.com",
    messagingSenderId: "774299066516",
    appId: "1:774299066516:web:a7edfa75f765d11ebd5481",
    measurementId: "G-6XN8EX5Y0L"
};

firebase.initializeApp(firebaseConfig);
export default firebase;