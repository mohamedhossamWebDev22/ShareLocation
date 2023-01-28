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
var txtId = document.getElementById("id"),
IdBtn = document.getElementById("makeId"),
map = document.getElementById("map");

var shareBtn = document.getElementById("doShare")

function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
        
    for ( var i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
        
    id = result

    txtId.innerHTML = id;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getMyLction)
    }
    else{
        alert("Sorry, an error has ecoured");
    }
}
function getMyLction (position){
    lit = position.coords.latitude,
    long = position.coords.longitude;

    map.innerHTML = `<a href= "https://www.openstreetmap.org/#map=18/${lit}/${long}" target="_blank">
        your location is: ${lit}, ${long}
    </a>`
}
var id = '';

let lit = 0,
    long = 0;

function share(){
    setDoc(doc(db, "users", id), {
        latitude: lit,
        longitude: long
    });
}

IdBtn.onclick = () => {
    makeid()
}
shareBtn.onclick = () =>{
    share();
}