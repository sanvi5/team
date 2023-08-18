import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

        apiKey: "AIzaSyBhyj_qthjugj0Ze1OfvCQeE198Sp2_gbU",
        authDomain: "teamvtingapp.firebaseapp.com",
        projectId: "teamvtingapp",
        storageBucket: "teamvtingapp.appspot.com",
        messagingSenderId: "672800266387",
        appId: "1:672800266387:web:add6add5b2494c01cf9566"
      };
      
      

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();