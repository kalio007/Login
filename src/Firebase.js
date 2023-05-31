import { initializeApp } from "firebase/app";

// importing from firebase authenitication service
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
//getAuth servuce would allow
// singInWithPopup allows for pop-up so you dont have to leave page

const firebaseConfig = {
  apiKey: "AIzaSyB5vgHl3IrRqISV8Euml1cUQcKpEPVJRAs",
  authDomain: "projectauth-4a4ae.firebaseapp.com",
  projectId: "projectauth-4a4ae",
  storageBucket: "projectauth-4a4ae.appspot.com",
  messagingSenderId: "27831943555",
  appId: "1:27831943555:web:511ee7214fcff3721b36b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// the app represents all of our firebase connection for any feature i want to utlize from firebase

 export const auth = getAuth(app);
//would include the user and know whois currently logged in 

// for Gmail we have to provide a provider
const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) =>{
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}
