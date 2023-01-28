import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs,getDoc, setDoc, addDoc, doc } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQHW4yYvSQJqTio_HcnDWdf2ltgQxypBw",
    authDomain: "my-location-d1da8.firebaseapp.com",
    projectId: "my-location-d1da8",
    storageBucket: "my-location-d1da8.appspot.com",
    messagingSenderId: "325986674566",
    appId: "1:325986674566:web:7abec87ebf24437a772e07",
    measurementId: "G-13BK1FQF4H"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let X;

async function getCit(db,X) {
const citiesCol = collection(db,`${X}`);
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map(doc => doc.data());
return cityList;
}



// code 
alert("مرحباً ،\n شارك موقعك بكل سهولة الآن\n ========================\nMade By :Mohamed Hossam")
