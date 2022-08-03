import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyCPRXICm4k03fLEX22WjGz2dC-zqJQk6KU",
    authDomain: "vnvc-d19eb.firebaseapp.com",
    databaseURL: "https://vnvc-d19eb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vnvc-d19eb",
    storageBucket: "vnvc-d19eb.appspot.com",
    messagingSenderId: "33110884599",
    appId: "1:33110884599:web:beab3c0ac63f4d36b893f2",
    measurementId: "G-T6HZFW2KZC"
};
const app = initializeApp(config);


export const auth = getAuth(app);
export default app;