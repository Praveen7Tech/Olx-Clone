// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, Firestore, getDocs, getFirestore, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAOMPGvEFveq0KZySpsSIiHdUHEUc-px0",
  authDomain: "olx-clone-fbcfd.firebaseapp.com",
  projectId: "olx-clone-fbcfd",
  storageBucket: "olx-clone-fbcfd.firebasestorage.app",
  messagingSenderId: "182609461661",
  appId: "1:182609461661:web:9d76c7cbf1dec6bfe8af74",
  measurementId: "G-04ESCP1XSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider =new GoogleAuthProvider()
const storage = getStorage()
const firebaseStore = getFirestore()

const fetchFromFirestore = async (userId) => {
  try {
    const productCollection = collection(firebaseStore, "products");
    const q = query(productCollection, where("userId", "==", userId));
    const productSnapshot = await getDocs(q);

    const productList = productSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return productList;
  } catch (error) {
    console.error("Error fetching user products:", error);
    return [];
  }
};

const Signup = async(setIsLogin)=>{
  try {
     const res = await signInWithPopup(auth,googleProvider)
        console.log("user - ",res.user)
        setIsLogin(false)
    } catch (error) {
        console.log(error)
  }
}

const LogOut = async ()=>{
  signOut(auth)
  console.log("signout")
}

export {Signup, LogOut, storage, firebaseStore,fetchFromFirestore}