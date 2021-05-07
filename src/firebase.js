import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.PREACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.PREACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.PREACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.PREACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.PREACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.PREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.PREACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * Sign the user in through Google
 */
export const SignIn = () => {
    auth.signInWithRedirect(provider);
};