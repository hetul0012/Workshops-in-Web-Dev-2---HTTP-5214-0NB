
// Import Firebase core (only initializeApp comes from here)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";

// Import Firebase Realtime Database functions from the correct module
import {
  getDatabase,
  ref,
  child,
  get,
  push,
  set,
  onValue,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB5HxX-1x_eE95PHZMVQE6C2geG68zCiRs",
    authDomain: "fir-demo-bcfd6.firebaseapp.com",
    databaseURL: "https://fir-demo-bcfd6-default-rtdb.firebaseio.com",
    projectId: "fir-demo-bcfd6",
    storageBucket: "fir-demo-bcfd6.firebasestorage.app",
    messagingSenderId: "302604658107",
    appId: "1:302604658107:web:eee03c7f8649874ed1d09e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();

  const ul = document.getElementById("messages");

  const messages = ref(database, "/message");



  onValue(
    messages,
        (snapshot) =>{
    // console.log(snapshot);

    ul.innerHTML = "";

    snapshot.forEach((childSnapshot) => {
        
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        ul.innerHTML += "<li>" + childData.message + " ~ " + childData.name + "</li>";

    });

},{
    onlyOnce :false
}

  );

  let add = document.getElementById("add");

  add.addEventListener("click", function(){

    const name = document.getElementById("name");
    const message = document.getElementById("message");

    const newMessage = push(messages);

    set(newMessage, {
        name: name.value,
        message: message.value,
        createdAt: serverTimestamp(),
    });
  });