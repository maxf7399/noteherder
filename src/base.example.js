//Copy this file to base.js and add your app details

import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'


const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DB URL",
    projectId: "YOUR STORAGE BUCKET",
    storageBucket: "",
    messagingSenderId: "649372718297"
  };
  const app = firebase.initializeApp(config)
  const db = firebase.database(app)

  export default Rebase.createClass(db)