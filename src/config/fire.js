import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB7Vm8p9rh65WmL0suuXSot2YeVTL6ubKc",
    authDomain: "user-auth-eb471.firebaseapp.com",
    projectId: "user-auth-eb471",
    storageBucket: "user-auth-eb471.appspot.com",
    messagingSenderId: "936272418462",
    appId: "1:936272418462:web:f4922ae138c09ec1ea8d8f"
  };

  const f = firebase.initializeApp(firebaseConfig);

  export default f;
