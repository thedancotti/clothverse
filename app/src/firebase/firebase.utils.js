import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAUvHaBMq9Gwa2IjGWdDUlsNohCA-k5zY",
    authDomain: "crwn-db-e2b4b.firebaseapp.com",
    projectId: "crwn-db-e2b4b",
    storageBucket: "crwn-db-e2b4b.appspot.com",
    messagingSenderId: "12589634474",
    appId: "1:12589634474:web:0ab94cb8078a545ee0d1d3",
    measurementId: "G-F4Y9X9YGT1"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  // initialize database variable
  export const firestoreDb = firebase.firestore();

  export const signInWithEmailAndPassword = (email, password) => 
    auth.signInWithEmailAndPassword(email, password);

  export const createUserWithEmailAndPassword = (email, password) => 
    auth.createUserWithEmailAndPassword(email, password);

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // helper function that allows you to upload an array of objects to firestore db
  // array of objects will be stored in db as collection of documents
  // for now, this function enables us to convert SHOP_DATA(/shop/shop.data.js)
  // to collections of documents in firebase
  export const convertArrayToFirestoreCollection = (collectionName, array) => {
    const arrayOfFirebaseResults = [].concat(array);

    arrayOfFirebaseResults.map(item => 
      firestoreDb.collection(collectionName).doc(item.routeName).set(item)
        .then(result => result)
        .catch(error => error)
    );

    return arrayOfFirebaseResults;
  };
