import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6B8kz3_7UfZqSxtAxs83GY9N_G8SFFW0",
    authDomain: "test-project-998dd.firebaseapp.com",
    databaseURL: "https://test-project-998dd.firebaseio.com",
    projectId: "test-project-998dd",
    storageBucket: "test-project-998dd.appspot.com",
    messagingSenderId: "1094498444685"
};

firebase.initializeApp(firebaseConfig);

export const authRef = firebase.auth();
