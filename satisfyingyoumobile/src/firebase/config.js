import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPEozsMZQiAJkEP0vaZfXw_3pGfYvQugE",
  authDomain: "satisfying-you-mobile.firebaseapp.com",
  projectId: "satisfying-you-mobile",
  storageBucket: "satisfying-you-mobile.appspot.com",
  messagingSenderId: "260043742282",
  appId: "1:260043742282:web:7445e10591e2bf30b01ab3"
};

const app = initializeApp(firebaseConfig);
const auth_mod = getAuth(app);
const storage = getStorage(app);

export { auth_mod, app, storage }