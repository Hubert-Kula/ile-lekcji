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
function ile() {

    var select = document.getElementById("mySelect");
console.log(select.value); // Zwróci wartość opcji

var gf = document.getElementById("gf")


if (select.value === "Matematyka") {
      card.style.backgroundColor = "green";
    } else if (select.value === "J.polski") {
      card.style.backgroundColor = "blue";
    } else if (select.value === "Historia") {
      card.style.backgroundColor = "red";
    } else if (select.value === "Chemia") {
      card.style.backgroundColor = "yelow";
    } else if (select.value === "WOS") {
      card.style.backgroundColor = "pink";
    }

  var database = firebase.database();

        database.ref("notes/" + select.value).set({
            title: select.value,
            content: gf.value,
            type: col.value,

  });
}