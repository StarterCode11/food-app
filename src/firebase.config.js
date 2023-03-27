import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYpBuiOmE69iEmZkL3nza6mEELOFH1Zbs",
  authDomain: "food-delivery-app-c56a4.firebaseapp.com",
  databaseURL: "https://food-delivery-app-c56a4-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-c56a4",
  storageBucket: "food-delivery-app-c56a4.appspot.com",
  messagingSenderId: "579374097334",
  appId: "1:579374097334:web:bd99531207b02e47cbd717"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
