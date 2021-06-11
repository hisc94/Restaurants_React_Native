import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKG0lMYNUtRiNDwueJrT-fgS-Yz8AJJEA",
    authDomain: "restaurants-adf80.firebaseapp.com",
    projectId: "restaurants-adf80",
    storageBucket: "restaurants-adf80.appspot.com",
    messagingSenderId: "28422848527",
    appId: "1:28422848527:web:9d2ba5e81c43f8796de37a"
}
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)