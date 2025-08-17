// src/lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, type Analytics } from "firebase/analytics";

// Add other Firebase service imports as needed for your app (e.g., Auth, Firestore)
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration (ALWAYS use environment variables for sensitive info!)
// In Next.js App Router, these need to be prefixed with NEXT_PUBLIC_ for client-side access
const firebaseConfig = {
  apiKey: "AIzaSyBC6MG8qo8BMLF790znTnsuYPz3I7XnNE0",
  authDomain: "mhsys-solutions.firebaseapp.com",
  projectId: "mhsys-solutions",
  storageBucket: "mhsys-solutions.firebasestorage.app",
  messagingSenderId: "469597815926",
  appId: "1:469597815926:web:927c6740b6611d85a6cb57",
  measurementId: "G-4P2K691D7M"
};


const app = initializeApp(firebaseConfig);

// Analytics is only available in browser, not SSR
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics, logEvent };