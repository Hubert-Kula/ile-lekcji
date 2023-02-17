
const firebaseConfig = {
  API_KEY=AIzaSyDkOj4i72ophZEnE-eUm3msqBqrGVSGNis
AUTH_DOMAIN=ile-lekcji.firebaseapp.com
DATABASE_URL=https://ile-lekcji-default-rtdb.firebaseio.com
PROJECT_ID=ile-lekcji
STORAGE_BUCKET=ile-lekcji.appspot.com
MESSAGING_SENDER_ID=801086162931
APP_ID=1:801086162931:web:dfce03462d98a12eb7f486
MEASUREMENT_ID=G-T1ZEMDN90X


firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const notesRef = database.ref("notes");

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

    // Append the header and content to the card
    card.appendChild(header);
    card.appendChild(content);

    // Set the color of the card based on the note type
    if (data[key].type === "Matematyka") {
      card.style.backgroundColor = "#43b538";
    } else if (data[key].type === "Polski") {
      card.style.backgroundColor = "#34cceb";
    } else if (data[key].type === "Historia") {
      card.style.backgroundColor = "red";
    } else if (data[key].type === "Chemia") {
      card.style.backgroundColor = "#d1c413";
    } else if (data[key].type === "WOS") {
      card.style.backgroundColor = "#d91698";
    } else if (data[key].type === "#000") {
      card.style.backgroundColor = "blue"
    } else {
      card.style.backgroundColor = data[key].type
    }

    // Create a new text element
let text = document.createElement("p");
text.innerHTML = data[key].datee;
text.style.position = "absolute";
text.style.top = "10px";
text.style.right = "10px";
text.style.fontSize = "12px";

// Append the text to the card
card.appendChild(text);
    

    // Append the card to the container
    parent.appendChild(card);
  }
});
