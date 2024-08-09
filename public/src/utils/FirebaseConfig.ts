import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPQ56m7iA7Mq2hRQKGXCq1Y2iX0fmw0d8",
  authDomain: "squirrel-ip-e8008.firebaseapp.com",
  projectId: "squirrel-ip-e8008",
  storageBucket: "squirrel-ip-e8008.appspot.com",
  messagingSenderId: "531998153352",
  appId: "1:531998153352:web:7c3822f9e9c49b44f75d3d",
  measurementId: "G-VCRDE8KVNY",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const firebaseStorage = getStorage(app);
export const storageRef = ref(firebaseStorage);
export const auth = getAuth(app);

export const aboutRef = collection(firebaseDB, "Subscribe");
export const workWithUsRef = collection(firebaseDB, "WorkwithUS");
