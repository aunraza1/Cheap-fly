import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAM28rjf7X6LFceBnGB4cHroxHkLe11KkQ",
    authDomain: "cheap-fly-16760.firebaseapp.com",
    projectId: "cheap-fly-16760",
    storageBucket: "cheap-fly-16760.appspot.com",
    messagingSenderId: "644402600328",
    appId: "1:644402600328:web:c52b24a910a44d6165823d",
    measurementId: "G-V0J66BFPJD"
  };
  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage();
  export{storage ,firebase as default}