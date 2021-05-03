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

export const SignInWithGoogle = () => {
    const googleSignInPromise = new Promise((resolve, reject) => {
        auth.signInWithPopup(provider).then((resp) => {
            const user = resp.user;
            const userID = user.uid;
            const name = user.displayName;
            const store = firestore.collection(process.env.PREACT_APP_FIREBASE_COLLECTIONS);
            const userInStore = store.doc(userID);
    
            userInStore.get().then((user) => {
                resolve(user);
                if (!user.exists) {
                    store.doc(userID).set({ 
                        userID,
                        name,
                        washes: 0
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(error);
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        });
    });

    return googleSignInPromise;
};