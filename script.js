// Import the functions you need from the SDKs you need
var initializeApp = require('firebase/app')
var getDatabase = require('firebase/database')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5mFlP6hJunVxFsFDbiWzun7KO1kjNWDE",
  authDomain: "lanseat-reserve.firebaseapp.com",
  projectId: "lanseat-reserve",
  storageBucket: "lanseat-reserve.appspot.com",
  messagingSenderId: "629550094774",
  appId: "1:629550094774:web:82401e1126b3353cc7c917",
  measurementId: "G-3030991EWV",
  databaseURL: "https://lanseat-reserve-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeUserData(userId, name) {
    set(ref(database, 'users/' + userId), {
      username: name,
    });
  }

var buttons = document.querySelectorAll("td button");
[].forEach.call(buttons,function(col){ 
	col.addEventListener("click",function(){
        writeUserData(col.innerHTML, "aaa");
    }); 
}); 