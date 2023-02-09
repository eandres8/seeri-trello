import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAS0FlsHpAEn83LCsUpK6qQQci_PwGEHbY',
  authDomain: 'test-65de3.firebaseapp.com',
  projectId: 'test-65de3',
  storageBucket: 'test-65de3.appspot.com',
  messagingSenderId: '628415000512',
  appId: '1:628415000512:web:4ca0087cd3cbde4743e225',
  measurementId: 'G-W56L82RBEW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authFire = getAuth(app);
export const fireDB = getFirestore(app);

export default app;
