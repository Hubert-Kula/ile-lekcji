// Initialize Firebase
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
  const database = firebase.database();
  const notesRef = database.ref("kart");
  
  // Read data from the notes node
  notesRef.on('value', function(snapshot) {
    // Get the data from the snapshot
    const data = snapshot.val();
    let parent = document.getElementById("container");
    for (const key in data) {
      // Create a new card element
      let card = document.createElement("div");
      card.className = "card";
  
      // Create a new header element
      let header = document.createElement("h2");
      header.innerHTML = data[key].title;
  
      // Create a new content element
      let content = document.createElement("p");
      content.innerHTML = data[key].content;

      let date = document.createElement("h3");
      date.innerHTML = data[key].date;
  
      // Append the header and content to the card
      card.appendChild(header);
      card.appendChild(content);
      card.appendChild(date)
  
      // Set the color of the card based on the note type
      if (data[key].type === "Matematyka") {
        card.style.backgroundColor = "#43b538";
      } else if (data[key].type === "J.polski") {
        card.style.backgroundColor = "#34cceb";
      } else if (data[key].type === "Historia") {
        card.style.backgroundColor = "red";
      } else if (data[key].type === "Chemia") {
        card.style.backgroundColor = "#d1c413";
      } else if (data[key].type === "WOS") {
        card.style.backgroundColor = "#d91698";
      }
  
      // Append the card to the container
      parent.appendChild(card);
    }
  });
  