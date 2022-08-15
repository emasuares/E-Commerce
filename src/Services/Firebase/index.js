
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDALQGeyZY9ZIcEtoK6RMX13kKC4i6kq5E",
  authDomain: "e-commerce-f7004.firebaseapp.com",
  projectId: "e-commerce-f7004",
  storageBucket: "e-commerce-f7004.appspot.com",
  messagingSenderId: "311963320192",
  appId: "1:311963320192:web:9530c28773c70fa34f4b65"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)