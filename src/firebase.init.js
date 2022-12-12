// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSo7vIyjFAKWInlR_b3CGjAmRGwUZhPt4",
    authDomain: "job-task-9f291.firebaseapp.com",
    projectId: "job-task-9f291",
    storageBucket: "job-task-9f291.appspot.com",
    messagingSenderId: "707132390807",
    appId: "1:707132390807:web:d0ad6577538a09077498d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;