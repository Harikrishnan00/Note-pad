import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAcpVblLjMIHLsIqfpcNYWYquXqmrAs1Gk",
    authDomain: "note-pad-be1e8.firebaseapp.com",
    databaseURL: "https://note-pad-be1e8-default-rtdb.firebaseio.com",
    projectId: "note-pad-be1e8",
    storageBucket: "note-pad-be1e8.appspot.com",
    messagingSenderId: "71685581388",
    appId: "1:71685581388:web:2c6317b6a92e443e7862e9"
}

const app = initializeApp(firebaseConfig)

let auth = getAuth(app)
let database = getDatabase(app)
let firebaseConfigure = {auth,database}

export default firebaseConfigure
