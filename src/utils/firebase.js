import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBGywiloJo9JdrZ2QcWJEqLjhK99uUOQNc",
  authDomain: "list-d48b2.firebaseapp.com",
  databaseURL: "https://list-d48b2.firebaseio.com",
  projectId: "list-d48b2",
  storageBucket: "list-d48b2.appspot.com",
  messagingSenderId: "1088687082557"
};

var fire = firebase.initializeApp(config);
export default fire;
