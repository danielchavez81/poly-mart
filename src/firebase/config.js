import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnFrGCDu7-0UMfwDqVYGPPq2AlMu1xFfI",
  authDomain: "polymart-4b5e6.firebaseapp.com",
  projectId: "polymart-4b5e6",
  storageBucket: "polymart-4b5e6.appspot.com",
  messagingSenderId: "797258617666",
  appId: "1:797258617666:web:296077d881ff349e786edb",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
