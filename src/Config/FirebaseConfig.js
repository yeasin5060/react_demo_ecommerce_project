import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCuvPRpUdlh8-baUTR1xHaquXmOaTj67po",
    authDomain: "react-ecommerce-project-b6e5c.firebaseapp.com",
    databaseURL: "https://react-ecommerce-project-b6e5c-default-rtdb.firebaseio.com",
    projectId: "react-ecommerce-project-b6e5c",
    storageBucket: "react-ecommerce-project-b6e5c.appspot.com",
    messagingSenderId: "1009105059319",
    appId: "1:1009105059319:web:bacd9156ad9dd2a73d02f2"
  };
  const app = initializeApp(firebaseConfig);
  export default firebaseConfig