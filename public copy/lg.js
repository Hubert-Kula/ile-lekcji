import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

            const password = document.getElementById("H")
            const email = document.getElementById("ma")
            const firebaseConfig = {
    apiKey: "AIzaSyDkOj4i72ophZEnE-eUm3msqBqrGVSGNis",
    authDomain: "ile-lekcji.firebaseapp.com",
    databaseURL: "https://ile-lekcji-default-rtdb.firebaseio.com",
    projectId: "ile-lekcji",
    storageBucket: "ile-lekcji.appspot.com",
    messagingSenderId: "801086162931",
    appId: "1:801086162931:web:dfce03462d98a12eb7f486",
    measurementId: "G-T1ZEMDN90X"
  };

firebase.initializeApp(firebaseConfig);
            function lg() {
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          // Uwierzytelnianie przebiegło pomyślnie
          const user = userCredential.user;
          console.log('Zalogowano jako', user.email);
        })
        .catch((error) => {
          // Wystąpił błąd podczas uwierzytelniania
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    }
            