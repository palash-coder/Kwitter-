
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyD26bVVIB5qVTvgcaLwFbh8I5zl3wChlMM",
    authDomain: "kwitter-2cd28.firebaseapp.com",
    databaseURL: "https://kwitter-2cd28-default-rtdb.firebaseio.com",
    projectId: "kwitter-2cd28",
    storageBucket: "kwitter-2cd28.appspot.com",
    messagingSenderId: "13131347643",
    appId: "1:13131347643:web:48d5303a8a89616f67db9e",
    measurementId: "G-5FJPTNZK46"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


  function addRoom() 
  {
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
  } 
   



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room NAME -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End 
      });});}
getData();

function redirectToRoomName() 
{
  console.log(name);
  localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
    window.location = "index.html";
  
}