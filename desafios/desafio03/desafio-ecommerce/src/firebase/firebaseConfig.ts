import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1g4ors8HeIbbabVRvOcYPWSZxUTKxWQc",
    authDomain: "app-ecommerce-72d5f.firebaseapp.com",
    projectId: "app-ecommerce-72d5f",
    storageBucket: "app-ecommerce-72d5f.firebasestorage.app",
    messagingSenderId: "877165732479",
    appId: "1:877165732479:web:655fe633279b26dd22154a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;