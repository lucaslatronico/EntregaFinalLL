import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBZjcIpvDfzRzUqXDx2xLGgh4-650a7ziY",
    authDomain: "entregafinal-4bf7e.firebaseapp.com",
    projectId: "entregafinal-4bf7e",
    storageBucket: "entregafinal-4bf7e.appspot.com",
    messagingSenderId: "94521188355",
    appId: "1:94521188355:web:5aef582b4083e9b3b2ee36",
    measurementId: "G-725K3LBCRH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);