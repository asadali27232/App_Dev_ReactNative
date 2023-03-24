// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { initializeAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9fr59UEnRkvWbJZQYl8QAknPfw3W_nWA",
    authDomain: "foodiemoodie-dc8c4.firebaseapp.com",
    databaseURL: "https://foodiemoodie-dc8c4-default-rtdb.firebaseio.com",
    projectId: "foodiemoodie-dc8c4",
    storageBucket: "foodiemoodie-dc8c4.appspot.com",
    messagingSenderId: "428987039880",
    appId: "1:428987039880:web:b93c186dd36969125a5f3d",
    measurementId: "G-ZF1CKY0CP4",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app)
const analytics = getAnalytics(app)

export default { app, auth }
