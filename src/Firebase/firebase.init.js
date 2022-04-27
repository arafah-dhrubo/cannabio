import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.conf";

const firebaseInitializer=()=>{
    const app = initializeApp(firebaseConfig);
}

export default firebaseInitializer