import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBxndeTGu3tTwI8UVhjZG1cBJkzNdaIsbM',
  authDomain: 'pirataria-a9464.firebaseapp.com',
  databaseURL: 'https://pirataria-a9464.firebaseio.com',
  storageBucket: 'pirataria-a9464.appspot.com',
  messagingSenderId: '591610907219'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
