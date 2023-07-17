import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBqcnS7YmbBWvtyQBBfYmuCudo_pP-wUaA',
  authDomain: 'vertorama.firebaseapp.com',
  projectId: 'vertorama',
  storageBucket: 'vertorama.appspot.com',
  messagingSenderId: '24120120030',
  appId: '1:24120120030:web:d6c35858a4bc5b4b99684f',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const test = await getDocs(collection(db, 'maps'));

export const getData = async ({ setDataLoaded }) => {
  let gameData = {};
  let i = 1;
  test.forEach((doc) => {
    //   console.log(i);
    //   console.log(`${doc.id} => ${doc.data()}`);
    //   console.log(doc.data());
    gameData[i] = doc.data();
    gameData[i]['id'] = doc.id;
    i++;
  });
  setDataLoaded(true);
  return gameData;
};

export const saveHighScore = async ({ CID, timer }) => {
  // console.log(timer);
  const docRef = doc(db, 'maps', CID);
  await updateDoc(docRef, {
    scores: arrayUnion({ time: timer / 100, name: 'xDD' }),
  });
};

export const checkIfHit = ({ X, Y, heroes }) => {
  let HIT = false;
  heroes.forEach((item) => {
    // console.log(`checking distances to ${item.name}`);
    let distanceToX = Math.abs(item.X - X);
    // console.log(distanceToX);
    let distanceToY = Math.abs(item.Y - Y);
    // console.log(distanceToY);
    if (distanceToX <= item.marginX && distanceToY <= item.marginY) {
      HIT = item;
    }
  });
  return HIT;
};

export const prepareLevel = ({
  map,
  gameData,
  setHeroes,
  setGameLoaded,
  setCID,
}) => {
  if (gameData.length != 0) {
    // console.log(gameData[map]);
    let backgroundDiv = document.querySelector('#background');
    backgroundDiv.style.aspectRatio = `${gameData[map]['ratio']}`;
    backgroundDiv.style.backgroundImage = `url(./${gameData[map]['background']})`;
    let heroes = gameData[map]['heroes'].map((h) => ({
      ...h,
      clicked: false,
    }));
    setHeroes(heroes);
    setGameLoaded(true);
    setCID(gameData[map]['id']);
  }
};
