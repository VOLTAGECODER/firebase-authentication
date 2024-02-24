import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getAuth,  signInWithEmailAndPassword,  createUserWithEmailAndPassword,onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDArGM5jDYmgRlIMCYaAm9Fy4YO25kffpE",
    authDomain: "nd-firebase-practice.firebaseapp.com",
    projectId: "nd-firebase-practice",
    storageBucket: "nd-firebase-practice.appspot.com",
    messagingSenderId: "910618697257",
    appId: "1:910618697257:web:16f26845f8a97c065ac638"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
export{
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
}