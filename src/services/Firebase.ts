// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAouLlyYGlmyENRwvIG-c0ADHQOuQncH7Q',
  authDomain: 'fir-tutorial-29f76.firebaseapp.com',
  projectId: 'fir-tutorial-29f76',
  storageBucket: 'fir-tutorial-29f76.appspot.com',
  messagingSenderId: '283199213816',
  appId: '1:283199213816:web:91579396df41192e05eb0d',
};

// Initialize Firebase and set app persistance mode
initializeApp(firebaseConfig);
export const auth = getAuth();
