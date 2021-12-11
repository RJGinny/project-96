
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBTrxNaCXU9Zt6U019oHWbftdnCSON4BCQ",
    authDomain: "project94-b812a.firebaseapp.com",
    databaseURL: "https://project94-b812a-default-rtdb.firebaseio.com",
    projectId: "project94-b812a",
    storageBucket: "project94-b812a.appspot.com",
    messagingSenderId: "75866921616",
    appId: "1:75866921616:web:98447d3a7cbb098007d615"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  console.log(user_name)
document.getElementById("user_name").innerHTML="WELCOME "+user_name
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div>"
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}