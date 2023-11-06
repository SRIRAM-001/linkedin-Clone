import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getStorage,} from "firebase/storage"
import {getDatabase} from "firebase/database"




const firebaseConfig = {
    apiKey: "AIzaSyD04owbqsLCBn_-fc_vcfNlAMV60cfrcpc",
    authDomain: "linkedin-clone-05-ebc39.firebaseapp.com",
    projectId: "linkedin-clone-05-ebc39",
    storageBucket: "linkedin-clone-05-ebc39.appspot.com",
    messagingSenderId: "622630089407",
    appId: "1:622630089407:web:3cb9e4b9310867314e4c0a",
    measurementId: "G-590MXEHFVS"
  };

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getDatabase(app);


//export default db;
export {auth,provider,storage,db};