import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCIiQu6jg3TRvV8lNvpBUodk_5DsL2IJR4",
  authDomain: "pizzaria-react.firebaseapp.com",
  databaseURL: "https://pizzaria-react.firebaseio.com",
  projectId: "pizzaria-react",
  storageBucket: "pizzaria-react.appspot.com",
  messagingSenderId: "303266046996",
  appId: "1:303266046996:web:82552855aaa9c40c9db301",
  measurementId: "G-FJTEM2CNJ2"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
