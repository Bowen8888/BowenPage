import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const firebaseConfig = {
    apiKey: "AIzaSyDNdvAhOShIilxTE2McBwyhgFO_55Wed_A",
    authDomain: "bowenpage-3bc48.firebaseapp.com",
    // databaseURL: process.env.REACT_APP_OWNER_FIREBASE_DATABASE_URL,
    projectId: "bowenpage-3bc48",
    storageBucket: "bowenpage-3bc48.appspot.com",
    messagingSenderId: "298307101532",
    appId: "1:298307101532:web:4e8e403eb5dbc0aef71799",
    // measurementId: process.env.REACT_APP_OWNER_FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
