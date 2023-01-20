  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
   
    firebase.database().ref('tag_name').on('value', function(snapshot) {
      console.log(snapshot.val());
    });
    


