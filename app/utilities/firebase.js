import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDorWYrl9oZCSF2CEuY13TbSHhCAwbLoO4",
    authDomain: "carlife-36b9b.firebaseapp.com",
    projectId: "carlife-36b9b",
    storageBucket: "carlife-36b9b.appspot.com",
    messagingSenderId: "439980958526",
    appId: "1:439980958526:web:9778fc94dbad4b4b72026f"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);