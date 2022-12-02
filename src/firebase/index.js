import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLNkGWshVko58k_-VfcwOY86AkRk-IqPI",
  authDomain: "hotel-b877f.firebaseapp.com",
  projectId: "hotel-b877f",
  storageBucket: "hotel-b877f.appspot.com",
  messagingSenderId: "373997937909",
  appId: "1:373997937909:web:bba371c4f142f3a7ad91bc",
  measurementId: "G-YCLDJPV5NG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const ordersRef = collection(db, "orders");
export const auth = getAuth(app);
export const ordersRefInOrder = query(ordersRef, orderBy("createdAt", "desc"));

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBLNkGWshVko58k_-VfcwOY86AkRk-IqPI",
//   authDomain: "hotel-b877f.firebaseapp.com",
//   projectId: "hotel-b877f",
//   storageBucket: "hotel-b877f.appspot.com",
//   messagingSenderId: "373997937909",
//   appId: "1:373997937909:web:bba371c4f142f3a7ad91bc",
//   measurementId: "G-YCLDJPV5NG",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
