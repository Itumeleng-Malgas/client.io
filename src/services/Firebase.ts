// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'cH7Q',
  authDomain: 'fir-tutorial-29.firebaseapp.com',
  projectId: 'fir-tutorial-29',
  storageBucket: 'fir-tutorial-29.appspot.com',
  messagingSenderId: '283816',
  appId: '1:28316:web:f411eb0d',
};

// Initialize Firebase and set app persistance mode
initializeApp(firebaseConfig);
export const auth = getAuth();
