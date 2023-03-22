import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // Firebase yapılandırma ayarları
  apiKey: 'AIzaSyAz5lb7ndMeFVLBhJhs3CIbTrVmmKm_S7Q',
  authDomain: 'escnon-f95c9.firebaseapp.com',
  projectId: 'escnon-f95c9',
  storageBucket: 'escnon-f95c9.appspot.com',
  messagingSenderId: '708614961347',
  appId: '1:708614961347:web:939e910253ce5ba14e8a76',
  measurementId: 'G-MY4YPN09S0',
};

firebase.initializeApp(firebaseConfig);

// Firestore örneği oluşturun
const firestore = firebase.firestore();

export { firestore };
