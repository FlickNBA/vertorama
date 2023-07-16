import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: 'AIzaSyBqcnS7YmbBWvtyQBBfYmuCudo_pP-wUaA',
//   authDomain: 'vertorama.firebaseapp.com',
//   projectId: 'vertorama',
//   storageBucket: 'vertorama.appspot.com',
//   messagingSenderId: '24120120030',
//   appId: '1:24120120030:web:d6c35858a4bc5b4b99684f',
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const test = await getDocs(collection(db, 'maps'));

// console.log(test);

// test.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
